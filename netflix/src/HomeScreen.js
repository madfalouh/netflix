import React from "react";
import "./HomeScreen.css";
import Banner from './Componements/Banner/Banner'
import requests from "./Request";
import Row from "./Componements/Row/Row";
import Nav from './Componements/Nav/Nav'
import Footer from "./Componements/footer/footer";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />
     

<div  className="rows" >
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}  ></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}    ></Row>
</div>
<Footer></Footer>
 </div>
  );
}

export default HomeScreen;
