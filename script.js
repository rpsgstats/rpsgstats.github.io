
const playerList =
document.getElementById("playerList");

const colors = [
"red",
"blue",
"green",
"orange",
"purple"
];

const positions = [
"Goalkeeper",
"Defender",
"Midfielder",
"Attacker",
"Striker"
];

players.forEach((player,index)=>{

const color =
colors[index % colors.length];

const position =
positions[index % positions.length];

const initials =
player.substring(0,2).toUpperCase();

playerList.innerHTML += `

<div class="player-card"
onclick="window.location='player.html?name=${encodeURIComponent(player)}'">

<div class="player-left">

<div class="player-pfp ${color}">
${initials}
</div>

<div>

<div class="player-name">
${player}
</div>

<div class="player-row">

<div class="rank">
Bronze I
</div>

<div class="position">
${position}
</div>

</div>

<div class="player-stats">
0G • 0A • 0CS • 0B
</div>

</div>

</div>

<div class="player-right">

<div class="points">
0
</div>

<div class="pts">
PTS
</div>

</div>

</div>

`;

});

/* SEARCH */

document.getElementById("search")
.addEventListener("input",e=>{

let value =
e.target.value.toLowerCase();

let cards =
document.querySelectorAll(".player-card");

cards.forEach(card=>{

let name =
card.querySelector(".player-name")
.innerText.toLowerCase();

if(name.includes(value)){
card.style.display="flex";
}
else{
card.style.display="none";
}

});

});
