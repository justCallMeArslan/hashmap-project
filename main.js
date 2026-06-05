function HahsMap(loadFactor = 0.75) {

    let capacity = loadFactor === 0.75 ? 16 : 0;

    return {
        loadFactor,
        capacity
    }
}