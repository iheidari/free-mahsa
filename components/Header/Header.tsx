import React from "react";
import useTranslate from "../../hooks/useTranslate";
import SwitchLanguage from "../Translate/SwitchLanguage";
import Translate from "../Translate";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const { t } = useTranslate();
  return (
    <header
      className="flex w-full pt-4 mb-2 bg-slate-300 justify-center"
      dir="rtl"
    >
      <div className="flex w-full max-w-6xl flex-row justify-between items-center">
        <div className="px-4">
          <SwitchLanguage />
        </div>
        <div className="text-3xl ">
          <Translate>زن زندگی آزادی</Translate>
        </div>
        <div className="px-4">
          <Link href="/" passHref>
            <a>
              <Image
                className="rounded-50p "
                alt={t("زن زندگی آزادی")}
                src="/images/logo.jpg"
                width={56}
                height={56}
              />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
