function kliknij1(idCard) {
  document.getElementById(idCard).innerHTML="";
} 

function licznik(){

    const tytul = document.getElementById('exampleFormControlTytul');
    const inpTytul = document.getElementById('input1');
    const count = tytul.value.replace(/ /g, "").length;
    inpTytul.innerHTML = count + ' / 50';
    if (count >= 50){
        inpTytul.style.color ="red";
        tytul.style.color = 'red';
    }
}
function licznik2(){
    const autor = document.getElementById('exampleFormControlAutor');
    const inpAutor = document.getElementById('input2');
    const count2 = autor.value.replace(/ /g, "").length;
    inpAutor.innerHTML = count2 + ' / 50'
    if(count2 >= 50){
        inpAutor.style.color ="red";
        autor.style.color = 'red';
    }
}
function licznik3(){
    const opis = document.getElementById('exampleFormControlOpis');
    const inpOpis = document.getElementById('input3');
    const count3 = opis.value.replace(/ /g, "").length;
    inpOpis.innerHTML = count3 + ' / 500';
    if(count3 >= 500){
        inpOpis.style.color ="red";
        opis.style.color = 'red';
    }
}
function save(){
    const id = window.localStorage.getItem('id');
    window.localStorage.setItem(id,exampleFormControlTytul.value);
    const id2 = window.localStorage.getItem('id2' );
    window.localStorage.setItem(id2,exampleFormControlAutor.value);
    const id3 = window.localStorage.getItem( 'id3' );
    window.localStorage.setItem(id3,exampleFormControlOpis.value);
    
    // console.log(autor.value);
    // console.log(opis.value);
   
}
function edit(id,id2,id3) {
    // console.log(id)
    // const tytul = element.closest('.card-body').querySelector('.card-title').innerText
    const tytul = document.getElementById(id).innerText;
    window.localStorage.setItem(id, tytul );
    const autor = document.getElementById(id2).innerText;
    window.localStorage.setItem(id2 ,autor );
    const opis = document.getElementById(id3).innerText;
    window.localStorage.setItem(id3 ,opis );
   
    window.localStorage.setItem('id', id );
    window.localStorage.setItem('id2', id2 );
    window.localStorage.setItem('id3', id3 );
}

function edit2 () {
    const id =  window.localStorage.getItem('id');
    const tytul =  window.localStorage.getItem(id);
    const tytulInput = document.getElementById('exampleFormControlTytul');
    tytulInput.value = tytul;
    const id2 =  window.localStorage.getItem('id2');
    const autor =  window.localStorage.getItem(id2);
    const autorInput = document.getElementById('exampleFormControlAutor');
    autorInput.value = autor;
    const id3 =  window.localStorage.getItem('id3');
    const opis =  window.localStorage.getItem(id3);
    const opisInput = document.getElementById('exampleFormControlOpis');
    opisInput.value = opis;
    licznik();
    licznik2();
    licznik3();
}
function edit3() {
    for(let i = 1; i < 7; i++){
    const tytul =  window.localStorage.getItem('tytul' +i);
    if(tytul){
    const tytulInput = document.getElementById('tytul' +i);
    tytulInput.innerText = tytul;
    }
    const autor =  window.localStorage.getItem('autor'+i);
    if(autor){
    const autorInput = document.getElementById('autor'+i);
    autorInput.innerText = autor;
    }
    const opis =  window.localStorage.getItem('opis'+i);
    if(opis){
    const opisInput = document.getElementById('opis'+i);
    opisInput.innerText = opis;
    }
}
}
//     }
//     const tytul2 =  window.localStorage.getItem('tytul2');
//     if(tytul2){
//     const tytulInput2 = document.getElementById('tytul2');
//     tytulInput2.innerText = tytul2;
//     }
//     const autor2 =  window.localStorage.getItem('autor2');
//     if(autor2){
//     const autorInput2 = document.getElementById('autor2');
//     autorInput2.innerText = autor2;
//     }
//     const opis2 =  window.localStorage.getItem('opis2');
//     if(opis2){
//     const opisInput2 = document.getElementById('opis2');
//     opisInput2.innerText = opis2;
//     }
//     const tytul3 =  window.localStorage.getItem('tytul3');
//     if(tytul3){
//     const tytulInput3 = document.getElementById('tytul3');
//     tytulInput3.innerText = tytul3;
//     }
//     const autor3 =  window.localStorage.getItem('autor3');
//     if(autor3){
//     const autorInput3 = document.getElementById('autor3');
//     autorInput3.innerText = autor3;
//     }
//     const opis3 =  window.localStorage.getItem('opis3');
//     if(opis3){
//     const opisInput3 = document.getElementById('opis3');
//     opisInput3.innerText = opis3;
//     }
//     const tytul4 =  window.localStorage.getItem('tytul4');
//     if(tytul4){
//     const tytulInput4 = document.getElementById('tytul4');
//     tytulInput4.innerText = tytul4;
//     }
//     const autor4 =  window.localStorage.getItem('autor4');
//     if(autor4){
//     const autorInput4 = document.getElementById('autor4');
//     autorInput4.innerText = autor4;
//     }
//     const opis4 =  window.localStorage.getItem('opis4');
//     if(opis4){
//     const opisInput4 = document.getElementById('opis4');
//     opisInput4.innerText = opis4;
//     }
//     const tytul5 =  window.localStorage.getItem('tytul5');
//     if(tytul5){
//     const tytulInput5 = document.getElementById('tytul5');
//     tytulInput5.innerText = tytul5;
//     }
//     const autor5 =  window.localStorage.getItem('autor5');
//     if(autor5){
//     const autorInput5 = document.getElementById('autor5');
//     autorInput5.innerText = autor5;
//     }
//     const opis5 =  window.localStorage.getItem('opis5');
//     if(opis5){
//     const opisInput5 = document.getElementById('opis5');
//     opisInput5.innerText = opis5;
//     }
//     const tytul6 =  window.localStorage.getItem('tytul6');
//     if(tytul6){
//     const tytulInput6 = document.getElementById('tytul6');
//     tytulInput6.innerText = tytul6;
//     }
//     const autor6 =  window.localStorage.getItem('autor6');
//     if(autor6){
//     const autorInput6 = document.getElementById('autor6');
//     autorInput6.innerText = autor6;
//     }
//     const opis6 =  window.localStorage.getItem('opis6');
//     if(opis6){
//     const opisInput6 = document.getElementById('opis6');
//     opisInput6.innerText = opis6;
//     }
// }