/* eslint-disable react/prop-types */
const PageCover = ({ img, title, desc }) => {
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("${img}")` }}>
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-center text-neutral-content border hero-overlay bg-opacity-60 max-w-4xl h-2/5 bg-[#232323] font-cinzel">
          <div className="max-w-3xl mt-3">
            <h1 className="mb-5 text-8xl font-bold ">{title}</h1>
            <p className="mb-5 text-2xl font-semibold">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCover;
