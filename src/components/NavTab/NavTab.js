import Logo from "../Logo/Logo";

function NavTab ({path, children}){
    if(localStorage.getItem('token')){
        return (
            <div className={`navtab__container navtab__authorized-grid ${(path !== "/") ? 'navtab__color-white' : 'navtab__color-blue'}`}>
                <Logo/>
                {children}
            </div>
        );
    } else {
        return (
            <div className={`navtab__container ${(path === "/") ? 'main__navtab-container' : 'navtab__color-white navtab__authorized-grid'}`}>
                <Logo/>
                {children}
            </div>
        )
    }
}

export default NavTab;