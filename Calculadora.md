Evaluación Final JavaScript
#Preparado para el reto Calculadora?

Aprender matemáticas puede ser mucho más fácil si se usan herramientas digitales que permitan presentar los conceptos de manera visual e interactiva, creando entornos lúdicos relacionados con la vida práctica.

Por lo tanto, esta herramienta le ayudará a cualquier persona, sin importar cuál sea su edad, conectándolo con el mundo lógico de las cifras.

¡De eso se trata este proyecto final!

#Objetivo

A partir de una interfaz gráfica previamente elaborada, usar los conocimientos aprendidos sobre funciones, tipos de funciones, parámetros, respuestas, patrones de codificación, para construir una calculadora totalmente funcional, que pueda ser empleada en otros proyectos personales.

#Requerimientos Generales

Permitir realizar las 4 operaciones básicas entre dos números racionales, esto quiere decir que los números pueden ser naturales, enteros negativos, o decimales. Ejemplo.

2 + 3 -4 x 8

0.4 ÷ 9.3013 -4.05 - 1034.2 El mayor número de dígitos por cada operando y del resultado es 8. Los resultados de todas las operaciones deben mostrarse sólo cuando se presione la tecla igual (=) Permitir realizar operaciones en cadena, es decir que el resultado de una operación puede ser el primer operando de una operación siguiente. Ejemplo.

2 + 1 = 5 x 2 = 10 - 2 = 8 Permitir la secuencia de operaciones al presionar el botón igual (=) consecutivamente después de una operación, repitiendo la operación y el segundo operando sobre el resultado obtenido. Ejemplo.

3 + 2 = 5 = 7 = 9 = 11

#Instrucciones

1 Descarga el Proyecto Base que contiene el HTML y el CSS. No modifiques ninguno de estos archivos; sólo debes modificar el archivo index.js incluido en la estructura del proyecto.

2 Desarrolla la funcionalidad de la calculadora utilizando el patrón módulo, es decir que todo el código debe estar englobado en un objeto llamado Calculadora. Utiliza un método de inicialización que se encargue de ejecutar todas las otras funciones que se deben iniciar con la ejecución del programa.

3 Crea los métodos que consideres necesarios para hacer que la tecla presionada reduzca su tamaño y vuelva a su forma original al soltarla.

4 Para efectos de este proyecto sólo realizaremos las 4 operaciones básicas: suma, resta, multiplicación y división. El botón que indica raíz cuadrada sólo hace parte del diseño general de la calculadora y no es necesario que lo implementes.

5 Crea los métodos que sean necesarios para que al presionar una tecla numérica, se muestre el número correspondiente en la pantalla. Debes verificar si en la pantalla se encuentra sólo el número cero, que no se puedan agregar más números cero. Además debes hacer que si en pantalla está sólo el cero, al presionar otro número diferente, éste debe reemplazar al cero inicial. EJEMPLO

6 Crea un método que al presionar el botón ON/C se borren los números que estén en pantalla y se muestre sólo el número cero. EJEMPLO

7 Crea un método que al presionar la tecla del punto, lo añada a la derecha del número actual que se muestra en pantalla. Debes verificar si el punto ya está o no en pantalla para no adicionarlo más de una vez. EJEMPLO

8 Debes crear un método que añada el signo negativo al presionar la tecla +/- a un número en pantalla. Si el número sólo es un cero, no se debe agregar el signo, además debes verificar que si el signo menos ya está en pantalla, al presionar la tecla se borre. EJEMPLO

9 Realiza una validación para la pantalla, en la que sólo se puedan mostrar 8 dígitos. Si el número digitado, o el resultado de una operación posee un mayor número de dígitos, se deben mostrar sólo sus primeros 8 dígitos. EJEMPLO

10 El objeto Calculadora debe implementar las cuatro operaciones matemáticas básicas, de tal manera que al presionar un número y el signo aritmético, la pantalla quede vacía para indicar que la calculadora está en medio de una operación. Posteriormente se muestra el segundo número de la operación en pantalla. Para realizar la operación, debes asignar los métodos necesarios para que al presionar el botón igual, se ejecute el procedimiento correspondiente. Debes realizar métodos que reciban parámetros y retornan valores, por ejemplo: EJEMPLO

Recuerda realizar las pruebas correspondientes a todos los casos requeridos para que asegures que tu proyecto funcione correctamente.¡Éxitos!
