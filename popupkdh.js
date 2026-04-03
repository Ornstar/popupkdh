(function () {
  if (window.__kudahokiPopupLoaded) return;
  window.__kudahokiPopupLoaded = true;

  function initPopup() {
    if (document.getElementById("popup-kudahoki-wrap")) return;
    if (!document.body) return;

    var style = document.createElement("style");
    style.id = "popup-kudahoki-style";
    style.innerHTML = `
      #popup-kudahoki-wrap,
      #popup-kudahoki-wrap *{
        box-sizing:border-box !important;
        font-family:Poppins,Arial,sans-serif !important;
      }

      #popup-kudahoki-wrap{
        position:fixed;
        inset:0;
        display:flex;
        align-items:center;
        justify-content:center;
        z-index:99999999;
        padding:12px;
        background:rgba(0,0,0,.72);
      }

      #popup-kudahoki-box{
        position:relative;
        width:100%;
        max-width:440px;
        padding:10px 12px 14px;
        border-radius:24px;
        border:1px solid rgba(255,190,60,.35);
        background:linear-gradient(180deg,#140900 0%,#0b0400 100%);
        box-shadow:0 14px 34px rgba(0,0,0,.78), 0 0 18px rgba(255,180,0,.10);
        overflow:hidden;
        text-align:center;
        color:#ffd76a;
      }

      #popup-kudahoki-close{
        position:absolute;
        top:10px;
        right:10px;
        width:32px;
        height:32px;
        border-radius:50%;
        background:linear-gradient(180deg,#ff4a4a,#c10000);
        border:1px solid rgba(255,255,255,.18);
        color:#fff;
        font-size:17px;
        font-weight:700;
        display:flex;
        align-items:center;
        justify-content:center;
        text-decoration:none;
        box-shadow:0 4px 10px rgba(0,0,0,.35);
        z-index:5;
      }

      #popup-kudahoki-imagewrap{
        width:100%;
        max-width:412px;
        aspect-ratio:590/397;
        margin:0 auto 12px;
        border-radius:18px;
        overflow:hidden;
        border:1px solid rgba(255,190,60,.28);
        background:#120900;
        box-shadow:inset 0 0 10px rgba(255,210,120,.04);
      }

      #popup-kudahoki-imagewrap img{
        width:100%;
        height:100%;
        display:block;
        object-fit:cover;
        object-position:center;
        filter:none !important;
        transform:none !important;
        image-rendering:auto !important;
        backdrop-filter:none !important;
        -webkit-backdrop-filter:none !important;
      }

      #popup-kudahoki-title{
        font-size:14px;
        font-weight:800;
        color:#ffe8ae;
        margin-bottom:8px;
        letter-spacing:.2px;
        line-height:1.35;
        text-shadow:0 1px 0 rgba(0,0,0,.35);
      }

      #popup-kudahoki-button{
        display:inline-block;
        min-width:174px;
        padding:9px 20px;
        margin:0 auto 10px;
        border-radius:999px;
        background:linear-gradient(180deg,#fff3bf,#ffcf43,#df9b00);
        border:1px solid rgba(255,215,120,.35);
        color:#17120b;
        text-decoration:none;
        font-size:13px;
        font-weight:800;
        letter-spacing:.3px;
        box-shadow:0 5px 12px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.42);
      }

      #popup-kudahoki-divider{
        width:78%;
        max-width:250px;
        height:1px;
        margin:10px auto 10px;
        background:linear-gradient(to right, transparent, rgba(255,215,106,.75), transparent);
      }

      #popup-kudahoki-list{
        max-width:270px;
        margin:0 auto 10px;
        text-align:left;
        font-size:10px;
        line-height:1.7;
        color:#f5cd61;
        font-weight:700;
      }

      #popup-kudahoki-googlebox{
        max-width:280px;
        margin:0 auto 10px;
        padding:10px 10px 12px;
        border-radius:14px;
        border:1px solid rgba(255,190,60,.25);
        background:linear-gradient(180deg,rgba(255,180,0,.05),rgba(255,180,0,.02));
        box-shadow:inset 0 0 12px rgba(255,210,120,.03);
      }

      #popup-kudahoki-googlebox .kh-line1,
      #popup-kudahoki-googlebox .kh-line2{
        font-size:10px;
        line-height:1.45;
        color:#ffe5a0;
      }

      #popup-kudahoki-googlebox .kh-line1{
        font-weight:800;
        margin-bottom:5px;
      }

      #popup-kudahoki-googlebox .kh-line2{
        font-weight:700;
        margin-bottom:8px;
      }

      #popup-kudahoki-keyword{
        max-width:185px;
        margin:auto;
        padding:8px 10px;
        border-radius:7px;
        background:linear-gradient(180deg,#fffdf7,#efe4ca);
        color:#1a1a1a;
        font-size:12px;
        font-weight:800;
        letter-spacing:.6px;
        box-shadow:inset 0 1px 3px rgba(0,0,0,.10);
      }

      #popup-kudahoki-footer{
        font-size:11px;
        font-weight:800;
        letter-spacing:.25px;
        color:#ffe19a;
        line-height:1.35;
        text-shadow:0 1px 0 rgba(0,0,0,.30);
      }

      @media (max-width: 768px){
        #popup-kudahoki-box{
          max-width:92vw;
          padding:10px 12px 14px;
          border-radius:22px;
        }
        #popup-kudahoki-imagewrap{
          max-width:100%;
        }
      }
    `;

    if (!document.getElementById("popup-kudahoki-style")) {
      document.head.appendChild(style);
    }

    var wrap = document.createElement("div");
    wrap.id = "popup-kudahoki-wrap";

    var box = document.createElement("div");
    box.id = "popup-kudahoki-box";

    box.innerHTML = `
      <a href="#" id="popup-kudahoki-close">×</a>

      <div id="popup-kudahoki-imagewrap">
        <img src="http://plcl.me/images/qVtk2.png" alt="Kudahoki88">
      </div>

      <div id="popup-kudahoki-title">KLAIM BONUS & BUTUH BANTUAN ?</div>

      <a id="popup-kudahoki-button" href="https://goviplink.live/tele-official-kudahoki88" target="_blank" rel="noopener noreferrer">
        HUBUNGI ADMIN
      </a>

      <div id="popup-kudahoki-divider"></div>

      <div id="popup-kudahoki-list">
        • SITUS RESMI TERPERCAYA<br>
        • SERVER STABIL & ANTI BLOKIR<br>
        • BERMAIN LEBIH AMAN & NYAMAN<br>
        • HINDARI LINK PALSU / PHISHING<br>
        • DAPATKAN AKSES RESMI KUDAHOKI88
      </div>

      <div id="popup-kudahoki-googlebox">
        <div class="kh-line1">CARI KAMI DI GOOGLE DENGAN MUDAH</div>
        <div class="kh-line2">KETIK NAMA SITUS KAMI :</div>
        <div id="popup-kudahoki-keyword">»» KUDAHOKI88 ««</div>
      </div>

      <div id="popup-kudahoki-footer">PILIHAN SITUS TERBAIK SEPANJANG MASA</div>
    `;

    wrap.appendChild(box);
    document.body.appendChild(wrap);

    var closeBtn = document.getElementById("popup-kudahoki-close");
    closeBtn.onclick = function (e) {
      e.preventDefault();
      wrap.remove();
    };

    wrap.addEventListener("click", function (e) {
      if (e.target === wrap) wrap.remove();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPopup);
  } else {
    initPopup();
  }
})();
