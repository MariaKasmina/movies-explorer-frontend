const BASE_URL = 'http://localhost:3001';


export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    }).then(checkResponse);
}

export const updateUserInfo = (newName, newEmail) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newName,
            email: newEmail
        })
    }).then(checkResponse);
}

export const getSavedMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    }).then(checkResponse);
}

export const addSavedMovie = (movie) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    }).then(checkResponse);
}

export const removeMovieFromSavedMovies = (id) => {
    return fetch(`${BASE_URL}/movies/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
    }).then(checkResponse);
}

function checkResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        throw response.ok;
    }
}