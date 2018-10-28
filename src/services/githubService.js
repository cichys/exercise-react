import axios from 'axios';

function getGithubRepos(since) {
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    //headers.set('Authorization', 'Basic ' + Buffer.from('user:pw').toString('base64'));

    const params = since ? `?since=${since}` : '';

    return axios.get(`https://api.github.com/repositories${params}`, {
        headers: headers
    });
}


export default getGithubRepos;