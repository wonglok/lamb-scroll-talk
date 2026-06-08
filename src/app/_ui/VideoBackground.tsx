// @ts-nocheck
"use client";
import { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useHeight } from "./useHeight";
gsap.registerPlugin(ScrollTrigger);

/* The encoding is super important here to enable frame-by-frame scrubbing. */

// GOOD QUALITY
// ffmpeg -i ./input.mp4 -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4

// LOWER QUALITY
// ffmpeg -i ./input.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

// first frame
// ffmpeg -i output.mp4 -frames:v 1 first.jpg

// last frame
// ffmpeg -sseof -1 -i output.mp4 -update 1 -q:v 2 last.jpg

//
export function VideoBackground({
  containerID = "#my-container",
  adsID = "",
  content,
  onReady = () => {},
  stops = 0,
  sensitivity = 0.08,
}: {
  adsID: string;
  containerID: string;
  content?: ReactNode | null;
  onReady?: () => void;
  stops?: number;
  sensitivity?: number;
}) {
  const [sURL, setScrollURL] = useState(false);
  useEffect(() => {
    function once(
      el: HTMLElement,
      event: Record<string, any>,
      fn: () => void,
      opts?: any,
    ) {
      var onceFn = function (e) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, arguments);
      };

      el.addEventListener(event, onceFn, opts);
      return onceFn;
    }

    once(document.documentElement, "touchstart", async function (e) {
      let ttt = setInterval(() => {
        let video = document.querySelector("#vid");
        if (video) {
          clearInterval(ttt);
          video.play();
          setTimeout(() => {
            video.pause();
          });
        }
      }, 1);
    });

    {
      let ttt = setInterval(() => {
        let video = document.querySelector("#vid");
        if (video) {
          clearInterval(ttt);

          once(video, "play", async function (e) {
            //

            video.pause();

            //
            //
          });
        }
      }, 1);
    }

    fetch("/vids/output.mp4")
      .then(async (r) => {
        return URL.createObjectURL(await r.blob());
      })
      .then((link) => {
        setScrollURL(link);
      });

    {
      let ttt = setInterval(() => {
        let container = document.querySelector(containerID) as HTMLDivElement;

        let video = document.querySelector("#vid");
        let ads = document.querySelector(adsID);
        if (video && ads && container && video.duration) {
          clearInterval(ttt);
          //
          //
          // // --- Touch lock-step ---
          // let currentStop = 0;
          // let lerpRaf: number | null = null;

          // const getStopInfo = () => {
          //   let winHeight = window.innerHeight;
          //   let scrollHeight = container.scrollHeight;
          //   let adsHeight = ads.clientHeight;
          //   let total = scrollHeight - winHeight - adsHeight;
          //   let progress = total > 0 ? container.scrollTop / total : 0;
          //   let rawIndex = progress * (stops - 1);
          //   return { total, progress, rawIndex };
          // };

          // const scrollToStop = (index: number) => {
          //   let { total } = getStopInfo();
          //   if (total <= 0) return;
          //   index = Math.max(0, Math.min(stops - 1, index));
          //   let target = (index / (stops - 1)) * total;
          //   currentStop = index;

          //   if (lerpRaf) cancelAnimationFrame(lerpRaf);
          //   const lerp = () => {
          //     let cur = container.scrollTop;
          //     let next = cur + (target - cur) * 0.1;
          //     if (Math.abs(target - next) < 0.5) {
          //       container.scrollTop = target;
          //       lerpRaf = null;
          //       return;
          //     }
          //     container.scrollTop = next;
          //     lerpRaf = requestAnimationFrame(lerp);
          //   };
          //   lerpRaf = requestAnimationFrame(lerp);
          // };

          // if (stops > 1) {
          //   container.addEventListener("touchstart", () => {
          //     let { rawIndex } = getStopInfo();
          //     currentStop = Math.round(rawIndex);
          //     currentStop = Math.max(0, Math.min(stops - 1, currentStop));
          //     if (lerpRaf) cancelAnimationFrame(lerpRaf);
          //   });

          //   container.addEventListener("touchend", () => {
          //     let { rawIndex } = getStopInfo();
          //     let delta = rawIndex - currentStop;

          //     if (delta > sensitivity) {
          //       scrollToStop(currentStop + 1);
          //     } else if (delta < -sensitivity) {
          //       scrollToStop(currentStop - 1);
          //     } else {
          //       scrollToStop(currentStop);
          //     }
          //   });
          // }
          // // --- end touch lock-step ---

          container.addEventListener("scroll", (ev) => {
            let scrollTop = container.scrollTop;
            let winHeight = window.innerHeight;

            let scrollHeight = container.scrollHeight;

            let adsHeight = ads.clientHeight;
            let total = scrollHeight - winHeight - adsHeight;

            let progress = scrollTop / total;

            if (progress >= 0.995) {
              progress = 0.995;
            }
            // console.log(scrollTop / total);

            video.currentTime = (video.duration || 1) * progress;

            if (refHScroll.current) {
              refHScroll.current.style.transform = `translateX(${window.innerWidth * -9 * progress}px)`;
            }
          });
          //
        }
      }, 1);
    }

    /* ---------------------------------- */
    /* Scroll Control! */

    // once(document.documentElement, "touchstart", function (e) {
    //   video.play();
    //   setTimeout(() => {
    //     video.pause();
    //   });
    // });

    // var t = video.currentTime;
    // // video.setAttribute("src", blobURL);
    // video.currentTime = t + 0.01;

    // /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
    // if (window["fetch"]) {
    //   setTimeout(() => {}, 1000);
    // }
    /* ---------------------------------- */
  }, []);

  const refHScroll = useRef();

  const height = useHeight();

  return (
    <>
      {/*  */}

      <img className=" z-[1] absolute top-0 left-0 object-cover w-full h-full select-none fill-background bg-linear-60 from-grey-200 to-grey-700"></img>

      <div className=" absolute top-0 left-0 z-[2] w-full h-full bg-[#b2f5ff] flex items-center justify-center">
        <div className="text-7xl text-white">{`Loading`}</div>
      </div>

      {sURL && (
        <video
          className=" z-[15] absolute top-0 left-0 object-cover w-full h-full select-none"
          id="vid"
          src={sURL}
          preload="auto"
          autoFocus
          muted
          autoPlay
          playsInline={true}
          onLoadedMetadata={(ev) => {
            const container = document.querySelector(containerID);

            const timeline = gsap.timeline({
              defaults: { duration: 1 },
              scrollTrigger: {
                trigger: container,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
              },
              onComplete: (ev) => {},
            });

            timeline.fromTo(
              ev.target,
              {
                currentTime: 0,
              },
              {
                currentTime: ev.target.duration || 1,
              },
            );

            ev.target.currentTime = 0.1;
            setTimeout(() => {
              ev.target.currentTime = 0;

              onReady();
            }, 10);
          }}
        ></video>
      )}

      <div className=" absolute top-0 left-0 z-[20] w-full h-full overflow-x-hidden ">
        <div className="h-full flex w-[900vw]" ref={refHScroll}>
          <div className="w-full h-full flex items-end justify-center ">
            <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`Are you sleepy?`}</div>
          </div>
          <div className="w-full h-full flex items-end justify-center ">
            <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`Time to sleep.`}</div>
          </div>
          <div className="w-full h-full flex items-end justify-center ">
            <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`Count the sheep.`}</div>
          </div>
          <div className="w-full h-full flex items-end justify-center ">
            <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`Good morning!`}</div>
          </div>
          <div className="w-full h-full flex items-end justify-center ">
            <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`Let's get off bed.`}</div>
          </div>
          <div className="w-full h-full flex items-end justify-center ">
            <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`A new day!`}</div>
          </div>
          <div className="w-full h-full flex items-end justify-center ">
            <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`Shine!`}</div>
          </div>
          <div className="w-full h-full flex items-end justify-center ">
            <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`Let's Go!`}</div>
          </div>
          <div className="w-full h-full flex items-end justify-center ">
            <div className="m-5 p-5 backdrop-blur-md rounded-2xl bg-white/30 text-6xl">{`Back to slee pagain 😆`}</div>
          </div>
        </div>
      </div>
    </>
  );
}
