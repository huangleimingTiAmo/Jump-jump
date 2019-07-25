import gameView from './view'
import gameModel from './model'

class GameController {
    constructor () {
        this.gameView = gameView
        this.gameModel = gameModel
    }

    initPages () {
        const gamePageCallbacks = {
            showGameOverPage: this.showGameOverPage
        }
        this.gameView.initGamePage(gamePageCallbacks)
    }
}