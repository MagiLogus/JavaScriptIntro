function substituirPorNickname() {
    const nome = document.getElementById("nomeUsuario").value;
    let nickname = "Maravilhoso" + nome; 
    document.getElementById("resultado").innerText = `Olá, ${nickname}!`;
}