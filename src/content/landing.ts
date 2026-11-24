export type LandingContent = {
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  forWho: { title: string; items: string[] };
  topics: { title: string; items: string[] };
  how: { title: string; steps: { t: string; d: string }[] };
  local?: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
};

export const bijlesAlmere: LandingContent = {
  path: "/bijles-almere",
  title: "Bijles Almere | Persoonlijke bijlesdocent voor MAVO, HAVO & VWO",
  description:
    "Bijles in Almere van Joris Abma: wiskunde, natuurkunde, scheikunde en economie voor MAVO, HAVO en VWO. Aan huis in Almere of online. €30 per uur, geen abonnement.",
  h1: "Bijles in Almere van één vaste bijlesdocent",
  intro: [
    "Ik ben Joris Abma, bijlesdocent in Almere. Bij mij krijg je geen wisselende docenten en geen groepsklas: je hebt elke week hetzelfde vaste uur, met iemand die de stof, de methode en de toetsplanning van jouw school inmiddels kent.",
    "Ik geef bijles in wiskunde, natuurkunde, scheikunde en economie, plus huiswerkbegeleiding en examenvoorbereiding. Dat kan bij jou thuis in Almere of online, wat het beste past bij het weekritme van het gezin.",
  ],
  forWho: {
    title: "Voor wie is deze bijles bedoeld?",
    items: [
      "Leerlingen op MAVO, HAVO en VWO, van de brugklas tot het eindexamenjaar",
      "Leerlingen met een achterstand door ziekte, een schoolwissel of een lastig jaar",
      "Leerlingen die de stof wel snappen, maar vastlopen op toetsen en tijdsdruk",
      "Ouders die één vast aanspreekpunt willen in plaats van een bureau",
    ],
  },
  topics: {
    title: "Waar we mee aan de slag gaan",
    items: [
      "Wiskunde A, B en C",
      "Natuurkunde",
      "Scheikunde",
      "Economie en bedrijfseconomie",
      "Huiswerk plannen en leren leren",
      "Toetsweken en eindexamens",
    ],
  },
  how: {
    title: "Zo werkt bijles in Almere",
    steps: [
      {
        t: "Gratis kennismaking",
        d: "In ongeveer 15 minuten bespreken we het vak, het niveau en waar het misgaat. Daarna weet je of bijles zinvol is.",
      },
      {
        t: "We bespreken niveau en leerdoelen",
        d: "In de eerste les zoek ik op waar de basis begint te haperen. Vaak ligt dat een hoofdstuk of een schooljaar eerder.",
      },
      {
        t: "Wekelijkse les, thuis of online",
        d: "Uitleg, samen oefenen en daarna zelf oefenen met mij ernaast. Rond toetsweken plannen we extra momenten.",
      },
    ],
  },
  local:
    "Aan huis geef ik bijles in de regio Literatuurwijk en Muziekwijk in Almere. Woon je daarbuiten, dan is online bijles de oplossing — die geef ik in heel Nederland.",
  faq: [
    {
      q: "Wat kost bijles in Almere?",
      a: "Een les kost €30 per uur, zowel reguliere bijles als examenvoorbereiding. Er is geen abonnement en geen langdurige verplichting.",
    },
    {
      q: "Kom je aan huis in heel Almere?",
      a: "Nee, alleen als het dichtbij genoeg is: in de regio Literatuurwijk en Muziekwijk. Daarbuiten is online bijles een goed alternatief.",
    },
    {
      q: "Kan ik eerst vrijblijvend kennismaken?",
      a: "Ja. De kennismaking van ongeveer 15 minuten is gratis en verplicht je tot niets.",
    },
  ],
  ctaTitle: "Bijles nodig in Almere?",
  ctaText: "Stuur een kort bericht met het vak en het leerjaar, dan kijken we samen wat nodig is.",
};

export const wiskunde: LandingContent = {
  path: "/wiskunde-bijles-almere",
  title: "Wiskunde bijles Almere | Wiskunde A, B en C — MAVO, HAVO, VWO",
  description:
    "Wiskunde bijles in Almere en online. Wiskunde A, B en C voor MAVO, HAVO en VWO: algebra, formules, differentiëren en examentraining. €30 per uur, vrijblijvend kennismaken.",
  h1: "Wiskunde bijles in Almere en online",
  intro: [
    "Wiskunde is het vak waar de meeste leerlingen mij voor benaderen. Vrijwel altijd blijkt het probleem niet het hoofdstuk van deze week te zijn, maar iets wat een jaar eerder is blijven liggen: breuken, machten, herleiden of het oplossen van vergelijkingen.",
    "Daarom begin ik met een korte diagnose. Zodra die basis weer klopt, gaat de rest van de stof aanzienlijk sneller — en verdwijnt het gevoel dat wiskunde 'gewoon niet jouw ding' is.",
  ],
  forWho: {
    title: "Voor wie",
    items: [
      "Wiskunde A: rekenen met verbanden, statistiek en verhoudingen",
      "Wiskunde B: algebra, functies, differentiëren, integreren en goniometrie",
      "Wiskunde C: verbanden en statistiek voor het cultuur- en maatschappijprofiel",
      "MAVO, HAVO en VWO, alle leerjaren en eindexamenklassen",
    ],
  },
  topics: {
    title: "Onderwerpen waar we vaak aan werken",
    items: [
      "Herleiden en vergelijkingen oplossen",
      "Functies, grafieken en formules opstellen",
      "Differentiëren en integreren",
      "Goniometrie en meetkunde",
      "Statistiek en kansrekening",
      "Rekenmachine slim gebruiken bij examens",
    ],
  },
  how: {
    title: "Hoe een wiskundeles verloopt",
    steps: [
      { t: "Kort ophalen", d: "We kijken wat er van de vorige les en het huiswerk is blijven hangen." },
      {
        t: "Uitleg met de opgave erbij",
        d: "Ik leg uit aan de hand van de sommen uit jouw boek, niet uit een eigen methode.",
      },
      {
        t: "Zelf oefenen met mij ernaast",
        d: "Je maakt zelf opgaven, zodat we merken waar het denkstapje nog ontbreekt.",
      },
    ],
  },
  local:
    "Wiskunde bijles aan huis is mogelijk in de regio Literatuurwijk en Muziekwijk in Almere. Online werkt wiskunde prima met een digitaal whiteboard, waarop we samen schrijven en rekenen.",
  faq: [
    {
      q: "Geef je ook wiskunde B op VWO-niveau?",
      a: "Ja. Wiskunde B op VWO hoort bij de vakken die ik het meest begeleid, inclusief differentiëren, integreren en goniometrie.",
    },
    {
      q: "Mijn kind staat een 4 voor wiskunde. Is dat nog te repareren?",
      a: "Vaak wel. Bij eerdere leerlingen zijn cijfers verbeterd van ongeveer 4–5 naar 7–8, meestal doordat we eerst de basis van een eerder leerjaar hebben hersteld. Garanties geef ik niet, maar we beginnen altijd met een eerlijke inschatting.",
    },
    {
      q: "Kan wiskunde bijles online?",
      a: "Ja. Met een digitaal whiteboard schrijven we samen op hetzelfde scherm; in de praktijk werkt dat bijna net zo goed als aan tafel.",
    },
  ],
  ctaTitle: "Wiskunde weer begrijpelijk maken?",
  ctaText: "Vertel kort welk hoofdstuk of welk niveau vastloopt, dan plannen we een kennismaking.",
};

export const natuurkunde: LandingContent = {
  path: "/natuurkunde-bijles-almere",
  title: "Natuurkunde bijles Almere | HAVO & VWO, online en aan huis",
  description:
    "Natuurkunde bijles in Almere en online voor HAVO en VWO: mechanica, elektriciteit, energie en examentraining. Rustige uitleg, €30 per uur, vrijblijvende kennismaking.",
  h1: "Natuurkunde bijles in Almere en online",
  intro: [
    "Bij natuurkunde gaat het bij veel leerlingen niet mis bij het rekenen, maar bij het lezen van de vraag. Er staat een verhaal, en het is de kunst om daaruit te halen welke grootheden je hebt en welke je zoekt.",
    "In mijn lessen oefenen we die vertaalslag expliciet: eerst een schets en de gegevens, dan pas de formule. Dat scheelt bij toetsen vaak meer punten dan extra formules uit je hoofd leren.",
  ],
  forWho: {
    title: "Voor wie",
    items: [
      "HAVO en VWO, onderbouw en bovenbouw",
      "Leerlingen die de theorie snappen maar vastlopen op toetsvragen",
      "Eindexamenkandidaten die oude examens willen oefenen",
      "Leerlingen die natuurkunde combineren met wiskunde B",
    ],
  },
  topics: {
    title: "Onderwerpen",
    items: [
      "Krachten, bewegingen en mechanica",
      "Energie, arbeid en vermogen",
      "Elektriciteit en schakelingen",
      "Golven, geluid en licht",
      "Werken met BINAS en significantie",
      "Formules omschrijven en eenheden controleren",
    ],
  },
  how: {
    title: "Zo pakken we natuurkunde aan",
    steps: [
      { t: "De vraag ontleden", d: "Wat is gegeven, wat wordt gevraagd, welke situatie is dit?" },
      { t: "Van situatie naar formule", d: "Pas daarna kiezen we de formule, met de juiste eenheden." },
      {
        t: "Oefenen met echte toetsvragen",
        d: "We gebruiken opgaven uit je boek en oude examens, zodat het oefenen realistisch blijft.",
      },
    ],
  },
  local:
    "Natuurkunde bijles aan huis geef ik in de regio Literatuurwijk en Muziekwijk in Almere; online is beschikbaar in heel Nederland.",
  faq: [
    {
      q: "Geef je natuurkunde op VWO-niveau?",
      a: "Ja, HAVO en VWO, van de onderbouw tot en met het eindexamen.",
    },
    {
      q: "Kunnen we natuurkunde en wiskunde combineren?",
      a: "Ja. Die vakken lopen sterk in elkaar over; we besteden de tijd binnen een les aan het vak dat op dat moment het hardst nodig is.",
    },
    {
      q: "Helpt bijles ook vlak voor een toets?",
      a: "Zeker, al werkt een paar weken vooruit beter. Voor een toets richten we ons op de veelvoorkomende vraagtypen en op je eigen fouten.",
    },
  ],
  ctaTitle: "Natuurkunde weer onder controle?",
  ctaText: "Laat weten welk hoofdstuk vastloopt, dan kijken we samen wat de beste aanpak is.",
};

export const scheikunde: LandingContent = {
  path: "/scheikunde-bijles-almere",
  title: "Scheikunde bijles Almere | HAVO & VWO, rekenen en organische chemie",
  description:
    "Scheikunde bijles in Almere en online voor HAVO en VWO: molberekeningen, reactievergelijkingen, zuren en basen en organische chemie. €30 per uur, vrijblijvend kennismaken.",
  h1: "Scheikunde bijles in Almere en online",
  intro: [
    "Scheikunde is een vak dat zich opstapelt: wie molberekeningen niet stevig beheerst, loopt er later bij zuren en basen en bij evenwichten opnieuw tegenaan. Daarom werk ik bij scheikunde graag in vaste stappen.",
    "We oefenen tot het rekenen aan reacties automatisch gaat en besteden daarnaast aandacht aan het lezen van de tabellen — veel punten worden verloren op dingen die je gewoon kunt opzoeken.",
  ],
  forWho: {
    title: "Voor wie",
    items: [
      "HAVO en VWO, bovenbouw en eindexamenklassen",
      "Leerlingen die vastlopen op rekenen aan reacties",
      "Leerlingen die de theorie leren maar de opgaven niet rond krijgen",
      "Leerlingen die scheikunde nodig hebben voor een vervolgopleiding",
    ],
  },
  topics: {
    title: "Onderwerpen",
    items: [
      "Molberekeningen en concentraties",
      "Reactievergelijkingen kloppend maken",
      "Zuren, basen en pH",
      "Redoxreacties en evenwichten",
      "Organische chemie en reactiemechanismen",
      "Werken met BINAS-tabellen",
    ],
  },
  how: {
    title: "Zo werkt een scheikundeles",
    steps: [
      { t: "Basis eerst", d: "We controleren of het rekenen aan reacties echt zit voordat we verder gaan." },
      { t: "Structuur in de opgave", d: "Vaste stappen: gegevens, reactie, verhouding, antwoord met eenheid." },
      { t: "Herhalen tot het blijft zitten", d: "Korte herhaling van eerdere onderwerpen in elke les." },
    ],
  },
  local:
    "Scheikunde bijles aan huis in de regio Literatuurwijk en Muziekwijk in Almere, of online vanuit heel Nederland.",
  faq: [
    {
      q: "Vanaf welk leerjaar geef je scheikunde?",
      a: "Vanaf het moment dat scheikunde als apart vak begint, tot en met het eindexamenjaar op HAVO en VWO.",
    },
    {
      q: "Ik snap de theorie wel maar de opgaven niet. Kan dat?",
      a: "Dat komt heel vaak voor. We oefenen dan vooral met het omzetten van een opgave naar een aanpak, in vaste stappen.",
    },
    {
      q: "Hoeveel lessen heb ik nodig?",
      a: "Dat verschilt. Voor één toets zijn twee of drie lessen soms genoeg; om structureel bij te trekken werkt wekelijkse begeleiding beter.",
    },
  ],
  ctaTitle: "Scheikunde weer logisch maken?",
  ctaText: "Stuur kort door welk onderwerp lastig is, dan bespreken we de aanpak.",
};

export const economie: LandingContent = {
  path: "/economie-bijles-almere",
  title: "Economie bijles Almere | Economie & bedrijfseconomie, MAVO t/m VWO",
  description:
    "Economie bijles in Almere en online voor MAVO, HAVO en VWO. Micro, macro en bedrijfseconomie, uitgelegd door een afgestudeerde VU-student Bedrijfskunde (Economie). €30 per uur.",
  h1: "Economie bijles in Almere en online",
  intro: [
    "Economie is mijn eigen vakgebied: ik rondde in 2026 de bachelor Bedrijfskunde met hoofdrichting Economie af aan de Vrije Universiteit Amsterdam. Dat merk je vooral aan de voorbeelden — begrippen worden een stuk concreter als je ze aan de actualiteit kunt koppelen.",
    "Bij economie draait het examen vaak om het lezen van bronnen en het uitleggen van een oorzaak-gevolgredenering. Precies dat oefenen we, naast de berekeningen.",
  ],
  forWho: {
    title: "Voor wie",
    items: [
      "MAVO, HAVO en VWO, alle leerjaren",
      "Economie en bedrijfseconomie (M&O)",
      "Leerlingen die moeite hebben met begrippen uit elkaar houden",
      "Eindexamenkandidaten die bronvragen willen oefenen",
    ],
  },
  topics: {
    title: "Onderwerpen",
    items: [
      "Vraag, aanbod en marktwerking",
      "Inflatie, conjunctuur en overheidsbeleid",
      "Kosten, opbrengsten en break-evenanalyse",
      "Balans, resultatenrekening en liquiditeit",
      "Bronvragen en uitlegvragen",
      "Rekenopgaven met procenten en indexcijfers",
    ],
  },
  how: {
    title: "Zo pakken we economie aan",
    steps: [
      { t: "Begrippen scherp krijgen", d: "In je eigen woorden kunnen uitleggen is het doel, niet uit je hoofd leren." },
      { t: "Redeneringen oefenen", d: "Van oorzaak naar gevolg, in de zinsopbouw die het correctiemodel verwacht." },
      { t: "Rekenen en bronnen", d: "Berekeningen en het snel lezen van tabellen en grafieken." },
    ],
  },
  local:
    "Economie bijles aan huis in de regio Literatuurwijk en Muziekwijk in Almere, of online in heel Nederland.",
  faq: [
    {
      q: "Geef je ook bedrijfseconomie?",
      a: "Ja, inclusief onderwerpen als kostenberekeningen, balans en resultatenrekening.",
    },
    {
      q: "Waarom economie bij jou?",
      a: "Ik heb economie als hoofdrichting gestudeerd aan de VU Amsterdam, dus de theorie zit dicht bij mijn eigen studie en werkervaring met de stof.",
    },
    {
      q: "Kan economie ook online?",
      a: "Ja. Voor economie werkt online les uitstekend, omdat we bronnen en grafieken samen op het scherm kunnen bekijken.",
    },
  ],
  ctaTitle: "Economie beter begrijpen?",
  ctaText: "Laat weten waar je vastloopt: begrippen, berekeningen of het examen.",
};

export const examenhulp: LandingContent = {
  path: "/examenhulp-almere",
  title: "Eindexamenhulp Almere | Examentraining MAVO, HAVO & VWO",
  description:
    "Eindexamenhulp en examentraining in Almere en online voor MAVO, HAVO en VWO. Oude examens, gerichte herhaling en examenstrategie. €30 per uur, geen abonnement.",
  h1: "Eindexamenhulp voor MAVO, HAVO en VWO",
  intro: [
    "In het examenjaar is de stof zelden het grootste probleem. Het gaat om overzicht: welke onderwerpen komen echt terug, hoe verdeel je je tijd, en hoe voorkom je dat je op bekende valkuilen punten weggeeft.",
    "Examenvoorbereiding werkt daarom anders dan gewone bijles. We werken met oude examens, brengen jouw foutpatronen in kaart en herhalen gericht wat het meeste oplevert.",
  ],
  forWho: {
    title: "Voor wie",
    items: [
      "Eindexamenkandidaten MAVO, HAVO en VWO",
      "Leerlingen met een onvoldoende die het examen moeten opvangen",
      "Leerlingen die willen zorgen dat hun cijfer stabiel blijft",
      "Herkansers en leerlingen die het tweede tijdvak voorbereiden",
    ],
  },
  topics: {
    title: "Wat we doen",
    items: [
      "Oefenen met echte examenvragen",
      "Aanpak van oude examens en correctiemodellen",
      "Onderwerpen gericht herhalen op basis van fouten",
      "Leerstrategieën en een realistische planning",
      "Tijdsdruk oefenen onder examenomstandigheden",
      "Rust houden in de week van het examen",
    ],
  },
  how: {
    title: "Zo verloopt een examentraject",
    steps: [
      { t: "Nulmeting", d: "We maken een oud examen om te zien welke onderwerpen punten kosten." },
      { t: "Gericht herhalen", d: "Alleen de onderwerpen die het verschil maken, niet het hele boek." },
      { t: "Examens onder tijdsdruk", d: "Volledige examens met nabespreking van elke fout." },
    ],
  },
  local:
    "Examentraining geef ik online in heel Nederland en aan huis in de regio Literatuurwijk en Muziekwijk in Almere. In de weken voor het examen is er ruimte voor extra sessies.",
  faq: [
    {
      q: "Wanneer moet ik met examenhulp beginnen?",
      a: "Hoe eerder hoe rustiger, maar vanaf een week of acht voor het examen is er nog goed gericht te werken.",
    },
    {
      q: "Wat kost examenvoorbereiding?",
      a: "Examenvoorbereiding en gevorderde bijles kosten €30 per uur. Er is geen abonnement.",
    },
    {
      q: "Voor welke vakken geef je examenhulp?",
      a: "Wiskunde, natuurkunde, scheikunde en economie, op MAVO-, HAVO- en VWO-niveau.",
    },
  ],
  ctaTitle: "Bespreek mijn examenvoorbereiding",
  ctaText: "Laat weten welk vak, welk niveau en wanneer je examen doet, dan maken we een plan.",
};

export const online: LandingContent = {
  path: "/online-bijles",
  title: "Online bijles Nederland | Wiskunde, natuurkunde, scheikunde, economie",
  description:
    "Online bijles in heel Nederland voor MAVO, HAVO en VWO: wiskunde, natuurkunde, scheikunde en economie. Video plus digitaal whiteboard, €30 per uur, vrijblijvend kennismaken.",
  h1: "Online bijles in heel Nederland",
  intro: [
    "Niet iedereen woont in Almere, en niet elk gezin heeft ruimte om er nog een reis bij te plannen. Online bijles lost dat op: dezelfde persoonlijke begeleiding, zonder reistijd en makkelijker in te passen op een doordeweekse avond.",
    "We werken met videobellen en een digitaal whiteboard, zodat we samen op hetzelfde scherm schrijven en rekenen. Na afloop heb je de aantekeningen van de les gewoon digitaal terug.",
  ],
  forWho: {
    title: "Voor wie werkt online bijles goed?",
    items: [
      "Leerlingen buiten Almere, waar ook in Nederland",
      "Gezinnen met een volle week en weinig reistijd",
      "Leerlingen die zelfstandig genoeg zijn om een uur te focussen",
      "Korte extra sessies vlak voor een toets of examen",
    ],
  },
  topics: {
    title: "Vakken en niveaus",
    items: [
      "Wiskunde A, B en C",
      "Natuurkunde",
      "Scheikunde",
      "Economie en bedrijfseconomie",
      "MAVO, HAVO en VWO",
      "Huiswerkbegeleiding en examentraining",
    ],
  },
  how: {
    title: "Hoe een online les eruitziet",
    steps: [
      { t: "Je krijgt een link", d: "Geen account of installatie nodig; je klikt op de link en we beginnen." },
      { t: "Samen op één whiteboard", d: "We schrijven allebei op hetzelfde scherm, met jouw boek ernaast." },
      { t: "Aantekeningen achteraf", d: "Je krijgt de uitwerkingen van de les digitaal terug om te herhalen." },
    ],
  },
  faq: [
    {
      q: "Werkt online bijles net zo goed als aan tafel?",
      a: "Voor de meeste leerlingen wel. Met een digitaal whiteboard zie ik precies wat je opschrijft, en dat is waar het bij exacte vakken om draait.",
    },
    {
      q: "Wat heb ik nodig?",
      a: "Een laptop of tablet met camera, een rustige plek en je schoolboek. Een los tekentablet is handig, maar niet verplicht.",
    },
    {
      q: "Wat kost online bijles?",
      a: "€30 per uur, zowel voor reguliere bijles als voor examenvoorbereiding. Geen abonnement.",
    },
  ],
  ctaTitle: "Online bijles proberen?",
  ctaText: "We starten met een gratis kennismaking, zodat je rustig kunt zien of het bevalt.",
};
