import React, { useEffect } from "react";
import ImgSlider from "./ImgSlider";
import styled from "styled-components";
import Viewers from "./Viewers";
import Movie from "./Movie";
import { Outlet, Link } from "react-router-dom";
// import db from "../firebase";

function Home() {
  // useEffect(() => {
  //   db.collection("movies").onSnapshot((snapshot) => {
  //     let tempMovies = snapshot.docs.map((doc) => {
  //       return { id: doc.id, ...doc.data() };
  //     });
  //   });
  // }, []);
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movie />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
