

const ciudades= [
  { "ciudad": "Madrid", "codigoPostal": "28001" },
  { "ciudad": "Barcelona", "codigoPostal": "08001" },
  { "ciudad": "Valencia", "codigoPostal": "46001" },
  { "ciudad": "Sevilla", "codigoPostal": "41001" },
  { "ciudad": "Zaragoza", "codigoPostal": "50001" },
  { "ciudad": "Málaga", "codigoPostal": "29001" },
  { "ciudad": "Murcia", "codigoPostal": "30001" },
  { "ciudad": "Palma de Mallorca", "codigoPostal": "07001" },
  { "ciudad": "Las Palmas de Gran Canaria", "codigoPostal": "35001" },
  { "ciudad": "Bilbao", "codigoPostal": "48001" }
]

window.addEventListener('load',()=>{

  //capturamos y buuscamos al hacer click en el botón
    const btn = document.getElementById('btn').addEventListener('click',e=>{
      e.preventDefault()
    const busqueda = document.querySelector('#search').value
    //búsqueda NO case sensitive
    const resultado = ciudades.filter(ciudad => ciudad.ciudad.toLowerCase() === busqueda.toLowerCase()).map(ciudad=>ciudad.codigoPostal)

    //insertamos resultado en HTML

    document.querySelector('.resultado').innerHTML = `C.P.: ${resultado}`
  })

})
//capturamos el valor del input

