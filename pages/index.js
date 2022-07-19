import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Header>
        <Link href="/home">
          <Logo src="https://i.pinimg.com/originals/c2/98/27/c2982793e4e308c03c9800c4a99f363d.jpg" />
        </Link>
        <Profile>
          <Name>Rolando Brison</Name>
          <UserImage src="https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/240593076_10165775712425088_6366602392358673388_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=m0XMRi9IFIQAX9PkZio&_nc_ht=scontent-ams4-1.xx&oh=00_AT_RqYnWqr0Q1khMmH-UvOVXYa2fUaKQrTjclT_rJCbmsg&oe=62D63234" />
        </Profile>
      </Header>
      <Map />

      <ActionItems>
        <ActionButtons>
          <Link href="/route">
            <ActionButton>
              <ActionButtonImage src="https://cdn-icons-png.flaticon.com/512/2554/2554966.png" />
              Bus Route
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://cdn-icons-png.flaticon.com/512/1186/1186562.png" />
            Radio
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://cdn-icons-png.flaticon.com/512/991/991959.png" />
            Donation
          </ActionButton>
        </ActionButtons>
        <InputButton>
          Made by Joshua Bowers. Commissioned by MP Rolando Brison. For the
          people of SXM 🇸🇽{" "}
        </InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen pl-10 pr-10 pt-2
`;

const Header = tw.div`
flex justify-between items-center pr-4 border-b-2 border-black pb-2
`;

const Logo = tw.img`
h-10
`;

const Profile = tw.div`
flex items-center
`;

const Name = tw.div`
mr-4 w-35
`;

const UserImage = tw.img`
h-12 w-12 rounded-full
`;

const ActionItems = tw.div`
flex-1 p-4 shadow-md 
`;

const ActionButtons = tw.div`
flex-1 shadow-md p-4
`;

const ActionButton = tw.div`
flex flex-1 border border-black mb-8 h-28 items-center flex-col justify-center transform hover:scale-110 transition text-xl w-36
`;

const ActionButtonImage = tw.img`
h-2/4
`;

const InputButton = tw.div`
h-20 text-2xl p-4 flex items-center mt-8 shadow-md
`;
