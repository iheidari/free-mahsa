import { useRouter } from "next/router";
import { getTranslate } from "../components/Translate/util";
import { namespacesType } from "../i18n/types";

const useTranslate = () => {
  const { locale, defaultLocale } = useRouter();

  const t = (text?: string, namespace?: namespacesType): string => {
    if (!text) {
      return "";
    }
    if (locale === defaultLocale) {
      return text;
    }
    return getTranslate(text, namespace, locale);
  };
  const isLatin = locale !== "fa";
  return { t, isLatin };
};

export default useTranslate;
