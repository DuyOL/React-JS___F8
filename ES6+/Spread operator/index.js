// VD1
var hoclai = ['Quyết', 'Phương', 'Vân Anh', 'Tâm'];
var thilai = ['Khuê', 'Trung Hòa', ' Tuấn Thành'];
var _2danhsach = [...hoclai, ...thilai];

console.log(_2danhsach);

// VD2
var phancung = ['Chuột', 'Bàn Phím', 'Màn Hình', 'Ổ Cứng'];
var phanmem = ['Fecabook', 'YouTobe ', 'Zalo'];
var computer = [...phancung, ...phanmem];
console.log(computer);


// VD3
const Zoo1 = {
    ten: 'Ngựa',
    api: 'https://github.com/',
}
const zoo2 = {
    ten2: 'Dê',
    api2: "https://github.com/DuyOL/",
}
const allzoo = { ...Zoo1, ...zoo2 };
console.log(allzoo);

// VD4
function myFunction(x, y, z) {
    console.log(x, y, z);
}

const arr = ['Duy', 'Thành', 'Tín'];
myFunction(...arr); // sẽ log ra 1 2 3
