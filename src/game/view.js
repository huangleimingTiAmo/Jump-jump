import GamePage from '../pages/game-page'
import GameOverPage from '../pages/game-over-page'
class GameView {
    constructor () {
        
    }

    initGamePage (callbacks) {
        this.gamePage = new GamePage(callbacks)
        this.gamePage.init()
    }

    initGameOverPage (callbacks) {
        
    }
    
}

export default new GameView()