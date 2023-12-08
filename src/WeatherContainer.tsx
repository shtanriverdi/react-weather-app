import { useState } from "react";

function WeatherContainer() {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <h1 className="text-5xl drop-shadow-xl text-center select-none text-white mb-5">
        Weather Cast App
      </h1>

      <form>
        <div
          className="flex
        justify-start
        rounded-3xl
        shadow-lg
        h-[50px]
        mb-5">
          <input
            className="bg-orange-300 hover:bg-orange-200 focus:outline-none focus:ring focus:ring-orange-500 focus:bg-orange-200 placeholder:text-slate-600 rounded-3xl w-full p-5 "
            placeholder="New York, California, Ankara..."
            type="text"
            name="search"
            value=""
          />
        </div>
      </form>

      <div className="bg-orange-300 rounded-3xl shadow-lg h-[300px] w-[500px]">
        <h1 className="text-4xl drop-shadow-xl text-center">30°C</h1>
      </div>
    </div>
  );
}

export default WeatherContainer;
