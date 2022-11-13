function MoviesCard({image, name, time, isLiked, isSaved}) {
    return (
        <figure className="card">
            <img className="card__image" src={image} alt="фильм"/>
            <figcaption className="card__caption">
                <h3 className="card__caption-text">{name}</h3>
                {(!isSaved) ? <button type="button" className={isLiked ? 'card__heart' : 'unliked__heart'}/> : <button type="button" className='card__cross'/>}
                <p className='card__time'>{time}</p>
            </figcaption>
        </figure>
    );
}

export default MoviesCard;