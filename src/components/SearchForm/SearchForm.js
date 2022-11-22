import {useEffect, useState} from "react";
import TextError from "../Error/TextError";

function SearchForm({handleValidSearch, handleShortMeter, needToSaveQueryValue, needToSaveShortMovieTumblerState}) {
    const [shortMeterTumbler, setShortMeterTumbler] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState('');
    const [validInputValue, setValidInputValue] = useState(false);
    const [errorVisibility, setErrorVisibility] = useState(false);

    useEffect(() => {
        if(needToSaveQueryValue) {
            if (localStorage.getItem('query') !== null) {
                setSearchInputValue(localStorage.getItem('query'));
            }
        }
        if(needToSaveShortMovieTumblerState){
            if(localStorage.getItem('isshortmeter') !== null){
                setShortMeterTumbler(JSON.parse(localStorage.getItem('isshortmeter')));
            }
        }
    },[]);

    useEffect(() => {
        handleShortMeter(shortMeterTumbler);
    }, [shortMeterTumbler]);

    function onShortMeterTumblerClick(){
        setShortMeterTumbler(!shortMeterTumbler);
    }

    function handleSubmitForm(e){
        e.preventDefault();
        if(searchInputValue === ''){
            setValidInputValue(false);
            setErrorVisibility(true);
        } else {
            setValidInputValue(true);
            setErrorVisibility(false);
            if(needToSaveQueryValue) {
                localStorage.setItem('query', searchInputValue);
            }
            if(needToSaveShortMovieTumblerState){
                localStorage.setItem('isshortmeter', JSON.stringify(shortMeterTumbler));
            }
            handleValidSearch(searchInputValue);
        }
    }

    function handleChangeInputValue(e) {
        setSearchInputValue(e.target.value);
    }

    return (
        <form className='search__container has-bottom-border' onSubmit={handleSubmitForm}>
            <input type='search' placeholder='Фильм' className='search__input' onChange={handleChangeInputValue} value={searchInputValue}/>
            <button className='search__button' type='submit'/>
            <TextError text={'Нужно ввести ключевое слово'} visibility={errorVisibility}/>
            <div className='search__short-meter-tumbler-container'>
                <button type='button' className={(shortMeterTumbler) ? 'search__short-meter-tumbler' : 'search__short-meter-tumbler-active'} onClick={onShortMeterTumblerClick}/>
                <p className='search__short-meter-tumbler-text'>Короткометражки</p>
            </div>
        </form>
    );
}

export default SearchForm;