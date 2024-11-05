"use client";

import { useState } from "react";

import { sizes } from "@/data/content";

const SizeSelect = () => {
  const [selected, setSelected] = useState("L");
  return (
    <div className="flex items-center gap-3">
      {sizes.map((size) => (
        <button
          key={size}
          type="button"
          onClick={() => setSelected(size)}
          className={`max-w-max rounded-lg px-3 py-2 text-base ${
            selected === size
              ? "bg-primary text-white"
              : "border border-rounded border-neutral-400"
          }`}
        >
          {size}
        </button>
      ))}
      {/* <span className="underline">Size guide</span> */}
    </div>
  );
};

export default SizeSelect;
