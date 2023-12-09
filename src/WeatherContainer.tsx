import { useState } from "react";

function WeatherContainer() {
  const [searchText, setSearchText] = useState("");

  const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;
    setSearchText(() => newValue);
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div
    className="
      flex-1
      justify-center
      items-center
      bg-gradient-to-tr
      from-blue-400
      to-sky-300">
      <h1 className="text-5xl drop-shadow-xl text-center select-none text-white mb-5">
        Weather Cast App
      </h1>

      <form onSubmit={onFormSubmit}>
        <div
          className="flex
        justify-start
        rounded-3xl
        h-[50px]
        mb-5">
          <input
            onChange={onSearchInputChange}
            className="bg-orange-300 shadow-lg hover:bg-orange-200 focus:outline-none focus:ring focus:ring-orange-500 focus:bg-orange-200 placeholder:text-slate-600 rounded-3xl w-full p-5 "
            placeholder="New York, California, Ankara..."
            type="text"
            name="search"
            value={searchText}
          />
          <button className="bg-orange-300 hover:bg-orange-200 active:bg-orange-400 shadow-lg rounded-full mx-2 w-[140px]">Search</button>
          <div className="flex justify-center items-center shadow-lg rounded-full w-[80px] bg-red-300 hover:bg-red-200 active:bg-red-400 cursor-pointer">
            <svg width="26" height="26" fill="black" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>
          </div>
        </div>
      </form>

      <div className="bg-orange-300 rounded-3xl shadow-lg h-[300px] w-[500px]">
        <h1 className="text-5xl text-gray-800 drop-shadow-xl text-center">30°C</h1>
        <h1 className="text-4xl drop-shadow-xl text-center">
          Search: {searchText.toUpperCase()}
        </h1>
      </div>
    </div>
  );
}

export default WeatherContainer;
