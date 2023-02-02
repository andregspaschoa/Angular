# Angular

 Curso e projetos utilizando o Angular

    Primeiros comandos: 

        npm install -g @angular/cli  // o -g instala globalmente // necessario instalar primeiramente o nodejs

        ng version // verificar se esta instalado corretamente ou qual versao esta instalada

        ng new nome-do-projeto  // criar o projeto com o nome selecionado

        ng serve // startar o servidor para rodar o projeto inicial

        ng test // iniciar karma e jasmine para testar a aplicacao

        ng build // compilar os arquivos e gerar a pasta www

        ng lint // verifica se o codigo criado esta padronizado.

        npm install // comando para baixar todas as dependencias de um projeto.

        ng g module nome-do-modulo // criar um modulo novo

        ng g module nome-da-pasta
    
    Sites importantes 

        typescriptlang.org // em Playground e possivel verificar principais diferencas entre um codigo TS de um JS

        angular.io/docs // Site com a Documentacao do Angular para auxiliar durante estudo e desenvolvimento

        webpack.github.io (module bundler) // compila os arquivos de diversas extensoes para o formato que o navegador consiga entender

    
    Module Components e Services

        ng g module nome-do-module.

        ng g component nome-do-componente.

        ng g services nome-do-serviço.

        Os módulos em Angular são usados ​​para organizar o código em uma estrutura lógica e modular. Eles permitem que você divida seu aplicativo em pequenas partes independentes, chamadas de "módulos", que podem ser importadas e exportadas entre si.

        Os módulos Angular são compostos de três partes principais:

        Componentes: os componentes são as peças principais de um módulo Angular. Eles representam uma parte da interface do usuário e são geralmente associados a uma parte específica da funcionalidade do aplicativo.

        Serviços: os serviços são usados ​​para compartilhar dados e funcionalidade entre componentes. Eles podem ser injetados em componentes ou outros serviços.

        Módulos: Os módulos são usados ​​para agrupar componentes e serviços relacionados. Eles podem ser importados e exportados entre outros módulos para compartilhar funcionalidade.

        Os módulos Angular também permitem que você carregue componentes, serviços e outros recursos de forma assíncrona, o que ajuda a melhorar o desempenho do aplicativo. Além disso, eles facilitam a manutenção e escalabilidade do código, permitindo que você atualize e adicione novos recursos sem afetar o resto do aplicativo.
    
    Exportando um modulo
        
        Ao criar um sub-modulo de uma aplicação, caso necessário a exportação para o modulo principal é necessário declara-lo

        import { NomeDoModule } from './nome-do-diretorio/nome-do-module.module';

        E declara-lo na area de imports tambem.

            Conceito Barril

                A equipe do Angular recomenda a criação de um arquivo index.ts para o comando export from
                para facilitar a exportacao de um arquivo seja module, service ou component.
                no intuito de diminuir o caminho e facilitar a leitura do codigo.
                ficando da seguinte forma: 
                    './nome-do-diretorio';
            É apenas uma boa pratica (nao sendo obrigatorio)


    NgOnInit

        Esse recurso deve ser utilizado quando for realizar uma inicialização mais pesada, ou algo que possa impactar
        na criacao do objeto, é recomendavel fazer nele e nao no constructor, pois é importante que o objeto seja criado 
        da forma mais rapida e segura o possivel. Isso evita erros na aplicação.

    Libraries

        Ao realizar a instalação do bootstrap por exemplo é necessário colocar a referencia do path "" onde o mesmo foi instalado, para que seja reconhecido.

    Testes unitarios Basicos

        Ao utilizar o arquivo .spec.ts para realizar os testes, devemos tambem importar os modulos e serviços para que passem no teste.
        pode se criar testes com a function it que é uma função do jasmine

    Debug

        Ao acessar o Chrome developer e adicionar um breakpoint na linha desejada é possivel também o step over, para passar linha a linha do codigo ('muito util para encontrar algum erro na aplicação')

    Rotas

        O angular utiliza apenas um modulo para gerenciar as rotas de uma aplicação.
        Para a utilização deve-se configurar o app-routing.module, e adicionar o import no componente principal da aplicação
        Sendo assim, ao utilizar as Rotas no angular devemos utilizar a tag <router-outlet></router-outlet>
        E declarar o path dessas rotas dentro do app-routing.module.

    LocalStorage

        O localStorage serve para armazenar dados no navegador, ele pode ser utilizado para armazenar dados como, uma tarefa criada dentro de um site, uma listagem de acessados ou favoritos, dentre outros dados.
        é possivel chama-lo da seguinte forma:
        const nomeDaVariavel = localStorage['nomeDaVariavel'];
        Lembrando que o limite é de cerca de 5mb.
        Os dados só são perdidos caso o usuário tenha que limpar o navegador.

    SessionStorage

        O SessionStorage é muito semelhante ao LocalStorage, o que muda aqui é que os dados armazenados dessa forma são limpos quando uma sessão termina, isso é, quando o browser ou a aba é fechado. Além disso, o SessionStorage possui mais espaço de armazenamento, com capacidade de 5-10MB.
