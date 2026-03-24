export const appData = {
  protocol_explanation: {
    title: "O Método Gelatina Mounjaro",
    description: "O protocolo consiste no consumo diário de uma taça da Gelatina Mounjaro (rica em fibras e ativadores metabólicos) exatamente 30 minutos antes do almoço e 30 minutos antes do jantar.",
    mechanism: "Ao chegar no estômago, as fibras da gelatina se expandem, formando um gel que ocupa espaço e retarda o esvaziamento gástrico. Isso bloqueia picos de insulina e envia sinais de saciedade extrema ao cérebro, simulando o efeito de inibidores de apetite de forma 100% natural."
  },
  protocol: Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    title: `Dia ${i + 1}: ${i === 0 ? 'O Início da Transformação' : i === 7 ? 'Primeiros Resultados' : i === 14 ? 'Metade do Caminho' : i === 21 ? 'Hábito Consolidado' : i === 29 ? 'O Novo Você' : 'Foco e Consistência'}`,
    description: i === 0 ? 'Hoje você dá o primeiro passo. Prepare sua gelatina e consuma nos horários corretos.' : 'Mantenha o foco, a consistência é a chave do sucesso.',
    gelatina: 'Consumir 1 taça 30 min antes do almoço e 1 taça 30 min antes do jantar.',
    diet_tip: i % 2 === 0 ? 'Beba 2,5 litros de água hoje. A água é essencial para a expansão das fibras da gelatina no estômago.' : 'Priorize proteínas magras nas refeições principais para manter a massa magra.',
    behavior_tip: i % 3 === 0 ? 'Anote como se sentiu hoje. O controle do apetite já deve ser notável.' : 'Mastigue devagar. A saciedade leva cerca de 20 minutos para ser registrada pelo cérebro.',
  })),
  recipes: [
    {
      id: 'original',
      name: 'Original Detox com Chia',
      shortName: 'Original',
      description: 'A receita base do protocolo. Focada em saciedade extrema e controle absoluto do apetite durante o dia, agora potencializada com chia.',
      tags: ['Saciedade', 'Detox', 'Fibras'],
      ingredients: ['1 sachê de gelatina incolor sem sabor (12g)', '200ml de água quente', '100ml de água gelada', '1 colher de sopa de sementes de chia', '1 colher de chá de psyllium', 'Adoçante stévia a gosto'],
      preparation: ['Dissolva a gelatina incolor na água quente até não restar grumos.', 'Adicione a água gelada e misture bem.', 'Incorpore as sementes de chia e o psyllium, mexendo vigorosamente para não empelotar.', 'Adoce a gosto, distribua em taças e leve à geladeira por 2 horas.'],
      tips: ['A chia, assim como o psyllium, absorve muita água e forma um gel no estômago, prolongando a saciedade por horas sem alterar o sabor.'],
      imageUrl: 'https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=800&q=80'
    },
    {
      id: 'red_fruits',
      name: 'Frutas Vermelhas Termogênica',
      shortName: 'Termogênica',
      description: 'Acelera o metabolismo basal enquanto inibe o apetite. Ideal para quebrar platôs de perda de peso.',
      tags: ['Termogênico', 'Antioxidante'],
      ingredients: ['1 sachê de gelatina diet de morango ou framboesa', '200ml de chá de hibisco quente', '100ml de água gelada', '3 morangos picados', '1 pitada de pimenta caiena', '1 colher de chá de psyllium'],
      preparation: ['Dissolva a gelatina diet no chá de hibisco quente.', 'Adicione a água gelada, a pimenta caiena e o psyllium.', 'Coloque os morangos picados no fundo das taças.', 'Despeje o líquido sobre os morangos e leve à geladeira.'],
      tips: ['Ideal para consumir antes do almoço para dar um pico de energia e queima calórica durante a tarde.'],
      imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80'
    },
    {
      id: 'lemon_ginger',
      name: 'Limão com Gengibre',
      shortName: 'Digestiva',
      description: 'Perfeita para desinchar, melhorar a digestão e combater a retenção de líquidos.',
      tags: ['Desinchaço', 'Digestão'],
      ingredients: ['1 sachê de gelatina incolor sem sabor (12g)', '200ml de água quente', '100ml de água gelada', 'Suco de 1 limão espremido', '1 colher de café de gengibre em pó', '1 colher de chá de psyllium', 'Adoçante a gosto'],
      preparation: ['Dissolva a gelatina na água quente.', 'Misture a água gelada, o suco de limão e o gengibre.', 'Adicione o psyllium mexendo bem para não empelotar.', 'Adoce e leve à geladeira por 2 horas.'],
      tips: ['O gengibre ajuda a combater a inflamação celular, potencializando a perda de peso e reduzindo a celulite.'],
      imageUrl: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=800&q=80'
    },
    {
      id: 'passion_fruit',
      name: 'Maracujá Calmante',
      shortName: 'Noturna',
      description: 'Ideal para o período noturno. Controla a fome da noite e melhora a qualidade do sono.',
      tags: ['Relaxante', 'Sono Profundo'],
      ingredients: ['1 sachê de gelatina incolor sem sabor (12g)', '200ml de chá de camomila quente', '100ml de água gelada', 'Polpa de meio maracujá (com sementes)', '1 colher de chá de psyllium', 'Adoçante a gosto'],
      preparation: ['Dissolva a gelatina no chá de camomila quente.', 'Adicione a água gelada e o psyllium.', 'Misture a polpa do maracujá delicadamente.', 'Adoce e leve à geladeira.'],
      tips: ['Consuma 30 minutos antes do jantar. A camomila e o maracujá reduzem a ansiedade noturna e a vontade de comer doces.'],
      imageUrl: 'https://images.unsplash.com/photo-1563514986832-6156e188735b?w=800&q=80'
    },
    {
      id: 'pineapple_mint',
      name: 'Abacaxi com Hortelã',
      shortName: 'Refrescante',
      description: 'Ação diurética poderosa para eliminar toxinas e refrescar nos dias mais quentes.',
      tags: ['Diurético', 'Refrescante'],
      ingredients: ['1 sachê de gelatina diet de abacaxi', '200ml de água quente', '100ml de chá verde gelado', 'Folhas de hortelã picadas', '1 colher de chá de psyllium'],
      preparation: ['Dissolva a gelatina na água quente.', 'Adicione o chá verde gelado e o psyllium, mexendo bem.', 'Incorpore as folhas de hortelã picadas.', 'Distribua nas taças e leve à geladeira.'],
      tips: ['O chá verde potencializa a queima de gordura e o abacaxi ajuda na digestão de proteínas.'],
      imageUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=800&q=80'
    },
    {
      id: 'apple_cinnamon',
      name: 'Maçã com Canela',
      shortName: 'Glicêmica',
      description: 'Controla os picos de insulina e reduz drasticamente a vontade de comer doces.',
      tags: ['Controle Glicêmico', 'Termogênico'],
      ingredients: ['1 sachê de gelatina incolor', '200ml de água quente', '100ml de água gelada', '1 colher de chá de canela em pó', 'Meia maçã ralada', '1 colher de chá de psyllium'],
      preparation: ['Dissolva a gelatina na água quente com a canela.', 'Adicione a água gelada e o psyllium.', 'Coloque a maçã ralada nas taças e cubra com o líquido.', 'Leve à geladeira.'],
      tips: ['A canela é um excelente hipoglicemiante natural.'],
      imageUrl: 'https://images.unsplash.com/photo-1568227451259-22a313797c55?w=800&q=80'
    },
    {
      id: 'grape_antiox',
      name: 'Uva Antioxidante',
      shortName: 'Antiox',
      description: 'Rica em resveratrol, ajuda na renovação celular e combate o envelhecimento.',
      tags: ['Antioxidante', 'Renovação'],
      ingredients: ['1 sachê de gelatina diet de uva', '200ml de água quente', '100ml de suco de uva integral (sem açúcar)', '1 colher de chá de psyllium'],
      preparation: ['Dissolva a gelatina na água quente.', 'Misture o suco de uva integral e o psyllium.', 'Distribua nas taças e refrigere.'],
      tips: ['O suco integral traz os benefícios da uva sem os malefícios do açúcar refinado.'],
      imageUrl: 'https://images.unsplash.com/photo-1596368708356-6e1e1025ee72?w=800&q=80'
    },
    {
      id: 'kiwi_chia',
      name: 'Kiwi com Chia',
      shortName: 'Intestino',
      description: 'Foco total no funcionamento intestinal e eliminação de inchaço abdominal.',
      tags: ['Fibras', 'Intestino'],
      ingredients: ['1 sachê de gelatina incolor', '200ml de água quente', '100ml de água gelada', '1 kiwi amassado', '1 colher de sopa de chia', '1 colher de chá de psyllium'],
      preparation: ['Dissolva a gelatina na água quente.', 'Adicione a água gelada, a chia e o psyllium.', 'Misture o kiwi e leve à geladeira.'],
      tips: ['A chia junto com o psyllium forma uma vassoura intestinal poderosa.'],
      imageUrl: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&q=80'
    },
    {
      id: 'orange_carrot',
      name: 'Laranja com Cenoura',
      shortName: 'Imunidade',
      description: 'Dose extra de vitamina C e betacaroteno para blindar a imunidade.',
      tags: ['Imunidade', 'Vitaminas'],
      ingredients: ['1 sachê de gelatina incolor', '200ml de água quente', '100ml de suco natural de laranja com cenoura', '1 colher de chá de psyllium'],
      preparation: ['Dissolva a gelatina na água quente.', 'Misture o suco natural e o psyllium.', 'Refrigere até firmar.'],
      tips: ['Beba o suco logo após espremer para não perder a vitamina C.'],
      imageUrl: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80'
    },
    {
      id: 'strawberry_collagen',
      name: 'Morango com Colágeno',
      shortName: 'Pele Firme',
      description: 'Ajuda a manter a firmeza da pele durante o processo de emagrecimento.',
      tags: ['Pele', 'Firmeza'],
      ingredients: ['1 sachê de gelatina diet de morango', '200ml de água quente', '100ml de água gelada', '1 scoop de colágeno hidrolisado', '1 colher de chá de psyllium'],
      preparation: ['Dissolva a gelatina e o colágeno na água quente.', 'Adicione a água gelada e o psyllium.', 'Leve à geladeira.'],
      tips: ['O colágeno hidrolisado previne a flacidez ao perder peso.'],
      imageUrl: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&q=80'
    },
    {
      id: 'watermelon_diuretic',
      name: 'Melancia Diurética',
      shortName: 'Diurética',
      description: 'Elimina a retenção de líquidos rapidamente, secando medidas.',
      tags: ['Diurético', 'Seca Barriga'],
      ingredients: ['1 sachê de gelatina incolor', '150ml de água quente', '150ml de suco natural de melancia', '1 colher de chá de psyllium'],
      preparation: ['Dissolva a gelatina na água quente.', 'Misture o suco de melancia e o psyllium.', 'Refrigere.'],
      tips: ['A melancia é rica em água e potássio, excelente contra o inchaço.'],
      imageUrl: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=800&q=80'
    },
    {
      id: 'peach_rosemary',
      name: 'Pêssego com Alecrim',
      shortName: 'Aromática',
      description: 'Sabor sofisticado que ajuda a reduzir o estresse e a compulsão alimentar.',
      tags: ['Relaxante', 'Aromaterapia'],
      ingredients: ['1 sachê de gelatina diet de pêssego', '200ml de chá de alecrim quente', '100ml de água gelada', '1 colher de chá de psyllium'],
      preparation: ['Faça o chá de alecrim e use-o quente para dissolver a gelatina.', 'Adicione a água gelada e o psyllium.', 'Leve à geladeira.'],
      tips: ['O aroma do alecrim atua no sistema nervoso reduzindo a ansiedade.'],
      imageUrl: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800&q=80'
    },
    {
      id: 'blackberry_clove',
      name: 'Amora com Cravo',
      shortName: 'Metabolismo',
      description: 'Combinação exótica que regula o açúcar no sangue e acelera a queima.',
      tags: ['Termogênico', 'Controle'],
      ingredients: ['1 sachê de gelatina diet de amora', '200ml de água quente com 3 cravos da índia (infusão)', '100ml de água gelada', '1 colher de chá de psyllium'],
      preparation: ['Faça uma infusão com os cravos, retire-os e use a água quente para a gelatina.', 'Misture a água gelada e o psyllium.', 'Refrigere.'],
      tips: ['O cravo da índia é um potente acelerador metabólico.'],
      imageUrl: 'https://images.unsplash.com/photo-1615486171448-4afdcb9a0391?w=800&q=80'
    },
    {
      id: 'tangerine_turmeric',
      name: 'Tangerina com Cúrcuma',
      shortName: 'Anti-inflamatória',
      description: 'Desinflama o corpo, facilitando a perda de gordura resistente.',
      tags: ['Anti-inflamatório', 'Detox'],
      ingredients: ['1 sachê de gelatina incolor', '200ml de água quente', '100ml de suco de tangerina', '1 pitada de cúrcuma em pó', '1 colher de chá de psyllium'],
      preparation: ['Dissolva a gelatina na água quente com a cúrcuma.', 'Adicione o suco de tangerina e o psyllium.', 'Leve à geladeira.'],
      tips: ['A cúrcuma é o anti-inflamatório natural mais potente que existe.'],
      imageUrl: 'https://images.unsplash.com/photo-1558500204-625828f0814d?w=800&q=80'
    },
    {
      id: 'coconut_cocoa',
      name: 'Coco com Cacau',
      shortName: 'Mata-Fome',
      description: 'Rica em gorduras boas que prolongam a saciedade por horas.',
      tags: ['Saciedade', 'Gorduras Boas'],
      ingredients: ['1 sachê de gelatina incolor', '150ml de água quente', '150ml de leite de coco', '1 colher de sopa de cacau em pó 100%', '1 colher de chá de psyllium', 'Adoçante'],
      preparation: ['Dissolva a gelatina e o cacau na água quente.', 'Misture o leite de coco, o adoçante e o psyllium.', 'Refrigere.'],
      tips: ['Ideal para dias em que a fome parece incontrolável.'],
      imageUrl: 'https://images.unsplash.com/photo-1511381939415-e440c05ce0e0?w=800&q=80'
    },
    {
      id: 'raspberry_pepper',
      name: 'Framboesa com Pimenta Rosa',
      shortName: 'Queima Rápida',
      description: 'Ação termogênica dupla para dias de treino ou maior gasto calórico.',
      tags: ['Termogênico', 'Energia'],
      ingredients: ['1 sachê de gelatina diet de framboesa', '200ml de água quente', '100ml de água gelada', 'Grãos de pimenta rosa amassados', '1 colher de chá de psyllium'],
      preparation: ['Dissolva a gelatina na água quente.', 'Adicione a água gelada, a pimenta rosa e o psyllium.', 'Leve à geladeira.'],
      tips: ['A pimenta rosa é suave mas altamente eficaz na termogênese.'],
      imageUrl: 'https://images.unsplash.com/photo-1577058816781-645366432f83?w=800&q=80'
    },
    {
      id: 'cherry_vanilla',
      name: 'Cereja com Baunilha',
      shortName: 'Conforto',
      description: 'Sabor de sobremesa que engana o cérebro e corta a vontade de doces.',
      tags: ['Sobremesa', 'Controle'],
      ingredients: ['1 sachê de gelatina diet de cereja', '200ml de água quente', '100ml de água gelada', '1 colher de café de essência de baunilha', '1 colher de chá de psyllium'],
      preparation: ['Dissolva a gelatina na água quente.', 'Misture a água gelada, a baunilha e o psyllium.', 'Refrigere.'],
      tips: ['A baunilha envia sinais de conforto e saciedade ao cérebro.'],
      imageUrl: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=800&q=80'
    },
    {
      id: 'lemon_basil',
      name: 'Limão Siciliano com Manjericão',
      shortName: 'Gourmet',
      description: 'Refrescante e sofisticada, excelente para dias quentes e detox profundo.',
      tags: ['Detox', 'Refrescante'],
      ingredients: ['1 sachê de gelatina incolor', '200ml de água quente', '100ml de água gelada', 'Suco de meio limão siciliano', 'Folhas de manjericão fresco', '1 colher de chá de psyllium', 'Adoçante'],
      preparation: ['Dissolva a gelatina na água quente.', 'Adicione a água gelada, o suco de limão, o adoçante e o psyllium.', 'Coloque as folhas de manjericão nas taças e cubra com o líquido.', 'Refrigere.'],
      tips: ['O manjericão tem propriedades digestivas e calmantes.'],
      imageUrl: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800&q=80'
    },
    {
      id: 'blueberry_focus',
      name: 'Mirtilo Foco Mental',
      shortName: 'Foco Mental',
      description: 'Rica em antioxidantes que melhoram a clareza mental durante o jejum ou dieta.',
      tags: ['Foco', 'Antioxidante'],
      ingredients: ['1 sachê de gelatina incolor', '200ml de água quente', '100ml de água gelada', 'Punhado de mirtilos (blueberries)', '1 colher de chá de psyllium', 'Adoçante'],
      preparation: ['Dissolva a gelatina na água quente.', 'Misture a água gelada, o adoçante e o psyllium.', 'Coloque os mirtilos nas taças e despeje o líquido.', 'Leve à geladeira.'],
      tips: ['Mirtilos são conhecidos como o "alimento do cérebro".'],
      imageUrl: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=800&q=80'
    },
    {
      id: 'green_apple_celery',
      name: 'Maçã Verde Super Detox',
      shortName: 'Super Detox',
      description: 'Limpeza profunda do fígado e eliminação de toxinas acumuladas.',
      tags: ['Detox Profundo', 'Fígado'],
      ingredients: ['1 sachê de gelatina incolor', '150ml de água quente', '150ml de suco verde (maçã verde batida com aipo)', '1 colher de chá de psyllium'],
      preparation: ['Dissolva a gelatina na água quente.', 'Misture o suco verde coado e o psyllium.', 'Refrigere.'],
      tips: ['O aipo é um dos vegetais mais poderosos para a desintoxicação hepática.'],
      imageUrl: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80'
    },
    {
      id: 'strawberry_basil',
      name: 'Morango com Manjericão',
      shortName: 'Antioxidante',
      description: 'Combinação refrescante que combate radicais livres e melhora a digestão.',
      tags: ['Antioxidante', 'Refrescante'],
      ingredients: ['1 sachê de gelatina diet de morango', '200ml de água quente', '100ml de água gelada', 'Folhas de manjericão fresco', '1 colher de chá de psyllium'],
      preparation: ['Dissolva a gelatina na água quente.', 'Adicione a água gelada, o manjericão picado e o psyllium.', 'Leve à geladeira.'],
      tips: ['O manjericão adiciona um frescor único e auxilia na digestão.'],
      imageUrl: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=800&q=80'
    },
    {
      id: 'lemon_rosemary',
      name: 'Limão com Alecrim',
      shortName: 'Revigorante',
      description: 'Aroma estimulante que reduz a fadiga mental e física.',
      tags: ['Energia', 'Foco'],
      ingredients: ['1 sachê de gelatina incolor', '200ml de chá de alecrim quente', '100ml de água gelada', 'Suco de 1 limão', '1 colher de chá de psyllium', 'Adoçante'],
      preparation: ['Faça o chá de alecrim e use para dissolver a gelatina.', 'Misture o suco de limão, a água gelada e o psyllium.', 'Adoce e refrigere.'],
      tips: ['O alecrim é conhecido por melhorar a memória e a concentração.'],
      imageUrl: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=800&q=80'
    },
    {
      id: 'grape_mint',
      name: 'Uva com Hortelã',
      shortName: 'Circulação',
      description: 'Melhora a circulação sanguínea e previne o envelhecimento precoce.',
      tags: ['Circulação', 'Antioxidante'],
      ingredients: ['1 sachê de gelatina diet de uva', '200ml de água quente', '100ml de água gelada', 'Folhas de hortelã', '1 colher de chá de psyllium'],
      preparation: ['Dissolva a gelatina na água quente.', 'Adicione a água gelada, a hortelã picada e o psyllium.', 'Leve à geladeira.'],
      tips: ['A hortelã ajuda a aliviar dores de cabeça e náuseas.'],
      imageUrl: 'https://images.unsplash.com/photo-1596368708356-6e1e1025ee72?w=800&q=80'
    },
    {
      id: 'passion_ginger',
      name: 'Maracujá com Gengibre',
      shortName: 'Equilíbrio',
      description: 'Acalma a mente enquanto acelera o metabolismo.',
      tags: ['Relaxante', 'Termogênico'],
      ingredients: ['1 sachê de gelatina incolor', '200ml de água quente', '100ml de água gelada', 'Polpa de meio maracujá', '1 colher de café de gengibre em pó', '1 colher de chá de psyllium', 'Adoçante'],
      preparation: ['Dissolva a gelatina na água quente.', 'Misture a água gelada, o maracujá, o gengibre e o psyllium.', 'Adoce e refrigere.'],
      tips: ['O contraste perfeito entre o calmante do maracujá e o termogênico do gengibre.'],
      imageUrl: 'https://images.unsplash.com/photo-1563514986832-6156e188735b?w=800&q=80'
    },
    {
      id: 'coconut_water',
      name: 'Água de Coco Refrescante',
      shortName: 'Hidratação',
      description: 'Hidratação profunda e reposição de eletrólitos, ideal para dias quentes ou pós-treino.',
      tags: ['Hidratação', 'Eletrólitos'],
      ingredients: ['1 sachê de gelatina incolor', '150ml de água quente', '150ml de água de coco gelada', 'Pedaços de coco fresco (opcional)', '1 colher de chá de psyllium'],
      preparation: ['Dissolva a gelatina na água quente.', 'Adicione a água de coco gelada e o psyllium.', 'Coloque os pedaços de coco nas taças e cubra com o líquido.', 'Leve à geladeira.'],
      tips: ['A água de coco é um isotônico natural, excelente para repor minerais.'],
      imageUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=800&q=80'
    },
    {
      id: 'matcha_detox',
      name: 'Matchá Detox',
      shortName: 'Matchá',
      description: 'Poderoso antioxidante e termogênico, o matchá eleva a energia e o foco.',
      tags: ['Energia', 'Antioxidante'],
      ingredients: ['1 sachê de gelatina incolor', '200ml de água quente', '100ml de água gelada', '1 colher de chá de matchá em pó', 'Adoçante a gosto', '1 colher de chá de psyllium'],
      preparation: ['Dissolva o matchá e a gelatina na água quente.', 'Adicione a água gelada, o adoçante e o psyllium.', 'Misture bem e leve à geladeira.'],
      tips: ['O matchá contém L-teanina, que promove relaxamento alerta sem a agitação do café.'],
      imageUrl: 'https://images.unsplash.com/photo-1582787046255-659e0e55c4c2?w=800&q=80'
    },
    {
      id: 'orange_turmeric',
      name: 'Laranja com Cúrcuma',
      shortName: 'Imunidade',
      description: 'Reforça o sistema imunológico e possui forte ação anti-inflamatória.',
      tags: ['Imunidade', 'Anti-inflamatório'],
      ingredients: ['1 sachê de gelatina diet de laranja', '200ml de água quente', '100ml de água gelada', '1 colher de café de cúrcuma em pó', '1 pitada de pimenta do reino', '1 colher de chá de psyllium'],
      preparation: ['Dissolva a gelatina e a cúrcuma na água quente.', 'Adicione a água gelada, a pimenta e o psyllium.', 'Misture bem e leve à geladeira.'],
      tips: ['A pimenta do reino aumenta a absorção da curcumina em até 2000%.'],
      imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80'
    }
  ],
  bonus: {
    diet_plans: [
      {
        id: 'iniciante',
        name: 'Fase 1: Adaptação',
        level: 'Semanas 1 e 2',
        description: 'Foco em limpar a alimentação sem restrições severas. O objetivo é adaptar o corpo e criar consistência com a Gelatina Mounjaro.',
        meals: {
          breakfast: '2 ovos mexidos + 1 fatia de pão integral + Café ou chá sem açúcar.',
          lunch: '1 taça de Gelatina (30 min antes). 1 escumadeira de arroz integral + 1 concha de feijão + 150g de frango/carne magra + Salada à vontade.',
          snack: '1 fruta (maçã, pera ou morangos) + 1 colher de chia ou aveia.',
          dinner: '1 taça de Gelatina (30 min antes). Sopa de legumes com carne desfiada OU Salada completa com atum e azeite.'
        }
      },
      {
        id: 'low_carb',
        name: 'Fase 2: Aceleração (Low Carb)',
        level: 'Semanas 3 e 4',
        description: 'Redução estratégica de carboidratos para acelerar a queima de gordura. O corpo começa a usar a gordura estocada como energia.',
        meals: {
          breakfast: 'Omelete de 2 ovos com espinafre e queijo branco + Café puro.',
          lunch: '1 taça de Gelatina (30 min antes). 150g de peixe ou frango grelhado + Salada de folhas verdes à vontade + Legumes no vapor.',
          snack: 'Mix de castanhas (30g) OU 1 iogurte natural sem açúcar.',
          dinner: '1 taça de Gelatina (30 min antes). Filé de frango grelhado + Espaguete de abobrinha com molho de tomate natural.'
        }
      },
      {
        id: 'keto',
        name: 'Fase 3: Queima Extrema (Cetogênica)',
        level: 'Opcional / Avançado',
        description: 'Redução drástica de carboidratos forçando o corpo a entrar em cetose. Resultados expressivos e rápidos.',
        meals: {
          breakfast: 'Ovos mexidos na manteiga com bacon artesanal + Café com óleo de coco.',
          lunch: '1 taça de Gelatina (sem frutas). Picanha ou sobrecoxa assada + Brócolis e couve-flor na manteiga + 1/4 de abacate.',
          snack: 'Porção de azeitonas OU queijo curado.',
          dinner: '1 taça de Gelatina (sem frutas). Salmão ou sardinha + Salada de rúcula com azeite generoso e queijo parmesão.'
        }
      },
      {
        id: 'jejum',
        name: 'Fase 4: Manutenção (Jejum 16/8)',
        level: 'Estilo de Vida',
        description: 'Janela de alimentação de 8 horas e jejum de 16 horas. A Gelatina é usada para quebrar o jejum suavemente.',
        meals: {
          breakfast: 'Durante o jejum: Apenas água, café puro e chás sem açúcar.',
          lunch: '(Quebra do Jejum - 12h): 1 taça de Gelatina 30 min antes. Refeição: Prato farto de salada, legumes e 200g de proteína magra.',
          snack: '(16h): Iogurte natural integral com sementes de chia e linhaça.',
          dinner: '(Fechamento - 20h): 1 taça de Gelatina. Refeição: Omelete recheado com espinafre e frango desfiado.'
        }
      }
    ],
    sweet_recipes: [
      { id: 'mousse_maracuja', name: 'Mousse Fit de Maracujá', description: 'Sobremesa leve, proteica e super refrescante. Zero açúcar.', ingredients: ['1 polpa de maracujá natural', '1 pote de iogurte natural desnatado (170g)', '2 colheres de sopa de leite em pó desnatado', 'Adoçante stévia ou eritritol a gosto'], preparation: 'Coloque todos os ingredientes no liquidificador. Bata por cerca de 3 minutos até obter uma mistura homogênea e aerada. Despeje em taças individuais e leve à geladeira por pelo menos 1 hora antes de servir.', imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80' },
      { id: 'brigadeiro', name: 'Brigadeiro de Colher Sem Açúcar', description: 'Para matar a vontade de doce sem sair da dieta. Rico em cacau.', ingredients: ['2 colheres de sopa de cacau em pó 100%', '3 colheres de sopa de leite em pó desnatado', 'Água quente (colocada aos poucos)', 'Adoçante a gosto'], preparation: 'Em uma tigela pequena, misture o cacau, o leite em pó e o adoçante. Vá pingando a água quente aos poucos e mexendo vigorosamente com uma colher até atingir a consistência cremosa de brigadeiro. Coma de colher.', imageUrl: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800&q=80' },
      { id: 'sorvete_banana', name: 'Sorvete de Banana Proteico', description: 'Textura incrível, doce natural e muito refrescante. Ideal para o lanche.', ingredients: ['2 bananas bem maduras, cortadas em rodelas e congeladas', '1 scoop de whey protein (baunilha ou chocolate) OU 1 colher de cacau em pó', 'Um fio de leite vegetal (se necessário para bater)'], preparation: 'Retire as bananas do congelador e deixe em temperatura ambiente por 5 minutos. Coloque no processador de alimentos junto com o whey ou cacau. Bata até formar um creme liso e espesso, semelhante a sorvete. Sirva imediatamente.', imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=80' },
      { id: 'bolo_caneca', name: 'Bolo de Caneca Low Carb', description: 'Pronto em 2 minutos para aquele lanche rápido e quentinho.', ingredients: ['1 ovo inteiro', '1 colher de sopa de farinha de amêndoas ou coco', '1 colher de sopa de cacau em pó 100%', '1 colher de chá de fermento em pó', 'Adoçante a gosto', '1 colher de sopa de água ou leite vegetal'], preparation: 'Em uma caneca grande, bata bem o ovo com um garfo. Adicione os ingredientes secos, a água e o adoçante. Misture até ficar homogêneo. Por último, incorpore o fermento delicadamente. Leve ao micro-ondas por 1 minuto e 30 segundos.', imageUrl: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80' },
      { id: 'beijinho', name: 'Beijinho de Coco Fit', description: 'Docinho rápido, rico em gorduras boas e zero açúcar.', ingredients: ['4 colheres de sopa de coco ralado sem açúcar', '2 colheres de sopa de leite em pó desnatado', '2 colheres de sopa de leite de coco', 'Adoçante a gosto', 'Cravos para decorar'], preparation: 'Misture o coco ralado, o leite em pó e o adoçante. Adicione o leite de coco aos poucos até dar ponto de enrolar. Faça bolinhas, passe no coco ralado e decore com um cravo.', imageUrl: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=800&q=80' },
      { id: 'torta_limao', name: 'Tortinha de Limão no Copinho', description: 'Creme azedinho e base crocante, sem farinha de trigo.', ingredients: ['Base: 2 colheres de farinha de amêndoas + 1 colher de óleo de coco', 'Creme: 1 iogurte grego zero', 'Suco de 1 limão', 'Adoçante a gosto', 'Raspas de limão'], preparation: 'Misture a farinha de amêndoas com o óleo de coco e forre o fundo de um copinho. Misture o iogurte com o suco de limão e o adoçante até engrossar. Despeje sobre a base, decore com raspas e gele por 30 min.', imageUrl: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80' },
      { id: 'pudim_chia', name: 'Pudim de Chia com Frutas', description: 'Excelente para o café da manhã ou lanche da tarde.', ingredients: ['2 colheres de sopa de chia', '100ml de leite de coco ou amêndoas', 'Adoçante a gosto', 'Morangos ou mirtilos para o topo'], preparation: 'Misture a chia, o leite e o adoçante em um pote de vidro. Deixe descansar por 5 minutos e misture novamente para não empelotar. Leve à geladeira por pelo menos 2 horas (ou overnight). Sirva com as frutas por cima.', imageUrl: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&q=80' },
      { id: 'creme_abacate', name: 'Creme de Abacate com Cacau', description: 'Gorduras boas que saciam e cacau que melhora o humor.', ingredients: ['Meio abacate maduro', '1 colher de sopa de cacau em pó 100%', 'Adoçante a gosto', '1 colher de sopa de leite vegetal'], preparation: 'Bata todos os ingredientes no processador ou liquidificador até formar um creme liso e brilhante. Sirva gelado.', imageUrl: 'https://images.unsplash.com/photo-1511381939415-e440c05ce0e0?w=800&q=80' },
      { id: 'brownie_batata_doce', name: 'Brownie de Batata Doce', description: 'Brownie fit super cremoso e sem farinha de trigo.', ingredients: ['1 xícara de batata doce cozida e amassada', '1/2 xícara de cacau em pó 100%', '1/4 xícara de pasta de amendoim', 'Adoçante a gosto', '1 colher de chá de fermento'], preparation: 'Misture a batata doce, o cacau, a pasta de amendoim e o adoçante até formar uma massa homogênea. Incorpore o fermento. Asse em forno pré-aquecido a 180°C por 20 minutos.', imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80' },
      { id: 'trufa_tamara', name: 'Trufa de Tâmara e Cacau', description: 'Docinho energético natural, perfeito para o pré-treino.', ingredients: ['1 xícara de tâmaras sem caroço', '1/2 xícara de nozes ou amêndoas', '2 colheres de sopa de cacau em pó 100%', 'Coco ralado para enrolar'], preparation: 'Processe as nozes até virar uma farinha grossa. Adicione as tâmaras e o cacau e processe até formar uma massa pegajosa. Faça bolinhas e passe no coco ralado. Guarde na geladeira.', imageUrl: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800&q=80' },
      { id: 'panqueca_aveia', name: 'Panqueca Doce de Aveia', description: 'Café da manhã rápido, rico em fibras e proteínas.', ingredients: ['1 ovo', '2 colheres de sopa de farelo de aveia', '1 colher de sopa de iogurte natural', 'Adoçante a gosto', 'Canela a gosto'], preparation: 'Bata todos os ingredientes com um garfo. Despeje em uma frigideira antiaderente untada com um fio de óleo de coco. Doure dos dois lados. Sirva com frutas ou pasta de amendoim.', imageUrl: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&q=80' },
      { id: 'muffin_maca', name: 'Muffin de Maçã e Canela', description: 'Bolinho individual fofinho e aromático.', ingredients: ['1 ovo', '2 colheres de sopa de farinha de amêndoas', '1/2 maçã picada em cubinhos', '1 colher de chá de canela', 'Adoçante a gosto', '1 colher de café de fermento'], preparation: 'Misture o ovo, a farinha, a canela e o adoçante. Adicione a maçã picada e o fermento. Coloque em forminhas de silicone e asse a 180°C por 15-20 minutos ou no micro-ondas por 2 minutos.', imageUrl: 'https://images.unsplash.com/photo-1568227451259-22a313797c55?w=800&q=80' },
      { id: 'cheesecake_fit', name: 'Cheesecake de Morango Fit', description: 'Sobremesa clássica em versão saudável e proteica.', ingredients: ['Base: 1/2 xícara de farinha de amêndoas + 1 colher de óleo de coco', 'Creme: 150g de cream cheese light ou creme de ricota', '1 colher de sopa de adoçante', '1 colher de chá de essência de baunilha', 'Cobertura: Geleia de morango 100% fruta'], preparation: 'Misture a base e forre forminhas. Bata o cream cheese com adoçante e baunilha. Despeje sobre a base e asse a 160°C por 20 min. Cubra com a geleia após esfriar.', imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80' },
      { id: 'bombom_uva', name: 'Bombom de Uva na Travessa', description: 'O famoso doce de festa, agora liberado na dieta.', ingredients: ['Creme: 1 lata de leite condensado diet (ou caseiro fit)', '1 colher de sopa de manteiga ghee', 'Uvas verdes sem semente', 'Cobertura: 100g de chocolate 70% derretido com 1 colher de creme de leite leve'], preparation: 'Faça um brigadeiro branco com o leite condensado diet e a manteiga. Em uma travessa, coloque as uvas, cubra com o creme branco já frio e finalize com a ganache de chocolate 70%. Gele por 2 horas.', imageUrl: 'https://images.unsplash.com/photo-1596368708356-6e1e1025ee72?w=800&q=80' },
      { id: 'cookies_aveia', name: 'Cookies de Aveia e Gotas de Chocolate', description: 'Biscoitos crocantes por fora e macios por dentro.', ingredients: ['1 xícara de aveia em flocos', '2 bananas bem maduras amassadas', '2 colheres de sopa de pasta de amendoim', 'Gotas de chocolate 70% cacau', '1 pitada de canela'], preparation: 'Misture a aveia, a banana e a pasta de amendoim até formar uma massa. Incorpore as gotas de chocolate e a canela. Molde os cookies em uma assadeira untada e asse a 180°C por 15 minutos.', imageUrl: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80' },
      { id: 'pudim_leite', name: 'Pudim de Leite Fit', description: 'O clássico pudim de leite condensado, mas sem açúcar.', ingredients: ['Calda: 3 colheres de sopa de xilitol derretido na forma', 'Pudim: 3 ovos', '2 xícaras de leite desnatado ou vegetal', '1 xícara de leite em pó desnatado', '1/2 xícara de adoçante culinário', '1 colher de chá de essência de baunilha'], preparation: 'Derreta o xilitol na forma de pudim. Bata os demais ingredientes no liquidificador. Despeje na forma e asse em banho-maria a 180°C por cerca de 1 hora. Desenforme frio.', imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80' }
    ],
    pilates: [
      { day: 1, name: 'Cadeirinha na Parede', description: 'Fortalecimento de pernas e glúteos.', instruction: 'Encoste as costas na parede, desça até os joelhos formarem 90 graus. Segure por 30 segundos.' },
      { day: 2, name: 'Flexão na Parede', description: 'Trabalha peito e braços.', instruction: 'Em pé, mãos na parede na largura dos ombros. Flexione os braços e empurre de volta. 3 séries de 12.' },
      { day: 3, name: 'Elevação Pélvica com Pés na Parede', description: 'Foco em glúteos e abdômen.', instruction: 'Deitada de barriga para cima, pés apoiados na parede. Eleve o quadril e desça devagar. 3 séries de 15.' },
      { day: 4, name: 'Prancha Inclinada', description: 'Core e estabilidade.', instruction: 'Apoie os antebraços na parede, afaste os pés e mantenha o corpo reto. Segure por 40 segundos.' },
      { day: 5, name: 'Alongamento de Peitoral', description: 'Melhora a postura.', instruction: 'Apoie uma mão na parede, braço esticado, e gire o tronco para o lado oposto. 30s cada lado.' },
      { day: 6, name: 'Agachamento Unilateral', description: 'Equilíbrio e força.', instruction: 'Apoie uma mão na parede para equilíbrio. Agache com uma perna só. 10 repetições cada perna.' },
      { day: 7, name: 'Relaxamento Pernas para Cima', description: 'Circulação e descanso.', instruction: 'Deite no chão, encoste o bumbum na parede e estique as pernas para cima. Fique por 5 minutos.' }
    ]
  }
};
