
function getGithubRepos(since, cb, cbError) {
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    //headers.set('Authorization', 'Basic ' + Buffer.from('user:pw').toString('base64'));

    const params = since ? `?since=${since}` : '';

    return fetch(`https://api.github.com/repositories${params}`, {
        method: 'GET',
        headers: headers
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