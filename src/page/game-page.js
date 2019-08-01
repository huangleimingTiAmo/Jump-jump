import { scene } from '../scene/index'
import Cuboid from '../block/cuboid'
import Cylinder from '../block/cylinder'

export default class GamePage {
    constructor (callbacks) {
        this.callbacks = callbacks
    }

    init () {
    
        this.scene = scene
        this.scene.init()
        this.addInitBlock()
        this.render()
    }

    render () {
      this.scene.render()
      requestAnimationFrame(this.render.bind(this))
    }

    addInitBlock () {
      this.currentBlock = new Cuboid(-15, 0, 0) 
      this.scene.instance.add(this.currentBlock.instance)
      this.nextBlock = new Cylinder(23, 0, 0)
      this.scene.instance.add(this.nextBlock.instance)
      // const initDirection = 0
      // this.targetPosition = {
      //   x: 23,
      //   y: 0,
      //   z: 0
      // }
      // this.setDirection(initDirection)
    }

    restart () {
        console.log('game page restart')
    }



    show () {
      
    }
  
    hide () {
      
    }



    
}