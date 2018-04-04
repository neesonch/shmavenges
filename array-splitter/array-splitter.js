splitInto = (data, howManyArrays) => {
      if(howManyArrays < 1) { return []; }

      let splitArrays = [...Array(howManyArrays)].map(array => []);
      data.forEach((item, index) => {
        splitArrays[(index % howManyArrays)].push(item);
      })
      return splitArrays;
}

module.exports = splitInto;