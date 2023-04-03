// DOM
const h1DOM = document.createElement('h1');
h1DOM.title = 'Hello James';
h1DOM.className = 'heading';
h1DOM.innerText = 'Đây là Sử Dụng DOM ';
Object.assign(h1DOM.style, {
    color: 'red',
    backgroundColor: 'rgb(48 171 131)'
})
document.body.appendChild(h1DOM);
console.dir(h1DOM);


// React --> React DOM
const h2React = React.createElement('h2', {
    title: 'Hello Duy',
    className: 'heading'
}, 'Đây là sử Dụng Dom');

console.log(h2React);


// DOM
const ulDOM = document.createElement('ul');
ulDOM.id = 'ul-id'
ulDOM.className = 'ul-menu'
const liDOM1 = document.createElement('li');
liDOM1.style = 'color:red'
liDOM1.innerText = 'JavaScript';
const liDOM2 = document.createElement('li');
liDOM2.style = 'color:blue'
liDOM2.innerText = 'React JS';
ulDOM.appendChild(liDOM1);
ulDOM.appendChild(liDOM2);
document.body.appendChild(ulDOM);


// React --> React DOM
const ulReact = React.createElement(
    'ul',
    {
        id: 'ul-id',
        style: 'color: red'
    },
    React.createElement('li', { id: 'li-1' }, 'PHP'),
    React.createElement('li', null, 'Fluter'),
)
console.log(ulReact);


// Bài Tập F8
/* <div class="post-item">
    <h2 title="Học React tại F8">Học React JS</h2>
    <p>Học React JS từ cơ bản đến nâng cao</p>
</div> */

// Giải bằng DOM
const divDOM = document.createElement('div')
divDOM.className = 'post-item'

const divDOMH2 = document.createElement('H2')
divDOMH2.title = 'Hoc Lap Trinh tai F8'
divDOMH2.innerText = 'React JS'
divDOM.appendChild(divDOMH2)

const divDOMP = document.createElement('p')
divDOMP.innerText = 'Học React JS từ cơ bản đến nâng cao'
divDOM.appendChild(divDOMP)

document.body.appendChild(divDOM)

// Giải Bằng React JS
const divReact = document.createElement('div', {
    className: 'post-item'
},
    React.createElement('h2', {
        title: 'Hoc Lap Trinh Tai F8'
    }, "Hoc React"),
    React.createElement('p', null, 'Hoc Lap Trinh Tu Co Ban den nang cao')
)
console.log(divReact)


