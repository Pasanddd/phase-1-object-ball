// showing scores for a player
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
  
//showing shoe size of a player
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
  
// showing the color of the team's shirts
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
  
// showing the team names
  function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
 //showing the player's name
  function playerNumbers(teamName) {
    let game = gameObject();
    let numbers = [];
    let team = teamName === game.home.teamName ? game.home : game.away;
    for (let player in team.players) {
      numbers.push(team.players[player].number);
    }
    return numbers;
  }
  
//showin the player's state
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
  
//showing the biggest shoe size of a player
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
//showing the most recorded scores
  function mostPointsScored() {
    let game = gameObject();
    let maxPoints = -Infinity;
    let playerWithMostPoints = "";
    for (let teamKey in game) {
      let team = game[teamKey];
      for (let player in team.players) {
        if (team.players[player].points > maxPoints) {
          maxPoints = team.players[player].points;
          playerWithMostPoints = player;
        }
      }
    }
    return playerWithMostPoints;
  }
  //showing the winner team
  function winningTeam() {
    let game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
    for (let player in game.home.players) {
      homePoints += game.home.players[player].points;
    }
    for (let player in game.away.players) {
      awayPoints += game.away.players[player].points;
    }
    if (homePoints > awayPoints) {
      return game.home.teamName;
    } else if (awayPoints > homePoints) {
      return game.away.teamName;
    } else {
      return "Tie";
    }
  }
//showing the player which has the longest name 
  function playerWithLongestName() {
    let game = gameObject();
    let longestName = "";
    for (let teamKey in game) {
      let team = game[teamKey];
      for (let player in team.players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }

//showing the player with the longest name had the most steals
  function doesLongNameStealATon() {
    let game = gameObject();
    let longestName = "";
    for (let teamKey in game) {
      let team = game[teamKey];
      for (let player in team.players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    
   
    let stealsOfLongestName = 0;
    for (let teamKey in game) {
      let team = game[teamKey];
      for (let player in team.players) {
        if (player === longestName) {
          stealsOfLongestName = team.players[player].steals;
          break;
        }
      }
    }
    
    
    let maxSteals = -Infinity;
    for (let teamKey in game) {
      let team = game[teamKey];
      for (let player in team.players) {
        if (team.players[player].steals > maxSteals) {
          maxSteals = team.players[player].steals;
        }
      }
    }
    
    
    return stealsOfLongestName === maxSteals;
  }
  