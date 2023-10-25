import { EventEmitter } from './Utils/EventEmitter'

export default class UserInterface extends EventEmitter {
    constructor() {
        super()
        this.createElement()
    }

    createElement() {
        const x = document.getElementById('root')
        const y = document.createElement('h1')

        y.innerText = 'JS created Element'
        x?.appendChild(y)

        y.addEventListener('click', () => {
            console.log('Element Clicked')
        })
    }
}
