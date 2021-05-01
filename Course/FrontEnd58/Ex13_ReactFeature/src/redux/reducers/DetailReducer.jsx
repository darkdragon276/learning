const DATA_PRODUCT = [
    {
        "maSP": 1,
        "tenSP": "VinSmart Live",
        "manHinh": "AMOLED, 6.2\", Full HD+",
        "heDieuHanh": "Android 9.0 (Pie)",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 5700000,
        "hinhAnh": "./img/vsphone.jpg"
    },

    {
        "maSP": 2,
        "tenSP": "Meizu 16Xs",
        "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
        "heDieuHanh": "Android 9.0 (Pie); Flyme",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 7600000,
        "hinhAnh": "./img/meizuphone.jpg"
    },

    {
        "maSP": 3,
        "tenSP": "Iphone XS Max",
        "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
        "heDieuHanh": "iOS 12",
        "cameraSau": "Chính 12 MP & Phụ 12 MP",
        "cameraTruoc": "7 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 27000000,
        "hinhAnh": "./img/applephone.jpg"
    }
];

const DEFAULT = {
    maSP: 1,
    item: {
        maSP: 1,
        soLuong: 0,
    },
}

const initialState = {
    productList: [...DATA_PRODUCT],
    maSP: DEFAULT.maSP,
    // soLuong = DEFAULT.item.soLuong
}

const DetailReducer = (state = initialState, { type, maSP }) => {
    switch (type) {

        case "DETAIL":
            state.maSP = maSP;
            console.log("dispatch" + maSP);
            console.log(state);
            break;

        case "NEW_PRODUCT":
            state.productList.find((item) => item.maSP === maSP).soLuong = 1;
            // state.productList = [...state.productList];
            // return { ...state };
            break;

        case "INCREATE":
            state.productList.find((item) => item.maSP === maSP).soLuong++;
            break;

        case "DECREATE":
            state.productList.find((item) => item.maSP === maSP).soLuong--;
            break;

        case "DELETE":
            state.productList.find((item) => item.maSP === maSP).soLuong = 0;
            break;

        default:
            break;
    }
    return JSON.parse(JSON.stringify(state));

}

export default DetailReducer



