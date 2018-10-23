

function clean(data) {
    try {
        const parsedData = JSON.parse(data);
    } catch (err) {
        return 'Not a valid JSON';
    }
}



export default clean;