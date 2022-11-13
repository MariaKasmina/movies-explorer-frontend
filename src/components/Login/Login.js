import Logo from "../Logo/Logo";

function Login() {
    return (
        <section className='page-with-form__container'>
            <form className='form login__form'>
                <Logo isDefault={true}/>
                <h3 className='form__title login-form__title'>Рады видеть!</h3>
                <div className='form__content'>
                    <label htmlFor='login-email-input' className='form__label'>E-mail</label>
                    <input type='email' id='login-email' name='login-email-input'
                           className='form__item has-bottom-border' required/>
                    <span className='form__input-error'/>
                    <label htmlFor='login-password-input' className='form__label'>Пароль</label>
                    <input type='password' id='login-password' name='login-password-input'
                           className='form__item has-bottom-border' required/>
                    <span className='form__input-error'/>
                </div>
                <button type='submit' className='form__submit-btn'>Войти</button>
                <p className='form__text-under-form'>Ещё не зарегистрированы?<a href='/sign-up' className='form__text-under-form-link'>Регистрация</a></p>
            </form>
        </section>
    );
}

export default Login;