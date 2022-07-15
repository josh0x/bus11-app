import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9zaHVhYm93ZXJzIiwiYSI6ImNsNWxxM2pyYzBtZDMzZHFydXFjMDJjeDcifQ.rk1C8arE9nuIM6ywE4r5Cg";

export default function Home() {
  useEffect(() => {
    console.log("gm");
  }, []);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-63.076094425521255, 18.094497883416697], 
      zoom: 11.5,
    });
  });

  // const map = new.mapboxgl.Map({
  //   container: 'map',
  //   style: '',
  //   center: ,
  //   zoom: ,
  // })

  return (
    <Wrapper>
      <Map id="map">Map</Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`;

const Map = tw.div`
  bg-red-500 flex-1
`;

const ActionItems = tw.div`
  flex-1
`;
