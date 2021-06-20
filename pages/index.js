import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Sunnyside Agency</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

     <h1 className="font-black">Hello world</h1>
    </div>
  );
}
