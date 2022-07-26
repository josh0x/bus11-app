import React, { Component } from "react";
import Link from "next/link";
import tw from "tailwind-styled-components";
import { useEffect, useMemo } from "react";
import Map from "./components/Map";

export default function Search() {
  return (
    <Wrapper>
      {/* Button Container */}
      <ButtonContainer>
        <Link href="/route">
          <BackButton src="https://i.pinimg.com/564x/c4/c8/c4/c4c8c425bee8fb9e9af842a865442a57.jpg" />
        </Link>
      </ButtonContainer>

      {/* Input Container */}

      <Map />

      {/* Map Container */}

      {/* Confirm location */}
    </Wrapper>
  );
}

const Wrapper = tw.div`
bg-gray-200 flex flex-col h-screen
`;

const ButtonContainer = tw.div`
bg-white px-4 py-2
`;

const BackButton = tw.img`
h-12 scale-50 object-contain cursor-pointer
`;

const InputContainer = tw.div`
h-screen 
`;

const MapContainer = tw.div`

`;
