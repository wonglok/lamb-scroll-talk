"use client";

import { Suspense, useEffect, useState } from "react";
import { HeroContent } from "./_ui/HeroContent";
import { MoreContent } from "./_ui/MoreContent";
import { VideoBackground } from "./_ui/VideoBackground";

export default function Page() {
  return (
    <>
      <div className=" absolute top-0 left-0 w-full h-full select-none">
        <VideoBackground
          adsID={"#ads"}
          containerID={"#my-container"}
        ></VideoBackground>
      </div>

      <div
        id="my-container"
        className=" absolute top-0 left-0 w-full h-full z-20 overflow-scroll"
      >
        <Padding></Padding>
        <div id="ads">
          <HeroContent></HeroContent>
          <MoreContent></MoreContent>
        </div>
      </div>
    </>
  );
}

function Padding({}) {
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

  return (
    <>
      <div className="w-full select-none" style={{ height: height }}>
        <div className="flex items-end justify-end h-full w-full">
          <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`Are you sleepy?`}</div>
        </div>
      </div>
      <div className="w-full select-none" style={{ height: height }}>
        <div className="flex items-end justify-end h-full w-full">
          <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`Time to sleep.`}</div>
        </div>
      </div>
      <div className="w-full select-none" style={{ height: height }}>
        <div className="flex items-end justify-end h-full w-full">
          <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`A new day`}</div>
        </div>
      </div>
      <div className="w-full select-none" style={{ height: height }}>
        <div className="flex items-end justify-end h-full w-full">
          <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`Stress Body`}</div>
        </div>
      </div>
      <div className="w-full select-none" style={{ height: height }}>
        <div className="flex items-end justify-end h-full w-full">
          <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`Magic Cloth Changing`}</div>
        </div>
      </div>
      <div className="w-full select-none" style={{ height: height }}></div>
    </>
  );
}
