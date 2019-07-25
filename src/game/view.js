import GamePage from '../pages/game-page'
import GameOverPage from '../pages/game-over-page'
class GameView {
    constructor () {
        
    }

    showGameOverPage () {
        this.gameOverPage.show()
    }

    restartGame () {
        this.gamePage.restart()
    }

    initGamePage (callbacks) {
        this.gamePage = new GamePage(callbacks)
        this.gamePage.init()
    }

    initGameOverPage (callbacks) {
        this.gameOverPage = new GameOverPage(callbacks)
        this.gameOverPage.init()
    }
    
}

export default new GameView()