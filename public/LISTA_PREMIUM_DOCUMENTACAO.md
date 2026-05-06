## 1. O produto Lista Premium

### 1.1 O que é

A **Lista Premium** é um produto digital voltado a quem trabalha ou quer trabalhar com **maquiagem e cosméticos** (revenda, loja física, e-commerce, atendimento por redes sociais). O foco é **encontrar e contatar fornecedores** de forma organizada, sem depender só de indicações soltas.

### 1.2 O que ele faz

- Reúne **fornecedores** em um único lugar, com dados para contato (Instagram, WhatsApp quando disponível, endereço, site).
- Permite **buscar** na lista por nome, canal, cidade/estado ou trechos do cadastro.
- Oferece uma **calculadora de precificação** para simular preço de venda a partir de custos, taxas de plataforma e diferentes estratégias (margem, markup, concorrente).
- Disponibiliza **acesso aos materiais em PDF** incluídos na oferta (bônus), para leitura dentro do próprio aplicativo.

### 1.3 O que ele entrega (valor para a compradora)

| Entrega                   | Descrição                                                                                                                                                |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Lista de fornecedores** | Cadastro atual com **92** fornecedores do segmento; cada registro pode ter Instagram, link de WhatsApp, endereço e site — conforme o que foi cadastrado. |
| **Busca na lista**        | Filtra em tempo real para achar fornecedor ou região mais rápido.                                                                                        |
| **Calculadora**           | Sugestão de preço de venda, lucro por unidade, margem real, totais por quantidade; opção de copiar resumo e exportar CSV.                                |
| **Termos e privacidade**  | Textos de uso e política acessíveis após o login.                                                                                                        |
| **Suporte por WhatsApp**  | Atalho configurável (número e mensagem padrão) para quem já comprou falar com suporte.                                                                   |

### 1.4 Bônus incluídos

Materiais extras em **PDF**, pensados como complemento à lista de fornecedores:

| Bônus                  | Conteúdo (promessa do produto)                                                 | Onde no app                                                       |
| ---------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| **Instagram 10K**      | Material em PDF sobre estratégia de **perfil, alcance e vendas no Instagram**. | Rota `/instagram10k` — arquivo `/pdf/instagram10k.pdf`            |
| **WhatsApp Lucrativo** | Material em PDF sobre **atendimento e vendas pelo WhatsApp**.                  | Rota `/whatsapplucrativo` — arquivo `/pdf/whatsapp-lucrativo.pdf` |

_(O conteúdo detalhado de cada PDF está nos próprios arquivos PDF; o app apenas exibe o documento.)_

### 1.5 Escopo desta documentação

Descreve **como o aplicativo da área de membros funciona** (entrada, sessão, rotas, navegação entre seções, regras da calculadora, tabela de fornecedores e arquivos no código). **Não** trata de layout visual, tipografia ou identidade gráfica.

---

## 2. Stack técnica (referência)

| Item           | Detalhe                                                        |
| -------------- | -------------------------------------------------------------- |
| Interface      | React 19 + TypeScript                                          |
| Build          | Vite                                                           |
| Rotas          | React Router DOM                                               |
| Leitura de PDF | react-pdf + pdfjs-dist                                         |
| Sessão         | `sessionStorage`, chave `lista_premium_member` — `src/auth.ts` |

---

## 3. Entrada e sessão

| Item                         | Detalhe                                                          |
| ---------------------------- | ---------------------------------------------------------------- |
| Tela de entrada              | rota `/app` (`src/pages/Login.tsx`)                              |
| Verificação                  | `POST /api/check-access` com JSON `{ "email": "..." }`           |
| Sucesso                      | `access: true`; opcionalmente `customer.email` e `customer.name` |
| Sessão                       | `setMemberSession` grava `{ email, name }` no `sessionStorage`   |
| Após login                   | redirecionamento para `/inicio`                                  |
| Sem sessão em rota protegida | redirecionamento para `/app`                                     |
| Contato na tela de login     | `fornecedoresmake.list@gmail.com`                                |
| Desenvolvimento              | atalho “Entrar sem login” apenas em modo dev                     |

Auxiliar: `/app/area` → `/inicio`. Demais rotas não mapeadas seguem regras em `src/App.tsx`.

---

## 4. Rotas do aplicativo (área de membros)

Exigem sessão (`MemberAreaLayout` + conteúdo dentro de `AppLayout`).

| Rota                 | Função                                                       |
| -------------------- | ------------------------------------------------------------ |
| `/inicio`            | Entrada do app após login: atalhos para as seções principais |
| `/fornecedores`      | Lista pesquisável de fornecedores                            |
| `/calculadora`       | Precificação em passos + resultados e exportação             |
| `/instagram10k`      | Abertura do PDF _Instagram 10K_                              |
| `/whatsapplucrativo` | Abertura do PDF _WhatsApp Lucrativo_                         |
| `/termos`            | Termos de uso                                                |
| `/privacidade`       | Política de privacidade                                      |
| `/bonus`             | Legado: redireciona para `/instagram10k`                     |

Exemplos: `SEU_DOMINIO/inicio`, `SEU_DOMINIO/fornecedores`, etc.

---

## 5. Navegação entre seções

- **Telas largas:** no topo, acesso a **Fornecedores**, **Calculadora**, **Instagram 10K** e **WhatsApp Lucrativo**; o logotipo leva de volta ao **Início** (`/inicio`).
- **Telas pequenas:** mesmas seções acessíveis por atalhos na **barra inferior** (Início, Fornecedores, Calculadora, Instagram 10K, WhatsApp Lucrativo).

### Suporte WhatsApp (compradora logada)

Componente `WhatsAppButton`: abre conversa com o número definido em `src/constants.ts` (`WHATSAPP_NUMBER`) com texto inicial `WHATSAPP_MESSAGE_MEMBER`. Tooltip exibido no desktop: **“Precisa de ajuda? Fale com o Suporte”**. Ajuste número e mensagem em produção conforme seu atendimento.

---

## 6. Página `/inicio`

- Saudação com o **primeiro nome** da sessão, quando existir.
- Atalhos para: **Fornecedores**, **Calculadora**, **Instagram 10K**, **WhatsApp Lucrativo**.

---

## 7. Fornecedores (`/fornecedores`)

### 7.1 Comportamento

- Busca em tempo real no texto formado por: nome, Instagram, WhatsApp, endereço e site.
- Placeholder da busca: _Buscar por nome, produto, estado…_
- Cada fornecedor aparece em um **card** com nome, identificador **#NN** (posição na lista base) e ações de **abrir Instagram**, **WhatsApp**, **mapa/endereço** ou **site** — cada ação só aparece se o dado existir no cadastro.

### 7.2 Dados no código

- Arquivo: `src/data/fornecedores.ts` — array `fornecedores`, tipo `Fornecedor`, funções auxiliares `nomeExibivel`, `iniciaisFornecedor`.
- Quantidade de registros: **92**.

### 7.3 Tabela de fornecedores e links

|   # | Nome                       | Instagram / canal                                    | WhatsApp                    | Endereço                                                                         | Site                                    |
| --: | -------------------------- | ---------------------------------------------------- | --------------------------- | -------------------------------------------------------------------------------- | --------------------------------------- |
|   1 | Afife                      | https://instagram.com/afife.oficial                  | https://wa.me/551133134580  | Rua 25 de Março - Centro, São Paulo - SP                                         | https://afife.com.br                    |
|   2 | Alexandre Bijux            | https://instagram.com/alexandre_bijuxoficial         | —                           | Rua 25 de Março - Centro, São Paulo - SP                                         | https://linktr.ee/alexandrebijoux       |
|   3 | Amili                      | https://instagram.com/amili_makeup                   | https://wa.me/5511949809862 | Rua 25 de Março - Centro, São Paulo - SP                                         | https://heylink.me/camilaye520          |
|   4 | Amor e Anjo                | https://instagram.com/amoranjooficial                | https://wa.me/5511978783981 | São Paulo - SP                                                                   | —                                       |
|   5 | Armazém dos Cosméticos     | https://instagram.com/armazemdoscosmeticos_atacado   | https://wa.me/5575992049060 | Feira de Santana - BA                                                            | —                                       |
|   6 | Arte de Unha / Helen Color | https://instagram.com/artedeunha_helencolor          | https://wa.me/5511999994557 | São Paulo - SP                                                                   | https://helencolor.com.br               |
|   7 | Atacado Fácil              | https://instagram.com/atacadofacil                   | —                           | —                                                                                | https://atacadofacil.com                |
|   8 | Atena Maquiagem            | https://instagram.com/atenamaquiagens.oficial        | https://wa.me/5511983185847 | São Paulo - SP                                                                   | —                                       |
|   9 | Bella Acto                 | https://instagram.com/bellaacto                      | https://wa.me/5511941557847 | São Paulo - SP                                                                   | https://bellaacto.com.br                |
|  10 | Bem Mulher (Catálogo)      | https://instagram.com/bemmulher_catalogo             | https://wa.me/5511963000793 | Av. Senador Queiroz, 611 - Centro, São Paulo - SP                                | —                                       |
|  11 | Bem Mulher Maquiagem       | https://instagram.com/bemmulhermaquiagem             | https://wa.me/5511963000793 | Av. Senador Queiroz, 611 - 2º andar, loja 439 - Centro, São Paulo - SP           | https://bemmulhermaquiagem.com.br       |
|  12 | Bijutotal                  | https://instagram.com/bijutotal                      | —                           | São Paulo - SP                                                                   | —                                       |
|  13 | Bonita Maquiagem           | https://instagram.com/_bonitamaquiagem               | https://wa.me/5511991133389 | São Paulo - SP                                                                   | https://bonitamaquiagem.com.br          |
|  14 | Brasil 3D Maquiagens       | https://instagram.com/brasil3dmaquiagens             | https://wa.me/5511940227070 | São Paulo - SP                                                                   | —                                       |
|  15 | Bruna Maquiagens           | https://instagram.com/brunamaquiagem.oficial         | https://wa.me/5511986161888 | Rua Plínio Ramos, 43 - Centro, São Paulo - SP                                    | —                                       |
|  16 | Cah Folheados              | https://instagram.com/cahfolheados                   | —                           | —                                                                                | —                                       |
|  17 | Carmos BR                  | https://instagram.com/carmosbr                       | —                           | —                                                                                | —                                       |
|  18 | Casa da Maquiagem          | https://instagram.com/casadasmaquiagens_oficial      | https://wa.me/5511959259333 | Rua Augusto Severo, 45 - Centro, São Paulo - SP                                  | —                                       |
|  19 | Casa de Mulher             | https://instagram.com/casa.de.mulher                 | https://wa.me/5511983214072 | São Paulo - SP                                                                   | https://casademulher.net                |
|  20 | Cat Make                   | https://instagram.com/cat.make                       | https://wa.me/5511986207999 | Rua Hannemann, 415 - Galeria Pagé Brás, Loja T703-T705 - Canindé, São Paulo - SP | https://catmakeup.com.br                |
|  21 | Century Star               | https://instagram.com/century_star_maquiagem_atacado | https://wa.me/5511952899999 | Rua Florêncio de Abreu, 353 - Centro, São Paulo - SP                             | —                                       |
|  22 | Célia e Junior Maquiagem   | https://instagram.com/celiaejunioracessorios         | https://wa.me/5511939079140 | Av. Senador Queiroz, 611 - Centro, São Paulo - SP                                | https://celiaejunior.com.br             |
|  23 | Cílios das Divas           | https://instagram.com/ciliosdasdivas                 | https://wa.me/5519996297768 | Osasco - SP                                                                      | https://ciliosdasdivas.com              |
|  24 | DAFU                       | https://instagram.com/dafu.com.br                    | https://wa.me/5511972866668 | Rua 25 de Março, 1267 - Centro, São Paulo - SP                                   | https://dafu.com.br                     |
|  25 | Distribuidora Gama         | https://instagram.com/distribuidoragama              | https://wa.me/553135031719  | Rod. BR-381 Fernão Dias, KM 483.35 - Betim, MG                                   | https://distribuidoragama.com.br        |
|  26 | Distribuidora JCF          | https://instagram.com/distribuidorajcf               | https://wa.me/5511982443988 | Rua Caetano Pinto, 247 Anexo 249 - Brás, São Paulo - SP                          | https://distribuidorajcf.com.br         |
|  27 | Dom Doça Esmalteria        | https://instagram.com/domdocaesmalteria              | https://wa.me/5511947570916 | Ladeira Porto Geral - Centro, São Paulo - SP                                     | https://domdocaesmalteria.com.br        |
|  28 | Donna Bijuta               | https://instagram.com/donnabijuta                    | https://wa.me/5511990004798 | —                                                                                | —                                       |
|  29 | DPC Distribuidor           | https://instagram.com/dpcdistribuidor                | https://wa.me/553333290000  | Av. Aurea Carlos Leite de Matos, 1801 - Caratinga, MG                            | https://dpcnet.com.br                   |
|  30 | Fashion Makeup             | https://instagram.com/f.fashionmakeup                | https://wa.me/5511970181700 | Rua Carlos de Souza Nazaré, 241 - Centro, São Paulo - SP                         | https://lojafashionmakeup.com.br        |
|  31 | Florisa Cosméticos         | https://instagram.com/florisacosmeticosatacado       | https://wa.me/5511962827121 | Rua Paula Souza, 482 - Centro, São Paulo - SP                                    | https://florisamake.com.br              |
|  32 | GA Brasil                  | https://instagram.com/gabrasiloficial                | https://wa.me/5511992840008 | Rua Paula Sousa, 340 - Centro, São Paulo - SP                                    | https://gabrasilcosmeticos.com.br       |
|  33 | GF Produtos                | https://shopee.com.br/gfprodutos                     | —                           | —                                                                                | https://shopee.com.br/gfprodutos        |
|  34 | Helen Color                | https://instagram.com/helencolornails                | https://wa.me/5511983731789 | Rua Paula Souza, 62 / Rua 25 de Março, 1294 - Centro, São Paulo - SP             | https://helencolor.com.br               |
|  35 | Igor e Hugo Makeup         | https://instagram.com/igorehugomakeup25              | https://wa.me/5511983324147 | Rua Carlos de Souza Nazaré, 320 - São Paulo - SP                                 | —                                       |
|  36 | Izabel Cosméticos          | https://instagram.com/izabelcosmeticos               | https://wa.me/5537991821210 | —                                                                                | https://izabelcosmeticos.com.br         |
|  37 | JM Cosmético               | https://instagram.com/jmcosmeticos25                 | https://wa.me/5511981676631 | Rua 25 de Março, 1072, 1º Andar, Sala 103 - Centro, São Paulo - SP               | https://jmcosmeticos25.com.br           |
|  38 | Jummy                      | https://instagram.com/jummyju_makeup                 | https://wa.me/5511968166940 | Rua Euclides da Cunha, 95 - Brás, São Paulo - SP                                 | https://jummyju.com                     |
|  39 | Ki Make Cosméticos         | https://instagram.com/kimakecosmeticos               | https://wa.me/554599817553  | Av. Brasil, 6436 - Loja 3 - Centro, Cascavel - PR                                | https://kimake.com.br                   |
|  40 | Kinature                   | https://instagram.com/kinature                       | https://wa.me/5511979509001 | Rua Sta Rosa, 78 - Brás, São Paulo - SP                                          | https://kinature.com.br                 |
|  41 | La Bella                   | https://instagram.com/labella_make138                | https://wa.me/5511947551777 | Rua Paula Souza, 529 box 1 e 2 - Centro, São Paulo - SP                          | —                                       |
|  42 | Lancel Maquiagens          | https://instagram.com/lancelmaquiagens               | https://wa.me/5511951425252 | Rua Paula Souza, 313 - 1º andar - Centro, São Paulo - SP                         | —                                       |
|  43 | Lazuli                     | https://instagram.com/lazulimakeupoficial            | https://wa.me/5511964238114 | Av. Rangel Pestana - Brás, São Paulo - SP                                        | https://lazulimakeup.com.br             |
|  44 | Lef Maquiagem              | https://instagram.com/lef_maquiagens                 | https://wa.me/5511914591718 | Rua Hannemann, 133 - 1º andar - Canindé, São Paulo - SP                          | https://lfmakeup.com                    |
|  45 | Lii Makes                  | https://instagram.com/liimakes                       | https://wa.me/5511994644441 | Região do Brás, São Paulo - SP                                                   | —                                       |
|  46 | Linda Rosa Make            | https://instagram.com/lindarosamake                  | https://wa.me/5511946456987 | Rua Monsenhor de Andrade, 1023 - Brás, São Paulo - SP                            | —                                       |
|  47 | Loja Dora Make             | https://instagram.com/lojadoramake                   | https://wa.me/5511982837120 | Rua Barão de Ladário, 319 - loja 37, Galeria Barão - Brás, São Paulo - SP        | https://doramake.com.br                 |
|  48 | Love Make                  | https://instagram.com/lovemake_box49                 | https://wa.me/5511978561263 | Rua Hannemann, 415 - Galeria Pagé box 49 - Brás, São Paulo - SP                  | —                                       |
|  49 | Lucky Lady                 | https://instagram.com/lucky_lady1040                 | https://wa.me/5511981199348 | Rua Henrique Dias, 44 - Brás, São Paulo - SP                                     | https://luckyladycosmeticos.com.br      |
|  50 | Lucky Ye                   | https://instagram.com/lucky_ye_maquiagem             | https://wa.me/5511997066789 | Rua Barão de Ladário, 923 - Brás, São Paulo - SP                                 | https://luckyye.com.br                  |
|  51 | Macrisan                   | https://instagram.com/macrisanmakeup                 | https://wa.me/5511992166748 | —                                                                                | https://macrisan.com.br                 |
|  52 | Make Lolita                | https://instagram.com/makelolita591                  | https://wa.me/5511954359101 | —                                                                                | —                                       |
|  53 | Make-up Brasil             | https://instagram.com/maquiagem_atacado              | https://wa.me/5511969167726 | —                                                                                | —                                       |
|  54 | Maki Makes Distribuidora   | https://instagram.com/makimakesdistribuidora         | https://wa.me/5562981374520 | Av. Contorno, 1764 - Loja 01 - Setor Norte Ferroviário, Goiânia - GO             | —                                       |
|  55 | Marieta Cosméticos         | https://instagram.com/marieta_lojas_cosmeticos       | https://wa.me/5511940677775 | Rua Tiers, 558 - 1º Piso, Loja 1102 - Elev Shop Brás, São Paulo - SP             | https://marietacosmeticos.com.br        |
|  56 | Mauro Bijuterias           | https://instagram.com/maurobijouterias               | https://wa.me/551131045000  | Ladeira Porto Geral, 14 - Loja 160 - Centro, São Paulo - SP                      | https://maurobijouterias.com.br         |
|  57 | Mey Brasil                 | https://instagram.com/mey.brasil                     | https://wa.me/5511960792405 | Rua Paula Souza, 198 - Centro, São Paulo - SP                                    | https://meybrasil.com.br                |
|  58 | Mina Makes                 | https://instagram.com/minamakes_box122               | https://wa.me/5511987777750 | Região da Rua 25 de Março, São Paulo - SP                                        | —                                       |
|  59 | Miss Florida               | https://instagram.com/makeup.missflorida             | https://wa.me/5511992602023 | Rua Major Claudiano, 2157 - Centro, Franca - SP                                  | https://missflorida.com.br              |
|  60 | Mofrom Cosmetic            | https://instagram.com/mofrom_comestic                | —                           | Rua Oriente, 85, Letra A - Brás, São Paulo - SP                                  | —                                       |
|  61 | Molly Lucia                | https://instagram.com/mollyluciamakeup               | https://wa.me/5511952833888 | São Paulo - SP                                                                   | https://molly-lucia-maquiagem.kyte.site |
|  62 | Monica Cosméticos          | https://instagram.com/monica_cosmeticos_21           | https://wa.me/5511986719666 | Rua Miguel Carlos - Centro, São Paulo - SP                                       | https://monicacosmeticos.com.br         |
|  63 | Márcia Make-up             | https://instagram.com/marciamakeupoficial            | https://wa.me/5511985151788 | Av. Senador Queiroz, 611 - 2º andar, loja 37 - Centro, São Paulo - SP            | https://marciamake.com.br               |
|  64 | Net Vendas                 | https://instagram.com/nettvendas                     | https://wa.me/553799841380  | Rua Itamarandiba, 735 - Bom Pastor, Divinópolis - MG                             | —                                       |
|  65 | Nino e Nunes               | https://instagram.com/ninoenunes                     | https://wa.me/5511998819864 | Rua Miguel Carlos, 85 - Centro, São Paulo - SP                                   | https://ninoenunescosmeticos.com.br     |
|  66 | Paris Cosméticos           | https://instagram.com/pariscosmeticos209             | https://wa.me/5511981194888 | Rua Florêncio de Abreu, 203, Anexo 209 - Centro, São Paulo - SP                  | https://paris-cosmeticos.ueniweb.com    |
|  67 | Perdut                     | https://instagram.com/_perdut                        | —                           | —                                                                                | —                                       |
|  68 | Pink Cosméticos            | https://instagram.com/pinkcosmeticos_                | https://wa.me/5592981521312 | Av. Eduardo Ribeiro, 457, Loja 207 - Centro, Manaus - AM                         | https://pinkcosmeticosam.com.br         |
|  69 | Ponto da Maquiagem         | https://instagram.com/pontodamake155                 | https://wa.me/5511991133389 | 3º andar, Loja 3237 - Galeria Pagé Brás, São Paulo - SP                          | https://pontodamaquiagem.com.br         |
|  70 | Porto Distribuidora        | https://instagram.com/portodistribuidora             | https://wa.me/5562998400576 | Av. C104, 832, Q. 281, Lote 04 - Jardim América, Goiânia - GO                    | https://portoatacado.com.br             |
|  71 | RC Revenda de Cosméticos   | https://instagram.com/rc.revendadecosmeticos         | https://wa.me/5511971975967 | Rua dos Italianos, 981 - São Paulo - SP                                          | https://revendadecosmeticos.com.br      |
|  72 | RDMAKE                     | https://instagram.com/rdmake_up                      | https://wa.me/5511982519052 | São Paulo - SP                                                                   | —                                       |
|  73 | Rede 25 em Cotia           | https://instagram.com/rede25emcotia                  | https://wa.me/5511993542232 | Rua Senador Feijó, 42, Box 03 - Centro, Cotia - SP                               | https://rede25emcotia.com.br            |
|  74 | Renata Bertolinni          | https://instagram.com/renatabertolinni.oficial       | —                           | —                                                                                | https://renatabertolinni.com.br         |
|  75 | Reve Makeup                | https://instagram.com/reve_makeup                    | https://wa.me/5511970242919 | Rua 25 de Março, 1261 - São Paulo - SP                                           | https://revemakeup.com.br               |
|  76 | Roge Distribuidora         | https://instagram.com/rogedistribuidora              | https://wa.me/551147297171  | Av. do Progresso, 1001 - Ponte Alta, Jarinu - SP                                 | https://roge.com.br                     |
|  77 | RP Makeup                  | https://instagram.com/rp.makeup1                     | —                           | —                                                                                | —                                       |
|  78 | RP Representações          | https://instagram.com/rp.representacoes              | —                           | —                                                                                | —                                       |
|  79 | Seven Colors               | https://instagram.com/lojasevencolors                | https://wa.me/5511964449689 | Rua Antonio Pais, 135 - Centro, São Paulo - SP                                   | —                                       |
|  80 | Sharazad                   | https://instagram.com/sharazad.oficial               | —                           | Bairro do Pari - São Paulo - SP                                                  | —                                       |
|  81 | Sonho de Beleza            | https://instagram.com/ssonhodebeleza                 | https://wa.me/5511984356399 | Av. Senador Queiroz, 611 - Box 378, 2º andar - Centro, São Paulo - SP            | —                                       |
|  82 | Sousa Biju                 | https://instagram.com/sousabiju                      | https://wa.me/551132274172  | Rua 25 de Março, 986 - Centro, São Paulo - SP                                    | https://sousavip.com.br                 |
|  83 | Sousa Make                 | https://instagram.com/sousa.make                     | https://wa.me/551132278559  | Rua 25 de Março, 584 - Centro, São Paulo - SP                                    | https://sousavip.com.br                 |
|  84 | Spetacolo Acessórios       | https://instagram.com/spetacolo.acessorios           | https://wa.me/5511951932725 | Av. Senador Queiroz, 611 - 1º andar, loja 2 - Centro, São Paulo - SP             | https://spetacoloacessorios.com.br      |
|  85 | TM Distribuições           | https://instagram.com/tmdistribuicoes                | —                           | —                                                                                | —                                       |
|  86 | Unick                      | https://instagram.com/unick_make                     | https://wa.me/5511952308888 | Rua Rio Bonito, 1452 - Brás, São Paulo - SP                                      | https://unickmake.com.br                |
|  87 | Vicente Makeup             | https://instagram.com/vicente.makeup                 | https://wa.me/5511949815177 | Rua Monsenhor Andrade, 897 - Brás, São Paulo - SP                                | https://vicentemakeup.vip               |
|  88 | Virtual Make               | https://instagram.com/virtualmake                    | https://wa.me/5511912622742 | —                                                                                | https://virtualmake.com.br              |
|  89 | Vivian Tong (Vishion)      | https://instagram.com/vishionmaquiagem               | https://wa.me/5511987229022 | Rua Monsenhor Andrade, 957 - Loja 01/03-B - Brás, São Paulo - SP                 | —                                       |
|  90 | We Make                    | https://instagram.com/wemake.br                      | https://wa.me/556196189490  | —                                                                                | https://wemakebrasil.com.br             |
|  91 | Welsinho Bijoux            | https://instagram.com/welsinhobijoux                 | —                           | —                                                                                | —                                       |
|  92 | X&D Bijuterias             | https://instagram.com/xdbijuterias                   | https://wa.me/5511981553009 | Rua Paula Sousa, 354 - Centro, São Paulo - SP                                    | https://xdbijuterias.com.br             |

_“—” = campo não cadastrado._

---

## 8. Calculadora (`/calculadora`)

Fluxo em **passos** com **painel de resultado** (resumo numérico), **copiar valores** e **baixar CSV**.

### Passo 1 — Custos diretos por unidade

| Campo                      | Uso                           |
| -------------------------- | ----------------------------- |
| Custo do produto           | Preço pago ao fornecedor      |
| Frete por unidade          | Frete rateado por unidade     |
| Impostos/taxas por unidade | Tributos rateados por unidade |
| Embalagem / insumos        | Por unidade                   |

**Custo direto** = soma acima **+ custos fixos por unidade** (passo 2).

### Passo 2 — Taxas e comissões

| Campo                         | Uso                               |
| ----------------------------- | --------------------------------- |
| Taxa marketplace / cartão (%) | Percentual sobre o preço de venda |
| Custos fixos por unidade      | Marketing, estoque, tempo, etc.   |

### Passo 3 — Modo de precificação

1. **Margem desejada** — obtém preço a partir do custo, da taxa % e da margem % desejada sobre o preço final (fórmula do tipo `custo / (1 - taxa - margem)` quando o denominador permite).
2. **Markup** — `preço = custo × (1 + markup%)`.
3. **Concorrente** — usa o preço do concorrente; se a margem real calculada for **inferior a 15%**, o app sugere preço com margem alvo em torno de **20%**; caso contrário segue a lógica de alinhamento ao preço informado (com fallbacks no código).

Campo **quantidade** gera totais de custo, receita e lucro.

### Resultados

Preço sugerido, taxa em R$, lucro por unidade, margem real %; alertas por faixa de margem; **Copiar valores** e **Baixar CSV**.

---

## 9. Instagram 10K (`/instagram10k`)

- Entrega o bônus em PDF sobre Instagram (perfil, alcance, vendas).
- Arquivo servido: `/pdf/instagram10k.pdf` — URL absoluta: `SEU_DOMINIO/pdf/instagram10k.pdf`
- Há link para voltar ao `/inicio` e o PDF é exibido pelo componente `PdfViewer`.

---

## 10. WhatsApp Lucrativo (`/whatsapplucrativo`)

- Entrega o bônus em PDF sobre WhatsApp (atendimento e vendas).
- Arquivo: `/pdf/whatsapp-lucrativo.pdf` — `SEU_DOMINIO/pdf/whatsapp-lucrativo.pdf`
- Mesma ideia de fluxo que a rota do Instagram 10K (`PdfViewer`).

---

## 11. Termos e privacidade

| Rota           | Código                              |
| -------------- | ----------------------------------- |
| `/termos`      | `src/pages/TermosDeUso.tsx`         |
| `/privacidade` | `src/pages/PoliticaPrivacidade.tsx` |

---

## 12. Arquivos principais no repositório

| Função                           | Caminho                                                                                         |
| -------------------------------- | ----------------------------------------------------------------------------------------------- |
| Rotas (inclui área membro)       | `src/App.tsx`                                                                                   |
| Navegação e shell da área membro | `src/components/member/AppLayout.tsx`                                                           |
| Proteção + `Outlet`              | `src/layouts/MemberAreaLayout.tsx`                                                              |
| Sessão                           | `src/auth.ts`                                                                                   |
| Login                            | `src/pages/Login.tsx`                                                                           |
| Início                           | `src/pages/MemberHome.tsx`                                                                      |
| Lista + busca                    | `src/components/member/FornecedoresList.tsx`                                                    |
| Card fornecedor                  | `src/components/member/FornecedorCard.tsx`                                                      |
| Dados fornecedores               | `src/data/fornecedores.ts`                                                                      |
| Calculadora                      | `src/components/CalculadoraPrecos.tsx`, `src/pages/Calculadora.tsx`                             |
| PDFs                             | `src/pages/Instagram10k.tsx`, `src/pages/WhatsAppLucrativo.tsx`, `src/components/PdfViewer.tsx` |
| Constantes (WhatsApp suporte)    | `src/constants.ts`                                                                              |
| Botão WhatsApp                   | `src/components/WhatsAppButton.tsx`                                                             |

---
