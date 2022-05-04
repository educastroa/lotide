const args = process.argv.slice(2);

const reverse = function(args){
  
  
  args.forEach(element => {
    let answer = '';
    for (let x = (element.length - 1); x >= 0; x--) {
      
      answer += element[x];
     }
    console.log(answer);
  });
  
  
  
};

reverse(args);