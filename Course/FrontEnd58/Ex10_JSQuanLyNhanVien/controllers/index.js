let nhanViens = new Array(10);
let validate = new Validate;

document.querySelector("#btnXacNhan").onclick = function (event) {
    let nhanVien1 = new NhanVien;
    nhanVien1.maNhanVien = validate.isNumber("#maNhanVien", "ma nhan vien");
    nhanVien1.tenNhanVien = validate.isEmail("#tenNhanVien", "ten nhan vien");
    nhanVien1.soGioLam = parseFloat(validate.inRange("#soGioLam", 50, 200,"so gio lam ngoai range"));
    nhanVien1.luongCoBan = parseFloat(validate.inRange("#luongCoBan", 1000, 2000,"luong co ban ngoai range"));
    let ChucVu = document.getElementById("chucVu");
    nhanVien1.tenChucVu = ChucVu.options[ChucVu.selectedIndex].innerHTML;
    nhanVien1.heSoChucVu = parseFloat(ChucVu.value);

    document.getElementById("txtMaNhanVien").innerHTML = nhanVien1.maNhanVien;
    document.getElementById("txtTenNhanVien").innerHTML = nhanVien1.tenNhanVien;
    document.getElementById("txtChucVu").innerHTML = nhanVien1.tenChucVu;
    document.getElementById("txtTongLuong").innerHTML = nhanVien1.tinhLuong();
    document.getElementById("txtXepLoai").innerHTML = nhanVien1.xepLoai();

    if(checked(nhanVien1)) {
        nhanViens.push(nhanVien1);
        show("tblNhanVien", nhanViens);
    }
}

let checked = function(NhanVien) {
    // validate.isEmpty()
    return true
}

let show = function (id, array) {
    let content = document.getElementById(id);
    console.log(content);
    content.innerHTML = null;
    array.forEach(element => {
        content.innerHTML += addRow(element);
    });
}

let deleteRow = function (maNhanVien) {
    for (let index = 0; index < nhanViens.length; index++) {
        const element = nhanViens[index];
        if (element == undefined) {
            continue;
        }
        if (maNhanVien === element.maNhanVien) {
            delete nhanViens[index];
            show("tblNhanVien", nhanViens);
            // return;
        }
    }
}

let addRow = function (NhanVien) {
    // 2nd way
    let content = `
        <tr>
            <td>${NhanVien.maNhanVien}</td>
            <td>${NhanVien.tenNhanVien}</td>
            <td>${NhanVien.tenChucVu}</td>
            <td>${NhanVien.heSoChucVu}</td>
            <td>${NhanVien.luongCoBan}</td>
            <td>${NhanVien.tinhLuong()}</td>
            <td>${NhanVien.soGioLam}</td>
            <td>${NhanVien.xepLoai()}</td>
            <td><button class="btn btn-danger" onclick="deleteRow('${NhanVien.maNhanVien}')">Xoa</button></td>
        </tr>
    `;
    return content;
}