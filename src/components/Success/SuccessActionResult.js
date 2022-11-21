function SuccessActionResult({text, visibility}){
    return (
        <span className={(visibility) ? 'success-action__text' : 'success-action_text non_visible'}>{text}</span>
    );
}

export default SuccessActionResult;