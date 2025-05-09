
import { Post } from '../components/PostCard';

export const featuredPosts: Post[] = [
  {
    id: '1',
    slug: 'decoracao-sustentavel-para-casas-de-luxo',
    title: 'Decoração Sustentável para Casas de Luxo: Tendências 2025',
    excerpt: 'Descubra como a sustentabilidade está transformando o design de interiores de alto padrão com materiais eco-friendly e soluções inteligentes.',
    category: 'Decor',
    categorySlug: 'decor',
    author: 'Bruno Fernandes',
    date: '9 de Maio de 2025',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '2',
    slug: 'mercado-imobiliario-campinas-alta',
    title: 'Mercado Imobiliário em Campinas Registra Alta de 15% nos Imóveis de Luxo',
    excerpt: 'Análise do crescimento do setor imobiliário de alto padrão em Campinas durante o primeiro trimestre de 2025, com destaque para os bairros mais valorizados.',
    category: 'Notícias',
    categorySlug: 'noticias',
    author: 'Mariana Silva',
    date: '7 de Maio de 2025',
    image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '3',
    slug: 'arquitetura-modernista-cambui',
    title: 'A Arquitetura Modernista que Transforma o Cambuí',
    excerpt: 'Como os novos projetos arquitetônicos estão redefinindo a paisagem de um dos bairros mais tradicionais de Campinas.',
    category: 'Arquitetura',
    categorySlug: 'arquitetura',
    author: 'Carlos Santos',
    date: '3 de Maio de 2025',
    image: 'https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=1200&q=80'
  }
];

export const recentPosts: Post[] = [
  {
    id: '4',
    slug: 'piscinas-infinitas-tendencia-luxo',
    title: 'Piscinas Infinitas: A Tendência que Domina os Imóveis de Luxo',
    excerpt: 'Como esse elemento de design se tornou obrigatório nas mansões mais desejadas de Campinas.',
    category: 'Tendências',
    categorySlug: 'tendencias',
    author: 'Tiago Mendes',
    date: '2 de Maio de 2025',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '5',
    slug: 'home-office-luxuoso',
    title: '5 Dicas para um Home Office Luxuoso e Produtivo',
    excerpt: 'Como criar um espaço de trabalho que combina sofisticação e funcionalidade em sua residência.',
    category: 'Dicas',
    categorySlug: 'dicas',
    author: 'Paula Oliveira',
    date: '30 de Abril de 2025',
    image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '6',
    slug: 'smart-homes-tecnologia-residencial',
    title: 'Smart Homes: O Futuro da Tecnologia Residencial',
    excerpt: 'Conheça os sistemas de automação que estão transformando as casas de alto padrão em Campinas.',
    category: 'Tecnologia',
    categorySlug: 'tendencias',
    author: 'Rafael Costa',
    date: '27 de Abril de 2025',
    image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '7',
    slug: 'investimentos-imobiliarios-2025',
    title: 'Guia de Investimentos Imobiliários para 2025',
    excerpt: 'Análise das melhores oportunidades para investir no mercado imobiliário de luxo em Campinas.',
    category: 'Luxo',
    categorySlug: 'luxo',
    author: 'Bruno Fernandes',
    date: '25 de Abril de 2025',
    image: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '8',
    slug: 'jardins-verticais-decoracao',
    title: 'Jardins Verticais: Verde e Sofisticação na Decoração',
    excerpt: 'Como incorporar elementos naturais na decoração de interiores para criar ambientes mais saudáveis e sofisticados.',
    category: 'Decor',
    categorySlug: 'decor',
    author: 'Mariana Silva',
    date: '22 de Abril de 2025',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1200&q=80'
  }
];

export const propertyAds = [
  {
    id: 'prop1',
    title: 'Cobertura Duplex no Cambuí',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=600&q=80',
    link: '/imoveis/cobertura-cambui'
  },
  {
    id: 'prop2',
    title: 'Mansão em Condomínio Fechado',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80',
    link: '/imoveis/mansao-condominio'
  },
  {
    id: 'prop3',
    title: 'Apartamento de Luxo - Nova Campinas',
    image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=600&q=80',
    link: '/imoveis/apartamento-nova-campinas'
  }
];

export const postContent = {
  title: 'Decoração Sustentável para Casas de Luxo: Tendências 2025',
  meta: {
    author: 'Bruno Fernandes',
    date: '9 de Maio de 2025',
    category: 'Decor',
    categorySlug: 'decor'
  },
  image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1200&q=80',
  content: [
    {
      type: 'paragraph',
      content: 'O luxo e a sustentabilidade nunca estiveram tão próximos quanto em 2025. A crescente conscientização ambiental tem transformado o mercado imobiliário de alto padrão, com clientes exigindo não apenas espaços sofisticados, mas também sustentáveis. Este artigo explora as principais tendências em decoração eco-friendly que estão dominando as residências de luxo em Campinas.'
    },
    {
      type: 'heading',
      content: 'Materiais Naturais e Sustentáveis'
    },
    {
      type: 'paragraph',
      content: 'A madeira certificada, o bambu e a pedra natural estão entre os materiais mais procurados. Além de conferirem elegância aos ambientes, eles apresentam baixo impacto ambiental e durabilidade excepcional. Designers de interiores têm optado por peças únicas, feitas à mão por artesãos locais, que trazem exclusividade e ajudam a fortalecer a economia da região.'
    },
    {
      type: 'paragraph',
      content: 'Os tecidos orgânicos, como o linho e o algodão sustentável, também ganharam destaque. Livres de produtos químicos agressivos, eles são ideais para quem busca ambientes mais saudáveis e sofisticados. A paleta de cores neutras e terrosas predomina, criando uma atmosfera de tranquilidade e conexão com a natureza.'
    },
    {
      type: 'heading',
      content: 'Tecnologia Verde'
    },
    {
      type: 'paragraph',
      content: 'As casas inteligentes agora incorporam sistemas que não apenas oferecem conforto, mas também reduzem o consumo energético. Painéis solares integrados à arquitetura, sistemas de reaproveitamento de água da chuva e iluminação LED de alta eficiência são alguns exemplos de como a tecnologia está sendo utilizada para criar residências luxuosas e, ao mesmo tempo, ecologicamente responsáveis.'
    },
    {
      type: 'paragraph',
      content: 'Os sistemas de automação residencial permitem o controle preciso de iluminação, temperatura e uso de água, otimizando o consumo de recursos naturais sem sacrificar o conforto.'
    },
    {
      type: 'heading',
      content: 'Biofilia e Jardins Internos'
    },
    {
      type: 'paragraph',
      content: 'A integração de elementos naturais aos ambientes internos tem sido uma das grandes tendências em 2025. Jardins verticais, paredes vivas e grandes jardins de inverno são incorporados ao design, trazendo vida e frescor aos ambientes. Além de esteticamente impressionantes, esses elementos melhoram a qualidade do ar e proporcionam bem-estar aos moradores.'
    },
    {
      type: 'paragraph',
      content: 'Estudos recentes comprovaram que ambientes com elementos naturais reduzem o estresse e aumentam a produtividade, tornando-se um investimento não apenas em sustentabilidade, mas também em qualidade de vida.'
    },
    {
      type: 'heading',
      content: 'O Valor da Sustentabilidade'
    },
    {
      type: 'paragraph',
      content: 'Imóveis de luxo com certificações ambientais têm registrado valorização superior à média do mercado. Investir em decoração sustentável não é apenas uma escolha ética, mas também um excelente negócio. Compradores estão dispostos a pagar mais por residências que aliam sofisticação e responsabilidade ambiental.'
    },
    {
      type: 'paragraph',
      content: 'A My House Campinas tem sido pioneira em oferecer opções de decoração sustentável para seus clientes mais exigentes. Nossa equipe de designers trabalha em parceria com fornecedores comprometidos com práticas sustentáveis, garantindo ambientes sofisticados e ecologicamente responsáveis.'
    },
  ]
};
