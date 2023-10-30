#include <stdio.h>
#include <errno.h>
#include <string.h>

int main() {
    for (int i = 1; i < sys_nerr; i++) {
        printf("%d: %s\n", i, strerror(i));
    }
    return 0;
}
