Desafio discografia

<h3>sobre o Desafio:</h3>

Criar interfaces acessíveis através de um browser que permita o usuário a gerenciar a
discografia da dupla caipira Tião Carreiro e Pardinho 🤠.
Segue abaixo as ações que o usuário poderá executar:
1) Ver lista de álbuns e faixas
2) Pesquisar álbuns por nome
3) Adicionar um novo álbum
4) Adicionar uma nova faixa em um álbum
5) Excluir uma faixa
6) Excluir um álbum
Obs 01: Essas interfaces devem ser criadas utilizando o Laravel Framework PHP juntamente com sua
template engine (Blade), controllers, validations, migrations, etc..
Obs 02: Fique a vontade para utilizar as ferramentas de front end que desejar (bootstrap, tailwind, jquery,
react, etc...)

Protótipos
Apenas para as ações 1 e 2 definimos o protótipo abaixo.
Para as demais ações você pode adotar o modelo de design que preferir.

<h3>exemplo de interface:</h3>

<img src='https://github.com/pedrogomes30/discografia-project/blob/master/discografia-front/src/assets/interface.png'/>

<h3> Caracteristicas do projeto</h3>

- ambiente do back-end:
    - PHP com laravel 9;
    - banco de dados Mysql;

- ambiente do Front-end:
    - Javascript usando Vue2;
    - interface vuetify2(material UI);
    - vuex;
    - vue-router(SPA);

<h3> Planejamento do banco de dados</h3>

<img src='https://github.com/pedrogomes30/discografia-project/blob/master/Docs/img/discografia-database.png'/>

<h3> instalação</h3>

- ferramentas necessárias:
    - composer;
    - PHP 8+;
    - banco de dados Mysql;
    - nodeJS;

primeiramente faça o clone deste projeto, o mesmo já possui o front e o back no mesmo repósitório:
```
https://github.com/pedrogomes30/discografia-project.git
```
<b>Back-End</b><br>
navege até a pasta ```/discografia-back```, onde será necessário iniciar o composer:
```
composer install
```
depois, vá até o arquivo ```.env.example```, crie uma cópia e renomeie apenas para ```.env``` e abra-o:

procure a seção do ```.env``` contendo os dados de acesso ao banco, e informe as credenciais do seu banco:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```
feito isto, basta iniciar o servidor através do comando, na pasta raiz do back-end:
```
php artisan serve
```
pronto, o backend da aplicação estará funcionando!

<b>Front-End</b><br>

navegue até a pasta ```/discografia-front```, e então execute o comando abaixo:
```
npm i
```
navegue até o arquivo ```.env.example``` crie uma cópia e renomeie para ```.env```, e modifique a linha abaixo apra o endereço onde o back-end iniciou:
```
VUE_APP_BACK_URL= 
```
inicie o front com o comando:
```
npm run serve
```
pronto, sua aplicação estará no ar!

para facilitar os testes de chamada da API, na pasta raiz do projeto tem a arquivo ```DISCOGRAPHY CHALANGE.postman_collection``` com as collections do  ``` POSTMAN ```.
