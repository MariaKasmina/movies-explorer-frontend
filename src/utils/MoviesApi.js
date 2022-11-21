class MoviesApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
    }

    getAllMovies(){
        return fetch(this._baseUrl, {
            method: 'GET',
        }).then((res) => {
            return this._getResponseData(res);
        });
    }

    _getResponseData(res) {
        return (!res.ok) ? Promise.reject(`Ошибка: ${res.status}`) : res.json();
    }

}

const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies'
});

export default moviesApi;