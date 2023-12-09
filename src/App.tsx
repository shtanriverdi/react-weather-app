import WeatherContainer from "./WeatherContainer";
import NavBar from "./NavBar";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <WeatherContainer />
    </div>
  );
}
