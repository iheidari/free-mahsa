export type ProvinceType = {
  nameFa: string;
  nameEn: string;
  code: string;
};

const provinces: ProvinceType[] = [
  { nameFa: "البرز", nameEn: "Alborz", code: "AL" },
  { nameFa: "اردبیل", nameEn: "Ardabil", code: "AR" },
  { nameFa: "آذربایجان شرقی", nameEn: "Azerbaijan, East", code: "AS" },
  { nameFa: "آذربایجان غربی", nameEn: "Azerbaijan, West", code: "AQ" },
  { nameFa: "بوشهر", nameEn: "Bushehr", code: "BU" },
  {
    nameFa: "چهارمحال و بختیاری",
    nameEn: "Chaharmahal and Bakhtiari",
    code: "CH",
  },
  { nameFa: "فارس", nameEn: "Fars", code: "FA" },
  { nameFa: "گیلان", nameEn: "Gilan", code: "GI" },
  { nameFa: "گلستان", nameEn: "Golestan", code: "GO" },
  { nameFa: "همدان", nameEn: "Hamadan", code: "HA" },
  { nameFa: "هرمزگان", nameEn: "Hormozgan", code: "HO" },
  { nameFa: "ایلام", nameEn: "Ilam", code: "IL" },
  { nameFa: "اصفهان", nameEn: "Isfahan", code: "IS" },
  { nameFa: "کرمان", nameEn: "Kerman", code: "KE" },
  { nameFa: "کرمانشاه", nameEn: "Kermanshah", code: "KS" },
  { nameFa: "خراسان شمالی", nameEn: "Khorasan, North", code: "XS" },
  { nameFa: "خراسان رضوی", nameEn: "Khorasan, Razavi", code: "XR" },
  { nameFa: "خراسان جنوبی", nameEn: "Khorasan, South", code: "XJ" },
  { nameFa: "خوزستان", nameEn: "Khuzestan", code: "XU" },
  {
    nameFa: "کهگیلویه و بویراحمد",
    nameEn: "Kohgiluyeh and Boyer-Ahmad",
    code: "KB",
  },
  { nameFa: "کردستان", nameEn: "Kurdistan", code: "KU" },
  { nameFa: "لرستان", nameEn: "Lorestan", code: "LO" },
  { nameFa: "مرکزی", nameEn: "Markazi", code: "MR" },
  { nameFa: "مازندران", nameEn: "Mazandaran", code: "MZ" },
  { nameFa: "قزوین", nameEn: "Qazvin", code: "QA" },
  { nameFa: "قم", nameEn: "Qom", code: "QO" },
  { nameFa: "سمنان", nameEn: "Semnan", code: "SE" },
  {
    nameFa: "سیستان و بلوچستان",
    nameEn: "Sistan and Baluchestan",
    code: "SB",
  },
  { nameFa: "تهران", nameEn: "Tehran", code: "TE" },
  { nameFa: "یزد", nameEn: "Yazd", code: "YA" },
  { nameFa: "زنجان", nameEn: "Zanjan", code: "ZA" },
];

export default provinces;
