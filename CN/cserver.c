#include <stdio.h>
#include <sys/types.h>
#include <netinet/in.h>
#include <unistd.h>
#include <string.h>
#include <arpa/inet.h>

void crc(char data[], char div[], char rem[]) {
	char temp[100];
	strcpy(temp, data);
	for (int i=0; i<= strlen(data) - strlen(div); ++i) {
		if (temp[i] == '1') {
			for (int j=0; j< strlen(div); ++j) {
				temp[i+j] = (temp[i+j] == div[j]) ? '0':'1';
			}
		}
	}

	strncpy(rem, temp + strlen(data) - strlen(div) + 1, strlen(div)-1);
	rem[strlen(div)-1] = '\0';
}

int main() {
	struct sockaddr_in servaddr, cliaddr;
	int sd, nsd, bs, sport, clilen;
	printf("Enter Port: ");
	scanf("%d", &sport);
	char div[] = "1011";
	char buffer[50], rem[10];
	sd = socket(AF_INET, SOCK_STREAM, 0);
	servaddr.sin_family = AF_INET;
	servaddr.sin_addr.s_addr = htonl(INADDR_ANY);
	servaddr.sin_port = htons(sport);
	clilen = sizeof(cliaddr);
	bs = bind(sd, (struct sockaddr*)&servaddr, sizeof(servaddr));
	listen(sd, 5);
	nsd = accept(sd, (struct sockaddr*)&cliaddr, &clilen);
	memset(buffer, 0, 50);
	int n = recv(nsd, buffer, 50, 0);
	buffer[n] = '\0';
	printf("SERVER: Received -> %s\n", buffer);
	crc(buffer, div, rem);
	int error = 0;
	for (int i=0; i< strlen(rem); ++i)
		if (rem[i] == '1') error = 1;
	if (error) printf("SERVER: Error Detected\n");
	else printf("SERVER: No Error\n");
	char data[] = "1110";
	char appended[50], codeword[50];
	strcpy(appended, data);
	for (int i=0;i < strlen(div)-1;++i) strcat(appended, "0");
	crc(appended, div, rem);
	strcpy(codeword, data);
	strcat(codeword, rem);
	printf("SERVER: Sending -> %s\n", codeword);
	send(nsd, codeword, sizeof(codeword), 0);
	close(sd);
	close(nsd);
	return 0;
}


