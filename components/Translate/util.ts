import translation from "../../i18n/translation.json";

export const getTranslate = (text: string, locale?: string) => {
  if (
    locale &&
    (translation as any)[text] &&
    ((translation as any)[text] as any)[locale]
  ) {
    return ((translation as any)[text] as any)[locale];
  }
  console.warn(`Couldn't find "${locale}" translation for "${text}"`);
  return text;
};
