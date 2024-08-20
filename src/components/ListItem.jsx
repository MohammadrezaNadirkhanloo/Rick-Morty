import React from "react";
import { FaRegEye } from "react-icons/fa";

function ListItem() {
  return (
    <div>
      <div
        className={`bg-gray-700/50 p-3 rounded-2xl flex items-center justify-between`}
      >
        <div className="flex items-center gap-3">
          <div>
            <img
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              className="w-16 rounded-xl"
              alt=""
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-lg font-semibold">👨‍🦰Rick Senchez</p>
            <p>
              <span>🔴</span>Dead-Hu...
            </p>
          </div>
        </div>
        <div>
          <FaRegEye size={23} className="text-red-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default ListItem;
