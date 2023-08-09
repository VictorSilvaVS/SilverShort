// Dados da nova notícia
const newNewsData = {
    link: 'https://dialogochino.net/pt-br/mudanca-climatica-e-energia-pt-br/370603-tratado-poluicao-plastico-rascunho-2023/',
    imageSrc: 'https://dialogochino.net/content/uploads/2023/06/Desechos-Plasticos_Playa-Colombia_Greenpeace_2560-1024x683.png',
    title: 'Tratado sobre poluição de plástico deve ter rascunho pronto ainda em 2023',
    text: 'Após negociações em Paris, delegados dão passo importante rumo a acordo juridicamente vinculante para regular o plástico.'
};
const newNewsData2 = {
    link: 'https://www12.senado.leg.br/noticias/materias/2021/07/28/estudo-do-senado-aponta-necessidade-de-leis-para-deter-poluicao-por-plasticos',
    imageSrc: 'https://blogdoplastico.files.wordpress.com/2019/04/cromex-masterbatches_selo_verde-1.jpg?w=584',
    title: 'Estudo do Senado aponta necessidade de leis para deter poluição por plásticos',
    text: 'O crescente aumento da poluição do meio ambiente pelo plástico indica a necessidade de uma legislação nacional sobre o tema. A conclusão é de estudo de autoria do consultor legislativo do Senado Joaquim Maia Neto — Contribuições do Poder Legislativo no Combate à Poluição Causada por Plástico.'
};
const newNewsData3 = {
    link: 'https://www.dn.pt/dinheiro/inovacao-como-forma-de-diminuir-impacto-ambiental-dos-plasticos-15263254.html',
    imageSrc: 'https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=821c7e35-51a3-4799-a4f3-cc0e513c7d5d&w=800&h=450&t=20221017214202',
    title: 'Inovação como forma de diminuir impacto ambiental dos plásticos',
    text: 'Esta é uma das estratégias do sector para contribuir para os objetivos globais da sustentabilidade e da neutralidade carbónica. No Plastics Summit Global Event, os empresários reforçaram o compromisso de aumentar a circularidade dos produtos.'
};
// Selecione o elemento HTML da notícia
const newsElement = document.querySelector('.col-md-4.aos-init');

// Se o elemento da notícia for encontrado
if (newsElement) {
    // Atualize os elementos dentro da notícia com os novos dados
    const linkElement = newsElement.querySelector('a');
    const imageElement = newsElement.querySelector('img');
    const titleElement = newsElement.querySelector('.lastNews__title a');
    const textElement = newsElement.querySelector('.lastNews__text');

    linkElement.href = newNewsData.link;

    // Atualize a imagem usando setAttribute
    imageElement.setAttribute('data-src', newNewsData.imageSrc);
    // Também atualize o atributo 'src' para que a imagem seja exibida imediatamente
    imageElement.setAttribute('src', newNewsData.imageSrc);

    titleElement.href = newNewsData.link;
    titleElement.textContent = newNewsData.title;
    textElement.textContent = newNewsData.text;
}
// Dados da nova notícia


// Selecione o elemento HTML da segunda notícia
const newsElement2 = document.querySelector('.col-md-4.aos-init[data-aos-delay="200"]');

// Se o elemento da segunda notícia for encontrado
if (newsElement2) {
    // Atualize os elementos dentro da segunda notícia com os novos dados
    const linkElement2 = newsElement2.querySelector('a');
    const imageElement2 = newsElement2.querySelector('img');
    const titleElement2 = newsElement2.querySelector('.lastNews__title a');
    const textElement2 = newsElement2.querySelector('.lastNews__text');

    linkElement2.href = newNewsData2.link;

    // Atualize a imagem usando setAttribute
    imageElement2.setAttribute('data-src', newNewsData2.imageSrc);
    // Também atualize o atributo 'src' para que a imagem seja exibida imediatamente
    imageElement2.setAttribute('src', newNewsData2.imageSrc);

    titleElement2.href = newNewsData2.link;
    titleElement2.textContent = newNewsData2.title;
    textElement2.textContent = newNewsData2.text;
}// Dados da nova notícia


// Selecione o elemento HTML da terceira notícia
const newsElement3 = document.querySelector('.col-md-4.aos-init[data-aos-delay="400"]');

// Se o elemento da terceira notícia for encontrado
if (newsElement3) {
    // Atualize os elementos dentro da terceira notícia com os novos dados
    const linkElement3 = newsElement3.querySelector('a');
    const imageElement3 = newsElement3.querySelector('img');
    const titleElement3 = newsElement3.querySelector('.lastNews__title a');
    const textElement3 = newsElement3.querySelector('.lastNews__text');

    linkElement3.href = newNewsData3.link;

    // Atualize a imagem usando setAttribute
    imageElement3.setAttribute('data-src', newNewsData3.imageSrc);
    // Também atualize o atributo 'src' para que a imagem seja exibida imediatamente
    imageElement3.setAttribute('src', newNewsData3.imageSrc);

    titleElement3.href = newNewsData3.link;
    titleElement3.textContent = newNewsData3.title;
    textElement3.textContent = newNewsData3.text;
}





