import axios from "../../axios";
import React, { useEffect, useRef, useState } from "react";
import "./Row.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import LazyLoad from "react-lazyload";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const rowScroll = useRef();
  const [slider, setSlider] = useState(0);
  const base_url = "https://www.themoviedb.org/t/p/original/";
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const videRef =useRef()
  useEffect(() => {
    async function fetchData() {
      const request = await axios({
        url: props.fetchUrl,
        params: {
          append_to_response: "videos",
        },
      });

      console.log(request.data);
      setMovies(request.data.results);
      return request;
    }
    if (props.fetchUrl) fetchData();
  }, [props.fetchUrl]);

  const hudleClick = (directions) => {
    if (directions === "right") {
      rowScroll.current.scrollLeft = rowScroll.current.scrollLeft + 500;

      console.log(rowScroll.current.scrollLeft);
    } else {
      rowScroll.current.scrollLeft = rowScroll.current.scrollLeft - 500;
    }
  };



  return (
    <div class="container_">
      <button type="button" id="moveLeft" class="btn-nav">
        ᐊ
      </button>
      <div class="container-indicators">
        <div class="indicator active"></div>
        <div class="indicator"></div>
        <div class="indicator"></div>
      </div>

      <div class="slider" id="mySlider">
        <h2 className="row_title">{props.title}</h2>
        {movies.map(
          (movie) =>
            movie.backdrop_path && (
              <div className="movie" onMouseEnter={event => { setTimeout(() => { event.target.play() }, 2000) }  }  onMouseLeave={event => { setTimeout(() => {  event.target.load() }, 600) } } >
 
                <video   ref={videRef}  className="playVid"  loop muted  poster={`${base_url}${movie.backdrop_path}`}>
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                    type="video/mp4"
                  >
                  </source>
                </video>
                <div class="description_container">
                  <div className="info_container">
                    <div className="col-md-1">
                      <div className="col-first_section">
                        <button className="like">
                          <svg
                            width="20"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>
                        <button>
                          {" "}
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>
                        <button>
                          {" "}
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>
                      </div>

                      <div className="col-second_section">
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#ffffff"
                            version="1.1"
                            id="Layer_1"
                            viewBox="0 0 330 330"
                          >
                            <path
                              id="XMLID_225_"
                              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-2">
                      {" "}
                      <span className="corespond">Like 98%</span>{" "}
                    </div>

                    <div className="col-md-3">
                      <button>18</button>
                      <button>HD</button>
                      <button>1h 32m</button>
                    </div>

                    <div className="col-md-4">
                      <ul className="classes-list">
                        <li>
                          <p>
                            <b style={{ paddingRight: "5px" }}>•</b>Action
                          </p>
                        </li>
                        <li>
                          <p>
                            <b style={{ paddingRight: "3.8px" }}>•</b> Adventure
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            <b style={{ paddingRight: "5px" }}>•</b> Drug
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      <button type="button" id="moveRight" class="btn-nav">
        ᐅ
      </button>
    </div>
  );
}

export default Row;
