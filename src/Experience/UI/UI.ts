import { EventEmitter } from '../Utils/EventEmitter'

let i_m = 'cook'

i_m

interface UIState {
    showModal: boolean
}

export default class UserInterface extends EventEmitter {
    static instance: UserInterface
    static state: UIState

    root_div: HTMLDivElement | null
    closeButton: HTMLButtonElement | null
    description: HTMLParagraphElement | null

    private constructor() {
        super()

        UserInterface.state = { showModal: false }
        this.root_div = document.querySelector<HTMLDivElement>('#modal-root')
        this.closeButton = document.querySelector<HTMLButtonElement>('.close-modal-btn')
        this.description = document.querySelector<HTMLParagraphElement>('.description')

        if (this.root_div) this.updateModal()

        const progressBar = document.getElementById('progress-bar')
        if (progressBar) {
            const progressButtons = progressBar.children

            for (let i = 0; i < progressButtons.length; ++i) {
                let child = progressButtons[i]
                child.addEventListener('click', () => {
                    this.trigger('rotate-model', [child.className])
                    this.updateDescription(child.className)
                })
            }
        }
    }

    private updateModal() {
        if (this.closeButton) {
            if (this.root_div) this.root_div.style.display = 'none'

            this.closeButton.onclick = e => {
                if (this.root_div) {
                    if (UserInterface.state.showModal) {
                        this.root_div.style.display = 'block'
                    } else {
                        this.root_div.style.display = 'none'
                    }
                }
            }
        }
    }

    static init() {
        if (!UserInterface.instance) {
            UserInterface.instance = new UserInterface()
        }

        return this.instance
    }

    private updateDescription(className: string) {
        const state = {
            0: `This is a side angle of the model. This is side angle of the model. This is a side angle of the model. This is side angle of the model. `,
            1: `The guns looks pretty sick, eh? The guns looks pretty sick, eh? Why thank you. I modelled them myself. The guns looks pretty sick, eh? The guns looks pretty sick, eh? Why thank you. I modelled them myself. `,
            2: `Look out!! He's gonna shoot! Look out!! He's gonna shoot! Look out!! He's gonna shoot! Look out!! He's gonna shoot! Look out!! He's gonna shoot! Look out!! He's gonna shoot! Look out!! He's gonna shoot! `,
        }

        if (this.description) {
            this.description.innerText = state[Number(className)]
        }
    }
}
