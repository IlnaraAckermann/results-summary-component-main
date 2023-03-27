const url ='./src/data.json';


fetch(url)
  .then(response => response.json())
  .then(data => {
    const lista = document.getElementById('mylist');
    const ul = document.createElement('ul');
    lista.appendChild(ul);
    data.forEach(item => {
      const li = document.createElement('li');
    li.innerHTML = 
    `<div class="categoria">     
      <img src="${item.icon}" alt="icon">
      ${item.category}
    </div>    
    <div> 
      <span class="values-status"> ${item.score} </span>
      <span class="values-status-valor"> / 100</span>
    </div>`;
      ul.appendChild(li);
    });
  });
