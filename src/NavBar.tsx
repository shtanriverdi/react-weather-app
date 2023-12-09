export default function NavBar() {
  return (
    <div
      className="
        h-[50px]
        flex
        justify-between
        items-center
        bg-gradient-to-tr
        from-blue-600
        to-sky-400">
      <h1 className="ml-5 text-2xl drop-shadow-xl text-center select-none text-white">
        Weather Cast App
      </h1>
      <h1 className="mr-5 text-2xl drop-shadow-xl text-center select-none text-white">
        Button
      </h1>
    </div>
  );
}
