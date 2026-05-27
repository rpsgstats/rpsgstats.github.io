window.onload = function(){

const players = [

".astroflow!",
"ado",
"adrian",
"ammar",
"AntonioTheSt.",
"Arditaaaa",
"ATOMIC",
"batata jr",
"bebeh=sumo",
"Brody",
"ccxze",
"chico",
"DEVVYSNTNXVA",
"diablo.tg",
"DM.Vrfs",
"Dutch.",
"el bicho",
"ET9",
"Fart poo 42",
"Foden",
"Ghost=Him",
"Goob",
"Hybrid9111",
"Hyper. Vrfs pro",
"inzagi",
"JB-KAFZ",
"Joshwini",
"JT.vrfs",
"Kylian mbappe",
"Luki",
"Lucas",
"l1ght",
"MEMOPRIMEWC",
"qmxrk",
"rifleken",
"Saiku",
"sky",
"slax",
"Snowzzz",
"sweatyballs.VRFS",
"type",
"vinassotuff",
"Vortex",
"wokethecm.",
"xd234jsjs",
"Yamal?",
"ZanzTG",
"ZZZ",
"Zta."

];

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

<div class="player-card">

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

}
