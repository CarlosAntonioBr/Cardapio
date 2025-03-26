
function coxinha(){

    let coxinha = 5;
    console.log (coxinha);

        if (coxinha){
            let quantidade = document.getElementById("quantidade_coxinha").value;
            console.log (quantidade);

            let total = coxinha * quantidade;
            console.log (total);

            let total_compra = document.getElementById("valor_coxinha").textContent = total; 
            console.log (total_compra);


        }
}

function empada(){

    let empada = 10;
    console.log (empada);

        if (empada){
            let quantidade = document.getElementById("quantidade_empada").value;
            console.log (quantidade);

            let total = empada * quantidade;
            console.log (total);

            let total_compra = document.getElementById("valor_empada").textContent = total; 
            console.log (total_compra);

        }
}

function esfirra(){

    let esfirra = 25;
    console.log (esfirra);

        if (esfirra){
            let quantidade = document.getElementById("quantidade_esfirra").value;
            console.log (quantidade);

            let total = esfirra * quantidade;
            console.log (total);

            let total_compra = document.getElementById("valor_esfirra").textContent = total; 
            console.log (total_compra);

        }
}

function minipizza() {

    let minipizza = 15;
    console.log (minipizza);

        if (esfirra){
            let quantidade = document.getElementById("quantidade_minipizza").value;
            console.log (quantidade);

            let total = minipizza * quantidade;
            console.log (total);

            let total_compra = document.getElementById("valor_minipizza").textContent = total; 
            console.log (total_compra);

        }
}

function pastel(){

    let pastel = 4;
    console.log (pastel);
        
        if (pastel){
            let quantidade = document.getElementById("quantidade_pastel").value;
            console.log (quantidade);
        
            let total = pastel * quantidade;
            console.log (total);
        
            let total_compra = document.getElementById("valor_pastel").textContent = total; 
            console.log (total_compra);
            
        }
}

function sanduiche(){

    let sanduiche = 30;
    console.log (sanduiche);

        if (sanduiche){
            let quantidade = document.getElementById("quantidade_sanduiche").value;
            console.log (quantidade);

            let total = sanduiche * quantidade;
            console.log (total);

            let total_compra = document.getElementById("valor_sanduiche").textContent = total; 
            console.log (total_compra);
        }
}
function confirmacao(){

    let confirmacao = document.getElementById("comfirmacao").textContent = total_compra;
    console.log (confirmacao);

}