// SetIntervel 
let count = 0 
let uniqueId = setInterval(()=> {
    console.log(count)
    count = count + 1 

},1000)


setTimeout(()=> {
    clearInterval(uniqueId)
},6000)


