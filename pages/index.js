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
    <div className="min-h-screen text-lg xl:mx-auto xl:container">
      <Head>
        <title>Sunnyside Agency</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <article className="sm:flex sm:flex-row-reverse">
        <img
          src={`/${winWidth >= 640 ? "desktop" : "mobile"}/image-transform.jpg`}
          className="sm:w-1/2"
        ></img>
        <Feature
          heading="Transform your brand"
          para="We are a full-service creative agency specializing in helping brands grow fast. 
          Engage your clients through compelling visuals that do most of the marketing for you."
          linkColor="bg-brndYellow"
        />
      </article>
      <article className="sm:flex">
        <img
          src={`/${winWidth >= 640 ? "desktop" : "mobile"}/image-stand-out.jpg`}
          className="sm:w-1/2"
        ></img>
        <Feature
          heading="Stand out to the right audience"
          para="Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places."
          linkColor="bg-softRed"
        />
      </article>
      <article className="sm:flex">
        <figure className="relative">
          <img
            src={`/${
              winWidth >= 640 ? "desktop" : "mobile"
            }/image-graphic-design.jpg`}
          ></img>
          <figcaption className="absolute top-2/3 sm:top-1/3 md:top-1/2 lg:top-2/3 text-center text-desatCayn mx-auto container">
            <h2 className="font-fraunces text-2xl mb-6">Graphic Design</h2>
            <p className="text-base font-barlow px-4 lg:px-12">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </figcaption>
        </figure>
        <figure className="relative">
          <img
            src={`/${
              winWidth >= 640 ? "desktop" : "mobile"
            }/image-photography.jpg`}
          ></img>
          <figcaption className="absolute top-2/3 sm:top-1/3 md:top-1/2 lg:top-2/3 text-center text-desatCayn mx-auto container">
            <h2 className="font-fraunces text-2xl mb-6">Photography</h2>
            <p className="text-base font-barlow px-4 lg:px-12">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </figcaption>
        </figure>
      </article>
      <article className="py-12 bg-testimonialCream">
        <h2 className="text-center text-grayBlue font-fraunces font-bold uppercase mb-20">
          Client Testimonials
        </h2>
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row">
            <ClientTestimony
              imgUrl="/image-emily.jpg"
              para="We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit."
              name="Emily R."
              desig="Marketing Director"
            />
            <ClientTestimony
              imgUrl="/image-thomas.jpg"
              para="Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience."
              name="Thomas S."
              desig="Chief Operating Officer"
            />
            <ClientTestimony
              imgUrl="/image-jennie.jpg"
              para="Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!."
              name="Jennie F."
              desig="Business Owner"
            />
          </div>
        </div>
      </article>
      <article className="flex flex-wrap">
        <img
          src={`/${
            winWidth >= 640 ? "desktop" : "mobile"
          }/image-gallery-milkbottles.jpg`}
          className="w-1/2 sm:w-1/4"
        ></img>
        <img
          src={`/${
            winWidth >= 640 ? "desktop" : "mobile"
          }/image-gallery-orange.jpg`}
          className="w-1/2 sm:w-1/4"
        ></img>
        <img
          src={`/${
            winWidth >= 640 ? "desktop" : "mobile"
          }/image-gallery-cone.jpg`}
          className="w-1/2 sm:w-1/4"
        ></img>
        <img
          src={`/${
            winWidth >= 640 ? "desktop" : "mobile"
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

const ClientTestimony = ({ imgUrl, para, name, desig }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={imgUrl} className="rounded-full mb-10 w-24 h-24"></img>
      <p className="text-center text-drkGrayBlue font-bold mb-10 px-5">
        {para}
      </p>
      <h3 className="text-xl text-desatBlue font-fraunces font-black mb-2">
        {name}
      </h3>
      <h4 className="text-grayBlue font-barlow mb-20">{desig}</h4>
    </div>
  );
};

const Feature = ({ heading, para, linkColor }) => {
  return (
    <div className="text-center sm:text-left bg-testimonialCream py-14 px-10 sm:py-28 sm:px-24">
      <h2 className="text-3xl text-desatBlue font-black font-fraunces mb-8">
        {heading}
      </h2>
      <p className="font-barlow text-grayisBlue mb-8">{para}</p>
      <div className="flex flex-col items-center sm:items-start">
        <a
          href="#"
          className="text-desatBlue font-fraunces font-black text-base uppercase z-20"
        >
          Learn more
        </a>
        <span
          className={`${linkColor} h-3 rounded-full -mt-3 z-10 font-fraunces uppercase text-desatBlue text-opacity-0`}
        >
          Learn More
        </span>
      </div>
    </div>
  );
};
