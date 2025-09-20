function analyzeMood() {
  const moodText = document.querySelector("#mood")?.value || "";
  if (!moodText.trim()) return alert("يرجى كتابة شعورك أولاً.");

  const traits = {
    "قلق": "العصابية",
    "فرح": "الانبساط",
    "تركيز": "الضمير",
    "حب": "التوافق",
    "فضول": "الانفتاح"
  };

  let result = "مزاجك يعكس حالة غير محددة.";
  let trait = null;

  for (const word in traits) {
    if (moodText.includes(word)) {
      trait = traits[word];
      result = `مزاجك يعكس سمة "${trait}"، ننصح بعطر يعزز هذا الشعور.`;
      break;
    }
  }

  alert(result);
  if (trait) suggestNames(trait);
}

function suggestNames(trait) {
  const suggestions = {
    "الانبساط": ["Spark of Joy ✨", "نبض السعادة", "Radiant Bloom"],
    "العصابية": ["Silent Storm 🌫️", "غيمة هادئة", "Velvet Calm"],
    "الانفتاح": ["Mystic Whisper 🌌", "همسة غامضة", "Open Soul"],
    "الضمير": ["Pure Intent 🌿", "نية صافية", "True Essence"],
    "التوافق": ["Harmony Touch 💞", "لمسة انسجام", "Kind Spirit"]
  };

  const names = suggestions[trait] || ["Fragrance One", "عطرك الخاص", "Unique Blend"];
  alert("اقتراحات الأسماء:\n" + names.join("\n"));
}

function editScent() {
  const scentName = prompt("أدخل اسم الرائحة الجديدة:");
  if (scentName) alert("تم تعديل الرائحة إلى " + scentName);
}

function renamePerfume() {
  const newName = prompt("أدخل اسم جديد للعطر:");
  if (newName) alert("تم تحديث اسم العطر إلى " + newName);
}

function scentAnalysis() {
  alert("تحليل مكونات العطر...");
}

function shareMood() {
  const moodText = document.querySelector("#mood")?.value || "";
  if (!moodText.trim()) return alert("يرجى كتابة شعورك قبل المشاركة.");

  if (navigator.share) {
    navigator.share({
      title: "Fragrance Your Mood",
      text: "مزاجي الآن: " + moodText,
      url: window.location.href
    }).catch((e) => alert("حدث خطأ أثناء المشاركة: " + e));
  } else {
    alert("المشاركة غير مدعومة على هذا الجهاز.");
  }
}

function orderWhatsApp() {
  const message = encodeURIComponent("أرغب في طلب هذا العطر");
  window.open("https://wa.me/966573052266?text=" + message);
}

function showRecommendations() {
  alert("عرض التوصيات بناءً على مزاجك الحالي...");
}

function switchLanguage(lang) {
  alert("ميزة تغيير اللغة سيتم تفعيلها قريبًا.");
}

document.addEventListener("scroll", () => {
  document.querySelectorAll(".review-card").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add("visible");
    }
  });
});
function submitContact(event) {
  event.preventDefault();
  alert("تم إرسال رسالتك بنجاح! سنرد عليك قريبًا.");
    }
function toggleHeart(el) {
  el.textContent = el.textContent === "❤️" ? "🤍" : "❤️";
  }
function removeItem(button) {
  const item = button.closest(".cart-item");
  item.remove();
  alert("تم حذف العطر من السلة.");
}
