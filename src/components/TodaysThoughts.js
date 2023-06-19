import React from "react";
import LightBulbIcon from "assets/light-bulb-on.svg";

const TodaysThoughts = () => {
  return (
    <div className="todays-thoughts">
      <div className="light-bulb-on-icon">
        <img src={LightBulbIcon} alt="idea" />
      </div>
      <h6 className="mt-8 text-black font-medium mb-3 text-sm">
        Thoughts Time
      </h6>

      <div className="text-xs max-w-[166px] m-auto">
        We don’t have any notice for you, till then you can share your thoughts
        with your peers.
      </div>

      <button
        type="button"
        className="bg-white text-black font-medium text-sm px-[27px] py-[12px] mt-4"
      >
        Write a message
      </button>
    </div>
  );
};

export default TodaysThoughts;
