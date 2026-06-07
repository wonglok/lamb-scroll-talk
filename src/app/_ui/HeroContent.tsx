"use client";

export function HeroContent() {
  return (
    <div
      className="relative h-full flex items-center z-20 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 50% 30%, rgba(255, 240, 200, 0.45) 0%, transparent 60%),
          radial-gradient(ellipse at 50% 50%, rgba(255,252,240,0.15) 0%, transparent 70%),
          linear-gradient(180deg,
            #c4a882 0%,
            #d4b896 3%,
            #ede0c8 8%,
            #f5e6c8 20%,
            #faf3e0 50%,
            #f5e6c8 80%,
            #ede0c8 92%,
            #d4b896 97%,
            #c4a882 100%
          )
        `,
      }}
    >
      {/* Noise / paper-grain overlay */}
      <div className="parchment-noise absolute inset-0 z-0" />

      {/* Top scroll-roll shadow */}
      <div
        className="absolute top-0 left-0 right-0 z-1 pointer-events-none"
        style={{
          height: "48px",
          background:
            "linear-gradient(180deg, rgba(80,50,20,0.15) 0%, transparent 100%)",
        }}
      />

      {/* Bottom scroll-roll shadow */}
      <div
        className="absolute bottom-0 left-0 right-0 z-1 pointer-events-none"
        style={{
          height: "48px",
          background:
            "linear-gradient(0deg, rgba(80,50,20,0.15) 0%, transparent 100%)",
        }}
      />

      {/* Top ornamental rule */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="ornament-rule w-56">
          <span className="text-base" style={{ color: "#b8860b" }}>
            ✦
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative w-full max-w-3xl mx-auto px-6 sm:px-12 lg:px-20 z-10 py-16 sm:py-20">
        {/* Subtitle */}
        <p
          className="animate-fade-in text-xs sm:text-sm tracking-[0.25em] uppercase text-center select-none"
          style={{
            color: "#b8860b",
            fontFamily: "var(--font-cinzel), serif",
          }}
        >
          ✦ &nbsp;Eternal Promise&nbsp; ✦
        </p>

        {/* Heading */}
        <h1
          className="mt-6 text-center leading-tight"
          style={{ fontFamily: "var(--font-cinzel), serif" }}
        >
          <span
            className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold animate-fade-in anim-delay-1"
            style={{ color: "#2c1810" }}
          >
            Your Heavenly Home.
          </span>
          <span className="gold-text animate-shimmer animate-glow block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mt-2 sm:mt-3 animate-fade-in anim-delay-1">
            With Jesus, Forever.
          </span>
        </h1>

        {/* Ornamental fleuron divider */}
        <div className="mt-8 sm:mt-10 animate-fade-in anim-delay-2 flex items-center justify-center">
          <div className="ornament-rule w-full max-w-55">
            <span className="text-2xl select-none" style={{ color: "#b8860b" }}>
              ❧
            </span>
          </div>
        </div>

        {/* Scripture verse */}
        <p
          className="mt-8 sm:mt-10 text-center text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto animate-fade-in anim-delay-3 italic"
          style={{
            color: "#4a3020",
            fontFamily: "var(--font-cormorant), Georgia, serif",
          }}
        >
          &ldquo;In His Father&rsquo;s house are many mansions. He has gone to
          prepare a place for you &mdash; a place of perfect peace, boundless
          joy, and everlasting love in His presence.&rdquo;
        </p>

        {/* Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-wrap gap-4 justify-center animate-fade-in anim-delay-4">
          <a
            href="#promises"
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold transition-all duration-500 cursor-pointer"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              color: "#2c1810",
              backgroundColor: "#faf3e0",
              border: "1px solid #c9a44b",
              borderRadius: "4px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#c9a44b";
              (e.target as HTMLElement).style.color = "#faf3e0";
              (e.target as HTMLElement).style.boxShadow =
                "0 4px 20px rgba(180,130,40,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#faf3e0";
              (e.target as HTMLElement).style.color = "#2c1810";
              (e.target as HTMLElement).style.boxShadow =
                "0 2px 8px rgba(0,0,0,0.06)";
            }}
          >
            Explore Promises
          </a>
          <a
            href="#connect"
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold transition-all duration-500 cursor-pointer"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              color: "#b8860b",
              backgroundColor: "transparent",
              border: "1px solid #c9a44b",
              borderRadius: "4px",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor =
                "rgba(201,164,75,0.1)";
              (e.target as HTMLElement).style.color = "#8b6914";
              (e.target as HTMLElement).style.boxShadow =
                "0 4px 20px rgba(180,130,40,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "transparent";
              (e.target as HTMLElement).style.color = "#b8860b";
              (e.target as HTMLElement).style.boxShadow = "none";
            }}
          >
            Connect With Us
          </a>
        </div>

        {/* Stats */}
        <div
          className="mt-14 sm:mt-16 pt-8 border-t animate-fade-in anim-delay-5"
          style={{ borderColor: "rgba(180, 134, 11, 0.2)" }}
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { value: "John 14:2", label: "Promise" },
              { value: "Eternal", label: "Life" },
              { value: "Reign", label: "With Him" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-lg sm:text-xl lg:text-2xl font-bold"
                  style={{
                    color: "#2c1810",
                    fontFamily: "var(--font-cinzel), serif",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="mt-1 text-[10px] sm:text-xs tracking-[0.15em] uppercase"
                  style={{
                    color: "#8b6914",
                    fontFamily: "var(--font-cinzel), serif",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom ornamental rule */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="ornament-rule w-56">
          <span className="text-base" style={{ color: "#b8860b" }}>
            ✦
          </span>
        </div>
      </div>
    </div>
  );
}
