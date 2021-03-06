import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Link from "next/link";
import Map from "./components/Map";

export default function Home() {
  return (
    <Wrapper>
      {/* Nav bar */}
      <Header>
        <Link href="/">
          <Logo src="https://i.pinimg.com/originals/c2/98/27/c2982793e4e308c03c9800c4a99f363d.jpg" />
        </Link>
        {/* <ButtonContainer>
          <Link href="/"> */}
        {/* <BackButton src="https://i.pinimg.com/564x/c4/c8/c4/c4c8c425bee8fb9e9af842a865442a57.jpg" /> */}
        {/* <BackButton src="https://cdn-icons.flaticon.com/png/512/2040/premium/2040514.png?token=exp=1658074793~hmac=a9eea04ab4691db8cc17b3e54c292a63" />
          </Link>
        </ButtonContainer> */}
        <Profile>
          <Name>Rolando Brison</Name>
          <UserImage src="https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/240593076_10165775712425088_6366602392358673388_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=m0XMRi9IFIQAX9PkZio&_nc_ht=scontent-ams4-1.xx&oh=00_AT_RqYnWqr0Q1khMmH-UvOVXYa2fUaKQrTjclT_rJCbmsg&oe=62D63234" />
        </Profile>
      </Header>
      {/* Map */}
      <Map />
      {/* User section */}
      <ActionItems>
        <ActionButtons>
          <Link href="/route">
            <ActionButton>
              <ActionButtonImage src="https://cdn-icons-png.flaticon.com/512/4317/4317907.png" />
              {/* <ActionButtonImage src="https://cdn-icons-png.flaticon.com/512/2554/2554966.png" /> */}
              Bus Route
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://cdn-icons-png.flaticon.com/512/8059/8059503.png" />
            {/* <ActionButtonImage src="https://cdn-icons-png.flaticon.com/512/1186/1186562.png" /> */}
            Radio
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=022" />
            {/* <ActionButtonImage src="https://cdn-icons-png.flaticon.com/512/7016/7016539.png" /> */}
            Donation
          </ActionButton>
        </ActionButtons>
        <RouteContainer></RouteContainer>
      </ActionItems>
      <Footer>
        Developed by Joshua Bowers | ???????? | Commissioned by MP Rolando Brison.
      </Footer>
    </Wrapper>
  );
}

// Tailwind Style components
const Wrapper = tw.div`
flex flex-col h-screen pl-10 pr-10 pt-2
`;

// Navbar
const Header = tw.div`
flex justify-center items-center border-b-2 border-black pb-2
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
// User section
const ActionItems = tw.div`
flex-1 flex flex-row border border-black 
`;

const ActionButtons = tw.div`
flex flex-col items-center w-1/6 justify-center justify-between my-36 mx-16
`;

const ActionButton = tw.div`
flex border h-28 items-center flex-col justify-center transform hover:scale-110 transition text-xl w-28 shadow-md rounded-sm
`;

const ActionButtonImage = tw.img`
h-2/5 
`;
// Text bottom
const Footer = tw.div`
h-20 text-2xl p-4 border border-black font-helvetica text-center
`;
// Back button
const ButtonContainer = tw.div`

`;

const BackButton = tw.img`
h-12 scale-75 object-contain rotate-180 
`;
// The entire route div
const RouteContainer = tw.div`
w-5/6 flex flex-col border border-l-black
`;
// Around the icons and inputs
const RouteActions = tw.div`
flex h-3/4 justify-center 
`;
// Around all the From to Icons
const FromToIcons = tw.div`
md:w-48 lg:w-48 p-6 justify-center my-24
`;

const OriginIcon = tw.img`
object-contain scale-75
`;

const Line = tw.img`
scale-50 rotate-90 p-4 object-contain
`;

const DestinationIcon = tw.img`
p-4 object-contain scale-75
`;
// Around location input fields
const LocationBoxes = tw.div`
flex flex-col justify-between py-32
`;

//Search section
const SearchSection = tw.div`
flex-1
`;

const SearchButton = tw.div`
bg-black text-white text-center mt-6 py-8 mx-4 text-2xl rounded-md w-4/5 ml-20
`;

// Text box
const Input = tw.input`
h-14 bg-gray-200 my-6 mx-4 outline-none border-none h-16 w-96 pl-10 text-xl
`;
