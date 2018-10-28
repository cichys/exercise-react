import axios from 'axios';

function getGithubRepos(since) {
    const params = since ? `?since=${since}` : '';

    return axios.get(`https://api.github.com/repositories${params}`, {
        // auth: {
        //     username: '',
        //     password: ''
        // }
    });
}


export default getGithubRepos;