import camera from './camera'

class Scene {
    constructor () {
        // this.instance = null
    }
  
    init () {
      this.instance = new THREE.Scene()
      const renderer = this.renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            canvas: canvas,
            preserveDrawingBuffer: true,
        })

        this.camera = camera
        this.camera.init()

        this.axesHelper = new THREE.AxesHelper(100)
        this.instance.add(this.axesHelper)

        this.instance.add(this.camera.instance)

     
    }
  
    // reset () {
    //   this.camera.reset()
    //   this.light.reset()
    // }
  
    render () {
      this.renderer.render(this.instance, this.camera.instance)
    }
  
    // updateCameraPosition (targetPosition) {
    //   this.camera.updatePosition(targetPosition)
    //   this.light.updatePosition(targetPosition)
    // }
  
    // addScore (scoreInstance) {
    //   this.currentScore = scoreInstance
    //   this.camera.instance.add(scoreInstance)
    //   scoreInstance.position.x = -20
    //   scoreInstance.position.y = 40
    // }
  
    // updateScore (scoreInstance) {
    //   this.camera.instance.remove(this.currentScore)
    //   this.currentScore = scoreInstance
    //   this.camera.instance.add(scoreInstance)
    //   scoreInstance.position.x = -20
    //   scoreInstance.position.y = 40
    // }
  }
  
  export default new Scene()