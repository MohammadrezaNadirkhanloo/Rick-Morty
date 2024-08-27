import React from "react";
import { FaRegEye } from "react-icons/fa";
import { PiEyeSlash } from "react-icons/pi";

function ListItem({ theme, characters, isShow, handelShowEys }) {
  return (
    <div className="space-y-3">
      {characters.map((item) => (
        <Itemlist key={item.id} data={item} theme={theme}>
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => handelShowEys(item.id)}
          >
            {isShow === item.id ? (
              <PiEyeSlash size={23} className="text-red-600 cursor-pointer" />
            ) : (
              <FaRegEye size={23} className="text-red-600 cursor-pointer" />
            )}
          </button>
        </Itemlist>
      ))}
    </div>
  );
}

export default ListItem;

export function Itemlist({ data, theme, children }) {
  return (
    <div
    className={`${
      theme === "dim" ? "bg-gray-700/50" : "bg-gray-100/50"
    } p-3 rounded-2xl flex items-center justify-between shadow-md hover:cursor-pointer hover:-translate-y-1  hover:shadow-xl transition `}
    >
      <div className="flex items-center gap-3">
        <div>
          <img src={data.image} className="w-16 rounded-xl" alt="actor" />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-md sm:text-lg font-semibold ">
            <span>{data.gender === "Male" ? "👨" : "👩"}</span>
            {data.name}
          </p>
          <p>
            <span>{data.status === "Dead" ? "🔴" : "🟢"}</span>
            {data.status}-{data.species}
          </p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
