import React from "react";

function Footer() {
  return (
    <div className="flex-col justify-start items-start gap-[5px] inline-flex sm:absolute p-[0.9375rem] bottom-0 left-0">
      <a href="/about">
        <h3 className="text-lightMode-text text-lg font-normal">à propos</h3>
      </a>
      <div className="text-lightMode-secondarytext text-base italic">
        © 2024 Adopte un Meuble
      </div>
    </div>
  );
}

export default Footer;
