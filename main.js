let inputs =90;
let ans= resolve(inputs)
printAns(inputs,ans)

//题目：将一个正整数分解质因数。例如：输入90,打印出90=2335。
function resolve(inputs){
      let temp_arr=[];
      let prime_number_arr =[];
      let k =inputs;
      for(var m=1;m<=inputs;m++){          
            if(is_prime_number(m)){
                  prime_number_arr.push(m)                
            }
      }
      
      let dividend;
      while (k!=1){
            for(var ccc of prime_number_arr){
                  dividend =ccc;       
                  k=k/dividend
                  console.log(k)
                  if
                  temp_arr.push(dividend);             
                  continue; 
                  
             }
             
            
            
      }         
            
              return temp_arr; 
     
      }
      
      
      
         
}

//判断num是否为质数，如果是质数，返回trforue，否则返回false
function is_prime_number(num){
      let new_arr=[];
      for(let i =1;i<=num;i++){
            if (num%i == 0){
                  new_arr.push(i)
            }
      }
      if (new_arr.length==2){
            return true;
      }
      return false;
    
}

function printAns(inputs,ans){
      let aa='';
      for(let i in ans){
            aa=aa+ans[i]
      }
      console.log(inputs +'='+aa) ;
}

      
      
      