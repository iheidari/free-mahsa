import useTranslate from "../../hooks/useTranslate";

type Props = {
  children: string;
};

const Translate = ({ children }: Props) => {
  const { t } = useTranslate();
  return <>{t(children)}</>;
};

export default Translate;
