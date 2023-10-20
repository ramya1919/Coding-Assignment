function reverse(input) {
    const words = input.split(' ');
    const revWords = words.map(word => {
      const revWord = word.split('').reverse().join('');
      return revWord;
    });
    const result = revWords .join(' ');
    return result;
  }
  const str = "This is a sunny day";
  const revStr = reverse(str);
  console.log(revStr);  