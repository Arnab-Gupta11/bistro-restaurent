/* eslint-disable react/prop-types */

const Button1 = ({ name }) => {
  return (
    <div>
      <button className="text-[#BB8506] px-8 py-3 bg-[#E8E8E8] rounded-lg border-b-[3px] border-[#BB8506] text-lg font-medium hover:bg-black">
        {name}
      </button>
    </div>
  );
};

export default Button1;
