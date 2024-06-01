import React from "react";

const Card = ({
  imageUrl,
  category,
  title,
  date,
  userName,
  userPicUrl,
  preview,
}) => {
  return (
    <div className="font-figtree shadow-default hover:shadow-hover w-[327px] rounded-3xl border-[1px] border-solid border-black bg-white p-6 font-medium transition sm:w-96">
      <img className="rounded-xl" src={imageUrl} alt="Post image" />
      <div className="my-6 flex flex-col items-start gap-3">
        <span className="bg-yellow rounded px-3 py-1 text-sm font-extrabold">
          {category}
        </span>
        <div className="text-sm">Published {date}</div>
        <a
          href="#"
          className="hover:text-yellow text-xl font-extrabold transition sm:text-2xl"
        >
          {title}
        </a>
        <p className="text-grey text-sm sm:text-base">{preview}</p>
      </div>
      <div className="flex flex-row items-center gap-3">
        <img className="h-8 rounded-full" src={userPicUrl} alt="User pic" />
        <b className="text-sm font-extrabold">{userName}</b>
      </div>
    </div>
  );
};

export default Card;
