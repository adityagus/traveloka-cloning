import Link from "next/link";

const TabNav = ({ scroll }) => {
  // console.log('TabNav', scroll);

  return (
    <div class="max-sm:hidden">
      <div class={`divider-nav ${scroll && "hidden my-2"}`}></div>
      <div
        className={`font-bold flex py-2 text-sm gap-5 md:gap-8 items-center sm:flex  bg-dark navbar ${
          scroll ? "text-gray-400 py-4" : "text-white"
        }`}
      >
        <Link href="/hotels">Hotels</Link>
        <Link href="/">Flights</Link>
        <Link href="/">Trains</Link>
        <Link href="/">Bus & Travel</Link>
        <Link href="/">Airport Transfer</Link>
        <Link href="/">Car Rental</Link>
        <Link href="/">Things to Do</Link>
        <div className="flex items-center justify-center">
          <Link className="" href="/">
            More{" "}
          </Link>

          <svg
            className="w-3 h-3 text-gray-500 justify-center items-center text-center flex"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 28 28"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
      <div class={`divider-nav ${scroll && "hidden my-2"}`}></div>
    </div>
  );
};

export default TabNav;
