const constants = {
    SHORT_METER_DURATION: 40,
    // количество изначально представляемых результатов поиска фильмов на разном разрешении
    MOVIES_ON_PAGE_COUNT: {
        WIDE: 12,
        MID: 8,
        SMALL: 5,
    },
    // количество единовременно добавляемых к отображению фильмов при нажатии на кнопку Ещё
    MORE_MOVIE_ON_PAGE_COUNT: {
        WIDE: 3,
        MID: 2,
        SMALL: 2,
    },
};

module.exports = {
    constants,
};