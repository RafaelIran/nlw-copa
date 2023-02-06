function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}


let delay = -0.4 ;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
      <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

let teste = window.prompt('Digite uma data')

document.querySelector('#cards').innerHTML = 


    
      createCard(``, 'quinta', 
        createGame('brazil', '16:00', 'servia')
      ) +
      createCard('28/11', 'segunda',
        createGame('brazil', '12:00', 'uruguai')
    ) +
      createCard('30/11', 'sexta',
        createGame('brazil', '11:00', 'switzerland')
    ) +
    createCard('01/12', 'sabado', createGame('Brazil', '12:00', 'uruguai')
    )