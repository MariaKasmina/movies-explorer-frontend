import logo from "../../images/logo.svg";

function Logo({isDefault = false}) {
    return (
        <a href='/'>
            <img className={isDefault ? 'logo' : 'navtab__logo'} src={logo} alt='logo'/>
        </a>
    );
}

export default Logo;