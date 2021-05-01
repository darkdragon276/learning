
const stateDefaut = {
    mangPhim: [
        {maPhim:1,tenPhim:'Kiều',hinhAnh:'https://picsum.photos',moTa:'Phim đang được chiếu tại tất cả các rạp trên toàn quốc'},
        {maPhim:2,tenPhim:'Batman',hinhAnh:'https://picsum.photos',moTa:'Phim đang được chiếu tại tất cả các rạp trên toàn quốc'}
    ],
    chiTietPhim: {
        
    }
}

export const QuanLyPhimReducer = (state = stateDefaut, action) => {


    switch (action.type) {

        case 'SET_MANG_PHIM': {
            state.mangPhim = action.mangPhim;
            return {...state};
        }
        case 'SET_CHI_TIET_PHIM': {
            state.chiTietPhim = action.chiTietPhim;
            return {...state}
        }

        default: return { ...state }
    }
}