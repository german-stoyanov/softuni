let data = require('./data');

function sortAndFilter() {
    function sort(property) {
        return data.sort((a, b) => a[property].localeCompare(b[property]));
    }

    function filter(property, value) {
        let result = [];
        for (let entry of data) {
            if (entry.hasOwnProperty(property)) {
                if (entry[property] === value) {
                    result.push(entry);
                }
            }
        }

        return result;
    }

    return {
        sort,
        filter,
    }
}

module.exports = {sortAndFilter};