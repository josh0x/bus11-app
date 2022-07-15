import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link"

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <Logo src="https://i.pinimg.com/originals/c2/98/27/c2982793e4e308c03c9800c4a99f363d.jpg" />
          <Profile>
            <Name>Rolando Brison</Name>
            <UserImage src="https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/240593076_10165775712425088_6366602392358673388_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=m0XMRi9IFIQAX9PkZio&_nc_ht=scontent-ams4-1.xx&oh=00_AT_RqYnWqr0Q1khMmH-UvOVXYa2fUaKQrTjclT_rJCbmsg&oe=62D63234" />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
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
          Where to?
        </InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
  flex-1 p-4
`;

const Header = tw.div`
flex justify-between items-center
`;

const Logo = tw.img`
h-28 scale-50
`;

const Profile = tw.div`
flex items-center
`;

const Name = tw.div`
mr-4 w-35
`;

const UserImage = tw.img`
h-12 w-12 rounded-full border border-slate-200 p-px
`;

const ActionButtons = tw.div`
flex
`;

const ActionButton = tw.div`
flex bg-slate-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`;

const ActionButtonImage = tw.img`
h-2/4
`;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 rounded-lg
`;
