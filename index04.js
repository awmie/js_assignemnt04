document.querySelector('.colorchoices').style = 'word-spacing:30px'
let hint = document.querySelector('.hint');
let tabColor = document.querySelector('.container');
let inputValue = document.querySelector('.inputcolor');

const onClick = function() {
    if(inputValue.value == 1){
        tabColor.style = 'background-color:red';
        hint.innerHTML = '✅red';
        tabColor.textContent = 'Changed the color to RED♥️';
    }
    else if(inputValue.value ==2){
        tabColor.style = 'background-color:	palegreen';
        hint.innerHTML = '✅green';
        tabColor.textContent = 'Changed the color to GREEN💚';
    }
    else if(inputValue.value ==3){
        tabColor.style = 'background-color:#00BFFF';
        hint.innerHTML = '✅blue';
        tabColor.textContent = 'Changed the color to BLUE💙';
    }
    else if(inputValue.value ==4){
        tabColor.style = 'background-color:yellow';
        hint.innerHTML = '✅yellow';
        tabColor.textContent = 'Changed the color to YELLOW💛';
    }
    else{
        hint.innerHTML = 'Out of range: '+ inputValue.value;
    }

}

const reset = function(){
    tabColor.textContent = 'Change the COLOR😁';
    tabColor.style = 'background-color: grey';
    hint.innerHTML = 'INPUT here⬇️[only number]'
}
document.querySelector('#colorchange').addEventListener('click', onClick);
document.querySelector('#reset').addEventListener('click',reset);