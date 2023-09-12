import React, { useState } from 'react';
import Header from './components/Header/index';
import Main from './components/Main/index';
import Footer from './components/Footer/index';
import { MovieDetailsProvider } from './components/MovieDetails/MovieDetailsContext';
import { MoviesListProvider } from './components/MoviesList/MoviesListContext';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/index';

const App = () => {

    return (
      <MovieDetailsProvider>
        <MoviesListProvider>
          <Router>
            <Header />
            <Routes>
                  <Route exact path='/' element={ <Navigate to="/search" /> }/>
                  <Route path='/search' element={ <Main /> } />
                  <Route path='/search/comedy' element={ <Main /> } />
                  <Route path='/search/documentary' element={ <Main /> } />
                  <Route path='/search/horror' element={ <Main /> } />
                  <Route path='/search/crime' element={ <Main  /> } />
                  <Route path='/search/*' element={ <Main /> }/>
                
            </Routes>

            <Footer /> 
          </Router>
        </MoviesListProvider>
      </MovieDetailsProvider>
    );
}

function Yulik() {
    return (
      <div>
        <h2>Yulik found</h2>
      </div>
    );
  }


export default App;