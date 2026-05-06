export type Fornecedor = {
  id: number;
  nome: string;
  instagram?: string;
  whatsapp?: string;
  endereco?: string;
  site?: string;
};

export const fornecedores: Fornecedor[] = [
  { id: 1, nome: 'Afife', instagram: 'https://instagram.com/afife.oficial', whatsapp: 'https://wa.me/551133134580', endereco: 'Rua 25 de Março - Centro, São Paulo - SP', site: 'https://afife.com.br' },
  { id: 2, nome: 'Alexandre Bijux', instagram: 'https://instagram.com/alexandre_bijuxoficial', endereco: 'Rua 25 de Março - Centro, São Paulo - SP', site: 'https://linktr.ee/alexandrebijoux' },
  { id: 3, nome: 'Amili', instagram: 'https://instagram.com/amili_makeup', whatsapp: 'https://wa.me/5511949809862', endereco: 'Rua 25 de Março - Centro, São Paulo - SP', site: 'https://heylink.me/camilaye520' },
  { id: 4, nome: 'Amor e Anjo', instagram: 'https://instagram.com/amoranjooficial', whatsapp: 'https://wa.me/5511978783981', endereco: 'São Paulo - SP' },
  { id: 5, nome: 'Armazém dos Cosméticos', instagram: 'https://instagram.com/armazemdoscosmeticos_atacado', whatsapp: 'https://wa.me/5575992049060', endereco: 'Feira de Santana - BA' },
  { id: 6, nome: 'Arte de Unha / Helen Color', instagram: 'https://instagram.com/artedeunha_helencolor', whatsapp: 'https://wa.me/5511999994557', endereco: 'São Paulo - SP', site: 'https://helencolor.com.br' },
  { id: 7, nome: 'Atacado Fácil', instagram: 'https://instagram.com/atacadofacil', site: 'https://atacadofacil.com' },
  { id: 8, nome: 'Atena Maquiagem', instagram: 'https://instagram.com/atenamaquiagens.oficial', whatsapp: 'https://wa.me/5511983185847', endereco: 'São Paulo - SP' },
  { id: 9, nome: 'Bella Acto', instagram: 'https://instagram.com/bellaacto', whatsapp: 'https://wa.me/5511941557847', endereco: 'São Paulo - SP', site: 'https://bellaacto.com.br' },
  { id: 10, nome: 'Bem Mulher (Catálogo)', instagram: 'https://instagram.com/bemmulher_catalogo', whatsapp: 'https://wa.me/5511963000793', endereco: 'Av. Senador Queiroz, 611 - Centro, São Paulo - SP' },
  { id: 11, nome: 'Bem Mulher Maquiagem', instagram: 'https://instagram.com/bemmulhermaquiagem', whatsapp: 'https://wa.me/5511963000793', endereco: 'Av. Senador Queiroz, 611 - 2º andar, loja 439 - Centro, São Paulo - SP', site: 'https://bemmulhermaquiagem.com.br' },
  { id: 12, nome: 'Bijutotal', instagram: 'https://instagram.com/bijutotal', endereco: 'São Paulo - SP' },
  { id: 13, nome: 'Bonita Maquiagem', instagram: 'https://instagram.com/_bonitamaquiagem', whatsapp: 'https://wa.me/5511991133389', endereco: 'São Paulo - SP', site: 'https://bonitamaquiagem.com.br' },
  { id: 14, nome: 'Brasil 3D Maquiagens', instagram: 'https://instagram.com/brasil3dmaquiagens', whatsapp: 'https://wa.me/5511940227070', endereco: 'São Paulo - SP' },
  { id: 15, nome: 'Bruna Maquiagens', instagram: 'https://instagram.com/brunamaquiagem.oficial', whatsapp: 'https://wa.me/5511986161888', endereco: 'Rua Plínio Ramos, 43 - Centro, São Paulo - SP' },
  { id: 16, nome: 'Cah Folheados', instagram: 'https://instagram.com/cahfolheados' },
  { id: 17, nome: 'Carmos BR', instagram: 'https://instagram.com/carmosbr' },
  { id: 18, nome: 'Casa da Maquiagem', instagram: 'https://instagram.com/casadasmaquiagens_oficial', whatsapp: 'https://wa.me/5511959259333', endereco: 'Rua Augusto Severo, 45 - Centro, São Paulo - SP' },
  { id: 19, nome: 'Casa de Mulher', instagram: 'https://instagram.com/casa.de.mulher', whatsapp: 'https://wa.me/5511983214072', endereco: 'São Paulo - SP', site: 'https://casademulher.net' },
  { id: 20, nome: 'Cat Make', instagram: 'https://instagram.com/cat.make', whatsapp: 'https://wa.me/5511986207999', endereco: 'Rua Hannemann, 415 - Galeria Pagé Brás, Loja T703-T705 - Canindé, São Paulo - SP', site: 'https://catmakeup.com.br' },
  { id: 21, nome: 'Century Star', instagram: 'https://instagram.com/century_star_maquiagem_atacado', whatsapp: 'https://wa.me/5511952899999', endereco: 'Rua Florêncio de Abreu, 353 - Centro, São Paulo - SP' },
  { id: 22, nome: 'Célia e Junior Maquiagem', instagram: 'https://instagram.com/celiaejunioracessorios', whatsapp: 'https://wa.me/5511939079140', endereco: 'Av. Senador Queiroz, 611 - Centro, São Paulo - SP', site: 'https://celiaejunior.com.br' },
  { id: 23, nome: 'Cílios das Divas', instagram: 'https://instagram.com/ciliosdasdivas', whatsapp: 'https://wa.me/5519996297768', endereco: 'Osasco - SP', site: 'https://ciliosdasdivas.com' },
  { id: 24, nome: 'DAFU', instagram: 'https://instagram.com/dafu.com.br', whatsapp: 'https://wa.me/5511972866668', endereco: 'Rua 25 de Março, 1267 - Centro, São Paulo - SP', site: 'https://dafu.com.br' },
  { id: 25, nome: 'Distribuidora Gama', instagram: 'https://instagram.com/distribuidoragama', whatsapp: 'https://wa.me/553135031719', endereco: 'Rod. BR-381 Fernão Dias, KM 483.35 - Betim, MG', site: 'https://distribuidoragama.com.br' },
  { id: 26, nome: 'Distribuidora JCF', instagram: 'https://instagram.com/distribuidorajcf', whatsapp: 'https://wa.me/5511982443988', endereco: 'Rua Caetano Pinto, 247 Anexo 249 - Brás, São Paulo - SP', site: 'https://distribuidorajcf.com.br' },
  { id: 27, nome: 'Dom Doça Esmalteria', instagram: 'https://instagram.com/domdocaesmalteria', whatsapp: 'https://wa.me/5511947570916', endereco: 'Ladeira Porto Geral - Centro, São Paulo - SP', site: 'https://domdocaesmalteria.com.br' },
  { id: 28, nome: 'Donna Bijuta', instagram: 'https://instagram.com/donnabijuta', whatsapp: 'https://wa.me/5511990004798' },
  { id: 29, nome: 'DPC Distribuidor', instagram: 'https://instagram.com/dpcdistribuidor', whatsapp: 'https://wa.me/553333290000', endereco: 'Av. Aurea Carlos Leite de Matos, 1801 - Caratinga, MG', site: 'https://dpcnet.com.br' },
  { id: 30, nome: 'Fashion Makeup', instagram: 'https://instagram.com/f.fashionmakeup', whatsapp: 'https://wa.me/5511970181700', endereco: 'Rua Carlos de Souza Nazaré, 241 - Centro, São Paulo - SP', site: 'https://lojafashionmakeup.com.br' },
  { id: 31, nome: 'Florisa Cosméticos', instagram: 'https://instagram.com/florisacosmeticosatacado', whatsapp: 'https://wa.me/5511962827121', endereco: 'Rua Paula Souza, 482 - Centro, São Paulo - SP', site: 'https://florisamake.com.br' },
  { id: 32, nome: 'GA Brasil', instagram: 'https://instagram.com/gabrasiloficial', whatsapp: 'https://wa.me/5511992840008', endereco: 'Rua Paula Sousa, 340 - Centro, São Paulo - SP', site: 'https://gabrasilcosmeticos.com.br' },
  { id: 33, nome: 'GF Produtos', instagram: 'https://shopee.com.br/gfprodutos', site: 'https://shopee.com.br/gfprodutos' },
  { id: 34, nome: 'Helen Color', instagram: 'https://instagram.com/helencolornails', whatsapp: 'https://wa.me/5511983731789', endereco: 'Rua Paula Souza, 62 / Rua 25 de Março, 1294 - Centro, São Paulo - SP', site: 'https://helencolor.com.br' },
  { id: 35, nome: 'Igor e Hugo Makeup', instagram: 'https://instagram.com/igorehugomakeup25', whatsapp: 'https://wa.me/5511983324147', endereco: 'Rua Carlos de Souza Nazaré, 320 - São Paulo - SP' },
  { id: 36, nome: 'Izabel Cosméticos', instagram: 'https://instagram.com/izabelcosmeticos', whatsapp: 'https://wa.me/5537991821210', site: 'https://izabelcosmeticos.com.br' },
  { id: 37, nome: 'JM Cosmético', instagram: 'https://instagram.com/jmcosmeticos25', whatsapp: 'https://wa.me/5511981676631', endereco: 'Rua 25 de Março, 1072, 1º Andar, Sala 103 - Centro, São Paulo - SP', site: 'https://jmcosmeticos25.com.br' },
  { id: 38, nome: 'Jummy', instagram: 'https://instagram.com/jummyju_makeup', whatsapp: 'https://wa.me/5511968166940', endereco: 'Rua Euclides da Cunha, 95 - Brás, São Paulo - SP', site: 'https://jummyju.com' },
  { id: 39, nome: 'Ki Make Cosméticos', instagram: 'https://instagram.com/kimakecosmeticos', whatsapp: 'https://wa.me/554599817553', endereco: 'Av. Brasil, 6436 - Loja 3 - Centro, Cascavel - PR', site: 'https://kimake.com.br' },
  { id: 40, nome: 'Kinature', instagram: 'https://instagram.com/kinature', whatsapp: 'https://wa.me/5511979509001', endereco: 'Rua Sta Rosa, 78 - Brás, São Paulo - SP', site: 'https://kinature.com.br' },
  { id: 41, nome: 'La Bella', instagram: 'https://instagram.com/labella_make138', whatsapp: 'https://wa.me/5511947551777', endereco: 'Rua Paula Souza, 529 box 1 e 2 - Centro, São Paulo - SP' },
  { id: 42, nome: 'Lancel Maquiagens', instagram: 'https://instagram.com/lancelmaquiagens', whatsapp: 'https://wa.me/5511951425252', endereco: 'Rua Paula Souza, 313 - 1º andar - Centro, São Paulo - SP' },
  { id: 43, nome: 'Lazuli', instagram: 'https://instagram.com/lazulimakeupoficial', whatsapp: 'https://wa.me/5511964238114', endereco: 'Av. Rangel Pestana - Brás, São Paulo - SP', site: 'https://lazulimakeup.com.br' },
  { id: 44, nome: 'Lef Maquiagem', instagram: 'https://instagram.com/lef_maquiagens', whatsapp: 'https://wa.me/5511914591718', endereco: 'Rua Hannemann, 133 - 1º andar - Canindé, São Paulo - SP', site: 'https://lfmakeup.com' },
  { id: 45, nome: 'Lii Makes', instagram: 'https://instagram.com/liimakes', whatsapp: 'https://wa.me/5511994644441', endereco: 'Região do Brás, São Paulo - SP' },
  { id: 46, nome: 'Linda Rosa Make', instagram: 'https://instagram.com/lindarosamake', whatsapp: 'https://wa.me/5511946456987', endereco: 'Rua Monsenhor de Andrade, 1023 - Brás, São Paulo - SP' },
  { id: 47, nome: 'Loja Dora Make', instagram: 'https://instagram.com/lojadoramake', whatsapp: 'https://wa.me/5511982837120', endereco: 'Rua Barão de Ladário, 319 - loja 37, Galeria Barão - Brás, São Paulo - SP', site: 'https://doramake.com.br' },
  { id: 48, nome: 'Love Make', instagram: 'https://instagram.com/lovemake_box49', whatsapp: 'https://wa.me/5511978561263', endereco: 'Rua Hannemann, 415 - Galeria Pagé box 49 - Brás, São Paulo - SP' },
  { id: 49, nome: 'Lucky Lady', instagram: 'https://instagram.com/lucky_lady1040', whatsapp: 'https://wa.me/5511981199348', endereco: 'Rua Henrique Dias, 44 - Brás, São Paulo - SP', site: 'https://luckyladycosmeticos.com.br' },
  { id: 50, nome: 'Lucky Ye', instagram: 'https://instagram.com/lucky_ye_maquiagem', whatsapp: 'https://wa.me/5511997066789', endereco: 'Rua Barão de Ladário, 923 - Brás, São Paulo - SP', site: 'https://luckyye.com.br' },
  { id: 51, nome: 'Macrisan', instagram: 'https://instagram.com/macrisanmakeup', whatsapp: 'https://wa.me/5511992166748', site: 'https://macrisan.com.br' },
  { id: 52, nome: 'Make Lolita', instagram: 'https://instagram.com/makelolita591', whatsapp: 'https://wa.me/5511954359101' },
  { id: 53, nome: 'Make-up Brasil', instagram: 'https://instagram.com/maquiagem_atacado', whatsapp: 'https://wa.me/5511969167726' },
  { id: 54, nome: 'Maki Makes Distribuidora', instagram: 'https://instagram.com/makimakesdistribuidora', whatsapp: 'https://wa.me/5562981374520', endereco: 'Av. Contorno, 1764 - Loja 01 - Setor Norte Ferroviário, Goiânia - GO' },
  { id: 55, nome: 'Marieta Cosméticos', instagram: 'https://instagram.com/marieta_lojas_cosmeticos', whatsapp: 'https://wa.me/5511940677775', endereco: 'Rua Tiers, 558 - 1º Piso, Loja 1102 - Elev Shop Brás, São Paulo - SP', site: 'https://marietacosmeticos.com.br' },
  { id: 56, nome: 'Mauro Bijuterias', instagram: 'https://instagram.com/maurobijouterias', whatsapp: 'https://wa.me/551131045000', endereco: 'Ladeira Porto Geral, 14 - Loja 160 - Centro, São Paulo - SP', site: 'https://maurobijouterias.com.br' },
  { id: 57, nome: 'Mey Brasil', instagram: 'https://instagram.com/mey.brasil', whatsapp: 'https://wa.me/5511960792405', endereco: 'Rua Paula Souza, 198 - Centro, São Paulo - SP', site: 'https://meybrasil.com.br' },
  { id: 58, nome: 'Mina Makes', instagram: 'https://instagram.com/minamakes_box122', whatsapp: 'https://wa.me/5511987777750', endereco: 'Região da Rua 25 de Março, São Paulo - SP' },
  { id: 59, nome: 'Miss Florida', instagram: 'https://instagram.com/makeup.missflorida', whatsapp: 'https://wa.me/5511992602023', endereco: 'Rua Major Claudiano, 2157 - Centro, Franca - SP', site: 'https://missflorida.com.br' },
  { id: 60, nome: 'Mofrom Cosmetic', instagram: 'https://instagram.com/mofrom_comestic', endereco: 'Rua Oriente, 85, Letra A - Brás, São Paulo - SP' },
  { id: 61, nome: 'Molly Lucia', instagram: 'https://instagram.com/mollyluciamakeup', whatsapp: 'https://wa.me/5511952833888', endereco: 'São Paulo - SP', site: 'https://molly-lucia-maquiagem.kyte.site' },
  { id: 62, nome: 'Monica Cosméticos', instagram: 'https://instagram.com/monica_cosmeticos_21', whatsapp: 'https://wa.me/5511986719666', endereco: 'Rua Miguel Carlos - Centro, São Paulo - SP', site: 'https://monicacosmeticos.com.br' },
  { id: 63, nome: 'Márcia Make-up', instagram: 'https://instagram.com/marciamakeupoficial', whatsapp: 'https://wa.me/5511985151788', endereco: 'Av. Senador Queiroz, 611 - 2º andar, loja 37 - Centro, São Paulo - SP', site: 'https://marciamake.com.br' },
  { id: 64, nome: 'Net Vendas', instagram: 'https://instagram.com/nettvendas', whatsapp: 'https://wa.me/553799841380', endereco: 'Rua Itamarandiba, 735 - Bom Pastor, Divinópolis - MG' },
  { id: 65, nome: 'Nino e Nunes', instagram: 'https://instagram.com/ninoenunes', whatsapp: 'https://wa.me/5511998819864', endereco: 'Rua Miguel Carlos, 85 - Centro, São Paulo - SP', site: 'https://ninoenunescosmeticos.com.br' },
  { id: 66, nome: 'Paris Cosméticos', instagram: 'https://instagram.com/pariscosmeticos209', whatsapp: 'https://wa.me/5511981194888', endereco: 'Rua Florêncio de Abreu, 203, Anexo 209 - Centro, São Paulo - SP', site: 'https://paris-cosmeticos.ueniweb.com' },
  { id: 67, nome: 'Perdut', instagram: 'https://instagram.com/_perdut' },
  { id: 68, nome: 'Pink Cosméticos', instagram: 'https://instagram.com/pinkcosmeticos_', whatsapp: 'https://wa.me/5592981521312', endereco: 'Av. Eduardo Ribeiro, 457, Loja 207 - Centro, Manaus - AM', site: 'https://pinkcosmeticosam.com.br' },
  { id: 69, nome: 'Ponto da Maquiagem', instagram: 'https://instagram.com/pontodamake155', whatsapp: 'https://wa.me/5511991133389', endereco: '3º andar, Loja 3237 - Galeria Pagé Brás, São Paulo - SP', site: 'https://pontodamaquiagem.com.br' },
  { id: 70, nome: 'Porto Distribuidora', instagram: 'https://instagram.com/portodistribuidora', whatsapp: 'https://wa.me/5562998400576', endereco: 'Av. C104, 832, Q. 281, Lote 04 - Jardim América, Goiânia - GO', site: 'https://portoatacado.com.br' },
  { id: 71, nome: 'RC Revenda de Cosméticos', instagram: 'https://instagram.com/rc.revendadecosmeticos', whatsapp: 'https://wa.me/5511971975967', endereco: 'Rua dos Italianos, 981 - São Paulo - SP', site: 'https://revendadecosmeticos.com.br' },
  { id: 72, nome: 'RDMAKE', instagram: 'https://instagram.com/rdmake_up', whatsapp: 'https://wa.me/5511982519052', endereco: 'São Paulo - SP' },
  { id: 73, nome: 'Rede 25 em Cotia', instagram: 'https://instagram.com/rede25emcotia', whatsapp: 'https://wa.me/5511993542232', endereco: 'Rua Senador Feijó, 42, Box 03 - Centro, Cotia - SP', site: 'https://rede25emcotia.com.br' },
  { id: 74, nome: 'Renata Bertolinni', instagram: 'https://instagram.com/renatabertolinni.oficial', site: 'https://renatabertolinni.com.br' },
  { id: 75, nome: 'Reve Makeup', instagram: 'https://instagram.com/reve_makeup', whatsapp: 'https://wa.me/5511970242919', endereco: 'Rua 25 de Março, 1261 - São Paulo - SP', site: 'https://revemakeup.com.br' },
  { id: 76, nome: 'Roge Distribuidora', instagram: 'https://instagram.com/rogedistribuidora', whatsapp: 'https://wa.me/551147297171', endereco: 'Av. do Progresso, 1001 - Ponte Alta, Jarinu - SP', site: 'https://roge.com.br' },
  { id: 77, nome: 'RP Makeup', instagram: 'https://instagram.com/rp.makeup1' },
  { id: 78, nome: 'RP Representações', instagram: 'https://instagram.com/rp.representacoes' },
  { id: 79, nome: 'Seven Colors', instagram: 'https://instagram.com/lojasevencolors', whatsapp: 'https://wa.me/5511964449689', endereco: 'Rua Antonio Pais, 135 - Centro, São Paulo - SP' },
  { id: 80, nome: 'Sharazad', instagram: 'https://instagram.com/sharazad.oficial', endereco: 'Bairro do Pari - São Paulo - SP' },
  { id: 81, nome: 'Sonho de Beleza', instagram: 'https://instagram.com/ssonhodebeleza', whatsapp: 'https://wa.me/5511984356399', endereco: 'Av. Senador Queiroz, 611 - Box 378, 2º andar - Centro, São Paulo - SP' },
  { id: 82, nome: 'Sousa Biju', instagram: 'https://instagram.com/sousabiju', whatsapp: 'https://wa.me/551132274172', endereco: 'Rua 25 de Março, 986 - Centro, São Paulo - SP', site: 'https://sousavip.com.br' },
  { id: 83, nome: 'Sousa Make', instagram: 'https://instagram.com/sousa.make', whatsapp: 'https://wa.me/551132278559', endereco: 'Rua 25 de Março, 584 - Centro, São Paulo - SP', site: 'https://sousavip.com.br' },
  { id: 84, nome: 'Spetacolo Acessórios', instagram: 'https://instagram.com/spetacolo.acessorios', whatsapp: 'https://wa.me/5511951932725', endereco: 'Av. Senador Queiroz, 611 - 1º andar, loja 2 - Centro, São Paulo - SP', site: 'https://spetacoloacessorios.com.br' },
  { id: 85, nome: 'TM Distribuições', instagram: 'https://instagram.com/tmdistribuicoes' },
  { id: 86, nome: 'Unick', instagram: 'https://instagram.com/unick_make', whatsapp: 'https://wa.me/5511952308888', endereco: 'Rua Rio Bonito, 1452 - Brás, São Paulo - SP', site: 'https://unickmake.com.br' },
  { id: 87, nome: 'Vicente Makeup', instagram: 'https://instagram.com/vicente.makeup', whatsapp: 'https://wa.me/5511949815177', endereco: 'Rua Monsenhor Andrade, 897 - Brás, São Paulo - SP', site: 'https://vicentemakeup.vip' },
  { id: 88, nome: 'Virtual Make', instagram: 'https://instagram.com/virtualmake', whatsapp: 'https://wa.me/5511912622742', site: 'https://virtualmake.com.br' },
  { id: 89, nome: 'Vivian Tong (Vishion)', instagram: 'https://instagram.com/vishionmaquiagem', whatsapp: 'https://wa.me/5511987229022', endereco: 'Rua Monsenhor Andrade, 957 - Loja 01/03-B - Brás, São Paulo - SP' },
  { id: 90, nome: 'We Make', instagram: 'https://instagram.com/wemake.br', whatsapp: 'https://wa.me/556196189490', site: 'https://wemakebrasil.com.br' },
  { id: 91, nome: 'Welsinho Bijoux', instagram: 'https://instagram.com/welsinhobijoux' },
  { id: 92, nome: 'X&D Bijuterias', instagram: 'https://instagram.com/xdbijuterias', whatsapp: 'https://wa.me/5511981553009', endereco: 'Rua Paula Sousa, 354 - Centro, São Paulo - SP', site: 'https://xdbijuterias.com.br' },
];

export function nomeExibivel(f: Fornecedor): string {
  return f.nome;
}

export function iniciaisFornecedor(f: Fornecedor): string {
  const parts = f.nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, '').trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const second = parts[1]?.[0] ?? '';
  return (first + second).toUpperCase();
}
