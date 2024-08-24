import { FaMoon, FaSun } from "react-icons/fa6";
import ShowLike from "./ShowLike";
import { IoSearch } from "react-icons/io5";

function Header({ theme, children }) {
  return (
    <>
      <div
        className={`navbar my-3 rounded-2xl justify-between px-3 shadow-xl ${
          theme === "dim" ? "bg-gray-700" : "bg-gray-100"
        }`}
      >
        <a className="text-xl">Rick & Morty</a>
        <div className="flex items-center gap-1">
          <ShowLike />
          {children}
        </div>
      </div>
    </>
  );
}

export default Header;

export function ChangeTheme({ handelTheme }) {
  return (
    <div>
      <label className="swap swap-rotate btn btn-ghost btn-circle">
        <input
          onClick={handelTheme}
          type="checkbox"
          className="theme-controller "
        />
        <FaSun className="swap-off fill-current" size={20} />
        <FaMoon className="swap-on fill-current" size={20} />
      </label>
    </div>
  );
}

export function SearchItems({ theme, search, setSearch }) {
  return (
    <>
      <div class="w-full text-end">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <IoSearch size={20} />
            </div>
          </div>
          <div
            tabindex="0"
            class={`card card-compact dropdown-content ${
              theme === "dim" ? "bg-gray-700" : "bg-gray-100"
            } z-[1] mt-3 w-48 sm:w-72 md:w-96 shadow-2xl`}
          >
            <form class="card-body">
              <input
                id="inputFilter"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search..."
                class="input input-bordered w-full"
              />
              <div class="card-actions">
                <button id="btnSearch" class="btn w-full shadow-lg">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
