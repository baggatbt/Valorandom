
let agents = ["agentBreach", "agentSage", "agentPhoenix", "agentJett", "agentSova","agentCypher","agentBrimstone","agentOmen","agentViper","agentRaze"];


function pickAgent(){
    let numberOfAgent = Math.round(Math.random() * 9);
    let agentChosen = agents[numberOfAgent];
    var images = document.getElementsByTagName('img');
        for (i = 0; i < images.length;i++ ) {
        images[i].style.display = "none";
        }
    document.getElementById(agentChosen).style.display = "block"

}






