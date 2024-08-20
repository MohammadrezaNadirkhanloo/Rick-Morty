import { FcLike } from "react-icons/fc";

function ShowLike() {
  return (
    <>
      <div>
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
            <div className="indicator">
            <FcLike size={25} />
            <span className="badge badge-sm indicator-item">8</span>

            </div>
          
          
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
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
