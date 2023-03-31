// VD1
var Name = 'Name';
var Age = 'Age';
var Address = 'Address';
const Introduce = {
    [Name]: 'NguyenDucDuy',
    [Age]: 21,
    [Address]: 'HaiDuong',
}
console.log(Introduce);


// VD2
var tencv = 'TenCV';
var luong = 'Luong';
var phucap = 'PhuCap';

const tenCongty = {
    [tencv]: 'DevMaster',
    [luong]: 10.000,
    [phucap]: 1000,
};
console.log(tenCongty)

// Bài Tập Enhanced object literals F8
// Cho trước mảng infoArr, hãy viết hàm arrToObj để chuyển array thành object.
function arrToObj(arr) {
    let ob = {} // khởi tạo đối tượng kết quả là một đối tượng rỗng
    arr.forEach((value) => { // duyệt qua mỗi phần tử của mảng arr bằng forEach
        ob[value[0]] = value[1]; // tạo một thuộc tính trong đối tượng với key là phần tử đầu tiên của mảng con và value là phần tử thứ hai của mảng con.
    })
    return ob; // trả về đối tượng kết quả đã được tạo
}







