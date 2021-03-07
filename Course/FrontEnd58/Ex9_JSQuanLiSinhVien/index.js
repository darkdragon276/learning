var range = ['yếu', 'yếu', 'yếu', 'yếu', 'yếu', 'trung bình'
    , 'trung bình khá', 'khá', 'giỏi', 'xuất sắc'];

var diemTrungBinh = function (...points) {
    var sum = 0;
    for (var i = 0; i < points.length; i++) {
        sum += points[i];
    }
    console.log(points.length);
    return (sum / points.length);
}

var xepLoai = function (diemTB, diemRL) {
    if (diemRL < 5) {
        return 'yếu';
    }
    if (diemTB < 0 || diemTB > 10) {
        return '';
    }
    return range[Math.round(diemTB - 0.5)];
}

document.querySelector('#btnXacNhan').onclick = function (event) {
    var maSinVien = document.getElementById("maSinhVien");
    var tenSinVien = document.getElementById("tenSinhVien");
    var loaiSinVien = document.getElementById("loaiSinhVien");
    var diemToan = parseFloat(document.getElementById("diemToan").value);
    var diemLy = parseFloat(document.getElementById("diemLy").value);
    var diemHoa = parseFloat(document.getElementById("diemHoa").value);
    var diemRenLuyen = parseFloat(document.getElementById("diemRenLuyen").value);

    document.getElementById("txtMaSinhVien").innerHTML = maSinVien.value;
    document.getElementById("txtTenSinhVien").innerHTML = tenSinVien.value;
    document.getElementById("txtLoaiSinhVien").innerHTML = loaiSinVien.options[loaiSinVien.selectedIndex].textContent;
    document.getElementById("txtXepLoai").innerHTML = 
    xepLoai(diemTrungBinh(diemToan, diemHoa, diemLy), diemRenLuyen);
}

var tinhTien = function(tongTien, tienTip, soNguoi) {
    return tongTien*(tienTip/100 + 1)/soNguoi;
}

document.querySelector("#btnTinhTien").onclick = function (event) {
    var tongTien = parseFloat(document.getElementById("tongTien").value);
    var tienTip = parseFloat(document.getElementById("tienTip").value);
    var soNguoi = parseFloat(document.getElementById("soNguoi").value);

    var result = document.getElementById("result");
    result.innerHTML = "So tien moi nguoi tra $:" + tinhTien(tongTien, tienTip, soNguoi).toFixed(2);
}


