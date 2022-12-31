import { CardStatus } from "./Card";
import useTranslate from "../../hooks/useTranslate";

type Props = {
  status: CardStatus;
};

const Tag = ({ status }: Props) => {
  const { t, isLatin } = useTranslate();
  return (
    <h5
      className={`absolute -rotate-45 top-6 -left-1 w-20 border-2 rounded-34p bg-slate-50 bg-opacity-20 ${
        isLatin ? "text-xs" : ""
      }`}
    >
      {t(status)}
    </h5>
  );
};

export default Tag;
