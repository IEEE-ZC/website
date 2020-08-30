import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage'
import AboutPage from './Components/Pages/About/AboutPage'
import Navbar from './Components/Layout/Navbar'
function App() {
  const NavbarProps = {
    NavItems: [
      { id: 1, name: "Home", href: "home" },
      { id: 2, name: "Events", href: "events" },
      { id: 3, name: "Achievements", href: "achievements" },
      { id: 4, name: "About", href: "about" },
      { id: 5, name: "Magazine", href: "magazine" },
      { id: 6, name: "Blog", href: "blog" },

    ],
    PageLink: "/",
    isSearchable: false,
    socialLinks: true,
    Static: true,

    socialAccounts: [
      { website: "fab fa-facebook", href: "https://www.facebook.com/IEEEZC/" },
      { website: "fab fa-twitter", href: "https://twitter.com/IEEEZC" },
      { website: "fas fa-envelope", href: "https://gmail.com/ieee@zewailcity.edu.eg" },
    ],
    LogoBrand: "./IEEE_Logo.png"


  }
  return (
    <Router>
      <Navbar NavbarProps={NavbarProps} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </Router>
  );
}

export default App;
