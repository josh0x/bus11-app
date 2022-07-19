import React from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";

const Search = () => {
  return (
    <Wrapper>
      {/* Button Container */}
      <ButtonContainer>
        <Link href="/">
          <BackButton src="https://i.pinimg.com/564x/c4/c8/c4/c4c8c425bee8fb9e9af842a865442a57.jpg" />
        </Link>
      </ButtonContainer>

      {/* Input Container */}
      <InputContainer>
        <FromToIcons>
          <Circle src="" />
        </FromToIcons>
      </InputContainer>

      {/* Saved Places */}

      {/* Confirm location */}
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
bg-gray-200 h-screen
`;

const ButtonContainer = tw.div`
bg-white px-4
`;

const BackButton = tw.img`
h-12 scale-50 object-contain
`;

const InputContainer = tw.div`

`;

const FromToIcons = tw.div`

`;

const Circle = tw.img`
`;
