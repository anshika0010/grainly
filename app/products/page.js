import React from "react";
import LetterMarquee from "../components/Home/Marquee";
import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <ProductsSection/>
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h6 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Grainly Cream of Rice: The Everyday Staple That Finally Grew Up
          </h6>

          <div className="space-y-2 text-gray-700 text-[17px] leading-relaxed">
            <p>
              There's something quietly powerful about a bowl of{" "}
              <b>warm, smooth grain</b> in the morning or after a hard training
              session, or on a cold evening when your body just wants something
              gentle and grounding. For generations,<b> cream of rice </b>has
              existed in that humble space: dependable, uncomplicated, almost
              invisible. It never demanded attention. It just worked.
            </p>

            <p>
              But let's be honest <b> traditional cream of rice</b> also kind of
              sucked.
            </p>

            <p>
              Not in what it was, but in how it behaved. The clumpy texture that
              required constant stirring. The{" "}
              <b> fifteen-minute stovetop babysitting </b>. The cardboard
              blandness that made you question whether you were eating breakfast
              or spackling a wall. And perhaps worst of all, the monotony. Day
              three of plain <b>cream of rice? </b> Tolerable. Day thirty? A
              special kind of <b> dietary purgatory </b>.
            </p>

            <p>
              <b> Grainly</b> didn't set out to revolutionize cream of rice. It
              set out to respect it to take this unassuming, genuinely useful
              food and bring it into the reality of how people actually{" "}
              <b> live, eat, and move today</b>.
            </p>

            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 pt-4 border-t">
              What Changed (And Why It Matters)
            </h3>

            <p>
              The core innovation sounds almost too simple:
              <b> precision milling</b>
              that transforms rice grains into a{" "}
              <b>superfine, evenly textured powder</b> that hydrates completely
              and consistently in about sixty seconds with{" "}
              <b> hot water or warm milk. No clumps. No graininess.</b> No
              standing over a stove wondering if this is really how adults
              should be spending their mornings.
            </p>

            <p>
              But the technical refinement is only half the story. The other
              half is<b> cultura </b>l.
            </p>

            <p>
              Grainly recognized something most <b> "performance food"</b>{" "}
              brands miss: people don't abandon foods because they stop
              working—they abandon them because they stop enjoying them.
              <b> Cream of rice</b> delivers clean,{" "}
              <b>steady carbohydrate energy</b>. It's easy on the gut. It
              doesn't cause crashes. These qualities never stopped mattering.
              What stopped mattering was eating the same flavorless paste every
              single day until the sight of it made you reach for toast instead.
            </p>

            <p>
              So<b> Grainly built a flavor library </b> not with twelve
              variations of "chocolate" or artificial candy nonsense, but with
              genuinely thoughtful profiles inspired by desserts and global food
              traditions. Flavors that make you want to eat cream of rice, not
              just tolerate it. Flavors designed for daily rotation without
              sugar dependency or artificial sweetener overload.
            </p>

            <p>
              This is where Grainly stops being a product update and starts
              being something more interesting: a food you can actually sustain.
            </p>

            <h4 className="text-2xl sm:text-3xl font-semibold text-gray-900 pt-8 border-t">
              Who This Is Really For
            </h4>

            <p>
              <b> Grainly </b>doesn't scream at you from the label. It doesn't
              promise six-pack abs or mythical performance breakthroughs. It's
              not trying to be a supplement, a hack, or a shortcut. It's just
              trying to be a really good version of cream of rice and that
              unpretentious honesty is exactly what makes it valuable.
            </p>

            <p className="text-xl font-semibold text-gray-900 pt-4">
              Athletes and Active People
            </p>

            <p>
              If you train hard, you know the carbohydrate timing game.
              Pre-workout fuel that doesn't sit like a brick. Post-workout
              replenishment that your body can actually process.
              <b> Grainly fits these windows elegantly</b> because it's
              fast-digesting without being harsh, substantial without being
              heavy. The one minute prep means it's ready when you are, not when
              your stovetop decides to cooperate. The smooth texture means you
              can get it down even when appetite is low post-training. And the
              variety means you can eat it six days a week without developing a{" "}
              <b>Pavlovian aversion</b>.
            </p>

            <p className="text-xl font-semibold text-gray-900 pt-4">
              Busy Professionals and Parents
            </p>

            <p>
              There's a specific kind of morning chaos where you need fuel but
              have approximately ninety seconds and zero brain cells to spare
              for culinary decisions. <b>Grainly</b> exists in that narrow
              window between "I should eat something" and "I guess I'll just
              drink coffee until lunch." It's warm, it's fast, it's satisfying.
              You can <b>doctor it up or leave it simple</b>. You can eat it
              standing by the sink or pack it for later. It doesn't demand
              perfection from you it just shows up consistently.
            </p>

            <p className="text-xl font-semibold text-gray-900 pt-4">
              People with Sensitive Digestion
            </p>

            <p>
              <b>Cream of rice</b> has always been a{" "}
              <b>digestive refuge gentle, low fiber, </b>easy to break down. For
              those managing IBS, recovering from illness, or simply navigating
              gut sensitivity, Grainly preserves that essential gentleness while
              making it less punishing to actually consume. The refined texture
              eliminates the harsh granularity that can irritate. The{" "}
              <b> rapid preparation</b> means less time stressing over food
              logistics. And the flavor variety means you're not adding
              <b> handfuls of sugar or irritating additives</b> just to make it
              palatable.
            </p>
          </div>
        </div>
      </section>
      <LetterMarquee />
    </div>
  );
};

export default page;
