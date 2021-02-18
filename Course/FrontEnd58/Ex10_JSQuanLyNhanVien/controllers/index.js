var nhanVien1 = new NhanVien;

document.querySelector("#btnXacNhan").onclick = function(event) {
    nhanVien1.maNhanVien = document.getElementById("maNhanVien").value;
    nhanVien1.tenNhanVien = document.getElementById("tenNhanVien").value;
    nhanVien1.soGioLam = parseFloat(document.getElementById("soGioLam").value);
    nhanVien1.luongCoBan = parseFloat(document.getElementById("luongCoBan").value);
    // nhanVien1.tenChucVu = document.getElementById("loaiSinhVien");
    nhanVien1.heSoChucVu = parseFloat(document.getElementById("chucVu").value);

    document.getElementById("txtMaNhanVien").innerHTML = nhanVien1.maNhanVien;
    document.getElementById("txtTenNhanVien").innerHTML = nhanVien1.tenNhanVien;
    document.getElementById("txtChucVu").innerHTML = nhanVien1.tenChucVu;
    document.getElementById("txtTongLuong").innerHTML = nhanVien1.tinhLuong();
    document.getElementById("txtXepLoai").innerHTML = nhanVien1.xepLoai();
}