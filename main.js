function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}

let delay = -1;

function createCard(date, day, games) {
    delay = delay + 1;
    return `
    <div class="card" style="animation-delay: ${delay}s">
                <h2>${date} <span>${day}</span></h2>
                <ul>
                    ${games}
                </ul>
            </div>
    `
}

document.querySelector("#app").innerHTML = `
        <header>
            <img src="./assets/logo.svg" alt="">
        </header>

        <main id="cards">
            ${createCard("24/11", "quinta", createGame('switzerland', '07:00', 'cameroon') + createGame('brazil', '16:00', 'serbia'))}
            ${createCard("28/11", "segunda", createGame('brazil', '13:00', 'switzerland'))}
            ${createCard("02/12", "sexta", createGame('brazil', '16:00', 'cameroon'))}
        </main>

`
