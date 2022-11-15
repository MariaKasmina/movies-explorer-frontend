function ModuleMenu({page}){
    return(
      <div className='module' id='modulemenu'>
          <section className='module-menu__container'>
              <div className='menu__links'>
                  <a className='menu-item-link menu-item' href='/'>Главная</a>
                  <a className={`menu-item-link menu-item ${(page === 'movies') ? 'has-bottom-border-black' : ''}`} href='/movies'>Фильмы</a>
                  <a className={`menu-item-link menu-item ${(page === 'saved-movies') ? 'has-bottom-border-black' : ''}`} href='/saved-movies'>Сохранённые фильмы</a>
              </div>
              <a href='/profile' className='menu-item-link navigation__account-button module-menu__account-button'/>
              <a href='#' className='module-menu__close-button'/>
          </section>
      </div>
    );
}

export default ModuleMenu;