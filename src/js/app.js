var socket = io();
let playerName = "";
let uuid = "";

function checkUuid() {
    if (localStorage.getItem('uuid')){
        uuid = localStorage.getItem('uuid');
        socket.emit('connectP', localStorage.getItem('uuid'));
    } else {
        document.getElementById("joinDiv").classList.remove("hiden");
        document.getElementById("quitDiv").classList.add("hiden");
    }
}

function getPlayerList(){
    socket.emit('getList', " ");
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

socket.on('uuid', data => {
    localStorage.setItem('uuid', data);
    uuid = data;
    enterParty();
});

socket.on('connectP', data => {
    if (data != "//error"){
        playerName = data;
        enterParty()
    }
})

socket.on('playerList', pList => {
    let l = pList.split("//")
    removeAllChildNodes(document.getElementById("playerList"))
    for (element in l){
        if (l[element] != ""){
            document.getElementById("playerList").innerHTML += `<span>&#x2bcc; ${l[element]}</span>`
        }
    }
})

socket.on('newMessage', data => {
    console.log(`${data.sender} said ${data.message}`)
    let date = new Date();
    let past = document.getElementById("chatDisplay").innerHTML
    document.getElementById("chatDisplay").innerHTML = `
    <div>
        <span class="pseudo">${data.sender} - ${date.getHours()}:${date.getMinutes()}</span>
        <p class="message">${data.message}</p>
    </div>
    `+ past
})

function enterParty(){
    document.getElementById("joinDiv").classList.add("hiden")
    document.getElementById("playerNameDisplay").innerText = `Your name : ${playerName}`
    document.getElementById("quitDiv").classList.remove("hiden")
}

window.addEventListener('load', () => { checkUuid(); } );

document.getElementById("joinButton").addEventListener('click', ()=> {
    // input vide
    if (document.getElementById("joinName").value == ""){ alert("please enter a valide name before joining"); return; }
    
    socket.emit('joinRequest', document.getElementById("joinName").value);
    playerName = document.getElementById("joinName").value;
});
document.getElementById("quitButton").addEventListener('click', ()=> {
    socket.emit('quitRequest', uuid);
    document.getElementById("joinDiv").classList.remove("hiden");
    document.getElementById("quitDiv").classList.add("hiden");
    localStorage.removeItem("uuid");
})

document.getElementById("chatSendInput").addEventListener('keyup', event =>{
    if (event.keyCode == 13) {sendMsg()}
})
document.getElementById("chatSendMessage").addEventListener('click', sendMsg())
function sendMsg(){
    let mContent = document.getElementById("chatSendInput").value;
    if (mContent != ""){
        socket.emit("SendMessage", {"uuid" : uuid, "content": mContent})
        document.getElementById("chatSendInput").value = "";
    }
}