import * as THREE from 'three'
import { Experience } from '../Experience'

export default class Environment {
    scene: THREE.Scene
    sunLight: THREE.DirectionalLight
    ambientLight: THREE.AmbientLight
    pointLight: THREE.PointLight

    constructor() {
        this.scene = Experience.scene
        this.setSunLight()
    }

    setSunLight() {
        this.sunLight = new THREE.DirectionalLight('#ffffff', 1)
        this.ambientLight = new THREE.AmbientLight(0x404040) // soft white light

        this.sunLight.castShadow = true
        this.sunLight.shadow.camera.far = 15
        this.sunLight.shadow.mapSize.set(1024, 1024)
        this.sunLight.shadow.normalBias = 0.05
        this.sunLight.position.set(3.5, 2, -1.25)

        this.pointLight = new THREE.PointLight(0xffffff, 2, 300)
        this.pointLight.position.set(0, 50, 0)

        this.scene.add(this.sunLight)
        this.scene.add(this.ambientLight)
        this.scene.add(this.pointLight)
    }
}
