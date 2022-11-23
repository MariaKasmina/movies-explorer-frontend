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
    // точки, когда количество отображаемых и добавляемых карточек меняется
    CHANGE_POINTS: {
        WIDE: 1280,
        MID: {
            START: 1279,
            END: 768,
        },
        SMALL: {
            START: 770,
            END: 320,
        }
    }
};

module.exports = {
    constants,
};