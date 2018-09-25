// Variables del objeto calculadora
var Calculadora = (function(document, undefined){
  var error_op = "La operación solicitada no existe.";
  var newVal = false,
    maxLen = 9,
    ope1 = 0,
    ope2 = 0,
    result = 0,
    hasPoint = false;
    screenVal = "0",
    idBOpe = "";
 var btnsId  = {
    onc  : "on",
    sign : "sign",
    raiz : "raiz",
    div  : "dividido",
    por  : "por",
    menos: "menos",
    punto: "punto",
    igual: "igual",
    mas  : "mas"
    };
    var domBtns;
    function initVars(){
    newVal = false;
    maxLen = 9;
    ope1 = 0;
    ope2 = 0;
    result = 0;
    hasPoint = false;
    screenVal = "0",
    idBOpe = "";
  }
  // perteneciente de la clase tecla
var getBtns = function(){
  domBtns = document.getElementsByClassName("tecla");
}
 var subscribeEvents = function(){
   for(var i = 0, len = domBtns.length; i < len; i++) {
       domBtns[i].onclick = events.eBtnClick;
   }
 }
//eventos al hacer click
 var events = {
  eBtnClick: function(e){
    switch (this.id) {
      case btnsId.onc  :
        initVars();
        writeDisplay(screenVal);
        break;
      case btnsId.sign :
        setSign();
        writeDisplay(screenVal);
        break;
      case btnsId.raiz :
        break;
      case btnsId.punto:
        addPoint();
        break;
      case btnsId.igual:
        solveOp();
        break;
      case btnsId.mas  :
      case btnsId.menos:
      case btnsId.por  :
      case btnsId.div  :
         addBasicOps(this.id);
         break;
       default:
         addNumber(this.id);
     }
   }
}
//Funciones
 function writeDisplay(value){
   if (value.length > maxLen) value = "ERROR";
   document.getElementById("display").innerHTML = value;
 }
  function solveOp(){
   if (screenVal.endsWith(".")) screenVal = screenVal.substr(0,screenVal.length-1);
   if (screenVal.length > maxLen) return;
   if (idBOpe == ""){
     return;
   } else {
     ope2 = Number(screenVal);
     switch (idBOpe) {
       case btnsId.mas:
         result = add(ope1, ope2);
         break;
       case btnsId.menos:
         result = substract(ope1, ope2);
         break;
       case btnsId.por:
         result = multiply(ope1, ope2);
         break;
       case btnsId.div:
         result = divide(ope1, ope2);
         break;
       default:
         alert(error_op);
         return;
     }
     ope2 = 0;
     screenVal = String(result);
     ope1 = result;
   }
   // método de la tecla del punto, lo añada 1 ves a la derecha del número actual que se muestra en pantalla
   if (screenVal.search(".") == - 1) maxLen = 8;
   else maxLen = 8;
   newVal = true;
   writeDisplay(screenVal);
   hasPoint = false;
   idBOpe = "";
   maxLen = 8;
 }
   function addPoint(){
   if (hasPoint == true) return;
   if (screenVal.length > maxLen) return;
   if (newVal == false && screenVal.length == maxLen) return;
   if (newVal == true || screenVal == "0") screenVal = "0";
   screenVal = screenVal + ".";
   writeDisplay(screenVal);
   maxLen = 8;
   hasPoint = true;
   newVal = false;
 }
 //signo negativo al presionar la tecla +/-
   function setSign(){
  result = Number(screenVal);
  result = -1 * result;
  screenVal = String(result);
}
  function addNumber(id){
    if (screenVal.length > maxLen) return;
    if (newVal == false && screenVal.length == maxLen) return;
    if (newVal == true || screenVal == "0") screenVal = "";
    screenVal = screenVal + id;
    writeDisplay(screenVal);
    newVal = false;
  }
   function addBasicOps(id){
     if (screenVal.endsWith(".")) screenVal = screenVal.substr(0,screenVal.length-1);
   if (screenVal.length > maxLen) return;
   if (idBOpe == ""){
     ope1 = Number(screenVal);
   } else {
      ope2 = Number(screenVal);
      switch (idBOpe) {
        case btnsId.mas:
          result = add(ope1, ope2);
          break;
        case btnsId.menos:
          result = substract(ope1, ope2);
          break;
        case btnsId.por:
          result = multiply(ope1, ope2);
          break;
        case btnsId.div:
          result = divide(ope1, ope2);
          break;
        default:
          alert(error_op);
          return;
      }
      if (id != idBOpe) {
            idBOpe = id;
     }
     ope2 = 0;
     screenVal = String(result);
     ope1 = result;
    }
    if (screenVal.search(".") == - 1) maxLen = 8;
    else maxLen = 8;
    newVal = true;
    writeDisplay(screenVal);
    hasPoint = false;
    idBOpe = id;
  }
  //Operaciones Suma, Resta, Multiplicación, División y Raiz Cuadrada
   function add (v1, v2){
     return v1 + v2;
   }

   function substract (v1, v2){
     return v1 - v2;
   }

   function multiply (v1, v2){
     return v1 * v2;
   }

   function divide (v1, v2){
     return v1 / v2;
   }

   var initialize = function(){
     initVars()
     getBtns();
     subscribeEvents();
   }

   return{
       init: initialize
   }

 })(document);

 Calculadora.init();
