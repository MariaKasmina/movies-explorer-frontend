import logo from '../../images/promo-logo.svg'

function Promo(){
    return (
        <div className='promo__container'>
            <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
            <img className='promo__image' src={logo} alt='круги'/>
        </div>
    )
}

export default Promo;