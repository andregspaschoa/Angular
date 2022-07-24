01 - O que é ? 

Framework com base no JS e TS
Usado para criação de SPAs
Arquitetura baseada em componentes
Excelente para aplocações de grande porte
Compoe a stack MEAN

02 - Porque o Angular

Estrutura de organização do projeto bem definida 
Promove simplicidade e reaproveitamento do codigo
Sistema de tooling muito rico: cli, modulo de http, router e outros
Integração nativa com TypeScript
Mantido pelo Google

03 - Comandos basicos iniciais

Instalar -> npm install -g @angular/cli

Novo projeto -> ng new nome-do-projeto

Iniciar projeto -> ng serve

Verificar versão ng version

Alterar os arquivos dentro da pasta app para refletir mudanças no navegador

local onde fica a estrutura html da pagina -> app\app.component.html 

04 - Estrutura do Angular 

node_modules: dependências do projeto
src: onde vamos programar a aplicação
src/app: pasta principal para componentes, services e etc;
Os componentes são divididos em partes: TS, HTML, CSS e testes;

Obs: ao baixar um projeto do github tem que dar um npm install na pasta do projeto para instalar a node_modules

05 - Criar componente 

Comando -> ng generate nome-do-componente
Todos os arquivos necessários serão criados
Para importar o componente deve-se utilizar o selector em um html de outro componente
Para criar em uma pasta especifica ng generate nome-da-pasta-a-ser-criada/nome-do-compomponente-component
Verificar o log do terminal

A importancia de criar utilizando o comando ng generate ao invés de criar na mão é que 
ele atualiza o app.module.ts que importa e declara os novos components automaticamente por baixo dos panos
No arquivo TS ele terá criado a classe para o selector do componente html, para importa-lo basta ir no html raiz e inserir:
<app-nome-component></app-nome-component>

06 - Interpolação de dados 

Interpolação de dados é a tecnica de pegar uma variável e imprimir esse dado na view.
É um recurso para trabalhar com os componentes do Angular
Cria as variáveis no arquivo .ts, dentro da classe
Ou seja, estas variáveis são propriedades da classe
Obtendo o acesso a esses dadso no arquivo .html, o template;
A impressão desses dados é feita através do: {{dado}}
A interporlação facilita na hora da manutenção de um determinado dado do codigo

07 - CSS no Angular

Pode ser adicionado de 2 maneiras:
Global: utilizando o arquivo styles.css que fica em src
Obs: facilita para não ter que reescrever a estrutura do codigo css em cada componente
Scoped: estilos a nivel de componente, criamos quando damos um generate
Obs: Utilizado para quando cada componente deve ter um estilo CSS diferente 

08 - Compartilhando dados

No Angular podemos compartilhar dados do componente pai com o filho
Para isso é necessário disponibilizar na chamado do componente
o nome do dado que será recebido com a seguinte sintaxe: [dado]
E no codigo .ts do componente filho utilizar o decorator @input, que tem o papel de 
entregar o dado para o template;

09 - Diretivas

Os recursos de diretivas do Angular podem realizar diversas funções do sistma, como aplicar estilos a um elemento
Ela iniciam sempre com as ng (ex ngAlgumaCoisa)

10 - Renderização condicional 

É possivel exibir determinado conteudo por meio de uma condicional utilizando a diretiva ngif para isso
O valores podem ser dinamicos (propriedades) ou outros tipos de comparação
Também é possivel exibir em um outro cenário utilizando o else

11 - Eventos

Podemo ativar eventos nos componentes para disparar algum metodo;
o evento mais classico/comum de utilizarmos é: (click)="algumaFuncao()"
E os mestodos ficam na classe
Esse recurso pode ser utilizando também para acessar uma API

12 - Emitindo Eventos

Podemos comunicar eventos de um componente filho para o pai utilizando o @Output, que vai fazer a saida do evento
Na tag de invocação do componente no template, escolhemos um metodo para executar quando o evento for emitido
Exemplo: (emit)="onEmit()"
