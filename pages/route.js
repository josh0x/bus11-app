import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const locations = [
  { name: "Philipsburg" },
  { name: "Maho" },
  { name: "St. Peters" },
  { name: "Dutch Quarter" },
  { name: "French Quarter" },
];

export default function Route() {
  const [selected, setSelected] = useState(locations[0]);

  return (
    <Wrapper>
      {/* Nav bar */}
      <Header>
        <Link href="/">
          <Logo src="https://i.pinimg.com/originals/c2/98/27/c2982793e4e308c03c9800c4a99f363d.jpg" />
        </Link>
        <Profile>
          <Name>Kim Woods</Name>
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
              Bus Route
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://cdn-icons-png.flaticon.com/512/8059/8059503.png" />
            Radio
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=022" />
            Donation
          </ActionButton>
        </ActionButtons>
        {/* Route Container */}
        <RouteContainer>
          <RouteActions>
            <FromToIcons>
              <OriginIcon src="https://cdn-icons-png.flaticon.com/512/6686/6686693.png" />
              <Line src="https://cdn-icons.flaticon.com/png/512/2652/premium/2652705.png?token=exp=1658366464~hmac=289a3e744afbd901c4d7cd74adbb1fd4" />
              <DestinationIcon src="https://cdn-icons-png.flaticon.com/512/447/447031.png" />
            </FromToIcons>
            <LocationBoxes>
              <div className=" mt-10 w-48 bg-black rounded-md">
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative">
                    <Listbox.Button className="relative w-full text-xl text-white cursor-default rounded-md bg-black py-4 mx-10 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-black md:text-md">
                      <span className=" block truncate">{selected.name}</span>
                      <span className=" pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 ">
                        <SelectorIcon
                          className="h-7 w-7 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full ml-4 overflow-auto rounded-md bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:text-md">
                        {locations.map((location, locationIdx) => (
                          <Listbox.Option
                            key={locationIdx}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-blue-500 text-white"
                                  : "bg-black text-white"
                              }`
                            }
                            value={location}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {location.name}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>

              {/* DESTINATION */}
              
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
md:w-32 lg:w-32 
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
flex flex-col 
`;

//Search section
const SearchSection = tw.div`
border
`;

const SearchButton = tw.div`
bg-black text-white text-center text-3xl rounded-md w-3/5 p-6
`;

// Text box
const Input = tw.input`
h-14 bg-gray-200 my-6 mx-4 outline-none border-none h-16 w-96 pl-10 text-xl
`;
