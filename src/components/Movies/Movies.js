import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import ModuleMenu from "../ModuleMenu/ModuleMenu";
import {useEffect, useState} from "react";
import moviesApi from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
import {moviesFilter, shortMeterFilter} from "../MoviesFilter/MoviesFilter";

function Movies({path, children}) {
    // список всех фильмов
    const [movies, setMovies] = useState([]);
    // список отфильтрованных фильмов - фильмы на отображение на странице
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isPreloaderVisible, setIsPreloaderVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isEmptySearchResult, setIsEmptySearchResult] = useState(true);
    const [isShortMeter, setIsShortMeter] = useState(false);
    const [shortMeterFilms, setShortMeterFilms] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('allMovies') !== null) {
            setMovies(JSON.parse(localStorage.getItem('allMovies')));
        }
        if (localStorage.getItem('collection') !== null) {
            setFilteredMovies(JSON.parse(localStorage.getItem('collection')));
        }
    }, []);

    useEffect(() => {
        // если в localstorage еще нет сохраненной сущности со списком всех фильмов, необходимо сделать такой запрос
        if (!localStorage.getItem('allMovies')) {
            Promise.all([moviesApi.getAllMovies()]).then(([movies]) => {
                setMovies(movies);
                localStorage.setItem('allMovies', JSON.stringify(movies));
            });
        }
    }, []);

    useEffect(() => {
        setFilteredMovies(moviesFilter(movies, searchQuery));
        localStorage.setItem('collection', JSON.stringify(filteredMovies));
        setIsShortMeterToLocalStorage();
        setIsPreloaderVisible(false)
    }, [movies]);

    useEffect(() => {
        setIsPreloaderVisible(true);
        if (localStorage.getItem('query')) {
            setFilteredMovies(moviesFilter((movies.length) ? movies : JSON.parse(localStorage.getItem('allMovies')), localStorage.getItem('query')));
        } else setFilteredMovies(moviesFilter(movies, searchQuery));
        localStorage.setItem('collection', JSON.stringify(filteredMovies));
    }, [searchQuery]);

    useEffect(() => {
        setIsShortMeterToLocalStorage();
    }, [isShortMeter]);

    useEffect(() => {
        setShortMeterFilms(shortMeterFilter((localStorage.getItem('collection') ? JSON.parse(localStorage.getItem('collection')) : filteredMovies)));
        setIsPreloaderVisible(false)
    }, [filteredMovies]);

    /**
     * Функция обработки отправки поискового запроса
     * @param searchQuery передается из child-элемента поисковой строки
     */
    function handleSearch(searchQuery) {
        setIsEmptySearchResult(false);
        setSearchQuery(searchQuery);
        setIsPreloaderVisible(true);
        setFilteredMovies(moviesFilter(movies, searchQuery)); // фильтруем фильмы по запросу
        localStorage.setItem('collection', JSON.stringify(filteredMovies));
        if (isShortMeter) {
            setShortMeterFilms(shortMeterFilter(filteredMovies));
            localStorage.setItem('shortmovies', JSON.stringify(shortMeterFilms));
        }
    }

    function setIsShortMeterToLocalStorage() {
        localStorage.setItem('isshortmeter', isShortMeter.toString());
    }


    function shortMeterHandle(state) {
        setIsShortMeter(state);
    }

    return (
        <div className='movies__container'>
            {children}
            <div className='movies__content'>
                <SearchForm
                    handleValidSearch={handleSearch}
                    handleShortMeter={shortMeterHandle}
                    needToSaveQueryValue={true}
                    needToSaveShortMovieTumblerState={true}
                />
                {
                    isPreloaderVisible ?
                        <Preloader
                            isVisible={isPreloaderVisible}
                        /> :
                        <MoviesCardList
                            movies={isShortMeter ? shortMeterFilms : (localStorage.getItem('collection') ? JSON.parse(localStorage.getItem('collection')) : filteredMovies)}
                            emptyResult={((!filteredMovies.length && !shortMeterFilms.length) && !isEmptySearchResult && !isPreloaderVisible)}
                            isShortMeter={isShortMeter}
                        />
                }
            </div>
            <Footer/>
            <ModuleMenu page={path}/>
        </div>
    );
}

export default Movies;