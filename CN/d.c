#include <stdio.h>
#include <limits.h>

#define V 4

int main() {
	int g[V][V] = {
	 	{0,1,4,0},
		{1,0,2,6},
		{4,2,0,3},
		{0,6,3,0}
	};
	int dist[V], visited[V] = {0};
	for (int i=0;i<V;++i) dist[i]=INT_MAX;
	dist[0]=0;
	for (int i=0;i<V-1;++i) {
		int u=-1, min=INT_MAX;
		for (int j=0;j<V;++j) {
			if (!visited[j] && dist[j] < min) 
				min = dist[j], u=j;
		visited[u]=1;
		for (int v=0;v<V;++v)
			if (g[u][v] && dist[u]+g[u][v]<dist[v]) dist[v]=dist[u]+g[u][v];
		}
	}
	for (int i=0;i<V;++i) printf("0 -> %d = %d\n", i, dist[i]);
	return 0;
}
