function HashMap(loadFactor = 0.75) {
    let capacity = loadFactor === 0.75 ? 16 : 0; // if lF = 0.75 , cap = 16
    const buckets = [...Array(capacity)].map(() => []); // creating new array for storage
    // and fill each of slot as separate empty array


    function getBucketsForTest() { // getter function to expose buckets for test
        return buckets; 
    }

    function hash(key) {
        let hashCode = 0; // initial multiplier for hashing

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) { // for each item/letter in key
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
        }
        return hashCode;
    }

    function set(key, value) {
        const index = hash(key);
        const bucket = buckets[index]; // empty array inside buckets array with 
        // index of hashCode

        for (let pair of bucket) {
            if (pair[0] === key) { // pair split by bey and value, so pair[0] is key
                pair[1] = value; // update value
                return;
            }
        }

        bucket.push([key, value]);
    }

    return {
        loadFactor,
        hash,
        set,
        getBucketsForTest
    }
}

const test = HashMap();
console.log(test.hash("Arlecchino"));

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");

console.log(test.getBucketsForTest());