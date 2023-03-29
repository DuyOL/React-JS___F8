// Function bình thường
const paint = function (pen) {
    console.log(pen);
}
paint("Nguyen Duc Duy ...");

// Khi dùng Arrow Function
const ve = (but) => {
    console.log(but);
}
ve("Nguyễn Tiến Thành ...");

// Arrow Function

// VD 1
const lophoc = (student) => {
    console.log(student);
}
lophoc("Teacher...");

// VD 2
const tinhtong = (a, b) => a + b;
console.log(tinhtong(22, 12));

// VD 3
const tinhhieu = (c, d) => d - c;
console.log(tinhhieu(12, 22));

// VD 4 function
const langgue = {
    name: 'JavaScript',
    getname: function () {
        return this.name;
    }
}
console.log(langgue.getname());

// VD 5 Arrow Funtion
const Monhoc = function (ten, gia) {
    this.ten = ten;
    this.gia = gia;
};
const jsngonngu = new Monhoc('PHP ', 5000);
console.log(jsngonngu);