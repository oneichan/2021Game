phina.globalize();

const DIRECTION = {
    none : 0,
    top : 1,
    bottom : 2,
    right : 3,
    left : 4,
};

const ASSETS = {
    font : {
        fontAwesome:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff',
        chihaya:'./font/ちはや毛筆-free-.ttf',
        noto:'./font/NotoSerifJP-Regular.otf',
    },
    image : {
        'hire':'./img/usi_hire.png',
        'katabara':'./img/usi_katabara.png',
        'katarosu':'./img/usi_katarosu.png',
        'nakabara':'./img/usi_nakabara.png',
        'nekku':'./img/usi_nekku.png',
        'origin':'./img/usi_origin.png',
        'ranpu':'./img/usi_ranpu.png',
        'riburosu':'./img/usi_riburosu.png',
        'saroin':'./img/usi_saroin.png',
        'sintama':'./img/usi_sintama.png',
        'sotobara':'./img/usi_sotobara.png',
        'sotomomo':'./img/usi_sotomomo.png',
        'sune':'./img/usi_sune.png',
        'tan':'./img/usi_tan.png',
        'teru':'./img/usi_teru.png',
        'ude':'./img/usi_ude.png',
        'utimomo':'./img/usi_utimomo.png',
    }
};

const SCREEN_WIDTH = 640;
const SCREEN_HEIGHT = 960;

const SPRITE_SIZE  = 160;
const MOVE_X = 200;

const MAX_DISP_CHOICE = 4;
const CHOICE_HEIGHT = 50;
const CHOICE_COLUMN_X = 1;
const CHOICE_COLUMN_Y = 4;

const USI_SIZE_SCALE = 1;
const USI_GRID_Y = 7;
const GAME_TIME = 30000;

