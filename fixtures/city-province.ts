const cityProvince = [
  { city: "آبادان", province: "خوزستان" },
  { city: "آباده", province: "فارس" },
  { city: "آبدانان", province: "ایلام" },
  { city: "آبکنار", province: "گیلان" },
  { city: "آذربایجان شرقی", province: "آذربایجان شرقی" },
  { city: "آذربایجان غربی", province: "آذربایجان غربی" },
  { city: "آستارا", province: "گیلان" },
  { city: "آق‌قلا", province: "گلستان" },
  { city: "آمل", province: "مازندران" },
  { city: "ابهر", province: "زنجان" },
  { city: "احمدآباد", province: "اصفهان" },
  { city: "اراک", province: "مرکزی" },
  { city: "اردبیل", province: "اردبیل" },
  { city: "اردکان", province: "یزد" },
  { city: "ارومیه", province: "آذربایجان غربی" },
  { city: "اسلام‌ آباد غرب", province: "کرمانشاه" },
  { city: "اسلامشهر", province: "تهران" },
  { city: "اشنویه", province: "آذربایجان غربی" },
  { city: "اصفهان", province: "اصفهان" },
  { city: "الوند قزوین", province: "قزوین" },
  { city: "امیدیه", province: "خوزستان" },
  { city: "انزلی", province: "گیلان" },
  { city: "اهواز", province: "خوزستان" },
  { city: "ایتالیایی", province: "-" },
  { city: "ایذه", province: "خوزستان" },
  { city: "ایرانشهر", province: "سیستان و بلوچستان" },
  { city: "ایلام", province: "ایلام" },
  { city: "بابل", province: "مازندران" },
  { city: "بابلسر", province: "مازندران" },
  { city: "باغ‌ملک", province: "خوزستان" },
  { city: "بانه", province: "کردستان" },
  { city: "بجنورد", province: "خراسان شمالی" },
  { city: "برازجان", province: "بوشهر" },
  { city: "بروجرد", province: "لرستان" },
  { city: "بناب", province: "آذربایجان شرقی" },
  { city: "بندر انزلی", province: "گیلان" },
  { city: "بندر عباس", province: "هرمزگان" },
  { city: "بهبهان", province: "خوزستان" },
  { city: "بهشهر", province: "مازندران" },
  { city: "بوشهر", province: "بوشهر" },
  { city: "بوکان", province: "آذربایجان غربی" },
  { city: "بیجار", province: "کردستان" },
  { city: "بیرجند", province: "خراسان جنوبی" },
  { city: "بیستون", province: "کرمانشاه" },
  { city: "پاکدشت", province: "تهران" },
  { city: "پاکدشت ورامین", province: "تهران" },
  { city: "پاوه", province: "کرمانشاه" },
  { city: "پسوه", province: "آذربایجان غربی" },
  { city: "پیرانشهر", province: "آذربایجان غربی" },
  { city: "پیشین", province: "سیستان و بلوچستان" },
  { city: "تالش", province: "گیلان" },
  { city: "تبریز", province: "آذربایجان شرقی" },
  { city: "تربت جام", province: "خراسان رضوی" },
  { city: "ترکمن صحرا", province: "گلستان" },
  { city: "تکاب", province: "آذربایجان غربی" },
  { city: "تنکابن", province: "مازندران" },
  { city: "تهران", province: "تهران" },
  { city: "جلفا", province: "آذربایجان شرقی" },
  { city: "جوانرود", province: "کرمانشاه" },
  { city: "چابهار", province: "سیستان و بلوچستان" },
  { city: "چرام", province: "کهگیلویه و بویراحمد" },
  { city: "چهارمحال و بختیاری", province: "چهارمحال و بختیاری" },
  { city: "خاش", province: "سیستان و بلوچستان" },
  { city: "خراسان رضوی‌", province: "خراسان رضوی" },
  { city: "خرم آباد", province: "لرستان" },
  { city: "خلخال", province: "اردبیل" },
  { city: "خمینی شهر", province: "اصفهان" },
  { city: "خنج", province: "فارس" },
  { city: "خواف", province: "خراسان رضوی" },
  { city: "خوی", province: "آذربایجان غربی" },
  { city: "درگهان", province: "هرمزگان" },
  { city: "دره شهر", province: "ایلام" },
  { city: "دزفول", province: "خوزستان" },
  { city: "دهدشت", province: "کهگیلویه و بویراحمد" },
  { city: "دهگلان", province: "کردستان" },
  { city: "دهلران", province: "ایلام" },
  { city: "دیواندره", province: "کردستان" },
  { city: "راسک", province: "سیستان و بلوچستان" },
  { city: "راميان", province: "گلستان" },
  { city: "رامیاران", province: "گلستان" },
  { city: "رشت", province: "گیلان" },
  { city: "روانسر", province: "کرمانشاه" },
  { city: "رودسر", province: "گیلان" },
  { city: "روستای چهاب", province: "کهگیلویه و بویراحمد" },
  { city: "روستای نوراباد بوشهر", province: "فارس" },
  { city: "زاهدان", province: "سیستان و بلوچستان" },
  { city: "زرقان", province: "فارس" },
  { city: "زرين شهر", province: "اصفهان" },
  { city: "زرین دشت", province: "فارس" },
  { city: "زرینه", province: "کردستان" },
  { city: "زنجان", province: "زنجان" },
  { city: "ساری", province: "مازندران" },
  { city: "ساوه", province: "مرکزی" },
  { city: "سبزوار", province: "خراسان رضوی" },
  { city: "سرابله", province: "ایلام" },
  { city: "سراوان", province: "سیستان و بلوچستان" },
  { city: "سردشت", province: "آذربایجان غربی" },
  { city: "سروآباد", province: "کردستان" },
  { city: "سقز", province: "کردستان" },
  { city: "سلمان شهر", province: "مازندران" },
  { city: "سنقر", province: "کرمانشاه" },
  { city: "سنندج", province: "کردستان" },
  { city: "سورک", province: "مازندران" },
  { city: "سیب", province: "سیستان و بلوچستان" },
  { city: "سیرجان", province: "کرمان" },
  { city: "سیستان و بلوچستان", province: "سیستان و بلوچستان" },
  { city: "سی‌سخت", province: "کهگیلویه و بویراحمد" },
  { city: "شاهرود", province: "سمنان" },
  { city: "شاهین دژ", province: "آذربایجان غربی" },
  { city: "شاهین شهر", province: "اصفهان" },
  { city: "شهر قدس", province: "تهران" },
  { city: "شهرستان باوی", province: "خوزستان" },
  { city: "شهرستان بهمئی شهر لیکک", province: "کهگیلویه و بویراحمد" },
  { city: "شهرستان گلوگاه", province: "مازندران" },
  { city: "شهرضا", province: "اصفهان" },
  { city: "شهرکرد", province: "چهارمحال و بختیاری" },
  { city: "شوش", province: "خوزستان" },
  { city: "شیراز", province: "فارس" },
  { city: "شیرگواز", province: "سیستان و بلوچستان" },
  { city: "شیروان", province: "گیلان" },
  { city: "صحنه", province: "کرمانشاه" },
  { city: "صومعه سرا", province: "" },
  { city: "عباس‌آباد", province: "مازندران" },
  { city: "عسلویه", province: "بوشهر" },
  { city: "فارس", province: "فارس" },
  { city: "فارسان", province: "چهارمحال و بختیاری" },
  { city: "فرانسوی", province: "-" },
  { city: "فریمان", province: "خراسان رضوی" },
  { city: "فشافویه", province: "تهران" },
  { city: "فومن", province: "گیلان" },
  { city: "قائمشهر", province: "مازندران" },
  { city: "قروه", province: "کردستان" },
  { city: "قزوین", province: "قزوین" },
  { city: "قصر شیرین", province: "کرمانشاه" },
  { city: "قم", province: "قم" },
  { city: "قوچان", province: "خراسان رضوی" },
  { city: "کازرون", province: "فارس" },
  { city: "کاشان", province: "اصفهان" },
  { city: "کامیاران", province: "کردستان" },
  { city: "کرج", province: "البرز" },
  { city: "کردستان", province: "کردستان" },
  { city: "کرمان", province: "کرمان" },
  { city: "کرمانشاه", province: "کرمانشاه" },
  { city: "کنارک", province: "سیستان و بلوچستان" },
  { city: "کنگان", province: "بوشهر" },
  { city: "کنگاور", province: "کرمانشاه" },
  { city: "کهگیلویه و بویر احمد", province: "کهگیلویه و بویراحمد" },
  { city: "کوسه‌ کهریز", province: "آذربایجان غربی" },
  { city: "گچساران", province: "کهگیلویه و بویراحمد" },
  { city: "گراش", province: "فارس" },
  { city: "گرگان", province: "گلستان" },
  { city: "گرمسار", province: "سمنان" },
  { city: "گرمی", province: "اردبیل" },
  { city: "گروک", province: "هرمزگان" },
  { city: "گلپایگان", province: "اصفهان" },
  { city: "گلستان", province: "گلستان" },
  { city: "گناوه", province: "بوشهر" },
  { city: "گنبد کاووس", province: "گلستان" },
  { city: "گنک", province: "سیستان و بلوچستان" },
  { city: "گوهردشت", province: "البرز" },
  { city: "گیلان", province: "گیلان" },
  { city: "گیلانغرب", province: "کرمانشاه" },
  { city: "لار", province: "فارس" },
  { city: "لارستان", province: "فارس" },
  { city: "لاهیجان", province: "گیلان" },
  { city: "لرستان", province: "لرستان" },
  { city: "لنگرود", province: "گیلان" },
  { city: "لواسان", province: "تهران" },
  { city: "لیکک", province: "کهگیلویه و بویراحمد" },
  { city: "مازندران", province: "مازندران" },
  { city: "ماسال", province: "گیلان" },
  { city: "ماهشهر", province: "خوزستان" },
  { city: "محلات", province: "مرکزی" },
  { city: "مراغه", province: "آذربایجان شرقی" },
  { city: "مریوان", province: "کردستان" },
  { city: "مشهد", province: "خراسان رضوی" },
  { city: "مغان", province: "اردبیل" },
  { city: "ملک شهر", province: "اصفهان" },
  { city: "ملکان", province: "آذربایجان شرقی" },
  { city: "مهاباد", province: "آذربایجان غربی" },
  { city: "مهر", province: "البرز" },
  { city: "مهرآباد", province: "تهران" },
  { city: "مورموری", province: "ایلام" },
  { city: "مياندوآب", province: "آذربایجان غربی" },
  { city: "میاندوآب", province: "آذربایجان غربی" },
  { city: "میرجاه", province: "سیستان و بلوچستان" },
  { city: "میرجاوه", province: "سیستان و بلوچستان" },
  { city: "نجف آباد", province: "اصفهان" },
  { city: "نقده", province: "آذربایجان غربی" },
  { city: "نور آباد", province: "فارس" },
  { city: "نوشهر", province: "مازندران" },
  { city: "نیشابور", province: "خراسان رضوی" },
  { city: "نیکشهر", province: "سیستان و بلوچستان" },
  { city: "نیم ور", province: "مرکزی" },
  { city: "هرمزگان", province: "هرمزگان" },
  { city: "هشتگرد", province: "البرز" },
  { city: "همدان", province: "همدان" },
  { city: "هورامان", province: "کرمانشاه" },
  { city: "ورامین", province: "تهران" },
  { city: "یاسوج", province: "کهگیلویه و بویراحمد" },
  { city: "یزد", province: "یزد" },
];

export default cityProvince;
