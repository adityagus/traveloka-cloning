import PartnerFooter from "@components/presentational/PartnerFooter";

// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 sticky ">
    <div class="master">

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Column 1: Logo dan Partner Pembayaran */}
        {/* <div>
          <h2 className="text-2xl font-bold mb-4">traveloka</h2>
          <div className="space-y-2">
            <img src="/iata.png" alt="IATA" className="h-6" />
            <img src="/logo1.png" alt="Partner Logo" className="h-6" />
          </div>
          <button className="mt-4 px-4 py-2 bg-gray-700 rounded text-sm">
            Jadi Partner Traveloka
          </button>
          <h3 className="mt-6 font-semibold">Partner Pembayaran</h3>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <img src="/visa.png" alt="Visa" className="h-8" />
            <img src="/bca.png" alt="BCA" className="h-8" />
            <img src="/gopay.png" alt="Gopay" className="h-8" />
            {/* Tambahkan logo lain */}
          {/* </div>
        </div> */} 
<PartnerFooter/>

        {/* Column 2: Tentang Traveloka */}
        <div className="text-xs">
          <div className="mb-8">
            <h3 className="font-semibold mb-4">Tentang Traveloka</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Cara Pesan</a></li>
              <li><a href="#" className="hover:underline">Hubungi Kami</a></li>
              <li><a href="#" className="hover:underline">Pusat Bantuan</a></li>
              <li><a href="#" className="hover:underline">Karier</a></li>
              <li><a href="#" className="hover:underline">Cicilan</a></li>
              <li><a href="#" className="hover:underline">Tentang Kami</a></li>
              <li><a href="#" className="hover:underline">Rilisan Fitur Terbaru</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow us on</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline flex gap-2 items-center"><span alt="facebook">
                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6904cd2e74ef73120833cff12185a320.svg" alt="facebook"/>
              </span> Facebook</a></li>
              <li><a href="#" className="hover:underline flex gap-2 items-center"><span alt="instagram">
                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/62a2fc240d7e00b05d0d6f6b4e785110.svg" alt="instagram"/>
              </span> Instagram</a></li>
              <li><a href="#" className="hover:underline flex gap-2 items-center"><span alt="tiktok">
                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/471f17c1510d49a98bec08a48b84c607.svg" alt="tiktok"/>
              </span> Tiktok</a></li>
              <li><a href="#" className="hover:underline flex gap-2 items-center"><span alt="youtube">
                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b593add66303beb2a0cae9e96963e68b.svg" alt="youtube"/>
              </span> Youtube</a></li>
              <li><a href="#" className="hover:underline flex gap-2 items-center"><span alt="twitter">
                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/eeedac505b69e7f8f476390656938afc.svg" alt="twitter"/>
              </span> Twitter</a></li>
              <li><a href="#" className="hover:underline flex gap-2 items-center"><span alt="telegram">
                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b71b3d4a793c24ce189336b1540cf5ed.svg" alt="telegram"/>
              </span> Telegram</a></li>
              <li><a href="#" className="hover:underline flex gap-2 items-center"><span alt="whatsapp">
                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/d/d5ea41f0e3eecc56cb049b81764c520c.svg" alt="whatsapp"/>
              </span> WhatsApp</a></li>
            </ul>
          </div>
        </div>

        {/* Column 3: Produk */}
        <div className="text-xs">
          <h3 className="font-semibold mb-4">Produk</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Hotel</a></li>
            <li><a href="#" className="hover:underline">Tiket Pesawat</a></li>
            <li><a href="#" className="hover:underline">Tiket Kereta Api</a></li>
            <li><a href="#" className="hover:underline">Tiket Bus & Travel</a></li>
            <li><a href="#" className="hover:underline">Antar Jemput Bandara</a></li>
            <li><a href="#" className="hover:underline">Rental Mobil</a></li>
            <li><a href="#" className="hover:underline">JR Pass</a></li>
            <li><a href="#" className="hover:underline">Taksi</a></li>
            <li><a href="#" className="hover:underline">Xperience</a></li>
            <li><a href="#" className="hover:underline">Cruises</a></li>
          </ul>
        </div>

        {/* Column 4: Lainnya */}
        <div className="text-xs">
          <h3 className="font-semibold mb-4">Lainnya</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Traveloka for Corporates</a></li>
            <li><a href="#" className="hover:underline">Traveloka Affiliate</a></li>
            <li><a href="#" className="hover:underline">Blog Traveloka</a></li>
            <li><a href="#" className="hover:underline">Pemberitahuan Privasi</a></li>
            <li><a href="#" className="hover:underline">Syarat & Ketentuan</a></li>
            <li><a href="#" className="hover:underline">Daftarkan Akomodasi Anda</a></li>
            <li><a href="#" className="hover:underline">Daftarkan Bisnis Aktivitas Anda</a></li>
            <li><a href="#" className="hover:underline">Traveloka Ads</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media & Download Section */}
      <div className="mt-10 border-t border-gray-700 pt-8 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#"><img src="/facebook.png" alt="Facebook" className="h-6" /></a>
          <a href="#"><img src="/instagram.png" alt="Instagram" className="h-6" /></a>
          <a href="#"><img src="/tiktok.png" alt="TikTok" className="h-6" /></a>
          <a href="#"><img src="/youtube.png" alt="YouTube" className="h-6" /></a>
        </div>
        <div className="flex justify-center space-x-4">
          <img src="/google-play.png" alt="Google Play" className="h-10" />
          <img src="/app-store.png" alt="App Store" className="h-10" />
        </div>
      </div>
    </div>
    </footer>
  );
}
