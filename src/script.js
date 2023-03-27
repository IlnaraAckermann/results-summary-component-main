const url ='./src/data.json';


fetch(url)
  .then(response => response.json())
  .then(data => {
    const lista = document.getElementById('mylist');
    const ul = document.createElement('ul');
    lista.appendChild(ul);
    data.forEach(item => {
      const li = document.createElement('li');
    li.innerHTML = `${item.category} <span class="values-status"> ${item.score} <span class="values-status-valor"> / 100</span></span>`;
      ul.appendChild(li);
    });
  });