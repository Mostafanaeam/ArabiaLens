// Full Arab Countries Data (22 Countries) with Bilingual Support
const countriesData = [
  {
    code: "eg",
    name: { en: "Egypt", ar: "مصر" },
    desc: {
      en: "The cradle of civilization, famous for its Pyramids, the Nile River, and a history spanning millennia.",
      ar: "مهد الحضارات، تشتهر بالأهرامات ونهر النيل وتاريخ يمتد لآلاف السنين.",
    },
    flag: "https://flagcdn.com/w640/eg.png",
    landmarks: {
      en: ["Great Pyramids of Giza", "The Nile River", "Valley of the Kings"],
      ar: ["أهرامات الجيزة", "نهر النيل", "وادي الملوك"],
    },
    link: "https://en.wikipedia.org/wiki/Egypt",
  },
  {
    code: "sa",
    name: { en: "Saudi Arabia", ar: "المملكة العربية السعودية" },
    desc: {
      en: "The birthplace of Islam, home to Mecca and Medina, and a land of vast deserts and modern cities.",
      ar: "مهد الإسلام، وموطن الحرمين الشريفين مكة والمدينة، وأرض الصحاري الواسعة والمدن الحديثة.",
    },
    flag: "https://flagcdn.com/w640/sa.png",
    landmarks: {
      en: ["Al-Masjid an-Nabawi", "Kaaba", "Al-Ula"],
      ar: ["المسجد النبوي", "الكعبة المشرفة", "العلا"],
    },
    link: "https://en.wikipedia.org/wiki/Saudi_Arabia",
  },
  {
    code: "ae",
    name: { en: "United Arab Emirates", ar: "الإمارات العربية المتحدة" },
    desc: {
      en: "A global hub for tourism and trade, known for futuristic architecture like the Burj Khalifa.",
      ar: "مركز عالمي للسياحة والتجارة، تشتهر بكونها أيقونة العمارة الحديثة مثل برج خليفة.",
    },
    flag: "https://flagcdn.com/w640/ae.png",
    landmarks: {
      en: ["Burj Khalifa", "Sheikh Zayed Mosque", "The Palm Jumeirah"],
      ar: ["برج خليفة", "مسجد الشيخ زايد", "نخلة الجميرا"],
    },
    link: "https://en.wikipedia.org/wiki/United_Arab_Emirates",
  },
  {
    code: "ps",
    name: { en: "Palestine", ar: "فلسطين" },
    desc: {
      en: "A land of deep religious significance, history, and resilience, housing Al-Aqsa Mosque.",
      ar: "أرض ذات أهمية دينية وتاريخية عميقة، وصمود، تحتضن المسجد الأقصى المبارك.",
    },
    flag: "https://flagcdn.com/w640/ps.png",
    landmarks: {
      en: ["Al-Aqsa Mosque", "Dome of the Rock", "Church of the Nativity"],
      ar: ["المسجد الأقصى", "قبة الصخرة", "كنيسة المهد"],
    },
    link: "https://en.wikipedia.org/wiki/State_of_Palestine",
  },
  {
    code: "ma",
    name: { en: "Morocco", ar: "المغرب" },
    desc: {
      en: "A gateway to Africa, distinguished by its Berber, Arabian, and European cultural influences.",
      ar: "بوابة إفريقيا، تتميز بمزيج ثقافي فريد من التأثيرات الأمازيغية والعربية والأوروبية.",
    },
    flag: "https://flagcdn.com/w640/ma.png",
    landmarks: {
      en: ["Hassan II Mosque", "Jemaa el-Fnaa", "Chefchaouen"],
      ar: ["مسجد الحسن الثاني", "ساحة جامع الفنا", "شفشاون"],
    },
    link: "https://en.wikipedia.org/wiki/Morocco",
  },
  {
    code: "jo",
    name: { en: "Jordan", ar: "الأردن" },
    desc: {
      en: "Home to the ancient city of Petra and the Dead Sea, offering a mix of history and nature.",
      ar: "موطن مدينة البتراء القديمة والبحر الميت، وتقدم مزيجًا رائعًا من التاريخ والطبيعة.",
    },
    flag: "https://flagcdn.com/w640/jo.png",
    landmarks: {
      en: ["Petra", "Wadi Rum", "The Dead Sea"],
      ar: ["البتراء", "وادي رم", "البحر الميت"],
    },
    link: "https://en.wikipedia.org/wiki/Jordan",
  },
  {
    code: "dz",
    name: { en: "Algeria", ar: "الجزائر" },
    desc: {
      en: "The largest country in Africa, known for its Mediterranean coastline and Saharan experiences.",
      ar: "أكبر دولة في إفريقيا، تشتهر بساحلها المتوسطي وتجارب الصحراء الكبرى الفريدة.",
    },
    flag: "https://flagcdn.com/w640/dz.png",
    landmarks: {
      en: ["Notre Dame d'Afrique", "Djémila", "Sahara Desert"],
      ar: ["مقام الشهيد", "جميلة الأثرية", "الصحراء الكبرى"],
    },
    link: "https://en.wikipedia.org/wiki/Algeria",
  },
  {
    code: "iq",
    name: { en: "Iraq", ar: "العراق" },
    desc: {
      en: "Known as the Cradle of Civilization, home to ancient Mesopotamia and rich cultural heritage.",
      ar: "مهد الحضارة، وموطن بلاد الرافدين القديمة والتراث الثقافي الغني.",
    },
    flag: "https://flagcdn.com/w640/iq.png",
    landmarks: {
      en: ["Zigurat of Ur", "Babylon", "Erbil Citadel"],
      ar: ["زقورة أور", "بابل", "قلعة أربيل"],
    },
    link: "https://en.wikipedia.org/wiki/Iraq",
  },
  {
    code: "tn",
    name: { en: "Tunisia", ar: "تونس" },
    desc: {
      en: "Famous for its golden beaches, sunny weather, and the ancient ruins of Carthage.",
      ar: "تشتهر بشواطئها الذهبية وطقسها المشمس وآثار قرطاج العظيمة.",
    },
    flag: "https://flagcdn.com/w640/tn.png",
    landmarks: {
      en: ["Carthage", "Amphitheatre of El Jem", "Sidi Bou Said"],
      ar: ["قرطاج", "مسرح الجم", "سيدي بوسعيد"],
    },
    link: "https://en.wikipedia.org/wiki/Tunisia",
  },
  {
    code: "ye", // Correct Yemen
    name: { en: "Yemen", ar: "اليمن" },
    desc: {
      en: "A country with deep historical roots, ancient skyscrapers, and unique architectural heritage.",
      ar: "بلد ذو جذور تاريخية عميقة، وناطحات سحاب طينية قديمة، وتراث معماري فريد.",
    },
    flag: "https://flagcdn.com/w640/ye.png",
    landmarks: {
      en: ["Old City of Sana'a", "Socotra Island", "Dar al-Hajar"],
      ar: ["صنعاء القديمة", "جزيرة سقطرى", "دار الحجر"],
    },
    link: "https://en.wikipedia.org/wiki/Yemen",
  },
  {
    code: "lb",
    name: { en: "Lebanon", ar: "لبنان" },
    desc: {
      en: "Known for its rich history, diverse culture, ancient Roman ruins, and cedar forests.",
      ar: "يُعرف بتاريخه الغني وثقافته المتنوعة وآثاره الرومانية وغابات الأرز.",
    },
    flag: "https://flagcdn.com/w640/lb.png",
    landmarks: {
      en: ["Baalbek", "Jeita Grotto", "Raouche Rocks"],
      ar: ["بعلبك", "مغارة جعيتا", "صخرة الروشة"],
    },
    link: "https://en.wikipedia.org/wiki/Lebanon",
  },
  {
    code: "sy",
    name: { en: "Syria", ar: "سوريا" },
    desc: {
      en: "Home to some of the oldest continuously inhabited cities in the world and rich historical sites.",
      ar: "موطن لبعض من أقدم المدن المأهولة في العالم والمواقع التاريخية الغنية.",
    },
    flag: "https://flagcdn.com/w640/sy.png",
    landmarks: {
      en: ["Umayyad Mosque", "Palmyra", "Aleppo Citadel"],
      ar: ["الجامع الأموي", "تدمر", "قلعة حلب"],
    },
    link: "https://en.wikipedia.org/wiki/Syria",
  },
  {
    code: "kw",
    name: { en: "Kuwait", ar: "الكويت" },
    desc: {
      en: "An oil-rich country known for its modern cityscape and cultural heritage.",
      ar: "دولة غنية بالنفط تشتهر بمناظرها الحضرية الحديثة وتراثها الثقافي.",
    },
    flag: "https://flagcdn.com/w640/kw.png",
    landmarks: {
      en: ["Kuwait Towers", "The Grand Mosque", "Souq Al-Mubarakiya"],
      ar: ["أبراج الكويت", "المسجد الكبير", "سوق المباركية"],
    },
    link: "https://en.wikipedia.org/wiki/Kuwait",
  },
  {
    code: "om",
    name: { en: "Oman", ar: "عمان" },
    desc: {
      en: "Known for its terraced orchards, adobe fortresses, and vast deserts.",
      ar: "تشتهر ببساتينها المدرجة، وقلاعها الطينية، وصحاريها الشاسعة.",
    },
    flag: "https://flagcdn.com/w640/om.png",
    landmarks: {
      en: ["Sultan Qaboos Grand Mosque", "Wadi Shab", "Jebel Shams"],
      ar: ["جامع السلطان قابوس الأكبر", "وادي شاب", "جبل شمس"],
    },
    link: "https://en.wikipedia.org/wiki/Oman",
  },
  {
    code: "qa",
    name: { en: "Qatar", ar: "قطر" },
    desc: {
      en: "A peninsula nation known for its futuristic skyline and traditional Islamic art.",
      ar: "دولة شبه جزيرة تشتهر بأفقها المستقبلي وفنها الإسلامي التقليدي.",
    },
    flag: "https://flagcdn.com/w640/qa.png",
    landmarks: {
      en: ["Museum of Islamic Art", "Souq Waqif", "The Pearl"],
      ar: ["متحف الفن الإسلامي", "سوق واقف", "اللؤلؤة"],
    },
    link: "https://en.wikipedia.org/wiki/Qatar",
  },
  {
    code: "bh",
    name: { en: "Bahrain", ar: "البحرين" },
    desc: {
      en: "An island nation in the Persian Gulf, known for its pearl diving history.",
      ar: "مملكة جزرية في الخليج العربي، تشتهر بتاريخها في الغوص بحثاً عن اللؤلؤ.",
    },
    flag: "https://flagcdn.com/w640/bh.png",
    landmarks: {
      en: ["Bahrain National Museum", "Al-Fateh Grand Mosque", "Tree of Life"],
      ar: ["متحف البحرين الوطني", "جامع الفاتح", "شجرة الحياة"],
    },
    link: "https://en.wikipedia.org/wiki/Bahrain",
  },
  {
    code: "ly",
    name: { en: "Libya", ar: "ليبيا" },
    desc: {
      en: "Home to spectacular Greko-Roman ruins and the vast experiences of the Sahara.",
      ar: "موطن لآثار إغريقية ورومانية مذهلة وتجارب شاسعة في الصحراء.",
    },
    flag: "https://flagcdn.com/w640/ly.png",
    landmarks: {
      en: ["Leptis Magna", "Sabratha", "Ghadames"],
      ar: ["لبدة الكبرى", "صبراتة", "غدامس"],
    },
    link: "https://en.wikipedia.org/wiki/Libya",
  },
  {
    code: "sd",
    name: { en: "Sudan", ar: "السودان" },
    desc: {
      en: "Where the Blue and White Niles meet, hosting more pyramids than Egypt.",
      ar: "ملتقى النيلين الأزرق والأبيض، وتضم أهرامات أكثر مما في مصر.",
    },
    flag: "https://flagcdn.com/w640/sd.png",
    landmarks: {
      en: ["Meroë Pyramids", "Jebel Barkal", "Sanganeb National Park"],
      ar: ["أهرامات مروي", "جبل البركل", "محمية سنقنيب"],
    },
    link: "https://en.wikipedia.org/wiki/Sudan",
  },
  {
    code: "mr",
    name: { en: "Mauritania", ar: "موريتانيا" },
    desc: {
      en: "A country of desert landscapes and ancient caravan cities.",
      ar: "بلد المناظر الطبيعية الصحراوية ومدن القوافل التجارية القديمة.",
    },
    flag: "https://flagcdn.com/w640/mr.png",
    landmarks: {
      en: ["Banc d'Arguin", "Chinguetti", "Richat Structure"],
      ar: ["حوض أرغين", "شنقيط", "عين الصحراء"],
    },
    link: "https://en.wikipedia.org/wiki/Mauritania",
  },
  {
    code: "dj",
    name: { en: "Djibouti", ar: "جيبوتي" },
    desc: {
      en: "Known for its unique geological landscapes, volcanic formations, and beaches.",
      ar: "تشتهر بمناظرها الجيولوجية الفريدة وتكويناتها البركانية وشواطئها.",
    },
    flag: "https://flagcdn.com/w640/dj.png",
    landmarks: {
      en: ["Lake Assal", "Day Forest National Park", "Moucha Island"],
      ar: ["بحيرة عسل", "منتزه داي فورست الوطني", "جزيرة موشا"],
    },
    link: "https://en.wikipedia.org/wiki/Djibouti",
  },
  {
    code: "km",
    name: { en: "Comoros", ar: "جزر القمر" },
    desc: {
      en: "A volcanic archipelago off Africa’s east coast, known for its perfumed plant life.",
      ar: "أرخبيل بركاني قبالة ساحل شرق إفريقيا، يُعرف بالنباتات العطرية.",
    },
    flag: "https://flagcdn.com/w640/km.png",
    landmarks: {
      en: ["Mount Karthala", "Chomoni Beach", "Mohéli Marine Park"],
      ar: ["جبل كارتالا", "شاطئ شوموني", "منتزه موهيلي البحري"],
    },
    link: "https://en.wikipedia.org/wiki/Comoros",
  },
  {
    code: "so",
    name: { en: "Somalia", ar: "الصومال" },
    desc: {
      en: "Located in the Horn of Africa, with the longest coastline on the mainland.",
      ar: "تقع في القرن الإفريقي، وتمتلك أطول ساحل على البر الرئيسي.",
    },
    flag: "https://flagcdn.com/w640/so.png",
    landmarks: {
      en: ["Laas Geel", "Shanghai Old City", "Liido Beach"],
      ar: ["لاس غيل", "مدينة شنغهاي القديمة", "شاطئ ليدو"],
    },
    link: "https://en.wikipedia.org/wiki/Somalia",
  },
];

// App State
let currentLang = "en"; // Default

// DOM Elements
const elements = {
  themeToggle: document.getElementById("theme-toggle"),
  langToggle: document.getElementById("lang-toggle"),
  html: document.documentElement,
  themeIcon: document.querySelector("#theme-toggle i"),
  grid: document.getElementById("countries-grid"),
  modal: document.getElementById("country-modal"),
  modalBody: document.querySelector(".modal-body"),
  closeModalBtn: document.getElementById("close-modal"),
  // Text Elements for Translation
  logoText: document.getElementById("logo-text"),
  heroTitle: document.getElementById("hero-title"),
  heroSubtitle: document.getElementById("hero-subtitle"),
};

// Translations for Static Text
const staticTranslations = {
  en: {
    logo: "ArabiaLens",
    heroTitle: 'Discover the <span class="highlight">Arab World</span>',
    heroSubtitle:
      "Explore the rich heritage, culture, and beauty of Arab nations.",
    readMore: "View Details",
    wikiBtn: "Read More on Wikipedia",
    landmarksTitle: "Famous Landmarks",
  },
  ar: {
    logo: "عدسة العرب",
    heroTitle: 'اكتشف <span class="highlight">العالم العربي</span>',
    heroSubtitle: "استكشف التراث الغني والثقافة والجمال في الدول العربية.",
    readMore: "عرض التفاصيل",
    wikiBtn: "اقرأ المزيد على ويكيبيديا",
    landmarksTitle: "أبرز المعالم",
  },
};

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  renderGrid();
});

function setupEventListeners() {
  // Theme Toggle
  elements.themeToggle.addEventListener("click", () => {
    const currentTheme = elements.html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    elements.html.setAttribute("data-theme", newTheme);
    updateThemeIcon(newTheme);
  });

  // Language Toggle
  elements.langToggle.addEventListener("click", toggleLanguage);

  // Modal Close
  elements.closeModalBtn.addEventListener("click", closeModal);
  elements.modal.addEventListener("click", (e) => {
    if (e.target === elements.modal) closeModal();
  });
}

function updateThemeIcon(theme) {
  if (theme === "dark") {
    elements.themeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    elements.themeIcon.classList.replace("fa-sun", "fa-moon");
  }
}

function toggleLanguage() {
  // Flip State
  currentLang = currentLang === "en" ? "ar" : "en";

  // Update HTML Attributes
  elements.html.setAttribute("lang", currentLang);
  elements.html.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");

  // Update Toggle Button Text
  elements.langToggle.textContent = currentLang === "en" ? "EN/AR" : "عربي/E";

  // Update Static Content
  const t = staticTranslations[currentLang];
  elements.logoText.textContent = t.logo;
  elements.heroTitle.innerHTML = t.heroTitle;
  elements.heroSubtitle.textContent = t.heroSubtitle;

  // Re-render Grid
  renderGrid();
}

function renderGrid() {
  elements.grid.innerHTML = ""; // Clear existing

  countriesData.forEach((country) => {
    const card = document.createElement("div");
    card.classList.add("country-card");
    // Attach data object to element for easy access
    card.countryData = country;

    card.innerHTML = `
            <img src="${country.flag}" alt="${country.name[currentLang]} Flag" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${country.name[currentLang]}</h3>
                <p class="card-desc">${country.desc[currentLang]}</p>
                <button class="read-more-btn">${staticTranslations[currentLang].readMore}</button>
            </div>
        `;

    // Add Click Event
    card.addEventListener("click", () => openModal(country));

    elements.grid.appendChild(card);
  });
}

function openModal(country) {
  const t = staticTranslations[currentLang];

  // Generate Landmarks List
  const landmarksHtml = country.landmarks[currentLang]
    .map((l) => `<li>${l}</li>`)
    .join("");

  // Map Iframe URL (Using English name for query as it's more reliable for Google Maps)
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    country.name.en
  )}&t=&z=6&ie=UTF8&iwloc=&output=embed`;

  elements.modalBody.innerHTML = `
        <div class="modal-body-content">
            <div class="modal-visuals">
                <img src="${country.flag}" alt="${country.name[currentLang]} Flag" class="modal-flag">
                 <iframe 
                    class="modal-map" 
                    src="${mapUrl}" 
                    loading="lazy"
                    allowfullscreen>
                </iframe>
            </div>
            <div class="modal-info">
                <h2>${country.name[currentLang]}</h2>
                <p class="modal-desc">${country.desc[currentLang]}</p>
                
                <div class="landmarks-list">
                    <h3>${t.landmarksTitle}</h3>
                    <ul>${landmarksHtml}</ul>
                </div>

                <a href="${country.link}" target="_blank" class="wiki-btn">${t.wikiBtn}</a>
            </div>
        </div>
    `;

  elements.modal.classList.add("open");
  // Prevent body scroll
  document.body.style.overflow = "hidden";
}

function closeModal() {
  elements.modal.classList.remove("open");
  document.body.style.overflow = "";
  // Clear HTML to stop iframe playing/loading
  setTimeout(() => {
    elements.modalBody.innerHTML = "";
  }, 300);
}
