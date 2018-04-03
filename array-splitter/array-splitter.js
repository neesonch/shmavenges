splitInto = (data, howManyArrays) => {
  switch(howManyArrays){
    case 0:
      return [];
    default:
      let splitArrays = [...Array(howManyArrays)].map(array => []);
      data.map((item, index) => {
        splitArrays[(index % howManyArrays)].push(item);
      })
      return splitArrays;
  }
}

module.exports = splitInto;