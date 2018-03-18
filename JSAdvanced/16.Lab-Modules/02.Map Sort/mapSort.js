function mapSort(map, sortFn) {
    let mapArr = [...map];
    if (sortFn !== undefined) {
        mapArr = mapArr.sort(sortFn);
    } else {
        mapArr = mapArr.sort((a, b) => a[0] > b[0]);
    }

    return new Map(mapArr);
}

module.exports = mapSort;