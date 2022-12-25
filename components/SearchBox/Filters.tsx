import Link from "next/link";
import useTranslate from "../../hooks/useTranslate";
import filters from "./filters.json";

const Filters = () => {
  const { t, isLatin } = useTranslate();
  const components = filters.map((filter) => {
    const pills = filter.items.map((item) => {
      const text = t(
        item.title,
        item.title !== "نقشه" && filter.title === "استان"
          ? "province"
          : undefined
      );
      return (
        <Pill
          key={item.slug}
          text={text}
          slug={
            (item.title == "نقشه" ? "" : "/search") +
            (isLatin ? item.slugEn : item.slug)
          }
        />
      );
    });
    return (
      <div key={filter.title}>
        <Title text={t(filter.title)} />
        <div className="flex gap-1 flex-wrap">{pills}</div>
      </div>
    );
  });
  return <div>{components}</div>;
};

const Title = (props: { text: string }) => {
  return <h3 className="font-semibold pt-4 pb-2 px-1">{props.text}:</h3>;
};

const Pill = (props: { text: string; slug: string }) => {
  return (
    <Link href={props.slug} passHref>
      <a className="rounded-50p border-2 border-gray-200 px-3 py-1 hover:border-gray-300">
        {props.text}
      </a>
    </Link>
  );
};
export default Filters;
