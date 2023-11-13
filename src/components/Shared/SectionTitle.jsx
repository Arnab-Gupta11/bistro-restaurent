/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="font-inter w-80 mx-auto my-14">
      <h4 className="text-[#D99904] text-xl font-medium italic border-b-4  text-center pb-3">{subHeading}</h4>
      <h2 className="text-[#151515] font-medium text-4xl border-b-4 text-center pb-3 mt-3"> {heading}</h2>
    </div>
  );
};

export default SectionTitle;
