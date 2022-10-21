import Killed from "../Icons/killed";
import Lost from "../Icons/lost";
import Prison from "../Icons/prison";
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
  if (status === "prison") {
    return <Prison />;
  }
  return null;
};

export default Tag;
