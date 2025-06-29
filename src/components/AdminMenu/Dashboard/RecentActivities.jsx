import React from 'react';

const RecentActivities = () => {
  return (
    <div className="bg-white">
      <h4 className=" pb-1.5 mb-2    font-dm md:font-[400] md:text-[18px]  font-[600] text-[18px]">
        Recent Activities
      </h4>

      <div className="space-y-2">
        {/* Row 1 */}
        <div className="bg-gray-100 px-2 py-1 text-center md:text-start rounded grid grid-cols-4 items-center font-dm md:font-[500] md:text-[14px]  font-[500] text-[10px]">
          <div className="text-start">22.09.2023</div>
          <div>TXDFGC2ORRN</div>
          <div>$120000</div>
          <div className="text-green-600 font-dm md:font-[500] md:text-[14px]  font-[500] text-[10px]">
            Done
          </div>
        </div>

        {/* Row 2 */}
        <div className="bg-gray-100 px-2 py-1 rounded grid grid-cols-4  items-center font-dm md:font-[500] md:text-[14px]  font-[500] text-[10px]">
          <div>22.09.2023</div>
          <div className="col-span-3">
            New User - Dhaka - 173244 - 770221 - 01744454542
          </div>
        </div>

        {/* =====Empty Rows==== */}
        <div className="bg-gray-100 h-8 rounded" />
        <div className="bg-gray-100 h-8 rounded" />
        <div className="bg-gray-100 h-8 rounded" />
      </div>
    </div>
  );
};

export default RecentActivities;
