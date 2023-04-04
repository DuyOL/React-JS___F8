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

const titleH1 = document.createElement('h1')
titleH1.title = 'Hello James'
titleH1.innerText = 'Hello Duy'
titleH1.style = 'color:red'
divDOM.appendChild(titleH1)

const menu = document.createElement('ul')

const li = document.createElement('li')
li.innerText = 'JavaScript'

const li2 = document.createElement('li')
li2.innerText = 'PHP'

menu.appendChild(li)
menu.appendChild(li2)
document.body.appendChild(menu)

// Duới đây là 2 dòng code : getElementById vào trong thẻ root
const root = document.getElementById('root');
root.appendChild(divDOM);
// document.body.appendChild(divDOM)