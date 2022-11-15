import MoviesCard from "../MoviesCard/MoviesCard";

import image1 from '../../images/film_1.png'
import image2 from '../../images/film_2.png'

function MoviesCardList({isInSavedMovies}) {
    if (!isInSavedMovies) {
    return (
        <section className='movies-card-list__container'>
            <MoviesCard image={image1} name='33 слова о дизайне' time='1ч 47м' isLiked={true}/>
            <MoviesCard image={image2} name='Киноальманах «100 лет дизайна»' time='1ч 3м'/>
            <MoviesCard image={image1} name='33 слова о дизайне' time='1ч 47м'/>

            <MoviesCard image={image2} name='Киноальманах «100 лет дизайна»' time='1ч 3м'/>
            <MoviesCard image={image1} name='33 слова о дизайне' time='1ч 47м' isLiked={true}/>
            <MoviesCard image={image1} name='33 слова о дизайне' time='1ч 47м'/>

            <MoviesCard image={image1} name='33 слова о дизайне' time='1ч 47м' isLiked={true}/>
            <MoviesCard image={image1} name='33 слова о дизайне' time='1ч 47м'/>
            <MoviesCard image={image1} name='33 слова о дизайне' time='1ч 47м'/>

            <MoviesCard image={image2} name='Киноальманах «100 лет дизайна»' time='1ч 3м'/>
            <MoviesCard image={image1} name='33 слова о дизайне' time='1ч 47м'/>
            <MoviesCard image={image1} name='33 слова о дизайне' time='1ч 47м' isLiked={true}/>
        </section>
    ); } else {
        return (
            <section className='movies-card-list__container saved-movies__container'>
                <MoviesCard image={image1} name='33 слова о дизайне' time='1ч 47м' isSaved={true}/>
                <MoviesCard image={image2} name='Киноальманах «100 лет дизайна»' time='1ч 3м' isSaved={true}/>
                <MoviesCard image={image1} name='33 слова о дизайне' time='1ч 47м' isSaved={true}/>
            </section>
        );
    }
}

export default MoviesCardList;