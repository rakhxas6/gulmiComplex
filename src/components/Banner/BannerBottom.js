import React from "react";
import {
  MdOutlineVerifiedUser,
  MdOutlineLocalShipping,
  MdOutlineAssignmentReturn,
} from "react-icons/md";

const features = [
  {
    icon: <MdOutlineVerifiedUser className="text-4xl text-red-500" />,
    title: "Two Years Warranty",
    subtitle: "Guaranteed protection for your products",
  },
  {
    icon: <MdOutlineLocalShipping className="text-4xl text-red-500" />,
    title: "Free Shipping",
    subtitle: "Enjoy global delivery on all items",
  },
  {
    icon: <MdOutlineAssignmentReturn className="text-4xl text-red-500" />,
    title: "30-Day Returns",
    subtitle: "Hassle-free returns within 30 days",
  },
];

const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200 px-4 py-6">
      <div className="max-w-container mx-auto grid gap-6  sm:grid-cols-1 md:grid-cols-3">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-st gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300"
          >
            <span className="flex-shrink-0">{item.icon}</span>
            <div>
              <h4 className="text-base font-semibold text-gray-800">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerBottom;
