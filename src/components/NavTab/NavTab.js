import Logo from "../Logo/Logo";

function NavTab ({path, children}){
    return (
        <div className={`navtab__container ${(path === "/") ? 'main__navtab-container' : 'navtab__color-white navtab__authorized-grid'}`}>
            <Logo/>
            {children}
        </div>
    )
}

export default NavTab;