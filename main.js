export function HashMap(loadFactor = 0.75) {
    let capacity = 16;
    let size = 0;
    let buckets = [...Array(capacity)].map(() => []); // creating new array for storage
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

    function resize() {
        const bucketsOld = buckets;
        capacity *= 2; // doubling capacity
        buckets = [...Array(capacity)].map(() => []) // new array after capacity doubled

        for (const bucket of bucketsOld) {
            for (const [key, value] of bucket) { //rehashing values from prev buckets
                const index = hash(key);
                buckets[index].push([key, value]);
            }
        }
    }


    function set(key, value) {
        let index = hash(key);
        let bucket = buckets[index];

        for (let pair of bucket) { // checking if key exist 
            if (pair[0] === key) { // pair split by key and value, so pair[0] is key
                pair[1] = value; // update value
                return;
            }
        }

        if ((size + 1) / capacity > loadFactor) {
            resize();
        }

        index = hash(key);
        bucket = buckets[index];
        bucket.push([key, value]);
        size++;
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
                size--;
                return true;
            }
        }

        return false;
    }


    function length() {
        return size;
    }

    function clear() {
        for (const bucket of buckets) {
            bucket.length = 0;
        }

        size = 0;
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

    function values() {
        let values = [];
        for (let i = 0; i < buckets.length; i++) {
            for (const pair of buckets[i]) {
                values.push(pair[1])
            }
        }
        return values;
    }

    function entries() {
        let entries = [];

        for (let i = 0; i < buckets.length; i++) {
            for (const pair of buckets[i]) {
                entries.push(pair);
            }
        }
        return entries;
    }


    return {
        getBucketsForTest,
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries
    }
}


