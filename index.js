function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(var i = 0; i < musicians.length; i++) {
    var str = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(str);
  } return arr;
}

function johnLennonFacts(facts) {
  var arr = [];
  while(arr.length < facts.length) {
    var count = 0;
    var str = `${facts[count]}!!!`;
    arr.push(str);
  } return arr;
}
