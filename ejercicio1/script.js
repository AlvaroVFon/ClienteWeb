window.addEventListener('load',()=>{


 const operarArray = (arr)=>{

  const menor = arr.sort()[0]
  const mayor = arr.sort()[arr.length -1]
  const suma = arr.reduce((acc,currentVal)=> acc + currentVal)
  const media = (suma / arr.length).toFixed(2)
  const resultado = `Menor: ${menor}, mayor: ${mayor}, media:${media}`
  return resultado

}
  //función para mostrar todo al hacer click en el botón

  const handleClick = ()=>{
    let arr = []
    for(let i = 0; i <= 6 ; i ++){

    arr.push(Math.floor(Math.random()*10))

    }
    document.querySelector('#array').innerHTML = arr
    document.querySelector('.resultado').innerHTML  = operarArray(arr)

  }

  document.querySelector('.boton').addEventListener('click', handleClick)
})
