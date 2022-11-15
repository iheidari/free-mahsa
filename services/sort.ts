import { ArrestedPersonProps } from "../components/Cards-Arrested/Card";

export const sortArrested = (
  person1: ArrestedPersonProps,
  person2: ArrestedPersonProps
) => {
  if (person1.status === person2.status) {
    return 0;
  }
  if (person1.status === "زندانی") {
    return -1;
  }
  if (person2.status === "زندانی") {
    return 1;
  }
  return 0;
};
