import ModuleMenu from "../ModuleMenu/ModuleMenu";
import {CurrentUserContext} from "../../context/CurrentUserContext";
import {useContext, useEffect, useState} from "react";
import {checkProfileFormValidity, checkValidity} from "../Form/FormValidation";
import TextError from "../Error/TextError";
import SuccessActionResult from "../Success/SuccessActionResult";

function Profile({children, onLogout, onHandleChange, successRequest}) {

    const currentUser = useContext(CurrentUserContext);

    const [isChangeFormVisible, setIsChangeFormVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [successMessageVisibility, setSuccessMessageVisibility] = useState(false);
    const [errorMessageVisibility, setErrorMessageVisibility] = useState(false);

    const namePattern = '[A-Za-zа-яА-Я\\-\\s]+';
    const emailPattern = '[a-z0-9]+@[a-z]+\\.[a-z]{2,3}';

    useEffect(() => {
        if(currentUser){
            if(name === "" || email === "") {
                setName(currentUser.name)
                setEmail(currentUser.email);
            }
        }
    }, [isChangeFormVisible]);

    function handleSubmit(e) {
        setSuccessMessageVisibility(false);
        setErrorMessageVisibility(false);
        e.preventDefault();
        if(name !== "" || email !== ""){
            if(name !== currentUser.name || email !== currentUser.email) {
                onHandleChange(name, email);
                if (successRequest) {
                    setSuccessMessageVisibility(true);
                } else setErrorMessageVisibility(true);
            }
        }
        setIsChangeFormVisible(!isChangeFormVisible);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleClick(){
        setSuccessMessageVisibility(false);
    }

    function checkFormValidity(e){
        if(currentUser)
        checkProfileFormValidity(e, currentUser.name, currentUser.email);
    }

    return (
        <section className='profile__container'>
            {children}
            <section className='page-with-form__container'>
                <form className='profile__form' onSubmit={handleSubmit} onChange={checkFormValidity}>
                    <h3 className='form__title profile__form-title'>{`Привет, ${(currentUser) ? currentUser.name : ''}!`}</h3>
                    <div className='profile__form-item has-bottom-border'>
                        <p className='profile__form-item-header'>Имя</p>
                        <input type='text' id='profile-name' name='profile-name-input' pattern={namePattern} value={name}
                               className={(!isChangeFormVisible) ? 'profile__form-input' : 'profile__form-input profile__form-input-active'} placeholder={(currentUser) ? currentUser.name : ''}
                               disabled={!isChangeFormVisible} onChange={handleChangeName} required/>
                    </div>
                    <span className='form__input-error profile-name-input-error'></span>
                    <div className='profile__form-item'>
                        <p className='profile__form-item-header'>E-mail</p>
                        <input type='email' id='profile-email' name='profile-email-input' pattern={emailPattern} value={email}
                               className={(!isChangeFormVisible) ? 'profile__form-input' : 'profile__form-input profile__form-input-active'} placeholder={(currentUser) ? currentUser.email : ''}
                               disabled={!isChangeFormVisible} onChange={handleChangeEmail} required/>
                    </div>
                    <span className='form__input-error profile-email-input-error'></span>
                    <div className='profile__buttons'>
                        <button type='submit' className='profile__button profile__edit-btn' onClick={handleClick}>Редактировать
                        </button>
                        <a className='profile__button profile__sign-out-btn' href='/' onClick={onLogout}>Выйти из
                            аккаунта</a>
                    </div>
                </form>
                <TextError text={'При отпрвке запроса произошла ошибка.'} visibility={errorMessageVisibility}/>
                <SuccessActionResult text={'Данные изменены успешно!'} visibility={successMessageVisibility}/>
            </section>
            <ModuleMenu page='movies'/>
        </section>
    );
}

export default Profile;