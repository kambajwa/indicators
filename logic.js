
var stocks = []
let newArray = _.map(stocks, item=> {
    return {name:item.d[0], symbol:item.s.trim()}
    })

let myFuncArray  = []
_.each(newArray,(item,index)=>{
    item.request = `s1 = request.security("${item.s}","D",someFunc())  ? ${item.s} : ""`
   // if(index<41){
       // console.log(item)
         myFuncArray.push(`s${index+1} = request.security("${item.symbol}","D",someFunc())  ? "${item.name} - ${item.symbol}"  : ""`)
   // }
   
})
//s1 = request.security("ASIANPAINT","D",someFunc())  ? "ASIANPAINT" : ""


console.log(myFuncArray)