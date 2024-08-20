import React from "react";
import { FaRegEye } from "react-icons/fa";
import { allCharacters } from "../../data/data.js";

function ListItem({ theme }) {
  const datas = allCharacters;
  return (
    <div className="space-y-3">
      {datas.map((item) => (
        <Itemlist key={item.id} data={item} theme={theme} />
      ))}
    </div>
  );
}

export default ListItem;

function Itemlist({ data, theme }) {
  return (
    <div
      className={`${
        theme === "dim" ? "bg-gray-700/50" : "bg-gray-100/50"
      } p-3 rounded-2xl flex items-center justify-between shadow-md`}
    >
      <div className="flex items-center gap-3">
        <div>
          <img src={data.image} className="w-16 rounded-xl" alt="actor" />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-lg font-semibold ">
            <span>{data.gender === "Male" ? "👨‍🦳" : "👩‍🦳"}</span>
            {data.name}
          </p>
          <p>
            <span>{data.status === "Dead" ? "🔴" : "🟢"}</span>
            {data.status}-{data.species}
          </p>
        </div>
      </div>
      <div>
        <FaRegEye size={23} className="text-red-600 cursor-pointer" />
      </div>
    </div>
  );
}
