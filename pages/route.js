import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";

export default function Route() {
  return (
    <Wrapper>
      {/* Nav bar */}
      <Header>
        <Link href="/home">
          <Logo src="https://i.pinimg.com/originals/c2/98/27/c2982793e4e308c03c9800c4a99f363d.jpg" />
        </Link>
        <ButtonContainer>
          <Link href="/">
            {/* <BackButton src="https://i.pinimg.com/564x/c4/c8/c4/c4c8c425bee8fb9e9af842a865442a57.jpg" /> */}
            <BackButton src="https://cdn-icons.flaticon.com/png/512/2040/premium/2040514.png?token=exp=1658074793~hmac=a9eea04ab4691db8cc17b3e54c292a63" />
          </Link>
        </ButtonContainer>
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
        <RouteContainer>
          <RouteActions>
            <FromToIcons>
              <OriginIcon src="https://cdn-icons-png.flaticon.com/512/6686/6686693.png" />
              <Line src="https://cdn-icons.flaticon.com/png/512/2990/premium/2990154.png?token=exp=1658092304~hmac=9902be6761ab3c3bd3c09f9a49d7de3a" />
              <DestinationIcon src="https://cdn-icons-png.flaticon.com/512/447/447031.png" />
            </FromToIcons>
            <LocationBoxes>
              <Input placeholder="Location" />
              <Input placeholder="Destination" />
            </LocationBoxes>
          </RouteActions>
        </RouteContainer>
      </ActionItems>
      <Footer>
        Developed by Joshua Bowers. Commissioned by MP Rolando Brison. For the
        people of SXM 🇸🇽{" "}
      </Footer>
    </Wrapper>
  );
}

// Tailwind Style components
const Wrapper = tw.div`
flex flex-col h-screen pl-10 pr-10 pt-2 border border-teal-600
`;

// Navbar
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
// User section
const ActionItems = tw.div`
flex-1 flex flex-row border border-yellow-700 
`;

const ActionButtons = tw.div`
flex  flex-col items-center w-1/6 border border-blue-500 justify-center justify-between my-36
`;

const ActionButton = tw.div`
flex border h-28 items-center flex-col justify-center transform hover:scale-110 transition text-xl w-28 shadow-md rounded-sm
`;

const ActionButtonImage = tw.img`
h-2/5 
`;
// Text bottom
const Footer = tw.div`
h-20 text-2xl p-4 flex items-center border font-helvetica
`;

const ButtonContainer = tw.div`

`;

const BackButton = tw.img`
h-12 scale-75 object-contain rotate-180 
`;
// The entire route div
const RouteContainer = tw.div`
w-5/6 border border-black 
`;
// Around the icons and inputs
const RouteActions = tw.div`
flex flex-colo border items-center justify-center my-44
`;
// Around all the From to Icons
const FromToIcons = tw.div`
border border-pink-700 md:w-32 lg:w-48 p-6 
`;

const OriginIcon = tw.img`
border object-contain scale-50
`;

const Line = tw.img`
scale-50 rotate-90 border p-4 object-contain
`;

const DestinationIcon = tw.img`
border p-4 object-contain scale-50
`;
// Around location input fields
const LocationBoxes = tw.div`
flex flex-col border justify-center border-blue-800
`;
// Text box
const Input = tw.input`
h-14 bg-gray-200 my-6 mx-4 outline-none border-none h-16 w-96 pl-10 text-xl
`;

const SearchAction = tw.div`
flex items-center bg-white border px-4 border-teal-900
`;
