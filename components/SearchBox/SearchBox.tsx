import Popup from "./Popup";
import React, { useEffect, useRef, useState } from "react";
import useOutside from "../../hooks/useOutside";
import { useRouter } from "next/router";
import Form from "./Form";

type Props = {};

const SearchBox = (props: Props) => {
  const { asPath } = useRouter();
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const searchboxRef = useRef<HTMLInputElement | null>(null);
  const { clicked } = useOutside([popupRef, searchboxRef]);
  useEffect(() => {
    if (typeof clicked === "boolean") {
      setShowPopup(!clicked);
    }
  }, [clicked]);

  useEffect(() => {
    setShowPopup(false);
  }, [asPath]);

  return (
    <div className="flex justify-center">
      <div className="w-2/4 max-w-2xl">
        <Form ref={searchboxRef} />
        {showPopup && <Popup ref={popupRef} />}
      </div>
    </div>
  );
};

export default SearchBox;
