/* eslint-disable react/prop-types */
const BannerTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <h2 className="text-7xl font-bold text-white font-cinzel text-center">{heading}</h2>
      <h4 className="text-2xl font-cinzel font-semibold text-white text-center">{subHeading}</h4>
    </div>
  );
};

export default BannerTitle;
