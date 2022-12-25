export const getProvinceBySlug = (slug: string) => {
  switch (slug) {
    case "آذربایجان-شرقی":
    case "azerbaijan-east":
      return "آذربایجان شرقی";
    case "آذربایجان-غربی":
    case "azerbaijan-west":
      return "آذربایجان غربی";
    case "چهارمحال-بختیاری":
    case "chaharmahal-bakhtiari":
      return "چهارمحال و بختیاری";
    case "خراسان-شمالی":
    case "khorasan-north":
      return "خراسان شمالی";
    case "خراسان-رضوی":
    case "khorasan-razavi":
      return "خراسان رضوی";
    case "خراسان-جنوبی":
    case "khorasan-south":
      return "خراسان جنوبی";
    case "کهگیلویه-بویراحمد":
    case "Kohgiluyeh-Boyer-Ahmad":
      return "کهگیلویه و بویراحمد";
    case "سیستان-بلوچستان":
    case "Sistan-Baluchestan":
      return "سیستان و بلوچستان";
    default:
      return slug;
  }
};

export const getStatusBySlug = (slug: string) => {
  switch (slug) {
    case "آزاد-شد":
    case "released":
      return "آزاد شد";
    case "مفقود":
    case "missing":
      return "مفقود";
    case "زندانی":
    case "imprisoned":
      return "زندانی";
    default:
      return slug;
  }
};

export const getActivityBySlug = (slug: string) => {
  switch (slug) {
    case "student":
      return "دانشجو";
    case "lawyer":
      return "وکیل";
    case "citizen":
      return "شهروند";
    case "کودک":
    case "minor":
      return "کودک (زیر ۱۸ سال)";
    case "journalist":
    case "روزنامه-نگار":
      return "روزنامه نگار";
    default:
      return slug;
  }
};
