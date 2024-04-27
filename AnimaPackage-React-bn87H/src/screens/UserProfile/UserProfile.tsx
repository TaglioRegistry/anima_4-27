import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const UserProfile = (): JSX.Element => {
  return (
    <div className="user-profile">
      <div className="div-5">
        <div className="frame-66">
          <div className="frame-67">
            <div className="overlap-group-14">
              <div className="frame-68">
                <div className="auto-layout-23">
                  <div className="text-wrapper-31">Search...</div>
                  <img className="frame-69" alt="Frame" src="/img/frame-2.svg" />
                </div>
                <img className="auto-layout-24" alt="Auto layout" src="/img/auto-layout-horizontal-6.svg" />
              </div>
              <img className="frame-70" alt="Frame" src="/img/frame-9.svg" />
              <Link to="/user-home-page">
                <img className="image-5" alt="Image" src="/img/image-1.png" />
              </Link>
            </div>
            <img className="frame-71" alt="Frame" src="/img/frame-37.svg" />
          </div>
        </div>
        <div className="frame-72">
          <div className="frame-73">
            <div className="rectangle-8" />
            <div className="text-wrapper-32">Organizations</div>
            <img className="frame-74" alt="Frame" src="/img/frame-3.svg" />
          </div>
          <div className="frame-75">
            <div className="rectangle-8" />
            <div className="text-wrapper-32">Show more...</div>
          </div>
          <Link className="frame-76" to="/organization-page">
            <img className="frame-77" alt="Frame" src="/img/frame-4-3.svg" />
            <div className="auto-layout-25">
              <div className="text-wrapper-33">0</div>
            </div>
            <div className="text-wrapper-34">Organization 1</div>
          </Link>
          <div className="frame-78">
            <img className="frame-77" alt="Frame" src="/img/frame-4-3.svg" />
            <div className="auto-layout-25">
              <div className="text-wrapper-33">0</div>
            </div>
            <div className="text-wrapper-34">Organization 2</div>
          </div>
          <div className="frame-79">
            <div className="overlap-group-15">
              <div className="frame-80">
                <div className="rectangle-9" />
              </div>
              <img className="frame-77" alt="Frame" src="/img/frame-3.svg" />
              <div className="text-wrapper-32">Settings</div>
            </div>
          </div>
          <div className="auto-layout-26">
            <div className="text-wrapper-35">Search</div>
            <img className="frame-81" alt="Frame" src="/img/frame-36.svg" />
          </div>
        </div>
        <div className="frame-82">
          <Link className="auto-layout-wrapper" to="/organization-page">
            <div className="auto-layout-27">
              <div className="auto-layout-vertical-3">
                <div className="card-instance">Organization 1</div>
                <div className="auto-layout-28">
                  <div className="text-wrapper-36">Description</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <Link className="frame-83" to="/organization-page">
          <Link className="auto-layout-wrapper" to="/organization-page">
            <div className="auto-layout-27">
              <div className="auto-layout-vertical-3">
                <div className="card-instance">Organization 2</div>
                <div className="auto-layout-28">
                  <div className="text-wrapper-36">Description</div>
                </div>
              </div>
            </div>
          </Link>
        </Link>
        <div className="frame-84">
          <div className="frame-85">
            <div className="frame-86">
              <div className="overlap-group-16">
                <div className="frame-87">
                  <div className="text-wrapper-37">User #1</div>
                </div>
                <div className="text-wrapper-38">username123</div>
              </div>
            </div>
            <div className="frame-88">
              <div className="img-wrapper">
                <img className="auto-layout-29" alt="Auto layout" src="/img/auto-layout-horizontal-5.svg" />
              </div>
            </div>
          </div>
          <div className="auto-layout-vertical-4">
            <div className="auto-layout-30">
              <div className="text-wrapper-39">Biography</div>
            </div>
            <div className="auto-layout-31">
              <div className="text-wrapper-40">Edit profile</div>
            </div>
            <div className="auto-layout-vertical-5">
              <div className="frame-89">
                <img className="frame-90" alt="Frame" src="/img/frame-31.svg" />
                <div className="text-wrapper-41">Company</div>
              </div>
              <div className="frame-89">
                <img className="frame-90" alt="Frame" src="/img/frame-32.svg" />
                <div className="text-wrapper-41">Link</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
