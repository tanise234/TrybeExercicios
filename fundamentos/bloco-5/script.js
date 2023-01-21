// primeira parte
document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'magenta';
document.getElementById('primeiroFilhoDoFilho').innerText = 'Acessando pais/filhos de nós. Atenção não são nossos pais/filhos e sim os nós da árvore DOM';
document.getElementById('pai').firstChild;

// segunda parte
let irmao = document.createElement('section');
document.querySelector('#elementoOndeVoceEsta').parentNode.appendChild(irmao);

let filho = document.createElement('h3');
document.getElementById('elementoOndeVoceEsta').appendChild(filho);

let neto = document.createElement('img')
document.getElementById('primeiroFilhoDoFilho').appendChild(neto);
neto.id = 'netinho';

document.querySelector('#netinho').parentNode.parentNode.nextSibling;