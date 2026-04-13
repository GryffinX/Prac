#include <stdio.h>
#include <limits.h>

#define V 4
#define E 5

struct Edge { int u,v,w; };

int main() {
    struct Edge edges[E] = {
        {0,1,1},{0,2,4},{1,2,2},{1,3,6},{2,3,3}
    };

    int dist[V];
    for(int i=0;i<V;i++) dist[i]=INT_MAX;
    dist[0]=0;

    for(int i=1;i<V;i++)
        for(int j=0;j<E;j++)
            if(dist[edges[j].u]!=INT_MAX &&
               dist[edges[j].u]+edges[j].w < dist[edges[j].v])
                dist[edges[j].v]=dist[edges[j].u]+edges[j].w;

    for(int i=0;i<V;i++)
        printf("0 -> %d = %d\n",i,dist[i]);
}