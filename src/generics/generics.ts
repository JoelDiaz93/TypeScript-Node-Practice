
//Imprime cualquier valor que tenga de entrada
export const printObject = ( argument: any ) => {
  console.log( argument )
}

//Vamos a trabajar con el mismo tipo de entrada para la salida, asi tenemos las propiedades y metodos para ese tipo de argumento
export function genericFunction<T>( argument: T ):T {
  return argument;
}

//Repetimos el mismo metodo pero con una funcion de flecha
export const genericFunctionArrow = <T>( argument: T ) => argument;