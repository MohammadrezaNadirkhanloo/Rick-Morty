import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { LuArrowDownUp } from "react-icons/lu";
import { toast } from "react-toastify";
import Loader from "./Loader.jsx";

function ShowItem({ children }) {
  return <div className="flex flex-col gap-6">{children}</div>;
}

export default ShowItem;

export function Item({ theme, isShow, handelFavourites, isListFavourite }) {
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
          `https://rickandmortyapi.com/api/episode/${episodeId}`
        );
        setEpisodes([epData].flat().slice(0, 13));
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
                {isListFavourite ? (
                  <p className="font-semibold text-lg flex items-center gap-2">
                    Selected{" "}
                    <span>
                      <FaCheck className="text-green-500" />
                    </span>{" "}
                  </p>
                ) : (
                  <button
                    onClick={() => handelFavourites(character)}
                    className="btn btn-outline rounded-badge text-lg borde"
                  >
                    Add to Favorite
                  </button>
                )}
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
  const [isSort, setIsSort] = useState(false);
  let sortEpisodes;
  if (isSort) {
    sortEpisodes = episodes.sort(
      (a, b) => new Date(a.created) - new Date(b.created)
    );
  } else {
    sortEpisodes = episodes.sort(
      (a, b) => new Date(b.created) - new Date(a.created)
    );
  }
  if (!episodes) return;
  return (
    <div
      className={`${
        theme === "dim" ? "bg-gray-700/50" : "bg-gray-100/50"
      } p-4 rounded-2xl shadow-md mb-8 lg:mb-0`}
    >
      <div className="flex items-center justify-between mb-6">
        <p className="font-bold text-2xl">List of Episodes:</p>
        <button
          onClick={() => setIsSort((n) => !n)}
          className="btn btn-ghost btn-circle"
        >
          <LuArrowDownUp size={20} className="cursor-pointer" />
        </button>
      </div>
      <div className="space-y-4">
        {sortEpisodes.map((item, index) => (
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
