import { useRouter } from "next/router";
import { getTranslate } from "../components/Translate/util";

type Props = {};

const useTranslate = () => {
  const { locale, defaultLocale } = useRouter();

  const t = (text: string): string => {
    if (locale === defaultLocale) {
      return text;
    }
    return getTranslate(text, locale);
  };
  return { t };
};

export default useTranslate;
