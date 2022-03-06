import { Head } from "next/head";
import { Slide } from "../components/Slide";
import { SlideHome } from "../slides/home";

export default function News() {
  return (
    <>
      <main>
        <SlideHome></SlideHome>
        <Slide></Slide>
        <Slide></Slide>
      </main>
    </>
  );
}
