let paragraphs=document.querySelectorAll('p');
paragraphs.forEach(element => {
    element.style.background='#ff0000';

});

let optionsList=document.querySelector('#optionsList');
console.log(optionsList);

let optionsListParent=optionsList.parentElement;
console.log(optionsListParent);

if(optionsList.hasChildNodes()){
    let optionsListChildNodes=optionsList.childNodes;
    optionsListChildNodes.forEach(node =>{
        console.log(`Name: ${node.nodeName} - type: ${node.nodeType}`);
    })
}

let testParagraph=document.querySelector('#testParagraph');
testParagraph.innerHTML='This is a paragraph';

let mainHeader=document.querySelector('.main-header');
mainHeaderElements=mainHeader.children;

for(let element of mainHeaderElements){
    element.className+=' nav-item';
}

let sectionTitle=document.querySelectorAll('.section-title');
sectionTitle.forEach(element=>{
    element.classList.remove('section-title');
});