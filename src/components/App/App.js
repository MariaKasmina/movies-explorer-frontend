import {Route, Switch, useHistory, withRouter} from 'react-router-dom';
import Main from "../Main/Main";
import NavTab from "../NavTab/NavTab";
import Movies from "../Movies/Movies";
import Navigation from "../Navigation/Navigation";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import {CurrentUserContext} from "../../context/CurrentUserContext";
import {useEffect, useState} from "react";
import {authorize, register, checkTokenValidity} from "../../utils/AuthApi";
import ProtectedRoute from "../ProtectedRoute";
import {getSavedMovies, getUserInfo, updateUserInfo} from "../../utils/MainApi";

function App() {
    const history = useHistory();

    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // признак авторизованности пользователя
    const [isSuccessRequest, setIsSuccessRequest] = useState(true);
    const [isErrRequest, setIsErrRequest] = useState(false);

    useEffect(() => {
        if (isLoggedIn) {
            Promise.all([getUserInfo(), getSavedMovies()]).then(([userInfo, savedMovies]) => {
                userInfo.liked = savedMovies;
                setCurrentUser(userInfo);
                localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [isLoggedIn]);

    useEffect(() => {
        checkToken();
    }, [isLoggedIn]);

    /**
     * Обработка авторизации пользователя
     * @param password
     * @param email
     */
    function handleAuthorization(password, email) {
        authorize(password, email).then((res) => {
            setIsLoggedIn(true);
            localStorage.setItem('token', res.token);
            history.push("/movies");
        }).catch(() => {
            setIsErrRequest(true);
        })
    }

    /**
     * Обработка регистрации пользователя
     * @param name
     * @param password
     * @param email
     */
    function handleRegister(name, password, email) {
        register(name, password, email).then((res) => {
            console.log(res)
            authorize(password, email).then((res) => {
                localStorage.setItem('token', res.token);
                setIsLoggedIn(true);
                history.push("/movies");
            }).catch(() => {
                setIsErrRequest(true);
            })
        }).catch(() => {
            setIsErrRequest(true);
        });
    }

    /**
     * Проверяем наличие токена и забираем почту для показа в хедере
     */
    function checkToken() {
        const token = localStorage.getItem('token');
        if (token) {
            checkTokenValidity(token).then(() => {
                setIsLoggedIn(true);
            }).catch(() => {
                setIsLoggedIn(false);
                localStorage.clear();
                history.push("/sign-in");
            })
        }
    }

    function handleLogout() {
        localStorage.clear();
        setIsLoggedIn(false);
        history.push('/');
    }

    function handleUserDataChange(name, email) {
        updateUserInfo(name, email).then((res) => {
            setCurrentUser(res);
            setIsSuccessRequest(true);
        }).catch(() => {
            setIsSuccessRequest(false);
        })
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="root__container">
                <Switch>
                    <Route exact path="/sign-up">
                        <Register onHandleSubmit={handleRegister} onErr={isErrRequest}/>
                    </Route>
                    <Route exact path="/sign-in">
                        <Login onHandleSubmit={handleAuthorization} onErr={isErrRequest}/>
                    </Route>
                    <ProtectedRoute path="/movies" loggedIn={localStorage.getItem('token') ? true : isLoggedIn}>
                        <Movies path="/movies">
                            <NavTab path="/movies">
                                <Navigation/>
                            </NavTab>
                        </Movies>
                    </ProtectedRoute>
                    <ProtectedRoute path="/saved-movies" loggedIn={localStorage.getItem('token') ? true : isLoggedIn}>
                        <SavedMovies path="/saved-movies">
                            <NavTab path="/saved-movies">
                                <Navigation/>
                            </NavTab>
                        </SavedMovies>
                    </ProtectedRoute>
                    <ProtectedRoute path="/profile" loggedIn={localStorage.getItem('token') ? true : isLoggedIn}>
                        <Profile onLogout={handleLogout} onHandleChange={handleUserDataChange} successRequest={isSuccessRequest}>
                            <NavTab path="/movies">
                                <Navigation/>
                            </NavTab>
                        </Profile>
                    </ProtectedRoute>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default withRouter(App);