export function HashMap(loadFactor = 0.75) {
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
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity; // each 
            // new iteration take a result of hashCode as part of calcuation for next hashCode
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


    function get(key) {
        const index = hash(key);
        const bucket = buckets[index];


        for (const pair of bucket) {
            if (pair[0] === key) {
                return pair[1];
            }
        }
        return null;
    }


    function has(key) {
        const index = hash(key);
        const bucket = buckets[index];

        for (const pair of bucket) {
            if (pair[0] === key) {
                return true
            }
        }

        return false;
    }

    function remove(key) {
        const index = hash(key);
        const bucket = buckets[index];


        for (let i = 0; i < bucket.length; i++) {
            const pair = bucket[i]; // for consistency, can be done with bucket[i][0] 

            if (pair[0] === key) {
                bucket.splice(i, 1); // starting at index i, remove 1 pair/ element
                return true;
            }
        }

        return false;
    }


    function length() {

        let count = 0;

        for (let i = 0; i < buckets.length; i++) {
            const bucket = buckets[i]; // each bucket

            for (const pair of bucket) {
                count++; // counting pairs, cause if no pair = no key
            }
        }
        return count;
    }

    function clear() {
        for (const bucket of buckets) {
            bucket.length = 0;
        }

        console.log("HashMap cleared");
    }

    function keys() {

        let keys = [];

        for (let i = 0; i < buckets.length; i++) {
            for (const pair of buckets[i]) {
                keys.push(pair[0]);
            }
        }
        return keys;
    }


    return {
        getBucketsForTest,
        hash,
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys
    }
}
