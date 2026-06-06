function HashMap(loadFactor = 0.75) {

    let capacity = loadFactor === 0.75 ? 16 : 0; // if lF = 0.75 , cap = 16

    function hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
        }
        return hashCode;
    }

    function set(key, value) {
        
    }

    return {
        loadFactor,
        hash
    }
}

const check = HashMap();
console.log(check.hash("Arlecchino"));