//amocana 1
var numJewelsInStones = function(jewels, stones) {
    let set = new Set(jewels.split(""));
    let count = 0;

    for (let i = 0; i < stones.length; i++) {
    if (set.has(stones[i])) {
      count++;
    }
  }

  return count;
};


//amocana 2
var isValid = function(s) {
    let stack = [];
    
    for (let i = 0; i < s.length; i += 1) {
      let top = stack[stack.length - 1];
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
        stack.push(s[i]);
      } else if (s[i] === ')' && top === '(' && stack.length !== 0) {
        stack.pop();
      } else if (s[i] === ']' && top === '[' && stack.length !== 0) {
        stack.pop();
      } else if (s[i] === '}' && top === '{' && stack.length !== 0) {
        stack.pop();
      } else {
        return false;
      }
    }
    
    return stack.length === 0;
  };