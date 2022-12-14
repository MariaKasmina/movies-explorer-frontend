import Logo from "../Logo/Logo";
import {useEffect, useState} from "react";
import {checkValidity} from "../Form/FormValidation";
import TextError from "../Error/TextError";
import {useHistory} from "react-router-dom";

function Register({onHandleSubmit, onErr}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(false);

    const history = useHistory();

    const namePattern = '[A-Za-zа-яА-Я\\-\\s]+';
    const emailPattern = '[a-z0-9]+@[a-z]+\\.[a-z]{2,3}';

    useEffect(() => {
        setIsSubmitBtnDisabled(true);
    }, []);

    function handleSubmit(e){
        setIsSubmitBtnDisabled(true);
        e.preventDefault();
        onHandleSubmit(name, password, email);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }

    if(localStorage.getItem('token')){
        history.push('/profile');
        return(
          <></>
        );
    } else {
        return (
            <section className='page-with-form__container'>
                <form className='form register__form login__form' onSubmit={handleSubmit} onChange={checkValidity}>
                    <Logo isDefault={true}/>
                    <h3 className='form__title login-form__title'>Добро пожаловать!</h3>
                    <div className='form__content register-form__content'>
                        <label htmlFor='register-name-input' className='form__label'>Имя</label>
                        <input type='text' id='register-name' name='register-name-input' pattern={namePattern}
                               className='form__item has-bottom-border' onChange={handleChangeName} required/>
                        <span className='form__input-error register-name-input-error'/>
                        <label htmlFor='register-email-input' className='form__label'>E-mail</label>
                        <input type='email' id='register-email' name='register-email-input' pattern={emailPattern}
                               className='form__item has-bottom-border' onChange={handleChangeEmail} required/>
                        <span className='form__input-error register-email-input-error'/>
                        <label htmlFor='register-password-input' className='form__label'>Пароль</label>
                        <input type='password' id='register-password' name='register-password-input'
                               className='form__item has-bottom-border' onChange={handleChangePassword} required/>
                        <span className='form__input-error register-password-input-error'/>
                    </div>
                    <button type='submit' className='form__submit-btn'
                            disabled={isSubmitBtnDisabled}>Зарегистрироваться
                    </button>
                    <TextError text={'При отправке запроса произошла ошибка.'} visibility={onErr}/>
                    <p className='form__text-under-form'>Уже зарегистрированы?<a href='/sign-in'
                                                                                 className='form__text-under-form-link'>Войти</a>
                    </p>
                </form>
            </section>
        );
    }
}

export default Register;