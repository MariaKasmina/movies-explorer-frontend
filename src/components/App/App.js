import {Route, Switch, withRouter} from 'react-router-dom';
import Main from "../Main/Main";
import NavTab from "../NavTab/NavTab";
import Movies from "../Movies/Movies";
import Navigation from "../Navigation/Navigation";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Preloader from "../Preloader/Preloader";

function App() {

    return (
        <div className="root__container">
            <Switch>
                <Route exact path="/sign-up">
                    <Register/>
                </Route>
                <Route exact path="/sign-in">
                    <Login/>
                </Route>
                <Route exact path="/movies">
                    <Movies>
                        <NavTab path="/movies">
                            <Navigation/>
                        </NavTab>
                    </Movies>
                </Route>
                <Route exact path="/saved-movies">
                    <SavedMovies>
                        <NavTab path="/saved-movies">
                            <Navigation/>
                        </NavTab>
                    </SavedMovies>
                </Route>
                <Route exact path="/profile">
                    <Profile>
                        <NavTab path="/movies">
                            <Navigation/>
                        </NavTab>
                    </Profile>
                </Route>
                {/*страница с прелоадером на период ревью*/}
                <Route exact path="/preloader">
                    <Preloader/>
                </Route>
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </div>
    )
        ;
}

export default withRouter(App);