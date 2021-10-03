import React, { useState } from "react";
import Header from './components/Header/index';
import Main from "./components/Main/index";
import Footer from './components/Footer/index';

const App = () => {
    const [ isPopupOpen, setIsPopupOpen] = useState(false);
    return (
        <>
            <Header isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
            <Main />
            <Footer />
        </>
    );
}

export default App;