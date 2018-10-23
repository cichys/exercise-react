

function clean(data) {
    try {
        const parsedData = JSON.parse(data);

        let results = [];
        for (let key in parsedData) {
            parsedData[key].forEach((item) => {
                functionByLevel[item.level](item, results);
            });
        }
        return results;
    } catch (err) {
        return 'Not a valid JSON';
    }
}


const functionByLevel = {
    0: (item, results) => {
        results.push(item);
    },
    1: (item, results) => {
        results.find(o => o.id === item.parent_id).children.push(item);
    },
    2: (item, results) => {
        results.forEach(o => {
            o.children.forEach(child => {
                if (child.id === item.parent_id) {
                    child.children.push(item);
                }
            });
        });
    }
}


export default clean;