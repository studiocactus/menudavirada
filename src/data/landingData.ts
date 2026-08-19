export interface Recipe {
  id: string;
  title: string;
  category: string;
  prepTime: string;
  servings: string;
  image: string;
  description: string;
  tags: string[];
}

export interface RecipeCategory {
  title: string;
  count: string;
  description: string;
  iconName: string;
}

export interface Benefit {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface Bonus {
  title: string;
  badge: string;
  description: string;
  valueTag: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const landingData = {
  // Seção 02: Identificação
  identification: {
    title: "Você também passa por isso?",
    subtitle: "A rotina acelerada não precisa significar comer mal ou viver à base de comida pronta.",
    situations: [
      {
        quote: "Cheguei cansado do trabalho.",
        description: "A mente está exausta e a última coisa que você quer é passar 1 hora em frente ao fogão."
      },
      {
        quote: "Estou com fome e sem ideias.",
        description: "Abrir a geladeira, olhar para os ingredientes e não saber o que combinar."
      },
      {
        quote: "Não quero pedir delivery de novo.",
        description: "Comida cara, demorada e que muitas vezes deixa aquela sensação de peso no estômago."
      },
      {
        quote: "Não quero refeições complicadas.",
        description: "Receitas de internet com 25 ingredientes raros e técnicas profissionais só geram frustração."
      }
    ],
    conclusion: "Foi exatamente para esse momento da sua noite que o Menu da Virada foi criado."
  },

  // Seção 03: A Solução
  solution: {
    badge: "CONCEITO MENU DA VIRADA",
    title: "Boas receitas podem mudar uma noite comum.",
    quote: "Você não precisa de mais tempo na cozinha. Precisa de boas ideias.",
    description: "O Menu da Virada foi pensado para quem quer comer bem na vida real. Receitas fáceis de entender, ingredientes acessíveis que você já tem em casa e preparos práticos que cabem perfeitamente na sua rotina depois do trabalho.",
    highlight: "O Menu da Virada não vende apenas receitas. Vende a tranquilidade de saber exatamente o que cozinhar.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000&auto=format&fit=crop&q=80"
  },

  // Seção 04: Benefícios
  benefits: [
    {
      number: "01",
      title: "Rápidas",
      description: "Receitas pensadas para quem não quer passar horas na cozinha.",
      detail: "Preparos de 15 a 30 minutos sem sujeira excessiva de louça."
    },
    {
      number: "02",
      title: "Simples",
      description: "Preparos fáceis de acompanhar, mesmo sem ser especialista em gastronomia.",
      detail: "Instruções diretas ao ponto, com passos claros e sem rodeios."
    },
    {
      number: "03",
      title: "Saborosas",
      description: "Comida caseira de verdade que dá vontade de fazer e repetir.",
      detail: "Combinações equilibradas com gostinho de comida de acerto."
    },
    {
      number: "04",
      title: "Para a vida real",
      description: "Ingredientes simples e acessíveis que você encontra em qualquer supermercado.",
      detail: "Sem itens exóticos ou difíceis de achar na feira do bairro."
    }
  ] as Benefit[],

  // Seção 05: Dentro do Livro (Categorias)
  categories: [
    {
      title: "Comece bem o dia",
      count: "8 receitas",
      description: "Opções nutritivas e rápidas para mañãs ativas ou cafés sem pressa.",
      iconName: "Sun"
    },
    {
      title: "Almoço sem complicação",
      count: "8 receitas",
      description: "Pratos práticos para o meio do dia que rendem bem e satisfazem.",
      iconName: "Utensils"
    },
    {
      title: "Jantar depois de um dia cansativo",
      count: "10 receitas",
      description: "O núcleo do livro: refeições aconchegantes e rápidas de preparar à noite.",
      iconName: "Moon"
    },
    {
      title: "Quando a fome aperta",
      count: "8 receitas",
      description: "Lanches inteligentes e petiscos saborosos para resolver a fome rápida.",
      iconName: "Zap"
    },
    {
      title: "Para quando você quer caprichar",
      count: "4 receitas",
      description: "Pratos especiais para o fim de semana ou para receber quem você gosta.",
      iconName: "Sparkles"
    },
    {
      title: "Para adoçar a vida",
      count: "2 receitas",
      description: "Sobremesas simples e equilibradas para encerrar o dia com chave de ouro.",
      iconName: "Heart"
    }
  ] as RecipeCategory[],

  // Seção 06: Receitas em Destaque (Galeria Editorial)
  featuredRecipes: [
    {
      id: "1",
      title: "Frango Cremoso de Uma Panela",
      category: "Jantar Prático",
      prepTime: "20 min",
      servings: "2 porções",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&auto=format&fit=crop&q=80",
      description: "Suculento peito de frango grelhado com molho suave de ervas finas e requeijão. Sujeira mínima de louça.",
      tags: ["Uma Panela", "Sem Complicação"]
    },
    {
      id: "2",
      title: "Filé de Peixe ao Forno com Batatas",
      category: "Jantar Leve",
      prepTime: "25 min",
      servings: "2 a 3 porções",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80",
      description: "Tilápia ou pescada assada com rodelas de batata temperadas com azeite, alho e tomate cereja.",
      tags: ["Assado no Forno", "Leve & Saboroso"]
    },
    {
      id: "3",
      title: "Nhoque de Frigideira com Molho Fresco",
      category: "Massa Rápida",
      prepTime: "15 min",
      servings: "2 porções",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=80",
      description: "Nhoque dourado diretamente na frigideira com manteiga, manjericão fresco e queijo ralado na hora.",
      tags: ["Pronto em 15min", "Conforto"]
    },
    {
      id: "4",
      title: "Omelete Cremosa de Tomate e Queijo",
      category: "Refeição Express",
      prepTime: "10 min",
      servings: "1 a 2 porções",
      image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=800&auto=format&fit=crop&q=80",
      description: "Ovelhas caipiras batidos com toque de cream cheese, tomates sweet grape e orégano fresco.",
      tags: ["Ultra Rápido", "Proteico"]
    },
    {
      id: "5",
      title: "Frango Dourado com Legumes Salteados",
      category: "Almoço Prático",
      prepTime: "20 min",
      servings: "2 porções",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&auto=format&fit=crop&q=80",
      description: "Tiras de frango grelhadas com abobrinha, cenoura e pimentões selados no azeite de oliva extra virgem.",
      tags: ["Nutritivo", "Cores & Sabor"]
    },
    {
      id: "6",
      title: "Arroz Cremoso de Cogumelos e Parmesão",
      category: "Especial de Fim de Semana",
      prepTime: "25 min",
      servings: "2 porções",
      image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=800&auto=format&fit=crop&q=80",
      description: "Uma versão simplificada e rápida de risoto para quando você quer caprichar sem complicação.",
      tags: ["Caprichado", "Textura Incrível"]
    }
  ] as Recipe[],

  // Seção 07: O que você recebe (Produto + Bônus)
  productIncludes: {
    mainProduct: {
      title: "Ebook 40+ Menu da Virada",
      subtitle: "Guia completo em formato PDF digital de alta resolução",
      items: [
        "40 receitas passo a passo testadas para a vida real",
        "Índice interativo de fácil navegação no celular ou tablet",
        "Dicas de substituição de ingredientes",
        "Indicador visual de tempo de preparo e rendimento"
      ]
    },
    bonuses: [
      {
        title: "Bônus 01: Cardápio Sugerido de 7 Dias",
        badge: "BÔNUS EXCLUSIVO",
        description: "Planejamento pronto para uma semana inteira sem você precisar gastar 1 minuto pensando no menu.",
        valueTag: "Incluso Gratuitamente"
      },
      {
        title: "Bônus 02: Lista de Compras Inteligente",
        badge: "BÔNUS EXCLUSIVO",
        description: "Organizada por setores do supermercado para economizar tempo nas compras e evitar desperdício de comida.",
        valueTag: "Incluso Gratuitamente"
      },
      {
        title: "Bônus 03: Guia 10 Receitas Express (em 15 minutos)",
        badge: "BÔNUS EXCLUSIVO",
        description: "Seleção especial para os dias em que o tempo está ultra apertado e a fome não pode esperar.",
        valueTag: "Incluso Gratuitamente"
      }
    ] as Bonus[]
  },

  // Seção 08: Para quem é
  audience: [
    {
      title: "Para quem chega cansado do trabalho",
      description: "E quer resolver o jantar rapidamente sem transformar a cozinha num caos."
    },
    {
      title: "Para quem cansou de repetir sempre as mesmas 3 receitas",
      description: "E busca ideias frescas, saborosas e simples para variar o cardápio."
    },
    {
      title: "Para quem quer diminuir a dependência de delivery",
      description: "Economizando dinheiro e comendo alimentos mais saudáveis e preparados na hora."
    },
    {
      title: "Para quem valoriza comida gostosa na vida real",
      description: "Sem precisar de ingredientes difíceis de encontrar ou técnicas de alta gastronomia."
    },
    {
      title: "Para quem quer mais tranquilidade na rotina",
      description: "Abrir o aplicativo no celular e saber exatamente o que cozinhar em minutos."
    }
  ],

  // Seção 09: Como funciona
  howItWorks: [
    {
      step: "01",
      title: "Escolha uma receita",
      description: "Navegue pelas categorias pelo celular ou tablet e escolha o prato de acordo com seu tempo e apetite."
    },
    {
      step: "02",
      title: "Separe os ingredientes",
      description: "Utilize itens simples do seu dia a dia que você já tem na geladeira ou despensa."
    },
    {
      step: "03",
      title: "Prepare e aproveite",
      description: "Siga o passo a passo direto e desfrute de uma refeição caseira, quente e deliciosa."
    }
  ],

  // Seção 12: FAQ (Perguntas Frequentes)
  faq: [
    {
      question: "O produto é físico ou digital?",
      answer: "O Menu da Virada é 100% digital em formato PDF de alta qualidade. Você recebe o acesso imediatamente no seu e-mail e pode salvar no celular, tablet ou computador, além de poder imprimir se desejar."
    },
    {
      question: "Como recebo o ebook após a compra?",
      answer: "Assim que o pagamento for confirmado, você receberá um e-mail da Hotmart com seus dados de acesso para baixar o e-book principal e todos os bônus instantaneamente."
    },
    {
      question: "Posso acessar pelo celular?",
      answer: "Sim! O livro foi diagramado especialmente para leitura confortável em telas de celular e tablet, com índice clicável para navegar rapidamente entre as receitas."
    },
    {
      question: "Preciso saber cozinhar bem para fazer as receitas?",
      answer: "Não! As receitas foram pensadas para a vida real. As instruções são claras, diretas e simples de acompanhar, mesmo para quem não tem grande prática na cozinha."
    },
    {
      question: "Os ingredientes são difíceis de encontrar?",
      answer: "De forma alguma. Todos os ingredientes são comuns e facilmente encontrados em qualquer supermercado ou feira de bairro."
    },
    {
      question: "O ebook é indicado para quem tem mais de 40 anos?",
      answer: "Sim, o conceito foi desenhado pensando na rotina de quem já tem uma vida estruturada, dias corridos e busca praticidade com bom gosto, mas é perfeito para qualquer pessoa que queira comer bem sem complicação."
    },
    {
      question: "E se eu não gostar do material?",
      answer: "Você conta com nossa Garantia Incondicional de 7 dias. Se por qualquer motivo não ficar satisfeito, basta solicitar o reembolso na plataforma e devolveremos 100% do seu dinheiro."
    }
  ] as FAQItem[],

  // Assets configuráveis do projeto
  assets: {
    bookMockupBgImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80",
    bookMockupRealImage: "", // Deixar em branco para usar o mockup CSS atual
  },

  // Estrutura futura de Autor / Curador (Opcional)
  author: {
    title: "Por trás do Menu da Virada",
    subtitle: "A mente e o coração por trás das panelas",
    name: "[AUTOR / CURADOR A DEFINIR]",
    bio: "Aqui será inserido o perfil e a história do criador do e-book. Falaremos sobre sua paixão por descomplicar a cozinha diária e como as 40 receitas foram selecionadas e testadas.",
    image: "", // URL da foto do autor
  }
};

