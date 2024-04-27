import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="landing-page">
      <div className="overlap-wrapper-2">
        <div className="overlap-3">
          <div className="frame-112">
            <div className="overlap-group-20">
              <div className="frame-113">
                <div className="text-wrapper-49">Skip to content</div>
              </div>
              <div className="frame-114">
                <div className="frame-115">
                  <div className="auto-layout-36">
                    <div className="frame-116">
                      <div className="auto-layout-37">
                        <div className="text-wrapper-50">Product</div>
                        <img className="frame-117" alt="Frame" src="/img/frame.svg" />
                      </div>
                      <div className="auto-layout-38">
                        <div className="text-wrapper-51">Solutions</div>
                        <img className="frame-117" alt="Frame" src="/img/frame-1-2.svg" />
                      </div>
                      <div className="auto-layout-39">
                        <div className="text-wrapper-51">Open Source</div>
                        <img className="frame-117" alt="Frame" src="/img/image.svg" />
                      </div>
                      <div className="text-wrapper-52">Pricing</div>
                    </div>
                    <div className="frame-118">
                      <div className="frame-119">
                        <div className="frame-120">
                          <div className="text-wrapper-53">Search Registry</div>
                        </div>
                        <img className="frame-121" alt="Frame" src="/img/frame-3-2.svg" />
                      </div>
                      <div className="auto-layout-40">
                        <div className="text-wrapper-54">Sign up</div>
                      </div>
                      <div className="text-wrapper-55">Sign in</div>
                    </div>
                  </div>
                  <img className="image-7" alt="Image" src="/img/image-1.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-122">
            <p className="text-wrapper-56">The Future of Security Powered by Taglio.</p>
            <div className="frame-123">
              <div className="overlap-group-21">
                <div className="frame-124" />
                <div className="frame-125" />
              </div>
            </div>
            <div className="navbar">
              <div className="text-wrapper-57">Collaborative Coding</div>
              <div className="automation-CI-CD">Automation &amp; CI/CD</div>
              <div className="text-wrapper-58">Security</div>
              <div className="text-wrapper-59">Client Apps</div>
              <div className="text-wrapper-60">Project Management</div>
              <div className="text-wrapper-61">Team Administration</div>
              <div className="auto-layout-41">
                <div className="text-wrapper-62">Community</div>
                <div className="rectangle-12" />
              </div>
            </div>
            <Link className="get-started-wrapper" to="/sign-in">
              <div className="get-started"> Get Started</div>
            </Link>
            <div className="frame-126">
              <div className="frame-127">
                <div className="overlap-group-22">
                  <img className="frame-128" alt="Frame" src="/img/frame-4-2.svg" />
                  <div className="frame-129">
                    <div className="frame-130">
                      <div className="element-taglio-LLC-6">© 2024 Taglio® LLC</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-wrapper-63">
            The Taglio Open Source Registry saves time, increases margins, and increase customer satisfaction
          </p>
        </div>
      </div>
    </div>
  );
};
