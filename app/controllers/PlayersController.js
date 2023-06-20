import { AppState } from "../AppState.js";




function _drawPlayers() {
  // console.log('this is the players');

  let players = AppState.players

  // let template = ''

  // players.forEach(player => template += player.PlayerCardTemplate)


}

export class PlayersController {
  constructor() {
    // NOTE ALWAYS DO FIRST
    console.log('players controller logged');
    console.log(AppState.players)
    _drawPlayers()
  }

  sayHello() {
    console.log('hello does this work???');
  }
}



// PUBLIC FOR USERS
