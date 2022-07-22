import Head from "next/head";
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Sawti</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen w-full">
        <div className=" h-screen">
          <div className=" py-10 bg-primary  flex items-center px-5 md:px-20 justify-between  text-white">
            <div>
              <div className="text-5xl sm:text-6xl py-10 drop-shadow-lg font-bold">A blockchain Audio experince for the world</div>
              <div className=" text-xl leading-8">Sawti allows you to publish all your audio in a decentralized way.</div>

              <Link href="/dashboard">
                <a>
                  <button className="bg-white hover:bg-transparent hover:text-white transition-all duration-300 border border-white  text-black py-3 px-10 mt-10 mb-10">START TODAY</button>
                </a>
              </Link>
            </div>
            picture
          </div>
          <div className=" text-center mt-14 text-primary text-lg px-5">some more words for foooter</div>
        </div>
      </div>
    </div>
  );
}
