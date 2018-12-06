window.cipher = {
  encode: (texto, offset) => {

    let resultCodificar = "";
    for ( let i = 0 ; i < texto.length ; i++){
      let nuevoTexto = texto.toUpperCase();
      //guardando datos del for
      let ascii = nuevoTexto.charCodeAt(i)
      if (ascii === 32 ){
        resultCodificar += " "
        continue;
      }
      //aplicando formula a ascii
      let formula = ((ascii - 65 + parseInt(offset)) % 26) + 65;
        //let formula = ((ascii - 48 + parseInt(offset)) % 10) + 48;
      //nueva variable que guarda ASCII como letras + la formula que agrega offset
      let nuevoAscii = String.fromCharCode(formula)
      resultCodificar += nuevoAscii;
    }
    return resultCodificar;
  },
decode: (textoD, offsetD) => {
  let resultDecodificar = "";
  for ( let i = 0 ; i < textoD.length ; i++){
    let nuevoTextoD = textoD.toUpperCase();
    //guardando datos del for
    let asciiD = nuevoTextoD.charCodeAt(i)
    if (asciiD === 32 ){
    resultDecodificar += " "
    continue;
  }
    //aplicando formula a ascii
    let formulaD = ((asciiD - 90 - parseInt(offsetD)) % 26) + 90;
    //nueva variable que guarda ASCII como letras + la formula que agrega offset
    let nuevoAsciiD = String.fromCharCode(formulaD)
    resultDecodificar += nuevoAsciiD;
  }
  return resultDecodificar;
}};
