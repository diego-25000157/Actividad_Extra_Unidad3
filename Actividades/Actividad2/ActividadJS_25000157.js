//Ingrese su dia y mes de nacimiento

var mes = prompt("Ingrese Su Mes de Nacimiento");
var dia = prompt("Ingrese Su Dia de Nacimiento");

if(mes == "marzo" && dia >= "21" || mes == "abril" && dia <= "20"){
 alert("Tu signo zodiacal es Aries");
}
else if(mes == "abril" && dia >= "21" || mes == "mayo" && dia <= "20"){
 alert("Tu signo zodiacal es Tauro");
}
else if(mes == "mayo" && dia >= "21" || mes == "junio" && dia <= "20"){
  console.log("tu signo zodiacal es Geminis")
}
else if(mes == "junio" && dia >= "21" || mes == "julio" && dia <= "22"){
  alert("Tu signo zodiacal es Cancer");
}
else if(mes == "julio" && dia >= "23" || mes == "agosto" && dia <= "23"){
  alert("Tu signo zodiacal es Leo")
}
else if(mes == "agosto" && dia >= "24" || mes == "septiembre" && dia <= "22"){
  alert("Tu signo zodiacal es Virgo")
}
else if(mes == "septiembre" && dia >= "23" || mes == "octubre" && dia <= "23"){
  alert("Tu signo zodiacal es Libra")
}
else if(mes == "octubre" && dia >= "24" || mes == "noviembre" && dia <= "22"){
  alert("Tu signo zodiacal es Escorpio")
}
else if(mes == "noviembre" && dia >= "23" || mes == "diciembre" && dia <= "21"){
  alert("Tu signo zodiacal es Sagitario")
}
else if(mes == "diciembre" && dia >= "22" || mes == "enero" && dia <= "20"){
  alert("Tu signo zodiacal es Capricornio")
}
else if(mes == "enero" && dia >= "21" || mes == "febrero" && dia <= "19"){
  alert("Tu signo zodiacal es Acuario")
}
else if(mes == "febrero" && dia >= "20" || mes == "marzo" && dia <= "20"){
  alert("Tu signo zodiacal es Piscis")
}