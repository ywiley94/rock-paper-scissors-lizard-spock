document.querySelector('#play').addEventListener('click', makeReq)
document.querySelector('#reset').addEventListener('click', reset)

function makeReq(){
    var userChoice = prompt("Do you choose rock, paper, scissors, lizard, or spock?")
    document.querySelector('#play').style.display = 'none'

    fetch(`/api?student=${userChoice}`)
        .then(response => response.json())
        .then((data) => {
        console.log(data);
        document.querySelector("#output").textContent = data.result;
    });

}

function reset() {
    reload = location. reload();
    
}
