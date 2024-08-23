import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { PiEyeSlash } from "react-icons/pi";

function ListItem({ theme, characters }) {
  const [isShow, setIsShow] = useState(1);
  function handelShowEys(id) {
    setIsShow(id);
  }
  return (
    <div className="space-y-3">
      {characters.map((item) => (
        <Itemlist
          key={item.id}
          data={item}
          theme={theme}
          statusEys={isShow}
          eventHandel={handelShowEys}
        />
      ))}
    </div>
  );
}

export default ListItem;

function Itemlist({ data, theme, statusEys, eventHandel }) {
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
          <p className="text-md sm:text-lg font-semibold ">
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
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => eventHandel(data.id)}
        >
          {statusEys === data.id ? (
            <PiEyeSlash size={23} className="text-red-600 cursor-pointer" />
          ) : (
            <FaRegEye size={23} className="text-red-600 cursor-pointer" />
          )}
        </button>
      </div>
    </div>
  );
}
