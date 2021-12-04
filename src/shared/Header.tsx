import React from "react";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header>
      <Link href="/">
        <a>pseudonym chat</a>
      </Link>
    </header>
  );
};
