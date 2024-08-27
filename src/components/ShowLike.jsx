import { FcLike } from "react-icons/fc";
import { MdOutlineDeleteOutline } from "react-icons/md";

function ShowLike({ favourites, numOfFavourites, theme }) {
  return (
    <>
      <div>
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <div className="indicator">
            <FcLike size={25} />
            <span className="badge badge-sm indicator-item">
              {numOfFavourites}
            </span>
          </div>
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="space-y-4 my-4">
              {favourites ? (
                favourites.map((data) => (
                  <ItemFevourites item={data} key={data.id} theme={theme} />
                ))
              ) : (
                <div>close</div>
              )}
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  );
}

export default ShowLike;

export function ItemFevourites({ item, theme }) {
  return (
    <div
      className={`${
        theme === "dim" ? "bg-gray-700/50" : "bg-gray-100/50"
      } p-3 rounded-2xl flex items-center justify-between shadow-md hover:cursor-pointer hover:-translate-y-1 hover:scale-100 hover:shadow-xl transition `}
    >
      <div className="flex items-center gap-3">
        <div>
          <img src={item.image} className="w-16 rounded-xl" alt="actor" />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-md sm:text-lg font-semibold ">
            <span>{item.gender === "Male" ? "👨" : "👩"}</span>
            {item.name}
          </p>
          <p>
            <span>{item.status === "Dead" ? "🔴" : "🟢"}</span>
            {item.status}-{item.species}
          </p>
        </div>
      </div>
      <div>
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => eventHandel(item.id)}
        >
          <MdOutlineDeleteOutline className="text-red-600" size={25} />
        </button>
      </div>
    </div>
  );
}
