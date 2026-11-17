// Crypt - a vault that visibly decays. Static site.
// Zero dependencies. Storage is localStorage in the browser only.
// Fake demo data only. Never store a real password or real secret.
const KEY = "crypt-vaults";

const $ = (id) => document.getElementById(id);

function load() {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); }
  catch { return []; }
}
function save(vaults) {
  try {
    localStorage.setItem(KEY, JSON.stringify(vaults));
  } catch (e) {
    alert("This browser will not store the vault. Try another browser.");
  }
}

function stageOf(lifeLeft, now, expiresAt) {
  if (now >= expiresAt || lifeLeft < 0.05) return "ghost";
  if (lifeLeft >= 0.75) return "fresh";
  if (lifeLeft >= 0.50) return "dusty";
  if (lifeLeft >= 0.25) return "cracked";
  return "rotting";
}

const STAGE_LABEL = {
  fresh: "Fresh",
  dusty: "Dusty",
  cracked: "Cracked",
  rotting: "Rotting",
  ghost: "Ghost",
};

function timeLeftText(ms) {
  if (ms <= 0) return "Too late.";
  const s = Math.floor(ms / 1000);
  if (s < 60) return s + " seconds left";
  const m = Math.floor(s / 60);
  if (m < 60) return m + " minutes left";
  const h = Math.floor(m / 60);
  if (h < 24) return h + " hours left";
  const d = Math.floor(h / 24);
  return d + (d === 1 ? " day left" : " days left");
}

function currentVault() {
  const vaults = load();
  return vaults[vaults.length - 1] || null;
}

function render(previewLife) {
  const vaultEl = $("vault");

  // Update the past-vaults list
  const list = $("list");
  list.innerHTML = load().map((x) => {
    const state = x.opened
      ? "Opened"
      : (Date.now() >= x.expiresAt ? "Rotted" : "Sealed");
    return "<li>" + x.name.replace(/</g, "&lt;") + " \u2013 " + state + "</li>";
  }).join("");

  const v = currentVault();
  if (!v) { vaultEl.style.display = "none"; return; }

  vaultEl.style.display = "block";
  const now = Date.now();
  const rawLife = (v.expiresAt - now) / (v.expiresAt - v.createdAt);
  const life = typeof previewLife === "number" ? previewLife : rawLife;
  // For ghost detection use real time, not preview
  const stage = stageOf(life, typeof previewLife === "number" ? 0 : now, v.expiresAt);

  vaultEl.className = "stage-" + stage;

  // Stone vs ghost-shape
  const stoneEl = $("vstone");
  const ghostEl = $("vghost");
  stoneEl.style.display = stage === "ghost" ? "none" : "block";
  ghostEl.style.display = stage === "ghost" ? "block" : "none";

  // Rotting eye
  $("veye").style.display = stage === "rotting" ? "block" : "none";

  $("vstage").textContent = STAGE_LABEL[stage];
  $("vname-show").textContent = v.name;

  // Time left
  if (stage === "ghost") {
    $("vtime").textContent = "Too late.";
  } else if (typeof previewLife === "number") {
    // Show simulated time left based on slider fraction
    const totalMs = v.expiresAt - v.createdAt;
    $("vtime").textContent = timeLeftText(previewLife * totalMs);
  } else {
    $("vtime").textContent = timeLeftText(v.expiresAt - now);
  }

  // Open button: hide on ghost or already opened
  $("open").style.display = (v.opened || stage === "ghost") ? "none" : "inline-block";

  // Secret reveal
  const secretEl = $("secret");
  if (v.opened) {
    secretEl.style.display = "block";
    secretEl.textContent = v.secret;
  } else if (stage === "ghost" && !v.opened) {
    secretEl.style.display = "block";
    secretEl.textContent = "Too late. This secret rotted away.";
  } else {
    secretEl.style.display = "none";
    secretEl.textContent = "";
  }
}

function seal(name, secret, seconds) {
  if (!name.trim() || !secret.trim()) {
    alert("Give the vault a name and a secret first.");
    return;
  }
  const now = Date.now();
  const vaults = load();
  vaults.push({
    id: "v-" + now,
    name: name.trim(),
    secret: secret.trim(),
    createdAt: now,
    expiresAt: now + seconds * 1000,
    opened: false,
  });
  save(vaults);
  $("preview").value = "100";
  render();
}

$("seal").addEventListener("click", () => {
  seal($("vname").value, $("vsecret").value, parseInt($("vexpiry").value, 10));
});

$("sample").addEventListener("click", () => {
  seal("SAMPLE birthday note", "SAMPLE: the cake is in the oven", 604800);
});

$("quick").addEventListener("click", () => {
  seal("SAMPLE quick vault", "SAMPLE: open me fast", 120);
});

$("again").addEventListener("click", () => {
  $("vname").value = "";
  $("vsecret").value = "";
  $("preview").value = "100";
  render();
});

$("open").addEventListener("click", () => {
  const v = currentVault();
  if (!v || v.opened) return;
  const vaults = load();
  const last = vaults[vaults.length - 1];
  if (Date.now() >= last.expiresAt) {
    render();
    return;
  }
  last.opened = true;
  save(vaults);
  render();
});

$("preview").addEventListener("input", (e) => {
  render(parseInt(e.target.value, 10) / 100);
});

// Re-check every 10 seconds when not in preview mode
setInterval(() => {
  if ($("preview").value === "100") render();
}, 10000);

render();
