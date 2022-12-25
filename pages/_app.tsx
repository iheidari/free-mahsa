import "../styles/globals.css";
import type { AppProps } from "next/app";
import useTranslate from "../hooks/useTranslate";

function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslate();
  return (
    <div dir={t("rtl")} style={{ fontFamily: t("Noto Naskh Arabic") }}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
