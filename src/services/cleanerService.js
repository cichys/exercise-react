

function clean(data) {
    try {
        const parsedData = JSON.parse(data);

        let results = [];
        for (let key in parsedData) {
            const items = parsedData[key];
            items.forEach((item) => {
                if (item.level === 0) {
                    results.push(item);
                } else if (item.level === 1) {
                    const parent = results.find(o => o.id === item.parent_id);
                    if (parent) {
                        parent.children.push(item);
                    }
                } else if (item.level === 2) {
                    results.forEach(o => {
                        o.children.forEach(child => {
                            if (child.id === item.parent_id) {
                                child.children.push(item);
                            }
                        });
                    });
                }
            });
        }
        return results;
    } catch (err) {
        return 'Not a valid JSON';
    }
}



export default clean;