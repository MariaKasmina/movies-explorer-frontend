import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import ModuleMenu from "../ModuleMenu/ModuleMenu";

function SavedMovies({children}) {
    return(
        <div className='movies__container'>
            {children}
            <div className='movies__content'>
                <SearchForm/>
                <MoviesCardList isInSavedMovies={true}/>
                <div className='more-button__container'>
                    <button type='button' className='movies-card-list__more-btn is-invisible'>Ещё</button>
                </div>
            </div>
            <Footer/>
            <ModuleMenu page='saved-movies'/>
        </div>
    );
}

export default SavedMovies;