import React, { useState } from "react";

import "./WatcherScreen.css";

import classNames from "classnames";

import plusIcon from "../../assets/images/icons8-plus-30.svg";

import avatarLogo2 from "../../assets/images/netflix-avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function WatcherScreen() {
  const avatarLogo1 =
    "http://occ-0-107-987.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229";

  const avatarLogo3 =
    "http://occ-0-107-987.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTqCB8uh6vUUpjPnmHk3iGyky27lLiL16NEFLBfZ4Kdaf9n0lOJFHM72muckX62W7XgI7MGhWwu9ki-vHV_hUJ2odJOr1CN1A_JI.png?r=962";

  const avatarLogo4 =
    "http://occ-0-107-987.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdi6oYb6DJb1LndQWckgaXvrqqP3QURNa8Xngiq7wwFwDtWIg1otEuYKVxbYwS9c5clAI1_Bn7DuljwcvhfUzQu2_Y2v9y5P6t_n.png?r=e6e";

  const defaultLogo =
    "https://occ-0-990-114.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbV2URr-qEYOrESG0qnP2787XsIxWTMBh7QfJwyqYxMAVFNyiXAqFeu16gI8yTxg3kLwF2mUDKmZGfwBEDd7722xskhYwAMwsBBe.png?r=bd7";
  const [isAdd, SetIsAdd] = useState(true);

  const [manageActive , setManageActive] =useState(true) ; 


const navigate = useNavigate()

  return (
    <div className="watcher_container">
      <div className="watcher--fadeBottom"></div>

      {isAdd ? (
      
        <div className="watcher_content">
    
          <h1>Who is watching?</h1>

          <div className="img_container">
            <div className="image_elemnts">
              <img src={avatarLogo1}></img>
              <span>Mad</span>
            </div>

            <div className="image_elemnts">
              <img src={avatarLogo2}></img>
              <span>Ashly</span>
            </div>

            <div className="image_elemnts">
              <img src={avatarLogo3}></img>
              <span>Betty</span>
            </div>

            <div className="image_elemnts">
              <img src={avatarLogo4}></img>
              <span>Doua</span>
            </div>

            <div
              className="image_elemnts "
              onClick={() => {
                SetIsAdd(false);
              }}
            >
              <img src={plusIcon} className={"addProfile"}></img>

              <span>Add a Profile</span>
            </div>
          </div>

          <button className="manage_button"   onClick={()=>{navigate("/ManageProfiles")}}  >Manage Profiles</button>
        
</div>

      ) : (
        <div
          className={classNames("AddElement", {
            "AddElement-move": !isAdd,
          })}
        >
          <h1>Add a profile</h1>

          <h4>Add a profile for someone watching Netflix.</h4>

          <form>
            <div className="add_element_form">
              <img src={defaultLogo}></img>

              <input type={"text"} className="input" placeholder="Name"></input>

              <div class="form-group">
                <input type="checkbox" id="html" />
                <label for="html">Kid ?</label>
              </div>
            </div>
            <div className="add_buttons">
              <button className="confirm" type="submit">
                Continue
              </button>

              <button className="cancel">Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default WatcherScreen;
