import React from "react";

const categories = ["All", "Basic", "Advanced", "Executive"];

const PackageFilter = ({ selected, onSelect }) => {
  return (
    <div className="flex justify-center gap-4 mb-8 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded-full border ${
            selected === cat ? "bg-blue-600 text-white" : "bg-white text-blue-600"
          } hover:bg-blue-600 hover:text-white transition`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default PackageFilter;
