// Đây là cánh làm bình thường
var ten = ['Long', 'Duy', 'Thành'];

var a = ten[0];
var b = ten[1];
var c = ten[2];

console.log(a, b, c);

// Còn đây là cách làm khi sử dụng Destructuring
const readName = ['Tuấn', 'Phước', 'Cường'];
const [d, e, f] = readName;

console.log(d, e, f);

// Toán Tử ...Rest lấy ra những phần còn lại
let friendName = ['Tín', 'Hào', 'Quân'];
let [g, h, ...rest] = friendName;
console.log(g);
console.log(rest);


// Destructuring, Rest
// VD1
var course = {
    ten: 'Quân nợ Tín',
    price: '1 tỷ',
    image: 'Duy trốn nợ',
}
var { ten, ...conno } = course;
console.log(ten);
console.log(conno);

// VD2
var zoo = {
    anthit: 'Hổ',
    chim: 'Cú mèo',
    bosat: 'Tắc Kè',
    dongvatmaulanh: {
        maulanh: 'Sói',
        maunong: 'Gấu',
    }
};
var { anthit, dongvatmaulanh: { maunong } } = zoo;
console.log(anthit);
console.log(maunong);


// VD3
var congty = {
    giamdoc: 'NguyenDucDuy',
    phogiamdoc: 'NguyenVanThanh',
    luong: '100.000.000 VND',
};
var { ...conlai } = congty;
console.log(conlai);


// VD4
// Tính tổng tất cả các số trong Hàm Sum
function sum(...rest) {
    return rest.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Kết quả là 15