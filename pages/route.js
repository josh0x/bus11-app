import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
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
  { name: "Cole bay" },
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
          <Image alt={`Logo`} src="/bus-11-twit.png" width={150} height={150} />
        </Link>
      </Header>
      {/* User section */}
      <ActionItems>
        {/* Route Container */}
        <RouteContainer>
          <FromToIcons>
            {/* Origin and dropdown menu */}
            <LocationIcon src="https://cdn-icons-png.flaticon.com/512/6686/6686693.png" />
            <div className=" w-64 bg-black rounded-md">
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative">
                  <Listbox.Button className="pl-6 relative w-full text-3xl text-white cursor-default rounded-md bg-black py-8 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-black">
                    <span className=" block truncate">{selected.name}</span>
                    <span className=" pointer-events-none absolute inset-y-0 right-0 flex items-center ">
                      <SelectorIcon
                        className="h-12 w-12 mx-4 text-white"
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
                    <Listbox.Options className="absolute m-2 w-full ml-4 overflow-auto rounded-md bg-black py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-3xl">
                      {locations.map((location, locationIdx) => (
                        <Listbox.Option
                          key={locationIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-4 pl-10 ${
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
          </FromToIcons>

          {/* TRANSFER ICONS / BUTTON */}
          <TransferDiv>
            <TransferIcon src="https://cdn-icons.flaticon.com/png/512/2652/premium/2652705.png?token=exp=1658836902~hmac=23f61b3a0a9a94fca0d7ef59020cca37" />
          </TransferDiv>

          {/* Destination and dropdown menu */}
          <FromToIcons>
            <DestinationIcon src="https://cdn-icons-png.flaticon.com/512/447/447031.png" />
            <div className=" w-64 bg-black rounded-md">
              <Listbox value={selected} onChange={setSelected}>
                <div className=" relative">
                  <Listbox.Button className="pl-6 relative w-full text-3xl text-white cursor-default rounded-md bg-black py-8  text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-black">
                    <span className=" block truncate">{selected.name}</span>
                    <span className=" pointer-events-none absolute inset-y-0 right-0 flex items-center ">
                      <SelectorIcon
                        className="h-12 w-12 mx-4 text-white"
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
                    <Listbox.Options className="absolute m-2 w-full ml-4 overflow-auto rounded-md bg-black py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-3xl">
                      {locations.map((location, locationIdx) => (
                        <Listbox.Option
                          key={locationIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-4 pl-10 ${
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
          </FromToIcons>
        </RouteContainer>
        <SearchSection>
          <Link href="/search">
            <SearchButton>Search</SearchButton>
          </Link>
        </SearchSection>
      </ActionItems>

      <ActionButtons>
        <Link href="/route">
          <ActionButton>
            <ActionButtonImage src="https://cdn-icons-png.flaticon.com/512/4317/4317907.png" />
            {/* Bus Route */}
          </ActionButton>
        </Link>
        <ActionButton>
          <ActionButtonImage src="https://cdn-icons-png.flaticon.com/512/8059/8059503.png" />
          {/* Radio */}
        </ActionButton>
        <ActionButton>
          <ActionButtonImage src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=022" />
          {/* Donation */}
        </ActionButton>
      </ActionButtons>
    </Wrapper>
  );
}

// Tailwind Style components
const Wrapper = tw.div`
flex flex-col h-screen
`;

// Navbar
const Header = tw.div`
flex justify-center bg-black 
`;

// User section
// "Action items" has the buttons: radio, bus route, donation
const ActionItems = tw.div`
h-4/5 border 
`;

const ActionButtons = tw.div`
flex justify-center gap-14 py-6 border-t-4 border-black 
`;

const ActionButton = tw.div`
flex border-black border-4 transform hover:scale-110 transition shadow-lg rounded-md w-32 h-32 p-4
`;

const ActionButtonImage = tw.img`
`;

// The entire route div
// Actually the icons and dropdown menus
const RouteContainer = tw.div`
flex objects-contain justify-center justify-between h-5/6 p-20
`;
// Around all the From to Icons
const FromToIcons = tw.div`
 
`;

const TransferDiv = tw.div`
p-4 justify-center flex 
`;

const LocationIcon = tw.img`
object-contain h-40 pl-10
`;

const LocationDropdown = tw.div`
`;

const DestinationIcon = tw.img`
object-contain h-40 p-6 pl-16
`;

const TransferIcon = tw.img`
object-contain h-24 mt-4
`;

//Search section
const SearchSection = tw.div`

`;

const SearchButton = tw.div`
bg-black text-white text-center text-4xl rounded-md m-10 p-8 cursor-pointer
`;
