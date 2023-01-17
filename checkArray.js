function checkArray(arr, num) {
  try {
    if(!arr && !num) throw new ReferenceError('Parâmetros não enviados')
    if (typeof arr !== 'object') throw new TypeError('Array precisar ser do tipo object')
    if (typeof num !== 'number') throw new TypeError('Número precisar ser do tipo number')
    if (arr.length !== num) throw new RangeError('Tamanho do Array está incorreto')

    return arr
  } catch (error) {
    if(error instanceof ReferenceError) {
      console.log(error.name)
      console.log(error.message) 
    }else if(error instanceof TypeError) {
      console.log(error.name)
      console.log(error.message) 
    }else if(error instanceof RangeError) {
      console.log(error.name)
      console.log(error.message) 
    } else {
      console.log('Ocorreu um erro não esperado', error)
    }
  }
}

console.log(checkArray([1,2,3], 2)) //RangeError - Tamanho do Array está incorreto