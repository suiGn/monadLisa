#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include <string.h>

void error_fatal(char *mensaje, int codigo_salida) {
    // strerror handles the message for the error code in errno
    fprintf(stderr, "ERROR FATAL: %s. %s\n", strerror(errno), mensaje);
    exit(codigo_salida);
}
