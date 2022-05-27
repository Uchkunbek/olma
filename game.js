const team = {
    _players = [
        Temur = {
            firstName,
            lastName,
            age
        },
        Milana = {
            firstName,
            lastName,
            age
        },
        Jasur = {
            firstName,
            lastName,
            age
        }
    ],
    _games = [
        Football = {
            opponent,
            teamPoints,
            opponentPoints
        },
        Tennis = {
            opponent,
            teamPoints,
            opponentPoints
        },
        Kurash = {
            opponent,
            teamPoints,
            opponentPoints
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        player = {
            newFirstName,
            newLastName,
            newAge
        };
        _players.push('player');
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        game = {
            newOpponent,
            newTeamPoints,
            newOpponentPoints
        };
        _games.push('game');
    }

}



team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
console.log(team._players)