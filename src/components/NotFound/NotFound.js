import {useHistory} from "react-router-dom";

function NotFound(){

    const history = useHistory();

    function goToPreviousPage(){
        history.goBack();
    }

    return(
      <section className='not-found__container'>
          <div className='not-found__content'>
              <p className='not-found__code'>404</p>
              <span className='not-found__message'>Страница не найдена</span>
          </div>
          <a className='not-found__return-btn-link' onClick={goToPreviousPage}>Назад</a>
      </section>
    );
}

export default NotFound;