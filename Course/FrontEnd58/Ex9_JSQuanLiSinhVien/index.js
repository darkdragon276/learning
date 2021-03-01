
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

document.querySelector('#btnTinhTien').onclick = function(){
    var tongTien = parseFloat(document.getElementById('tongTien').value);
    var tienTip =  parseFloat(document.getElementById('tienTip').value);
    var soNguoi =  parseFloat(document.getElementById('soNguoi').value);
    console.log(tinhTien(tongTien,tienTip,soNguoi));
    document.getElementById('result').innerHTML = tinhTien(tongTien,tienTip,soNguoi);

}