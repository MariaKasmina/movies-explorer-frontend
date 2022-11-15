import ModuleMenu from "../ModuleMenu/ModuleMenu";

function Profile({children}) {
    return(
        <section className='profile__container'>
            {children}
            <section className='page-with-form__container'>
                <form className='profile__form'>
                    <h3 className='form__title profile__form-title'>Привет, Виталий!</h3>
                    <div className='profile__form-item has-bottom-border'>
                        <p className='profile__form-item-header'>Имя</p>
                        <p className='profile__form-item-text'>Виталий</p>
                    </div>
                    <div className='profile__form-item'>
                        <p className='profile__form-item-header'>E-mail</p>
                        <p className='profile__form-item-text'>pochta@yandex.ru</p>
                    </div>
                </form>
            </section>
            <div className='profile__buttons'>
                <button type='button' className='profile__button profile__edit-btn'>Редактировать</button>
                <a className='profile__button profile__sign-out-btn' href='/'>Выйти из аккаунта</a>
            </div>
            <ModuleMenu page='movies'/>
        </section>
    );
}

export default Profile;