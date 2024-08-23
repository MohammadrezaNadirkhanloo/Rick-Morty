import React from "react";
import { character } from "../../data/data.js";

function ShowItem({ children }) {
  return <div className="flex flex-col gap-6">{children}</div>;
}

export default ShowItem;

export function Item({ theme }) {
  const dataItem = character;



  return (
    <div
      className={`${
        theme === "dim" ? "bg-gray-700/50" : "bg-gray-100/50"
      } p-1 rounded-2xl grid grid-cols-1 sm:grid-cols-3 lg:flex lg:justify-start shadow-md sm:gap-2`}
    >
      <div>
        <img
          src={dataItem.image}
          className="rounded-xl sm:w-56 w-full h-full"
          alt="Actor"
        />
      </div>
      <div className="flex flex-col items-start space-y-5 col-span-2 p-5">
        <div className="flex flex-col items-start gap-1">
          <p className="text-2xl font-semibold ms-1 ">
            <span>{dataItem.gender === "Male" ? "👨" : "👩"}</span>
            {dataItem.name}
          </p>
          <p className="font-semibold">
            <span>{dataItem.status === "Dead" ? "🔴" : "🟢"}</span>
            {dataItem.status}-{dataItem.species}
          </p>
        </div>
        <div>
          <p className="font-bold text-gray-500">Last Known location:</p>
          <p className="font-semibold">{dataItem.location.name}</p>
        </div>
        <div>
          <button className="btn btn-outline rounded-badge text-lg borde">
            Add to Favorite
          </button>
        </div>
      </div>
    </div>
  );
}
