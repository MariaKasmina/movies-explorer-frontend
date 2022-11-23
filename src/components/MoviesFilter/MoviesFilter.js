/**
 * Функции для сортировки фильтров
 */
import {constants} from "../../constants";

export const moviesRuFilter = (movies, query) => {
    const map = [];
    let indexArray = 0;
    movies.forEach((item) => {
        if ((item.nameRU.toUpperCase()).indexOf(query.toUpperCase()) !== -1) {
            map[indexArray] = item;
            indexArray += 1;
        }
    });

    return map;

}

export const moviesEnFilter = (movies, query) => {
    const map = [];
    let indexArray = 0;
    movies.forEach((item) => {
        if ((item.nameEN.toUpperCase()).indexOf(query.toUpperCase()) !== -1) {
            map[indexArray] = item;
            indexArray += 1;
        }
    });
    return map;
}

export const moviesFilter = (movies, searchQuery) => {
    const ruRegexp = /[а-яА-Я]/gm; // русская раскладка
    const enRegexp = /[a-zA-z]/gm; // английская раскладка
    if (searchQuery.match(ruRegexp)) {
       return moviesRuFilter(movies, searchQuery);
    }
    if (searchQuery.match(enRegexp)) {
       return moviesEnFilter(movies, searchQuery);
    }
    return [];
}

/**
 * Фильтрация короткого метра
 */
export const shortMeterFilter = (movies) => {
    const map = [];
    let indexArray = 0;
    movies.forEach((item) => {
        if (item.duration <= constants.SHORT_METER_DURATION) {
            map[indexArray] = item;
            indexArray += 1;
        }
    });

    return map;
}