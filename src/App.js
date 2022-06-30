import React, { useState } from "react";
import Header from './components/Header/index';
import Main from "./components/Main/index";
import Footer from './components/Footer/index';
import { MovieDetailsProvider } from './components/MovieDetails/MovieDetailsContext';

const App = () => {
    const [listInfo, setListInfo] = useState([
        {
            title: "Pulp Fiction",
            description: "Description",
            id: "999",
            genre: "Action & Adventure",
            year: "2004",
            runtime: "2h 34min",
            rating: "7.8"
        },
        {
            title: "Bohemian Rhapsody",
            description: "Description",
            id: "312123",
            genre: "Drama, Biography, Music",
            year: "2003",
            runtime: "2h 34min",
            rating: "7.8"
        },
        {
            title: "Kill Bill: Vol 2",
            description: "Description",
            id: "432",
            genre: "Oscar winning Movie",
            year: "1994",
            runtime: "2h 34min",
            rating: "7.8"
        },
        {
            title: "Avengers: War of Infinity",
            description: "Description",
            id: "5665",
            genre: "Action & Adventure",
            year: "2004",
            runtime: "2h 34min",
            rating: "7.8"
        },
        {
            title: "Inception",
            description: "Description",
            id: "88",
            genre: "Action & Adventure",
            year: "2003",
            runtime: "2h 34min",
            rating: "7.8"
        },
        {
            title: "Reservoir dogs",
            description: "Description",
            id: "34",
            genre: "Oscar winning Movie",
            year: "1994",
            runtime: "2h 34min",
            rating: "7.8"
        }
    ])

    const [ isPopupOpen, setIsPopupOpen] = useState(false);


    return (
        <MovieDetailsProvider>
<<<<<<< home-task-6
            <Header isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />    
            <Main />
=======
            <Header isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
            <Main listInfo={listInfo} />
>>>>>>> master
            <Footer />
        </MovieDetailsProvider>
    );
}

export default App;