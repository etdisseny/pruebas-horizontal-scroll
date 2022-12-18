import { data } from "../mockData";
import HorizontalScroll from "react-scroll-horizontal";

export const Scroll3 = () => {
  return (
    <section className="part3">
      <HorizontalScroll
        reverseScroll={true}
        // className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
      >
        {data.map((item) => (
          <div key={item.id} className="box3 mt-5">
            <img
              className="w-[200px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              src={item.img}
              alt="/"
            />
          </div>
        ))}
      </HorizontalScroll>
    </section>
  );
};
