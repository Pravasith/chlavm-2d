import Character from '../Prototypes/Character'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Experience } from '../Experience'
import { LOAD_ITEMS } from '../sources'
import UserInterface from '../UI/UI'
import { gsap } from 'gsap'

export default class Plini extends Character {
    model: GLTF
    ui: UserInterface

    constructor() {
        const model = Experience.resources.items[LOAD_ITEMS.PLINI_MODEL] as GLTF
        super(model)

        this.model = model

        this.ui = Experience.ui

        this.ui.on('rotate-model', (buttonName: string) => {
            this.rotateModel(buttonName)
        })
    }

    rotateModel(angle: string) {
        const states = {
            0: new Float32Array([0.09218584275376666, 0.3678224906409859, 5.80748957890343]),
            1: new Float32Array([-1.1204595423624066, 0.6824187558411641, 0.7976564826834576]),
            2: new Float32Array([-3.266881568528646, 0.5267486456275916, 0.09130718216496748]),
        }

        gsap.to(this.camera.position, {
            x: states[Number(angle)][0],
            y: states[Number(angle)][1],
            z: states[Number(angle)][2],
        })
    }
}
