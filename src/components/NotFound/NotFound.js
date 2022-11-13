function NotFound(){
    return(
      <section className='not-found__container'>
          <div className='not-found__content'>
              <p className='not-found__code'>404</p>
              <span className='not-found__message'>Страница не найдена</span>
          </div>
          <a href='/' className='not-found__return-btn-link'>Назад</a>
      </section>
    );
}

export default NotFound;