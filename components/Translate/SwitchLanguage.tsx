import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Translate from "./Translate";

const SwitchLanguage = () => {
  const { locale, basePath } = useRouter();
  const otherLanguage = locale === "fa" ? "en" : "fa";
  return (
    <Link href={basePath} locale={otherLanguage} passHref>
      <a>
        <Translate>EN</Translate>
      </a>
    </Link>
  );
};

export default SwitchLanguage;
