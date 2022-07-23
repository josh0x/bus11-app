import React from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import Map from "./components/Map";
import { useEffect } from "react";

const Search = () => {
  return (
    <Wrapper>
      {/* Button Container */}
      <ButtonContainer>
        <Link href="/route">
          <BackButton src="https://i.pinimg.com/564x/c4/c8/c4/c4c8c425bee8fb9e9af842a865442a57.jpg" />
        </Link>
      </ButtonContainer>

      {/* Input Container */}
      <InputContainer>
        <Map />
      </InputContainer>

      {/* Saved Places */}

      {/* Confirm location */}
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
bg-yellow-200 h-screen flex flex-col
`;

const ButtonContainer = tw.div`
bg-white px-4
`;

const BackButton = tw.img`
h-12 scale-50 object-contain
`;

const InputContainer = tw.div`

`;
