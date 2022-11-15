function SearchForm() {
    return (
        <form className='search__container has-bottom-border'>
            <input type='search' placeholder='Фильм' className='search__input' required/>
            <button className='search__button' type='button'/>
            <div className='search__short-meter-tumbler-container'>
                <button type='button' className='search__short-meter-tumbler'/>
                <p className='search__short-meter-tumbler-text'>Короткометражки</p>
            </div>
        </form>
    );
}

export default SearchForm;