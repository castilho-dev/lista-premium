/**
 * Lista de fornecedores (maquiagem e cosméticos).
 * Origem: referência do HTML fornecedores — apenas leitura no app.
 */
export interface Fornecedor {
  name?: string
  insta?: string
  phone?: string
  address?: string
  site?: string
  /** URL da foto de perfil (ex.: do Instagram). Se não tiver, usa iniciais ou imagem em /fornecedores/idXX/avatar.* */
  avatarUrl?: string
  /** Até 6 URLs de imagens de posts/produtos. Se não tiver, usa imagens em /fornecedores/idXX/1.jpg ... 6.jpg ou placeholder. */
  photoUrls?: string[]
}

export const fornecedores: Fornecedor[] = [
  { name: '', insta: 'https://instagram.com/f.fashionmakeup?igshid=YzA2ZDJiZGQ=', phone: 'https://api.whatsapp.com/send?phone=551132276109', address: 'https://share.google/q2EQS5DM4RyX7etAq' },
  { name: '', insta: 'https://instagram.com/bellaacto?igshid=YzA2ZDJiZGQ=', site: 'https://www.bellaacto.com.br/?srsltid=AfmBOoox-GDHChO426ArbFmr9gwNxh6r9ZKQqBPbzicGf-wigcXZ19zW', address: 'https://share.google/Brmu55KXYqmoGcbIX', phone: 'https://api.whatsapp.com/send?l=pt_br&phone=5511941557847&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20da%20loja!' },
  { name: '', insta: 'https://instagram.com/portodistribuidora?igshid=YzA2ZDJiZGQ=', site: 'https://www.portoatacado.com.br/', address: 'https://share.google/NbmWQR7UDTZUXQT6m', phone: 'https://api.whatsapp.com/send?phone=5562998400576' },
  { name: '', insta: 'https://instagram.com/vicente.makeup?igshid=YzA2ZDJiZGQ=', site: 'https://meucomercio.com.br/vicentemakeup', phone: 'https://linktr.ee/vicente.makeup?fbclid=PAZXh0bgNhZW0CMTEAAafdMKfft-nSZeJn8gqOPFxvm_ZiIp9vgRxyDcCmBfEJXP9ovrvLsjbc_Od04w_aem_t1fse6sO_9rTq5OzEyaLiQ', address: 'https://share.google/HiCPAkfPd1Ao289fO' },
  { name: 'Afife', insta: 'https://www.instagram.com/afife.oficial/', site: 'https://linktr.ee/afife.oficial?fbclid=PAZXh0bgNhZW0CMTEAAaeN2oh3keftT1uiFQH9rb_NnpUoVTGbWMnR4viKlaFWvJsv_r19-ugWDgC1sA_aem_5cdv__tzLlUXaZt5ohYk9w', address: 'https://share.google/eZOf2F0aKK4IANZ2U', phone: 'https://linktr.ee/afife.oficial?fbclid=PAZXh0bgNhZW0CMTEAAaeN2oh3keftT1uiFQH9rb_NnpUoVTGbWMnR4viKlaFWvJsv_r19-ugWDgC1sA_aem_5cdv__tzLlUXaZt5ohYk9w' },
  { name: '', insta: 'https://instagram.com/rp.representacoes?igshid=YzA2ZDJiZGQ=', phone: 'https://chat.whatsapp.com/J4rHwRKcpoTCUinMB8an5C?fbclid=PAZXh0bgNhZW0CMTEAAaeeQqBQ6-TckwCJ6q5UBWR6Y6KN7oA367X_jwV4JPo2rycIpmotrztklf0HEA_aem_5gw8C-u1LOt5-LWHCqlzIA' },
  { name: '', insta: 'https://instagram.com/maurobijouterias?igshid=YzA2ZDJiZGQ=', site: 'https://www.maurobijouterias.com.br/', address: 'https://share.google/OON7oBlJ8HFilVQ2b', phone: 'https://chat.whatsapp.com/GgO1ijnEeSuBvuWpT4Iygf?fbclid=PAZXh0bgNhZW0CMTEAAacmXBMpYH6s_35PDGjXT5IPAVW_0FEqYNUZHl_00JcPGpT2DT8hFEjlME2QGw_aem_WICPUZeI9_FcNaal2LH3sw' },
  { name: 'Bem mulher maquiagem', insta: 'https://www.instagram.com/bemmulhermaquiagem/', site: 'https://www.bemmulhermaquiagem.com.br/', address: 'https://instabio.cc/3040718OzYxa1?fbclid=PAZXh0bgNhZW0CMTEAAaeJ3auwniG3lg07NJSkysGVgQ9otzGNd1R-QIs7HJZnz5rlYNIs4UaNZrSmnw_aem_LZO7ydokS7dExoRbCQoH2w', phone: 'https://instabio.cc/3040718OzYxa1?fbclid=PAZXh0bgNhZW0CMTEAAaea1l7p5Mrj-FPPkxXURUIMMM8WSO8zjKxppy34BsVStr_BXCTWQkLhKMLuTQ_aem_wmehp_DV-1KrK8lft97Rew' },
  { name: 'Célia e Júnior Acessórios', insta: 'https://www.instagram.com/celiaejunioracessorios/', site: 'https://www.celiaejunior.com.br/?fbclid=PAZXh0bgNhZW0CMTEAAadtUOh6l8m6IZ2AW-r1WNYMIllgy0E74t76ojK5DyVM7i9dy4EDbDulBMD8Ew_aem_tBC43X9KBqOZEt_h9WqtCQ', address: 'https://share.google/Mm7uA94e5iBUt74LT', phone: 'https://linktr.ee/celiaejunior?fbclid=PAZXh0bgNhZW0CMTEAAacULsVY2YflI1JeUQN5K-s84Yyt7qVsVDVClhszAEJYwhLPyVTWvTZZF8nF9A_aem_YuGkGFYx9EFK7MNEFmT1ag' },
  { name: 'Pink Cosméticos', insta: 'https://www.instagram.com/pinkcosmeticos_/', site: 'https://www.pinkcosmeticosam.com.br/?fbclid=PAZXh0bgNhZW0CMTEAAaep8gvOMUeBMrxBFRg9qX_tK5P-DYrjTeW8L_Q3lZapzHMj6E-Fmm81UpTW-w_aem_VunfZlrbsMh2w3LSAC5Ikw', address: 'https://share.google/HzTgrMN8fZKWslApm', phone: 'https://api.whatsapp.com/send/?phone=5592981521312&text&type=phone_number&app_absent=0' },
  { name: '', insta: 'https://instagram.com/virtualmake?igshid=YzA2ZDJiZGQ=', site: 'https://www.virtualmake.com.br/', address: 'https://www.maquiagemvirtual.com.br/pagina/quem-somos.html', phone: 'https://www.virtualmake.com.br/pagina/nossa-bio.html?fbclid=PAZXh0bgNhZW0CMTEAAadLzkgPYd6DwOOVARu-NXgsnspJiKVFOmKvZIYEBBn81gXvlbJF_n60NIQzjg_aem_O0QGjcwiMCeN7LlzpoidhQ' },
  { name: '', insta: 'https://instagram.com/izabelcosmeticos?igshid=YzA2ZDJiZGQ=', site: 'https://www.izabelcosmeticos.com.br/?fbclid=PAZXh0bgNhZW0CMTEAAafRP8B2KcgvwAUx-ow4iLUV1CgJIbi4JvYvXO5i5_V_3lbqto-gA62GHL4yAQ_aem_XPWmf_3_JgQsh26nbHhT1w', address: 'https://share.google/ZI9WqhRCwIij9zPyb', phone: 'https://api.whatsapp.com/message/TR5IJ3ANHEACN1?autoload=1&app_absent=0' },
  { name: '', insta: 'https://instagram.com/mollyluciamakeup?igshid=YzA2ZDJiZGQ=', phone: 'https://api.whatsapp.com/send?phone=5511952833888' },
  { name: '', insta: 'https://instagram.com/rede25emcotia?igshid=YzA2ZDJiZGQ=', site: 'https://api.whatsapp.com/message/4D5QN56DWN3GP1?autoload=1&app_absent=0&fbclid=PAZXh0bgNhZW0CMTEAAacJexgwKBwFOdiECduUTT9vMC5T4nC_ZQIYLlkhtgh-XuXTvCQA_75uYJFr-Q_aem_X-a0b1DkHhx8ghRdaX1xIA', address: 'https://maps.app.goo.gl/htYzmk2RA5D9sRdXA', phone: 'https://chat.whatsapp.com/DbbPw0pMhi1EcfXBuuaX7P?fbclid=PAZXh0bgNhZW0CMTEAAaerL3qe3qQz2oNymCv9fOkn7zz_Ae66q6N6hnCi9rVYOutPWItIFQ9YGr4BGw_aem_YsHFo96z8XvFZb8EOu69Ng' },
  { name: '', insta: 'https://instagram.com/makimakesdistribuidora?igshid=YzA2ZDJiZGQ=', site: 'https://linkme.bio/makimakes?fbclid=PAZXh0bgNhZW0CMTEAAaeUq66zhufK7PX3VzPcLuOItuSFodwfVmEwK3QmQIXmQmDsPaX0u4uVNMTZCQ_aem_NpCbYEiy9AunM4qC_PCJBg', address: 'https://www.google.com/maps?q=Maki+Makes+Distribuidora+%7C+Loja+Atacadista+de+Maquiagem+%7C+Goi%C3%A2nia,+Distribuidora+de+Maquiagem+-+Maquiagem+Atacado+-+Maki+Makes+-+Av.+Contorno,+1764+-+Setor+Norte+Ferrovi%C3%A1rio,+Goi%C3%A2nia+-+GO,+74063-350&ftid=0x935ef38a81968505:0x807bb3d81e902b44&hl=pt-BR&gl=br&entry=gps&lucs=,47071704&g_ep=CAISBjYuNzEuMhgAINeCAyoJLDQ3MDcxNzA0QgJCUg%3D%3D&g_st=ic', phone: 'https://linkme.bio/makimakes?fbclid=PAZXh0bgNhZW0CMTEAAaeUq66zhufK7PX3VzPcLuOItuSFodwfVmEwK3QmQIXmQmDsPaX0u4uVNMTZCQ_aem_NpCbYEiy9AunM4qC_PCJBg' },
  { name: '', insta: 'https://instagram.com/makeup.missflorida?igshid=YzA2ZDJiZGQ=', site: 'https://www.missflorida.com.br/', address: 'https://linktr.ee/miss.florida?fbclid=PAZXh0bgNhZW0CMTEAAaeDzIouvyjj6kvtqdfz-syFBSuS5uEaoe1hd7V4BwAoWHoc5b6bKO6lXX8ElQ_aem_TFEonyk7uWEXDKg8jMgx_w', phone: 'https://chat.whatsapp.com/C1wb13MMyWz2gmRndYEacn' },
  { name: '', insta: 'https://instagram.com/atacadofacil?igshid=YzA2ZDJiZGQ=', site: 'https://atacadofacil.com/?fbclid=PAZXh0bgNhZW0CMTEAAads_ZIz4uf92GNRFkQK0tlfFEpNtSet5n_MR073a-rs4c6v7pGYZIY58f8mrA_aem_mOMz1-DGwUbjR7vEoHIi9g', address: 'https://atacadofacil.com/como-funciona/', phone: 'https://chat.whatsapp.com/HnOXwrRtyV1EaPVLxISt47' },
  { name: '', insta: 'https://instagram.com/lef_maquiagens?igshid=YzA2ZDJiZGQ=', site: 'https://meucomercio.com.br/lefmaquiagens?fbclid=PAZXh0bgNhZW0CMTEAAadVatIwnu4EB-Z7hpSfmlmEnAG0lC4LDRMLAXNzb3Ugxjcw9BoR7duutVjC_g_aem_TAwV9BkFje8QAK7fiMwyeA', address: 'https://maps.app.goo.gl/quGJzLecGzByuMEG7', phone: 'https://linktr.ee/lf_maquiagens?fbclid=PAZXh0bgNhZW0CMTEAAafA51Tspl8mgOJEQu3WxCB3FV5ieabe9jgC0ZhxckN6Xbe8FaTBuaemNQhgIg_aem_Cm0bavedK4ZWi3bOIcOx6A' },
  { name: '', insta: 'https://www.instagram.com/igorehugomakeup25/', site: 'https://bio.site/igorehugoinfo?fbclid=PAZXh0bgNhZW0CMTEAAadxawBAqwA7viUgrDxw6bcnnaqGZyJz-KMepFtQZUgg90kc-597UkPpYACs_A_aem_VkPledM8c_UlLFS_7lIEWQ', address: 'https://share.google/lOmmVaphNJbfgLqrW', phone: 'https://api.whatsapp.com/send/?phone=11989547898&text&type=phone_number&app_absent=0' },
  { name: 'We Make', insta: 'https://www.instagram.com/wemake.br/', address: 'https://share.google/FqVbw82iEHevUf68o', phone: 'https://contate.me/ios/5511921095786' },
  { name: '', insta: 'https://instagram.com/casa.de.mulher?igshid=YzA2ZDJiZGQ=', site: 'https://www.casademulher.net/', address: 'https://share.google/MWGexYvPl2404ATM7', phone: 'https://api.whatsapp.com/send/?phone=5511983214072&text&type=phone_number&app_absent=0' },
  { name: '', insta: 'https://www.instagram.com/lucky_lady1040/', site: 'https://meucomercio.com.br/luckylady', address: 'https://share.google/9XkxfCigY9TCLw1md', phone: 'https://linktr.ee/Lucky_Lady?utm_source=linktree_admin_share&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnPH_JcySmKGI1bE373arDfWQ4Ntg_4pGNBvlQSFN5DKtpybF5HmVPEWFqzK4_aem_jRvEQb1JSa5gBwJSbK74Og' },
  { name: '', insta: 'https://instagram.com/lancelmaquiagens?igshid=YzA2ZDJiZGQ=', site: 'https://www.canva.com/design/DAGNYTirS4A/P3gSgUvv1kdJu26alPtr2g/view?utm_content=DAGNYTirS4A&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3e518ad748&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnFyKQvm-n9Ccl0pS1n8qj87ArIlNyDM4NKEDNY1ef_OTW-e2vSyCZgC9cVNQ_aem_NK6sEMxk-zbNfq6Kj7uHRA', address: 'https://share.google/hbVVF5G22Fcbb2LXA', phone: 'https://www.canva.com/design/DAGNYTirS4A/P3gSgUvv1kdJu26alPtr2g/view?utm_content=DAGNYTirS4A&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3e518ad748&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnFyKQvm-n9Ccl0pS1n8qj87ArIlNyDM4NKEDNY1ef_OTW-e2vSyCZgC9cVNQ_aem_NK6sEMxk-zbNfq6Kj7uHRA' },
  { name: '', insta: 'https://instagram.com/mofrom_comestic?igshid=YmMyMTA2M2Y=', site: 'https://shopee.com.br/mofrom_shop?categoryId=100630&entryPoint=ShopByPDP&itemId=21105992966', address: 'https://share.google/qe0m4Mj7weTmMemdA' },
  { name: '', insta: 'https://www.instagram.com/kinature?igsh=d2E3dWR3cXRiOWN6', site: 'https://linktr.ee/kinature?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn52O9cayww-1RWieR_5_ZkE75Nu2Rj6O2Gpjb-ZhaeufNKT9Y9uPaUlD6BDE_aem_W5XPYFy0H-eeqXKOZmPqMQ', address: 'https://linktr.ee/kinature?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn52O9cayww-1RWieR_5_ZkE75Nu2Rj6O2Gpjb-ZhaeufNKT9Y9uPaUlD6BDE_aem_W5XPYFy0H-eeqXKOZmPqMQ', phone: 'https://chat.whatsapp.com/DFuLpjqvK6wDG1es1WAinM' },
  { name: '', insta: 'https://instagram.com/carmosbr?igshid=YzA2ZDJiZGQ=' },
  { name: '', insta: 'https://www.instagram.com/marieta_lojas_cosmeticos?igsh=eDd5bTY3azBzNncx', site: 'https://www.marietacosmeticos.com.br/', address: 'https://www.google.com/maps/place/Elev+Shop+Br%C3%A1s/@-23.5305429,-46.6224339,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce594f2913d0c7:0xf202cd498df3a175!8m2!3d-23.5305429!4d-46.619859!16s%2Fg%2F11m2ynsn_2?entry=tts&g_ep=EgoyMDI1MDYxMS4wIPu8ASoASAFQAw%3D%3D&skid=a0e5de07-132c-4998-bf20-ec5402673121', phone: 'https://api.whatsapp.com/send/?phone=5511940677775&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+Instagram&type=phone_number&app_absent=0' },
  { name: '', insta: 'https://instagram.com/vishionmaquiagem?igshid=NzNkNDdiOGI=', site: 'https://www.xn--amoamake-u0a.com.br/', address: 'https://share.google/dAXWOYDYMaVEx1dO4', phone: 'https://api.whatsapp.com/message/JHPMFKWXCKI6D1?autoload=1&app_absent=0' },
  { name: '', insta: 'https://instagram.com/rp.makeup1?igshid=NzNkNDdiOGI=', address: 'https://share.google/9iO64mKGKaIiDHOyg', phone: 'https://chat.whatsapp.com/IJURdzLjd4oH7JkUqwOYed?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGndCkz_O7abn1TLiL03GSOOIJvhqzLv-ZlVDJpZMJ-Twa4rd6NhavKSRokMjs_aem_sOzswG882hlId1TIJpjmUA' },
  { name: '', insta: 'https://instagram.com/jmcosmeticos25?igshid=NzNkNDdiOGI=' },
  { name: '', insta: 'https://instagram.com/lucky_ye_maquiagem?igshid=YmMyMTA2M2Y=', site: 'https://www.luckyye.com.br/', address: 'https://share.google/8m3z8OmQkn6b4Lb6b', phone: 'https://api.whatsapp.com/message/6SGNN2XBTGQQP1?autoload=1&app_absent=0&utm_source=ig' },
  { name: '', insta: 'https://instagram.com/igorehugomakeup25?igshid=YmMyMTA2M2Y=', site: 'https://bio.site/igorehugoinfo', address: 'https://share.google/0pZ6pn6z8H3AVv1hz', phone: 'https://api.whatsapp.com/send/?phone=11989547898&text&type=phone_number&app_absent=0' },
  { name: '', insta: 'https://instagram.com/amili_makeup?igshid=YmMyMTA2M2Y=', site: 'https://heylink.me/camilaye520', address: 'https://share.google/CvHau3lAY0GWkutOl', phone: 'https://api.whatsapp.com/send/?phone=11949809862&text&type=phone_number&app_absent=0' },
  { name: '', insta: 'https://instagram.com/pontodamake155?igshid=YmMyMTA2M2Y=', site: 'https://linktr.ee/Pontodamake155contato?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnRXInVOk0Hn_I6sTrB4DGAnbgdjqegA8qYyDyS6GvdW-Oh6G3y-SryArnmWI_aem_T3hQPHBlnLHJtBpQHAxQZg', address: 'https://share.google/ARAHDvEqxI0CJF8tt', phone: 'https://api.whatsapp.com/send/?phone=5511952286888&text&type=phone_number&app_absent=0' },
  { name: '', insta: 'https://instagram.com/nettvendas?igshid=YmMyMTA2M2Y=', phone: 'https://api.whatsapp.com/send?phone=5537999841380&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn-JjarmDc-29sBEaG4SuasyV0uM3D5Drpipq0E_e9g7gIbeKIYpPoQTxur2A_aem_OcU9eomi67EQp3JkfndxVQ' },
  { name: '', insta: 'https://instagram.com/_bonitamaquiagem?igshid=YmMyMTA2M2Y=', site: 'https://www.bonitamaquiagem.com.br/t/produtos?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnOzCc_EWyyUiO6tVXhVKc_1H9qvYUHd96SENZtnI_ZhR1HVMw1T3sNThh3dk_aem_sQ1VbMa-6ZRp0KyKfwRlYA', address: 'https://share.google/LMRjnaoi2qCHNeFmy', phone: 'https://linktr.ee/bonitamaquiagem208?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnIrzYrZbjybE3OJO1A2m4Gm0PWx57JNOuLoxmGGT4j_eYYLKVvZdjIegDPk8_aem_5QrQjy1sTPOdz3iNexPThg' },
  { name: '', insta: 'https://instagram.com/sousa.make?igshid=YmMyMTA2M2Y=', site: 'https://www.sousavip.com.br/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnbloH5hR09aMljLjvn-Weud5nUz-ZqsoxbKn6NaDCgeGBRQ7NZ8MKwpDf6dE_aem_Bt_bzKLZoXRp0y2J26354Q', address: 'https://share.google/B3AhWhN1bwHroI5aD', phone: 'https://api.whatsapp.com/send?phone=5511988542217' },
  { name: '', insta: 'https://instagram.com/make.import?igshid=YmMyMTA2M2Y=', site: 'https://l.instagram.com/?u=https%3A%2F%2Fwww.makeimport.com.br%2F%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnL8UavGPvH6gLJafqcafC7OcaajUpeFXZXMuOuAy0l_ynICaprf418K67zZI_aem_ikM3ek0cRVIulPVxzHh4oA&e=AT1TUr3t3OoFwzNDZTdTphz4-PuRH8c7McaXXqruWr3K0JuRJqjDvpetXXS9gD2_1TOFaCI3ywKd71hU41v-p7kt4QUX5wpHyplRH56XVFlezi5C8WEKFmdyLg', address: 'https://share.google/qpJCCqHb9jtZ1nlqS', phone: 'https://lojamakeimport.com.br/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnljUv4330r42On3-CLdphPXT2P6l5rDCgc1cLa2DIqVTyUZdmUjnrpLpz-mU_aem_1I0_vSb0bu-s6P6TPSf-hA' },
  { name: '', insta: 'https://instagram.com/sharazad.oficial?igshid=YmMyMTA2M2Y=' },
  { name: '', insta: 'https://instagram.com/macrisanmakeup?igshid=YmMyMTA2M2Y=', site: 'https://www.macrisan.com.br/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnAUpB32ZnDaADFsllUeTJKk33z5QT3RAeaVA93DyMhy-46RzaIRW1L-JO6Jk_aem_JGTvoex-Ee1zfUcXW1xd6g', address: 'https://share.google/RdWGsXr3zD51OPM8V', phone: 'https://api.whatsapp.com/send?phone=5511992166748' },
  { name: '', insta: 'https://instagram.com/bijutotal?igshid=YmMyMTA2M2Y=' },
  { name: 'Monica Cosméticos', insta: '', phone: 'https://api.whatsapp.com/send?phone=5511986719666' },
  { name: '', insta: 'https://instagram.com/welsinhobijoux?igshid=YmMyMTA2M2Y=' },
  { name: '', insta: 'https://instagram.com/alexandre_bijuxoficial?igshid=YmMyMTA2M2Y=' },
  { name: '', insta: 'https://instagram.com/celiaejunioracessorios?igshid=YmMyMTA2M2Y=' },
  { name: '', insta: 'https://instagram.com/ciliosdasdivas?igshid=YmMyMTA2M2Y=' },
  { name: '', insta: 'https://instagram.com/cahfolheados?igshid=YmMyMTA2M2Y%3D' },
  { name: '', insta: 'https://instagram.com/donnabijuta?igshid=YmMyMTA2M2Y%3D' },
  { name: '', insta: 'https://instagram.com/renatabertolinni.oficial?igshid=YmMyMTA2M2Y%3D' },
  { name: '', insta: 'https://instagram.com/spetacolo.acessorios?igshid=YmMyMTA2M2Y%3D' },
  { name: '', insta: 'https://instagram.com/maquiagem_atacado?igshid=YmMyMTA2M2Y%3D' },
  { name: '', insta: 'https://instagram.com/dpcdistribuidor?igshid=YmMyMTA2M2Y%3D' },
  { name: '', insta: 'https://instagram.com/distribuidoragama?igshid=YmMyMTA2M2Y%3D' },
  { name: '', insta: 'https://instagram.com/rogedistribuidora?igshid=YmMyMTA2M2Y%3D' },
  { name: '', insta: 'https://instagram.com/domdocaesmalteria?igshid=YmMyMTA2M2Y%3D' },
  { name: '', insta: 'http://shopee.com.br/gfprodutos' },
  { name: '', insta: 'https://instagram.com/_perdut?igshid=YmMyMTA2M2Y%3D' },
  { name: '', insta: 'https://instagram.com/rc.revendadecosmeticos?igshid=YmMyMTA2M2Y%3D' },
  { name: '', insta: 'https://instagram.com/distribuidorajcf?igshid=YmMyMTA2M2Y%3D' },
  { name: '', insta: 'https://instagram.com/sousabiju?igshid=YmMyMTA2M2Y%3D' },
  { name: '', insta: 'https://instagram.com/afife.oficial?igshid=YmMyMTA2M2Y%3D' },
  { name: '', insta: 'https://instagram.com/tmdistribuicoes?igshid=YmMyMTA2M2Y%3D' },
  { name: '', insta: 'https://instagram.com/lojadoramake?igshid=YmMyMTA2M2Y%3D' },
  { name: '', insta: 'https://instagram.com/kimakecosmeticos?igshid=YmMyMTA2M2Y%3D' },
]

/** Nome exibível a partir da URL do Instagram (ex: instagram.com/foo_bar → Foo bar) */
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
