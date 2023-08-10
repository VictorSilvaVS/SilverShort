// Dados da nova notícia
const newNewsData = {
    link: 'https://pvc.org.br/2023/06/braskem-apresenta-ao-mercado-novas-solucoes-de-pvc-reciclado/',
    imageSrc: 'https://pvc.org.br/wp-content/uploads/2023/06/capa.jpg',
    title: 'Braskem apresenta ao mercado novas soluções de PVC reciclado',
    text: 'Compostos produzidos a partir de matéria-prima reciclada ampliam portfólio Wenew da companhia e reforçam seu posicionamento em prol da economia circular.'
};
const newNewsData2 = {
    link: 'https://mundodoplastico.plasticobrasil.com.br/gestao/contaminacao-de-materiais-cuidados-na-industria-de-plasticos',
    imageSrc: 'https://mundodoplastico.plasticobrasil.com.br/sites/mundodoplastico.com/files/styles/article_featured_standard/public/Contaminao%20de%20materiais_%20cuidados%20na%20indstria%20de%20plsticos.png?itok=WFMJ6ZKI',
    title: 'Contaminação de materiais: cuidados na indústria de plásticos',
    text: 'A contaminação de materiais na indústria de plásticos é um problema que precisa ser evitado.'
};
const newNewsData3 = {
    link: 'https://globalkem.com/noticias/noticias/mercado/demanda-de-pvc-deve-crescer-em-2023/',
    imageSrc: 'https://globalkem.com/wp-content/uploads/2023/06/composicao-de-tubos-de-pvc-de-construcao-1536x1024.jpg',
    title: 'Demanda de PVC deve crescer em 2023',
    text: 'O PVC, conhecido por sua resistência, durabilidade e propriedades versáteis, é amplamente utilizado em diversos setores industriais.'
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





