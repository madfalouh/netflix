import React, { useEffect, useRef } from "react";

import "./Welcome.css";

import netflixLogo from "../../assets/images/netflix-logo.png";
import { useNavigate } from "react-router-dom";

function Welcome() {
  useEffect(() => {
    if (vid && vid1) {
      vid.current.play();
      vid1.current.play();
    }
  }, []);
  const navigate = useNavigate()
  const vid = useRef(null);
  const vid1 = useRef(null);

  const showDesc = (id) => {


    const el = document.getElementById(id);
    const parentElement = document.getElementById(id - 1);
    let h3 = null;

    if ( ( id -1 )=== 1) {
          

      h3 = parentElement.children[1].children[1]
    } else {
      h3 = parentElement.children[0].children[1];
    }

  const computedStyle = window.getComputedStyle(el);
  const height = computedStyle.getPropertyValue("height");

console.log(height);

      if(el.style.height===""){
console.log("klklkl");
el.style.height="0px"
  }
    
    if (height === "0px") {

      el.style.height = "400px";
      h3.textContent="-"
    } 
else {
      el.style.height = "0px";
      h3.textContent="+"
    }
  };

  return (
    <div className="HomeContainer">
      <div className="header_section">
        <div className="header_section-first">
          <img src={netflixLogo} className="netflix-logo-welcome"></img>
          <button className="disconnect">disconnect</button>
        </div>

        <div className="body-header">
          <div className="text_elemts">
            <h3 className="welcome-msg">Ravis de vous revoir, Ibtissam!</h3>

            <h2 className="ad-netflix">
              Films et séries illimités, et bien plus encore.
            </h2>

            <h3 className="welcome-msg">
              Visionnez n'importe où. Annulez n'importe quand.
            </h3>

            <button className="disconnect  reactivate ">
              Reactiver Votre abonement{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="tv_section">
        <div className="tv-wrapper">
          <div>
            <h2 className="tv-main-msg">Visionnez sur votre téléviseur.</h2>

            <h3 className="tv-side-msg">
              Compatible avec les téléviseurs connectés, Playstation, Xbox,
              Chromecast, Apple TV, lecteurs Blu-ray et bien plus encore.
            </h3>
          </div>

          <div className="tv-vid">
            <img
              alt=""
              className="our-story-card-img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              data-uia="our-story-card-img"
            ></img>

            <video
              ref={vid1}
              className="our-story-card-video"
              data-uia="our-story-card-video"
              autoplay
              playsinline
              muted
              loop
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>

      <div className="tv_section ">
        <div className="tv-wrapper kiddo">
          <div>
            <h2 className="tv-main-msg">Visionnez n'importe où.</h2>

            <h3 className="tv-side-msg">
              Visionnez en continu autant de films et de séries que vous le
              désirez sur votre téléphone, tablette, portable et téléviseur sans
              payer un sou de plus.
            </h3>
          </div>

          <div className="tv-vid  kk ">
            <img
              alt=""
              className="our-story-card-img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              data-uia="our-story-card-img"
            />

            <video
              ref={vid}
              className="our-story-card-video kid"
              data-uia="our-story-card-video"
              autoplay
              muted
              loop
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>

      <div className="tv_section  ">
        <div className="tv-wrapper  ">
          <div>
            <h2 className="tv-main-msg">Créez des profils pour les enfants.</h2>

            <h3 className="tv-side-msg">
              Vos enfants vivront des aventures avec leurs personnages préférés
              dans un espace créé pour eux – gratuitement avec votre abonnement.
            </h3>
          </div>

          <div className="tv-vid">
            <img
              alt=""
              class="our-story-card-img"
              src="https://occ-0-5671-2430.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABbN6pi_bFc9A7RIro_XUCRVuEb-PNbPx2G8CMhztwzwCRI6k5QsMd_qUPPkb89KSQwBFg0ijdx88drv37Y4unvXzCjB-V0vIk3mP.png?r=a3e"
              data-uia="our-story-card-img"
            />
          </div>
        </div>
      </div>

      <div className="tv_section ">
        <div className="tv-wrapper kiddo">
          <div>
            <h2 className="tv-main-msg">
              Téléchargez vos séries pour les visionner hors ligne.
            </h2>

            <h3 className="tv-side-msg">
              Uniquement offert avec les plans sans publicité.
            </h3>
          </div>

          <div className="tv-vid  kk ">
            <img
              alt=""
              class="our-story-card-img  phone "
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              data-uia="our-story-card-img"
            ></img>

            <div className="downald-phone">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"></img>
              <div className="text-wrapper">
                <p>Stranger Things </p>
                <div className="encours">Downloading...</div>
              </div>

              <div
                class="our-story-card-animation-custom"
                data-uia="nmhp-card-animation-asset-custom"
                aria-hidden="true"
                bis_skin_checked="1"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="tv_section question-section ">
        <div
          className="question-wrapper  "
          id="1"
          onClick={() => {
            showDesc(2);
          }}
        >
          <h2 className="tv-main-msg">Foire aux questions.</h2>
          <div className="question">
            <h3>Qu'est-ce que Netflix</h3>
            <h3>+</h3>
          </div>
        </div>

        <div className="question-wrapper-big   question-show " id="2">
          <div className="question  question-collapsed ">
            <h3>
              Netflix est un service de diffusion en continu qui donne accès à
              un vaste catalogue de séries, de films, d'animés japonais, de
              documentaires et d'autres titres primés sur des milliers
              d'appareils connectés à Internet.<br></br>
              <br></br>
              Vous pouvez visionner des titres à volonté, quand vous le voulez –
              tout cela pour un prix mensuel peu élevé. Il y a toujours quelque
              chose à découvrir, et nous ajoutons de nouvelles séries et de
              nouveaux films toutes les semaines!
            </h3>
          </div>
        </div>

        <div
          className="question-wrapper"
          id="3"
          onClick={() => {
            showDesc(4);
          }}
        >
          <div className="question">
            <h3>Combien coûte Netflix?</h3>
            <h3>+</h3>
          </div>
        </div>

        <div className="question-wrapper-big  question-show " id="4">
          <div className="question  question-collapsed ">
            <h3>
              Netflix est un service de diffusion en continu qui donne accès à
              un vaste catalogue de séries, de films, d'animés japonais, de
              documentaires et d'autres titres primés sur des milliers
              d'appareils connectés à Internet.<br></br>
              <br></br>
              Vous pouvez visionner des titres à volonté, quand vous le voulez –
              tout cela pour un prix mensuel peu élevé. Il y a toujours quelque
              chose à découvrir, et nous ajoutons de nouvelles séries et de
              nouveaux films toutes les semaines!
            </h3>
          </div>
        </div>

        <div
          className="question-wrapper  "
          id="5"
          onClick={() => {
            showDesc(6);
          }}
        >
          <div className="question">
            <h3>
              En quoi un plan avec publicité est-il différent des autres plans?
            </h3>
            <h3>+</h3>
          </div>
        </div>

        <div className="question-wrapper-big  question-show " id="6">
          <div className="question  question-collapsed ">
            <h3>
              Netflix est un service de diffusion en continu qui donne accès à
              un vaste catalogue de séries, de films, d'animés japonais, de
              documentaires et d'autres titres primés sur des milliers
              d'appareils connectés à Internet.<br></br>
              <br></br>
              Vous pouvez visionner des titres à volonté, quand vous le voulez –
              tout cela pour un prix mensuel peu élevé. Il y a toujours quelque
              chose à découvrir, et nous ajoutons de nouvelles séries et de
              nouveaux films toutes les semaines!
            </h3>
          </div>
        </div>

        <div
          className="question-wrapper  "
          id="7"
          onClick={() => {
            showDesc(8);
          }}
        >
          <div className="question">
            <h3>Où puis-je visionner?</h3>
            <h3>+</h3>
          </div>
        </div>

        <div className="question-wrapper-big  question-show  " id="8">
          <div className="question  question-collapsed ">
            <h3>
              Netflix est un service de diffusion en continu qui donne accès à
              un vaste catalogue de séries, de films, d'animés japonais, de
              documentaires et d'autres titres primés sur des milliers
              d'appareils connectés à Internet.<br></br>
              <br></br>
              Vous pouvez visionner des titres à volonté, quand vous le voulez –
              tout cela pour un prix mensuel peu élevé. Il y a toujours quelque
              chose à découvrir, et nous ajoutons de nouvelles séries et de
              nouveaux films toutes les semaines!
            </h3>
          </div>
        </div>

        <div
          className="question-wrapper  "
          id="9"
          onClick={() => {
            showDesc(10);
          }}
        >
          <div className="question">
            <h3>Comment puis-je annuler mon abonnement?</h3>
            <h3>+</h3>
          </div>
        </div>

        <div className="question-wrapper-big  question-show  " id="10">
          <div className="question  question-collapsed ">
            <h3>
              Netflix est un service de diffusion en continu qui donne accès à
              un vaste catalogue de séries, de films, d'animés japonais, de
              documentaires et d'autres titres primés sur des milliers
              d'appareils connectés à Internet.<br></br>
              <br></br>
              Vous pouvez visionner des titres à volonté, quand vous le voulez –
              tout cela pour un prix mensuel peu élevé. Il y a toujours quelque
              chose à découvrir, et nous ajoutons de nouvelles séries et de
              nouveaux films toutes les semaines!
            </h3>
          </div>
        </div>

        <div
          className="question-wrapper  "
          id="11"
          onClick={() => {
            showDesc(12);
          }}
        >
          <div className="question">
            <h3>Que puis-je visionner sur Netflix?</h3>
            <h3>+</h3>
          </div>
        </div>

        <div className="question-wrapper-big  question-show  " id="12">
          <div className="question  question-collapsed ">
            <h3>
              Netflix est un service de diffusion en continu qui donne accès à
              un vaste catalogue de séries, de films, d'animés japonais, de
              documentaires et d'autres titres primés sur des milliers
              d'appareils connectés à Internet.<br></br>
              <br></br>
              Vous pouvez visionner des titres à volonté, quand vous le voulez –
              tout cela pour un prix mensuel peu élevé. Il y a toujours quelque
              chose à découvrir, et nous ajoutons de nouvelles séries et de
              nouveaux films toutes les semaines!
            </h3>
          </div>
        </div>

        <div
          className="question-wrapper   "
          id="13"
          onClick={() => {
            showDesc(14);
          }}
        >
          <div className="question">
            <h3>Est-ce que Netflix convient aux enfants?</h3>
            <h3>+</h3>
          </div>
        </div>

        <div className="question-wrapper-big   question-show " id="14">
          <div className="question  question-collapsed ">
            <h3>
              Netflix est un service de diffusion en continu qui donne accès à
              un vaste catalogue de séries, de films, d'animés japonais, de
              documentaires et d'autres titres primés sur des milliers
              d'appareils connectés à Internet.<br></br>
              <br></br>
              Vous pouvez visionner des titres à volonté, quand vous le voulez –
              tout cela pour un prix mensuel peu élevé. Il y a toujours quelque
              chose à découvrir, et nous ajoutons de nouvelles séries et de
              nouveaux films toutes les semaines!
            </h3>
          </div>
        </div>

        <button
          className="disconnect  reactivate  "
          style={{ marginTop: "80px" }}
          onClick={()=>{navigate("/login")}}
        >
          Reactiver Votre abonement{" "}
        </button>
      </div>
    </div>
  );
}

export default Welcome;
