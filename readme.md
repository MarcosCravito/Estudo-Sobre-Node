Passo a passo de node

-Comandos para iniciar um projeto em node

npm init dar enter até pedir yes e digitar y ou yes e dar enter.

-Em seguida instalar o typescript no projeto

npm install -g typescript

(-g é para instalar globalmente o projeto, ou seja utilizar em qualquer arquivo que eu criar dentro de meu projeto
poder utilizar o typescript)


-Em seguida vamos criar um arquivo de configuração do typescript ( Fazer isso com o command prompt, pois com powershell não vai)

tsc --init

caso não vai e fica dando erro basta utilizar o comando

npx tsc --init

o arquivo tsconfig.json criado será o arquivo no qual será da configuração do typescript.



-Após este processo, se dirigir a pasta do typescript procurar

 "moduleResolution": "node",  

 e desativar o comentário do mesmo para ativar ele.

 O mesmo se fará para
 "rootDir": "./", 

 e dentro de "./" temos de acrescentar src que será o caminho de nossa pasta

 exemplo "rootDir": "./src", 

 Faremos o mesmo para

  "outDir": "./",

  exemplo:

   "outDir": "./dist",    


   -Em seguida vamos instalar  a dependência(biblioteca)(referencias)

  npm install --save-dev @types/node

  -Em seguida criar pasta src


Continuação das anotações

-Em seguida crie uma pasta nova nomeada de src

Dentro da pasta criar um arquivo renomeado como bem preferir com extensão ts( de preferencia index.ts )

--Em seguida fazer a instação do nodemon para conseguirmos executar os arquivos 

npm install nodemon


em seguida caso não funcionar executar o comando

npm install -D ts-node

--Em seguida se dirigir a pasta package.json entrar em script
  scripts
  e escrever dentro dela o código que querermos que seja executado.

// APAGAR NODE_MODULES


Para subir um projeto no github deve remover a pasta node_modules pois a mesma é pesada.

Para removar basta criar na raiz um arquivo com nome .gitignore e dentro da mesma colocar (nomedapasta/)

exemplo:

node_modulos/

