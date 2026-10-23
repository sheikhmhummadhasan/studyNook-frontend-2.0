"use client";

import React from "react";

const channels = [
  { label: "Whiteboard", value: "Whiteboard" },
  { label: "Projector", value: "Projector" },
  { label: "Power Outlets", value: "Power Outlets" },
  { label: "Wi-Fi", value: "Wi-Fi" },
  { label: "Quiet Zone", value: "Quiet Zone" },
  { label: "Air Conditioning", value: "Air Conditioning" },
];

const Checkboxes = ({ amenities = [], onChange }) => {
  const handleCheckboxChange = (value, checked) => {
    if (checked) {
      onChange([...amenities, value]);
    } else {
      onChange(amenities.filter((item) => item !== value));
    }
  };

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {channels.map(({ label, value }) => {
        const isChecked = amenities.includes(value);

        return (
          <label
            key={value}
            className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 transition-all duration-150 ${
              isChecked
                ? "border-cyan-500 bg-cyan-50/40 text-cyan-900 shadow-sm"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            <input
              type="checkbox"
              value={value}
              checked={isChecked}
              onChange={(e) => handleCheckboxChange(value, e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
            />
            <span className="text-sm font-medium">{label}</span>
          </label>
        );
      })}
    </div>
  );
};

export default Checkboxes;