import Image, { StaticImageData } from "next/future/image";
import useTranslate from "../../hooks/useTranslate";
import Translate from "../Translate/Translate";

export type ArrestedPersonProps = {
  name: string;
  status?: string;
  city?: string;
  details?: string;
  type?: string;
};

export type CardStatus = "killed" | "arrested" | "lost";

const Card = ({ name, status, city, details, type }: ArrestedPersonProps) => {
  const { t, isLatin } = useTranslate();
  return (
    <div
      className={`text-white ${
        status === "killed" ? "bg-red-800" : "bg-green-900"
      } rounded-50p flex relative box-border w-72 h-72 
        ${status === "killed" ? "hover:bg-red-700" : "hover:bg-green-800"}`}
    >
      <div className="rounded-50p pb-7 pt-0 py-3 relative flex-1 text-center box-border max-w-full">
        <Image
          alt={t(name)}
          style={{ marginTop: "-36px", overflow: "hidden" }}
          className="w-44 h-44 mx-auto mb-0 overflow-hidden object-center-bottom object-cover rounded-34p relative block"
          src="/images/arrested.jpg"
          width={180}
          height={180}
        />
        <h3 className="text-lg mt-4 mb-4">{t(name, "name")}</h3>
        <h4 className="text-lg mt-4 mb-4">
          {t(type)} - {t(city, "city")}
        </h4>
        <h4 className="text-lg mt-4 mb-4">{t(details)}</h4>
        <h5
          className={`absolute -rotate-45 top-6 -left-1 w-20 border-2 rounded-34p bg-slate-50 bg-opacity-20 ${
            isLatin ? "text-xs" : ""
          }`}
        >
          {t(status).toLowerCase()}
        </h5>
      </div>
    </div>
  );
};

export default Card;
