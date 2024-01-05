function parseLisp(code) {
    const tokens = code.replace(/\(/g, ' ( ').replace(/\)/g, ' ) ').trim().split(/\s+/);
    let index = 0;
  
    function parse() {
      if (tokens[index] === '(') {
        index++;
        const list = [];
        while (tokens[index] !== ')') {
          list.push(parse());
          index++;
        }
        return list;
      } else if (tokens[index] === ')') {
        throw new Error('Unexpected )');
      } else {
        return isNaN(tokens[index]) ? tokens[index] : parseFloat(tokens[index]);
      }
    }
  
    return parse();
  }
  
  const code = "(first (list 1 (+ 2 3) 9))";
  const ast = parseLisp(code);
  console.log(ast);
  