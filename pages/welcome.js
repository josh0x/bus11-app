import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Link from "next/link";

export default function Welcome() {
  return (
    <Wrapper>
      {/* Nav bar */}
      <Header>
        <Link href="/">
          <Logo src="https://i.pinimg.com/originals/c2/98/27/c2982793e4e308c03c9800c4a99f363d.jpg" />
        </Link>
      </Header>
      <Footer>
        Developed by Joshua Bowers | 🇸🇽 | Commissioned by MP Rolando Brison.
      </Footer>
    </Wrapper>
  );
}

// Tailwind Style components
const Wrapper = tw.div`
flex flex-col h-screen 
`;

// Navbar
const Header = tw.div`
flex justify-center items-center border-b-2 border-black py-4 
`;

const Logo = tw.img`
h-10
`;
// Text bottom
const Footer = tw.div`
h-20 text-2xl p-4 border border-black font-helvetica text-center
`;