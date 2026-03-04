/**
 * Lista de fornecedores (maquiagem e cosméticos).
 * Gerado a partir de fornecedores_completo.csv
 */
export interface Fornecedor {
  name?: string
  insta?: string
  phone?: string
  address?: string
  site?: string
  avatarUrl?: string
  photoUrls?: string[]
}

export const fornecedores: Fornecedor[] = [
  { name: 'Afife', insta: 'https://instagram.com/afife.oficial', phone: 'https://wa.me/551133134580', address: 'Rua 25 de Março - Centro, São Paulo - SP', site: 'https://afife.com.br' },
  { name: 'Alexandre Bijux', insta: 'https://instagram.com/alexandre_bijuxoficial', address: 'Rua 25 de Março - Centro, São Paulo - SP', site: 'https://linktr.ee/alexandrebijoux' },
  { name: 'Amili', insta: 'https://instagram.com/amili_makeup', phone: 'https://wa.me/5511949809862', address: 'Rua 25 de Março - Centro, São Paulo - SP', site: 'https://heylink.me/camilaye520' },
  { name: 'Amor e Anjo', insta: 'https://instagram.com/amoranjooficial', phone: 'https://wa.me/5511978783981', address: 'São Paulo - SP' },
  { name: 'Armazém dos Cosméticos', insta: 'https://instagram.com/armazemdoscosmeticos_atacado', phone: 'https://wa.me/5575992049060', address: 'Feira de Santana - BA' },
  { name: 'Arte de Unha / Helen Color', insta: 'https://instagram.com/artedeunha_helencolor', phone: 'https://wa.me/5511999994557', address: 'São Paulo - SP', site: 'https://helencolor.com.br' },
  { name: 'Atacado Fácil', insta: 'https://instagram.com/atacadofacil', site: 'https://atacadofacil.com' },
  { name: 'Atena Maquiagem', insta: 'https://instagram.com/atenamaquiagens.oficial', phone: 'https://wa.me/5511983185847', address: 'São Paulo - SP' },
  { name: 'Bella Acto', insta: 'https://instagram.com/bellaacto', phone: 'https://wa.me/5511941557847', address: 'São Paulo - SP', site: 'https://bellaacto.com.br' },
  { name: 'Bem Mulher (Catálogo)', insta: 'https://instagram.com/bemmulher_catalogo', phone: 'https://wa.me/5511963000793', address: 'Av. Senador Queiroz, 611 - Centro, São Paulo - SP' },
  { name: 'Bem Mulher Maquiagem', insta: 'https://instagram.com/bemmulhermaquiagem', phone: 'https://wa.me/5511963000793', address: 'Av. Senador Queiroz, 611 - 2º andar, loja 439 - Centro, São Paulo - SP', site: 'https://bemmulhermaquiagem.com.br' },
  { name: 'Bijutotal', insta: 'https://instagram.com/bijutotal', address: 'São Paulo - SP' },
  { name: 'Bonita Maquiagem', insta: 'https://instagram.com/_bonitamaquiagem', phone: 'https://wa.me/5511991133389', address: 'São Paulo - SP', site: 'https://bonitamaquiagem.com.br' },
  { name: 'Brasil 3D Maquiagens', insta: 'https://instagram.com/brasil3dmaquiagens', phone: 'https://wa.me/5511940227070', address: 'São Paulo - SP' },
  { name: 'Bruna Maquiagens', insta: 'https://instagram.com/brunamaquiagem.oficial', phone: 'https://wa.me/5511986161888', address: 'Rua Plínio Ramos, 43 - Centro, São Paulo - SP' },
  { name: 'Cah Folheados', insta: 'https://instagram.com/cahfolheados' },
  { name: 'Carmos BR', insta: 'https://instagram.com/carmosbr' },
  { name: 'Casa da Maquiagem', insta: 'https://instagram.com/casadasmaquiagens_oficial', phone: 'https://wa.me/5511959259333', address: 'Rua Augusto Severo, 45 - Centro, São Paulo - SP' },
  { name: 'Casa de Mulher', insta: 'https://instagram.com/casa.de.mulher', phone: 'https://wa.me/5511983214072', address: 'São Paulo - SP', site: 'https://casademulher.net' },
  { name: 'Cat Make', insta: 'https://instagram.com/cat.make', phone: 'https://wa.me/5511986207999', address: 'Rua Hannemann, 415 - Galeria Pagé Brás, Loja T703-T705 - Canindé, São Paulo - SP', site: 'https://catmakeup.com.br' },
  { name: 'Century Star', insta: 'https://instagram.com/century_star_maquiagem_atacado', phone: 'https://wa.me/5511952899999', address: 'Rua Florêncio de Abreu, 353 - Centro, São Paulo - SP' },
  { name: 'Célia e Junior Maquiagem', insta: 'https://instagram.com/celiaejunioracessorios', phone: 'https://wa.me/5511939079140', address: 'Av. Senador Queiroz, 611 - Centro, São Paulo - SP', site: 'https://celiaejunior.com.br' },
  { name: 'Cílios das Divas', insta: 'https://instagram.com/ciliosdasdivas', phone: 'https://wa.me/5519996297768', address: 'Osasco - SP', site: 'https://ciliosdasdivas.com' },
  { name: 'DAFU', insta: 'https://instagram.com/dafu.com.br', phone: 'https://wa.me/5511972866668', address: 'Rua 25 de Março, 1267 - Centro, São Paulo - SP', site: 'https://dafu.com.br' },
  { name: 'Distribuidora Gama', insta: 'https://instagram.com/distribuidoragama', phone: 'https://wa.me/553135031719', address: 'Rod. BR-381 Fernão Dias, KM 483.35 - Betim, MG', site: 'https://distribuidoragama.com.br' },
  { name: 'Distribuidora JCF', insta: 'https://instagram.com/distribuidorajcf', phone: 'https://wa.me/5511982443988', address: 'Rua Caetano Pinto, 247 Anexo 249 - Brás, São Paulo - SP', site: 'https://distribuidorajcf.com.br' },
  { name: 'Dom Doça Esmalteria', insta: 'https://instagram.com/domdocaesmalteria', phone: 'https://wa.me/5511947570916', address: 'Ladeira Porto Geral - Centro, São Paulo - SP', site: 'https://domdocaesmalteria.com.br' },
  { name: 'Donna Bijuta', insta: 'https://instagram.com/donnabijuta', phone: 'https://wa.me/5511990004798' },
  { name: 'DPC Distribuidor', insta: 'https://instagram.com/dpcdistribuidor', phone: 'https://wa.me/553333290000', address: 'Av. Aurea Carlos Leite de Matos, 1801 - Caratinga, MG', site: 'https://dpcnet.com.br' },
  { name: 'Fashion Makeup', insta: 'https://instagram.com/f.fashionmakeup', phone: 'https://wa.me/5511970181700', address: 'Rua Carlos de Souza Nazaré, 241 - Centro, São Paulo - SP', site: 'https://lojafashionmakeup.com.br' },
  { name: 'Florisa Cosméticos', insta: 'https://instagram.com/florisacosmeticosatacado', phone: 'https://wa.me/5511962827121', address: 'Rua Paula Souza, 482 - Centro, São Paulo - SP', site: 'https://florisamake.com.br' },
  { name: 'GA Brasil', insta: 'https://instagram.com/gabrasiloficial', phone: 'https://wa.me/5511992840008', address: 'Rua Paula Sousa, 340 - Centro, São Paulo - SP', site: 'https://gabrasilcosmeticos.com.br' },
  { name: 'GF Produtos', insta: 'https://shopee.com.br/gfprodutos', site: 'https://shopee.com.br/gfprodutos' },
  { name: 'Helen Color', insta: 'https://instagram.com/helencolornails', phone: 'https://wa.me/5511983731789', address: 'Rua Paula Souza, 62 / Rua 25 de Março, 1294 - Centro, São Paulo - SP', site: 'https://helencolor.com.br' },
  { name: 'Igor e Hugo Makeup', insta: 'https://instagram.com/igorehugomakeup25', phone: 'https://wa.me/5511983324147', address: 'Rua Carlos de Souza Nazaré, 320 - São Paulo - SP' },
  { name: 'Izabel Cosméticos', insta: 'https://instagram.com/izabelcosmeticos', phone: 'https://wa.me/5537991821210', site: 'https://izabelcosmeticos.com.br' },
  { name: 'JM Cosmético', insta: 'https://instagram.com/jmcosmeticos25', phone: 'https://wa.me/5511981676631', address: 'Rua 25 de Março, 1072, 1º Andar, Sala 103 - Centro, São Paulo - SP', site: 'https://jmcosmeticos25.com.br' },
  { name: 'Jummy', insta: 'https://instagram.com/jummyju_makeup', phone: 'https://wa.me/5511968166940', address: 'Rua Euclides da Cunha, 95 - Brás, São Paulo - SP', site: 'https://jummyju.com' },
  { name: 'Ki Make Cosméticos', insta: 'https://instagram.com/kimakecosmeticos', phone: 'https://wa.me/554599817553', address: 'Av. Brasil, 6436 - Loja 3 - Centro, Cascavel - PR', site: 'https://kimake.com.br' },
  { name: 'Kinature', insta: 'https://instagram.com/kinature', phone: 'https://wa.me/5511979509001', address: 'Rua Sta Rosa, 78 - Brás, São Paulo - SP', site: 'https://kinature.com.br' },
  { name: 'La Bella', insta: 'https://instagram.com/labella_make138', phone: 'https://wa.me/5511947551777', address: 'Rua Paula Souza, 529 box 1 e 2 - Centro, São Paulo - SP' },
  { name: 'Lancel Maquiagens', insta: 'https://instagram.com/lancelmaquiagens', phone: 'https://wa.me/5511951425252', address: 'Rua Paula Souza, 313 - 1º andar - Centro, São Paulo - SP' },
  { name: 'Lazuli', insta: 'https://instagram.com/lazulimakeupoficial', phone: 'https://wa.me/5511964238114', address: 'Av. Rangel Pestana - Brás, São Paulo - SP', site: 'https://lazulimakeup.com.br' },
  { name: 'Lef Maquiagem', insta: 'https://instagram.com/lef_maquiagens', phone: 'https://wa.me/5511914591718', address: 'Rua Hannemann, 133 - 1º andar - Canindé, São Paulo - SP', site: 'https://lfmakeup.com' },
  { name: 'Lii Makes', insta: 'https://instagram.com/liimakes', phone: 'https://wa.me/5511994644441', address: 'Região do Brás, São Paulo - SP' },
  { name: 'Linda Rosa Make', insta: 'https://instagram.com/lindarosamake', phone: 'https://wa.me/5511946456987', address: 'Rua Monsenhor de Andrade, 1023 - Brás, São Paulo - SP' },
  { name: 'Loja Dora Make', insta: 'https://instagram.com/lojadoramake', phone: 'https://wa.me/5511982837120', address: 'Rua Barão de Ladário, 319 - loja 37, Galeria Barão - Brás, São Paulo - SP', site: 'https://doramake.com.br' },
  { name: 'Love Make', insta: 'https://instagram.com/lovemake_box49', phone: 'https://wa.me/5511978561263', address: 'Rua Hannemann, 415 - Galeria Pagé box 49 - Brás, São Paulo - SP' },
  { name: 'Lucky Lady', insta: 'https://instagram.com/lucky_lady1040', phone: 'https://wa.me/5511981199348', address: 'Rua Henrique Dias, 44 - Brás, São Paulo - SP', site: 'https://luckyladycosmeticos.com.br' },
  { name: 'Lucky Ye', insta: 'https://instagram.com/lucky_ye_maquiagem', phone: 'https://wa.me/5511997066789', address: 'Rua Barão de Ladário, 923 - Brás, São Paulo - SP', site: 'https://luckyye.com.br' },
  { name: 'Macrisan', insta: 'https://instagram.com/macrisanmakeup', phone: 'https://wa.me/5511992166748', site: 'https://macrisan.com.br' },
  { name: 'Make Lolita', insta: 'https://instagram.com/makelolita591', phone: 'https://wa.me/5511954359101' },
  { name: 'Make-up Brasil', insta: 'https://instagram.com/maquiagem_atacado', phone: 'https://wa.me/5511969167726' },
  { name: 'Maki Makes Distribuidora', insta: 'https://instagram.com/makimakesdistribuidora', phone: 'https://wa.me/5562981374520', address: 'Av. Contorno, 1764 - Loja 01 - Setor Norte Ferroviário, Goiânia - GO' },
  { name: 'Marieta Cosméticos', insta: 'https://instagram.com/marieta_lojas_cosmeticos', phone: 'https://wa.me/5511940677775', address: 'Rua Tiers, 558 - 1º Piso, Loja 1102 - Elev Shop Brás, São Paulo - SP', site: 'https://marietacosmeticos.com.br' },
  { name: 'Mauro Bijuterias', insta: 'https://instagram.com/maurobijouterias', phone: 'https://wa.me/551131045000', address: 'Ladeira Porto Geral, 14 - Loja 160 - Centro, São Paulo - SP', site: 'https://maurobijouterias.com.br' },
  { name: 'Mey Brasil', insta: 'https://instagram.com/mey.brasil', phone: 'https://wa.me/5511960792405', address: 'Rua Paula Souza, 198 - Centro, São Paulo - SP', site: 'https://meybrasil.com.br' },
  { name: 'Mina Makes', insta: 'https://instagram.com/minamakes_box122', phone: 'https://wa.me/5511987777750', address: 'Região da Rua 25 de Março, São Paulo - SP' },
  { name: 'Miss Florida', insta: 'https://instagram.com/makeup.missflorida', phone: 'https://wa.me/5511992602023', address: 'Rua Major Claudiano, 2157 - Centro, Franca - SP', site: 'https://missflorida.com.br' },
  { name: 'Mofrom Cosmetic', insta: 'https://instagram.com/mofrom_comestic', address: 'Rua Oriente, 85, Letra A - Brás, São Paulo - SP' },
  { name: 'Molly Lucia', insta: 'https://instagram.com/mollyluciamakeup', phone: 'https://wa.me/5511952833888', address: 'São Paulo - SP', site: 'https://molly-lucia-maquiagem.kyte.site' },
  { name: 'Monica Cosméticos', insta: 'https://instagram.com/monica_cosmeticos_21', phone: 'https://wa.me/5511986719666', address: 'Rua Miguel Carlos - Centro, São Paulo - SP', site: 'https://monicacosmeticos.com.br' },
  { name: 'Márcia Make-up', insta: 'https://instagram.com/marciamakeupoficial', phone: 'https://wa.me/5511985151788', address: 'Av. Senador Queiroz, 611 - 2º andar, loja 37 - Centro, São Paulo - SP', site: 'https://marciamake.com.br' },
  { name: 'Net Vendas', insta: 'https://instagram.com/nettvendas', phone: 'https://wa.me/553799841380', address: 'Rua Itamarandiba, 735 - Bom Pastor, Divinópolis - MG' },
  { name: 'Nino e Nunes', insta: 'https://instagram.com/ninoenunes', phone: 'https://wa.me/5511998819864', address: 'Rua Miguel Carlos, 85 - Centro, São Paulo - SP', site: 'https://ninoenunescosmeticos.com.br' },
  { name: 'Paris Cosméticos', insta: 'https://instagram.com/pariscosmeticos209', phone: 'https://wa.me/5511981194888', address: 'Rua Florêncio de Abreu, 203, Anexo 209 - Centro, São Paulo - SP', site: 'https://paris-cosmeticos.ueniweb.com' },
  { name: 'Perdut', insta: 'https://instagram.com/_perdut' },
  { name: 'Pink Cosméticos', insta: 'https://instagram.com/pinkcosmeticos_', phone: 'https://wa.me/5592981521312', address: 'Av. Eduardo Ribeiro, 457, Loja 207 - Centro, Manaus - AM', site: 'https://pinkcosmeticosam.com.br' },
  { name: 'Ponto da Maquiagem', insta: 'https://instagram.com/pontodamake155', phone: 'https://wa.me/5511991133389', address: '3º andar, Loja 3237 - Galeria Pagé Brás, São Paulo - SP', site: 'https://pontodamaquiagem.com.br' },
  { name: 'Porto Distribuidora', insta: 'https://instagram.com/portodistribuidora', phone: 'https://wa.me/5562998400576', address: 'Av. C104, 832, Q. 281, Lote 04 - Jardim América, Goiânia - GO', site: 'https://portoatacado.com.br' },
  { name: 'RC Revenda de Cosméticos', insta: 'https://instagram.com/rc.revendadecosmeticos', phone: 'https://wa.me/5511971975967', address: 'Rua dos Italianos, 981 - São Paulo - SP', site: 'https://revendadecosmeticos.com.br' },
  { name: 'RDMAKE', insta: 'https://instagram.com/rdmake_up', phone: 'https://wa.me/5511982519052', address: 'São Paulo - SP' },
  { name: 'Rede 25 em Cotia', insta: 'https://instagram.com/rede25emcotia', phone: 'https://wa.me/5511993542232', address: 'Rua Senador Feijó, 42, Box 03 - Centro, Cotia - SP', site: 'https://rede25emcotia.com.br' },
  { name: 'Renata Bertolinni', insta: 'https://instagram.com/renatabertolinni.oficial', site: 'https://renatabertolinni.com.br' },
  { name: 'Reve Makeup', insta: 'https://instagram.com/reve_makeup', phone: 'https://wa.me/5511970242919', address: 'Rua 25 de Março, 1261 - São Paulo - SP', site: 'https://revemakeup.com.br' },
  { name: 'Roge Distribuidora', insta: 'https://instagram.com/rogedistribuidora', phone: 'https://wa.me/551147297171', address: 'Av. do Progresso, 1001 - Ponte Alta, Jarinu - SP', site: 'https://roge.com.br' },
  { name: 'RP Makeup', insta: 'https://instagram.com/rp.makeup1' },
  { name: 'RP Representações', insta: 'https://instagram.com/rp.representacoes' },
  { name: 'Seven Colors', insta: 'https://instagram.com/lojasevencolors', phone: 'https://wa.me/5511964449689', address: 'Rua Antonio Pais, 135 - Centro, São Paulo - SP' },
  { name: 'Sharazad', insta: 'https://instagram.com/sharazad.oficial', address: 'Bairro do Pari - São Paulo - SP' },
  { name: 'Sonho de Beleza', insta: 'https://instagram.com/ssonhodebeleza', phone: 'https://wa.me/5511984356399', address: 'Av. Senador Queiroz, 611 - Box 378, 2º andar - Centro, São Paulo - SP' },
  { name: 'Sousa Biju', insta: 'https://instagram.com/sousabiju', phone: 'https://wa.me/551132274172', address: 'Rua 25 de Março, 986 - Centro, São Paulo - SP', site: 'https://sousavip.com.br' },
  { name: 'Sousa Make', insta: 'https://instagram.com/sousa.make', phone: 'https://wa.me/551132278559', address: 'Rua 25 de Março, 584 - Centro, São Paulo - SP', site: 'https://sousavip.com.br' },
  { name: 'Spetacolo Acessórios', insta: 'https://instagram.com/spetacolo.acessorios', phone: 'https://wa.me/5511951932725', address: 'Av. Senador Queiroz, 611 - 1º andar, loja 2 - Centro, São Paulo - SP', site: 'https://spetacoloacessorios.com.br' },
  { name: 'TM Distribuições', insta: 'https://instagram.com/tmdistribuicoes' },
  { name: 'Unick', insta: 'https://instagram.com/unick_make', phone: 'https://wa.me/5511952308888', address: 'Rua Rio Bonito, 1452 - Brás, São Paulo - SP', site: 'https://unickmake.com.br' },
  { name: 'Vicente Makeup', insta: 'https://instagram.com/vicente.makeup', phone: 'https://wa.me/5511949815177', address: 'Rua Monsenhor Andrade, 897 - Brás, São Paulo - SP', site: 'https://vicentemakeup.vip' },
  { name: 'Virtual Make', insta: 'https://instagram.com/virtualmake', phone: 'https://wa.me/5511912622742', site: 'https://virtualmake.com.br' },
  { name: 'Vivian Tong (Vishion)', insta: 'https://instagram.com/vishionmaquiagem', phone: 'https://wa.me/5511987229022', address: 'Rua Monsenhor Andrade, 957 - Loja 01/03-B - Brás, São Paulo - SP' },
  { name: 'We Make', insta: 'https://instagram.com/wemake.br', phone: 'https://wa.me/556196189490', site: 'https://wemakebrasil.com.br' },
  { name: 'Welsinho Bijoux', insta: 'https://instagram.com/welsinhobijoux' },
  { name: 'X&D Bijuterias', insta: 'https://instagram.com/xdbijuterias', phone: 'https://wa.me/5511981553009', address: 'Rua Paula Sousa, 354 - Centro, São Paulo - SP', site: 'https://xdbijuterias.com.br' },
]

/** Nome exibível a partir do nome ou URL do Instagram */
export function nomeExibivel(s: Fornecedor): string {
  if (s.name && s.name.trim()) return s.name.trim()
  const url = s.insta || ''
  if (!url) return 'Fornecedor'
  try {
    const u = new URL(url.replace(/=.*/, ''))
    const p = u.pathname.replace(/\//g, '').replace(/[_.]/g, ' ').trim()
    return p ? p.charAt(0).toUpperCase() + p.slice(1) : 'Fornecedor'
  } catch {
    return 'Fornecedor'
  }
}

/** Iniciais para avatar (2 letras) */
export function iniciaisFornecedor(s: Fornecedor): string {
  const nome = nomeExibivel(s)
  const parts = nome.split(/\s+/).filter(Boolean)
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase().slice(0, 2)
  return nome.slice(0, 2).toUpperCase() || '??'
}
