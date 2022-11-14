function convertToRoman(num) {
 let romans = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  if (num === 0)
    return "";
  for (let key in romans) {
    if (num >= romans[key]) 
      return key + convertToRoman(num - romans[key]);
  }
}

convertToRoman(36);
