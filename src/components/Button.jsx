import React from "react";

const Button = ({ label, iconUrl, ButtonStyle, fullwidth }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
        ButtonStyle === "secondary"
          ? " border-slate-gray text-slate-gray"
          : "bg-coral-red rounded-full border-coral-red text-white"
      } ${fullwidth ? "w-full" : ""} `}
    >
      {label}
      {iconUrl && <img src={iconUrl} className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
};

export default Button;
