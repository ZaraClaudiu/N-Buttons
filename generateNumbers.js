function generateButtons() {
    var numberOfButtons = $('#generate').val();
    var correctButton = Math.floor(Math.random() * numberOfButtons) + 1;
    for (i = 1; i <= numberOfButtons; i++) {
        $('#space').append('<button type="button" id="' + i + '"class="btn btn-secondary m-1"' +
        'onclick="return checkButton(' + correctButton + ', ' + i + ');">Button ' + i + '</button>');
        console.log("The winner is: " + correctButton);
    }
    return false;
}

function checkButton(correctButton, clickedButton) {
    if (correctButton == clickedButton)
        alert("Congratulations!");
    else {
        alert("Try again!");
    }
    $('#space').append('<button class="btn btn-primary m-1"' +
    'onclick=" restart();">Restart!!</button>');
    return false;
}

function restart(){
    location.reload();
    return true;
}    


