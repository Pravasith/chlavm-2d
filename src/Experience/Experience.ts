import Sizes from './Utils/Sizes'
import Camera from './Camera'
import Renderer from './Renderer'
import Time from './Time'
import * as THREE from 'three'
import World from './World/World'
import Resources from './Utils/Resources'
import sources from './sources'
import UI from './UI/UI'
import UserInterface from './UI/UI'

export class Experience {
    static instance: Experience
    static sizes: Sizes
    static camera: Camera
    static canvas: HTMLCanvasElement
    static time: Time
    static scene: THREE.Scene
    static renderer: Renderer
    static world: World
    static resources: Resources
    static ui: UI

    private constructor(canvas: HTMLCanvasElement) {
        // UI
        Experience.ui = UserInterface.init()

        // Options
        Experience.canvas = canvas

        // Setup
        Experience.sizes = new Sizes()
        Experience.time = new Time()
        Experience.scene = new THREE.Scene()
        Experience.camera = new Camera()
        Experience.renderer = new Renderer()
        Experience.resources = new Resources(sources)
        Experience.world = new World()

        Experience.sizes.on('resize', () => {
            this.resize()
        })

        Experience.time.on('tick', () => {
            this.update()
        })
    }

    static getInstance(): Experience {
        const canvas = document.querySelector<HTMLCanvasElement>('canvas#webgl')

        if (!Experience.instance && canvas) {
            Experience.instance = new Experience(canvas)
        }

        return Experience.instance
    }

    resize() {
        Experience.camera.resize()
        Experience.renderer.resize()
    }

    update() {
        Experience.camera.update()
        Experience.renderer.update()
    }
}
