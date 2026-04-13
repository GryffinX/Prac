#include <stdio.h>
#include <netinet/in.h>
#include <sys/types.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <string.h>

void crc(char data[], char div[], char rem[]) {
	char temp[100];
	strcpy(temp, data);
	for (int i=0; i<= strlen(data) - strlen(div); ++i) {
		if (temp[i] == '1') {
			for (int j=0;j<strlen(div); ++j)
				temp[i+j] = (temp[i+j] == div[j]) ? '0':'1';
		}
	}
	strncpy(rem, temp + strlen(data) - strlen(div) + 1, strlen(div) - 1);
	rem[strlen(div)-1] = '\0';
}



int main() {
	struct sockaddr_in servaddr, cliaddr;
	int csd, cport;
	char data[] = "1101";
	char div[] = "1011";
	char appended[50], rem[10], codeword[50];

	printf("Enter Port: ");
	scanf("%d", &cport);
	getchar();

	strcpy(appended, data);
	for (int i=0; i < strlen(div) - 1; ++i)
		strcat(appended, "0");
	crc(appended, div, rem);
	strcpy(codeword, data);
	strcat(codeword, rem);
	printf("CLIENT: Sending: %s\n", codeword);
	csd = socket(AF_INET, SOCK_STREAM, 0);
	servaddr.sin_family = AF_INET;
	servaddr.sin_addr.s_addr = htonl(INADDR_ANY);
	servaddr.sin_port = htons(cport);
	int addr_len = sizeof(servaddr);
	connect(csd, (struct sockaddr*)&servaddr, sizeof(servaddr));
	send(csd, codeword, strlen(codeword), 0);
	char revData[1024];
	memset(revData, 0, 1024);
	int n = recv(csd, revData, 1024, 0);
	revData[n] = '\0';
	printf("CLIENT: Received -> %s\n", revData);
	crc(revData, div, rem);
	int error = 0;
	for (int i=0;i < strlen(rem); ++i)
		if (rem[i] == '1') error = 1;
	if (error) printf("CLIENT: Error Detected\n");
	else printf("CLIENT: No Error\n");
	close(csd);
	return 0;
}
