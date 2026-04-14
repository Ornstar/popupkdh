(function () {
  if (window.__kudahokiPopupLoaded) return;
  window.__kudahokiPopupLoaded = true;

  function initPopup() {
    if (document.getElementById("popup-kudahoki-wrap")) return;
    if (!document.body) return;

    var style = document.createElement("style");
    style.id = "popup-kudahoki-style";
    style.innerHTML = `

@keyframes fadeIn {from {opacity:0} to {opacity:1}}
@keyframes zoomIn {0% {opacity:0; transform:scale(.7) translateY(60px);} 100% {opacity:1; transform:scale(1) translateY(0);}}
@keyframes glowBtn {0%,100% {box-shadow:0 0 0 rgba(255,200,0,0);} 50% {box-shadow:0 0 26px rgba(255,200,0,.9);}}
@keyframes shineMove {0% {left:-120%;} 100% {left:120%;}}

#popup-kudahoki-wrap{
  position:fixed;
  inset:0;
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:2147483647;
  padding:12px;
  background:rgba(0,0,0,.78);
  backdrop-filter: blur(8px);
  animation:fadeIn .4s ease;
}

#popup-kudahoki-box{
  position:relative;
  width:100%;
  max-width:440px;
  padding:14px;
  border-radius:26px;
  border:1px solid rgba(255,200,80,.35);
  background:linear-gradient(180deg,#140900 0%,#0b0400 100%);
  box-shadow:0 30px 80px rgba(0,0,0,.95), inset 0 0 40px rgba(255,200,0,.07);
  text-align:center;
  color:#ffd76a;
  overflow:hidden;
  animation:zoomIn .45s cubic-bezier(.2,.8,.2,1);
}

/* CLOSE FIX (tidak ketutup) */
#popup-kudahoki-close{
  position:absolute;
  top:8px;
  right:8px;
  width:34px;
  height:34px;
  border-radius:50%;
  background:linear-gradient(180deg,#ff4a4a,#c10000);
  color:#fff;
  font-size:18px;
  font-weight:700;
  display:flex;
  align-items:center;
  justify-content:center;
  text-decoration:none;
  cursor:pointer;
  z-index:999;
}

#popup-kudahoki-close:hover{
  transform:rotate(90deg) scale(1.1);
}

/* IMAGE */
#popup-kudahoki-imagewrap{
  margin-top:8px;
}

#popup-kudahoki-imagewrap img{
  width:100%;
  border-radius:18px;
}

/* ===== TEKS TIDAK DIUBAH, HANYA RAPI ===== */

#popup-kudahoki-title{
  font-size:15px;
  font-weight:800;
  margin:12px 0 10px;
  letter-spacing:.4px;
}

#popup-kudahoki-list{
  font-size:12px;
  line-height:1.7;
  margin:10px auto;
  text-align:left;
  max-width:300px;
}

/* BUTTON */
#popup-kudahoki-button{
  display:inline-block;
  min-width:180px;
  padding:10px 20px;
  margin:10px auto 12px;
  border-radius:999px;
  background:linear-gradient(180deg,#fff3bf,#ffcf43,#df9b00);
  color:#17120b;
  text-decoration:none;
  font-size:13px;
  font-weight:800;
  letter-spacing:.4px;
  position:relative;
  overflow:hidden;
  animation:glowBtn 2.5s infinite;
}

#popup-kudahoki-button::before{
  content:'';
  position:absolute;
  top:0;
  left:-120%;
  width:60%;
  height:100%;
  background:linear-gradient(120deg, transparent, rgba(255,255,255,.7), transparent);
  transform:skewX(-25deg);
  animation:shineMove 2.8s infinite;
}

/* GOOGLE BOX */
#popup-kudahoki-googlebox{
  margin-top:10px;
  padding:10px;
  border-radius:12px;
  background:rgba(255,200,0,.04);
  border:1px solid rgba(255,200,0,.12);
}

.kh-line1, .kh-line2{
  font-size:11px;
  opacity:.75;
}

#popup-kudahoki-keyword{
  font-weight:900;
  font-size:14px;
  margin-top:4px;
}

/* FOOTER */
#popup-kudahoki-footer{
  font-size:11px;
  opacity:.7;
  margin-top:10px;
}

    `;

    document.head.appendChild(style);

    var wrap = document.createElement("div");
    wrap.id = "popup-kudahoki-wrap";

    var box = document.createElement("div");
    box.id = "popup-kudahoki-box";

    box.innerHTML = `
      <a href="#" id="popup-kudahoki-close">×</a>

      <div id="popup-kudahoki-imagewrap">
        <img src="http://plcl.me/images/rNkzz.jpg">
      </div>

      <div id="popup-kudahoki-title">KLAIM BONUS & BUTUH BANTUAN ?</div>

      <a id="popup-kudahoki-button" href="https://goviplink.live/tele-official-kudahoki88" target="_blank">
        HUBUNGI ADMIN
      </a>

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

    function closePopup() {
      wrap.style.opacity = "0";
      wrap.style.transform = "scale(.9)";
      setTimeout(() => wrap.remove(), 300);
    }

    document.addEventListener("click", function (e) {
      if (e.target.id === "popup-kudahoki-close" || e.target === wrap) {
        e.preventDefault();
        closePopup();
      }
    });
  }

  window.addEventListener("load", initPopup);
})();
