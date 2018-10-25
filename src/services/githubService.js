
function getGithubRepos(cb, cbError) {
    return fetch('https://api.github.com/repositories', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then((response) => {
        return response.json();
    }).then((data) => {
        if (cb) {
            cb(data);
        }
    }).catch((e) => {
        console.log('Error!', e);
        if (cbError) {
            cbError();
        }
    });
}


export default getGithubRepos;