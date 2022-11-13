import NavTab from "../NavTab/NavTab";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";
import AuthActionsButtons from "../AuthActionsButtons/AuthActionsButtons";
import Header from "../Header/Header";

function Main() {
    return (
        <div className='landing'>
            <Header>
                <NavTab path="/">
                    <AuthActionsButtons/>
                </NavTab>
                <Promo/>
            </Header>
            <main className='main'>
                <AboutProject/>
                <Techs/>
                <AboutMe/>
                <Portfolio/>
            </main>
            <Footer/>
        </div>

    );
}

export default Main;