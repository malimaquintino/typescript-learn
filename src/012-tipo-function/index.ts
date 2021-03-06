type MapStringCallback = (item : string) => string

function mapString(array: string[], callback : MapStringCallback): string[] {
    const newArray: string[] = []
    for (let i = 0; i < array.length; i++){
        newArray.push(callback(array[i]))
    }
    return newArray
}

const abc = ['a', 'b', 'c'];
const abcMap = mapString(abc, (item)=>item.toUpperCase());
console.log(abc);
console.log(abcMap);


export default 1
