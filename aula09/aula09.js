var x = document.querySelectorAll('p.exemplo');
var i = 0;
for (i = 0; i < x.length; i++) {
    x[i].innerHTML = 'Populus me sibilat, at mihi plaudo ipse domi simul ac nummos contemplar in arca.';
}

/*
    document.baseURI / document.body / document.doctype / document.documentURI / document.domain / document.head
    document.inputEncoding / document.lastModified / document.title / document.URL / document.forms / document.links 
    document.images / document.scripts
 */

 document.write('Isso é um teste');

 function trocaImagem(){
     document.getElementById('imagem').src = 'wallhaven-456011.jpg';
     document.getElementById('main').style.backgroundColor = 'green';
 }

 function changeText(elemento){
     elemento.innerHTML = 'Palmeiras não tem mundial !';
 }

 function checkLoad(){
    alert('Opção alterada');
 }

 function mouse1(elemento){
    elemento.innerHTML = 'Palmeiras não tem mundial !';
 }

 function mouse2(elemento){
    elemento.innerHTML = 'Passe o mouse aqui !';
 }

 /*
    Eventos:
    onclick / onload / onchange / onmouseover / onmouseout / 
    onfocus / onmousedown / onmouseup
 */