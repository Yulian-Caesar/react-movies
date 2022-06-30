import React, { useState } from "react";
import Header from './components/Header/index';
import Main from "./components/Main/index";
import Footer from './components/Footer/index';
import { MovieDetailsProvider } from './components/MovieDetails/MovieDetailsContext';

const App = () => {
    const [ isPopupOpen, setIsPopupOpen] = useState(false);
    return (
        <MovieDetailsProvider>
            <Header isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />    
            <Main />
            <Footer />
        </MovieDetailsProvider>
    );
}

export default App;