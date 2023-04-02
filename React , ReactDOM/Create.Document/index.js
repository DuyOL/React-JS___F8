// Tạo Ra Thẻ H1 boot nó vào Root
const root = document.getElementById('root');
const h1 = document.createElement('h1')
h1.id = 'heading';
h1.className = 'test class-2';
h1.style = 'color: green;'
h1.innerText = 'Hello James bạn khỏe không ? <H1>'
console.log(h1);
root.appendChild(h1);
// Tạo Ra Thẻ H2 boot nó vào Root
const h2 = document.createElement('h2')
h2.id = 'heading2';
h2.innerText = 'Hello James bạn khỏe không ? <H2>'
h2.style = 'Color: red ; ';
console.log(h2);
root.appendChild(h2);
// Tạo Ra Thẻ H3 boot nó vào Root
const h3 = document.createElement('h3');
h3.id = 'hedding3';
h3.innerText = "Hello James bạn khỏe không ? <H3>"
Object.assign(h3.style, {
    color: 'blue',
    backgroundColor: 'rgb(48 171 131)'
})
console.log(h3);
root.appendChild(h3);

