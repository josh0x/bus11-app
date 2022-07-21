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
          <Name>Melissa Richardson</Name>
          <UserImage src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80" />
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
              <Line src="https://cdn-icons.flaticon.com/png/512/2652/premium/2652705.png?token=exp=1658366464~hmac=289a3e744afbd901c4d7cd74adbb1fd4" />
              <DestinationIcon src="https://cdn-icons-png.flaticon.com/512/447/447031.png" />
            </FromToIcons>
            <LocationBoxes>
              <Input placeholder="Location" />
              <Input placeholder="Destination" />
            </LocationBoxes>
          </RouteActions>
          <SearchSection>
            <SearchButton>Search</SearchButton>
          </SearchSection>
        </RouteContainer>
      </ActionItems>
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
flex justify-between items-center border-b-4 border-black px-4 py-4 
`;

const Logo = tw.img`
h-14
`;

const Profile = tw.div`
flex items-center
`;

const Name = tw.div`
mr-4 w-35
`;

const UserImage = tw.img`
h-14 w-14 rounded-full object-contain border border-black
`;
// User section
const ActionItems = tw.div`
flex-1 flex flex-row border border-t-black border-t-4 border-b-black border-b-4
`;

const ActionButtons = tw.div`
flex flex-col w-1/6 justify-between border h-full items-center py-10
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
flex h-3/4 justify-center h-full
`;
// Around all the From to Icons
const FromToIcons = tw.div`
md:w-32 lg:w-32 border
`;

const OriginIcon = tw.img`
object-contain scale-75
`;

const Line = tw.img`
scale-50 rotate-90 object-contain
`;

const DestinationIcon = tw.img`
object-contain scale-75
`;
// Around location input fields
const LocationBoxes = tw.div`
flex flex-col border
`;

//Search section
const SearchSection = tw.div`
flex border justify-center h-1/4
`;

const SearchButton = tw.div`
bg-black text-white text-center text-2xl rounded-md w-3/5 p-6 m-6
`;

// Text box
const Input = tw.input`
h-14 bg-gray-200 my-6 mx-4 outline-none border-none h-16 w-96 pl-10 text-xl
`;
