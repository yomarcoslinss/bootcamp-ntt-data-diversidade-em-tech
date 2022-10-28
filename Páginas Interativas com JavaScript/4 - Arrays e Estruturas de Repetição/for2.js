const nome = 'Marcos Linss';

for (let i = 0 ; i < nome.length; i++ ) {
    console.log(nome[i])
}

// Função dessa estrutura de repetição:

/*
*
* A minha constante nome, recebeu o valor "Marcos Linss";
* A variável "i" recebeu 0;
* Enquanto "i" for menor que nome.length (que no caso é 12);
* "i" receberá +1
* 
*/

// Nesse caso, i que era 0, passa a ser 1, que passa a ser 2, que passa a ser 3 e essa repetição só irá encerrar quando "i" chegar a 12;

/*
*
* No bloco de código será imprimido o caractere do nome, que recebeu a índice "i";
*
* "i" começou com 0, então foi imprimido o índice "0", que recebeu o valor "M";
*
* Como "i" é menor que 12, ele recebeu +1, então i passou de 0 para 1;
* Então foi imprimido a índice "i" do nome, que agora é "1", então o valor retornado foi "a";
*
* Como "i" é menor que 12, ele recebeu +1, então i passou de 1 para 2;
* Então foi imprimido a índice "i" do nome, que agora é "2", então o valor retornado foi "r";
*
* Como "i" é menor que 12, ele recebeu +1, então i passou de 2 para 3;
* Então foi imprimido a índice "i" do nome, que agora é "3", então o valor retornado foi "c";
*
* E assim por diante, até "i" deixar de ser menor que nome.length (i < nome.length).
*
*
*/