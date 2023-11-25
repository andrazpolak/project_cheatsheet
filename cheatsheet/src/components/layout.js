import Navbar from "./navbar";
import Head from "next/head";
// import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Cheat Sheet</title>
        <meta name="description" content="Cheat sheet for programmers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
