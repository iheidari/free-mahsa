import Killed from "../Icons/Killed";
import Lost from "../Icons/Lost";
import Arrested from "../Icons/Arrested";
import { CardStatus } from "./Card";

type Props = {
  status: CardStatus;
};

const Tag = ({ status }: Props) => {
  if (status === "killed") {
    return <Killed />;
  }
  if (status === "lost") {
    return <Lost />;
  }
  if (status === "arrested") {
    return <Arrested />;
  }
  return null;
};

export default Tag;
