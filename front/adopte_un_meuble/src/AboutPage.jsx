import React from "react";

function AboutPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#FCEDD8]">
      <div className="flex items-start gap-8">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-2xl font-bold text-[#C49379]">back</h2>
          <ul className="*:font-medium *:text-xl *:text-[#1F2D5C]">
            <a href="https://github.com/Tianhong258">
              <li>Tianhong</li>
            </a>
            <a href="https://github.com/FabienneLIS">
              <li>Fabienne</li>
            </a>
            <a href="https://github.com/realalexis">
              <li>Alexis</li>
            </a>
            <a href="https://github.com/MarieLeLamer">
              <li>Marie</li>
            </a>
            <a href="https://github.com/AudreyGgn">
              <li>Λυδяэφ ♫</li>
            </a>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-2xl font-bold text-[#C49379]">front</h2>
          <ul className="*:font-medium *:text-xl *:text-[#1F2D5C]">
            <a href="https://github.com/magueloneguinaud">
              <li>Maguelone</li>
            </a>
            <a href="https://github.com/oudinyannick">
              <li>Yannick</li>
            </a>
            <a href="https://github.com/annatehiva">
              <li>Anna</li>
            </a>
            <a href="https://github.com/CorbiatFlorentin">
              <li>Florentin</li>
            </a>
            <a href="https://github.com/lemathurin">
              <li>Mathurin</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
