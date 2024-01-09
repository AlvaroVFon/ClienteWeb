function coche(modelo, color, kms, combustible) {  

  this.modelo = modelo;

  this.color = color;  

  this.kms = kms;  

  this.combustible = combustible;  

}  



var elmio = new coche("Mercedes E330", "negro", 120000, "diésel");  

var eltuyo = new coche("BMV 318", "blanco", 210000, "gasolina");

//comprobamos si podemos borrar con delete

delete elmio.modelo

//imprimimos por consola

console.log(elmio)

//efectivvamente, se puede borrar con una propiedad de un objeto usando delete