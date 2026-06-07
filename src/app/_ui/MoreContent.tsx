export function MoreContent() {
  // bg-white/50
  return (
    <div className="backdrop-blur-[25px]  relative z-20 overflow-hidden  ">
      {/* Subtle top fade-in from transparent to white */}
      {/* <div
        className="absolute top-0 left-0 right-0 z-1 pointer-events-none"
        style={{
          height: "80px",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%)",
        }}
      /> */}

      {/* Section 1: Life in Christ */}
      <section className="relative w-full max-w-3xl mx-auto px-6 sm:px-12 lg:px-20 z-10 py-16 sm:py-2  ">
        {/* Ornamental divider */}
        <div className="animate-fade-in flex items-center justify-center">
          <div className="ornament-rule w-full max-w-55">
            <span className="text-2xl select-none" style={{ color: "#b8860b" }}>
              ❧
            </span>
          </div>
        </div>

        <p
          className="animate-fade-in mt-6 text-xs sm:text-sm tracking-[0.25em] uppercase text-center select-none  "
          style={{
            color: "#b8860b",
            fontFamily: "var(--font-cinzel), serif",
          }}
        >
          ✦ &nbsp;Life in Christ&nbsp; ✦
        </p>

        <h2
          className="animate-fade-in anim-delay-1 mt-6 text-center text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight "
          style={{ color: "#2c1810", fontFamily: "var(--font-cinzel), serif" }}
        >
          A New Creation
        </h2>

        <p
          className="animate-fade-in anim-delay-2 mt-8 text-center text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto"
          style={{
            color: "#4a3020",
            fontFamily: "var(--font-cormorant), Georgia, serif",
          }}
        >
          Therefore, if anyone is in Christ, he is a new creation. The old has
          passed away; behold, the new has come. All this is from God, who
          through Christ reconciled us to Himself.
        </p>

        <p
          className="animate-fade-in anim-delay-2 mt-1 text-center text-xs sm:text-sm tracking-[0.15em] uppercase"
          style={{ color: "#8b6914", fontFamily: "var(--font-cinzel), serif" }}
        >
          2 Corinthians 5:17-18
        </p>

        {/* Three pillars of life in Christ */}
        <div className="animate-fade-in anim-delay-3 mt-12 grid grid-cols-1 sm:grid-cols-1 gap-6 text-center">
          {[
            {
              title: "Faith",
              verse: "Galatians 2:20",
              body: "I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave Himself for me.",
            },
            {
              title: "Grace",
              verse: "Ephesians 2:8",
              body: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.",
            },
            {
              title: "Abiding",
              verse: "John 15:5",
              body: "I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing.",
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="px-4 py-6 bg-white/70  backdrop-blur-3xl"
              style={{
                border: "1px solid rgba(180, 134, 11, 0.2)",
                borderRadius: "4px",
              }}
            >
              <h3
                className="text-lg font-bold"
                style={{
                  color: "#2c1810",
                  fontFamily: "var(--font-cinzel), serif",
                }}
              >
                {pillar.title}
              </h3>
              <p
                className="mt-1 text-[10px] tracking-[0.15em] uppercase"
                style={{
                  color: "#b8860b",
                  fontFamily: "var(--font-cinzel), serif",
                }}
              >
                {pillar.verse}
              </p>
              <p
                className="mt-4 text-sm leading-relaxed italic"
                style={{
                  color: "#4a3020",
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                }}
              >
                &ldquo;{pillar.body}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <p
          className="animate-fade-in anim-delay-4 mt-10 text-center text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
          style={{
            color: "#4a3020",
            fontFamily: "var(--font-cormorant), Georgia, serif",
          }}
        >
          To live in Christ is to walk in the Spirit, to be transformed daily
          into His likeness. It is a life not of perfection by our own strength,
          but of surrender &mdash; a daily dying to self and rising anew in Him.
          In Christ, we find our true identity not in what we do, but in whose
          we are: beloved children of the Most High, sealed with the promised
          Holy Spirit.
        </p>
      </section>

      {/* Section 2: Rewards in Heaven */}
      <section className="relative w-full max-w-3xl mx-auto px-6 sm:px-12 lg:px-20 z-10 py-16 sm:py-20">
        {/* Ornamental divider */}
        <div className="animate-fade-in flex items-center justify-center">
          <div className="ornament-rule w-full max-w-55">
            <span className="text-2xl select-none" style={{ color: "#b8860b" }}>
              ❧
            </span>
          </div>
        </div>

        <p
          className="animate-fade-in mt-6 text-xs sm:text-sm tracking-[0.25em] uppercase text-center select-none"
          style={{
            color: "#b8860b",
            fontFamily: "var(--font-cinzel), serif",
          }}
        >
          ✦ &nbsp;Rewards in Heaven&nbsp; ✦
        </p>

        <h2
          className="animate-fade-in anim-delay-1 mt-6 text-center text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          style={{ color: "#2c1810", fontFamily: "var(--font-cinzel), serif" }}
        >
          An Eternal Weight of Glory
        </h2>

        <p
          className="animate-fade-in anim-delay-2 mt-8 text-center text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto italic"
          style={{
            color: "#4a3020",
            fontFamily: "var(--font-cormorant), Georgia, serif",
          }}
        >
          &ldquo;For this light momentary affliction is preparing for us an
          eternal weight of glory beyond all comparison.&rdquo;
        </p>

        <p
          className="mt-1 text-center text-xs sm:text-sm tracking-[0.15em] uppercase"
          style={{ color: "#8b6914", fontFamily: "var(--font-cinzel), serif" }}
        >
          2 Corinthians 4:17
        </p>

        <p
          className="animate-fade-in anim-delay-3 mt-10 text-center text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
          style={{
            color: "#4a3020",
            fontFamily: "var(--font-cormorant), Georgia, serif",
          }}
        >
          Scripture speaks of five heavenly crowns awaiting the faithful: the
          imperishable crown for those who run the race with discipline, the
          crown of rejoicing for those who lead souls to Christ, the crown of
          righteousness for those who long for His appearing, the crown of life
          for those who persevere under trial, and the crown of glory for those
          who shepherd the flock of God. These are not crowns we cast at His
          feet in pride, but crowns we lay down in worship &mdash; for every
          good work done in the body is but Christ working through us.
        </p>

        {/* Crowns grid */}
        <div className="animate-fade-in anim-delay-4 mt-12 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-5">
          {[
            {
              crown: "Imperishable",
              ref: "1 Corinthians 9:25",
              desc: "For those who exercise self-control and run the race to win.",
            },
            {
              crown: "Rejoicing",
              ref: "1 Thessalonians 2:19",
              desc: "For those who bring others to the saving knowledge of Christ.",
            },
            {
              crown: "Righteousness",
              ref: "2 Timothy 4:8",
              desc: "For all who have loved His appearing and kept the faith.",
            },
            {
              crown: "Life",
              ref: "James 1:12",
              desc: "For those who remain steadfast under trial and temptation.",
            },
            {
              crown: "Glory",
              ref: "1 Peter 5:4",
              desc: "For the faithful shepherds who tend God's flock with love.",
            },
            {
              crown: "Treasure",
              ref: "Matthew 6:20",
              desc: "Store up treasures in heaven, where moth and rust do not destroy.",
            },
          ].map((item) => (
            <div
              key={item.crown}
              className="px-5 py-5 text-center bg-white/70 backdrop-blur-sm"
              style={{
                border: "1px solid rgba(180, 134, 11, 0.2)",
                borderRadius: "4px",
              }}
            >
              <span
                className="text-xl select-none"
                style={{ color: "#b8860b" }}
              >
                ✦
              </span>
              <h3
                className="mt-2 text-base font-bold"
                style={{
                  color: "#2c1810",
                  fontFamily: "var(--font-cinzel), serif",
                }}
              >
                Crown of {item.crown}
              </h3>
              <p
                className="mt-1 text-[10px] tracking-[0.1em] uppercase"
                style={{
                  color: "#8b6914",
                  fontFamily: "var(--font-cinzel), serif",
                }}
              >
                {item.ref}
              </p>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{
                  color: "#4a3020",
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Body as Temple of the Holy Spirit */}
      <section className="relative w-full max-w-3xl mx-auto px-6 sm:px-12 lg:px-20 z-10 py-16 sm:py-20">
        {/* Ornamental divider */}
        <div className="animate-fade-in flex items-center justify-center">
          <div className="ornament-rule w-full max-w-55">
            <span className="text-2xl select-none" style={{ color: "#b8860b" }}>
              ❧
            </span>
          </div>
        </div>

        <p
          className="animate-fade-in mt-6 text-xs sm:text-sm tracking-[0.25em] uppercase text-center select-none"
          style={{
            color: "#b8860b",
            fontFamily: "var(--font-cinzel), serif",
          }}
        >
          ✦ &nbsp;Temple of the Holy Spirit&nbsp; ✦
        </p>

        <h2
          className="animate-fade-in anim-delay-1 mt-6 text-center text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          style={{ color: "#2c1810", fontFamily: "var(--font-cinzel), serif" }}
        >
          Your Body, His Dwelling
        </h2>

        <p
          className="animate-fade-in anim-delay-2 mt-8 text-center text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto italic"
          style={{
            color: "#4a3020",
            fontFamily: "var(--font-cormorant), Georgia, serif",
          }}
        >
          &ldquo;Do you not know that your body is a temple of the Holy Spirit
          within you, whom you have from God? You are not your own, for you were
          bought with a price. So glorify God in your body.&rdquo;
        </p>

        <p
          className="mt-1 text-center text-xs sm:text-sm tracking-[0.15em] uppercase"
          style={{ color: "#8b6914", fontFamily: "var(--font-cinzel), serif" }}
        >
          1 Corinthians 6:19-20
        </p>

        <p
          className="animate-fade-in anim-delay-3 mt-10 text-center text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
          style={{
            color: "#4a3020",
            fontFamily: "var(--font-cormorant), Georgia, serif",
          }}
        >
          In the Old Covenant, God&rsquo;s presence dwelt in a temple made of
          stone. But at Pentecost, everything changed. The Spirit of the living
          God no longer resides in buildings made by human hands &mdash; He now
          dwells within every believer. Your body is sacred ground, a living
          sanctuary where heaven touches earth. Every heartbeat is an act of
          worship. Every breath is filled with His presence. Honor God with your
          body &mdash; not merely in what you avoid, but in what you pursue:
          holiness, purity, and wholehearted devotion.
        </p>

        {/* Temple truths */}
        <div className="animate-fade-in anim-delay-4 mt-12 space-y-6">
          {[
            {
              title: "Purchased at a Price",
              verse: "1 Corinthians 6:20",
              body: "You were bought with the precious blood of Christ. You are not your own. Your body, your mind, your spirit — all belong to Him who redeemed you. This is not a burden but a liberation: you are free from the bondage of sin because you belong to the One who conquered death.",
            },
            {
              title: "A Living Sacrifice",
              verse: "Romans 12:1",
              body: "Present your bodies as a living sacrifice, holy and acceptable to God — this is your spiritual worship. True worship is not confined to a Sunday service. It is the daily offering of your entire self: your thoughts, your words, your actions, laid upon the altar before the throne of grace.",
            },
            {
              title: "The Spirit's Fruit",
              verse: "Galatians 5:22-23",
              body: "When the Holy Spirit dwells within you, His presence produces fruit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. A temple is known not by its outward adornment alone, but by the fragrance of the One who inhabits it.",
            },
          ].map((truth) => (
            <div
              key={truth.title}
              className="px-6 py-6 bg-white/70 backdrop-blur-sm"
              style={{
                borderLeft: "3px solid #c9a44b",
                borderRadius: "0 4px 4px 0",
              }}
            >
              <h3
                className="text-lg font-bold"
                style={{
                  color: "#2c1810",
                  fontFamily: "var(--font-cinzel), serif",
                }}
              >
                {truth.title}
              </h3>
              <p
                className="mt-1 text-[10px] tracking-[0.15em] uppercase"
                style={{
                  color: "#b8860b",
                  fontFamily: "var(--font-cinzel), serif",
                }}
              >
                {truth.verse}
              </p>
              <p
                className="mt-4 text-sm sm:text-base leading-relaxed"
                style={{
                  color: "#4a3020",
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                }}
              >
                {truth.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing section */}
      <section className="relative w-full max-w-3xl mx-auto px-6 sm:px-12 lg:px-20 z-10 py-16 sm:py-24">
        {/* Ornamental divider */}
        <div className="animate-fade-in flex items-center justify-center">
          <div className="ornament-rule w-full max-w-55">
            <span className="text-2xl select-none" style={{ color: "#b8860b" }}>
              ❧
            </span>
          </div>
        </div>

        <h2
          className="animate-fade-in anim-delay-1 mt-8 text-center text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight gold-text animate-shimmer animate-glow"
          style={{ fontFamily: "var(--font-cinzel), serif" }}
        >
          For All the Promises of God
          <br />
          Find Their Yes in Christ
        </h2>

        <p
          className="animate-fade-in anim-delay-2 mt-6 text-center text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
          style={{
            color: "#4a3020",
            fontFamily: "var(--font-cormorant), Georgia, serif",
          }}
        >
          Life in Christ is the beginning of an eternity that never ends. The
          rewards He promises are not earned by human striving but received by
          grace through faith. And the body He has given you &mdash; this
          fragile vessel of clay &mdash; is now a temple where His Spirit
          dwells. Walk in this truth. Live in this hope. You are loved, you are
          chosen, and you are destined for glory.
        </p>

        {/* Final stats / verse grid */}
        <div
          className="animate-fade-in anim-delay-3 mt-14 pt-8 border-t"
          style={{ borderColor: "rgba(180, 134, 11, 0.2)" }}
        >
          <div className="grid grid-cols-1 gap-4 text-center">
            {[
              { value: "New Creation", label: "In Christ" },
              { value: "5 Crowns", label: "Eternal Reward" },
              { value: "Temple", label: "Holy Spirit" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-base sm:text-lg lg:text-xl font-bold"
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

        {/* Bottom ornamental rule */}
        <div className="animate-fade-in anim-delay-4 mt-12 flex items-center justify-center">
          <div className="ornament-rule w-56">
            <span
              className="text-base select-none"
              style={{ color: "#b8860b" }}
            >
              ✦
            </span>
          </div>
        </div>
      </section>

      {/* Subtle bottom fade-out */}
      <div
        className="absolute bottom-0 left-0 right-0 z-1 pointer-events-none"
        style={{
          height: "80px",
          background:
            "linear-gradient(0deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
    </div>
  );
}
