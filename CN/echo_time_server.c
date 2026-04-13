#include <stdio.h>
#include <sys/types.h>
#include <netinet/in.h>
#include <unistd.h>
#include <string.h>

int main() {
	struct sockaddr_in servaddr, cliaddr;
	int sport, sd, bs, clilen, nsd;
	char buffer[1024];

	printf("Enter Port: ");
	scanf("%d", &sport);
	getchar();

	sd = socket(AF_INET, SOCK_STREAM, 0);
	if (sd < 0) { printf("SERVER: Socket Creation Failed\n"); return 0; }

	servaddr.sin_family = AF_INET;
	servaddr.sin_addr.s_addr = htonl(INADDR_ANY);
	servaddr.sin_port = htons(sport);

	bs = bind(sd, (struct sockaddr *)&servaddr, sizeof(servaddr));
	if (bs < 0) { printf("SERVER: Bind unsuccessful\n"); return 0; }
	listen(sd, 5);
	clilen = sizeof(cliaddr);
	nsd = accept(sd, (struct sockaddr *)&cliaddr, &clilen);
	printf("SERVER: Connection Estabilished\n");

	memset(buffer, 0, 1024);
	int n = recvfrom(nsd, buffer, 1024, 0, (struct sockaddr*)&cliaddr, &clilen);
	if (n > 0) {
		printf("Received: %s\n", buffer);
		sendto(nsd, buffer, n, 0, (struct sockaddr*)&cliaddr, clilen);
		printf("SERVER: Echoed data back to the client\n");
	}
	close(nsd);
	close(sd);
	return 0;
}
