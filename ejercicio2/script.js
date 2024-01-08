window.addEventListener('load',()=>{
  //creamos dos arrays para el ejemplo
  const arr = ['A','B','C','D','E','F']
  const arr2 = [1,2,3,4,5,6]

  //condicion de que sean de la misma longitud
  let resultado = []

  if(arr.length === arr2.length){
    for(let i = 0 ; i<arr.length;i++){
      resultado[i] = arr[i]+arr2[i]
    }
 
    
  }else{
    resultado = 'La longitud de los dos arrays no es igual'
  }

  //incluimos todo en el HTML
  document.querySelector('.arr1').innerHTML = arr
  document.querySelector('.arr2').innerHTML = arr2
  document.querySelector('#resultado').innerHTML = resultado
})



