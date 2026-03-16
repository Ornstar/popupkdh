(function () {
  if (document.getElementById("popup-kudahoki-wrap")) return;

  // inject keyframe animation
  var style = document.createElement("style");
  style.innerHTML = `
  @keyframes kudahokiFloat{
    0%{transform:translateY(0)}
    50%{transform:translateY(-14px)}
    100%{transform:translateY(0)}
  }`;
  document.head.appendChild(style);

  var wrap = document.createElement("div");
  wrap.id = "popup-kudahoki-wrap";
  wrap.style.position = "fixed";
  wrap.style.inset = "0";
  wrap.style.display = "flex";
  wrap.style.alignItems = "center";
  wrap.style.justifyContent = "center";
  wrap.style.zIndex = "99999999";
  wrap.style.padding = "20px";
  wrap.style.fontFamily = "Poppins,Arial,sans-serif";
  wrap.style.background = "rgba(0,0,0,.65)";

  var box = document.createElement("div");
  box.style.position = "relative";
  box.style.width = "100%";
  box.style.maxWidth = "420px";
  box.style.padding = "0 18px 22px";
  box.style.color = "#ffd76a";
  box.style.textAlign = "center";
  box.style.borderRadius = "26px 6px 26px 6px";
  box.style.border = "1px solid rgba(255,210,120,.65)";
  box.style.background = "radial-gradient(circle at 50% 30%, #2b1a00 0%, #120a00 45%, #000000 85%)";
  box.style.boxShadow = "0 10px 22px rgba(0,0,0,.85), 0 0 12px rgba(255,190,0,.25)";
  box.style.fontWeight = "700";
  box.style.overflow = "hidden";
  box.style.animation = "kudahokiFloat 4.5s ease-in-out infinite";

  box.innerHTML = `
    <a href="#" id="popup-kudahoki-close" style="
      position:absolute;
      top:10px;
      right:10px;
      width:34px;
      height:34px;
      border-radius:50%;
      border:1.5px solid #ffd76a;
      background:linear-gradient(180deg,#ff3c3c,#a80000);
      color:#fff;
      font-size:18px;
      display:flex;
      align-items:center;
      justify-content:center;
      text-decoration:none;
      box-shadow:0 4px 10px rgba(0,0,0,.7);
      z-index:5;
    ">×</a>

    <div style="
      overflow:hidden;
      border-radius:26px 6px 14px 14px;
      margin:0 -18px 16px;
      background:#1a1000;
    ">
      <img src="https://plcl.me/images/nP9Uw.jpg" style="
        width:100%;
        height:auto;
        display:block;
        object-fit:cover;
        filter:contrast(1.05) saturate(1.05);
      ">
    </div>

    <div style="
      font-size:17px;
      margin-bottom:6px;
      letter-spacing:.5px;
      color:#ffe49a;
      line-height:1.4;
    ">
      KLAIM BONUS & BUTUH BANTUAN ?
    </div>

    <a href="https://goviplink.live/tele-official-kudahoki88" target="_blank" style="
      display:inline-block;
      margin:4px auto 12px;
      padding:9px 24px;
      border-radius:999px;
      border:1px solid rgba(255,215,120,.55);
      background:linear-gradient(180deg,#fff0b8,#ffcf3c,#d89200);
      color:#111;
      font-size:14px;
      letter-spacing:.5px;
      text-decoration:none;
      box-shadow:0 4px 10px rgba(0,0,0,.45);
      font-weight:700;
    ">
      HUBUNGI ADMIN
    </a>

    <div style="
      width:72%;
      height:1px;
      margin:10px auto 14px;
      background:linear-gradient(to right, transparent, #ffd76a, transparent);
    "></div>

    <div style="
      text-align:left;
      font-size:11px;
      line-height:1.85;
      color:#ffd76a;
      max-width:330px;
      margin:0 auto 14px;
    ">
      • SITUS BOLA & SLOT RESMI TERPERCAYA DI ASIA<br>
      • SERVER STABIL & ANTI BLOKIR<br>
      • TUJUAN BERMAIN LEBIH AMAN<br>
      • MENGHINDARI PENIPUAN ATAU PHISHING<br>
      • MENDAPATKAN LINK RESMI KUDAHOKI88
    </div>

    <div style="
      margin:0 auto 14px;
      padding:13px 12px;
      max-width:320px;
      border-radius:14px;
      border:1px solid rgba(255,215,120,.38);
      background:rgba(255,180,0,.05);
      box-shadow:inset 0 0 10px rgba(255,215,120,.04);
    ">
      <div style="font-size:12px;margin-bottom:7px;color:#ffe49a;line-height:1.5;">
        CARI KAMI MELALUI GOOGLE DENGAN MUDAH
      </div>

      <div style="font-size:12px;margin-bottom:9px;color:#ffe49a;line-height:1.5;">
        KETIK NAMA SITUS KAMI DI GOOGLE :
      </div>

      <div style="
        max-width:230px;
        margin:auto;
        padding:9px 10px;
        border-radius:6px;
        background:#fff7e6;
        color:#000;
        font-size:14px;
        letter-spacing:.5px;
        box-shadow:inset 0 1px 3px rgba(0,0,0,.12);
      ">
        »» KUDAHOKI88 ««
      </div>
    </div>

    <div style="
      font-size:13px;
      margin-top:2px;
      letter-spacing:.4px;
      color:#ffe49a;
    ">
      PILIHAN SITUS TERBAIK SEPANJANG MASA
    </div>
  `;

  wrap.appendChild(box);
  document.body.appendChild(wrap);

  document.getElementById("popup-kudahoki-close").onclick = function (e) {
    e.preventDefault();
    wrap.remove();
  };

})();
