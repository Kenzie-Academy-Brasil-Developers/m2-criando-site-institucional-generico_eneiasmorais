function handleModal(){
    const button1 = document.querySelector('#subscribe__button')
    const button2 = document.querySelector('#subscribe__button__2')
    const container = document.querySelector('#modal__container')

    button1.addEventListener('click', () => {
        container.showModal()
        closeModal()
    })

    button2.addEventListener('click', () => {
        container.showModal()
        closeModal()
    })

}
handleModal()


function closeModal(){
    const closeButton = document.querySelector('#close__modal')
    const container = document.querySelector('#modal__container')

    closeButton.addEventListener('click', () => {
        container.close()
    })
}
