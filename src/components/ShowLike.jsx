import { FcLike } from "react-icons/fc";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Itemlist } from "./ListItem";

function ShowLike({ favourites, numOfFavourites, theme, eventHandelDelete }) {
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
                  <Itemlist data={data} key={data.id} theme={theme}>
                    <div>
                      <button
                        className="btn btn-ghost btn-circle"
                        onClick={() => eventHandelDelete(data.id)}
                      >
                        <MdOutlineDeleteOutline
                          className="text-red-600"
                          size={25}
                        />
                      </button>
                    </div>
                  </Itemlist>
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
