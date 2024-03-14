import React from "react";

function AboutPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#FCEDD8] overflow-hidden">
      <img
        src="./public/photo_front.png"
        className="absolute top-[6rem] right-[5rem] w-[23rem] rotate-12 rounded-lg drop-shadow-xl brightness-125 hover:scale-125 hover:-rotate-3 transition-all"
      />
      <img
        src="./public/photo_back.png"
        className="absolute bottom-[6rem] left-[5rem] w-[23rem] -rotate-12 rounded-lg drop-shadow-xl brightness-125 hover:scale-125 hover:-rotate-6 transition-all"
      />
      <img
        src="./public/photo_plan.png"
        className="absolute bottom-[8rem] right-[8rem] w-[6rem] rotate-6 rounded-lg drop-shadow-xl brightness-125 hover:scale-[7] hover:-rotate-6 transition-all"
      />
      <div className="flex items-start gap-8">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-2xl font-bold text-[#C49379]">back</h2>
          <ul className="*:font-medium *:text-xl *:text-[#1F2D5C] *:cursor-alias">
            <a href="https://github.com/Tianhong258">
              <li className="hover:rotate-3 transition hover:text-[#C49379]">
                Tianhong
              </li>
            </a>
            <a href="https://github.com/FabienneLIS">
              <li className="hover:-rotate-3 transition hover:text-[#C49379]">
                Fabienne
              </li>
            </a>
            <a href="https://github.com/realalexis">
              <li className="hover:rotate-3 transition hover:text-[#C49379]">
                Alexis
              </li>
            </a>
            <a href="https://github.com/MarieLeLamer">
              <li className="hover:-rotate-3 transition hover:text-[#C49379]">
                Marie
              </li>
            </a>
            <a href="https://github.com/AudreyGgn">
              <li className="hover:rotate-3 transition hover:text-[#C49379]">
                Λυδяэφ ♫
              </li>
            </a>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-2xl font-bold text-[#C49379]">front</h2>
          <ul className="*:font-medium *:text-xl *:text-[#1F2D5C] *:cursor-alias">
            <a href="https://github.com/magueloneguinaud">
              <li className="hover:-rotate-3 transition hover:text-[#C49379]">
                Maguelone
              </li>
            </a>
            <a href="https://github.com/oudinyannick">
              <li className="hover:rotate-3 transition hover:text-[#C49379]">
                Yannick
              </li>
            </a>
            <a href="https://github.com/annatehiva">
              <li className="hover:-rotate-3 transition hover:text-[#C49379]">
                Anna
              </li>
            </a>
            <a href="https://github.com/CorbiatFlorentin">
              <li className="hover:rotate-3 transition hover:text-[#C49379]">
                Florentin
              </li>
            </a>
            <a href="https://github.com/lemathurin">
              <li className="hover:-rotate-3 transition hover:text-[#C49379]">
                Mathurin
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
