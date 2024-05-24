// 1. numPointsScored(playerName)
function numPointsScored(playerName) {
    let game = gameObject();
    for (let teamKey in game) {
      let team = game[teamKey];
      for (let player in team.players) {
        if (player === playerName) {
          return team.players[player].points;
        }
      }
    }
    return "Player not found";
  }
  
  // 2. shoeSize(playerName)
  function shoeSize(playerName) {
    let game = gameObject();
    for (let teamKey in game) {
      let team = game[teamKey];
      for (let player in team.players) {
        if (player === playerName) {
          return team.players[player].shoe;
        }
      }
    }
    return "Player not found";
  }
  
  // 3. teamColors(teamName)
  function teamColors(teamName) {
    let game = gameObject();
    if (game.home.teamName === teamName) {
      return game.home.colors;
    } else if (game.away.teamName === teamName) {
      return game.away.colors;
    } else {
      return "Team not found";
    }
  }
  
  // 4. teamNames()
  function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  // 5. playerNumbers(teamName)
  function playerNumbers(teamName) {
    let game = gameObject();
    let numbers = [];
    let team = teamName === game.home.teamName ? game.home : game.away;
    for (let player in team.players) {
      numbers.push(team.players[player].number);
    }
    return numbers;
  }
  
  // 6. playerStats(playerName)
  function playerStats(playerName) {
    let game = gameObject();
    for (let teamKey in game) {
      let team = game[teamKey];
      for (let player in team.players) {
        if (player === playerName) {
          return team.players[player];
        }
      }
    }
    return "Player not found";
  }
  
  // 7. bigShoeRebounds()
  function bigShoeRebounds() {
    let game = gameObject();
    let maxShoeSize = -Infinity;
    let rebounds = 0;
    for (let teamKey in game) {
      let team = game[teamKey];
      for (let player in team.players) {
        if (team.players[player].shoe > maxShoeSize) {
          maxShoeSize = team.players[player].shoe;
          rebounds = team.players[player].rebounds;
        }
      }
    }
    return rebounds;
  }
  