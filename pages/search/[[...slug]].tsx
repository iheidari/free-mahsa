import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cards, { rawCardType } from "../../components/Cards-Arrested/Cards";
import Header from "../../components/Header";
import SearchBox from "../../components/SearchBox";
import { getCards } from "../../services/search";

const Search = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [card, setCard] = useState<rawCardType[]>([]);
  useEffect(() => {
    setCard(getCards(slug));
  }, [slug]);

  return (
    <>
      <Header />
      <SearchBox />
      <Cards rawData={card} />
    </>
  );
};

export default Search;
