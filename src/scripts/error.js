const returnButton = () => {
    const backBtn = document.querySelector('.error__button')

    backBtn.addEventListener('click', () => {
        location.replace('../../')
    })
}

returnButton()