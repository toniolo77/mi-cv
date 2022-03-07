import React, { useRef } from "react";
import Home from "./scenes/home/home";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhoneAlt,
  faEnvelope,
  faBriefcase,
  faGraduationCap,
  faMedal,
  faGlobeAmericas,
  faUser,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import ReactToPrint from "react-to-print";
library.add(
  faPhoneAlt,
  faEnvelope,
  faLinkedinIn,
  faBriefcase,
  faGraduationCap,
  faMedal,
  faGlobeAmericas,
  faUser,
  faTools
);

function App() {
  const componentRef = useRef();

  return (
    <>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />

      <Home ref={componentRef}></Home>
    </>
  );
}

export default App;
