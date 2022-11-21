function TextError({text, visibility}){
    return (
        <span className={(visibility) ? 'error__text-error' : 'error__text-error non_visible'}>{text}</span>
    );
}

export default TextError;