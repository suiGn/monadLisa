/*
#include "mic.h"

char *errores[] = {
    " ", "EPERM", "ENOENT", "ESRCH", "EINTR", "EIO", "ENXIO", // ... add all other error codes as needed
};

void error(char *nfichero, int nro_linea, char *mensaje) {
    char *identificador;
    if (errno >= 0 && errno < sizeof(errores) / sizeof(errores[0])) {
        identificador = errores[errno];
    } else {
        identificador = strerror(errno);
    }
    fprintf(stderr, "%s (%d). ERROR: %s. %s\n", nfichero, nro_linea, identificador, mensaje);
}
*/