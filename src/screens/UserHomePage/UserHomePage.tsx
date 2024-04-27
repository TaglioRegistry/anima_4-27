import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const UserHomePage = (): JSX.Element => {
  return (
    <div className="user-home-page">
      <div className="div-3">
        <div className="frame-21">
          <div className="frame-22">
            <div className="overlap-group-6">
              <div className="frame-23">
                <div className="auto-layout-5">
                  <input className="input" />
                  <img className="frame-24" alt="Frame" src="/img/frame-2.svg" />
                </div>
                <div className="auto-layout-6">
                  <Link to="/card-request-page">
                    <img className="auto-layout-7" alt="Auto layout" src="/img/auto-layout-horizontal-1.svg" />
                  </Link>
                  <img className="auto-layout-8" alt="Auto layout" src="/img/auto-layout-horizontal-2.svg" />
                </div>
              </div>
              <img className="frame-25" alt="Frame" src="/img/frame-9.svg" />
              <img className="image-3" alt="Image" src="/img/image-1.png" />
            </div>
            <Link to="/user-profile">
              <img className="frame-26" alt="Frame" src="/img/frame-10.svg" />
            </Link>
          </div>
        </div>
        <div className="frame-27">
          <div className="frame-28">
            <div className="rectangle-3" />
            <div className="text-wrapper-9">Organizations</div>
            <img className="frame-29" alt="Frame" src="/img/frame-3.svg" />
          </div>
          <div className="frame-30">
            <div className="rectangle-3" />
            <div className="text-wrapper-9">Show more...</div>
          </div>
          <div className="frame-31">
            <img className="frame-32" alt="Frame" src="/img/frame-4-3.svg" />
            <div className="auto-layout-9">
              <div className="text-wrapper-10">0</div>
            </div>
            <Link className="text-wrapper-11" to="/organization-page">
              Organization 1
            </Link>
          </div>
          <div className="frame-33">
            <img className="frame-32" alt="Frame" src="/img/frame-4-3.svg" />
            <div className="auto-layout-9">
              <div className="text-wrapper-10">0</div>
            </div>
            <div className="text-wrapper-12">Organization 2</div>
          </div>
          <div className="frame-34">
            <div className="overlap-group-7">
              <div className="frame-35">
                <div className="rectangle-4" />
              </div>
              <img className="frame-32" alt="Frame" src="/img/frame-3.svg" />
              <div className="text-wrapper-9">Settings</div>
            </div>
          </div>
          <div className="auto-layout-10">
            <div className="text-wrapper-13">Search</div>
            <img className="frame-36" alt="Frame" src="/img/frame-16.svg" />
          </div>
        </div>
        <div className="frame-37">
          <div className="text-wrapper-14">Welcome GW,</div>
          <div className="frame-38">
            <p className="p">View your organizations and card formats</p>
            <div className="frame-39">
              <div className="overlap-group-8">
                <div className="auto-layout-vertical-wrapper">
                  <div className="auto-layout-vertical">
                    <div className="text-wrapper-15">Card Instance 1</div>
                    <div className="auto-layout-11">
                      <div className="text-wrapper-16">Description</div>
                    </div>
                  </div>
                </div>
                <img className="vector" alt="Vector" src="/img/vector.svg" />
              </div>
              <div className="text-wrapper-17">Organization 1</div>
              <div className="auto-layout-12">
                <div className="text-wrapper-18">Public</div>
              </div>
              <div className="rectangle-5" />
            </div>
            <div className="frame-39">
              <div className="overlap-group-8">
                <div className="auto-layout-vertical-wrapper">
                  <div className="auto-layout-vertical">
                    <div className="text-wrapper-15">Card Instance 2</div>
                    <div className="auto-layout-11">
                      <div className="text-wrapper-16">Description</div>
                    </div>
                  </div>
                </div>
                <img className="frame-40" alt="Frame" src="/img/frame-17.svg" />
              </div>
              <div className="text-wrapper-17">Organization 1</div>
              <div className="auto-layout-12">
                <div className="text-wrapper-18">Public</div>
              </div>
              <div className="rectangle-5" />
            </div>
          </div>
        </div>
        <div className="frame-41">
          <div className="frame-42">
            <div className="overlap-group-9">
              <div className="element-taglio-LLC-3">© 2024 Taglio® LLC</div>
              <div className="element-taglio-LLC-3">© 2024 Taglio® LLC</div>
            </div>
            <Link className="text-wrapper-19" to="/help-page">
              User Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
