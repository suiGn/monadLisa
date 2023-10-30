## ejl_l.c 
El código tiene como objetivo listar todos los códigos de error que manejan las llamadas al sistema en Unix y su descripción asociada. Para lograrlo, hace uso de las constantes definidas en el encabezado errno.h y de la función strerror().

A continuación, te detallo cada parte del código:

c
Copy code
#include <stdio.h>   // Para las funciones de entrada/salida, como printf.
#include <errno.h>   // Para trabajar con los errores del sistema.
#include <string.h>  // Para la función strerror.

int main() {
    for (int i = 1; i < sys_nerr; i++) {  // Itera a través de todos los códigos de error.
        printf("%d: %s\n", i, strerror(i));  // Imprime el número de error y su descripción.
    }
    return 0;
}
Encabezados:

stdio.h: Utilizado para funciones de entrada/salida, como printf().
errno.h: Proporciona códigos de error del sistema y, en algunos sistemas, sys_nerr que es el número total de códigos de error definidos.
string.h: Contiene la definición de strerror(), que convierte un código de error en su descripción correspondiente.
Función main: Es la función principal que se ejecuta cuando lanzas el programa.

Bucle for: El bucle for itera sobre todos los códigos de error desde 1 hasta sys_nerr - 1. La variable sys_nerr es una constante que representa la cantidad total de códigos de error definidos en el sistema. Cada iteración del bucle maneja un código de error diferente.

printf y strerror: Dentro del bucle, la función printf() se utiliza para imprimir el número del código de error y su descripción. La descripción se obtiene utilizando la función strerror(i), donde i es el código de error actual.

En resumen, el programa recorre todos los códigos de error disponibles en tu sistema Unix y muestra en la salida estándar (la terminal) el número de error y la cadena descriptiva que el sistema le asocia.

A continuación, te muestro el código del programa ejl_l.c:

#include <stdio.h>
#include <errno.h>
#include <string.h>

int main() {
    for (int i = 1; i < sys_nerr; i++) {
        printf("%d: %s\n", i, strerror(i));
    }
    return 0;
}

Instrucciones:
Compila el programa utilizando el siguiente comando:

gcc ejl_l.c -o ejl_l

Ejecuta el programa:

./ejl_l

Esto debería mostrarte una lista de errores del sistema Unix en el formato que especificaste. La lista podría no ser exhaustiva si el sistema en el que lo ejecutas ha definido más códigos de error que no están en la lista estándar, pero debería darte la mayoría de los códigos comunes.


## Objective:

You wanted to create a system that provides a way to handle error messages in a Unix-like environment.
Specifically, the idea was to make a modular system where the error-handling code could be separated from the main application and reused across multiple projects.
Components:

mic.h: A header file that contains the declaration for the error function. This tells other programs that this function exists and how to call it.
mic.c: The implementation file where the actual error function is defined.
ejl_2.c: A test program to demonstrate and test the error handling system.
libmic.a: A static library that includes the compiled version of the mic.c code. This allows you to link other programs to it.
Process:

You were provided with code snippets for mic.h, mic.c, and ejl_2.c.
The idea is to compile mic.c into a library (libmic.a) and then link ejl_2.c against this library to use the error handling capabilities provided by mic.c.
There was a discussion about how to set up directories ($HOME/include and $HOME/lib) where the header files and libraries can be stored. This is a common way to organize shared code.
We've encountered various compilation issues, which have been addressed step-by-step.
Current Situation:

The last error you encountered was due to missing the #include <string.h> directive in the ejl_2.c file. This inclusion is necessary for using string-related functions like strerror and strcmp.
Next Steps:

Add #include <string.h> to the ejl_2.c file.
Ensure all your files (mic.h, mic.c, ejl_2.c) are in the correct locations.
Compile and link everything correctly.

