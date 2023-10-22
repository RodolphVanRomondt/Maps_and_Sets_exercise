// Quick Question #1
{ 1, 2, 3, 4 }

// Quick Question #2
"ref"

// Quick Question #3
{ Array(3) => true, Array(3) => false }

const hasDuplicate = arr => arr.length > new Set(arr).size;

function vowelCount(str) {

    return Array.from(str.toLowerCase())
        .reduce((accum, char) => {
        if ("aeiou".includes(char)) {
            accum.has(char) ?
            accum.set(char, accum.get(char) + 1) :
            accum.set(char, 1);
        }
        return accum;
    }, new Map());
}