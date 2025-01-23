import Link from "next/link";

const TabNav = ({ scroll }) => {
  // console.log('TabNav', scroll);

  return (
    <div className="max-sm:hidden">
      <div className={`divider-nav ${scroll && "hidden my-2"}`}></div>
      <div
        className={`font-bold flex py-2 text-sm gap-5 md:gap-8 items-center sm:flex  bg-dark navbar ${
          scroll ? "text-gray-400 py-4" : "text-white"
        }`}
      >
        <Link href="/hotels">Hotel</Link>
      <Link href="/">Tiket Pesawat</Link>
      <Link href="/">Tiket Kereta Api</Link>
      <Link href="/">Tiket Bus & Travel</Link>
      <Link href="/">Antar Jemput Bandara</Link>
      <Link href="/">Rental Mobil</Link>
      <Link href="/">Atraksi dan Aktivitas</Link>
      <div className="flex items-center justify-center">
        <Link className="" href="/">
          Produk Lainnya{""}
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
      <div className={`divider-nav ${scroll && "hidden my-2"}`}></div>
    </div>
  );
};

export default TabNav;
