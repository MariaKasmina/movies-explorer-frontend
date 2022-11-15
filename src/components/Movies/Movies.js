import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import ModuleMenu from "../ModuleMenu/ModuleMenu";

function Movies({children}) {
    return (
        <div className='movies__container'>
            {children}
            <div className='movies__content'>
                <SearchForm/>
                <MoviesCardList/>
                <div className='more-button__container'>
                    <button type='button' className='movies-card-list__more-btn'>Ещё</button>
                </div>
            </div>
            <Footer/>
            <ModuleMenu page='movies'/>
        </div>
    );
}

export default Movies;