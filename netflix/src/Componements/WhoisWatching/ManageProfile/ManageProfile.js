import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ManageProfile.css";
import plusIcon from "../../../assets/images/icons8-plus-30.svg";
import avatarLogo2 from "../../../assets/images/netflix-avatar.png";

function ManageProfile() {
  const navigate = useNavigate();

  const avatarLogo1 =
    "http://occ-0-107-987.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229";

  const avatarLogo3 =
    "http://occ-0-107-987.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTqCB8uh6vUUpjPnmHk3iGyky27lLiL16NEFLBfZ4Kdaf9n0lOJFHM72muckX62W7XgI7MGhWwu9ki-vHV_hUJ2odJOr1CN1A_JI.png?r=962";

  const avatarLogo4 =
    "http://occ-0-107-987.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdi6oYb6DJb1LndQWckgaXvrqqP3QURNa8Xngiq7wwFwDtWIg1otEuYKVxbYwS9c5clAI1_Bn7DuljwcvhfUzQu2_Y2v9y5P6t_n.png?r=e6e";

  const defaultLogo =
    "https://occ-0-990-114.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbV2URr-qEYOrESG0qnP2787XsIxWTMBh7QfJwyqYxMAVFNyiXAqFeu16gI8yTxg3kLwF2mUDKmZGfwBEDd7722xskhYwAMwsBBe.png?r=bd7";
  const [isAdd, SetIsAdd] = useState(true);

  const [manageActive, setManageActive] = useState(true);

  const [isModify, setModify] = useState(true);

  return (
    <div className="watcher_container">
      <div className="modify_effect"></div>

      {isModify ? (
        <div className="watcher_content">
          <h1>Who is watching?</h1>

          <div className="img_container">
            <div
              className="image_elemnts image_elemnts_opacity"
              onClick={() => {
                setModify(false);
              }}
            >
              <div class="svg-edit-overlay" bis_skin_checked="1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="svg-icon svg-icon-edit"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <img src={avatarLogo1}></img>

              <span>Mad</span>
            </div>

            <div className="image_elemnts image_elemnts_opacity">
              <div class="svg-edit-overlay" bis_skin_checked="1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="svg-icon svg-icon-edit"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <img src={avatarLogo2}></img>
              <span>Ashly</span>
            </div>

            <div className="image_elemnts image_elemnts_opacity">
              <div class="svg-edit-overlay" bis_skin_checked="1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="svg-icon svg-icon-edit"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <img src={avatarLogo3}></img>
              <span>Betty</span>
            </div>

            <div className="image_elemnts image_elemnts_opacity">
              <div class="svg-edit-overlay" bis_skin_checked="1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="svg-icon svg-icon-edit"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>

              <img src={avatarLogo4}></img>
              <span>Doua</span>
            </div>

            <div
              className="image_elemnts image_elemnts_opacity"
              onClick={() => {
                SetIsAdd(false);
              }}
            >
              <img src={plusIcon} className={"addProfile"}></img>

              <span>Add a Profile</span>
            </div>
          </div>

          <button
            className="confirm_button"
            onClick={() => {
              navigate("/browse");
            }}
          >
            Confirme
          </button>
        </div>
      ) : (
        <div className="modify_content">
          <h1>Modify profile</h1>
          <div className="grid_layout">
            <div className="first_section">
              <img src={avatarLogo4} className="image_modify"></img>
            </div>

            <div className="secound_section">
              <div className="body_modify_elemnts">
                <input
                  type={"text"}
                  className="modify_input"
                  placeholder="Name"
                ></input>
                <h2> Language : </h2>
                <div className="label">
                  <div className="select">
                    <span className="arrow"></span>
                  </div>
                </div>

                <h2> Pseaudo game : </h2>
                <p>
                  Your nickname is a unique name that is used to play with other
                  Netflix members across all Netflix games.
                </p>

                <input
                  type={"text"}
                  className="modify_input_bottom"
                  placeholder="Create your games nickname"
                ></input>
              </div>

              <div className="body_modify_elemnts" style={{padding: "20px 0px"}} >
                <h2> Maturity Settings : </h2>
                <div className="label">
                  <div className="matority_settings">
                    <h3>All classes</h3>
                  </div>
                </div>

                <p>This profile displays titles of maturity classes</p>

                <button
                  className="modify_button"
                  onClick={() => {
                    navigate("/ManageProfiles");
                  }}
                >
                  Modify
                </button>
              </div>

              <h2 className="autoPlay" > Auto play control : </h2>
  
 <span class="mcheck iconCheck">
  <input type="checkbox" name="test" id="test" />
  <label for="test"></label>
  <p>Lecture automatique de l'épisode suivant d'une série sur tous les appareils.</p> 
</span>

<br></br>
  
<span class="mcheck iconCheckHeavy">
  <input type="checkbox" name="iconCheckHeavy" id="iconCheckHeavy" />
  <label for="iconCheckHeavy"></label>
 <p>Lecture automatique de l'épisode suivant d'une série sur tous les appareils.</p> 
</span>

            </div>

          </div>
            <div className="add_buttons  buttons_modify ">
              <button className="confirm" type="submit">
                Continue
              </button>

              <button className="cancel">Cancel</button>
            </div>
        </div>
      )}
    </div>
  );
}

export default ManageProfile;
