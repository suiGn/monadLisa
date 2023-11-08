#include <stdio.h>
#include <errno.h>
#include <string.h>

int main() {
    int errnum;

    printf("List of standard error codes and their descriptions:\n");
    for (errnum = 0; errnum < sys_nerr; errnum++) {
        const char *message = strerror(errnum);
        if (message != NULL) {
            printf("%d: %s\n", errnum, message);
        } else {
            printf("%d: No error message available\n", errnum);
        }
    }

    return 0;
}




