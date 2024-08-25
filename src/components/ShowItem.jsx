import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Loader from "./Loader.jsx";

function ShowItem({ children }) {
  return (
    <div className="flex flex-col gap-6">
      <ToastContainer stacked theme="colored" />
      {children}
    </div>
  );
}

export default ShowItem;

export function Item({ theme, isShow }) {
  const [character, setCharacter] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    async function characterItem() {
      try {
        setIsLoad(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${isShow}`
        );
        setCharacter(data);
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setIsLoad(false);
      }
    }
    characterItem();
  }, [isShow]);

  if (!character) {
    return <Loader size={"big"} theme={theme} />;
  }

  return (
    <>
      {isLoad ? (
        <Loader size={"big"} theme={theme} />
      ) : (
        <div
          className={`${
            theme === "dim" ? "bg-gray-700/50" : "bg-gray-100/50"
          } p-1 rounded-2xl grid grid-cols-1 sm:grid-cols-3 lg:flex lg:justify-start shadow-md sm:gap-2`}
        >
          <div>
            <img
              src={character.image}
              className="rounded-xl sm:w-56 w-full h-full"
              alt="Actor"
            />
          </div>
          <div className="flex flex-col items-start space-y-5 col-span-2 p-5">
            <div className="flex flex-col items-start gap-1">
              <p className="text-2xl font-semibold ms-1 ">
                <span>{character.gender === "Male" ? "👨" : "👩"}</span>
                {character.name}
              </p>
              <p className="font-semibold">
                <span>{character.status === "Dead" ? "🔴" : "🟢"}</span>
                {character.status}-{character.species}
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-500">Last Known location:</p>
              <p className="font-semibold">{character.location.name}</p>
            </div>
            <div>
              <button className="btn btn-outline rounded-badge text-lg borde">
                Add to Favorite
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
