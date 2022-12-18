import "./App.css";
import { Scroll1 } from "./components/Scroll1";
import { Scroll2 } from "./components/Scroll2";
import { Scroll3 } from "./components/Scroll3";

function App() {
  return (
    <>
      <div className="App">
        <img
          className="w-full h-[440px] object-cover"
          src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80"
          alt=""
        />
        <Scroll2 />
        <Scroll1 />

        <Scroll3 />
      </div>
    </>
  );
}

export default App;
