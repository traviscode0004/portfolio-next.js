import React from "react";

type FeaturedCardProps = {
  title: string;
  description: string;
};

const FeaturedCard: React.FC<FeaturedCardProps> = ({ title, description }) => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-teal-200">{title}</h3>
      <p className="text-sm text-gray-300 mt-2">{description}</p>
    </div>
  );
};

export default FeaturedCard;

  