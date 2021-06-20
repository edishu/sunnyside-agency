import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [winWidth, setWinWidth] = useState();
  useEffect(() => {
    const handleResize = () => setWinWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div className="min-h-screen">
      <Head>
        <title>Sunnyside Agency</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <article className="flex flex-wrap">
        <img
          src={`/${
            winWidth >= 648 ? "desktop" : "mobile"
          }/image-gallery-milkbottles.jpg`}
          className="w-1/2 sm:w-1/4"
        ></img>
        <img
          src={`/${
            winWidth >= 648 ? "desktop" : "mobile"
          }/image-gallery-orange.jpg`}
          className="w-1/2 sm:w-1/4"
        ></img>
        <img
          src={`/${
            winWidth >= 648 ? "desktop" : "mobile"
          }/image-gallery-cone.jpg`}
          className="w-1/2 sm:w-1/4"
        ></img>
        <img
          src={`/${
            winWidth >= 648 ? "desktop" : "mobile"
          }/image-gallery-sugar-cubes.jpg`}
          className="w-1/2 sm:w-1/4"
        ></img>
      </article>

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
