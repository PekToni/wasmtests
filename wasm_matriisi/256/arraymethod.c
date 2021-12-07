#include <stdlib.h>
#include <emscripten.h>
#include <time.h>
#include <stdio.h>
#include <sys/time.h>
EMSCRIPTEN_KEEPALIVE int matrix() {
    #define length 256
    int a[length][length];
    int b[length][length];
    int c[length][length];
    for (int i = 0; i < length; ++i) {
        for (int j = 0; j < length; ++j) {
            a[i][j] = rand() % 1001;
        }
    }

    for (int i = 0; i < length; ++i) {
        for (int j = 0; j < length; ++j) {
            b[i][j] = rand() % 1001;
        }
    }

    for (int i = 0; i < length; ++i) {
        for (int j = 0; j < length; ++j) {
            c[i][j] = 0;
        }
    }

    struct timeval begin, end;
    gettimeofday(&begin, 0);
    for (int s = 0; s < 1; s++) {
        for (int i = 0; i < length; i++)
        {
            for (int j = 0; j < length; j++)
            {
                for (int k = 0; k < length; k++)
                {
                    c[i][j] += a[i][k] * b[k][j];
                }
            }
        }
    }
    gettimeofday(&end, 0);
    long s = end.tv_sec - begin.tv_sec;
    long ms = end.tv_usec - begin.tv_usec;
    double finaltime = s + ms * 1e-6;
    printf("%.3f", finaltime);
    printf("\n");

    return 0;
}