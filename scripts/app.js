function analyzeMood() {
  const moodText = document.querySelector("textarea")?.value || "";
  if (moodText.trim() === "") {
    alert("يرجى كتابة شعورك أولاً.");
    return;
  }
  alert("تم تحليل المزاج: " + moodText);
}

function editScent() {
  const scentName = prompt("أدخل اسم الرائحة الجديدة:");
  if (scentName) {
    alert("تم تعديل الرائحة إلى: " + scentName);
  }
}

function renamePerfume() {
  const newName = prompt("أدخل اسم جديد للعطر:");
  if (newName) {
    alert("تم تحديث اسم العطر إلى: " + newName);
  }
}

function scentAnalysis() {
  alert("تحليل شم قيد التنفيذ...");
}

function shareMood() {
  const moodText = document.querySelector("textarea")?.value || "";
  if (navigator.share) {
    navigator.share({
      title: "Fragrance Your Mood",
      text: "شعوري الآن: " + moodText,
      url: window.location.href
    }).catch(() => alert("حدث خطأ أثناء المشاركة."));
  } else {
    alert("المشاركة غير مدعومة على هذا الجهاز.");
  }
}

function orderWhatsApp() {
  const message = encodeURIComponent("مرحباً، أرغب بطلب عطر حسب مزاجي.");
  window.open("https://wa.me/your-number?text=" + message, "_blank");
}

function showRecommendations() {
  alert("اقتراحات العطور بناءً على مزاجك ستظهر هنا قريباً.");
}
