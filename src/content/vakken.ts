export const subjects = [
  {
    key: "wiskunde",
    name: "Wiskunde",
    to: "/wiskunde-bijles-almere",
    levels: "Wiskunde A, B en C · MAVO, HAVO, VWO",
    desc: "Van herleiden en vergelijkingen tot differentiëren, integreren en statistiek. We herstellen eerst de basis uit eerdere leerjaren.",
  },
  {
    key: "natuurkunde",
    name: "Natuurkunde",
    to: "/natuurkunde-bijles-almere",
    levels: "HAVO en VWO · onder- en bovenbouw",
    desc: "Mechanica, energie, elektriciteit en golven. Met veel nadruk op het ontleden van de vraag voordat je gaat rekenen.",
  },
  {
    key: "scheikunde",
    name: "Scheikunde",
    to: "/scheikunde-bijles-almere",
    levels: "HAVO en VWO · bovenbouw en examen",
    desc: "Molberekeningen, reactievergelijkingen, zuren en basen en organische chemie, in vaste en herhaalbare stappen.",
  },
  {
    key: "economie",
    name: "Economie",
    to: "/economie-bijles-almere",
    levels: "MAVO, HAVO en VWO · ook bedrijfseconomie",
    desc: "Micro, macro en bedrijfseconomie, uitgelegd door een afgestudeerde VU-student met economie als hoofdrichting.",
  },
] as const;

export const levels = [
  {
    id: "mavo",
    name: "MAVO",
    desc: "In de MAVO-jaren draait het vooral om overzicht: weten wat er van je gevraagd wordt en dat rustig kunnen uitvoeren. We werken aan de basisvaardigheden, aan planning en aan het zelfvertrouwen om een toets te beginnen zonder blokkade.",
    items: [
      "Alle leerjaren",
      "Huiswerk en planning",
      "Toetsvoorbereiding",
      "Achterstanden wegwerken",
      "Voorbereiding centraal examen",
    ],
  },
  {
    id: "havo",
    name: "HAVO",
    desc: "Op de HAVO neemt het tempo in de bovenbouw flink toe en stapelt de stof zich op. We houden de basis op orde, oefenen met de vraagtypen die op toetsen terugkomen en bouwen richting het examenjaar een vaste werkwijze op.",
    items: [
      "Alle leerjaren",
      "Overgang onderbouw naar bovenbouw",
      "Toetsweken",
      "Profielvakken wiskunde, natuurkunde, scheikunde, economie",
      "Eindexamenvoorbereiding",
    ],
  },
  {
    id: "vwo",
    name: "VWO",
    desc: "Op het VWO wordt vooral abstract denken gevraagd: waarom werkt iets zo, en hoe pas je dat toe op een situatie die je nog nooit hebt gezien. Daar richt ik de lessen op, in plaats van op het stampen van stappenplannen.",
    items: [
      "Alle leerjaren",
      "Wiskunde B en natuurkunde op VWO-niveau",
      "Diepere uitleg in plaats van trucjes",
      "Werken onder tijdsdruk",
      "Eindexamenvoorbereiding",
    ],
  },
] as const;
