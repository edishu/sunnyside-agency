import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Sunnyside Agency</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <footer className="py-10 bg-footerCyan text-footerTxt flex justify-center">
        <div className="max-w-prose">
          <div className="flex justify-center">
            <img src="/logo-green.svg"></img>
          </div>
          <div className="flex justify-center my-8">
            <span className="mx-4">About</span>
            <span className="mx-4">Services</span>
            <span className="mx-4">Projects</span>
          </div>
          <div className="flex justify-center mt-16 mb-8">
            <img src="/icon-facebook.svg" className="mx-3"></img>
            <img src="/icon-instagram.svg" className="mx-3"></img>
            <img src="/icon-twitter.svg" className="mx-3"></img>
            <img src="/icon-pinterest.svg" className="mx-3"></img>
          </div>
        </div>
      </footer>
    </div>
  );
}
