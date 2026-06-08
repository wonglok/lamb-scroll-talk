import { useEffect, useState } from "react";

export const useHeight = () => {
  let [height, setHeight] = useState("100vh");
  useEffect(() => {
    setHeight(`${window.innerHeight}px`);
    let tt = () => {
      setHeight(`${window.innerHeight}px`);
    };
    window.addEventListener("resize", tt);
    return () => {
      window.removeEventListener("resize", tt);
    };
  }, []);

  return height;
};
