import GamePage from '../page/game-page'
import GameOverPage from '../page/game-over-page'
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
        this.gameOverPage.init({
            scene:this.gamePage.scene
        })
    }
    
}

export default new GameView()