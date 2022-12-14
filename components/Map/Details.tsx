import useTranslate from "../../hooks/useTranslate";
import { ArrestedPersonProps } from "../Cards-Arrested/Card";

type Props = {
  data: ArrestedPersonProps[];
};

const Details = ({ data }: Props) => {
  const { t } = useTranslate();
  const freeCount = data.filter(
    (item) => item.status == "آزادی با وثیقه" || item.status == "آزاد شد"
  ).length;
  const arrestedCount = data.filter(
    (item) => item.status == "ناپدید" || item.status == "زندانی"
  ).length;
  return (
    <div className="flex flex-row gap-3 justify-center">
      <div>
        {t("زندانی")}: {arrestedCount}
      </div>
      <div>
        {t("آزاد")}: {freeCount}
      </div>
    </div>
  );
};

export default Details;
