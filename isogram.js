function isIsogram(str){
    if(str === '') {
      return true
    }
    str = str.toLowerCase()
    let lettersArr = str.split('')
    let newArr = []
    
    for(let i = 0; i < lettersArr.length; i++) {
      if(newArr.includes(lettersArr[i])){
        return false
        
      } else {
        newArr.push(lettersArr[i])
      }
    }
    
    return true
  }
  