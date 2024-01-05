console.log('Done!');
document.getElementById('player-one').addEventListener('click', function () {

    const pyalerContainer = document.getElementById('player-Container');
    const children = pyalerContainer.children;
    const playerNumber = children.length;

    if (playerNumber == 5) {
        alert('not more than 5')
        // return;

    }
    else {
        const playerContainer = document.getElementById('player-Container');
        const playerName = document.getElementById('player-one-name');
        const player = playerName.innerText;
        const newLi = document.createElement("li");
        newLi.innerText = player;
        playerContainer.appendChild(newLi);


    }
    const sButton = document.getElementById('player-one');
    sButton.disabled = true;
    sButton.style.background = '#8DF29B';

})


document.getElementById('player-two').addEventListener('click', function () {

    const pyalerContainer = document.getElementById('player-Container');
    const children = pyalerContainer.children;
    const playerNumber = children.length;

    if (playerNumber == 5) {
        alert('not more than 5')
        return;

    }
    else {
        const playerContainer = document.getElementById('player-Container');
        const playerName = document.getElementById('player-two-name');
        const player = playerName.innerText;
        const newLi = document.createElement("li");
        newLi.innerText = player;
        playerContainer.appendChild(newLi);

        const sButton = document.getElementById('player-two');
        sButton.disabled = true;
        sButton.style.background = '#8DF29B';
    }

})
document.getElementById('player-three').addEventListener('click', function () {

    const pyalerContainer = document.getElementById('player-Container');
    const children = pyalerContainer.children;
    const playerNumber = children.length;

    if (playerNumber == 5) {
        alert('not more than 5')
        return;

    }
    else {
        const playerContainer = document.getElementById('player-Container');
        const playerName = document.getElementById('player-three-name');
        const player = playerName.innerText;
        const newLi = document.createElement("li");
        newLi.innerText = player;
        playerContainer.appendChild(newLi);

        const sButton = document.getElementById('player-three');
        sButton.disabled = true;
        sButton.style.background = '#8DF29B';
    }


})
document.getElementById('player-four').addEventListener('click', function () {

    const pyalerContainer = document.getElementById('player-Container');
    const children = pyalerContainer.children;
    const playerNumber = children.length;

    if (playerNumber == 5) {
        alert('not more than 5')
        return;

    }
    else {
        const playerContainer = document.getElementById('player-Container');
        const playerName = document.getElementById('player-four-name');
        const player = playerName.innerText;
        const newLi = document.createElement("li");
        newLi.innerText = player;
        playerContainer.appendChild(newLi);

        const sButton = document.getElementById('player-four');
        sButton.disabled = true;
        sButton.style.background = '#8DF29B';
    }


})
document.getElementById('player-five').addEventListener('click', function () {

    const pyalerContainer = document.getElementById('player-Container');
    const children = pyalerContainer.children;
    const playerNumber = children.length;

    if (playerNumber == 5) {
        alert('not more than 5')
        return;

    }
    else {
        const playerContainer = document.getElementById('player-Container');
        const playerName = document.getElementById('player-five-name');
        const player = playerName.innerText;
        const newLi = document.createElement("li");
        newLi.innerText = player;
        playerContainer.appendChild(newLi);

        const sButton = document.getElementById('player-five');
        sButton.disabled = true;
        sButton.style.background = '#8DF29B';
    }


})
document.getElementById('player-six').addEventListener('click', function () {

    const pyalerContainer = document.getElementById('player-Container');
    const children = pyalerContainer.children;
    const playerNumber = children.length;

    if (playerNumber == 5) {
        alert('not more than 5')
        return;

    }
    else {
        const playerContainer = document.getElementById('player-Container');
        const playerName = document.getElementById('player-six-name');
        const player = playerName.innerText;
        const newLi = document.createElement("li");
        newLi.innerText = player;
        playerContainer.appendChild(newLi);

        const sButton = document.getElementById('player-six');
        sButton.disabled = true;
        sButton.style.background = '#8DF29B';
    }



})
document.getElementById('player-seven').addEventListener('click', function () {

    const pyalerContainer = document.getElementById('player-Container');
    const children = pyalerContainer.children;
    const playerNumber = children.length;

    if (playerNumber == 5) {
        alert('not more than 5')
        return;

    }
    else {
        const playerContainer = document.getElementById('player-Container');
        const playerName = document.getElementById('player-seven-name');
        const player = playerName.innerText;
        const newLi = document.createElement("li");
        newLi.innerText = player;
        playerContainer.appendChild(newLi);

        const sButton = document.getElementById('player-seven');
        sButton.disabled = true;
        sButton.style.background = '#8DF29B';
    }


})
document.getElementById('player-eight').addEventListener('click', function () {

    const pyalerContainer = document.getElementById('player-Container');
    const children = pyalerContainer.children;
    const playerNumber = children.length;

    if (playerNumber == 5) {
        alert('not more than 5')
        return;

    }
    else {
        const playerContainer = document.getElementById('player-Container');
        const playerName = document.getElementById('player-eight-name');
        const player = playerName.innerText;
        const newLi = document.createElement("li");
        newLi.innerText = player;
        playerContainer.appendChild(newLi);

        const sButton = document.getElementById('player-eight');
        sButton.disabled = true;
        sButton.style.background = '#8DF29B';
    }


})
document.getElementById('player-nine').addEventListener('click', function () {

    const pyalerContainer = document.getElementById('player-Container');
    const children = pyalerContainer.children;
    const playerNumber = children.length;

    if (playerNumber == 5) {
        alert('not more than 5')
        return;

    }
    else {
        const playerContainer = document.getElementById('player-Container');
        const playerName = document.getElementById('player-nine-name');
        const player = playerName.innerText;
        const newLi = document.createElement("li");
        newLi.innerText = player;
        playerContainer.appendChild(newLi);

        const sButton = document.getElementById('player-nine');
        sButton.disabled = true;
        sButton.style.background = '#8DF29B';
    }


})

document.getElementById('claculate-btn').addEventListener('click', function () {
    const perPlayerCostElment = document.getElementById('per-player-cost');
    const perPlayerCostString = perPlayerCostElment.value;
    const perPlayerCost = parseFloat(perPlayerCostString);

    const playerExpenceElement = document.getElementById('player-expence');

    const pyalerContainer = document.getElementById('player-Container');
    const children = pyalerContainer.children;
    const playerNumber = children.length;
    // console.log(playerNumber);

    const totalPlayerExpence = perPlayerCost * playerNumber;
    playerExpenceElement.innerText = totalPlayerExpence;
    perPlayerCostElment.value = '';


})

document.getElementById('total-btn').addEventListener('click', function () {
    const playerExpenceElment = document.getElementById('player-expence');
    const playerExpenceString = playerExpenceElment.innerText;
    const playerExpence = parseFloat(playerExpenceString);

    const managerCostElement = document.getElementById('manager-cost');
    const managerCostString = managerCostElement.value;
    const managerCost = parseFloat(managerCostString);

    const coachCostElement = document.getElementById('coach-cost');
    const coachCostString = coachCostElement.value;
    const coachCost = parseFloat(coachCostString);

    const totalCostElement = document.getElementById('total-cost');
    const totalCost = playerExpence + managerCost + coachCost;
    totalCostElement.innerText = totalCost;

    managerCostElement.value = '';
    coachCostElement.value = '';

    const playerExpenceElement = document.getElementById('player-expence');
    playerExpenceElement.innerText = '00';

    console.log(perPlayerCost);

})

// const pyalerContainer = document.getElementById('player-Container');
// const children = pyalerContainer.children;
// const playerNumber = children.length;
// console.log(playerNumber);


