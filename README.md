# Mesha Atividade 02 - Visualizar CSV

Teste do Processo seletivo Mesha - Full Stack

![image](https://user-images.githubusercontent.com/4443094/89609892-84305f00-d84f-11ea-83a7-e8b704f1334a.png)
![image](https://user-images.githubusercontent.com/4443094/89609895-8a264000-d84f-11ea-9f40-0a4b000e8e71.png)

## 📋 Instruções
É necessário ter instalado Node.js e Git.

Rodando a aplicação:
```bash
#clonado o repositório
git clone https://github.com/marcelotk15/mesha-test-atividade2

#acessar a pasta
cd mesha-test-atividade2

#baixando as dependências
yarn #ou
npm install

#iniciando o servidor
yarn dev #ou
npm run dev
```
Se tudo correu certo a aplicação já irar abrir no neu navegador padrão, caso contrário pode acessar em [localhost:3333](http://localhost:3333)

## 🗃️ Arquivos CSV
CSV pode possuir sua separação de dados tanto por ```,``` ou ```;```, mas não se preocupe a aplicação reconhece ambos. 🤝
Para gerar a tabela corretamente lembre-se de que a primeira linha precisa conter o nome das colunas, por exemplo:

```
id,username,email,created_at
1,dfoard0,hdammarell0@berkeley.edu,11/03/2020
2,shail1,gmaccosty1@google.com.hk,26/06/2020
3,kpoupard2,tdransfield2@netscape.com,24/09/2019
...
```

Na raiz do projeto tem o arquivo ```teste.csv``` que você pode usar como teste, mas sinta-se livre para usar qual quer um.

