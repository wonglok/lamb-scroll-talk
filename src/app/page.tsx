"use client";

// Suspense,
import { useEffect, useState } from "react";
// import { HeroContent } from "./_ui/HeroContent";
// import { MoreContent } from "./_ui/MoreContent";
import { VideoBackground } from "./_ui/VideoBackground";

export default function Page() {
  const height = useHeight();
  const [show, setShow] = useState(false);
  return (
    <>
      <div className=" fixed top-0 left-0 w-full h-full select-none">
        <VideoBackground
          adsID={"#ads"}
          containerID={"#my-container"}
          onReady={() => {
            //
            //
            setShow(true);
          }}
        ></VideoBackground>
      </div>

      <div
        id="my-container"
        className={
          " absolute top-0 left-0 w-full h-full z-20 overflow-scroll " +
          `${show ? `visible` : `invisible`}`
        }
      >
        <Padding></Padding>
        <div id="ads">
          {show && (
            <div
              className="w-full bg-black/20 backdrop-blur-2xl flex items-center justify-center"
              style={{ height: `${height}` }}
            >
              <div className="text-6xl text-amber-100 text-shadow-[#ffb74c] text-shadow-2xs">
                Thank you!
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const useHeight = () => {
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

function Padding({}) {
  const height = useHeight();

  return (
    <>
      <div className="w-full select-none" style={{ height: height }}>
        <div className="flex items-center justify-end h-full w-full">
          <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`Are you sleepy?`}</div>
        </div>
      </div>
      <div className="w-full select-none" style={{ height: height }}>
        <div className="flex items-center justify-end h-full w-full">
          <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`Time to sleep.`}</div>
        </div>
      </div>
      <div className="w-full select-none" style={{ height: height }}>
        <div className="flex items-center justify-end h-full w-full">
          <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`Count the sheep.`}</div>
        </div>
      </div>
      <div className="w-full select-none" style={{ height: height }}>
        <div className="flex items-center justify-end h-full w-full">
          <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`Good morning!`}</div>
        </div>
      </div>
      <div className="w-full select-none" style={{ height: height }}>
        <div className="flex items-center justify-end h-full w-full">
          <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`Let's get off bed.`}</div>
        </div>
      </div>
      <div className="w-full select-none" style={{ height: height }}>
        <div className="flex items-center justify-end h-full w-full">
          <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`A new day!`}</div>
        </div>
      </div>
      <div className="w-full select-none" style={{ height: height }}>
        <div className="flex items-center justify-end h-full w-full">
          <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`Shine!`}</div>
        </div>
      </div>
      <div className="w-full select-none" style={{ height: height }}>
        <div className="flex items-center justify-end h-full w-full">
          <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`Let's go!`}</div>
        </div>
      </div>
      <div className="w-full select-none" style={{ height: height }}>
        <div className="flex items-center justify-end h-full w-full">
          <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`back to sleep again. 😆`}</div>
        </div>
      </div>
    </>
  );
}
