interface UIState {
    showModal: boolean
}

export default class UserInterface {
    static instance: UserInterface
    static state: UIState

    root_div: HTMLDivElement | null
    closeButton: HTMLButtonElement | null

    private constructor() {
        UserInterface.state = { showModal: false }
        this.root_div = document.querySelector<HTMLDivElement>('#modal-root')
        this.closeButton = document.querySelector<HTMLButtonElement>('.close-modal-btn')

        if (this.root_div) this.updateModal()
    }

    private updateModal() {
        if (this.closeButton) {
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

        // const root = document.getElementById('root')

        // const x = document.getElementsByClassName('inner-root')[0]
        // const y = document.createElement('h1')
        //
        // y.innerText = 'Singleton created Element'
        // x?.appendChild(y)
        //
        // y.addEventListener('click', () => {
        //     console.log('Element Clicked')
        // })
    }

    static init() {
        if (!UserInterface.instance) {
            UserInterface.instance = new UserInterface()
        }

        return this.instance
    }
}
