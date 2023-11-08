#include <stdio.h>
#include "mic.h"  // Assuming that "mic.h" contains the prototype for error_fatal

int main() {
    // Artificially set an error number
    errno = ENOENT; // No such file or directory
    
    // Call error_fatal to demonstrate its output
    error_fatal("No se puede abrir datos.dat", 1);
    
    // The program will exit from error_fatal, so no return statement is needed.
}
