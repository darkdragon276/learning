


const stateDefault = {
    lichChieu:{},
    danhSachGheDangDat: []
}

export const LichChieuReducer = (state=stateDefault,action) => {

    switch(action.type){

        case 'SET_LICH_CHIEU': {
            state.lichChieu = action.lichChieu;
            return {...state}
        }

        case 'DAT_GHE':{
            //Kiểm tra ghế dangDat có trong danhSachGheDangDat không
            let mangGheDangDat = [...state.danhSachGheDangDat];

            let index = mangGheDangDat.findIndex(gheDD => gheDD.maGhe === action.gheDangDat.maGhe);

            if(index !== -1) {
                mangGheDangDat.splice(index,1);
            }else {
                mangGheDangDat.push(action.gheDangDat)
            }

            state.danhSachGheDangDat = mangGheDangDat;
            return {...state};

        }

        default : {return {...state}}
    }

}


