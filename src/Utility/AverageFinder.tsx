type AverageType = (a:number[][])=>number[]

// this is the average finding function from an array
const AverageFinder:AverageType = (arr)=>{
    const newArr:number[] = arr.map((newContent:number[])=>newContent.reduce((avg:number, currentElement:number, index:number)=>{
        avg = (avg+currentElement)/(index+1)
        return avg;
     }, 0));

     return newArr;
}

export default AverageFinder;