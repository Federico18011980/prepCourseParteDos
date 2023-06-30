function numeroSimetrico(num) {
    // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
    // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
    // Un número es simétrico cuando es igual a su reverso.
    // Ej:
    // numeroSimetrico(11711) devuelve true
  
    // Tu código:
    let bol=false;
    let cadena = num.toString();
    let cadena2="";
    for(let i=cadena.length-1; i>=0; i--){
      cadena2 = cadena2+cadena[i];
     
    }
   
    if (cadena === cadena2){
       bol = true;
    }
    return bol;
  
  }
  let retorno;
  retorno = numeroSimetrico(4224);
  console.log(retorno);