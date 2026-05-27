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

/* HOMEPAGE */

if(playerList){

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

}

/* PLAYER PROFILE PAGE */

const params =
new URLSearchParams(window.location.search);

const player =
params.get("name");

const profileContainer =
document.getElementById("profileContainer");

if(profileContainer && player){

profileContainer.innerHTML = `

<div class="profile-card">

<div class="top-profile">

<div class="profile-pic"></div>

<div>

<div class="big-name">
${player}
</div>

<div class="player-rank">
Bronze I
</div>

</div>

</div>

<div class="tags">

<div class="tag">
⚽ Player
</div>

<div class="tag">
🌎 NA
</div>

<div class="tag">
🏆 RPSG
</div>

</div>

<div class="main-stats">

<div class="big-stat-card">

<div class="stat-title">
POINTS
</div>

<div class="big-number">
0
</div>

</div>

<div class="big-stat-card">

<div class="stat-title">
MARKET VALUE
</div>

<div class="big-number">
£0
</div>

</div>

</div>

<div class="progress-section">

<div class="stat-title">
RANK PROGRESS
</div>

<div class="progress-bar">
<div class="progress-fill"></div>
</div>

</div>

<div class="small-grid">

<div class="small-card">

<div class="small-title">
GOALS
</div>

<div class="small-number">
0
</div>

</div>

<div class="small-card">

<div class="small-title">
ASSISTS
</div>

<div class="small-number">
0
</div>

</div>

<div class="small-card">

<div class="small-title">
BLOCKS
</div>

<div class="small-number">
0
</div>

</div>

<div class="small-card">

<div class="small-title">
CLEAN SHEETS
</div>

<div class="small-number">
0
</div>

</div>

</div>

</div>

`;

}
