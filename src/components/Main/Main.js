import NavTab from "../NavTab/NavTab";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";
import AuthActionsButtons from "../AuthActionsButtons/AuthActionsButtons";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import ModuleMenu from "../ModuleMenu/ModuleMenu";

function Main() {
    return (
        <div className='landing'>
            <Header>
                {
                    localStorage.getItem('token') ?
                        <NavTab path="/">
                            <Navigation/>
                        </NavTab>
                        :
                        <NavTab path="/">
                            <AuthActionsButtons/>
                        </NavTab>
                }
                <Promo/>
            </Header>
            <main className='main'>
                <AboutProject/>
                <Techs/>
                <AboutMe/>
                <Portfolio/>
                <ModuleMenu page={'/'}/>
            </main>
            <Footer/>
        </div>

    );
}

export default Main;