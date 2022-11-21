import Logo from "../Logo/Logo";
import {useState} from "react";
import {checkValidity} from "../Form/FormValidation";
import TextError from "../Error/TextError";

function Login({onHandleSubmit, onErr}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorVisibility, setErrorVisibility] = useState(false);

    const emailPattern = '[a-z0-9]+@[a-z]+\\.[a-z]{2,3}';

    function handleSubmit(e){
        setErrorVisibility(false);
        e.preventDefault();
        onHandleSubmit(password, email);
        if(onErr){
            setErrorVisibility(true);
        }
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    return (
        <section className='page-with-form__container'>
            <form className='form login__form' onSubmit={handleSubmit} onChange={checkValidity}>
                <Logo isDefault={true}/>
                <h3 className='form__title login-form__title'>Рады видеть!</h3>
                <div className='form__content'>
                    <label htmlFor='login-email-input' className='form__label'>E-mail</label>
                    <input type='email' id='login-email' name='login-email-input'
                           className='form__item has-bottom-border' onChange={handleChangeEmail} pattern={emailPattern} required/>
                    <span className='form__input-error login-email-input-error'/>
                    <label htmlFor='login-password-input' className='form__label'>Пароль</label>
                    <input type='password' id='login-password' name='login-password-input'
                           className='form__item has-bottom-border' onChange={handleChangePassword} required/>
                    <span className='form__input-error login-password-input-error'/>
                </div>
                <button type='submit' className='form__submit-btn'>Войти</button>
                <TextError text={'Произошла ошибка. Проверьте данные.'} visibility={errorVisibility}/>
                <p className='form__text-under-form'>Ещё не зарегистрированы?<a href='/sign-up' className='form__text-under-form-link'>Регистрация</a></p>
            </form>
        </section>
    );
}

export default Login;