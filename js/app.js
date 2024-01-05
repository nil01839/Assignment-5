function selectPlayer(playersName, btnId) {
    const pyalerContainer = document.getElementById('player-Container');
    const children = pyalerContainer.children;
    const playerNumber = children.length;

    if (playerNumber == 5) {
        alert('not more than 5')


    }
    else {
        const playerContainer = document.getElementById('player-Container');
        const playerName = document.getElementById(playersName);
        const player = playerName.innerText;
        const newLi = document.createElement("li");
        newLi.innerText = player;
        playerContainer.appendChild(newLi);

        const sButton = document.getElementById(btnId);
        sButton.disabled = true;
        sButton.style.background = '#8DF29B';


    }
}
document.getElementById('player-one').addEventListener('click', function () {

    selectPlayer('player-one-name', 'player-one');
    

})
document.getElementById('player-two').addEventListener('click', function () {

    selectPlayer('player-two-name', 'player-two');
    

})
document.getElementById('player-three').addEventListener('click', function () {

    selectPlayer('player-three-name', 'player-three');
    

})
document.getElementById('player-four').addEventListener('click', function () {

    selectPlayer('player-four-name', 'player-four');
    

})
document.getElementById('player-five').addEventListener('click', function () {

    selectPlayer('player-five-name', 'player-five');
   

})
document.getElementById('player-six').addEventListener('click', function () {

    selectPlayer('player-six-name', 'player-six');
    

})
document.getElementById('player-seven').addEventListener('click', function () {

    selectPlayer('player-seven-name', 'player-seven');
    

})
document.getElementById('player-eight').addEventListener('click', function () {

    selectPlayer('player-eight-name', 'player-eight');
    

})
document.getElementById('player-nine').addEventListener('click', function () {

    selectPlayer('player-nine-name', 'player-nine');
    

})


document.getElementById('claculate-btn').addEventListener('click', function () {
    const perPlayerCostElment = document.getElementById('per-player-cost');
    const perPlayerCostString = perPlayerCostElment.value;
    const perPlayerCost = parseFloat(perPlayerCostString);

    if (isNaN(perPlayerCost)) {
        alert('Please enter a number!');
        return;
    }

    else {
        const playerExpenceElement = document.getElementById('player-expence');

        const pyalerContainer = document.getElementById('player-Container');
        const children = pyalerContainer.children;
        const playerNumber = children.length;
        

        const totalPlayerExpence = perPlayerCost * playerNumber;
        playerExpenceElement.innerText = totalPlayerExpence;
        perPlayerCostElment.value = '';
    }


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

    if (isNaN(managerCost && coachCost)) {
        alert('Please enter a number!');
        return;
    }

    else {
        const totalCostElement = document.getElementById('total-cost');
        const totalCost = playerExpence + managerCost + coachCost;
        totalCostElement.innerText = totalCost;

        managerCostElement.value = '';
        coachCostElement.value = '';

        const playerExpenceElement = document.getElementById('player-expence');
        playerExpenceElement.innerText = '00';
    }

    

})


