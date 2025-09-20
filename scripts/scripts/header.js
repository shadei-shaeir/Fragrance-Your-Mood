document.addEventListener("DOMContentLoaded", () => {
  const header = `
    <header>
      <nav class="main-nav">
        <a href="index.html">الرئيسية</a>
        <a href="shop.html">العطور</a>
        <a href="favorites.html">المفضلة</a>
        <a href="reviews.html">المراجعات</a>
        <a href="contact.html">تواصل</a>
        <a href="privacy-policy.html">الخصوصية</a>
        <a href="cart.html">السلة</a>
        <div class="language-switch">
          <button onclick="switchLanguage('ar')">العربية</button>
          <button onclick="switchLanguage('en')">English</button>
        </div>
      </nav>
    </header>
  `;
  document.getElementById("header-placeholder").innerHTML = header;
});
