import React from 'react';

const SummaryBar = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-center bg-white  md:mt-12 md:mb-11 mt-5 mb-6 rounded ">
      {['Master Agent', 'Agent', 'User'].map(type => (
        <div
          key={type}
          className="bg-[#D9D9D95E] p-2 rounded font-dm md:font-[700] md:text-[18px] font-[300] text-[16px]"
        >
          Total {type} :
          <span className="text-black md:font-[700] md:text-[18px] font-[300] text-[16px]">
            25
          </span>
        </div>
      ))}
    </div>
  );
};

export default SummaryBar;
