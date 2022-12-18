import { data } from "../mockData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRef, useState } from "react";

export const Scroll2 = () => {
  const slider = useRef();

  const slideLeft = () => {
    // var slider = document.getElementById("slider");
    slider.current.scrollLeft = slider.current.scrollLeft - 500;
  };
  const slideRight = () => {
    // var slider = document.getElementById("slider");
    slider.current.scrollLeft = slider.current.scrollLeft + 500;
  };
  return (
    <section className="part2">
      <div className="relative flex items-center">
        <MdChevronLeft size={40} onClick={slideLeft} />
        <div
          ref={slider}
          // id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
        >
          {data.map((item) => (
            <img
              key={item.id}
              className="w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              src={item.img}
              alt="/"
            />
          ))}
        </div>
        <MdChevronRight size={40} onClick={slideRight} />
      </div>
    </section>
  );
};
