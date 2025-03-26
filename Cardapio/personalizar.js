function confirmarSabores() {
    let sabores = [];
    
    if (document.getElementById("frango").checked) sabores.push("Frango");
    if (document.getElementById("carne").checked) sabores.push("Carne");
    if (document.getElementById("queijo").checked) sabores.push("Queijo");

    if (sabores.length > 0) {
        let sabor = (sabores);
        console.log (sabor);

        sabor = (document.getElementById("sabor_selecionado").textContent = sabor);
        console.log (sabor);
        
    } else {
        alert("Nenhum sabor selecionado.");
    }
}

function confirmarBebidas() {
    let bebidas = [];
    
    if (document.getElementById("coca").checked) bebidas.push("Coca-Cola");
    if (document.getElementById("guarana").checked) bebidas.push("Guaraná");
    if (document.getElementById("sprite").checked) bebidas.push("Sprite");

    if (bebidas.length > 0) {  
        let bebida = (bebidas);
        console.log (bebida);

        bebida = (document.getElementById("bebida_selecionada").textContent = bebida);
        console.log (bebida);
    } else {
        alert("Nenhuma bebida adicionada.");
    }
}
