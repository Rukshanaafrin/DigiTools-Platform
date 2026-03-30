import { useState } from "react";
import bannerImg from "../assets/banner.png";
import playImg from "../assets/Play.png";

const Banner = () => {
  const [activeBtn, setActiveBtn] = useState("explore");

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16">
      <div className="grid lg:grid-cols-2 items-center gap-10">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            New: AI-Powered Tools Available
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-slate-900">Supercharge Your</span>
            <br />
            <span className="text-blue-600">Digital Workflow</span>
          </h1>

          <p className="text-gray-500 mt-5 text-lg leading-8 max-w-xl">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
            <br />
            Explore Products
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            {/* Explore */}
            <button
              onClick={() => setActiveBtn("explore")}
              className={`btn rounded-full px-6 ${
                activeBtn === "explore"
                  ? "bg-blue-600 text-white border-none"
                  : "btn-outline border-blue-600 text-blue-600"
              }`}
            >
              Explore Products
            </button>

            {/* Watch */}
            <button
              onClick={() => setActiveBtn("watch")}
              className={`btn rounded-full px-6 ${
                activeBtn === "watch"
                  ? "bg-blue-600 text-white border-none"
                  : "btn-outline border-blue-600 text-blue-600"
              }`}
            >
              <img src={playImg} alt="play" className="w-4 h-4" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <img
            src={bannerImg}
            alt="banner"
            className="w-full max-w-md rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;