import React, { Component } from "react";
import Header from './components/Header/index';
import Main from "./components/Main/index";
import Footer from './components/Footer/index';
import { Logo } from "ui";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Main />
                <Footer />
            </>
        );
    }
}

export default App;