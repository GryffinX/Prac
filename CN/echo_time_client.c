#include <stdio.h>
#include <sys/types.h>
#include <netinet/in.h>
#include <unistd.h>
1#include <string.h>
#include <time.h>

int main() {
	struct sockaddr_in servaddr, cliaddr;
	int csd, cport;
	char sendmsg[1024], revmsg[1024], buffer[1024];
	time_t ticks;

	printf("Enter Port: ");
	scanf("%d", &cport);
	getchar();

	csd = socket(AF_INET, SOCK_STREAM, 0);
	if (csd < 0) { printf("CLIENT: Socket Creation failed\n"); return 0; }

	servaddr.sin_family = AF_INET;
	servaddr.sin_addr.s_addr = htonl(INADDR_ANY);
	servaddr.sin_port = htons(cport);

	int addr_len = sizeof(servaddr);
	connect(csd, (struct sockaddr*)&servaddr, addr_len);
	printf("CLIENT: Connection estabilished\n");
	printf("Enter data to send: ");
	fgets(sendmsg, 1024, stdin);
	sendmsg[strcspn(sendmsg, "\n")] = '\0';
	sendto(csd, sendmsg, strlen(sendmsg), 0, (struct sockaddr*)&servaddr, addr_len);
	memset(revmsg,0,1024);
	int n = recvfrom(csd, revmsg, 1024, 0, (struct sockaddr*)&servaddr, &addr_len);
	revmsg[n] = '\0';
	printf("Received from server: %s\n", revmsg);
	if (strcmp(sendmsg,revmsg) == 0) {
		printf("ECHO verified\n");
	} else {
		printf("ECHO different\n");
	}
	ticks = time(NULL);
	struct tm *tm_info = localtime(&ticks);
	strftime(buffer, sizeof(buffer), "%Y-%m-%d %H:%M:%S", tm_info);
	printf("%s\n", buffer);
	return 0;
}
