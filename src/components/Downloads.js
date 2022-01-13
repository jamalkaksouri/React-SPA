// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  useMobileOrientation,
} from "react-device-detect";
import * as rdd from "react-device-detect";

const Downloads = () => {
  // var navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/");
  // }, [navigate]);

  const { isLandscape } = useMobileOrientation();

  return (
    <>
      <BrowserView className="browserView">
        <h1>This is rendered only in browser</h1>
      </BrowserView>
      <MobileView>
        <h1>This is rendered only on mobile</h1>
      </MobileView>
      <h1>{isMobile ? "from mobile" : "from browser"}</h1>
      <h1>{rdd.isIOS ? "from apple" : "from ..."}</h1>
      <h1>{rdd.isChrome ? "from chrome" : "from firefox"}</h1>
      <h1>{rdd.isIE ? "from IE" : "from Edge"}</h1>
      <h4>{`OS_name: ${rdd.osName} OS_version: ${rdd.osVersion} engineName: ${rdd.engineName}`}</h4>
      <h4>{rdd.getUA}</h4>
      <h4>
        {rdd.mobileModel} : {rdd.mobileVendor}
      </h4>
      <h3>
        {isLandscape && rdd.isMobileOnly
          ? (document.querySelector("body").style.backgroundColor = "red")
          : (document.querySelector("body").style.backgroundColor =
              "transparent")}
      </h3>
      <h2>This is dashboard</h2>
      <button>Go to home page</button>
    </>
  );
};

export default Downloads;
