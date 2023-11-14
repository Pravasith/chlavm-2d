import { EventEmitter } from '../Utils/EventEmitter'


export default class UserInterface extends EventEmitter {
    static instance: UserInterface

    root_div: HTMLDivElement | null
    rightBtn: HTMLButtonElement | null
    description: HTMLParagraphElement | null
    count:number 

    private constructor() {
        super()
        this.rightBtn = document.querySelector<HTMLButtonElement>('.right-arrow-btn')

        this.description = document.querySelector<HTMLParagraphElement>('.gallery-description')
        this.count = 0;


        if (this.rightBtn) {
            this.rightBtn.addEventListener('click', () => {
                this.trigger('rotate-model')
                this.updateDescription((++this.count) % 3)
            })
        }
    }


    static init() {
        if (!UserInterface.instance) {
            UserInterface.instance = new UserInterface()
        }

        return this.instance
    }

    private updateDescription(className: number) {
        const state = {
            0: `The Inti Raymi was established during the reign of Pachacutec Inca Yupanqui (1438-1471), in veneration of the Sun god, Inti.  It was celebrated on the winter solstice and symbolized the renewal of the Sun, essential for crops. Cusco and sacred places were scenes of rituals, where the emperor made offerings to the Sun in a spectacular ceremony with dances and music. However, the arrival of the Spanish conquistadors in the 16th century caused its ban. Despite this, the Inti Raymi resurfaced in the 20th century. Today it persists in Peru and in several Andean regions of Ecuador and is celebrated by the diasporas of these countries in Canada and other places in the world.`,
            1: `The guns looks pretty sick, eh? The guns looks pretty sick, eh? Why thank you. I modelled them myself. The guns looks pretty sick, eh? The guns looks pretty sick, eh? Why thank you. I modelled them myself. `,
            2: `Inti Raymi is an ancestral Inca festival in honor of the god Inti (Sun) celebrated by the Andean indigenous peoples of Peru and Ecuador. The clothing of the participants plays an essential role not only in this celebration but in their daily lives. The garments are notable for their elaborate designs, fabrics, colors and accessories that reflect the rich history, spirituality and culture of its people. Music and dance complement these outfits, creating a unique experience that can now also be enjoyed in Canada.`,
        }

        if (this.description) {
            this.description.innerText = state[Number(className)]
        }
    }
}
