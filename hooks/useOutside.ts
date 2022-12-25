import { useRouter } from "next/router";
import { MutableRefObject, useEffect, useState } from "react";

const useOutside = (refs: MutableRefObject<HTMLElement | null>[]) => {
  const [clicked, setClicked] = useState<boolean | undefined>();
  const { asPath } = useRouter();

  useEffect(() => {
    setClicked(undefined);
  }, [asPath]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      let result;
      if (event.target) {
        result = true;
        for (let i = 0; i < refs.length; i++) {
          const ref = refs[i];
          if (ref.current && ref.current.contains(event.target as Node)) {
            result = false;
          }
        }
      }
      setClicked(result);
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs]);
  return { clicked };
};

export default useOutside;
