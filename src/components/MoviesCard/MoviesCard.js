import {useContext, useEffect, useState} from "react";
import {addSavedMovie, removeMovieFromSavedMovies} from "../../utils/MainApi";
import {CurrentUserContext} from "../../context/CurrentUserContext";

function MoviesCard({movie, image, onSavedPage, onClossBtnClick}) {

    const [heartState, setHeartState] = useState(false);
    const currentUser = useContext(CurrentUserContext);


    useEffect(() => {
        if (currentUser) {
            setHeartState(currentUser.liked.filter((item) => item.movieId === movie.id).length > 0)
        }
    }, [movie]);


    function parseTime() {
        const hours = Math.floor(Number(movie.duration) / 60);
        const minutes = Number(movie.duration) % 60;

        if (minutes === 0) {
            return `${hours}ч`;
        } else if (hours === 0) {
            return `${minutes}м`;
        } else return `${hours}ч ${minutes}м`;
    }

    function handleHeartClick(state, movie) {
        if (!state) { // нужно добавить
            const reqBody = {
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                description: movie.description,
                movieId: movie.id,
                image: `https://api.nomoreparties.co/${movie.image.url}`,
                nameEN: movie.nameEN,
                nameRU: movie.nameRU,
                trailerLink: movie.trailerLink,
                year: movie.year,
                thumbnail: `https://api.nomoreparties.co/uploads/${movie.image.formats.thumbnail.url}`
            }
            addSavedMovie(reqBody).then(() => {
                setHeartState(true);
            }).catch((res) => console.log(res))
        } else {
            const index = JSON.parse(localStorage.getItem('savedMovies')).filter((item) => item.movieId === movie.id)[0]._id;
            removeMovieFromSavedMovies(index).then(() => {
                setHeartState(false);
            })
        }
    }

    function onHeartClick() {
        handleHeartClick(heartState, movie);
    }

    function onCrossClick(){
        onClossBtnClick(movie);
    }

    return (
        <figure className={"card"}>
            <a href={movie.trailerLink} target={"_blank"}>
            <img className="card__image" src={image} alt="фильм"/>
            </a>
            <figcaption className="card__caption">
                <h3 className="card__caption-text">{movie.nameRU}</h3>
                {(!onSavedPage) ? <button type="button"
                                          className={heartState ? 'card__heart' : 'unliked__heart'} onClick={onHeartClick}
                    /> :
                    <button type="button" className='card__cross' onClick={onCrossClick}/>}
                <p className='card__time'>{parseTime(movie.duration)}</p>
            </figcaption>
        </figure>
    );
}

export default MoviesCard;