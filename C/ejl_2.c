/*
PROGRAMA: ejl_2.c
Descripci?n: Ejemplo de uso de la funcion error();
*/

#include "mic.h"

int main()
{
    extern int errno;
    int i;
    char mensaje[50];

    for (i = 1; i <= sys_nerr; i++)
    {
        sprintf(mensaje, "Error nro. %d: ", i);
        errno = i;
        error(__FILE__, __LINE__, mensaje);
    }

    return 0;
}