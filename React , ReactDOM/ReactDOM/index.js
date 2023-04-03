// Bài Tập F8
/* <div class="post-item">
    <h2 title="Học React tại F8">Học React JS</h2>
    <p>Học React JS từ cơ bản đến nâng cao</p>
</div> */

// Giải bằng DOM
const divDOM = document.createElement('div')
divDOM.className = 'post-item'

const divDOMH2 = document.createElement('h2')
divDOMH2.title = 'Hoc React Tai F8'
divDOMH2.innerText = 'Hoc React JS'
divDOM.appendChild(divDOMH2)

const divDOMP = document.createElement('p')
divDOMP.innerText = 'Hoc React JS tu co ban den nang cao'
divDOM.appendChild(divDOMP)

document.body.appendChild(divDOM)

// Giải Bằng React JS
const divReact = document.createElement('div', {
    className: 'post-item'
},
    React.createElement('h2', {
        title: 'Hoc React tai F8'
    }, 'Hoc ReactJS'),
    React.createElement('p', {}, 'Hoc React JS tu co ban den nang cao')
)
// Get root Element
const root = document.getElementById('root');
// React DOM
ReactDOM.render(divReact, root);