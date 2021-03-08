document.querySelector("#btnXacNhan").onclick = function (event) {
    let nhanVien1 = new NhanVien;
    nhanVien1.maNhanVien = Validate.isKey("#maNhanVien", 4, 6, "ma nhan vien");
    nhanVien1.tenNhanVien = Validate.isName("#tenNhanVien", "ten nhan vien");
    nhanVien1.soGioLamTrongThang = (Validate.inRange("#soGioLam", 50, 150, "so gio lam"));
    nhanVien1.luongCoBan = parseFloat(Validate.inRange("#luongCoBan", 1000000, 20000000, "luong co ban"));
    let ChucVu = document.getElementById("chucVu");
    nhanVien1.tenChucVu = ChucVu.options[ChucVu.selectedIndex].innerHTML;
    nhanVien1.heSoChucVu = parseFloat(ChucVu.value);
    
    if (Validate.hasNullProperty(nhanVien1)) {
        return;
    }

    document.getElementById("txtMaNhanVien").innerHTML = nhanVien1.maNhanVien;
    document.getElementById("txtTenNhanVien").innerHTML = nhanVien1.tenNhanVien;
    document.getElementById("txtChucVu").innerHTML = nhanVien1.tenChucVu;
    document.getElementById("txtTongLuong").innerHTML = nhanVien1.tinhLuong();
    document.getElementById("txtXepLoai").innerHTML = nhanVien1.xepLoai();

    addNhanVien(nhanVien1);
}

document.querySelector("#btnCapNhat").onclick = function (event) {
    let nhanVien1 = new NhanVien;
    nhanVien1.maNhanVien = Validate.isKey("#maNhanVien", 4, 6, "ma nhan vien");
    nhanVien1.tenNhanVien = Validate.isName("#tenNhanVien", "ten nhan vien");
    nhanVien1.soGioLamTrongThang = (Validate.inRange("#soGioLam", 50, 150, "so gio lam ngoai range"));
    nhanVien1.luongCoBan = parseFloat(Validate.inRange("#luongCoBan", 1000000, 20000000, "luong co ban ngoai range"));
    let ChucVu = document.getElementById("chucVu");
    nhanVien1.tenChucVu = ChucVu.options[ChucVu.selectedIndex].innerHTML;
    nhanVien1.heSoChucVu = parseFloat(ChucVu.value);

    if (Validate.hasNullProperty(nhanVien1)) {
        return;
    }
    putNhanVien(nhanVien1);
}

var putNhanVien = function (nhanVien) {
    let promise = axios({
        url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/CapNhatThongTinNhanVien?maNhanVien=${nhanVien.maNhanVien}`,
        method: "PUT",
        data: nhanVien,
    }).then(function (result) {
        // console.log(result.data);
        getNhanViens();
    }).catch(function (error) {
        console.log(error);
    });
}

var addRow = function (NhanVien) {
    let content = `
    <tr>
    <td>${NhanVien.maNhanVien}</td>
    <td>${NhanVien.tenNhanVien}</td>
    <td>${NhanVien.tenChucVu}</td>
    <td>${NhanVien.heSoChucVu}</td>
    <td>${NhanVien.luongCoBan}</td>
    <td>${NhanVien.tinhLuong()}</td>
    <td>${NhanVien.soGioLamTrongThang}</td>
    <td>${NhanVien.xepLoai()}</td>
    <td><button class="btn btn-danger" onclick="deleteNhanVien('${NhanVien.maNhanVien}')">Xoa</button></td>
    <td><button class="btn btn-danger" onclick="getNhanVien('${NhanVien.maNhanVien}')">Chinh sua</button></td>
    </tr>
    `;
    return content;
}

var showTable = function (arrays) {
    let content = document.getElementById("tblNhanVien");
    content.innerHTML = null;
    arrays.forEach(element => {
        let nhanVien = new NhanVien();
        Object.assign(nhanVien, element);
        content.innerHTML += addRow(nhanVien);
    });
}

var reloadForm = function (nhanVien) {
    document.getElementById('maNhanVien').value = nhanVien.maNhanVien;
    document.getElementById('tenNhanVien').value = nhanVien.tenNhanVien;
    document.getElementById('chucVu').selectedIndex = nhanVien.heSoChucVu - 1;
    document.getElementById('luongCoBan').value = nhanVien.luongCoBan;
    document.getElementById('soGioLam').value = nhanVien.soGioLamTrongThang;
}

var getNhanViens = function () {
    let promise = axios({
        url: "http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayDanhSachNhanVien",
        method: "GET",
        reponseType: "json",
    }).then(function (result) {
        // console.log(result);
        showTable(result.data);
    }).catch(function (error) {
        console.log(error);
    });
}


var getNhanVien = function (maNhanVien) {
    let promise = axios({
        url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayThongTinNhanVien?maNhanVien=${maNhanVien}`,
        method: "GET",
    }).then(function (result) {
        // console.log(result);
        reloadForm(Object.assign(new NhanVien(), result.data));
    }).catch(function (error) {
        console.log(error);
    });
}

var addNhanVien = function (nhanVien) {
    let promise = axios({
        url: "http://svcy.myclass.vn/api/QuanLyNhanVienApi/ThemNhanVien",
        method: "POST",
        data: nhanVien,
    }).then(function (result) {
        // console.log(result.data);
        getNhanViens();
    }).catch(function (error) {
        console.log(error);
    });
}

var deleteNhanVien = function (maNhanVien) {
    let promise = axios({
        url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/XoaNhanVien?maSinhVien=${maNhanVien}`,
        method: "DELETE",
    }).then(function (result) {
        // console.log(result.data);
        getNhanViens();
    }).catch(function (error) {
        console.log(error);
    });
}

getNhanViens();