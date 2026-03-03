import { useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelctedPlayers/SelectedPlayers";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="w-11/12 mx-auto flex justify-between mt-4">
        <h1>Available Players</h1>
        <div className="">
          <button
            onClick={() => setToggle(true)}
            className={`py-3 px-4 ${toggle ? "bg-[#E7FE29] text-black" : ""} rounded-l-2xl border border-gray-400 border-r-0`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-3 px-4 ${toggle ? "" : "bg-[#E7FE29] text-black"} rounded-r-2xl border border-gray-400 border-l-0`}
          >
            Selected
          </button>
        </div>
      </div>
      {toggle ? (
        <AvailablePlayers></AvailablePlayers>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
