import React from 'react';
import Home from './scenes/home/home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt, faEnvelope, faBriefcase, faGraduationCap, faMedal, faGlobeAmericas, faUser, faTools } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
library.add(faPhoneAlt, faEnvelope,faLinkedinIn,faBriefcase, faGraduationCap, faMedal, faGlobeAmericas, faUser, faTools);

function App() {
  return (
      <Home></Home>
  );
}

export default App;
