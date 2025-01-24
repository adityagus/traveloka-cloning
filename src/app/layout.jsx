
import '@styles/globals.css';
import Nav from '@components/presentational/Nav';
import Provider from '@components/presentational/Provider';
import Footer from '@components/container/Footer';
import Newsletter from '@components/container/Newsletter';
import HeroSection from '@components/container/HeroSection';
import Head from '@lib/lib';


export const metadata = {
  title: 'Traveloka',
  description: 'E-commerce website for travel and tourism',
  keywords: ['travel', 'tourism', 'e-commerce', 'nextjs'],
  openGraph: {
    type: 'website',
    url: 'https://traveloka.com',
    title: 'Traveloka',
    description: 'E-commerce website for travel and tourism',
    images: [
      {
        url: 'https://traveloka.com/images/traveloka-logo.png',
        width: 1200,
        height: 630,
        alt: 'Traveloka logo',
      },
    ],
  },
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"
        ></script>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css"
        />
      </head>
      <body>
        {/* <div className='main'>
          <div className='gradient'/>
        </div> */}

        <Nav changes={false} display="fixed" />

        <HeroSection />
        <main className="app">{children}</main>

        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
