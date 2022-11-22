import {useEffect, useState} from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import ModuleMenu from "../ModuleMenu/ModuleMenu";
import {getSavedMovies} from "../../utils/MainApi";
import {moviesFilter, shortMeterFilter} from "../MoviesFilter/MoviesFilter";

function SavedMovies({path, children}) {

    const [visibleCards, setVisibleCards] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [isShortMeter, setIsShortMeter] = useState(false);
    const [isPreloaderVisible, setIsPreloaderVisible] = useState(false);
    const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
    const [isEmptySearchResult, setIsEmptySearchResult] = useState(true);
    const [shortMeterMovies, setShortMeterMovies] = useState([]);

    useEffect(() => {
        setIsPreloaderVisible(true);
        if(localStorage.getItem('token')){
            getSavedMovies().then((res) => {
                setSavedMovies(res);
                setIsPreloaderVisible(false);
                setShortMeterMovies(shortMeterFilter(savedMovies));
            })
        }
    }, []);

    useEffect(() => {
        setShortMeterMovies(shortMeterFilter(savedMovies));
    }, [isShortMeter]);

    useEffect(() => {
        setVisibleCards(savedMovies);
    }, [savedMovies]);

    useEffect(() => {
        setVisibleCards(filteredSavedMovies);
    }, [filteredSavedMovies])

    /**
     * Функция обработки отправки поискового запроса
     * @param searchQuery передается из child-элемента поисковой строки
     */
    function handleSearch(searchQuery) {
        setFilteredSavedMovies(moviesFilter(savedMovies, searchQuery));
        setVisibleCards(filteredSavedMovies);
        if(!filteredSavedMovies.length) setIsEmptySearchResult(true);
        if (isShortMeter) {
            setShortMeterMovies(shortMeterFilter(filteredSavedMovies));
            setVisibleCards(shortMeterMovies)
            if(!shortMeterMovies.length) setIsEmptySearchResult(true);
        }
    }

    function shortMeterHandle(state) {
        setIsShortMeter(state);
    }

    function handleRemoveMovies(movies){
        setSavedMovies(movies);
    }

    return (
        <div className='movies__container'>
            {children}
            <div className='movies__content'>
                <SearchForm
                    handleValidSearch={handleSearch}
                    handleShortMeter={shortMeterHandle}
                    needToSaveQueryValue={false}
                    needToSaveShortMovieTumblerState={false}
                />
                <MoviesCardList
                    movies={(isShortMeter) ? shortMeterMovies : visibleCards}
                    emptyResult={!visibleCards.length && !isPreloaderVisible && !isEmptySearchResult}
                    onRemoveMovies={handleRemoveMovies}
                />
                <Preloader
                    isVisible={isPreloaderVisible}
                />
            </div>
            <Footer/>
            <ModuleMenu page={path}/>
        </div>
    );
}

export default SavedMovies;