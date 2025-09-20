// القائمة الجانبية
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
if(menuBtn && sideMenu){
  menuBtn.addEventListener('click', ()=> {
    sideMenu.classList.toggle('hidden');
  });
}

// زر اللغة
const langBtn = document.getElementById('lang-btn');
if(langBtn){
  langBtn.addEventListener('click', ()=>{
    if(document.documentElement.lang === "ar"){
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
      alert("Language switched to English");
    } else {
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
      alert("تم التبديل إلى العربية");
    }
  });
}

// تحديث السنة
const yearSpan = document.getElementById('year');
if(yearSpan){
  yearSpan.textContent = new Date().getFullYear();
}

// تحليل المزاج
const analyzeBtn = document.getElementById('analyze-btn');
if(analyzeBtn){
  analyzeBtn.addEventListener('click', ()=>{
    const mood = document.getElementById('mood-input').value.toLowerCase();
    let blend = "";
    if(mood.includes("ثقة") || mood.includes("confidence")){
      blend = "Oud 40% + Leather 30% + Amber 30%";
    } else if(mood.includes("راحة") || mood.includes("calm")){
      blend = "Lavender 35% + Musk 25% + Vanilla 20% + Sandalwood 20%";
    } else if(mood.includes("فرح") || mood.includes("happy")){
      blend = "Bergamot 35% + Jasmine 25% + Musk 20% + Citrus 20%";
    } else if(mood.includes("حزن") || mood.includes("sad")){
      blend = "Musk 40% + Cedar 30% + Amber 30%";
    } else {
      blend = "Musk 30% + Vanilla 25% + Amber 25% + Cedar 20%";
    }
    document.getElementById('analysis-result').innerText = "المزيج المقترح: " + blend;
  });
}

// مشاركة
const shareBtn = document.getElementById('share-btn');
if(shareBtn){
  shareBtn.addEventListener('click', async ()=>{
    const text = document.getElementById('analysis-result').innerText;
    if(navigator.share){
      await navigator.share({title:"Fragrance Your Mood", text});
    } else {
      await navigator.clipboard.writeText(text);
      alert("تم نسخ المزيج");
    }
  });
}

// طلب عبر واتساب
const orderBtn = document.getElementById('order-btn');
if(orderBtn){
  orderBtn.addEventListener('click', ()=>{
    const msg = document.getElementById('analysis-result').innerText;
    window.open(`https://wa.me/966573052266?text=${encodeURIComponent(msg)}`);
  });
}
