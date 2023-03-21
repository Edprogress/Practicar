
function hora() {
// Variable Horario UTC  
const fechaactual = new Date();
const utcDia = fechaactual.getUTCDate();  // arroja el dia equivalente al mes
const utcDiaSem = fechaactual.getUTCDay();  //  arroja el dia equivalente a la semana en numero
const utcHour = fechaactual.getUTCHours();
const utcMonth = fechaactual.getUTCMonth() + 1;
const utcFullYear = fechaactual.getUTCFullYear();
// variables Horario local
const year = fechaactual.getFullYear();
const mes = fechaactual.getMonth();  //Finalmente, sumamos 1 al valor de mes para obtener el número del mes real
const dia = fechaactual.getDay();  // dia de la semana
const diaMes = fechaactual.getDate();
const hora = fechaactual.getHours();
const minuto = fechaactual.getMinutes();
const segundos = fechaactual.getSeconds();
// Listas de comparacion
const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const mesesAno = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// formuola para organizar la presentacion de la  hora y la fecha

const utcf = ` ${diasSemana[utcDiaSem]}  ${utcDia} de ${mesesAno[utcMonth - 1]} ${utcFullYear} Hora ${utcHour}:${minuto}:${segundos}`;
const localf = ` ${diasSemana[dia]}  ${diaMes} de ${mesesAno[mes]} ${year} `
// uso comillas invertidas para que lee los datos y convierta en string 

// Dom
document.querySelector(".resutc").textContent = utcf;
document.querySelector(".reslocal").textContent = localf;

document.querySelector(".horas").textContent = hora;
document.querySelector(".minutos").textContent = minuto;
document.querySelector(".segundos").textContent = segundos;

 }
hora();
setInterval( hora, 1000);