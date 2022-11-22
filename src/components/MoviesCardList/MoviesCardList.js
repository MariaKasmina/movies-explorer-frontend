import MoviesCard from "../MoviesCard/MoviesCard";

import {useEffect, useState} from "react";
import {removeMovieFromSavedMovies} from "../../utils/MainApi";
import {constants} from "../../constants";

function MoviesCardList({movies, emptyResult, onRemoveMovies}) {
    const [windowSize, setWindowSize] = useState(document.documentElement.clientWidth);
    const [visibleCards, setVisibleCards] = useState(movies);
    const [moreButtonVisibility, setMoreButtonVisibility] = useState(false);

    useEffect(() => {
        setWindowSize(document.documentElement.clientWidth);
        windowWidthHandler();
    }, [movies]);

    useEffect(() => {
        const handleResizeWindow = () => setWindowSize(document.documentElement.clientWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        windowWidthHandler();
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, [windowSize]);


    function windowWidthHandler() {
        let cards = [];
        if (windowSize >= 1280) {
            cards = movies.slice(0, constants.MOVIES_ON_PAGE_COUNT.WIDE);

            if (cards.length < movies.length) {
                setMoreButtonVisibility(true);
            } else setMoreButtonVisibility(false);

            setVisibleCards(cards);
        } else if (windowSize <= 1279 || windowSize >= 768) {
            cards = movies.slice(0, constants.MOVIES_ON_PAGE_COUNT.MID);

            if (cards.length < movies.length) {
                setMoreButtonVisibility(true);
            } else setMoreButtonVisibility(false);

            setVisibleCards(cards);
        } else if (windowSize >= 770 || windowSize >= 320) {
            cards = movies.slice(0, constants.MOVIES_ON_PAGE_COUNT.SMALL);

            if (cards.length < movies.length) {
                setMoreButtonVisibility(true);
            } else setMoreButtonVisibility(false);

            setVisibleCards(cards);
        }
    }

    function handleMoreButtonClick() {
        // когда нажали, должны в зависимости от текущей ширины экрана показать 3 или 2 новых карточки
        // когда длины массивов cards и movies сравняются или разница их блин будет <= шагу на текущей ширине экрана, кнопку необходимо убрать
        if (windowSize >= 1280) {
            setVisibleCards(movies.slice(0, (visibleCards.length + constants.MORE_MOVIE_ON_PAGE_COUNT.WIDE)))
            if (movies.length - visibleCards.length <= constants.MORE_MOVIE_ON_PAGE_COUNT.WIDE) {
                setMoreButtonVisibility(false);
            }
        } else if (windowSize <= 1279 || windowSize >= 768) {
            setVisibleCards(movies.slice(0, (visibleCards.length + constants.MORE_MOVIE_ON_PAGE_COUNT.MID)))
            if (movies.length - visibleCards.length <= constants.MORE_MOVIE_ON_PAGE_COUNT.MID) {
                setMoreButtonVisibility(false);
            }
        } else if (windowSize >= 770 || windowSize >= 320) {
            setVisibleCards(movies.slice(0, (visibleCards.length + constants.MORE_MOVIE_ON_PAGE_COUNT.SMALL)))
            if (movies.length - visibleCards.length <= constants.MORE_MOVIE_ON_PAGE_COUNT.SMALL) {
                setMoreButtonVisibility(false);
            }
        }
    }

    function onCrossClick(movie){
        removeMovieFromSavedMovies(movie._id).then(() => {
            onRemoveMovies(movies.filter((item) => item._id !== movie._id))
        })
    }



    return (
        <>
            <section className='movies-card-list__container'>
                {(emptyResult) ? (<p className="error__text-error">Ничего не найдено</p>) : (
                    visibleCards.map((movie) => {
                        // уходит на страницу Фильмы
                        if (movie.image.url) {
                            return (
                                <MoviesCard
                                    movie={movie}
                                    image={!(movie.image.url.includes('https://api.nomoreparties.co/')) ? `https://api.nomoreparties.co/${movie.image.url}` : movie.image.url}
                                    key={movie.id}
                                    onSavedPage={false}
                                    onClossBtnClick={onCrossClick}
                                />
                            );
                        }
                        // уходит на страницу Сохраненные фильмы
                        if (movie.image) {
                            return (
                                <MoviesCard
                                    movie={movie}
                                    image={!(movie.image.includes('https://api.nomoreparties.co/')) ? `https://api.nomoreparties.co/${movie.image}` : movie.image}
                                    key={movie._id}
                                    onSavedPage={true}
                                    onClossBtnClick={onCrossClick}
                                />
                            );
                        }
                    })
                )}
            </section>
            <div
                className={(moreButtonVisibility) ? 'more-button__container' : 'more-button__container non_visible'}>
                <button type='button' className='movies-card-list__more-btn' onClick={handleMoreButtonClick}>Ещё
                </button>
            </div>
        </>

    );

}

export default MoviesCardList;