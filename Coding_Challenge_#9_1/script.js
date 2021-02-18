const game = {
  team_1: "Bayern_Munich",
  team_2: "Borrussia_Dortmund",

  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies ",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weiml",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],

  score: "4.0",
  scored: ["Lewandovski", "Gnarby", "Lewandovski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players_1, players_2] = game.players;
console.log(players_1, players_2);

const [gk_bayern, ...fieldPlayers_bayern] = players_1;

console.log(gk_bayern);
console.log(fieldPlayers_bayern);

const allPlayers = [...players_1, ...players_2];
console.log(allPlayers);

const players1Final = [...players_1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const { team1, x, team2 } = game.odds;
console.log(team1);
console.log(x);
console.log(team2);
