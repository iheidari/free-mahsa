import Killed from "../Icons/Killed";
import Lost from "../Icons/Lost";
import Prison from "../Icons/Prison";
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
