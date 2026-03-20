export const appData = {
  protocol: Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    title: `Dia ${i + 1}: ${i === 0 ? 'O Início da Transformação' : i === 14 ? 'Metade do Caminho' : i === 29 ? 'O Novo Você' : 'Foco e Consistência'}`,
    description: i === 0 ? 'Hoje você dá o primeiro passo rumo ao seu novo corpo.' : 'Mantenha o foco, os resultados estão aparecendo.',
    gelatina: 'Consumir 1 porção 30 min antes do almoço e 1 porção à tarde.',
    diet_tip: i % 2 === 0 ? 'Beba 2,5 litros de água hoje.' : 'Evite carboidratos após as 18h.',
    behavior_tip: i % 3 === 0 ? 'Anote como se sentiu hoje.' : 'Durma pelo menos 7 horas.',
  })),
  recipes: [
    {
      name: 'Gelatina Monjaro Original',
      description: 'A receita base para saciedade extrema e controle de apetite.',
      ingredients: [
        '1 sachê de gelatina incolor sem sabor (12g)',
        '200ml de água quente',
        '100ml de água gelada',
        '1 colher de sopa de vinagre de maçã',
        '1 colher de chá de psyllium',
        'Adoçante stévia a gosto'
      ],
      preparation: [
        'Dissolva a gelatina incolor na água quente.',
        'Adicione a água gelada e misture bem.',
        'Incorpore o vinagre de maçã e o psyllium.',
        'Adoce a gosto e leve à geladeira por 2 horas.'
      ],
      tips: ['Beba um copo de água logo após consumir para ativar o psyllium.'],
      variations: [
        'Adicione suco de meio limão para um sabor cítrico.',
        'Bata com morangos no liquidificador antes de gelar.'
      ]
    }
  ],
  ingredients: {
    base: ['Gelatina incolor sem sabor', 'Água', 'Adoçante natural (Stévia/Eritritol)'],
    optionals: ['Limão', 'Morango', 'Maracujá', 'Canela em pó'],
    accelerators: ['Vinagre de maçã', 'Psyllium', 'Gengibre em pó', 'Chia']
  },
  tips: [
    'Beba pelo menos 2,5L de água por dia.',
    'Durma de 7 a 8 horas por noite.',
    'Evite carboidratos simples após as 18h.',
    'Mastigue cada garfada pelo menos 20 vezes.',
    'Não pule o café da manhã se sentir fome.',
    'Substitua doces por uma porção da Gelatina Monjaro.',
    'Faça caminhadas de 30 minutos, 3x na semana.',
    'Evite refrigerantes, mesmo os zero.',
    'Planeje suas refeições no domingo.',
    'Não se pese todos os dias, foque nas medidas.'
  ],
  bonus: {
    diet_plans: [
      {
        level: 'Básico',
        meals: {
          breakfast: '2 ovos mexidos + 1 fatia de mamão + café sem açúcar',
          lunch: '1 filé de frango grelhado + 3 colheres de arroz integral + salada à vontade',
          snack: '1 porção de Gelatina Monjaro + 1 castanha do pará',
          dinner: 'Sopa de legumes com carne ou omelete de 2 ovos com espinafre'
        }
      },
      {
        level: 'Intermediário',
        meals: {
          breakfast: 'Crepioca (1 ovo + 1 colher de tapioca) com queijo branco + chá verde',
          lunch: '150g de peixe assado + purê de abóbora + brócolis no vapor',
          snack: '1 iogurte natural + 1 colher de chia + 1 porção de Gelatina Monjaro',
          dinner: 'Salada completa com atum, folhas verdes, tomate e azeite'
        }
      },
      {
        level: 'Avançado',
        meals: {
          breakfast: 'Jejum intermitente (apenas café puro ou chá) ou Suco verde detox',
          lunch: '150g de patinho moído + mix de legumes low carb (abobrinha, couve-flor)',
          snack: '1 porção de Gelatina Monjaro + 5 amêndoas',
          dinner: '1 filé de frango + salada de folhas verdes com limão'
        }
      }
    ],
    sweet_recipes: [
      { name: 'Mousse Fit de Maracujá', description: 'Sobremesa leve e proteica.', ingredients: ['1 polpa de maracujá', '1 iogurte natural', '1 colher de leite em pó desnatado', 'Adoçante'], preparation: 'Bata tudo no liquidificador e gele por 1h.' },
      { name: 'Brigadeiro de Colher Sem Açúcar', description: 'Para matar a vontade de doce.', ingredients: ['2 colheres de cacau 100%', '1 colher de leite em pó', 'Água quente até dar ponto', 'Adoçante'], preparation: 'Misture os ingredientes secos e adicione água aos poucos.' },
      { name: 'Sorvete de Banana Rápido', description: 'Refrescante e natural.', ingredients: ['2 bananas congeladas', '1 colher de cacau ou whey protein'], preparation: 'Bata no processador até virar creme.' },
      { name: 'Bolo de Caneca Low Carb', description: 'Pronto em 2 minutos.', ingredients: ['1 ovo', '1 colher de farinha de amêndoas', '1 colher de cacau', '1 colher de chá de fermento', 'Adoçante'], preparation: 'Misture tudo na caneca e leve ao micro-ondas por 1m30s.' },
      { name: 'Docinho de Leite Ninho Fit', description: 'Fácil e delicioso.', ingredients: ['4 colheres de leite em pó desnatado', 'Água', 'Adoçante'], preparation: 'Misture até formar uma massinha e enrole.' }
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
