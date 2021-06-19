type AverageType = (a: number[][]) => number[];

// this is the average finding function from an array
const AverageFinder: AverageType = (arr) => {
  const newArr: number[] = arr.map(
    (newContent: number[]) =>
      newContent.reduce(
        (avg: number, currentElement: number) => avg + currentElement,
        0
      ) / newContent.length
  );
  return newArr;
};

export default AverageFinder;
