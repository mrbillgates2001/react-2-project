import React from "react";
import {Header, Footer} from "./components"
import { About_us, Articles, Contacts, Hero, Services } from "./components/Main";

import "./styles/main.scss"

const App = () => {
	return <React.Fragment>
    <Header/>
    <Hero/>
    <About_us/>
    <Services/>
    <Articles/>
    <Contacts/>
    <Footer/>
  </React.Fragment>;
};

export default App;
