import Head from 'next/head'
import HomePage from "../components/homepage.js";
export default function Home() {
  return (
    <div>
      <Head>
      <meta name="description" content="Your site description" />
      <meta name="viewport" content="height=device-height, 
                      width=device-width, initial-scale=1.0, 
                      minimum-scale=1.0, maximum-scale=1.0, 
                      user-scalable=no, target-densitydpi=device-dpi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div  className='overflow-hidden'>
      <HomePage />
      </div>
    </div>

  );
}
