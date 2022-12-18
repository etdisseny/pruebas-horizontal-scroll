import HorizontalScroll from "react-scroll-horizontal";

export const Scroll1 = () => {
  return (
    <>
      <HorizontalScroll reverseScroll={true}>
        <div className="main bg">
          <h1>Hola Mundo </h1>
        </div>
        <div className="main bg1">
          <h1>Hola Mundo 2</h1>
        </div>
        <div className="main bg2">
          <h1>Hola Mundo 3 </h1>
        </div>
      </HorizontalScroll>
    </>
  );
};
