import WeatherContainer from "./WeatherContainer";

export default function App() {
  return (
    <div
      className="
        h-screen
        flex
        justify-center
        items-center
        bg-gradient-to-tr
        from-blue-400
        to-sky-300">
      <WeatherContainer />
    </div>
  );
}
