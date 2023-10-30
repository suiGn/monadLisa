#include <stdio.h>
#include <errno.h>
#include <string.h>
// Array con los identificadores de errores.
// Puedes extender este array para cubrir todos los códigos de error que necesites.
char *errores[] = {
    " ",
    "EPERM",
    "ENOENT",
    "ESRCH",
    "EINTR",
    "EIO",
    "ENXIO",
    // ... otros códigos de error
};

void voy_error(char *nfichero, int nro_linea, char *mensaje) {
    // Comprobamos si errno está dentro del rango del array errores.
    char *identificador = (errno >= 0 && errno < sizeof(errores) / sizeof(errores[0]))
                          ? errores[errno]
                          : "DESCONOCIDO";
    fprintf(stderr, "%s (%d). ERROR: %s, %s. %s\n",
            nfichero, nro_linea, identificador, strerror(errno), mensaje);
}

int main() {
    // Supongamos un escenario donde se produce un error.
    errno = ENOENT;  // Simulamos un error de "No such file or directory"
    voy_error(__FILE__, __LINE__, "Error al abrir un fichero");
    return 0;
}
