import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Experience } from '../Experience'
import { Camera } from 'three'

export default class Character {
    protected model: GLTF
    protected scene: THREE.Scene
    protected camera: Camera

    constructor(model: GLTF) {
        this.model = model
        this.scene = Experience.scene
        this.setModel()

        this.camera = Experience.camera.instance
    }

    setModel() {
        if (!this.model) return
        else {
            this.scene.add(this.model.scene)
        }
    }
}
