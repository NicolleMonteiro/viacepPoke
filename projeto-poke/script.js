function buscarPokemon() {
    const numero = document.getElementById("pokemon").value;
    const resultado = document.getElementById("resultado");
 
    if (numero === "" || numero <= 0) {
      resultado.innerHTML = "<p class='erro'>Digite um número válido.</p>";
      return;
    }
 
    fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
      .then(response => response.json())
      .then(dados => {
 
        const nome = dados.name.toUpperCase();
 
        // Imagem normal (100% funciona)
        const imagem = dados.sprites.front_default;
 
        // Pegando ataques com segurança
        const ataque1 = dados.moves.length > 0 ? dados.moves[0].move.name : "Não disponível";
        const ataque2 = dados.moves.length > 1 ? dados.moves[1].move.name : "Não disponível";
 
        resultado.innerHTML = `
          <h2>${nome}</h2>
          <img src="${imagem}" width="150">
          <p><strong>Ataque 1:</strong> ${ataque1}</p>
          <p><strong>Ataque 2:</strong> ${ataque2}</p>
        `;
      })
      .catch(error => {
        resultado.innerHTML = "<p class='erro'>Pokémon não encontrado.</p>";
        console.log("Erro:", error);
      });
  }