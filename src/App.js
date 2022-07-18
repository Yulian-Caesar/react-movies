import React, { useState } from 'react';
import Header from './components/Header/index';
import Main from './components/Main/index';
import Footer from './components/Footer/index';
import { MovieDetailsProvider } from './components/MovieDetails/MovieDetailsContext';

const App = () => {

    return (
        <MovieDetailsProvider>
            <Header />    
            <Main />
            <Footer />
        </MovieDetailsProvider>
    );
}

export default App;