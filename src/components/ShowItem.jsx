import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Loader from "./Loader.jsx";
import { FaCircleArrowDown } from "react-icons/fa6";
import { episodes } from "../../data/data.js";

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
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function characterItem() {
      try {
        setIsLoad(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${isShow}`
        );
        setCharacter(data);
        const episodeId = data.episode.map((e) => e.split("/").at(-1));
        const { data: epData } = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodeId.slice(0, 13)}`
        );
        setEpisodes(epData);
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
        <>
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
          <Episodes theme={theme} episodes={episodes} />
        </>
      )}
    </>
  );
}

export function Episodes({ theme, episodes }) {
  if (!episodes) return;
  return (
    <div
      className={`${
        theme === "dim" ? "bg-gray-700/50" : "bg-gray-100/50"
      } p-4 rounded-2xl shadow-md mb-8 lg:mb-0`}
    >
      <div className="flex items-center justify-between mb-6">
        <p className="font-bold text-2xl">List of Episodes:</p>
        <FaCircleArrowDown size={20} className="cursor-pointer" />
      </div>
      <div className="space-y-4">
        {episodes.map((item, index) => (
          <div key={item.id} className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="flex text-lg font-semibold">
              <p>
                <span>{String(index).padStart(2, "0")}-</span>
                {item.episode} : {item.name}
              </p>
            </div>
            <div className="flex justify-end">
              <div
                className={`${
                  theme === "dim" ? "bg-gray-600" : "bg-gray-200"
                } px-3 rounded-badge text-center text-e flex items-center`}
              >
                <p className="font-semibold">{item.air_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
