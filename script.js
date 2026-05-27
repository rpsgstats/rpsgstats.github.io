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
