export const chunkasize = (arr, chunkSize) => {
  let chunkArray = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkArray.push(arr.slice(i, i + chunkSize));
  }

  return chunkArray;
};
