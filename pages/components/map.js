import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9zaHVhYm93ZXJzIiwiYSI6ImNsNjIxbDdmZDBmb3AzY2p2NmpheDBibWkifQ.FCBNhRZh3dK7zqVNYcVBBw";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-63.076094425521255, 18.056497883416697],
      zoom: 11.5,
    });
  });

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1
`;
