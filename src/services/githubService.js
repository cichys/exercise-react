import axios from 'axios';

function getGithubRepos(since) {
    const params = since ? `?since=${since}` : '';

    return axios(`https://api.github.com/repositories${params}`, {
        method: 'get',
        // auth: {
        //     username: '',
        //     password: ''
        // }
    });
}


export default getGithubRepos;