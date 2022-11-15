import arrow from "../../images/arrow.svg";

function Portfolio(){
    return (
        <section className="section_paddings portfolio__section">
            <p className="portfolio-section__title">Портфолио</p>
            <ul className='portfolio__links'>
                <li type='none'>
                    <a className='portfolio__link has-bottom-border' href='https://github.com/MariaKasmina/how-to-learn' target='_blank'>
                        <p className='portfolio-link__text'>Статичный сайт</p>
                        <img className='portfolio-link__arrow' src={arrow}/>
                    </a>
                </li>
                <li type='none'>
                    <a className='portfolio__link has-bottom-border' href='https://mariakasmina.github.io/russian-travel/' target='_blank'>
                        <p className='portfolio-link__text'>Адаптивный сайт</p>
                        <img className='portfolio-link__arrow' src={arrow}/>
                    </a>
                </li>
                <li type='none'>
                    <a className='portfolio__link' href='https://mariakasmina.github.io/mesto/' target='_blank'>
                        <p className='portfolio-link__text'>Одностраничное приложение</p>
                        <img className='portfolio-link__arrow' src={arrow}/>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;