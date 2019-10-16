let postingBtn = document.getElementsByClassName('posting');
let mentions = document.querySelector('.mentions');
let element1 = document.createElement('li');
let element2 = document.createElement('span');
let element3 = document.createElement('span');
let makingCom = document.getElementsById('makingCom');

postingBtn[0].addEventListener('click', makingNew1);

function makingNew1() {
    element2.innerHTML = 'rovvxhyo';
    element2.style.fontWeight = 'bold';
    element3.innerHTML = makingCom.value;
    mentions.appendChild(element1);
    element1.appendChild(element2);
    element1.appendChild(element3);
}
