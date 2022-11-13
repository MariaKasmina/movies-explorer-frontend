function Navigation(){
    return(
        <section className='navigation__container'>
            <div className='navigation__links'>
                <a className='navigation__link' href='/movies'>Фильмы</a>
                <a className='navigation__link' href='/saved-movies'>Сохранённые фильмы</a>
            </div>
            <a href='/profile' className='navigation__account-button'/>
            <a href="#modulemenu" className='navigation__menu-button-link navigation__menu-button'/>
        </section>
    );
}

export default Navigation;