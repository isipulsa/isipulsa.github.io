(()=>{var sn=Object.defineProperty;var ft=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(n,e)=>(typeof require<"u"?require:n)[e]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var Xt=(t,n)=>()=>(t&&(n=t(t=0)),n);var qt=(t,n)=>{for(var e in n)sn(t,e,{get:n[e],enumerable:!0})};var Qt={};qt(Qt,{createButton:()=>p,disableGestureZoom:()=>ht,formatDisplayInput:()=>Zt,hideLoadingModal:()=>Y,isOnLoginPage:()=>st,normalizeInput:()=>V,normalizeRupiah:()=>j,preventTextSelectionAndContextMenu:()=>yt,productCommand:()=>P,setupAutoScrollInput:()=>At,setupInputTujuanListener:()=>Tt,setupPageShowHandler:()=>vt,setupRefreshButtons:()=>bt,setupTogglePassword:()=>_,setupVisibilityHandler:()=>kt,showLoadingModal:()=>X,showToast:()=>f,updateProgress:()=>J});function p(t,n){let e=document.createElement("button");return e.textContent=t,e.style.margin="0.25rem",e.addEventListener("click",n),e}function f(t,n="error",e=3e3){let o=document.getElementById("toast");if(!o)return;let a="\u26A0\uFE0F";o.classList.remove("success","error"),n==="success"?(a="\u2705",o.classList.add("success")):o.classList.add("error"),o.innerHTML=`
        <div class="toast-icon">${a}</div>
        <div class="toast-message">${t}</div>
    `,o.classList.add("show"),it&&clearTimeout(it),it=setTimeout(()=>{o.classList.remove("show"),it=null},e)}function j(t){return t&&parseInt(String(t).replace(/[^0-9]/g,""),10)||0}function V(t){return t?t.replace(/\D/g,""):""}function Zt(t){return t?t.replace(/\D/g,"").replace(/(.{4})(?=.)/g,"$1-"):""}function _(){let t=document.getElementById("togglePass"),n=document.getElementById("paswote");t.addEventListener("click",()=>{n.type==="password"?(n.type="text",t.textContent="\u{1F648}"):(n.type="password",t.textContent="\u{1F441}")})}function yt(){document.addEventListener("selectstart",t=>{t.target.id!=="inputTujuan"&&t.preventDefault()}),document.addEventListener("contextmenu",t=>{t.target.id!=="inputTujuan"&&t.preventDefault()})}function ht(){document.addEventListener("gesturestart",t=>{t.preventDefault()})}function X(){document.getElementById("loadingModal").style.display="flex",J(0)}function Y(){document.getElementById("loadingModal").style.display="none"}function J(t){let n=document.getElementById("loginProgress"),e=document.getElementById("loginProgressText");n&&e&&(n.value=t,e.textContent=t+"%")}function P(t){return localStorage.getItem("tipe_akun")==="SP"?`harga.${t}x`:`harga.${t}`}function kt(t,n,e){document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(t()?console.log("\u23F8\uFE0F Skip cek server karena masih di halaman login"):(console.log("\u{1F504} App kembali ke foreground, cek server..."),n("S"),e()))})}function vt(t,n){window.addEventListener("pageshow",e=>{e.persisted&&(t()?console.log("\u23F8\uFE0F Skip cek server karena masih di halaman login"):(console.log("\u{1F504} App pageshow (Safari/iOS), cek server..."),n()))})}function st(){let t=document.getElementById("formLogin");return t&&t.style.display!=="none"}function At(){document.addEventListener("focusin",t=>{(t.target.tagName==="INPUT"||t.target.tagName==="TEXTAREA")&&setTimeout(()=>{t.target.scrollIntoView({behavior:"smooth",block:"center"})},300)})}function bt(){document.querySelectorAll(".refreshBtn").forEach(t=>{t.addEventListener("click",()=>{console.log("\u{1F504} Refresh button clicked, reloading..."),window.location.reload()})})}function Tt(){let t=document.getElementById("inputTujuan");t&&t.addEventListener("input",()=>{let n=t.selectionStart,e=V(t.value),o=0;for(let l=0;l<n;l++)/\d/.test(t.value[l])&&o++;let a=Zt(e);t.value=a;let d=0,m=0;for(;d<a.length&&m<o;)/\d/.test(a[d])&&m++,d++;t.setSelectionRange(d,d)})}var it,E=Xt(()=>{it=null});var He={};qt(He,{db:()=>Ct,onValue:()=>M.onValue,push:()=>M.push,ref:()=>M.ref,set:()=>M.set});var Me,$e,M,En,Re,fo,Ct,Dt=Xt(()=>{Me=ft("https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js"),$e=ft("https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js"),M=ft("https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js"),En={apiKey:"AIzaSyD6HY-9A-vtf_fv11SK3WxKElHKGQvU4Sg",authDomain:"istanapayment-aedab.firebaseapp.com",projectId:"istanapayment-aedab",storageBucket:"istanapayment-aedab.firebasestorage.app",messagingSenderId:"930279412253",appId:"1:930279412253:web:e607079fef82854a6becf4",measurementId:"G-7W562SKYFV"},Re=(0,Me.initializeApp)(En),fo=(0,$e.getAnalytics)(Re),Ct=(0,M.getDatabase)(Re)});E();function te(){let t=document.querySelectorAll(".toggleThemeBtn"),n=document.documentElement,e=document.getElementById("theme-color"),o={light:"#ffffff",dark:"#121212"},a=localStorage.getItem("theme");a?n.setAttribute("data-theme",a):(a=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",n.setAttribute("data-theme",a),localStorage.setItem("theme",a));function d(){let m=n.getAttribute("data-theme"),l=o[m]||"#ffffff";t.forEach(i=>{let r=i.querySelector(".akun-icon")||i;r.textContent=m==="dark"?"\u2600\uFE0F":"\u{1F319}"}),e.setAttribute("content",l)}t.forEach(m=>{m.addEventListener("click",()=>{let i=n.getAttribute("data-theme")==="dark"?"light":"dark";n.setAttribute("data-theme",i),localStorage.setItem("theme",i),d()})}),d()}E();function ee(t){let n=t.getElementsByTagName("body");if(n.length>0){let e=n[0].textContent;if(console.log("[DEBUG] body:",e),!e.includes("Yth."))return!0;let o=e.match(/Yth\.\s+([^-]+)-\s*([A-Z0-9]+)/),a=o?o[1].trim():"tidak diketahui",d=o?o[2].trim():"tidak diketahui";localStorage.setItem("nama_agen",a),localStorage.setItem("kode_agen",d);let m=e.match(/Saldo\s(-?[\d.]+)/),l=e.match(/Proses\s([\d.]+)/),i=e.match(/Trx\s([\d.]+)/i),r=e.match(/Bonus\s([\d.]+)/),s=e.match(/Poin\s([\d.]+)/i),g=e.match(/Pemakaian\s([\d.]+)/i),k=m?m[1]:"-",u=l?l[1]:"-",y=i?i[1]:"-",h=r?r[1]:"-",b=s?s[1]:"-",I=g?g[1]:"-",w=e.match(/Grup\s+([A-Z0-9]+)/i);if(w){let A=w[1].toUpperCase();localStorage.setItem("tipe_akun",A),console.log("[DEBUG] tipe_akun tersimpan:",A)}document.getElementById("saldoDisplay").innerHTML=`
            <header style="
                margin-bottom:0.5rem;
                display:grid; 
                grid-template-columns: 1fr 1fr; 
                text-align:center;
                gap:0.5rem;
            ">
                <div>\u{1F464} <strong>${a}</strong></div>
                <div>\u{1F194} <strong>${d}</strong></div>
            </header>
            <div style="
                display:grid; 
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
                gap:0.5rem;
            ">
                <div>\u{1F4B0} <strong>Saldo:</strong> ${k}</div>
                <div>\u2699\uFE0F <strong>Proses:</strong> ${u}</div>
                <div>\u{1F4CA} <strong>Jml TRX:</strong> ${y}</div>
                <div>\u{1F381} <strong>Bonus:</strong> ${h}</div>
                <div>\u2B50 <strong>Poin:</strong> ${b}</div>
                <div>\u{1F4C5} <strong>Terpakai:</strong> ${I}</div>
            </div>
        `}return!0}function D({title:t="",message:n="",buttons:e=[],source:o=""}){let a=document.getElementById("modalOverlay"),d=document.getElementById("modalHeader"),m=document.getElementById("modalMessage"),l=document.getElementById("modalButtons"),i=document.getElementById("modalCloseBtn");d.innerHTML=t,m.innerHTML=n,a.style.display="flex",window.modalTerbuka=!0,window.modalSumber=o,history.pushState({modal:!0},null,location.href),l.innerHTML="",t==="Koneksi Terputus"||t==="Transaksi Sedang Diproses"||t==="Info Tagihan BPJS Kesehatan"||t==="Pembayaran Berhasil"||t==="Info Tagihan PLN"?i.style.display="none":i.style.display="block",e.forEach(r=>{let s=document.createElement("button");s.textContent=r.text,s.className=r.className||"modal-ok",r.disabled?(s.disabled=!0,s.style.opacity="0.6",s.style.cursor="not-allowed"):s.onclick=()=>{a.style.display="none",window.modalTerbuka=!1,window.modalSumber=null,r.onClick&&r.onClick()},l.appendChild(s)}),i.onclick=()=>{a.style.display="none",window.modalTerbuka=!1,window.modalSumber==="showHargaItem"&&Promise.resolve().then(()=>(E(),Qt)).then(({showToast:r})=>{r("Transaksi dibatalkan","error")}),window.modalSumber=null}}function lt(t,n,e,o,a=""){D({title:t,message:n,source:a,buttons:[{text:"OK",className:"modal-ok",onClick:()=>{window.modalTerbuka=!1,window.modalSumber=null,e&&e()}},{text:"Cancel",className:"modal-cancel",onClick:()=>{window.modalTerbuka=!1,window.modalSumber=null,o&&o()}}]})}var ln="dXNlcjFAcHVsc2EuZHBkbnMub3Jn",rt=null,rn="cHVsc2EuZHBkbnMub3Jn",Q=atob(rn);function dn(){return atob(ln)}function c(t,n=dn()){if(!L)return;let e=$msg({to:n,type:"chat"}).c("body").t(t);L.send(e),console.log(`Pesan terkirim ke ${n}: ${t}`)}function tt(t){return function(n){let e=n.getElementsByTagName("body")[0];if(e){let o=Strophe.getText(e).trim();t&&typeof t=="function"&&t(o,n)}return!0}}function It(){rt&&clearTimeout(rt);let t=!1,n=tt(e=>{e.startsWith("Yth")&&(t=!0,clearTimeout(rt))});L&&L.addHandler(n,null,"message","chat"),rt=setTimeout(()=>{t||(console.warn("\u26A0\uFE0F Tidak ada respon dari server!"),D({title:"Koneksi Terputus",message:'<div style="text-align:center;">Server tidak merespon. Silakan tekan Refresh untuk mencoba kembali.</div>',buttons:[{text:"Refresh",className:"modal-info",onClick:()=>window.location.reload()}]}))},2e3)}E();var U=document.getElementById("inputTujuan"),B=document.getElementById("operatorDisplay"),C=document.getElementById("extraButtons"),ne=document.getElementById("clearInput"),cn={Tsel:["0811","0812","0813","0851","0852","0853","0821","0822","0823","0824"],Isat:["0814","0815","0816","0855","0856","0857","0858"],Axis:["083"],"By.U":["085155","085156","085157","085158","085154","085159","08512"],"Token Listrik":["01","04","05","06","07","09","1","2","3","4","5","6","7","8","9","001","020","03"],Smar:["088"],Tri:["089"],XL:["0817","0818","0819","0859","0878","0877"]};function mn(t){return t.startsWith("628")?"0"+t.slice(2):t}function un(t){let n="",e=mn(t),o=Object.entries(cn).sort((a,d)=>{let m=Math.max(...a[1].map(i=>i.length));return Math.max(...d[1].map(i=>i.length))-m});for(let[a,d]of o)for(let m of d)if(e.startsWith(m))return a;return n}function ae(){let t=V(U.value.trim());if(!t){B.textContent="",U.classList.remove("with-operator"),C.innerHTML="";return}let n=un(t);n&&n!=="Token Listrik"?(B.textContent=n,U.classList.add("with-operator")):(B.textContent="",U.classList.remove("with-operator")),C.innerHTML=""}U.addEventListener("input",()=>{ae(),Et()});function Et(){ne.style.display=U.value?"block":"none"}ne.addEventListener("click",()=>{U.value="",ae(),Et(),U.focus()});Et();E();var wt=!1,St="";function xt(t){wt=t}function oe(t){St=t}var et=document.getElementById("extraButtons"),pn=document.getElementById("inputTujuan");function ie(t){wt||(et.innerHTML=""),et.style.display="block",et.className="harga-list";let n=t.split(`
`).map(o=>o.trim()).filter(o=>o),e=!1;n.forEach(o=>{let a=o.split("=");if(a.length>=3){let d=a[0].trim(),m=a[1].trim(),l=a[2].replace(";","").trim();if(/\[K\]|\[G\]/.test(l)||!/^\d+([.,]\d+)?$/.test(l))return;if(!e){let r=document.createElement("div");r.className="menu-item harga-item header-item",r.style.display="flex",r.style.justifyContent="space-between",r.style.alignItems="center",r.style.padding="0.5rem 1rem",r.style.borderBottom="1px solid #ccc",r.innerHTML=`
                <span style="font-weight:bold; color:var(--pico-primary); min-width:50px;">Kode</span>
                <span style="flex:1; margin-left:1rem; margin-right:1rem; font-weight:bold;">Deskripsi</span>
                <span style="font-weight:bold; color:var(--pico-success); min-width:60px; text-align:right;">Harga</span>
            `,et.appendChild(r),e=!0}let i=document.createElement("div");i.className="menu-item harga-item",i.style.display="flex",i.style.justifyContent="space-between",i.style.alignItems="center",i.style.padding="0.5rem 1rem",i.innerHTML=`
            <span style="font-weight:bold; color:var(--pico-primary); min-width:50px;">${d}</span>
            <span style="flex:1; margin-left:1rem; margin-right:1rem;">${m}</span>
            <span style="font-weight:bold; color:var(--pico-success); min-width:60px; text-align:right;">Rp${l}</span>
        `,i.addEventListener("click",()=>{let r=pn.value.trim(),s=r;["Pulsa","Paket Data","Paket Nelpon & SMS","Nominal Bebas"].includes(St)&&r.startsWith("628")&&(s="0"+r.substring(2));let g=`
                <table class="detail-table-laporan-modal">
                    <tr><td>Kode Produk</td><td>${d}</td></tr>
                    <tr><td>Deskripsi Produk</td><td>${m}</td></tr>
                    <tr><td>Harga Modal</td><td>Rp${l}</td></tr>
                    <tr><td>Nomor Tujuan</td><td>${s}</td></tr>
                </table>
                <div style="font-weight:bold; color:red; text-align:center;">
                    Pastikan Saldo Anda Mencukupi!
                </div>`;lt("KONFIRMASI TRANSAKSI",g,()=>{c(`${d}.${s}`),c("S")},()=>{f("Transaksi dibatalkan","error")},"showHargaItem")}),et.appendChild(i)}})}E();E();function se(t,n,e){if(!e||e==="Unknown"){f("Nomor Tujuan Tidak Dikenali untuk Pulsa");return}let o=localStorage.getItem("tipe_akun");t.style.display="block",n.textContent=e,e==="Tsel"?(t.appendChild(p("Pulsa Reguler",()=>c(P("t")))),t.appendChild(p("Tambah Masa Aktif",()=>c(P("tmat"))))):e==="Isat"?(t.appendChild(p("Pulsa Reguler",()=>c(P("i")))),t.appendChild(p("Tambah Masa Aktif",()=>c(P("tmai"))))):e==="XL"?(t.appendChild(p("Pulsa Reguler",()=>c(P("x")))),t.appendChild(p("Tambah Masa Aktif",()=>c(P("tmax"))))):e==="Axis"?(t.appendChild(p("Pulsa Reguler",()=>c(P("a")))),t.appendChild(p("Tambah Masa Aktif",()=>c(P("tmaa"))))):e==="Tri"?(t.appendChild(p("Pulsa Reguler",()=>c(P("tr")))),t.appendChild(p("Tambah Masa Aktif",()=>c(P("tmatri"))))):e==="Smar"&&t.appendChild(p("Pulsa Reguler",()=>c(P("s"))))}E();function le(t,n,e){if(!e||e==="Unknown"){f("Nomor Tujuan Tidak Dikenali untuk Paket Data");return}t.style.display="block",n.textContent=e,e==="Tsel"?(t.appendChild(p("1 Bulan",()=>c("harga.td"))),t.appendChild(p("Jawa Timur",()=>c("harga.jtm"))),t.appendChild(p("Jawa Tengah",()=>c("harga.jtg"))),t.appendChild(p("Jawa Barat",()=>c("harga.jbr")))):e==="Isat"?(t.appendChild(p("Freedom Internet",()=>c("harga.if"))),t.appendChild(p("Freedom Unlimited",()=>c("harga.iu"))),t.appendChild(p("Freedom Mini",()=>c("harga.im")))):e==="XL"?(t.appendChild(p("Xtra Combo Flex",()=>c("harga.xcf"))),t.appendChild(p("XL Mini",()=>c("harga.xm")))):e==="Axis"?(t.appendChild(p("1 Bulan",()=>c("harga.bro"))),t.appendChild(p("Axis Mini",()=>c("harga.am")))):e==="Tri"?(t.appendChild(p("AON",()=>c("harga.aon"))),t.appendChild(p("Happy",()=>c("harga.hap")))):e==="Smar"&&(t.appendChild(p("Unlimited Harian",()=>c("harga.suh"))),t.appendChild(p("Smartfren Unlimited",()=>c("harga.sun"))),t.appendChild(p("Smartfren Mini",()=>c("harga.sd"))))}E();function re(t,n,e){if(!e||e==="Unknown"){f("Nomor Tujuan Tidak Dikenali untuk Paket Nelpon");return}t.style.display="block",n.textContent=e,e==="Tsel"?t.appendChild(p("Telkomsel Nelpon",()=>c("harga.tn"))):e==="Isat"?t.appendChild(p("Indosat Nelpon",()=>c("harga.in"))):e==="XL"?t.appendChild(p("XL Nelpon",()=>c("harga.xn"))):e==="Axis"?t.appendChild(p("Axis Nelpon",()=>c("harga.an"))):e==="Tri"&&t.appendChild(p("Tri Nelpon",()=>c("harga.trn")))}E();var gn=document.getElementById("inputTujuan");function de(t,n,e){t.style.display="block",n.textContent=e,t.appendChild(p("Cek Nama Pemilik",()=>c("cektoken."+gn.value))),t.appendChild(p("Beli Token Listrik",()=>c(P("p"))))}E();var dt=document.getElementById("inputTujuan");function ce(t,n){if(console.log(n),!n||n==="Unknown"){f("Nomor Tujuan Tidak Dikenali untuk Nominal Bebas");return}xt(!0);let e=document.createElement("div");e.className="wrapper-input";let o=document.createElement("div");o.className="row-input";let a=document.createElement("select");a.className="select-provider",["--Pilih--","Telkomsel","Dana","Gopay","ShopeePay"].forEach(u=>{if(u==="Telkomsel"&&n.toLowerCase()!=="tsel")return;let y=document.createElement("option");y.value=u==="--Pilih--"?"":u,y.textContent=u,a.appendChild(y)});let m=document.createElement("div");m.className="input-nominal-wrapper";let l=document.createElement("span");l.textContent="Rp";let i=document.createElement("input");i.type="text",i.placeholder="Masukkan nominal",i.className="input-nominal",i.inputMode="numeric",i.pattern="[0-9]*",i.autocomplete="off",i.style.padding="0 0 0 0.5rem",i.style.margin="0 -0.5rem 0 0",i.disabled=!0;let r=document.createElement("div");r.style.color="red",r.style.fontSize="12px",r.style.margin="4px 0",r.style.display="none";let s=document.createElement("div");s.className="nama-pemilik",s.textContent="\u2013",s.style.display="none";let g=document.createElement("button");g.textContent="Kirim",g.className="btn-kirim",g.disabled=!0;function k(){g.disabled=!a.value||!i.value||r.style.display==="block"}a.addEventListener("change",()=>{if(!a.value){i.disabled=!0,i.value="",r.style.display="none",g.disabled=!0,s.style.display="none";return}i.disabled=!1;let u="";a.value==="Dana"&&(u="d."),a.value==="Gopay"&&(u="gp."),a.value==="ShopeePay"&&(u="sp."),u&&c(u+dt.value)}),i.addEventListener("input",()=>{let u=i.value.replace(/[^\d]/g,"");if(!u){i.value="",r.style.display="none",k();return}i.value=new Intl.NumberFormat("id-ID").format(u);let y=parseInt(u,10);a.value==="Telkomsel"?y<2e3||y>2e5?(r.textContent="Nominal Telkomsel minimal 2.000 dan maksimal 200.000",r.style.display="block"):y%1e3!==0?(r.textContent="Nominal Telkomsel hanya boleh kelipatan 1.000",r.style.display="block"):r.style.display="none":(a.value==="Dana"||a.value==="Gopay"||a.value==="ShopeePay")&&(y<1e4||y>1e6)?(r.textContent="Nominal minimal 10.000 dan maksimal 1.000.000",r.style.display="block"):r.style.display="none",k()}),g.addEventListener("click",()=>{if(!a.value){a.focus(),f("Pilih provider/dompet terlebih dahulu","error");return}if(!i.value){i.focus(),f("Masukkan nominal terlebih dahulu","error");return}if(!dt.value){dt.focus(),f("Masukkan nomor tujuan terlebih dahulu","error");return}let u=parseInt(i.value.replace(/\./g,""),10),y=a.value,h=0,b=localStorage.getItem("tipe_akun");b==="SP"?a.value==="Telkomsel"?h=u+850:a.value==="Dana"?h=u+150:a.value==="Gopay"?h=u+550:a.value==="ShopeePay"&&(h=u+600):a.value==="Telkomsel"?h=u+1e3:(a.value==="Dana"||a.value==="Gopay"||a.value==="ShopeePay")&&(h=u+1250);let I=dt.value,w=`
    <table class="detail-table-laporan-modal">
        <tr><td>Provider</td><td>${y} Rp${new Intl.NumberFormat("id-ID").format(u)}</td></tr>
        <tr><td>Harga Modal</td><td>Rp${new Intl.NumberFormat("id-ID").format(h)}</td></tr>
        <tr><td>Nomor Tujuan</td><td>${I}</td></tr>
    </table>
    <div style="font-weight:bold; color:red; text-align:center;">
        Pastikan Saldo Anda Mencukupi!
    </div>`;lt("KONFIRMASI TRANSAKSI",w,()=>{if(xt(!1),a.value==="Telkomsel"){let A=Math.floor(u/1e3);b==="SP"?c(`kirim.xtelkomsel.${I}.${A}`):c(`kirim.telkomsel.${I}.${A}`)}else a.value==="Dana"?c(`kirim.dana.${I}.${u}`):a.value==="ShopeePay"?c(`kirim.shopee.${I}.${u}`):a.value==="Gopay"&&c(`kirim.gopay.${I}.${u}`)},()=>{f("Transaksi dibatalkan","error")})}),o.appendChild(a),o.appendChild(m),m.appendChild(l),m.appendChild(i),e.appendChild(o),e.appendChild(r),e.appendChild(s),e.appendChild(g),t.appendChild(e),window.addEventListener("updateNamaDompet",u=>{let{nama:y}=u.detail;a.value&&(s.textContent=`${y}`,s.style.display="block",s.style.background=getComputedStyle(document.documentElement).getPropertyValue("--flash-color"),setTimeout(()=>{s.style.background="var(--bg-color)"},1e3))})}E();function me(t,n,e){t.style.display="block",n.textContent=e,t.appendChild(p("Dana",()=>c("harga.d"))),t.appendChild(p("Shopee Pay",()=>c("harga.sp"))),t.appendChild(p("Gopay",()=>c("harga.gp"))),t.appendChild(p("Ovo",()=>c("harga.o"))),t.appendChild(p("Grab",()=>c("harga.gr"))),t.appendChild(p("LinkAja",()=>c("harga.la"))),t.appendChild(p("Mandiri E-Money",()=>c("harga.em"))),t.appendChild(p("BNI TapCash",()=>c("harga.bnitap"))),t.appendChild(p("BRI Bizzi",()=>c("harga.brizzi"))),t.appendChild(p("Maxim",()=>c("harga.max")))}E();function ue(t,n,e){t.style.display="block",n.textContent=e,t.appendChild(p("Free Fire",()=>c("harga.ff"))),t.appendChild(p("Mobile Legends",()=>c("harga.ml"))),t.appendChild(p("PUBG Mobile",()=>c("harga.pm"))),t.appendChild(p("Point Blank",()=>c("harga.pb")))}E();var ka=document.getElementById("inputTujuan");function pe(t,n,e){t.style.display="block",n.textContent=e,t.appendChild(p("Nex Parabola",()=>c("harga.nex"))),t.appendChild(p("K-Vision",()=>c("harga.kv"))),t.appendChild(p("Jawara Vision",()=>c("harga.mnc")))}E();var fn=document.getElementById("inputTujuan");function ge(t,n,e){t.style.display="block",n.textContent=e,t.appendChild(p("Cek Tagihan Listrik",()=>c("cpln."+fn.value)))}E();var yn=document.getElementById("inputTujuan");function fe(t,n,e){t.style.display="block",n.textContent=e,t.appendChild(p("Cek Tagihan BPJS Kesehatan",()=>c("cbpjsks."+yn.value)))}E();var hn=document.getElementById("inputTujuan");function ye(t,n,e){t.style.display="block",n.textContent=e,t.appendChild(p("Cek Tagihan Indihome",()=>c("cindihome."+hn.value)))}var Lt=document.getElementById("menuGrid"),he=tt(t=>{ie(t)});function ke(){let t=[{name:"Pulsa",emoji:"\u{1F4F1}"},{name:"Paket Data",emoji:"\u{1F310}"},{name:"Paket Nelpon & SMS",emoji:"\u{1F4DE}"},{name:"Token Listrik",emoji:"\u26A1"},{name:"Nominal Bebas",emoji:"\u270D\uFE0F"},{name:"Dompet Digital",emoji:"\u{1F4B3}"},{name:"Games",emoji:"\u{1F3AE}"},{name:"Paket TV",emoji:"\u{1F4FA}"},{name:"Bayar Listrik",emoji:"\u{1F4A1}"},{name:"Bayar BPJS",emoji:"\u{1F3E5}"},{name:"Bayar IndiHome",emoji:"\u{1F4E1}"}];Lt&&(Lt.innerHTML="",t.forEach(n=>{let e=document.createElement("div");e.className="menu-item",e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="center",e.style.cursor="pointer";let o=document.createElement("span");o.textContent=n.emoji,o.style.fontSize="2rem",o.style.marginBottom="0.5rem";let a=document.createElement("p");a.textContent=n.name,a.style.margin="0",e.appendChild(o),e.appendChild(a),Lt.appendChild(e),e.addEventListener("click",()=>kn(n))}))}function kn(t){if(oe(t.name),!U.value.trim()){f("Masukkan nomor tujuan terlebih dahulu","error"),U.focus();return}C.innerHTML="";let n=B.textContent;t.name==="Pulsa"?se(C,B,n):t.name==="Paket Data"?le(C,B,n):t.name==="Paket Nelpon & SMS"?re(C,B,n):t.name==="Token Listrik"?de(C,B,n):t.name==="Nominal Bebas"?ce(C,n):t.name==="Dompet Digital"?me(C,B,n):t.name==="Games"?ue(C,B,n):t.name==="Paket TV"?pe(C,B,n):t.name==="Bayar Listrik"?ge(C,B,n):t.name==="Bayar BPJS"?fe(C,B,n):t.name==="Bayar IndiHome"?ye(C,B,n):f("Menu belum siap","error");let e=document.getElementById("homeDisplay");e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function ve(t,n,e){window.laporanTerbuka=!0,n.innerHTML="";let o=document.createElement("div");o.style.display="flex",o.style.flexDirection="column",o.style.alignItems="center",o.style.marginBottom="0.5rem";let a=document.createElement("div");a.textContent="Laporan Transaksi",a.style.fontWeight="bold",a.style.fontSize="1.1rem",a.style.marginBottom="0.3rem",o.appendChild(a);let d=document.createElement("div");d.style.display="flex",d.style.justifyContent="space-between",d.style.alignItems="center",d.style.width="100%";let m=document.createElement("div");m.className="laporan-tanggal-text",m.style.fontWeight="bold",m.textContent=t;let l=document.createElement("div");l.style.display="flex",l.style.gap="0.3rem",l.style.alignItems="center";let i=document.createElement("button");i.textContent="\u{1F4C5}",i.style.fontSize="1.6rem",i.style.border="none",i.style.background="transparent",i.style.cursor="pointer",i.addEventListener("click",()=>{i.disabled=!0,setTimeout(()=>{i.disabled=!1},3e3);let s=document.createElement("div");s.id="datepickerBackdrop";let g=document.createElement("div");g.id="datepickerModal";let k=document.createElement("input");document.body.appendChild(s),document.body.appendChild(g);function u(){g.remove(),s.remove(),window.datepickerTerbuka=!1}window.datepickerTerbuka=!0,history.pushState({datepicker:!0},null,location.href);let y=new Date,h=y.getFullYear(),b=y.getMonth(),I=y.getDate();flatpickr(k,{defaultDate:y,minDate:new Date(h,b,1),maxDate:new Date(h,b,I),inline:!0,appendTo:g,onChange:function(w){if(!w.length)return;let v=w[0].getDate();window.tanggalSekarang=v,c(`laporan.${v}`),u()}})});let r=document.createElement("button");r.innerHTML="\u{1F504}",r.style.fontSize="1.6rem",r.style.cursor="pointer",r.style.border="none",r.style.background="transparent",r.style.padding="0",r.style.margin="0",r.style.outline="none",r.addEventListener("click",()=>{r.disabled=!0,Nt(),setTimeout(()=>{r.disabled=!1},3e3)}),l.appendChild(i),l.appendChild(r),d.appendChild(m),d.appendChild(l),o.appendChild(d),n.appendChild(o)}E();E();var Ae={T10:"PULSA 10.000",T20:"PULSA 20.000",X25:"PULSA 25.000",I50:"PULSA 50.000",S100:"PULSA 100.000"};async function be(t,n,e){try{let o="PRODUK DIGITAL";/^pln/i.test(t.kode)?o="TAGIHAN LISTRIK":/^p/i.test(t.kode)?o="TOKEN LISTRIK":/^td/i.test(t.kode)?o="PAKET DATA TELKOMSEL":/^if/i.test(t.kode)?o="PAKET DATA INDOSAT":/^tr/i.test(t.kode)?o="PULSA TRI":/^i/i.test(t.kode)?o="PULSA INDOSAT":/^s/i.test(t.kode)?o="PULSA SMARTFREN":/^x/i.test(t.kode)?o="PULSA XL":/^a/i.test(t.kode)?o="PULSA AXIS":/^t(?!d)/i.test(t.kode)&&(o="PULSA TELKOMSEL");let a=/^pln/i.test(t.kode)?3e3:0,d=e+a,m=localStorage.getItem("nama_agen")||"",l=18,i=["ID PELANGGAN","NAMA","TARIF/DAYA","JUMLAH KWH","HARGA","ADMIN","TOTAL HARGA"],s=document.createElement("canvas").getContext("2d");s.font=`${l}px monospace`;let g=0;i.forEach(T=>{let K=s.measureText(T).width;K>g&&(g=K)});let k=Math.ceil(g)+10,u=m.length*(l*.6),y=Math.sqrt(u**2+(l*2)**2),h=Math.ceil(y),b=h/2,I=h/2,w=`
<svg xmlns="http://www.w3.org/2000/svg" width="${h}" height="${h}">
  <g transform="rotate(-45, ${b}, ${I})">
    <text x="10" y="${I}" font-size="${l}" font-family="monospace"
          fill="black" fill-opacity="0.12">
      ${m}
    </text>
  </g>
</svg>`,A=encodeURIComponent(w),v=(T,K)=>`
      <div class="kv-row">
        <div class="kv-label">${T}</div>
        <div class="kv-colon">:</div>
        <div class="kv-value">${K??""}</div>
      </div>`,S="";if(o==="TOKEN LISTRIK"){let T=t.sn.split("/"),K=T[0]||"",W=(T[1]||"").trim(),at=T[2]&&T[3]?`${T[2]}/${T[3]}`:T[2]||"",pt=T[4]||"";S=`
      <div style="display:flex; justify-content:space-between; font-size:${l}px; margin-bottom:6px;">
        <div style="text-align:left;">TGL: ${n}</div>
        <div style="text-align:right;">JAM: ${t.waktu}</div>
      </div>

      <div style="text-align:center; font-weight:bold; font-size:25px; margin:6px 0;">
        -- STRUK BUKTI PEMBELIAN --
      </div>
      <div style="text-align:center; font-weight:bold; font-size:25px; margin-bottom:6px;">TOKEN LISTRIK</div>
      <hr style="border:1px solid black; margin:6px 0;">

      ${v("ID PELANGGAN",t.tujuan)}
      ${v("NAMA",W)}
      ${v("TARIF/DAYA",at)}
      ${v("JUMLAH KWH",pt)}

      <div style="text-align:center; margin-top:8px; font-weight:bold;">---- RINCIAN PEMBAYARAN ----</div>

      ${v("HARGA",`Rp${e.toLocaleString("id-ID")}`)}
      ${v("ADMIN",`Rp${a.toLocaleString("id-ID")}`)}
      ${v("<strong>TOTAL HARGA</strong>",`<strong>Rp${d.toLocaleString("id-ID")}</strong>`)}
      <div style="text-align:center; margin:10px 0; font-weight:bold;">-------- KODE TOKEN --------</div>
      <div style="text-align:center; font-size:28px; font-weight:bold; white-space:pre-line; margin:10px 0;">${K}</div>
      <hr style="border:1px solid black; margin:8px 0;">

      <div style="text-align:center; font-size:18px;">SIMPANLAH STRUK INI</div>
      <div style="text-align:center; font-size:18px;">SEBAGAI BUKTI PEMBELIAN ANDA</div>
      <div style="text-align:center; font-size:18px;">TERIMA KASIH</div>
      `}else if(o==="TAGIHAN LISTRIK"){let T={};t.sn.split("@").forEach(gt=>{let[Vt,_t]=gt.split("=");Vt&&_t&&(T[Vt.trim()]=_t.trim())});let K=t.tujuan||"-",W=T.AMA||"-",at=T.TD||"-",pt=T.PTAG||"-",an=T.JBLN||"-",on=T.SM||"-",Wt=parseInt(T.ADM||"0",10),Yt=parseInt(T.DENDA||"0",10),Ft=parseInt(T.TTAG||"0",10),ot=gt=>"Rp"+Number(gt).toLocaleString("id-ID");S=`
      <div style="display:flex; justify-content:space-between; font-size:${l}px; margin-bottom:6px;">
        <div style="text-align:left;">TGL: ${n}</div>
        <div style="text-align:right;">JAM: ${t.waktu}</div>
      </div>

      <div style="text-align:center; font-weight:bold; font-size:25px; margin:6px 0;">
        -- STRUK PEMBAYARAN TAGIHAN --
      </div>
      <div style="text-align:center; font-weight:bold; font-size:25px; margin-bottom:6px;">TAGIHAN LISTRIK</div>
      <hr style="border:1px solid black; margin:6px 0;">

      ${v("ID PELANGGAN",K)}
      ${v("NAMA",W)}
      ${v("TARIF/DAYA",at)}
      ${v("PERIODE TAGIHAN",`${pt} (${an} Bulan)`)}
      ${v("STAND METER",on)}

      <div style="text-align:center; margin-top:8px; font-weight:bold;">---- RINCIAN PEMBAYARAN ----</div>

      ${v("TAGIHAN",ot(Ft-Wt-Yt))}
      ${v("ADMIN",ot(Wt))}
      ${v("DENDA",ot(Yt))}
      ${v("<strong>TOTAL TAGIHAN</strong>",`<strong>${ot(Ft)}</strong>`)}

      <hr style="border:1px solid black; margin:8px 0;">
      <div style="text-align:center; font-size:18px;">SIMPANLAH STRUK INI</div>
      <div style="text-align:center; font-size:18px;">SEBAGAI BUKTI PEMBAYARAN ANDA</div>
      <div style="text-align:center; font-size:18px;">TERIMA KASIH</div>
    `}else{let T=Ae[t.kode]||t.kode,K="NOMINAL";if(/PAKET DATA/i.test(o)&&(K="DESKRIPSI"),/PULSA/i.test(o)){let W=t.kode.match(/(\d+)$/);W&&(T=`PULSA ${(parseInt(W[1],10)*1e3).toLocaleString("id-ID")}`)}S=`
  <div style="display:flex; justify-content:space-between; font-size:${l}px; margin-bottom:6px;">
    <div style="text-align:left;">TGL: ${n}</div>
    <div style="text-align:right;">JAM: ${t.waktu}</div>
  </div>

  <div style="text-align:center; font-weight:bold; font-size:25px; margin:6px 0 0 0;">-- STRUK BUKTI PEMBELIAN --</div>
  <div style="text-align:center; font-weight:bold; font-size:25px; margin-bottom:6px;">${o}</div>
  <hr style="border:1px solid black; margin:6px 0;">

  ${v("NOMOR HP",t.tujuan)}
  ${v(K,T)}
  ${v("SN",t.sn)}

  <div style="text-align:center; margin-top:8px; font-weight:bold;">---- RINCIAN PEMBAYARAN ----</div>

  ${v("HARGA",`Rp ${e.toLocaleString("id-ID")}`)}
  ${v("ADMIN",`Rp ${a.toLocaleString("id-ID")}`)}
  ${v("<strong>TOTAL HARGA</strong>",`<strong>RP ${d.toLocaleString("id-ID")}</strong>`)}

  <hr style="border:1px solid black; margin:8px 0;">
  <div style="text-align:center; font-size:18px;">SIMPANLAH STRUK INI</div>
  <div style="text-align:center; font-size:18px;">SEBAGAI BUKTI PEMBELIAN ANDA</div>
  <div style="text-align:center; font-size:18px;">TERIMA KASIH</div>
  `}let N=document.createElement("div");N.innerHTML=`
      <style>
        .struk { font-family: monospace; font-size:${l}px; width:450px; color:#000; padding:20px; }
        /* grid: [label column] [colon column] [value column] */
        .struk .kv-row { display: grid; grid-template-columns: ${k}px 12px 1fr; column-gap:8px; align-items:start; margin:2px 0; }
        .struk .kv-label { text-align:left; white-space:nowrap; }
        .struk .kv-colon { text-align:left; }
        .struk .kv-value { text-align:left; white-space:pre-wrap; word-break:break-word; }
      </style>

      <div class="struk" style="background: #fff url('data:image/svg+xml,${A}') repeat; background-size: ${h*.6}px ${h*.6}px;">
        ${S}
      </div>
    `,document.body.appendChild(N);let R=await html2canvas(N.querySelector(".struk"),{scale:2,backgroundColor:"#ffffff"});document.body.removeChild(N);let G=R.toDataURL("image/jpeg"),H=await(await fetch(G)).blob(),O=new File([H],"struk-transaksi.jpeg",{type:"image/jpeg"});navigator.canShare&&navigator.canShare({files:[O]})?await navigator.share({title:"Struk Transaksi",text:"Berikut struk transaksi Anda",files:[O]}):navigator.share?await navigator.share({title:"Struk Transaksi",text:`STRUK BUKTI PEMBELIAN
Jenis Produk : ${o}
TGL: ${n} ${t.waktu}
NOMOR : ${t.tujuan}
SN : ${t.sn}
HARGA : Rp${e.toLocaleString("id-ID")}
ADMIN : Rp${a.toLocaleString("id-ID")}
TOTAL : Rp${d.toLocaleString("id-ID")}
SIMPANLAH STRUK INI SEBAGAI BUKTI PEMBELIAN ANDA
TERIMA KASIH`}):f("Web Share API tidak didukung di browser ini.","error")}catch(o){console.error(o),f("Batal membagikan struk.","error")}}var Te={xcf1:24e3,td2:32e3,xcf1a:18e3},vn=["t","i","a","x","s","tr","b","p","d","sp","gp","o","gr","la","em","bnitap","brizzi","max"];function Ie(t){let n=t+1500,e=500;return Math.ceil(n/e)*e}function Ee(t,n){if(!t)return Ie(n);let e=t.toLowerCase();if(Te[e])return Te[e];for(let o of vn)if(e.startsWith(o)){let a=e.slice(o.length);return/^\d+$/.test(a)?(parseInt(a,10)+3)*1e3:n}return Ie(n)}E();var ct=null;async function An(){ct=await(await(await(await navigator.bluetooth.requestDevice({filters:[{services:["000018f0-0000-1000-8000-00805f9b34fb"]}]})).gatt.connect()).getPrimaryService("000018f0-0000-1000-8000-00805f9b34fb")).getCharacteristic("00002af1-0000-1000-8000-00805f9b34fb")}async function x(t){ct||await An(),ct&&await ct.writeValue(t)}async function q(t){let e=new TextEncoder("utf-8").encode(t+`
\r`);await x(e)}function we(t="-",n=32){return t.repeat(n)+`
`}function Se(t,n,e=32){let o=t.length+n.length;if(o>=e)return t+" "+n;let a=e-o;return t+" ".repeat(a)+n}function Pt(t,n,e=32){let o=t.padEnd(13," ")+": RP",a=n.toLocaleString("id-ID");return Se(o,a,e)}function bn(t){let n=t.split("-"),e=n.slice(0,3).join("-"),o=n.slice(3).join("-");return[e,o].filter(Boolean).join(`
`)}async function xe(t,n,e){let o=new TextEncoder("utf-8"),a=new Uint8Array([27,33,48]),d=new Uint8Array([27,69,1]),m=new Uint8Array([27,69,0]),l=new Uint8Array([27,33,16]),i=new Uint8Array([27,33,32]),r=new Uint8Array([27,33,0]),s=new Uint8Array([27,97,0]),g=new Uint8Array([27,97,1]),k="PRODUK DIGITAL";/^pln/i.test(t.kode)?k="TAGIHAN LISTRIK PASCABAYAR":/^p/i.test(t.kode)?k="TOKEN LISTRIK":/^td/i.test(t.kode)?k="PAKET DATA":/^tr/i.test(t.kode)?k="PULSA TRI":/^i/i.test(t.kode)?k="PULSA INDOSAT":/^s/i.test(t.kode)?k="PULSA TFREN":/^x/i.test(t.kode)?k="PULSA XL":/^a/i.test(t.kode)?k="PULSA AXIS":/^t(?!d)/i.test(t.kode)&&(k="PULSA TELKOMSEL");let u=/^pln/i.test(t.kode)?3e3:0,y=e+u,h=localStorage.getItem("nama_agen")||"";try{if(k==="TOKEN LISTRIK"){let b=t.sn.split("/"),I=b[0]||"",w=bn(I),A=b[1]?.trim()||"",v=b[2]&&b[3]?`${b[2]}/${b[3]}`:"",S=b[4]||"";await q(Se(`TGL: ${n}`,`JAM: ${t.waktu}`,32)),await x(g),await x(d),await x(o.encode(`
-- STRUK BUKTI PEMBELIAN --
`)),await x(o.encode(`TOKEN LISTRIK
`)),await x(s),await x(m),await q(`${we("_",32)}
ID PELANGGAN : ${t.tujuan}
NAMA         : ${A}
TARIF/DAYA   : ${v}
JUMLAH KWH   : ${S}`),await x(g),await x(o.encode(`
-- RINCIAN PEMBAYARAN --
`)),await x(s),await q(Pt("HARGA",e,32)+`
`+Pt("ADMIN",u,32)),await x(d),await q(Pt("TOTAL HARGA",y,32)),await x(m),await x(g),await x(o.encode(`
---------- KODE TOKEN ----------

`)),await x(a),await x(o.encode(w+`
`)),await x(r),await q(`${we("_",32)}
SIMPANLAH STRUK INI
SEBAGAI BUKTI PEMBELIAN ANDA
TERIMA KASIH


`)}else await q(`
${h}
${n} ${t.waktu}
`),await x(g),await x(o.encode(`-- STRUK BUKTI PEMBELIAN --
`)),await x(o.encode(k+`
`)),await x(s),`${t.tujuan}${t.kode}${t.sn}${e.toLocaleString("id-ID")}${u.toLocaleString("id-ID")}${y.toLocaleString("id-ID")}`;f("Struk berhasil dikirim ke printer thermal","success")}catch{f("Batal Print","error")}}function Le(t){let n=document.getElementById("hargaJualInput");if(!n)return t;let e=n.textContent.replace(/[^\d]/g,"");return parseInt(e||"0",10)||t}async function Ne(t,n){let e=j(t.harga),o=t.kode?t.kode.toLowerCase():"",a=Ee(o,e),d=()=>a-e,m="hargaJualInput",l=`<table class="detail-table-laporan-modal">
<tr><td>Waktu Pengisian</td><td>${n} ${t.waktu}</td></tr>
<tr><td>Kode Produk</td><td>${t.kode}</td></tr>
<tr><td>Nomor Tujuan</td><td>${t.tujuan}</td></tr>
<tr><td>Serial Number</td><td>${t.sn}</td></tr>
<tr><td>Status Transaksi</td><td>${t.status}</td></tr>
</table>
<table class="detail-table-laporan-modal">
<tr><td>Harga Modal</td><td>Rp${e.toLocaleString("id-ID")}</td></tr>
<tr><td>Saran Harga Jual</td><td><span id="editHarga" style="cursor:pointer;">\u270F\uFE0F </span><span id="${m}">Rp${a.toLocaleString("id-ID")}</span></td></tr>
<tr><td>Keuntungan</td><td id="keuntungan">Rp${d().toLocaleString("id-ID")}</td></tr>
</table>`,r=["-","NA","N/A","n/a","N.A","Update","UPDATE"].includes((t.sn||"").trim());D({title:"DETAIL TRANSAKSI",message:l,buttons:[{text:"\u{1F5BC}\uFE0F Bagikan",className:"modal-share",onClick:()=>be(t,n,Le(a)),disabled:r},{text:"\u{1F4DD} Komplain",className:"modal-complain",onClick:()=>{let g=`Mohon bantu cek transaksi berikut:

Tanggal : ${n} jam ${t.waktu}
Kode Produk : ${t.kode}
Tujuan : ${t.tujuan}
Serial Number : ${t.sn}
Status : ${t.status}
Terima kasih.
`,u=`https://wa.me/6283100100190?text=${encodeURIComponent(g)}`;window.open(u,"_blank")}},{text:"\u{1F5A8}\uFE0F Print",className:"modal-print",onClick:()=>xe(t,n,Le(a)),disabled:r}]});let s=document.getElementById("editHarga");s.onclick=()=>{s.style.display="none";let g=document.getElementById(m),k=a;g.innerHTML=`<input id="inputHargaInline" type="text" value="${k.toLocaleString("id-ID")}" style="padding:0; margin:0; width:80px; height:1.2em; line-height:1.2em; border:1px solid #ccc; vertical-align:middle; text-align:right;"><span id="btnSimpanInline" style="cursor:pointer; margin-left:4px;">\u2705</span><span id="btnBatalInline" style="cursor:pointer; margin-left:4px;">\u274C</span>`;let u=document.getElementById("inputHargaInline");u.addEventListener("keydown",y=>{y.key==="Enter"?(y.preventDefault(),document.getElementById("btnSimpanInline").click()):y.key==="Escape"&&document.getElementById("btnBatalInline").click()}),u.addEventListener("input",()=>{let y=u.selectionStart,h=u.selectionEnd,b=u.value.replace(/\D/g,"");if(b){let I=parseInt(b,10).toLocaleString("id-ID"),w=u.value,A=I.length-w.length;u.value=I,u.setSelectionRange(y+A,h+A)}else u.value=""}),document.getElementById("btnSimpanInline").onclick=()=>{let y=u.value.replace(/\D/g,""),h=parseFloat(y);!isNaN(h)&&h>0?(a=h,g.textContent="Rp"+a.toLocaleString("id-ID"),document.getElementById("keuntungan").textContent="Rp"+(a-e).toLocaleString("id-ID")):(f("Harga tidak valid!","error"),g.textContent="Rp"+a.toLocaleString("id-ID")),s.style.display="inline"},document.getElementById("btnBatalInline").onclick=()=>{g.textContent="Rp"+a.toLocaleString("id-ID"),s.style.display="inline"}}}function Bt(t,n,e){if(!t||!n)return;let o=document.createElement("div");o.className="laporan-item",o.style.display="grid",o.style.gridTemplateColumns="1fr auto",o.style.alignItems="flex-start",o.style.padding="0.25rem 0.5rem",o.style.borderBottom="1px solid #ddd",o.style.gap="0.5rem",o.style.fontSize="0.85rem";let a=document.createElement("div");a.innerHTML=`
    <div><b>${t.kode}</b> \u2192 ${t.tujuan} \u2192 Rp ${t.harga}</div>
    <div class="sn-text">SN: ${t.sn}</div>
`;let d=document.createElement("div");d.style.display="flex",d.style.flexDirection="column",d.style.alignItems="flex-end",d.style.whiteSpace="nowrap",d.innerHTML=`
        <div style="font-weight:bold">${t.waktu}</div>
        <div>${t.status}</div>
    `;let m=t.status.toLowerCase();m.includes("sukses")?o.classList.add("success"):m.includes("gagal")||m.includes("timeout")?o.classList.add("failed"):o.classList.add("proses"),o.appendChild(a),o.appendChild(d),n.appendChild(o),o.addEventListener("click",()=>Ne(t,e))}var Be=tt(t=>{In(t)}),Tn=document.getElementById("laporanTransaksiDisplay"),Ce=null;function De(){let t=document.getElementById("navRiwayat"),n=new Date;Ce=new Date(n.toLocaleString("en-US",{timeZone:"Asia/Jakarta"})).getDate(),t.addEventListener("click",Nt)}function Nt(){c(`laporan.${Ce}`),Tn.style.display="block"}window.laporanTerbuka=!1;function Pe(t){let n=/^#(\S+)\s+ke\s+(\S+)\s+Rp\.([\d.]+)\s+#([\s\S]*?)\s*@(\d{2}:\d{2})\s+Status=([^;]+);?$/i,e=t.match(n);if(!e)return null;let o=e[4].trim();if(o===""&&(o="-"),e[1]==="CEKTOKEN"&&o.includes("NAMA =")){let a=o.match(/NAMA\s*=\s*.*?NO\.METER\s*=\s*.*?TARIF DAYA\s*=\s*.*?(?=$|UNTUK)/s);a&&(o=a[0].replace(/\s+/g," ").trim())}return{kode:e[1],tujuan:e[2],harga:e[3],sn:o,waktu:e[5],status:e[6].trim()}}function In(t){let n=document.getElementById("laporanHeader"),e=document.getElementById("laporanList");if(!e)return;let a=t.split(`
`).map(i=>i.trim()).filter(i=>i);if(window.laporanTerbuka&&!a.some(i=>i.startsWith("Tgl")))return;let d=a.find(i=>i.startsWith("Tgl"))||"",m=d.replace(/^Tgl\.\s*/,"").replace("N/A","").trim();if(!window.headerSudahRender)d&&(ve(d,n,e),window.headerSudahRender=!0);else{let i=n.querySelector(".laporan-tanggal-text");i&&(i.textContent=d)}e.innerHTML="";let l="";a.forEach(i=>{if(i.startsWith("Tgl")){if(i.includes("N/A")){let r=i.replace("N/A","").trim(),s=n.querySelector(".laporan-tanggal-text");s&&(s.textContent=r);let g=document.createElement("div");g.textContent="Belum ada transaksi",g.style.textAlign="center",g.style.padding="1rem",g.style.color="#666",e.appendChild(g)}}else if(i.startsWith("#")){if(l=i,i.includes("Status=")){let r=Pe(l);r&&Bt(r,e,m),l=""}}else if(l&&(l+=" "+i,i.includes("Status="))){let r=Pe(l);r&&Bt(r,e,m),l=""}})}E();E();Dt();function Ke(){if(!document.getElementById("catatanHutangDisplay")){let a=document.createElement("article");a.id="catatanHutangDisplay",a.style.display="none",a.innerHTML=`
      <header class="header-catatan">
        <button id="btnBackCatatan" class="btn-back">
          <span class="arrow">\u2190</span>
        </button>
        <h2 class="judul-catatan">Catatan Hutang</h2>
      </header>

      <section class="catatan-body">
        <div id="listHutang" class="list-hutang">
          <div class="loading-hutang">\u23F3 Memuat data hutang...</div>
        </div>
      </section>
    `,document.querySelector("main.container").appendChild(a)}let n=(0,M.ref)(Ct,"hutang"),e=document.getElementById("listHutang"),o=localStorage.getItem("kode_agen");(0,M.onValue)(n,a=>{let d=a.val();if(!d){e.innerHTML=`
        <div class="illustration">\u{1FA99}</div>
        <p class="info-text">Belum ada data hutang tersimpan.</p>
      `;return}let m=Object.entries(d).map(([l,i])=>({id:l,...i})).filter(l=>l.kode_agen===o);if(m.length===0){e.innerHTML=`
        <div class="illustration">\u{1F4ED}</div>
        <p class="info-text">Catatan Hutang Masih Kosong.</p>
      `;return}m.sort((l,i)=>i.timestamp-l.timestamp),e.innerHTML=m.map(l=>`
        <div class="hutang-card ${l.status==="LUNAS"?"hutang-lunas":"hutang-belum"}">
          <div class="hutang-header">
            <h3 class="hutang-deskripsi">${l.deskripsi}</h3>
            <span class="hutang-status">${l.status}</span>
          </div>

          <div class="hutang-info">
            <div><strong>Nomor:</strong> ${l.nomor}</div>
            <div><strong>Kode:</strong> ${l.kode}</div>
            <div><strong>Harga:</strong> Rp ${l.harga}</div>
            <div><strong>Waktu:</strong> ${l.waktu}</div>
          </div>

          <div class="hutang-footer">
            <small>Ref: ${l.snRef}</small>
          </div>
        </div>
      `).join("")})}function je(t){let n=t.getElementsByTagName("body");if(n.length>0){let e=n[0].textContent.trim();if(/^Yth\.\s*AGEN PULSA/i.test(e)&&/(Saldo|Bonus|Poin|Pemakaian)/i.test(e))return!0;if(/Mohon tunggu transaksi sebelumnya selesai/i.test(e)||/masih diproses operator/i.test(e))return f(e,"success",5e3),!0;if(/ke\s+\d+\s+diproses,/i.test(e)&&/Harga\s+/i.test(e)&&/Saldo\s+/i.test(e))return D({title:"Transaksi Sedang Diproses",message:'<div style="text-align:center;">Mohon tunggu sebentar, transaksi Anda sedang kami proses.</div>',buttons:[{text:"OK",className:"modal-ok",onClick:()=>{}},{text:"Cek Riwayat",className:"modal-info",onClick:()=>{let a=document.getElementById("navRiwayat");a&&a.click()}}]}),!0;if(/^CEKTOKEN/i.test(e)&&/NAMA\s*=/i.test(e)){let a=e.match(/NAMA\s*=\s*(.*)/i)?.[1]||"-",d=e.match(/NO\.METER\s*=\s*(.*)/i)?.[1]||"-",m=e.match(/TARIF DAYA\s*=\s*(.*)/i)?.[1]||"-",l=`<table class="detail-table-laporan-modal">
                <tr><td>Nama</td><td>${a}</td></tr>
                <tr><td>No. Meter</td><td>${d}</td></tr>
                <tr><td>Tarif Daya</td><td>${m}</td></tr>
            </table>`;return D({title:"Info Nomor Token Pelanggan",message:l,buttons:[{text:"OK",className:"modal-ok",onClick:()=>{let i=document.getElementById("inputTujuan");c("harga.p"),i&&!i.value.trim()&&(i.value=d,i.dispatchEvent(new Event("input",{bubbles:!0})))}}]}),!0}if((/CEK TAGIHAN PLN/i.test(e)||/^CPLN ke/i.test(e))&&/NAMA=/i.test(e)){let a="-",d=e.match(/CEK TAGIHAN PLN ke\s+(\d+)/i),m=e.match(/CPLN ke\s+(\d+)/i);d?a=d[1]:m&&(a=m[1]);let l=e.match(/SN\/Ref:\s*([^,]+)/i);if(l){let r=l[1].trim().split("@"),s={};r.forEach(v=>{let[S,N]=v.split("=");S&&N&&(s[S.trim()]=N.trim())});let g=s.NAMA||"-",k=s.TD||"-",u=s.JBLN||"-",y=s.PTAG||"-",h=s.TAG||"0",b=s.ADM||"0",I=s.TTAG||"0",w=v=>"Rp"+j(v).toLocaleString("id-ID"),A=`<table class="detail-table-laporan-modal">
                    <tr><td>ID Pelanggan</td><td>${a}</td></tr>
                    <tr><td>Nama</td><td>${g}</td></tr>
                    <tr><td>Tarif Daya</td><td>${k}</td></tr>
                    <tr><td>Jumlah Bulan</td><td>${u} Bulan</td></tr>
                    <tr><td>Periode Tagihan</td><td>${y}</td></tr>
                    <tr><td>Tagihan</td><td>${w(h)}</td></tr>
                    <tr><td>Biaya Admin</td><td>${w(b)}</td></tr>
                    <tr><td>Total Tagihan</td><td>${w(I)}</td></tr>
                </table>`;return D({title:"Info Tagihan PLN",message:A,buttons:[{text:"BAYAR",className:"modal-ok",onClick:()=>{c("pln."+a)}},{text:"CANCEL",className:"modal-cancel",onClick:()=>{f("Pembayaran dibatalkan","error")}}],source:"Info Tagihan PLN"}),!0}}if((/CEK TAGIHAN BPJS/i.test(e)||/CBPJSKS/i.test(e))&&/NAMA=/i.test(e)){let a="-",d=e.match(/CEK TAGIHAN BPJS KESEHATAN ke\s+(\d+)/i),m=e.match(/CBPJSKS ke\s+(\d+)/i);d?a=d[1]:m&&(a=m[1]);let l=e.match(/SN\/Ref:\s*([^,]+)/i);if(l){let r=l[1].trim().split("@"),s={};r.forEach(S=>{let[N,R]=S.split("=");N&&R&&(s[N.trim()]=R.trim())});let g=s.NAMA||"-",k=g.replace(/\s*\([^)]*\)/,"").trim(),u=s.JBLN||"-",y=s.PS||"-",h=s.CB||"-",b=s.TAG||"0",I=s.ADM||"0",w=s.TTAG||"0",A=S=>"Rp"+j(S).toLocaleString("id-ID"),v=`<table class="detail-table-laporan-modal">
            <tr><td>ID Pelanggan</td><td>${a}</td></tr>
            <tr><td>Nama</td><td>${k}</td></tr>
            <tr><td>Jumlah Peserta</td><td>${/\((.*?)\)/.exec(g)?.[1]||"-"}</td></tr>
            <tr><td>Jumlah Bulan</td><td>${u}</td></tr>
            <tr><td>Jumlah KK</td><td>${y}</td></tr>
            <tr><td>Cabang</td><td>${h}</td></tr>
            <tr><td>Tagihan</td><td>${A(b)}</td></tr>
            <tr><td>Biaya Admin</td><td>${A(I)}</td></tr>
            <tr><td>Total Tagihan</td><td>${A(w)}</td></tr>
            </table>`;return D({title:"Info Tagihan BPJS Kesehatan",message:v,buttons:[{text:"BAYAR",className:"modal-ok",onClick:()=>{c("bpjsks."+a)}},{text:"CANCEL",className:"modal-cancel",onClick:()=>{f("Pembayaran dibatalkan","error")}}]}),!0}}if(!/^Tgl\.\s*\d{2}\/\d{2}\/\d{2}/i.test(e)&&(/CEK\s+NAMA\s+(DANA|GOPAY|SHOPEEPAY)/i.test(e)||/CEK\s+NAMA\s+E\s*-\s*WALLET\s+BERHASIL/i.test(e)&&/BILLER\s*=\s*(DANA|GOPAY|SHOPEEPAY)/i.test(e))&&/NAMA\s*=/i.test(e)){let a=e.match(/NAMA\s*=\s*(.*)/i)?.[1]?.trim()||"-";return a=a.replace(/^(DANA|GOPAY|SHOPEEPAY)\s+TOP\s+UP\s+/i,"").trim(),window.dispatchEvent(new CustomEvent("updateNamaDompet",{detail:{nama:a}})),!0}if(/^PLN\s+#\s+BAYAR\s+TAGIHAN\s+PLN/i.test(e)&&/Status:\s*SUKSES/i.test(e)||/^PLN ke\s+\d+/i.test(e)&&/Status:\s*Sukses/i.test(e)){let a=e.match(/PLN(?:\s+#\s+BAYAR\s+TAGIHAN\s+PLN)?\s+ke\s+(\d+)/i),d=a?a[1]:"-",m=e.match(/SN\/Ref:\s*([^,]+)/i),l=e;if(m){let r=m[1].trim().split("@"),s={};r.forEach(S=>{if(!S)return;let N=S.split("=");if(N.length===2){let R=N[0].trim(),G=N[1].trim();if(R==="TD")s[R]=G;else if(G.includes("/"))G.split("/").forEach(H=>{if(H.includes("=")){let[O,T]=H.split("=");s[O.trim()]=T.trim()}else if(H.includes(":")){let[O,T]=H.split(":");s[O.trim()]=T.trim()}else s[R]=H.trim()});else if(G.includes(":")){let[H,O]=G.split(":");s[H.trim()]=O.trim()}else s[R]=G}});let g=s.NAMA||"-",k=s.TD||"-",u=s.JBLN||"-",y=s.PTAG||"-",h=s.ADM||"0",b=s.DENDA||"0",I=s.TTAG||"0",w=s.SM||"-",A=S=>"Rp"+j(S).toLocaleString("id-ID"),v=j(I)-j(h)-j(b);l=`<table class="detail-table-laporan-modal">
                    <tr><td>Jenis Pembayaran</td><td>Tagihan PLN</td></tr>
                    <tr><td>ID Pelanggan</td><td>${d}</td></tr>
                    <tr><td>Nama</td><td>${g}</td></tr>
                    <tr><td>Tarif Daya</td><td>${k}VA</td></tr>
                    <tr><td>Periode Tagihan</td><td>${y} (${u} Bulan)</td></tr>
                    <tr><td>Stand Meter</td><td>${w}</td></tr> <!-- \u2705 Tambahan -->
                    <tr><td>Tagihan</td><td>${A(v)}</td></tr>
                    <tr><td>Biaya Admin</td><td>${A(h)}</td></tr>
                    <tr><td>Denda</td><td>${A(b)}</td></tr>
                    <tr><td>Total Tagihan</td><td>${A(I)}</td></tr>
                </table>`}return D({title:"Pembayaran Berhasil",message:l,buttons:[{text:"OK",className:"modal-ok",onClick:()=>{}},{text:"Cek Riwayat",className:"modal-info",onClick:()=>{let i=document.getElementById("navRiwayat");i&&i.click()}}]}),!0}if(/^BPJSKS\s+#\s+BAYAR\s+BPJS\s+KESEHATAN/i.test(e)&&/Status:\s*SUKSES/i.test(e)){let a=e.match(/KESEHATAN ke\s+(\d+)/i),d=a?a[1]:"-",m=e.match(/SN\/Ref:\s*([^,]+)/i),l=e;if(m){let r=m[1].trim().split("@"),s={};r.forEach(w=>{let[A,v]=w.split("=");A&&v&&(s[A.trim()]=v.trim())});let g=(s.NAMA||"-").replace(/\s*\([^)]*\)/,"").trim(),k=s.JBLN||"-",u=s.PS||"-",y=s.CB||"-",h=s.ADM||"0",b=s.TTAG||"0",I=w=>"Rp"+j(w).toLocaleString("id-ID");l=`<table class="detail-table-laporan-modal">
                    <tr><td>Jenis Pembayaran</td><td>BPJS Kesehatan</td></tr>
                    <tr><td>ID Pelanggan</td><td>${d}</td></tr>
                    <tr><td>Nama</td><td>${g}</td></tr>
                    <tr><td>Jumlah Bulan</td><td>${k} Bulan</td></tr>
                    <tr><td>Jumlah Peserta</td><td>${u} Orang</td></tr>
                    <tr><td>Cabang</td><td>${y}</td></tr>
                    <tr><td>Biaya Admin</td><td>${I(h)}</td></tr>
                    <tr><td>Total Tagihan</td><td>${I(b)}</td></tr>
                    </table>`}return D({title:"Pembayaran Berhasil",message:l,buttons:[{text:"OK",className:"modal-ok",onClick:()=>{}},{text:"",className:"modal-info",onClick:()=>{let i=document.getElementById("navRiwayat");i&&i.click()}}]}),!0}if(/Status:\s*SUKSES/i.test(e)&&/ke\s+\d+/i.test(e)&&/#Harga/i.test(e)){let a=e.match(/pada\s+([\d/:\s]+)/i),d=e.match(/^([A-Z0-9]+)\s*#/i),m=e.match(/ke\s+(\d+)/i),l=e.match(/#\s*([A-Z]+)\s+([0-9A-Z]+)\s+ke/i),i=e.match(/SN\/Ref:\s*([^,]+)/i),r=e.match(/#Harga:\s*([\d.,]+)/i),s=e.match(/Saldo\s*([\d.,]+)/i),g=d?d[1]:"-",k=a?a[1].trim():"-",u=l?(l[1]+" "+l[2]).trim():"-",y=m?m[1].trim():"-",h=i?i[1].replace("/","").trim():"-",b=r?r[1].replace(/[.,]+$/,"").trim():"-",I=s?s[1].replace(/[.,]+$/,"").trim():"-",w=`
        <table class="detail-table-laporan-modal">
            <tr><td>Waktu</td><td>${k}</td></tr>
            <tr><td>Nomor Tujuan</td><td>${y}</td></tr>
            <tr><td>Deskripsi</td><td>${u}</td></tr>
            <tr><td>SN/Ref</td><td>${h}</td></tr>
            <tr><td>Harga Modal</td><td>Rp${b}</td></tr>
            <tr><td>Saldo Akhir</td><td>Rp${I}</td></tr>
        </table>
    `;return D({title:"Transaksi Berhasil",message:w,buttons:[{text:"OK",className:"modal-ok",onClick:()=>{}},{text:"Cek Riwayat",className:"modal-info",onClick:()=>{let A=document.getElementById("navRiwayat");A&&A.click()}},{text:"Catat Hutang",className:"modal-debt",onClick:async()=>{try{let{db:A,ref:v,push:S,set:N}=await Promise.resolve().then(()=>(Dt(),He)),R=localStorage.getItem("kode_agen")||"Unknown",G={waktu:k,kode:g,deskripsi:u,nomor:y,snRef:h,harga:b,kode_agen:R,status:"BELUM LUNAS",timestamp:Date.now()},H=v(A,"hutang"),O=S(H);await N(O,G),f("Data hutang berhasil dicatat","success");let T=document.getElementById("navAkun");T&&(T.click(),document.getElementById("catatanHutangDisplay").style.display="block",document.getElementById("akunDisplay").style.display="none")}catch(A){console.error("Gagal mencatat hutang:",A),f("\u274C Gagal mencatat ke Firebase","error")}}}]}),!0}if(/ke\s+\d+\s+harga\s+[\d.,]+\s+#GAGAL/i.test(e)){let a=e.match(/^([A-Z0-9]+)\s+ke/i),d=e.match(/ke\s+(\d+)/i),m=e.match(/harga\s+([\d.,]+)/i),l=e.match(/Saldo\s+Tetap\s+Rp\s*([\d.,]+)/i),i=a?a[1]:"-",r=d?d[1]:"-",s=m?m[1]:"-",g=l?l[1]:"-",k=`
        <table class="detail-table-laporan-modal">
            <tr><td>Kode Produk</td><td>${i}</td></tr>
            <tr><td>Nomor Tujuan</td><td>${r}</td></tr>
            <tr><td>Harga Modal</td><td>Rp${s}</td></tr>
            <tr><td>Saldo Akhir</td><td>Rp${g}</td></tr>
        </table>
    `;return D({title:"Transaksi Gagal",message:k,buttons:[{text:"OK",className:"modal-ok",onClick:()=>{}},{text:"Komplain",className:"modal-complain",onClick:()=>{let u=`Mohon bantu cek transaksi yang gagal berikut:

Kode Produk : ${i}
Nomor Tujuan : ${r}

Terima kasih.`,h=`https://wa.me/6283100100190?text=${encodeURIComponent(u)}`;window.open(h,"_blank")}}]}),!0}if(!/(?:#?Harga)/i.test(e))return!0;let o="error";(/SUKSES/i.test(e)||/DIPROSES/i.test(e))&&(o="success"),f(e,o,5e3)}return!0}var Mt=document.getElementById("pinOverlay"),z=document.getElementById("pinMessage"),wn=document.querySelectorAll(".pinCircle"),Ge=document.querySelectorAll(".pinPad button"),Sn=document.getElementById("pinBack"),$="",F="check",Ue="";async function Oe(t){let e=new TextEncoder().encode(t),o=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(o)).map(d=>d.toString(16).padStart(2,"0")).join("")}function Je(){return localStorage.getItem("appPin")}Je()?(F="check",z.textContent="Masukkan PIN Anda"):(F="set",z.textContent="Buat PIN Baru 6 Digit");function Rt(){wn.forEach((t,n)=>{t.classList.toggle("filled",n<$.length)})}function $t(){$="",Rt()}function ze(t){Mt.classList.add("fade-out"),Mt.addEventListener("animationend",()=>{Mt.style.display="none",document.querySelector("main.container").style.display="block",t&&t()},{once:!0})}async function Ht(){if(xn(),$.length!==6)return;let t=Je();if(!t)return;await Oe($)===t?ze():(z.textContent="PIN salah, coba lagi",We(),$t())}function We(){z.classList.remove("shake"),z.offsetWidth,z.classList.add("shake")}function xn(){Ge.forEach((t,n)=>{t.style.animationDelay=`${n*.1}s`,t.classList.remove("animated"),t.offsetWidth,t.classList.add("animated")})}Ge.forEach(t=>{t.id!=="pinBack"&&t.addEventListener("click",async()=>{$.length<6&&($+=t.textContent,Rt(),$.length===6&&setTimeout(async()=>{if(F==="check")await Ht();else if(F==="set")Ue=$,F="confirm",z.textContent="Konfirmasi PIN 6 digit",$t();else if(F==="confirm")if($===Ue){let n=await Oe($);localStorage.setItem("appPin",n),z.textContent="PIN berhasil dibuat!",setTimeout(()=>ze(),2e3)}else z.textContent="PIN tidak cocok, coba lagi",F="set",We(),$t()},200))})});Sn.addEventListener("click",()=>{$=$.slice(0,-1),Rt()});E();var L=null,Kt=!1,Ln="wss://pulsa.dpdns.org:7443/ws",Ye=document.getElementById("saldoDisplay"),Fe=document.getElementById("homeDisplay"),Ve=document.getElementById("navBottom"),jt=null;function Ut(t){console.log("[XMPP]",t)}function Nn(t,n){let e=localStorage.getItem("appPin");if(!e){console.error("PIN belum ada, tidak bisa enkripsi");return}let o=CryptoJS.AES.encrypt(t,e).toString(),a=CryptoJS.AES.encrypt(n,e).toString();localStorage.setItem("xmpp_jid",o),localStorage.setItem("xmpp_pass",a)}function Gt(){let t=localStorage.getItem("appPin");if(!t)return null;let n=localStorage.getItem("xmpp_jid"),e=localStorage.getItem("xmpp_pass");if(!n||!e)return null;try{let o=CryptoJS.AES.decrypt(n,t).toString(CryptoJS.enc.Utf8),a=CryptoJS.AES.decrypt(e,t).toString(CryptoJS.enc.Utf8);return{jid:o,pass:a}}catch(o){return console.error("Gagal dekripsi:",o),null}}function Ot(){localStorage.removeItem("xmpp_jid"),localStorage.removeItem("xmpp_pass")}function mt(t,n,e=null){if(Kt){Ut("Login temporarily locked, please wait...");return}L=new Strophe.Connection(Ln),L.connect(t+"/",n,function(o){switch(console.log("[DEBUG] Strophe status:",o),o){case Strophe.Status.CONNECTING:console.log("Connecting..."),J(50);break;case Strophe.Status.CONNFAIL:console.log("Connection failed."),J(100),Y();break;case Strophe.Status.DISCONNECTING:console.log("Disconnecting...");break;case Strophe.Status.DISCONNECTED:console.log("Disconnected. Coba reconnect..."),J(0),Y();let a=Gt();a?(X(),console.log("\u{1F504} Auto-relogin pakai credential tersimpan..."),setTimeout(()=>{mt(a.jid,a.pass)},1e3)):(Y(),document.getElementById("formLogin").style.display="block",Ye.style.display="none",Fe.style.display="none",Ve.style.display="none",laporanTransaksiDisplay.style.display="none",document.getElementById("akunDisplay").style.display="none");break;case Strophe.Status.CONNECTED:console.log("Connected as "+L.jid),J(100),Y(),jt&&clearInterval(jt),jt=setInterval(()=>{L&&L.connected&&(L.send($pres()),console.log("\u{1F504} Sent keepalive"))},3e4),document.getElementById("akune").value="",document.getElementById("paswote").value="",L.send($pres().c("priority").t("127")),document.getElementById("formLogin").style.display="none",Nn(t,n),!document.getElementById("formLogin").style.display!=="none"&&c("S"),Ye.style.display="block",L.addHandler(ee,null,"message","chat"),L.addHandler(Be,null,"message","chat"),L.addHandler(he,null,"message","chat"),L.addHandler(je,null,"message","chat"),Fe.style.display="block",Ve.style.display="flex",ke(),De(),document.querySelectorAll(".bottom-nav .nav-item").forEach(m=>m.classList.remove("active")),document.getElementById("navBeranda").classList.add("active"),document.getElementById("pinOverlay").style.display="flex",Ht(),window.dispatchEvent(new Event("loginUnlocked")),e&&e();break;case Strophe.Status.AUTHFAIL:console.log("Authentication failed."),Ot(),f(`Login Gagal
Periksa Username dan Password!`,"error"),J(100),Y(),Kt=!0,setTimeout(()=>{Kt=!1,console.log("Login unlocked, you can try again."),window.dispatchEvent(new Event("loginUnlocked"))},5e3);break;case Strophe.Status.ATTACHED:console.log("Attached.");break;case Strophe.Status.ERROR:console.log("Error occurred.");break;default:console.log("Other status: "+o)}})}function Pn(){document.getElementById("akune").value="",document.getElementById("paswote").value=""}function _e(){document.getElementById("formLogin").addEventListener("submit",function(t){t.preventDefault();let n=this.querySelector('button[type="submit"]'),e=document.getElementById("akune").value.toLowerCase(),o=document.getElementById("paswote").value;if(!e||!o){f("Username dan password harus diisi","error");return}n.disabled=!0,n.textContent="Tunggu...";let a=e+"@"+Q;X(),mt(a,o)}),window.addEventListener("loginUnlocked",()=>{let t=document.querySelector('#formLogin button[type="submit"]');t&&(t.disabled=!1,t.textContent="Login")}),window.addEventListener("load",()=>{let t=Gt();console.log("Loaded credentials from localStorage:",t),t&&t.jid&&t.pass?(Ut("Found saved credentials, auto-logging in..."),document.getElementById("akune").value=t.jid.split("@")[0],document.getElementById("paswote").value=t.pass,X(),J(0),mt(t.jid,t.pass,()=>{document.getElementById("loading").style.display="none"})):(document.getElementById("loading").style.display="none",document.getElementById("formLogin").style.display="block")}),document.getElementById("logoutBtn").addEventListener("click",function(){console.log("Manual logout."),L&&(L.disconnect(),Ot()),Pn()})}E();function Xe(){document.getElementById("contactBtn").addEventListener("click",async()=>{if("contacts"in navigator&&"ContactsManager"in window)try{let n=["name","tel"],e={multiple:!1},o=await navigator.contacts.select(n,e);if(!o||o.length===0){console.log("User batal pilih kontak");return}let a=document.getElementById("inputTujuan");if(!a)return;let d=o[0].tel&&o[0].tel[0];if(!d){f("Kontak tidak memiliki nomor telepon.","error");return}a.value=V(d),a.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}catch(n){console.warn("Akses kontak dibatalkan:",n)}else f("Browser Anda tidak mendukung akses kontak.","error")})}function qe(){let t=document.querySelectorAll(".bottom-nav .nav-item");t.forEach(n=>{n.addEventListener("click",()=>{t.forEach(e=>e.classList.remove("active")),n.classList.add("active"),n.id==="navRiwayat"?(console.log("ini navRiwayat"),document.getElementById("laporanTransaksiDisplay").style.display="block",document.getElementById("homeDisplay").style.display="none",document.getElementById("saldoDisplay").style.display="none",document.getElementById("akunDisplay").style.display="none",document.getElementById("catatanHutangDisplay").style.display="none"):n.id==="navBeranda"?(console.log("ini halaman navBeranda"),document.getElementById("homeDisplay").style.display="block",document.getElementById("laporanTransaksiDisplay").style.display="none",document.getElementById("saldoDisplay").style.display="block",document.getElementById("akunDisplay").style.display="none",document.getElementById("catatanHutangDisplay").style.display="none"):n.id==="navAkun"&&(console.log("ini halaman navAkun"),document.getElementById("laporanTransaksiDisplay").style.display="none",document.getElementById("homeDisplay").style.display="none",document.getElementById("saldoDisplay").style.display="none",document.getElementById("akunDisplay").style.display="block",document.getElementById("catatanHutangDisplay").style.display="none")})})}function Ze(){let t=document.getElementById("akunDisplay");t.innerHTML=`
    <div class="akun-list">
      <button id="logoutBtn" class="akun-item">
        <span class="akun-icon">\u{1F4F4}</span>
        <span class="akun-label">Keluar Akun</span>
      </button>
      <button class="akun-item refreshBtn">
        <span class="akun-icon">\u{1F504}</span>
        <span class="akun-label">Refresh Halaman</span>
      </button>
      <button class="akun-item toggleThemeBtn">
        <span class="akun-icon">\u{1F319}</span>
        <span class="akun-label">Tema Gelap/Terang</span>
      </button>
      <button class="akun-item" id="btnCatatanHutang">
        <span class="akun-icon">\u{1F4B0}</span>
        <span class="akun-label">Catatan Hutang</span>
      </button>
      <button class="akun-item" id="btnDownline">
        <span class="akun-icon">\u{1F465}</span>
        <span class="akun-label">Lihat Downline</span>
      </button>
    </div>
  `}function Jt(){let t=document.getElementById("navBottom");if(!t)return;let n=window.visualViewport;function e(){let o=window.innerHeight-n.height-n.offsetTop;o>0?t.style.bottom=o+"px":t.style.bottom="0px"}n.addEventListener("resize",e),n.addEventListener("scroll",e)}function zt(){let t=document.getElementById("toast");if(!t)return;let n=window.visualViewport;function e(){let o=n.height/2+n.offsetTop;t.style.top=o+"px"}n.addEventListener("resize",e),n.addEventListener("scroll",e),e()}document.addEventListener("DOMContentLoaded",()=>{Jt(),zt()});E();function Qe(){let t=document.getElementById("formLogin"),n=document.getElementById("formRegister"),e=document.getElementById("backToLogin"),o=document.getElementById("regUser"),a=document.getElementById("regPass"),d=document.getElementById("regPass2"),m=document.getElementById("regWarning"),l=document.getElementById("passWarning");_(document.getElementById("toggleRegPass"),a),_(document.getElementById("toggleRegPass2"),d),e.addEventListener("click",()=>{n.reset(),m.style.display="none",l.style.display="none",n.style.display="none",t.style.display="block"}),o.addEventListener("input",()=>{let r=o.value;/^[A-Za-z0-9]*$/.test(r)?m.style.display="none":(m.textContent="Username hanya boleh huruf dan angka (tanpa spasi & simbol)!",m.style.display="block")});function i(){a.value&&d.value&&a.value!==d.value?(l.textContent="Konfirmasi password tidak cocok!",l.style.display="block"):l.style.display="none"}a.addEventListener("input",i),d.addEventListener("input",i),n.addEventListener("submit",async r=>{if(r.preventDefault(),!/^[A-Za-z0-9]+$/.test(o.value)){m.textContent="Username hanya boleh huruf dan angka (tanpa spasi & simbol)!",m.style.display="block";return}if(a.value!==d.value){l.textContent="Konfirmasi password tidak cocok!",l.style.display="block";return}try{let s=await fetch("https://pulsa.dpdns.org:5443/api/register",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa("adminkantor@pulsa.dpdns.org:password123")},body:JSON.stringify({user:o.value,host:Q,password:a.value})}),g;try{g=await s.json()}catch{g=await s.text()}if(console.log("Register response:",g),s.ok&&typeof g=="string"&&g.includes("successfully registered")){let k=o.value;f("Akun berhasil dibuat, silakan login!","success");let u="6282316015252",y=`tambahakun ${k}@${Q}/`;window.open(`https://wa.me/${u}?text=${encodeURIComponent(y)}`,"_blank"),n.reset(),n.style.display="none",t.style.display="block",document.getElementById("akune").value=k}else if(g&&g.status==="error"&&g.message){if(g.message.includes("already registered")){let k=o.value;f(`Username ${k} sudah terdaftar, gunakan username lain`,"error",5e3)}else f(g.message,"error");a.value="",d.value=""}else f("Gagal register, coba lagi!","error")}catch(s){console.error(s),f("Terjadi kesalahan koneksi","error")}})}E();var ut=!1,nt=null;function Bn(){f("Tekan sekali lagi untuk keluar","sukses")}function tn(){window.addEventListener("popstate",t=>{let n=document.getElementById("catatanHutangDisplay"),e=document.getElementById("akunDisplay");if(n&&n.style.display==="block"){n.style.display="none",e.style.display="block";return}if(window.modalTerbuka){let o=document.getElementById("modalHeader");if(o&&o.textContent==="Koneksi Terputus"){console.log("\u26D4 Tombol back diabaikan karena modal Koneksi Terputus"),history.pushState({modal:!0},null,location.href);return}window.modalSumber==="showHargaItem"&&f("Transaksi dibatalkan","error"),window.modalSumber==="Info Tagihan PLN"&&f("Pembayaran dibatalkan","error");let a=document.getElementById("modalOverlay");a&&(a.style.display="none",window.modalTerbuka=!1,window.modalSumber=null);return}if(window.datepickerTerbuka){let o=document.getElementById("datepickerModal"),a=document.getElementById("datepickerBackdrop");o&&o.remove(),a&&a.remove(),window.datepickerTerbuka=!1;return}ut?(nt&&clearTimeout(nt),ut=!1):(Bn(),ut=!0,nt&&clearTimeout(nt),nt=setTimeout(()=>{ut=!1},1500),history.pushState({dummy:!0},null,location.href))}),window.addEventListener("load",()=>{history.pushState({first:!0},null,location.href)})}E();function en(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("sw.js").then(t=>{t.onupdatefound=()=>{let n=t.installing;n.onstatechange=()=>{n.state==="installed"&&navigator.serviceWorker.controller&&(f(`Versi baru tersedia
silakan keluar lalu masuk lagi!`,"success"),setTimeout(()=>window.location.reload(),1500))}}}).catch(t=>console.log("Service Worker failed:",t))})}var Z=null;function nn(){let t=document.getElementById("installPwaBtn");t&&(window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),Z=n,t.style.display="block"}),t.addEventListener("click",async()=>{if(!Z)return;t.disabled=!0,t.textContent="\u23F3 Memulai...",Z.prompt();let{outcome:n}=await Z.userChoice;Z=null,n==="accepted"?(t.textContent="\u2705 Terinstal",setTimeout(()=>t.style.display="none",2e3)):(t.textContent="\u{1F4F1} Install Aplikasi",t.disabled=!1)}),window.addEventListener("appinstalled",()=>{Z=null,t.style.display="none"}))}qe();Ze();Ke();en();_();Tt();yt();te();Jt();zt();At();tn();bt();Xe();_e();Qe();kt(st,c,It);vt(st,It);ht();nn();document.addEventListener("click",t=>{t.target.closest("#btnCatatanHutang")&&(document.getElementById("akunDisplay").style.display="none",document.getElementById("catatanHutangDisplay").style.display="block"),t.target.closest("#btnBackCatatan")&&(document.getElementById("catatanHutangDisplay").style.display="none",document.getElementById("akunDisplay").style.display="block")});})();
