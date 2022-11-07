import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Cards from "../components/Cards";
import { sanityApi } from "../helpers/api";

type HomeProps = {
  rawData?: any;
};

const Home: NextPage = ({ rawData }: HomeProps) => {
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
        <div className="mb-10">
          <Image
            className="rounded-50p"
            alt=""
            src="/images/logo.jpg"
            width={300}
            height={300}
          />
        </div>
        <div className="mb-20 text-center">
          میتوانید اطلاعات دیگر افراد کشته و یا دستگیر شده را از طریق این{" "}
          <a
            className="underline text-green-700"
            href="https://docs.google.com/forms/d/e/1FAIpQLSejeeFontH2CLs3NiNUWw2lWMflFKysZEqiWenPtthwr_KwBQ/viewform?usp=sf_link"
          >
            گوگل فرم
          </a>{" "}
          به صورت ناشناس برای ما ارسال نمایید
        </div>
        <Cards rawData={rawData} />
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
