async function searchGit (name) {

    const gitName = await fetch(`https://api.github.com/users/${name}`, {
        method: 'GET'
    })

    .then( async (response) => {
        if (response.ok) {
            const responseConvert = await response.json()
            localStorage.setItem('gitName', JSON.stringify(responseConvert))
            location.replace('./src/pages/profile.html')
        } else {
            location.replace('./src/pages/error.html')
        }
    })
    
    return gitName
}

const handleSearch = () => {
    const input = document.querySelector('.index__input')
    const button = document.querySelector('.index__button')

    button.addEventListener('click', () => {
        const gitName = input.value

        localStorage.setItem('gitName', gitName)
        searchGit(gitName)
    })
}

handleSearch()