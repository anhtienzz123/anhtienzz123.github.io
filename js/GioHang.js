

function chuyenThanhTien(tt) {


    var tien = tt + "";

    var tempt = '';
    var dem = 0;

    for (var i = tien.length - 1; i >= 0; i--) {

        dem = dem + 1;


        tempt += tien[i];

        if (dem == 3 && i!=0) {
            tempt += ".";
            dem = 0;
        }

       
    }

    return tempt.split('').reverse().join('');

}



function formatTien(tien) {


    tien = tien.substr(0, tien.length - 1);

    var mang = tien.split('.');

    var tt = '';

    for (var i = 0; i < mang.length; i++) {

        tt += mang[i];
    }

    return tt;

}


function capNhatTien() {
    var tien = document.getElementsByClassName('tien');
    var soluong = document.getElementsByClassName('soluong');


    var tongTien = 0;

    for (var i = 0; i < tien.length; i++) {


        tongTien += parseFloat(formatTien(tien[i].innerHTML)) * parseInt(soluong[i].value);
    }

    var tongTienSanPham = document.getElementById('tongTienSanPham');

    tongTienSanPham.innerHTML = chuyenThanhTien(tongTien) + " đ";


    var tongTienThanhToan = tongTien + 50000;

    document.getElementById('othanhtien').innerHTML = chuyenThanhTien(tongTienThanhToan) + " đ";
}

var soluong = document.getElementsByClassName('soluong');


function tru1() {

    if (soluong[0].value > 1) {
        soluong[0].value = parseInt(soluong[0].value) - 1;
        capNhatTien();
    }




}

function cong1() {
    soluong[0].value = parseInt(soluong[0].value) + 1;

    capNhatTien();
}

function tru2() {

    if (soluong[1].value > 1) {
        soluong[1].value = parseInt(soluong[1].value) - 1;
        capNhatTien();
    }



}

function cong2() {
    soluong[1].value = parseInt(soluong[1].value) + 1;

    capNhatTien();
}


function tru3() {

    if (soluong[2].value > 1) {
        soluong[2].value = parseInt(soluong[2].value) - 1;

        capNhatTien();
    }

}

function cong3() {
    soluong[2].value = parseInt(soluong[2].value) + 1;

    capNhatTien();
}


capNhatTien();


