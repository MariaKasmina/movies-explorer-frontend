import {NavLink} from "react-router-dom";

function Navigation(){

    return(
        <section className='navigation__container'>
            <nav className='navigation__links'>
                <NavLink to='/movies' activeClassName={'navigation__link-active'} className={'navigation__link'} >Фильмы</NavLink>
                <NavLink to='/saved-movies' activeClassName={'navigation__link-active'} className={'navigation__link'} >Сохранённые фильмы</NavLink>
            </nav>
            <a href='/profile' className='navigation__account-button'/>
            <a href="#modulemenu" className='navigation__menu-button-link navigation__menu-button'/>
        </section>
    );
}

export default Navigation;