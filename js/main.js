let postingBtn = document.querySelector('.posting');
let newMention = document.querySelector('.newMention');
let makingCom = document.querySelector('#makingCom');

postingBtn.onclick = function () {
    let makingComv = makingCom.value;
    let element1 = document.createElement('div');
    let element2 = document.createElement('span');
    element2.innerHTML = 'rovvxhyo' + '&nbsp';
    element2.style.fontWeight = 'bold';
    let element3 = document.createElement('span');
    element3.innerHTML = makingComv;
    newMention.appendChild(element1)
    element1.appendChild(element2);
    element1.appendChild(element3);
};
