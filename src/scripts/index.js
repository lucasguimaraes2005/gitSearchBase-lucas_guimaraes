async function searchGit (gitName) {

    const gitName = await fetch(`https://api.github.com/users/${gitName}`, {
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
    
}