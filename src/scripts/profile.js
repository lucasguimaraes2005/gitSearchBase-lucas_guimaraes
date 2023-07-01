const criarCabecalho = (user) => {
    const img = document.querySelector('.image__profile')
    const name = document.querySelector('.profile__name')

    name.innerHTML = ''

    img.src = user.avatar_url
    img.alt = user.name

    name = user.name

    const button = document.querySelector('.header__button')

    button.addEventListener('click', () => {
        location.replace('../../')
    })

}
