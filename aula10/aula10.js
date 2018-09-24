window.onload = function(){
    var zebrar = document.querySelectorAll('.zebra tbody tr');
    for(i = 0; i < zebrar.length; i += 2){
        zebrar[i].className = 'zebrada';
    }
}

function trocaNome(){
    document.getElementById('myName').innerHTML = 'Da Silva';
}

function msgIntervalo(){
    console.log('Msg via interval');
} 