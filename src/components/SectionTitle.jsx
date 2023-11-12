/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="font-inter">
      <h4 className="text-[#D99904] text-xl font-medium italic">{subHeading}</h4>
      <h2 className="text-[#151515] font-medium text-4xl "> {heading}</h2>
    </div>
  );
};

export default SectionTitle;
