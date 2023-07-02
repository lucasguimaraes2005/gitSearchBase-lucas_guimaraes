const criarCabecalho = () => {
    
    const user = JSON.parse(localStorage.getItem('gitName'))
    
    
    const img = document.querySelector('.image__profile')
    const username = document.querySelector('.profile__name')

    

    img.src = user.avatar_url
    img.alt = user.name

    username.innerHTML = user.name

    const button = document.querySelector('.header__button')

    button.addEventListener('click', () => {
        location.replace('../../')
    })

}

const renderizarRepositorios = async () => {
    
    const user = JSON.parse(localStorage.getItem('gitName'))

    const repositorios = await fetch(`https://api.github.com/users/${user.name}/repos`, {
        method: 'GET'
    })
    .then( async (response) => {
        if (response.ok) {
            const responseConvert = await response.json()
        } 
    })

    const mainList = document.querySelector('.profile__ul')

    repositorios.forEach((repositorio) => {
        const li = document.createElement('li')
        const h4 = document.createElement('h4')
        const p = document.createElement('p')
        const a = document.createElement('a')

        h4.innerText = repositorio.name
        
        if (repositorio.description) {
            p.innerText = repositorio.description
        } else {
            p.innerText = "Repositório sem descrição"
        }

        a.innerText = "Repositório"

        a.href = repositorio.html_url
        a.target_blank

        li.append(h4, p, a)
        mainList.append(li)
    })
}

renderizarRepositorios()
criarCabecalho()