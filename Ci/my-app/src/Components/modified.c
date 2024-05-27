#include<stdio.h>
#include<string.h>

char* encrypt(char* x, int n) {
    char* cipher = malloc(strlen(x) + 1);
    
    for(int i = 0; i < strlen(x); i++) {
        if(isupper(x[i])) {
            cipher[i] = (x[i] + n - 65) % 26 + 65;
        }
        else if(islower(x[i])) {
            cipher[i] = (x[i] + n - 97) % 26 + 97;
        }
        else {
            cipher[i] = x[i];
        }
    }
    cipher[strlen(x)] = '\0';
    return cipher;
}

void decrypt(char* x) {
    char* text = malloc(strlen(x) + 1);
    
    for(int n = 0; n < 26; n++) {
        strcpy(text, "");
        
        for(int i = 0; i < strlen(x); i++) {
            if(isupper(x[i])) {
                if((x[i] - n - 65) < 0) {
                    text[i] = 91 + (x[i] - n - 65);
                }
                else {
                    text[i] = (x[i] - n - 65) % 26 + 65;
                }
            }
            else if(islower(x[i])) {
                if((x[i] - n - 97) < 0) {
                    text[i] = 123 + (x[i] - n - 97);
                }
                else {
                    text[i] = (x[i] - n - 97) % 26 + 97;
                }
            }
            else {
                text[i] = x[i];
            }
        }
        text[strlen(x)] = '\0';
        printf("plain text for key %d: %s\n", n, text);
    }
}

int main() {
    char x[100];
    int n;
    
    printf("Enter the string: ");
    scanf("%s", x);
    
    printf("Enter the key: ");
    scanf("%d", &n);
    
    char* cipher = encrypt(x, n);
    printf("Cipher text: %s\n", cipher);
    
    decrypt(cipher);
    
    free(cipher);
    
    return 0;
}

