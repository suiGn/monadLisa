#include <stdio.h>
#include <stdlib.h>
#include <string.h>

const char *header_content = 
"#ifndef MIC_H\n"
"#define MIC_H\n"
"\n"
"#include <errno.h>\n"
"\n"
"void error(char *nfichero, int nro_linea, char *mensaje);\n"
"\n"
"#endif // MIC_H\n";

const char *cfile_content =
"#include \"mic.h\"\n"
"#include <stdio.h>\n"
"#include <string.h>\n"
"\n"
"char *errores[] = {\n"
"    \" \",\n"
"    \"EPERM\",\n"
"    \"ENOENT\",\n"
"    \"ESRCH\",\n"
"    \"EINTR\",\n"
"    \"EIO\",\n"
"    \"ENXIO\",\n"
"    // ... otros códigos de error\n"
"};\n"
"\n"
"void error(char *nfichero, int nro_linea, char *mensaje) {\n"
"    char *identificador = (errno >= 0 && errno < sizeof(errores) / sizeof(errores[0]))\n"
"                          ? errores[errno]\n"
"                          : \"DESCONOCIDO\";\n"
"\n"
"    fprintf(stderr, \"%s (%d). ERROR: %s, %s. %s\\n\",\n"
"            nfichero, nro_linea, identificador, strerror(errno), mensaje);\n"
"}\n";

int main() {
    char cmd[256];
    char path[256];
    const char *home_path = getenv("HOME");
    
    // Crear los directorios
    sprintf(cmd, "mkdir -p %s/include", home_path);
    system(cmd);

    sprintf(cmd, "mkdir -p %s/lib", home_path);
    system(cmd);

    // Escribir mic.h
    sprintf(path, "%s/include/mic.h", home_path);
    FILE *header_file = fopen(path, "w");
    if (header_file) {
        fputs(header_content, header_file);
        fclose(header_file);
    } else {
        perror("Error al escribir mic.h");
        return 1;
    }

    // Escribir mic.c
    sprintf(path, "%s/mic.c", home_path);
    FILE *c_file = fopen(path, "w");
    if (c_file) {
        fputs(cfile_content, c_file);
        fclose(c_file);
    } else {
        perror("Error al escribir mic.c");
        return 1;
    }

    // Compilar mic.c y crear libmic.a
    sprintf(cmd, "cc -c %s/mic.c -I%s/include && ar rcs %s/lib/libmic.a mic.o && rm %s/mic.c && rm mic.o", home_path, home_path, home_path, home_path);
    system(cmd);

    printf("Instalación completada.\n");
    return 0;
}
