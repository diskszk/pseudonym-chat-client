import React from "react";
import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <title>pseudonym chat</title>
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
};
