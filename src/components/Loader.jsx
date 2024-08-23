function Loader({ size }) {
  return (
    <div>
      {size === "small" ? (
        <div className="skeleton h-20 w-full"></div>
      ) : size === "big" ? (
        <div className="skeleton h-60 w-full"></div>
      ) : (
        <div className="skeleton h-36 w-full"></div>
      )}
    </div>
  );
}

export default Loader;
