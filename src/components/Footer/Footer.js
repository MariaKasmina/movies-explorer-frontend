function Footer(){
    return(
        <footer className='footer__container section_paddings'>
            <p className='footer__sponsored-by has-bottom-border'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__bottom'>
                <p className='footer__bottom-year'>&copy; 2022</p>
                <div className='footer__bottom-links'>
                    <a className='footer__bottom-link' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
                    <a className='footer__bottom-link' href='https://github.com/'>Github</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;