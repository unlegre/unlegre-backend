/*
class Usuario{
    constructor(nombre,apellido,libros=[],mascotas=[]){
        this.nombre = nombre
        this.apellido = apellido
       // this.contador = 0;
        this.libros = libros
        this.mascotas = mascotas

    }
// metodos
getFullName(){
    console.log( `el nombre usuario es ${this.nombre} ${this.apellido} `)
}

addMascotas(newMascota){
    this.mascotas.push(newMascota)
    console.log(`el usuario tiene un  ${this.mascotas}`)
}
countMascotas(){
    if (this.mascotas.length) {
        return this.mascotas.length
      }
}
addBook(){
    this.libros.push({nombre:nombreLibro,autor:autorLibro})
    console.log(`${this.libros}`)
}
getBookNames(){
    const nombreLibro = this.libros.map(libros => libros.nombre)
    return nombreLibro
}
}

const gabriel = new Usuario('gabriel','alegre',[{nombre:'El señor de las moscas',autor:'William Golding'},{nombre:'Fundacion',autor:'Isacc Asimov'}],['perro','gato']);
const gise = new Usuario('gisela','deAlegre')
franco = new Usuario('francisco','paradiso',['mobidick'],['loro'])

gabriel.getFullName()
gabriel.addMascotas()
//gabriel.countMascotas()
gabriel.getBookNames();
gise.getFullName()
franco.getFullName()
franco.addMascotas()


//console.log(usuario.getFullName);




let frutas =["banana","naranja","pera"]
console.log(frutas.length);

class Animal{
    constructor(nombre,genero){
        this.nombre=nombre;
        this.genero=genero;
    }

    sonar(){
        console.log("hogo sonidos");
    }
    saludar(){
        console.log("hola me llamo",this.navigator);
    }
}

// metodos
class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre
      this.apellido = apellido
      this.libros = libros
      this.mascotas = mascotas
    }
    getFullName(){
        console.log( `el nombre usuario es ${this.nombre} ${this.apellido} `)
    }
    
addMascotas(newMascota){
    this.mascotas.push(newMascota)
    console.log(`el usuario tiene ${this.mascotas}`)
}
}
const gabriel = new Usuario('gabriel', 'alegre', [], [])
gabriel.getFullName()

*/

class Usuario {
    constructor (nombre, apellido) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = [];
      this.mascotas = [];
    }
  
    getFullName() {
      return `${this.nombre} ${this.apellido}`
    }
  
    addMascota(nombre) {
      this.mascotas.push(nombre);
    }
  
    addBook(nombre, autor) {
     
      const libro = { nombre, autor }
      this.libros.push(libro);
    }
  
    countMascotas() {
      return this.mascotas.length;
    }
    countBook() {
        return this.libros.length;
      }
  
    getBookNames() {
      return this.libros.map(libro => libro.nombre);
    }
    getBookNames() {
        return this.libros.map(libro => libro.autor);
      }
  }
  
  const gabriel = new Usuario('Gabriel', 'Alegre')
  const Homero = new Usuario('Max', 'Power')
  
  // Añadido de libros
  gabriel.addBook('El señor de las moscas', 'William Golding')
  gabriel.addBook('Fundacion', 'Isacc Asimov')
  gabriel.addBook('Mobi-dick', 'Herman Melville')
  
  // Añadido de mascotas
  gabriel.addMascota('roko')
  gabriel.addMascota('nemo')
  gabriel.addMascota('Twity')
  
  console.log("nombre de usuario:",gabriel.getFullName())
  console.log("nombre de usuario:",Homero.getFullName())
  console.log("El usuario tiene:",gabriel.countMascotas(),"mascotas")
  console.log("la cantidad de libros son:",gabriel.countBook())
  console.log("los nombres de libros son:",gabriel.getBookNames())
  
  function mostrarLetras(word, timer){
    let mifuncion =setInterval(letras ,timer)
    let counter =0;
    function letras (){
        if (counter !=word.length){
            console.log(word.slice(counter, counter+1));
            counter ++;
        } else{
            fin();
            clearInterval(mifuncion)
        }
    }
  }
  let fin =()=> console.log("finalizamos la ejecucion");
  mostrarLetras("alegre",1000);
  mostrarLetras("ruben",1500);
  mostrarLetras("juan",2000);