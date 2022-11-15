import Logo from "../Logo/Logo";

function Register() {
    return (
        <section className='page-with-form__container'>
            <form className='form register__form login__form'>
                <Logo isDefault={true}/>
                <h3 className='form__title login-form__title'>Добро пожаловать!</h3>
                <div className='form__content register-form__content'>
                    <label htmlFor='register-name-input' className='form__label'>Имя</label>
                    <input type='text' id='register-name' name='register-name-input'
                           className='form__item has-bottom-border' required/>
                    <span className='form__input-error'/>
                    <label htmlFor='register-email-input' className='form__label'>E-mail</label>
                    <input type='email' id='register-email' name='register-email-input'
                           className='form__item has-bottom-border' required/>
                    <span className='form__input-error'/>
                    <label htmlFor='register-password-input' className='form__label'>Пароль</label>
                    <input type='password' id='register-password' name='register-password-input'
                           className='form__item has-bottom-border' required/>
                    <span className='form__input-error'/>
                </div>
                <button type='submit' className='form__submit-btn'>Зарегистрироваться</button>
                <p className='form__text-under-form'>Уже зарегистрированы?<a href='/sign-in' className='form__text-under-form-link'>Войти</a></p>
            </form>
        </section>
    );
}

export default Register;