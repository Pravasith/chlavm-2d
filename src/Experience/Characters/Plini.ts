import Character from '../Prototypes/Character'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Experience } from '../Experience'
import { LOAD_ITEMS } from '../sources'
import UserInterface from '../UI/UI'
import { gsap } from 'gsap'
import { Vector3 } from 'three'

export default class Plini extends Character {
    model: GLTF
    ui: UserInterface
    count: number
    angle: number

    constructor() {
        const model = Experience.resources.items[LOAD_ITEMS.YURT_MODEL] as GLTF
        super(model)

        this.model = model
        this.count = 0

        this.ui = Experience.ui
        this.camera.position.set(-35.043867685201604, -1.258150555244803, 24.441003285499917)

        this.ui.on('rotate-model', () => {
            this.rotateModel()
        })
    }

    rotateModel() {
        console.log(this.camera.position)

        const states = {
            0: new Float32Array([-20.145022992701417, 8.687155035837007, 10.479173446058661]),
            1: new Float32Array([15.50100152006846, 8.804892463536522, -1.265140965839641]),
            2: new Float32Array([-35.043867685201604, -1.258150555244803, 24.441003285499917]),
        }

        this.count++
        this.angle = this.count % 3

        gsap.to(this.camera.position, {
            x: states[Number(this.angle)][0],
            y: states[Number(this.angle)][1],
            z: states[Number(this.angle)][2],
        })
    }
}
