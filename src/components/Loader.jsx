function Loader({ size, theme }) {
  return (
    <div>
      {size === "small" ? (
        <div
          className={`${
            theme === "dim" ? "bg-gray-700/50" : "bg-gray-100/50"
          } p-3 rounded-2xl flex items-center justify-between shadow-md`}
        >
          <div className="flex items-center gap-3">
            <div>
              <div className="skeleton h-20 w-20"></div>
            </div>
            <div className="flex flex-col items-start gap-y-4">
              <div className="skeleton h-4 w-36"></div>
              <div className="skeleton h-4 w-20"></div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${
            theme === "dim" ? "bg-gray-700/50" : "bg-gray-100/50"
          } p-1 rounded-2xl grid grid-cols-1 sm:grid-cols-3 lg:flex lg:justify-start shadow-md sm:gap-2`}
        >
          <div>
            <div className="skeleton sm:w-56 w-full h-60"></div>
          </div>
          <div className="flex flex-col items-start space-y-5 col-span-2 p-4">
            <div className="flex flex-col items-start gap-3">
              <div className="skeleton h-4 w-52"></div>
              <div className="skeleton h-4 w-32"></div>
            </div>
            <div>
              <p className="font-bold text-gray-500">Last Known location:</p>
              <div className="skeleton h-4 w-40"></div>
            </div>
            <div>
              <button className="btn rounded-full">
                <span className="loading loading-spinner"></span>
                loading
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Loader;
