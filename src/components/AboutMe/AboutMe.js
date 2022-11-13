import photo from '../../images/about-me_photo.jpg'

function AboutMe(){
    return(
        <section className="section_paddings about-me__section">
            <p className="about-project__title">Студент</p>
            <div className='techs__content-container about-me__container'>
                <article className='about-me'>
                    <div className='about-me__info'>
                        <h3 className='about-me__name'>Мария</h3>
                        <p className='about-me__description'>Старший специалист по тестированию, 23 года</p>
                        <p className='about-me__content'>Я родилась и живу в городе Воронеж, закончила факультет
                            прикладной математики, информатики и механики ВГУ. Уже 2.5 года занимаюсь автоматизацией тестирования на JavaScript.
                            Прохожу курс Яндекс.Практикума по веб-разработке, чтобы стать разработчиком и создавать интерфейсы.
                        </p>
                        <a className='about-me__link' href='https://github.com/MariaKasmina' target='_blank'>Github</a>
                    </div>
                    <img className='about-me__photo' src={photo} alt='фото студента'/>
                </article>
            </div>
        </section>
    );
}

export default AboutMe;