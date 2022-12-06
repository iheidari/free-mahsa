import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Cards from "../components/Cards";
import Translate from "../components/Translate";
import SwitchLanguage from "../components/Translate/SwitchLanguage";
import { sanityApi } from "../helpers/api";
import useTranslate from "../hooks/useTranslate";

type HomeProps = {
  rawData?: any;
};

const Home: NextPage = ({ rawData }: HomeProps) => {
  const { t } = useTranslate();
  return (
    <>
      <Head>
        <title>Free Mahsa</title>
        <meta
          name="description"
          content="A memorial wall for all those we lost or have in prison"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`min-h-screen py-16 px-8 flex flex-1 flex-col justify-center items-center`}
      >
        <div className="mb-16 flex flex-col justify-around w-3/4 sm:flex-row gap-4">
          <Image
            className="rounded-50p"
            alt={t("زن زندگی آزادی")}
            src="/images/logo.jpg"
            width={300}
            height={300}
          />
          <div className="relative">
            <Link href={"./map"} passHref>
              <a>
                <div className="absolute w-full h-full flex justify-center items-center  z-10 text-white ">
                  <div className="bg-slate-600 p-2 bg-opacity-20 sm:text-xl md:text-2xl">
                    <Translate>نقشه دستگیر شده ها</Translate>
                  </div>
                </div>
                <Image
                  alt={t("نقشه اینتراکتیو دستگیر شده ها")}
                  src="/images/iran.png"
                  width={324}
                  height={300}
                />
              </a>
            </Link>
          </div>
          <div>
            <SwitchLanguage />
          </div>
        </div>

        <Cards rawData={rawData} />
        <div className="mt-20 text-center">
          میتوانید اطلاعات دیگر افراد کشته و یا دستگیر شده را از طریق این{" "}
          <a
            className="underline text-green-700"
            href="https://docs.google.com/forms/d/e/1FAIpQLSejeeFontH2CLs3NiNUWw2lWMflFKysZEqiWenPtthwr_KwBQ/viewform?usp=sf_link"
          >
            گوگل فرم
          </a>{" "}
          به صورت ناشناس برای ما ارسال نمایید
        </div>
      </main>
    </>
  );
};

const query =
  encodeURIComponent(`*[_type=="person" && isReady==true] | order(promote desc) {
  promote,
  isReady,
  _createdAt,
  _id, 
  _updatedAt,
  birthDate,
  status,  
  nameFa,
  arrestDate,
  killedDate,
  sloganFa,
  urls,  
  images[]{asset->{path,url}},
  descriptionFa
} `);

export async function getStaticProps() {
  const result = await sanityApi.get(`/data/query/production?query=${query}`);
  if (result.status === 200) {
    return { props: { rawData: result.data.result } };
  }
  return {
    props: { props: { rawData: [] } }, // will be passed to the page component as props
  };
}

export default Home;
