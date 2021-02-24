let nhanViens = new Array(10);

document.querySelector("#btnXacNhan").onclick = function (event) {
    let nhanVien1 = new NhanVien;
    nhanVien1.maNhanVien = document.getElementById("maNhanVien").value;
    nhanVien1.tenNhanVien = document.getElementById("tenNhanVien").value;
    nhanVien1.soGioLam = parseFloat(document.getElementById("soGioLam").value);
    nhanVien1.luongCoBan = parseFloat(document.getElementById("luongCoBan").value);
    let ChucVu = document.getElementById("chucVu");
    nhanVien1.tenChucVu = ChucVu.options[ChucVu.selectedIndex].innerHTML;
    nhanVien1.heSoChucVu = parseFloat(ChucVu.value);

    document.getElementById("txtMaNhanVien").innerHTML = nhanVien1.maNhanVien;
    document.getElementById("txtTenNhanVien").innerHTML = nhanVien1.tenNhanVien;
    document.getElementById("txtChucVu").innerHTML = nhanVien1.tenChucVu;
    document.getElementById("txtTongLuong").innerHTML = nhanVien1.tinhLuong();
    document.getElementById("txtXepLoai").innerHTML = nhanVien1.xepLoai();

    nhanViens.push(nhanVien1);
    show("tblNhanVien", nhanViens);
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
    // let id = event.target.id;
    // console.log(event, event.target);
    for (let index = 0; index < nhanViens.length; index++) {
        const element = nhanViens[index];
        if (element == undefined) {
            continue;
        }
        if (maNhanVien === element.maNhanVien) {
            delete nhanViens[index];
            show("tblNhanVien", nhanViens);
            return;
        }
    }
}

let addRow = function (NhanVien) {
    // let tr = document.createElement("tr");
    // 1st way
    // for (const prop in NhanVien) {
    //     if (!Object.hasOwnProperty.call(NhanVien, prop)) {
    //         continue;
    //     }
    //     const element = NhanVien[prop];
    //     // console.log(element);
    //     let td = document.createElement("td");
    //     td.innerHTML = (element instanceof Function) ? element.call(NhanVien) : element;
    //     tr.appendChild(td);
    // }

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

    // tr.innerHTML = content;
    // // console.log(tr);
    // let button = document.createElement("button");
    // button.className = "btn btn-danger btn-xoa";
    // button.innerHTML = "xoa";
    // button.id = "btn" + NhanVien.maNhanVien;
    // button.onclick = function (event) {
    //     deleteRow(event);
    //     show("tblNhanVien", nhanViens);
    // };
    // tr.appendChild(button);
    // tr.id = "nhan-vien" + NhanVien.maNhanVien;
    return content;
}