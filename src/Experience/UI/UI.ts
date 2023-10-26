interface UIState {
    showModal: boolean
}

export default class UserInterface {
    static instance: UserInterface
    static state: UIState

    modal: HTMLDivElement | null
    closeButton: HTMLButtonElement | null

    private constructor() {
        UserInterface.state = { showModal: false }
        this.modal = document.querySelector<HTMLDivElement>('.modal')
        this.closeButton = document.querySelector<HTMLButtonElement>('.close-modal-btn')

        if (this.modal) this.updateModal()
    }

    private updateModal() {
        if (this.closeButton) {
            this.closeButton.onclick = e => {
                if (this.modal) {
                    if (UserInterface.state.showModal) {
                        this.modal.style.display = 'block'
                    } else {
                        this.modal.style.display = 'none'
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
