import React from "react";
import { Link } from "react-router-dom";
import { RedButton } from "../../components/RedButton";
import "./style.css";

export const OrganizationPage = (): JSX.Element => {
  return (
    <div className="organization-page">
      <div className="div-4">
        <div className="frame-43">
          <div className="frame-44">
            <div className="overlap-group-10">
              <div className="frame-45">
                <div className="auto-layout-13">
                  <input className="search-2" />
                  <img className="frame-46" alt="Frame" src="/img/frame-2.svg" />
                </div>
                <div className="auto-layout-14">
                  <Link to="/card-request-page">
                    <img className="auto-layout-15" alt="Auto layout" src="/img/auto-layout-horizontal-3.svg" />
                  </Link>
                  <img className="auto-layout-16" alt="Auto layout" src="/img/auto-layout-horizontal-2.svg" />
                </div>
              </div>
              <img className="frame-47" alt="Frame" src="/img/frame-9.svg" />
              <Link to="/user-home-page">
                <img className="image-4" alt="Image" src="/img/image-1.png" />
              </Link>
            </div>
            <Link to="/user-profile">
              <img className="frame-48" alt="Frame" src="/img/frame-23.svg" />
            </Link>
          </div>
        </div>
        <div className="frame-49">
          <div className="frame-50">
            <div className="rectangle-6" />
            <div className="text-wrapper-20">Organizations</div>
            <img className="frame-51" alt="Frame" src="/img/frame-3.svg" />
          </div>
          <div className="frame-52">
            <div className="rectangle-6" />
            <div className="text-wrapper-20">Show more...</div>
          </div>
          <div className="frame-53">
            <img className="frame-54" alt="Frame" src="/img/frame-4-3.svg" />
            <div className="auto-layout-17">
              <div className="text-wrapper-21">0</div>
            </div>
            <div className="text-wrapper-22">Organization 1</div>
          </div>
          <div className="frame-55">
            <img className="frame-54" alt="Frame" src="/img/frame-4-3.svg" />
            <div className="auto-layout-17">
              <div className="text-wrapper-21">0</div>
            </div>
            <div className="text-wrapper-22">Organization 2</div>
          </div>
          <div className="frame-56">
            <div className="overlap-group-11">
              <div className="frame-57">
                <div className="rectangle-7" />
              </div>
              <img className="frame-54" alt="Frame" src="/img/frame-3.svg" />
              <div className="text-wrapper-20">Settings</div>
            </div>
          </div>
          <div className="auto-layout-18">
            <div className="text-wrapper-23">Search</div>
            <img className="frame-58" alt="Frame" src="/img/frame-25.svg" />
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="frame-59">
              <p className="text-wrapper-24">View your organizations and card formats</p>
              <img className="frame-60" alt="Frame" src="/img/frame-26.svg" />
              <div className="frame-61">
                <div className="overlap-group-12">
                  <div className="auto-layout-19">
                    <div className="auto-layout-vertical-2">
                      <div className="text-wrapper-25">Card Instance 2</div>
                      <div className="auto-layout-20">
                        <div className="text-wrapper-26">Description</div>
                      </div>
                    </div>
                  </div>
                  <img className="vector-2" alt="Vector" src="/img/vector-1.svg" />
                </div>
                <div className="auto-layout-21">
                  <div className="text-wrapper-27">Edit</div>
                </div>
                <div className="auto-layout-22">
                  <div className="text-wrapper-28">Public</div>
                </div>
              </div>
              <div className="frame-62">
                <div className="overlap-group-12">
                  <div className="auto-layout-19">
                    <div className="auto-layout-vertical-2">
                      <div className="text-wrapper-25">Card Instance 3</div>
                      <div className="auto-layout-20">
                        <div className="text-wrapper-26">Description</div>
                      </div>
                    </div>
                  </div>
                  <img className="vector-2" alt="Vector" src="/img/vector-1.svg" />
                </div>
                <RedButton className="red-button-instance" />
                <div className="auto-layout-22">
                  <div className="text-wrapper-28">Public</div>
                </div>
              </div>
              <div className="frame-63">
                <div className="overlap-group-12">
                  <div className="auto-layout-19">
                    <div className="auto-layout-vertical-2">
                      <div className="text-wrapper-25">Card Instance 1</div>
                      <div className="auto-layout-20">
                        <div className="text-wrapper-26">Description</div>
                      </div>
                    </div>
                  </div>
                  <img className="vector-2" alt="Vector" src="/img/vector-1.svg" />
                </div>
                <div className="auto-layout-21">
                  <div className="text-wrapper-27">Edit</div>
                </div>
                <div className="auto-layout-22">
                  <div className="text-wrapper-28">Public</div>
                </div>
              </div>
              <div className="frame-64">
                <div className="frame-65">
                  <div className="overlap-group-13">
                    <div className="element-taglio-LLC-4">© 2024 Taglio® LLC</div>
                    <div className="element-taglio-LLC-4">© 2024 Taglio® LLC</div>
                  </div>
                  <Link className="text-wrapper-29" to="/help-page">
                    User Help
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-wrapper-30">Organization 1</div>
          </div>
        </div>
      </div>
    </div>
  );
};
