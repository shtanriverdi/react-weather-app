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
      bg-gradient-to-tr
      from-blue-400
      to-sky-300">
      <div
        className="
        flex
        flex-col
        justify-center
        items-center
        mt-[150px]
        ">
        <h1 className="text-5xl drop-shadow-xl text-center select-none text-white mb-5">
          Weather Cast App
        </h1>

        <form onSubmit={onFormSubmit}>
          <div
            className="
            w-[600px]
            flex
            flex-row
            mb-5">
            <div className="flex basis-3/4">
              <input
                onChange={onSearchInputChange}
                className="bg-orange-300 w-full shadow-lg hover:bg-orange-200 focus:outline-none focus:ring focus:ring-orange-500 focus:bg-orange-200 placeholder:text-slate-600 rounded-full p-5"
                placeholder="New York, California, Ankara..."
                type="text"
                name="search"
                value={searchText}
              />
            </div>

            <div className="flex basis-1/4" title="Search Button">
              <div className="flex flex-row justify-center items-center w-full bg-orange-300 hover:bg-orange-200 active:bg-orange-400 shadow-lg rounded-full mx-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                &nbsp;Search
              </div>
            </div>

            <div className="flex basis-20" title="Clear Search">
              <div className="flex justify-center items-center w-full shadow-lg rounded-full bg-red-300 hover:bg-red-200 active:bg-red-400 cursor-pointer">
                <svg width="16" height="16" fill="black" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
              </div>
            </div>
          </div>
        </form>

        <div className="bg-orange-300 rounded-3xl shadow-lg h-[400px] w-[600px]">
          <h1 className="text-5xl text-gray-800 drop-shadow-xl text-center">
            30°C
          </h1>
          <h1 className="text-4xl drop-shadow-xl text-center">
            Search: {searchText.toUpperCase()}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default WeatherContainer;
