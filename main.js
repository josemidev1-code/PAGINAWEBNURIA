(() => {
  'use strict';

  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const EMAIL = 'nuriacerdam@gmail.com';
  const WHATSAPP = '34644643494';

  /* ---------------------------------------------------------
     Idiomas. El castellano se lee del propio HTML; aquí solo
     va el valenciano y los textos que no están en la página.
     --------------------------------------------------------- */
  const extra = {
    es: {
      title: 'Nuria Cerdá · Abogada de herencias en Xàtiva',
      'cal.prev': 'Mes anterior',
      'cal.next': 'Mes siguiente',
      'cal.holiday': 'festivo',
      'mail.consult': 'Solicitud de consulta',
      'mail.booking': 'Solicitud de cita',
      'mail.hello': 'Hola Nuria, me gustaría pedir cita.',
      'mail.when': 'Día y hora preferidos',
      'mail.topic': 'Asunto',
      'mail.name': 'Nombre',
      'mail.phone': 'Teléfono',
      'ok.wa': 'Se ha abierto WhatsApp con la solicitud ya preparada. Solo tienes que pulsar «Enviar». Te responderé en un máximo de 24 horas.',
      "dl.will.t": "Certificado de últimas voluntades",
      "dl.will.d": "Dice si hay testamento y ante qué notario se firmó.",
      "dl.ext.t": "Último día para pedir la prórroga",
      "dl.ext.d": "Alarga seis meses más el plazo del impuesto, con intereses.",
      "dl.isd.t": "Impuesto de sucesiones y plusvalía",
      "dl.isd.d": "Fin del plazo general de seis meses para presentarlos.",
      "dl.isdx.t": "Plazo con prórroga",
      "dl.isdx.d": "Solo si la pediste a tiempo.",
      "st.from": "Podrás pedirlo desde este día",
      "st.ready": "Ya puedes pedirlo",
      "st.left": "Quedan {n} días",
      "st.left1": "Queda 1 día",
      "st.today": "Vence hoy",
      "st.over": "Vencido",
      "st.closed": "Ya no se puede pedir",
      "sum.ok": "Te quedan <strong>{n} días</strong> para presentar el impuesto.",
      "sum.ok1": "Te queda <strong>1 día</strong> para presentar el impuesto.",
      "sum.today": "<strong>Hoy</strong> es el último día para presentar el impuesto.",
      "sum.ext": " Aún estás a tiempo de pedir la prórroga.",
      "sum.ext2": "El plazo general ha pasado. Si pediste la prórroga, tienes hasta el <strong>{d}</strong>. Si no, aún puedes presentarlo con recargo: cuanto antes, menor.",
      "sum.late": "Los plazos han vencido, pero todavía puedes presentarlo con recargo. Cuanto antes se haga, menor será.",
      "sum.future": "La fecha no puede ser posterior a hoy.",
      "docs.count": "{n} de {total} listos"
    },
    va: {
      'ok.wa': 'S’ha obert WhatsApp amb la sol·licitud ja preparada. Només has de prémer «Enviar». Et respondré en un màxim de 24 hores.'
    }
  };
  const VA = {
      "a1": "Tens sis mesos des de la defunció. Si ho demanes en els cinc primers mesos, es pot allargar sis més. Passat el termini, Hisenda cobra recàrrecs.",
      "a10": "Ningú està obligat a compartir una herència per sempre: qualsevol hereu pot demanar que es repartisca. Abans d’arribar a judici busque un acord: vendre, comprar-li la seua part o pactar un lloguer.",
      "a2": "Pots acceptar-la «a benefici d’inventari»: així els deutes només es paguen amb el que deixa l’herència, mai amb els teus diners. O pots renunciar-hi. Ho estudiem abans de decidir.",
      "a3": "La llei diu qui hereta (fills, pares, cònjuge…) i es fa una declaració d’hereus davant notari. Jo m’ocupe de tot.",
      "a4": "Demanant un certificat al Registre d’Últimes Voluntats, a partir de 15 dies hàbils des de la defunció.",
      "a5": "Sí. Quasi tot es pot fer a distància, per videotrucada i amb un poder notarial.",
      "a6": "Depén de cada herència. En la primera consulta t’explique els meus honoraris amb claredat i, abans de començar, et done el pressupost per escrit.",
      "a7": "El notari és imparcial: dona fe del que se signa, però no defén ningú. Jo revise que el repartiment, els valors i els impostos estiguen bé, i mire pels teus interessos.",
      "a8": "A la Comunitat Valenciana, si heretes del teu cònjuge, dels teus pares o dels teus fills, hui tens una rebaixa del 99 % en l’impost. Això sí, cal presentar-lo bé i a temps perquè s’aplique. Te’l calcule abans de signar.",
      "a9": "Normalment sí. La plusvàlua municipal es paga a l’Ajuntament, en un termini de sis mesos que es pot allargar. Revise si et toca i quant.",
      "about.badge": "Núm. de col·legiada",
      "about.eyebrow": "Sobre mi",
      "about.p1": "Soc advocada a Xàtiva des de 2020 i em dedique a les herències perquè m’agrada el tracte amb les famílies. Darrere de cada herència hi ha persones que acaben de perdre algú, i això mereix calma i cura.",
      "about.p2": "Porte cada cas jo mateixa, de principi a fi. Al despatx treballe amb un assessor fiscal i, si el teu cas ho necessita, amb companys d’altres especialitats. Així no has d’anar d’un lloc a un altre.",
      "about.p3": "Et parle de tu, sense tecnicismes, i sempre sabràs què ve després.",
      "about.title": "Hola, soc <em>Nuria Cerdá</em>",
      "bar.call": "Telefonar",
      "book.lead": "Tria el dia i l’hora que millor et vagen i et confirme la cita en menys de 24 hores. El més difícil és fer el primer pas; de la resta m’encarregue jo.",
      "book.note": "Horari orientatiu, subjecte a confirmació.",
      "book.send": "Sol·licitar cita",
      "book.title": "Parlem del <em>teu cas</em>",
      "book.wa": "Enviar per WhatsApp",
      "book.when": "Tria dia i hora",
      "book.you": "Les teues dades",
      "card.btn": "Consultar",
      "ck1": "<strong>Parles sempre amb mi.</strong> Sense intermediaris ni canvis d’advocat a mig camí.",
      "ck2": "<strong>Sabràs el preu abans de començar.</strong> Et done el pressupost per escrit, sense sorpreses al final.",
      "ck3": "<strong>Sempre sabràs com va el teu.</strong> T’avise de cada avanç per telèfon, correu o WhatsApp.",
      "ck4": "<strong>Primer, l’acord.</strong> Busque solucions que eviten judicis i cuiden la família.",
      "ck5": "<strong>El que em contes, queda entre nosaltres.</strong> M’obliga el secret professional.",
      "ck6": "<strong>Et responc en 24 hores com a màxim.</strong> La teua telefonada no es queda en l’aire.",
      "cta.book": "Demanar cita",
      "cta.case": "Conta’m el teu cas",
      "cta.consult": "Demanar la meua primera consulta",
      "cta.talk": "Conta’m el teu cas",
      "err.email": "Revisa el correu electrònic.",
      "err.name": "Indica el teu nom.",
      "err.phone": "Indica un telèfon de contacte.",
      "err.privacy": "Has d’acceptar la política de privacitat.",
      "err.when": "Tria un dia i una hora.",
      "f.details": "Vols contar-me alguna cosa del teu cas? (opcional)",
      "f.name": "Nom",
      "f.phone": "Telèfon",
      "f.privacy": "He llegit i accepte la",
      "f.privacyLink": "política de privacitat",
      "f.topic": "Assumpte",
      "f1.d": "Col·legi de l’Advocacia de València",
      "f1.t": "Col·legiada núm. 19255",
      "f2.d": "Grau en Dret i Màster en Advocacia",
      "f2.t": "Advocada des de 2020",
      "f3.d": "M’obliga el secret professional",
      "f3.t": "Tot queda entre tu i jo",
      "faq.eyebrow": "Preguntes freqüents",
      "faq.note": "Respostes curtes perquè arribes amb les idees clares. El teu cas concret el veiem junts.",
      "faq.title": "Els dubtes que <em>més em plantegen</em>",
      "fig1": "exercint l’advocacia des de",
      "fig2": "de primera consulta, cara a cara",
      "fig3": "com a màxim per a respondre’t",
      "fig4": "de dilluns a divendres, amb cita prèvia",
      "footer.legal": "Avís legal",
      "footer.privacy": "Privacitat",
      "footer.role": "Advocada · Col·legiada núm. 19255 · ICAV",
      "hero.eyebrow": "Herències i successions · Xàtiva",
      "hero.lead": "<strong>Hola, soc Nuria.</strong> Si estàs ací, potser acabes de perdre algú o vols deixar-ho tot en ordre per als teus. Pren-te el teu temps: t’escolte, t’explique cada pas amb paraules senzilles i m’ocupe dels papers, els terminis i els impostos.",
      "hero.note": "«El teu cas no passa de mà en mà. El porte jo.»",
      "hero.t1": "La teua família,",
      "hero.t2": "en bones mans.",
      "m1c": "Una hora al despatx, sense presses. Em contes què ha passat, mire els papers que tingues i t’explique les teues opcions amb paraules senzilles.",
      "m1t": "Ens coneixem",
      "m2c": "Abans de començar et done per escrit què inclou el meu treball i quant costa. Ho penses amb calma.",
      "m2t": "Pressupost tancat",
      "m3c": "Notaria, impostos i Registre de la Propietat corren del meu compte. Si no hi ha conflicte, sol quedar resolt en uns tres mesos.",
      "m3t": "Jo m’encarregue",
      "m4c": "Et mantinc al dia fins que tot queda al teu nom i ben inscrit.",
      "m4t": "Tot en ordre",
      "menu": "Menú",
      "method.lead": "Saber el que ve dona tranquil·litat. Este és el camí que farem junts.",
      "method.title": "Què passarà, <em>pas a pas</em>",
      "nav.about": "Sobre mi",
      "nav.faq": "Preguntes",
      "nav.method": "Mètode",
      "nav.tools": "Terminis",
      "cal.holiday": "festiu",
      "nav.services": "Serveis",
      "o.other": "Altre assumpte",
      "office.p": "El que pots esperar de mi, sense lletra menuda.",
      "office.title": "El meu compromís <em>amb tu</em>",
      "q1": "Quin termini hi ha per a pagar l’impost de successions?",
      "q10": "El meu germà viu a la casa heretada i no vol vendre.",
      "q2": "I si l’herència té deutes?",
      "q3": "Què passa si no hi ha testament?",
      "q4": "Com sé si hi ha testament?",
      "q5": "Atens hereus que viuen fora?",
      "q6": "Quant em costarà?",
      "q7": "Si ja anem al notari, necessite advocada?",
      "q8": "Quant pagaré d’impost de successions?",
      "q9": "Cal pagar plusvàlua en heretar una casa?",
      "role": "Advocada · Xàtiva",
      "s1.d": "Veiem qui són els hereus, què hi ha en l’herència i com es reparteix. Jo m’encarregue de tots els tràmits.",
      "s1.t": "Herències i successions",
      "s2.d": "Deixa decidit com vols repartir el que és teu i estalvia a la teua família dubtes i discussions el dia de demà.",
      "s2.t": "Testaments",
      "s3.d": "Primer, parlar i buscar un acord. Si no n’hi ha, defenc la teua part davant del jutge.",
      "s3.t": "Conflictes entre hereus",
      "s4.d": "Et dic quant pagaràs abans de signar, aplique les rebaixes de la Comunitat Valenciana i el presente en termini.",
      "s4.t": "Impost de successions",
      "s5.d": "Si algun hereu viu fora o hi ha béns en un altre país, ho coordinem tot perquè viatges el menys possible.",
      "s5.t": "Herències internacionals",
      "s6.d": "Posem al teu nom, venem o repartim la casa o el terreny heretat, amb tot en regla des del principi.",
      "s6.t": "Gestió i compravenda d’immobles",
      "services.eyebrow": "En què t’ajude",
      "services.intro": "De la primera conversa a l’última signatura. Sense anar de despatx en despatx ni contar la teua història dues vegades.",
      "services.title": "Una sola advocada per a <em>tota l’herència</em>",
      "sit.eyebrow": "T’entenc",
      "sit.lead": "Són frases que escolte cada setmana al despatx. Totes tenen eixida, i no has de buscar-la sense ajuda.",
      "sit.title": "Potser ara mateix <em>sents això</em>",
      "sit1": "«Ha mort un familiar i no sé ni per on començar.»",
      "sit1a": "És el més normal del món. En la nostra primera reunió et done una llista clara del que cal fer, i des d’eixe dia el pes el porte jo.",
      "sit2": "«Els meus germans i jo no ens posem d’acord.»",
      "sit2a": "Primer intente que arribeu a un acord, amb calma i discreció, perquè la família continua ací després de l’herència. Si no és possible, defenc el que et correspon.",
      "sit3": "«Em fa por heretar deutes.»",
      "sit3a": "Abans d’acceptar res mirem junts què hi ha, béns i deutes. Pots acceptar sense arriscar els teus diners, o renunciar-hi. Mai no signaràs a cegues.",
      "sit4": "«No sé quant hauré de pagar a Hisenda.»",
      "sit4a": "Et calcule l’impost de successions i la plusvàlua abans de signar, amb les rebaixes valencianes que et corresponguen. Sabràs la xifra abans de decidir.",
      "sit5": "«Volem vendre la casa del poble, però continua a nom dels meus pares.»",
      "sit5a": "M’ocupe de l’herència, de posar-la al vostre nom en el Registre i d’acompanyar-vos en la venda, perquè res no es quede parat.",
      "sit6": "«Visc fora i no puc vindre a Xàtiva.»",
      "sit6a": "Ho fem a distància, per videotrucada i amb un poder notarial, i et conte cada pas com si estigueres ací.",
      "skip": "Anar al contingut",
      "trust.edu": "Formació",
      "trust.eduv": "Grau en Dret · Màster en Advocacia",
      "trust.exp": "Experiència",
      "trust.expv": "Exercint com a advocada des de 2020",
      "trust.team": "Equip",
      "trust.teamv": "Assessor fiscal al mateix despatx i advocats d’altres especialitats quan el cas ho requereix",
      "hero.lead2": "Porte cada herència jo mateixa, de la primera telefonada a l’última signatura.",
      "f4.t": "Assessor fiscal al despatx",
      "f4.d": "I altres companys si el teu cas ho necessita",
      "ph.photo": "Ací anirà la foto de Nuria",
      "hp.role": "Advocada d’herències i successions",
      "title": "Nuria Cerdá · Advocada d’herències a Xàtiva",
      "cal.prev": "Mes anterior",
      "cal.next": "Mes següent",
      "mail.consult": "Sol·licitud de consulta",
      "mail.booking": "Sol·licitud de cita",
      "mail.hello": "Hola Nuria, m’agradaria demanar cita.",
      "mail.when": "Dia i hora preferits",
      "mail.topic": "Assumpte",
      "mail.name": "Nom",
      "mail.phone": "Telèfon",
      "method.eyebrow": "Pas a pas",
      "nav.contact": "Contacte",
      "book.hours": "De dilluns a divendres, de 9 a 18 h · amb cita prèvia",
      "book.parking": "Aparcament públic a la plaça de la Bassa.",
      "loc.title": "On <em>em trobaràs</em>",
      "loc.lead": "T’espere al meu despatx de Xàtiva. Vine amb cita prèvia i ho parlem amb calma, asseguts i sense presses.",
      "loc.addr": "Adreça",
      "loc.hours": "Horari",
      "loc.park": "Aparcar",
      "loc.route": "Com arribar",
      "loc.map": "Veure el mapa de Google",
      "loc.mapNote": "En prémer es connecta amb Google Maps.",
      "ph.facade": "Ací anirà la foto del despatx",
      "ok.title": "Gràcies pel teu missatge",
      "ok.mail": "S’ha obert el teu correu amb la sol·licitud ja preparada. Només has de prémer «Enviar». Et respondré en un màxim de 24 hores.",
      "ok.close": "Tancar",
      "ph.photo2": "Ací anirà una altra foto de Nuria",
      "about.sign": "Advocada · Col·legi de l’Advocacia de València",
      "hero.role": "Advocada",
      "hero.c3": "Et responc en 24 h",
      "tools.title": "Dues ajudes per a <em>començar amb calma</em>",
      "tools.lead": "Abans de telefonar-me, pots veure els teus terminis i reunir els papers. Sense compromís i sense donar-me les teues dades.",
      "calc.t": "Fins quan tinc?",
      "calc.d": "Posa la data de la defunció i et dic quins terminis tens per a l’impost de successions i els primers tràmits.",
      "calc.label": "Data de la defunció",
      "calc.empty": "Els teus terminis apareixeran ací.",
      "calc.note": "Càlcul orientatiu. Si l’últim dia cau en cap de setmana o festiu, el termini passa al següent dia hàbil. El teu cas concret el revisem en la consulta.",
      "calc.cta": "Vull que ho revises tu",
      "docs.t": "Què portar a la primera cita",
      "docs.d": "Marca el que ja tens. La llista es queda guardada en aquest dispositiu i la pots imprimir.",
      "docs.1": "El teu DNI i, si els tens, els dels altres hereus",
      "docs.2": "Certificat de defunció",
      "docs.2h": "L’expedeix el Registre Civil i és gratuït.",
      "docs.3": "Certificat d’últimes voluntats",
      "docs.3h": "Si encara no el tens, el demane jo.",
      "docs.4": "Còpia del testament, si n’hi ha",
      "docs.5": "Llibre de família",
      "docs.6": "Escriptures de cases i terrenys",
      "docs.6h": "Si no les trobes, n’hi ha prou amb el rebut de l’IBI.",
      "docs.7": "Saldos dels comptes bancaris",
      "docs.7h": "Te’ls dona el banc, a la data de la defunció.",
      "docs.8": "Assegurances de vida, plans de pensions i vehicles",
      "docs.9": "Deutes pendents: préstecs, hipoteca o targetes",
      "docs.relax": "<strong>Et falta alguna cosa?</strong> No passa res. Porta el que tingues i la resta la demane jo.",
      "docs.print": "Imprimir la llista",
      "dl.will.t": "Certificat d’últimes voluntats",
      "dl.will.d": "Diu si hi ha testament i davant de quin notari es va signar.",
      "dl.ext.t": "Últim dia per a demanar la pròrroga",
      "dl.ext.d": "Allarga sis mesos més el termini de l’impost, amb interessos.",
      "dl.isd.t": "Impost de successions i plusvàlua",
      "dl.isd.d": "Fi del termini general de sis mesos per a presentar-los.",
      "dl.isdx.t": "Termini amb pròrroga",
      "dl.isdx.d": "Només si la vas demanar a temps.",
      "st.from": "El podràs demanar des d’aquest dia",
      "st.ready": "Ja el pots demanar",
      "st.left": "Queden {n} dies",
      "st.left1": "Queda 1 dia",
      "st.today": "Venç hui",
      "st.over": "Vençut",
      "st.closed": "Ja no es pot demanar",
      "sum.ok": "Et queden <strong>{n} dies</strong> per a presentar l’impost.",
      "sum.ok1": "Et queda <strong>1 dia</strong> per a presentar l’impost.",
      "sum.today": "<strong>Hui</strong> és l’últim dia per a presentar l’impost.",
      "sum.ext": " Encara estàs a temps de demanar la pròrroga.",
      "sum.ext2": "El termini general ha passat. Si vas demanar la pròrroga, tens fins al <strong>{d}</strong>. Si no, encara pots presentar-lo amb recàrrec: com més prompte, menor.",
      "sum.late": "Els terminis han vençut, però encara pots presentar-lo amb recàrrec. Com més prompte es faça, menor serà.",
      "sum.future": "La data no pot ser posterior a hui.",
      "docs.count": "{n} de {total} preparats"
  };
  const EN = {
      "skip": "Skip to content",
      "role": "Lawyer · Xàtiva",
      "nav.services": "Services",
      "nav.about": "About me",
      "nav.method": "How it works",
      "nav.tools": "Deadlines",
      "cal.holiday": "public holiday",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "cta.book": "Book a meeting",
      "menu": "Menu",
      "hero.eyebrow": "Inheritance and succession · Xàtiva",
      "hero.t1": "Your family,",
      "hero.t2": "in good hands.",
      "hero.lead": "<strong>Hello, I’m Nuria.</strong> If you’re here, perhaps you have just lost someone, or you want to leave everything in order for your loved ones. Take your time: I listen, I explain every step in plain words, and I take care of the paperwork, deadlines and taxes.",
      "hero.lead2": "I handle every inheritance myself, from the first call to the last signature.",
      "cta.talk": "Tell me about your case",
      "ph.photo": "Nuria’s photo will go here",
      "ph.photo2": "Another photo of Nuria will go here",
      "hero.note": "“Your case isn’t passed from hand to hand. I handle it myself.”",
      "hp.role": "Inheritance and succession lawyer",
      "f1.t": "Bar number 19255",
      "f1.d": "Valencia Bar Association",
      "f2.t": "Practising since 2020",
      "f2.d": "Law degree and Master’s in Legal Practice",
      "f3.t": "Everything stays between us",
      "f3.d": "Bound by professional secrecy",
      "f4.t": "Tax adviser in the office",
      "f4.d": "And other colleagues if your case needs them",
      "about.badge": "Bar number",
      "about.title": "Hello, I’m <em>Nuria Cerdá</em>",
      "about.p1": "I have been a lawyer in Xàtiva since 2020, and I work in inheritance because I enjoy working with families. Behind every inheritance there are people who have just lost someone, and that deserves calm and care.",
      "about.p2": "I handle every case myself, from start to finish. In the office I work alongside a tax adviser and, when your case needs it, with colleagues from other specialities. So you don’t have to go from one place to another.",
      "about.p3": "I speak to you plainly, without jargon, and you will always know what comes next.",
      "about.sign": "Lawyer · Valencia Bar Association",
      "sit.title": "Perhaps right now <em>you feel this</em>",
      "sit.lead": "These are things I hear every week in the office. All of them have a way out, and you don’t have to find it alone.",
      "sit1": "“A relative has passed away and I don’t even know where to start.”",
      "sit1a": "That’s completely normal. At our first meeting I give you a clear list of what needs doing, and from that day on I carry the weight.",
      "sit2": "“My siblings and I can’t agree.”",
      "sit2a": "First I try to help you reach an agreement, calmly and discreetly, because the family is still there after the inheritance. If that isn’t possible, I defend what is yours.",
      "sit3": "“I’m afraid of inheriting debts.”",
      "sit3a": "Before accepting anything we look together at what there is, assets and debts. You can accept without risking your own money, or renounce. You will never sign blindly.",
      "sit4": "“I don’t know how much I’ll have to pay the tax office.”",
      "sit4a": "I calculate inheritance tax and the municipal capital gains tax before you sign, with the Valencian reductions you are entitled to. You will know the figure before you decide.",
      "sit5": "“We want to sell the family house in the village, but it’s still in our parents’ names.”",
      "sit5a": "I deal with the inheritance, register the property in your names and help you through the sale, so nothing gets stuck.",
      "sit6": "“I live abroad and can’t come to Xàtiva.”",
      "sit6a": "We do it remotely, by video call and with a notarial power of attorney, and I keep you posted on every step as if you were here.",
      "services.title": "One lawyer for <em>the whole inheritance</em>",
      "services.intro": "From the first conversation to the last signature. No going from office to office, no telling your story twice.",
      "s1.t": "Inheritance and succession",
      "s1.d": "We work out who the heirs are, what the estate includes and how it is shared. I take care of all the formalities.",
      "card.btn": "Ask about this",
      "s2.t": "Wills",
      "s2.d": "Decide now how you want to share what is yours, and spare your family doubts and arguments in the future.",
      "s3.t": "Disputes between heirs",
      "s3.d": "First, talk and look for an agreement. If there isn’t one, I defend your share in court.",
      "s4.t": "Inheritance tax",
      "s4.d": "I tell you how much you will pay before you sign, apply the Valencian reductions and file it on time.",
      "s5.t": "International inheritance",
      "s5.d": "If an heir lives abroad or there are assets in another country, we coordinate everything so you travel as little as possible.",
      "s6.t": "Property management and sales",
      "s6.d": "We put the inherited house or land in your name, sell it or share it, with everything in order from the start.",
      "office.title": "My commitment <em>to you</em>",
      "office.p": "What you can expect from me, with no small print.",
      "ck1": "<strong>You always speak to me.</strong> No intermediaries, no change of lawyer halfway through.",
      "ck2": "<strong>You’ll know the price before we start.</strong> I give you a written quote, with no surprises at the end.",
      "ck3": "<strong>You’ll always know how things are going.</strong> I let you know of every step by phone, email or WhatsApp.",
      "ck4": "<strong>Agreement first.</strong> I look for solutions that avoid court and take care of the family.",
      "ck5": "<strong>What you tell me stays between us.</strong> I am bound by professional secrecy.",
      "ck6": "<strong>I reply within 24 hours at most.</strong> Your call won’t be left hanging.",
      "method.title": "What will happen, <em>step by step</em>",
      "method.lead": "Knowing what comes next brings peace of mind. This is the path we will take together.",
      "cta.consult": "Book my first meeting",
      "m1t": "We meet",
      "m1c": "One unhurried hour at the office. You tell me what has happened, I look at whatever papers you have and explain your options in plain words.",
      "m2t": "Fixed quote",
      "m2c": "Before we begin, I give you in writing what my work includes and what it costs. You think it over calmly.",
      "m3t": "I take care of it",
      "m3c": "Notary, taxes and the Land Registry are on me. If there is no dispute, it is usually settled in about three months.",
      "m4t": "All in order",
      "m4c": "I keep you updated until everything is in your name and properly registered.",
      "faq.title": "The questions <em>I’m asked most</em>",
      "faq.note": "Short answers so you arrive with a clear idea. We look at your own case together.",
      "cta.case": "Tell me about your case",
      "q1": "What is the deadline to pay inheritance tax?",
      "a1": "You have six months from the death. If you ask within the first five months, it can be extended by another six. After the deadline, the tax office charges surcharges.",
      "q8": "How much inheritance tax will I pay?",
      "a8": "In the Valencian Community, if you inherit from your spouse, your parents or your children, you currently get a 99% reduction on the tax. But it has to be filed correctly and on time for it to apply. I calculate it before you sign.",
      "q2": "What if the inheritance has debts?",
      "a2": "You can accept it “with benefit of inventory”: debts are then paid only with what the estate leaves, never with your own money. Or you can renounce it. We look at it before deciding.",
      "q3": "What happens if there is no will?",
      "a3": "The law sets out who inherits (children, parents, spouse…) and a declaration of heirs is made before a notary. I take care of everything.",
      "q4": "How do I find out if there is a will?",
      "a4": "By requesting a certificate from the Registry of Last Wills, from 15 working days after the death.",
      "q7": "If we are already going to a notary, do I need a lawyer?",
      "a7": "The notary is impartial: they certify what is signed but don’t defend anyone. I check that the division, the valuations and the taxes are right, and I look after your interests.",
      "q9": "Is there a capital gains tax when you inherit a house?",
      "a9": "Usually, yes. The municipal capital gains tax is paid to the town hall, within six months that can be extended. I check whether it applies to you and how much.",
      "q10": "My brother lives in the inherited house and won’t sell.",
      "a10": "No one is obliged to share an inheritance forever: any heir can ask for it to be divided. Before going to court I look for an agreement: selling, buying out his share or agreeing a rent.",
      "q5": "Do you help heirs who live abroad?",
      "a5": "Yes. Almost everything can be done remotely, by video call and with a notarial power of attorney.",
      "q6": "How much will it cost?",
      "a6": "It depends on each inheritance. At the first meeting I explain my fees clearly and, before we start, I give you a written quote.",
      "book.title": "Let’s talk about <em>your case</em>",
      "book.lead": "Choose the day and time that suit you best and I will confirm the meeting within 24 hours. The hardest part is taking the first step; I’ll take care of the rest.",
      "book.hours": "Monday to Friday, 9 am to 6 pm · by appointment",
      "book.parking": "Public parking in Plaça de la Bassa.",
      "loc.title": "Where <em>to find me</em>",
      "loc.lead": "I’ll be waiting for you at my office in Xàtiva. Come by appointment and we’ll talk it through calmly, sitting down and with no rush.",
      "loc.addr": "Address",
      "loc.hours": "Opening hours",
      "loc.park": "Parking",
      "loc.route": "Get directions",
      "loc.map": "Show Google map",
      "loc.mapNote": "Clicking connects to Google Maps.",
      "ph.facade": "A photo of the office will go here",
      "book.when": "Choose a day and time",
      "err.when": "Choose a day and a time.",
      "book.note": "Times are indicative and subject to confirmation.",
      "book.you": "Your details",
      "f.name": "Name",
      "err.name": "Please enter your name.",
      "f.phone": "Phone",
      "err.phone": "Please enter a contact phone number.",
      "err.email": "Please check the email address.",
      "o.other": "Something else",
      "f.topic": "Subject",
      "f.details": "Would you like to tell me something about your case? (optional)",
      "f.privacy": "I have read and accept the",
      "f.privacyLink": "privacy policy",
      "err.privacy": "You need to accept the privacy policy.",
      "book.send": "Request a meeting",
      "book.wa": "Send via WhatsApp",
      "footer.role": "Lawyer · Bar number 19255 · ICAV",
      "footer.legal": "Legal notice",
      "footer.privacy": "Privacy",
      "bar.call": "Call",
      "ok.title": "Thank you for your message",
      "ok.mail": "Your email has opened with the request ready. Just press “Send”. I will reply within 24 hours at most.",
      "ok.close": "Close",
      "title": "Nuria Cerdá · Inheritance lawyer in Xàtiva",
      "cal.prev": "Previous month",
      "cal.next": "Next month",
      "mail.consult": "Consultation request",
      "mail.booking": "Meeting request",
      "mail.hello": "Hello Nuria, I would like to book a meeting.",
      "mail.when": "Preferred day and time",
      "mail.topic": "Subject",
      "mail.name": "Name",
      "mail.phone": "Phone",
      "ok.wa": "WhatsApp has opened with the request ready. Just press “Send”. I will reply within 24 hours at most.",
      "hero.role": "Lawyer",
      "hero.c3": "Reply within 24 h",
      "tools.title": "Two tools to <em>start with peace of mind</em>",
      "tools.lead": "Before you call me, you can check your deadlines and gather your paperwork. No commitment, and no personal details needed.",
      "calc.t": "How long do I have?",
      "calc.d": "Enter the date of death and I’ll show you the deadlines for inheritance tax and the first formalities.",
      "calc.label": "Date of death",
      "calc.empty": "Your deadlines will appear here.",
      "calc.note": "An estimate only. If the last day falls on a weekend or public holiday, the deadline moves to the next working day. We confirm your case at the consultation.",
      "calc.cta": "I’d like you to check it",
      "docs.t": "What to bring to our first meeting",
      "docs.d": "Tick what you already have. The list is saved on this device and you can print it.",
      "docs.1": "Your ID and, if you have them, those of the other heirs",
      "docs.2": "Death certificate",
      "docs.2h": "Issued free of charge by the Civil Registry.",
      "docs.3": "Certificate of last wills",
      "docs.3h": "If you don’t have it yet, I’ll request it.",
      "docs.4": "A copy of the will, if there is one",
      "docs.5": "Family book (libro de familia)",
      "docs.6": "Title deeds for homes and land",
      "docs.6h": "If you can’t find them, the IBI property tax bill will do.",
      "docs.7": "Bank account balances",
      "docs.7h": "Your bank provides them as at the date of death.",
      "docs.8": "Life insurance, pension plans and vehicles",
      "docs.9": "Outstanding debts: loans, mortgage or cards",
      "docs.relax": "<strong>Missing something?</strong> Don’t worry. Bring what you have and I’ll request the rest.",
      "docs.print": "Print the list",
      "dl.will.t": "Certificate of last wills",
      "dl.will.d": "Shows whether there is a will and before which notary it was signed.",
      "dl.ext.t": "Last day to request an extension",
      "dl.ext.d": "Extends the tax deadline by six more months, with interest.",
      "dl.isd.t": "Inheritance tax and municipal capital gains tax",
      "dl.isd.d": "End of the standard six-month period to file both.",
      "dl.isdx.t": "Deadline with extension",
      "dl.isdx.d": "Only if you requested it in time.",
      "st.from": "You can request it from this day",
      "st.ready": "You can request it now",
      "st.left": "{n} days left",
      "st.left1": "1 day left",
      "st.today": "Due today",
      "st.over": "Expired",
      "st.closed": "No longer possible",
      "sum.ok": "You have <strong>{n} days</strong> left to file the tax.",
      "sum.ok1": "You have <strong>1 day</strong> left to file the tax.",
      "sum.today": "<strong>Today</strong> is the last day to file the tax.",
      "sum.ext": " You can still request an extension.",
      "sum.ext2": "The standard deadline has passed. If you requested an extension, you have until <strong>{d}</strong>. If not, you can still file with a surcharge: the sooner, the smaller.",
      "sum.late": "The deadlines have passed, but you can still file with a surcharge. The sooner it is done, the smaller it will be.",
      "sum.future": "The date cannot be later than today.",
      "docs.count": "{n} of {total} ready"
  };


  Object.assign(extra.es, {"new.time": "2. Elige la hora que prefieres", "new.date": "Abrir calendario", "new.dateHelp": "Selecciona la fecha o escribe el día, mes y año.", "new.facade": "Fotografía del local con su rotulación anterior. Ahora, Cerdá y Burches.", "new.pick": "Selecciona un día y una hora. Es una solicitud, pendiente de confirmación.", "new.request": "Tu preferencia: {date} · {time}", "new.hour": "Elige una hora para completar tu preferencia."});
  Object.assign(VA, {"new.time": "2. Tria l’hora que prefereixes", "new.date": "Obrir calendari", "new.dateHelp": "Selecciona la data o escriu el dia, mes i any.", "new.facade": "Fotografia del local amb la retolació anterior. Ara, Cerdá y Burches.", "new.pick": "Selecciona un dia i una hora. És una sol·licitud pendent de confirmació.", "new.request": "La teua preferència: {date} · {time}", "new.hour": "Tria una hora per a completar la teua preferència."});
  Object.assign(EN, {"new.time": "2. Choose your preferred time", "new.date": "Open calendar", "new.dateHelp": "Select the date or type the day, month and year.", "new.facade": "Office photograph with the previous signage. Now Cerdá y Burches.", "new.pick": "Choose a day and time. This is a request, subject to confirmation.", "new.request": "Your preference: {date} · {time}", "new.hour": "Choose a time to complete your preference."});
  VA['about.p2'] = 'Porte cada cas jo mateixa, de principi a fi. A Cerdá y Burches compartisc despatx amb Pau, de Burches Consulting, que ofereix assessorament fiscal, laboral i comptable. Jo m’encarregue de la teua consulta jurídica sobre herències i successions.';
  EN['about.p2'] = 'I handle every case myself, from start to finish. At Cerdá y Burches I share an office with Pau, from Burches Consulting, who offers tax, employment and accounting advice. I handle your legal consultation on inheritance and succession.';
  Object.assign(extra.es, {"hero.lead": "Te acompaño con los trámites de tu herencia, los impuestos y el reparto. Te explico tus opciones con claridad para que sepas qué hacer y puedas decidir con calma.", "hero.lead2": "Atención en Xàtiva y a distancia, con cita previa.", "about.p1": "Soy Nuria Cerdá, abogada en Xàtiva desde 2020. Me dedico a las herencias porque detrás de cada una hay una familia que necesita tiempo, claridad y cuidado.", "about.p2": "Llevo personalmente tu caso. Me cuentas tu situación, revisamos la documentación y te explico los siguientes pasos sin tecnicismos.", "about.p3": "Antes de empezar el trabajo, acordamos su alcance y el presupuesto por escrito.", "office.reference": "Comparto despacho con Pau, de Burches Consulting, que ofrece asesoramiento fiscal, laboral y contable. Yo atiendo las consultas jurídicas sobre herencias y sucesiones."});
  Object.assign(VA, {"hero.lead": "T’acompanye amb els tràmits de la teua herència, els impostos i el repartiment. T’explique les opcions amb claredat perquè sàpies què fer i pugues decidir amb calma.", "hero.lead2": "Atenció a Xàtiva i a distància, amb cita prèvia.", "about.p1": "Soc Nuria Cerdá, advocada a Xàtiva des de 2020. Em dedique a les herències perquè darrere de cada una hi ha una família que necessita temps, claredat i cura.", "about.p2": "Porte personalment el teu cas. Em contes la teua situació, revisem la documentació i t’explique els passos següents sense tecnicismes.", "about.p3": "Abans de començar el treball, acordem l’abast i el pressupost per escrit.", "office.reference": "Compartisc despatx amb Pau, de Burches Consulting, que ofereix assessorament fiscal, laboral i comptable. Jo atenc les consultes jurídiques sobre herències i successions."});
  Object.assign(EN, {"hero.lead": "I help you with inheritance formalities, taxes and dividing the estate. I explain your options clearly so you know what to do and can take time to decide.", "hero.lead2": "Appointments in Xàtiva and remotely.", "about.p1": "I am Nuria Cerdá, a lawyer in Xàtiva since 2020. I focus on inheritance because behind every case is a family that needs time, clarity and care.", "about.p2": "I handle your case personally. You tell me about your situation, we review the documents and I explain the next steps in plain language.", "about.p3": "We agree on the scope of work and a written quote before work begins.", "office.reference": "I share an office with Pau, from Burches Consulting, who offers tax, employment and accounting advice. I handle legal consultations on inheritance and succession."});
  Object.assign(extra.es, {"hero.t1": "Tu herencia,", "hero.t2": "con las cosas claras.", "hero.lead": "No necesitas saber de trámites para empezar. Me cuentas tu situación y te ayudo a entender qué hacer con tu herencia.", "hero.lead2": "Nuria Cerdá · Herencias y sucesiones en Xàtiva.", "cta.talk": "Pedir mi primera cita", "hero.note": "«Te escucho y te explico el siguiente paso.»", "about.title": "Una abogada que <em>te acompaña</em>", "about.p1": "Soy Nuria Cerdá, abogada en Xàtiva desde 2020. Llevo personalmente tu caso, de principio a fin.", "about.p2": "Te explico tus opciones sin tecnicismos y acordamos el trabajo y el presupuesto por escrito antes de empezar.", "about.p3": "Puedes consultar en el despacho o a distancia.", "services.title": "¿Cómo puedo <em>ayudarte?</em>", "services.intro": "Podemos empezar por la duda que tienes hoy.", "s1.d": "Te ayudo a ordenar los trámites y gestionar la herencia.", "s2.d": "Revisamos cómo dejar tus decisiones por escrito.", "s3.d": "Estudiamos las opciones para el reparto y buscamos un acuerdo.", "method.title": "Empezar es <em>sencillo</em>", "method.lead": "Estos son los primeros pasos.", "m1c": "Me cuentas tu situación y revisamos lo que necesitas.", "m2t": "Presupuesto por escrito", "m2c": "Acordamos qué trabajo necesitas y su precio.", "m3c": "Coordino los trámites y te informo de los avances.", "m4c": "Te acompaño hasta completar el trabajo acordado.", "faq.title": "Antes de <em>pedir cita</em>", "faq.lead": "No necesitas llegar con todo resuelto.", "book.title": "Pide tu <em>primera cita</em>", "book.lead": "Indica el día y la hora que prefieres. Te confirmaré la disponibilidad y el precio de la consulta.", "book.note": "Es una solicitud de cita. La hora queda pendiente de confirmación.", "q6": "¿La primera consulta tiene coste?", "a6": "Sí. Te indicaré su precio al confirmar la cita, antes de reunirnos. El trabajo posterior se presupuesta por escrito.", "conversion.documents": "¿Necesito tener todos los documentos?", "conversion.documentsAnswer": "No. Trae lo que tengas y revisamos juntos qué falta.", "conversion.optional": "Añadir detalles (opcional)", "conversion.tools": "Ver calculadora de plazos y lista de documentos", "conversion.back": "Volver a la web"});
  Object.assign(VA, {"hero.t1": "La teua herència,", "hero.t2": "amb les coses clares.", "hero.lead": "No necessites saber de tràmits per a començar. Em contes la teua situació i t’ajude a entendre què fer amb la teua herència.", "hero.lead2": "Nuria Cerdá · Herències i successions a Xàtiva.", "cta.talk": "Demanar la meua primera cita", "hero.note": "«T’escolte i t’explique el pas següent.»", "about.title": "Una advocada que <em>t’acompanya</em>", "about.p1": "Soc Nuria Cerdá, advocada a Xàtiva des de 2020. Porte personalment el teu cas, de principi a fi.", "about.p2": "T’explique les opcions sense tecnicismes i acordem el treball i el pressupost per escrit abans de començar.", "about.p3": "Pots consultar al despatx o a distància.", "services.title": "Com puc <em>ajudar-te?</em>", "services.intro": "Podem començar pel dubte que tens hui.", "s1.d": "T’ajude a ordenar els tràmits i gestionar l’herència.", "s2.d": "Revisem com deixar les teues decisions per escrit.", "s3.d": "Estudiem les opcions per al repartiment i busquem un acord.", "method.title": "Començar és <em>senzill</em>", "method.lead": "Estos són els primers passos.", "m1c": "Em contes la teua situació i revisem què necessites.", "m2t": "Pressupost per escrit", "m2c": "Acordem quin treball necessites i el preu.", "m3c": "Coordine els tràmits i t’informe dels avanços.", "m4c": "T’acompanye fins a completar el treball acordat.", "faq.title": "Abans de <em>demanar cita</em>", "faq.lead": "No necessites arribar amb tot resolt.", "book.title": "Demana la teua <em>primera cita</em>", "book.lead": "Indica el dia i l’hora que prefereixes. Et confirmaré la disponibilitat i el preu de la consulta.", "book.note": "És una sol·licitud de cita. L’hora queda pendent de confirmació.", "q6": "La primera consulta té cost?", "a6": "Sí. T’indicaré el preu en confirmar la cita, abans de reunir-nos. El treball posterior es pressuposta per escrit.", "conversion.documents": "Necessite tindre tots els documents?", "conversion.documentsAnswer": "No. Porta el que tingues i revisem junts què falta.", "conversion.optional": "Afegir detalls (opcional)", "conversion.tools": "Veure calculadora de terminis i llista de documents", "conversion.back": "Tornar a la web"});
  Object.assign(EN, {"hero.t1": "Your inheritance,", "hero.t2": "clearly explained.", "hero.lead": "You do not need to understand the paperwork to get started. Tell me about your situation and I will help you understand your next steps.", "hero.lead2": "Nuria Cerdá · Inheritance and succession in Xàtiva.", "cta.talk": "Request my first appointment", "hero.note": "“I listen and explain the next step.”", "about.title": "A lawyer <em>by your side</em>", "about.p1": "I am Nuria Cerdá, a lawyer in Xàtiva since 2020. I handle your case personally, from start to finish.", "about.p2": "I explain your options in plain language. We agree on the work and a written quote before starting.", "about.p3": "Consultations at the office or remotely.", "services.title": "How can I <em>help?</em>", "services.intro": "We can start with the question you have today.", "s1.d": "I help organise the formalities and manage the inheritance.", "s2.d": "We review how to put your wishes in writing.", "s3.d": "We review the options for dividing the estate and seek agreement.", "method.title": "Getting started <em>is simple</em>", "method.lead": "These are the first steps.", "m1c": "You explain your situation and we review what you need.", "m2t": "A written quote", "m2c": "We agree on the work you need and the fee.", "m3c": "I coordinate the formalities and keep you informed.", "m4c": "I support you until the agreed work is complete.", "faq.title": "Before you <em>request an appointment</em>", "faq.lead": "You do not need to have everything sorted out.", "book.title": "Request your <em>first appointment</em>", "book.lead": "Choose your preferred day and time. I will confirm availability and the consultation fee.", "book.note": "This is an appointment request. The time is subject to confirmation.", "q6": "Is there a fee for the first consultation?", "a6": "Yes. I will tell you the fee when confirming the appointment, before we meet. Further work is quoted in writing.", "conversion.documents": "Do I need all the documents?", "conversion.documentsAnswer": "No. Bring what you have and we will check what is missing.", "conversion.optional": "Add details (optional)", "conversion.tools": "View the deadline calculator and document checklist", "conversion.back": "Back to the website"});
  const es = {};
  document.querySelectorAll('[data-i18n]').forEach((el) => { es[el.dataset.i18n] = el.textContent; });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => { es[el.dataset.i18nHtml] = el.innerHTML; });
  const dict = { es: Object.assign(es, extra.es), va: Object.assign({}, VA, extra.va), en: EN };

  let lang = 'es';
  const t = (key) => dict[lang][key] || dict.es[key] || '';
  const locale = () => ({ va: 'ca-ES', en: 'en-GB' }[lang] || 'es-ES');
  const langBox = document.querySelector('.lang');

  function applyLang(next, animate) {
    if (!dict[next]) next = 'es';
    const swap = () => {
      lang = next;
      root.lang = { va: 'ca', en: 'en' }[next] || 'es';
      document.title = t('title');
      document.querySelectorAll('[data-i18n]').forEach((el) => { const v = t(el.dataset.i18n); if (v) el.textContent = v; });
      document.querySelectorAll('[data-i18n-html]').forEach((el) => { const v = t(el.dataset.i18nHtml); if (v) el.innerHTML = v; });
      document.querySelectorAll('.lang-btn').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === next)));
      if (langBox) langBox.dataset.lang = next;
      splitLetters();
      renderCalendar();
      updateBookingSummary();
      renderDeadlines();
      updateDocs();
      try { localStorage.setItem('nc-lang', next); } catch (e) { /* sin almacenamiento */ }
    };
    if (animate && !reduceMotion.matches) {
      document.body.classList.add('lang-fade');
      setTimeout(() => { swap(); requestAnimationFrame(() => document.body.classList.remove('lang-fade')); }, 180);
    } else {
      swap();
    }
  }

  /* El titular de la portada se parte en letras para que suban una a una.
     Se rehace tras cada cambio de idioma; las palabras no se cortan. */
  function splitLetters() {
    let n = 0;
    document.querySelectorAll('[data-split], [data-split-name]').forEach((el) => {
      const text = el.textContent;
      el.setAttribute('aria-label', text);
      el.textContent = '';
      text.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) { el.appendChild(document.createTextNode(part)); return; }
        const word = document.createElement('span');
        word.className = 'w';
        word.setAttribute('aria-hidden', 'true');
        [...part].forEach((chr) => {
          const s = document.createElement('span');
          s.className = 'ch';
          s.textContent = chr;
          s.style.setProperty('--ci', n++);
          word.appendChild(s);
        });
        el.appendChild(word);
      });
    });
  }

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => { if (btn.dataset.lang !== lang) applyLang(btn.dataset.lang, true); });
  });

  /* ---------------------------------------------------------
     Foto opcional de "Sobre mí": si existe se muestra; si no,
     queda el monograma (nunca una foto de stock).
     --------------------------------------------------------- */
  document.querySelectorAll('img[data-optional]').forEach((img) => {
    const box = img.parentElement;
    const ok = () => { if (img.naturalWidth > 0) box.classList.add('has-img'); };
    img.addEventListener('load', ok);
    img.addEventListener('error', () => img.remove());
    if (img.complete) { if (img.naturalWidth > 0) ok(); else img.remove(); }
  });

  /* ---------------------------------------------------------
     Mapa del despacho: no se conecta con Google hasta que se pulsa
     (así lo explica la política de cookies).
     --------------------------------------------------------- */
  const mapBtn = document.getElementById('loc-map-btn');
  if (mapBtn) {
    mapBtn.addEventListener('click', () => {
      const map = document.getElementById('loc-map');
      const frame = document.createElement('iframe');
      frame.src = 'https://maps.google.com/maps?q=Pla%C3%A7a%20Espanyoleto%202%2C%2046800%20X%C3%A0tiva&z=17&output=embed';
      frame.title = 'Google Maps · Pl. Espanyoleto, 2 · Xàtiva';
      frame.loading = 'lazy';
      frame.referrerPolicy = 'no-referrer-when-downgrade';
      frame.addEventListener('load', () => map.classList.add('is-live'));
      map.appendChild(frame);
    }, { once: true });
  }

  /* ---------------------------------------------------------
     Calendario de cita
     --------------------------------------------------------- */
  const calGrid = document.getElementById('cal-grid');
  const calWeek = document.getElementById('cal-week');
  const calTitle = document.getElementById('cal-title');
  const today = new Date(); today.setHours(0, 0, 0, 0);
  let view = new Date(today.getFullYear(), today.getMonth(), 1);
  const bookingEnd = new Date(today); bookingEnd.setFullYear(bookingEnd.getFullYear() + 1);
  let selectedDate = null;
  let selectedTime = null;
  const sameDay = (a, b) => a && b && a.getTime() === b.getTime();

  // Festivos de la Comunitat Valenciana (DOGV) y locales de Xàtiva.
  // Hay que añadir los de cada año nuevo; los locales de 2027 aún no están publicados.
  const HOLIDAYS = new Set([
    '2026-01-01', '2026-01-06', '2026-03-19', '2026-04-03', '2026-04-06', '2026-05-01', '2026-06-24',
    '2026-08-15', '2026-10-09', '2026-10-12', '2026-12-08', '2026-12-25',
    '2027-01-01', '2027-01-06', '2027-03-19', '2027-03-26', '2027-03-29', '2027-05-01', '2027-10-09',
    '2027-10-12', '2027-11-01', '2027-12-06', '2027-12-08', '2027-12-25'
  ]);
  const LOCAL_HOLIDAYS = new Set(['2026-08-01', '2026-08-05']);
  const isoDay = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const isHoliday = (d) => HOLIDAYS.has(isoDay(d));

  function renderCalendar() {
    if (!calGrid) return;
    const loc = locale();
    const mt = new Intl.DateTimeFormat(loc, { month: 'long', year: 'numeric' }).format(view);
    calTitle.textContent = mt.charAt(0).toUpperCase() + mt.slice(1);

    const wk = new Intl.DateTimeFormat(loc, { weekday: 'short' });
    const monday = new Date(2024, 0, 1);
    calWeek.innerHTML = '';
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday); d.setDate(monday.getDate() + i);
      const s = document.createElement('span');
      s.textContent = wk.format(d).replace('.', '').slice(0, 2);
      calWeek.appendChild(s);
    }

    const prev = document.querySelector('.cal-nav[data-dir="-1"]');
    const next = document.querySelector('.cal-nav[data-dir="1"]');
    prev.disabled = view.getFullYear() === today.getFullYear() && view.getMonth() === today.getMonth();
    prev.setAttribute('aria-label', t('cal.prev'));
    next.setAttribute('aria-label', t('cal.next'));
    next.disabled = view >= new Date(bookingEnd.getFullYear(), bookingEnd.getMonth(), 1);

    const full = new Intl.DateTimeFormat(loc, { weekday: 'long', day: 'numeric', month: 'long' });
    const first = (view.getDay() + 6) % 7;
    const days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
    const frag = document.createDocumentFragment();
    for (let i = 0; i < first; i++) frag.appendChild(document.createElement('span'));
    for (let d = 1; d <= days; d++) {
      const date = new Date(view.getFullYear(), view.getMonth(), d);
      const dow = date.getDay();
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'cal-day';
      b.textContent = d;
      const holiday = isHoliday(date) || LOCAL_HOLIDAYS.has(isoDay(date));
      b.setAttribute('aria-label', full.format(date) + (holiday ? ` · ${t('cal.holiday')}` : ''));
      if (holiday) { b.classList.add('is-holiday'); b.title = t('cal.holiday'); }
      b.disabled = date <= today || date > bookingEnd || dow === 0 || dow === 6 || holiday;
      if (sameDay(date, today)) b.classList.add('is-today');
      b.setAttribute('aria-pressed', String(sameDay(date, selectedDate)));
      b.addEventListener('click', () => {
        selectedDate = date;
        updateBookingSummary();
        calGrid.querySelectorAll('.cal-day[aria-pressed="true"]').forEach((x) => x.setAttribute('aria-pressed', 'false'));
        b.setAttribute('aria-pressed', 'true');
        clearWhenError();
      });
      frag.appendChild(b);
    }
    calGrid.innerHTML = '';
    calGrid.appendChild(frag);
  }

  document.querySelectorAll('.cal-nav').forEach((btn) => {
    btn.addEventListener('click', () => {
      view = new Date(view.getFullYear(), view.getMonth() + Number(btn.dataset.dir), 1);
      renderCalendar();
      updateBookingSummary();
    });
  });

  document.querySelectorAll('.slot').forEach((slot) => {
    slot.addEventListener('click', () => {
      selectedTime = slot.textContent.trim();
      updateBookingSummary();
      document.querySelectorAll('.slot').forEach((s) => s.setAttribute('aria-pressed', String(s === slot)));
      clearWhenError();
    });
  });

  function updateBookingSummary() {
    const summary = document.querySelector('[data-booking-summary]');
    if (!summary) return;
    const label = selectedDate ? new Intl.DateTimeFormat(locale(), {day:'numeric',month:'long',year:'numeric'}).format(selectedDate) : '';
    summary.textContent = selectedDate && selectedTime ? t('new.request').replace('{date}',label).replace('{time}',selectedTime) : selectedDate ? label + ' · ' + t('new.hour') : t('new.pick');
    summary.classList.toggle('is-complete', !!(selectedDate && selectedTime));
  }
  updateBookingSummary();
  document.querySelector('[data-open-date]')?.addEventListener('click', () => {
    const input = document.getElementById('d-date');
    try { input.showPicker(); } catch (_) { input.focus(); }
  });
  const whenError = document.getElementById('when-e');
  function clearWhenError() { if (whenError && selectedDate && selectedTime) whenError.classList.remove('is-shown'); }

  // "Consultar" en un servicio deja elegido ese asunto en el formulario
  document.querySelectorAll('.svc-link[data-topic]').forEach((a) => {
    a.addEventListener('click', () => { const sel = document.getElementById('b-topic'); if (sel) sel.value = a.dataset.topic; });
  });

  /* ---------------------------------------------------------
     Formulario → email o WhatsApp
     --------------------------------------------------------- */
  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  function setFieldState(el, ok) {
    const field = el.closest('.field');
    field.classList.toggle('has-error', !ok);
    el.setAttribute('aria-invalid', String(!ok));
    const err = field.querySelector('.field-error');
    if (err) { if (ok) el.removeAttribute('aria-describedby'); else el.setAttribute('aria-describedby', err.id); }
    return ok;
  }

  function validate(form) {
    const f = form.elements;
    const rules = [
      [f.name, (el) => el.value.trim().length > 1],
      [f.phone, (el) => el.value.replace(/\D/g, '').length >= 9],
      [f.email, (el) => !el.value.trim() || isEmail(el.value.trim())],
      [f.privacy, (el) => el.checked]
    ];
    let firstBad = null;
    if (!(selectedDate && selectedTime)) {
      whenError.classList.add('is-shown');
      firstBad = calGrid.querySelector('.cal-day:not(:disabled)') || calGrid;
    }
    rules.forEach(([el, fn]) => {
      if (!el) return;
      if (!setFieldState(el, fn(el)) && !firstBad) firstBad = el;
      if (!el.dataset.watch) {
        el.dataset.watch = '1';
        const recheck = () => { if (el.closest('.field').classList.contains('has-error')) setFieldState(el, fn(el)); };
        el.addEventListener('input', recheck);
        el.addEventListener('change', recheck);
      }
    });
    return firstBad;
  }

  function buildMessage(form) {
    const f = form.elements;
    const when = new Intl.DateTimeFormat(locale(), { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(selectedDate);
    const lines = [t('mail.hello'), ''];
    lines.push(`${t('mail.when')}: ${when}, ${selectedTime}`);
    lines.push(`${t('mail.topic')}: ${f.topic.options[f.topic.selectedIndex].text}`);
    lines.push(`${t('mail.name')}: ${f.name.value.trim()}`);
    lines.push(`${t('mail.phone')}: ${f.phone.value.trim()}`);
    if (f.email.value.trim()) lines.push(`Email: ${f.email.value.trim()}`);
    if (f.message.value.trim()) lines.push('', f.message.value.trim());
    return lines.join('\n');
  }

  const thanks = document.getElementById('thanks');
  function showThanks(channel) {
    if (!thanks || typeof thanks.showModal !== 'function') return;
    thanks.querySelector('[data-i18n="ok.mail"]').textContent = t(channel === 'wa' ? 'ok.wa' : 'ok.mail');
    thanks.showModal();
    const orn = thanks.querySelector('.ornament');
    orn.classList.remove('is-drawn'); void orn.getBoundingClientRect(); orn.classList.add('is-drawn');
  }
  if (thanks) {
    thanks.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', () => thanks.close()));
    thanks.addEventListener('click', (e) => { if (e.target === thanks) thanks.close(); });
  }

  function send(form, channel) {
    const bad = validate(form);
    if (bad) { bad.focus({ preventScroll: false }); return; }
    const body = buildMessage(form);
    if (channel === 'wa') {
      window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(body)}`, '_blank', 'noopener');
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(t('mail.booking'))}&body=${encodeURIComponent(body)}`;
    }
    setTimeout(() => showThanks(channel), 400);
  }

  document.querySelectorAll('.js-mail-form').forEach((form) => {
    form.addEventListener('submit', (e) => { e.preventDefault(); send(form, 'mail'); });
    const wa = form.querySelector('[data-send="wa"]');
    if (wa) wa.addEventListener('click', () => send(form, 'wa'));
  });

  /* ---------------------------------------------------------
     Calculadora de plazos. Parte de la fecha del fallecimiento;
     salta fines de semana y festivos de la Comunitat Valenciana.
     --------------------------------------------------------- */
  const dlInput = document.getElementById('d-date');
  const dlOut = document.getElementById('dl-out');
  const dlCta = document.getElementById('dl-cta');
  const fill = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k]);
  const pad = (n) => String(n).padStart(2, '0');
  const toISO = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const isWeekend = (d) => d.getDay() === 0 || d.getDay() === 6 || isHoliday(d);
  let deathDate = null;

  // de fecha a fecha; si ese día no existe en el mes, el último del mes
  function addMonths(d, n) {
    const last = new Date(d.getFullYear(), d.getMonth() + n + 1, 0).getDate();
    return new Date(d.getFullYear(), d.getMonth() + n, Math.min(d.getDate(), last));
  }
  function nextWorkday(d) {
    const r = new Date(d);
    while (isWeekend(r)) r.setDate(r.getDate() + 1);
    return r;
  }
  function addWorkdays(d, n) {
    const r = new Date(d);
    while (n > 0) { r.setDate(r.getDate() + 1); if (!isWeekend(r)) n--; }
    return r;
  }
  const daysTo = (d) => Math.round((d - today) / 86400000);
  const longDate = (d) => new Intl.DateTimeFormat(locale(), { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
  const leftText = (n) => (n === 0 ? t('st.today') : n === 1 ? t('st.left1') : fill(t('st.left'), { n }));

  function renderDeadlines() {
    if (!dlInput || !dlOut) return;
    dlInput.max = toISO(today);
    const v = dlInput.value;
    deathDate = null;
    if (!v) {
      dlOut.innerHTML = `<p class="dl-empty"><svg class="i"><use href="#i-cal"/></svg><span>${t('calc.empty')}</span></p>`;
      dlCta.hidden = true;
      return;
    }
    const [y, m, d] = v.split('-').map(Number);
    const death = new Date(y, m - 1, d);
    if (death > today) {
      dlOut.innerHTML = `<p class="dl-summary is-late"><svg class="i"><use href="#i-clock"/></svg><span>${t('sum.future')}</span></p>`;
      dlCta.hidden = true;
      return;
    }
    deathDate = death;

    const items = [
      { key: 'will', date: addWorkdays(death, 15), from: true },
      { key: 'ext', date: nextWorkday(addMonths(death, 5)), closed: true },
      { key: 'isd', date: nextWorkday(addMonths(death, 6)) },
      { key: 'isdx', date: nextWorkday(addMonths(death, 12)) }
    ];
    const [, ext, isd, isdx] = items.map((it) => daysTo(it.date));

    let sum;
    let late = false;
    if (isd >= 0) {
      sum = isd === 0 ? t('sum.today') : isd === 1 ? t('sum.ok1') : fill(t('sum.ok'), { n: isd });
      if (ext >= 0) sum += t('sum.ext');
    } else if (isdx >= 0) {
      sum = fill(t('sum.ext2'), { d: longDate(items[3].date) });
      late = true;
    } else {
      sum = t('sum.late');
      late = true;
    }

    const loc = locale();
    const mon = new Intl.DateTimeFormat(loc, { month: 'short' });
    const rows = items.map((it, i) => {
      const n = daysTo(it.date);
      let cls = '';
      let st;
      if (it.from) {
        if (n <= 0) { cls = 'is-ready'; st = t('st.ready'); } else st = t('st.from');
      } else if (n < 0) {
        cls = 'is-past is-late'; st = t(it.closed ? 'st.closed' : 'st.over');
      } else {
        cls = n <= 30 ? 'is-soon' : ''; st = leftText(n);
      }
      const month = mon.format(it.date).replace('.', '').replace(/^de /, '');
      return `<li class="dl ${cls}" style="--i:${i + 1}">
        <time class="dl-date" datetime="${toISO(it.date)}" title="${longDate(it.date)}"><b>${it.date.getDate()}</b><span>${month} ${it.date.getFullYear()}</span></time>
        <div><h4>${t(`dl.${it.key}.t`)}</h4><p>${t(`dl.${it.key}.d`)}</p><span class="dl-st">${st}</span></div>
      </li>`;
    }).join('');

    dlOut.innerHTML = `<p class="dl-summary${late ? ' is-late' : ''}"><svg class="i"><use href="#i-clock"/></svg><span>${sum}</span></p><ol class="dl-list">${rows}</ol>`;
    dlCta.hidden = false;
  }

  if (dlInput) {
    dlInput.addEventListener('change', renderDeadlines);
    dlInput.addEventListener('input', renderDeadlines);
    // "Quiero que lo revises tú" deja preparado el formulario de cita
    dlCta.addEventListener('click', () => {
      const sel = document.getElementById('b-topic');
      if (sel) sel.value = 'Impuesto de sucesiones';
      const msg = document.getElementById('b-msg');
      if (msg && !msg.value.trim() && deathDate) msg.value = `${t('calc.label')}: ${longDate(deathDate)}`;
    });
  }

  /* ---------------------------------------------------------
     Qué traer a la primera cita: se recuerda en este
     dispositivo y se puede imprimir sola.
     --------------------------------------------------------- */
  const docs = document.getElementById('docs');
  const docsCount = document.getElementById('docs-count');

  function updateDocs() {
    if (!docs) return;
    const boxes = docs.querySelectorAll('input');
    const done = docs.querySelectorAll('input:checked').length;
    docs.closest('.tool').style.setProperty('--done', done / boxes.length);
    docsCount.textContent = fill(t('docs.count'), { n: done, total: boxes.length });
  }

  if (docs) {
    let kept = [];
    try { kept = JSON.parse(localStorage.getItem('nc-docs') || '[]'); } catch (e) { /* sin almacenamiento */ }
    docs.querySelectorAll('input').forEach((box) => {
      box.checked = kept.includes(box.value);
      box.addEventListener('change', () => {
        updateDocs();
        const vals = [...docs.querySelectorAll('input:checked')].map((b) => b.value);
        try { localStorage.setItem('nc-docs', JSON.stringify(vals)); } catch (e) { /* sin almacenamiento */ }
      });
    });
    document.getElementById('docs-print').addEventListener('click', () => {
      root.classList.add('printing-docs');
      window.print();
    });
    window.addEventListener('afterprint', () => root.classList.remove('printing-docs'));
  }

  /* ---------------------------------------------------------
     Idioma guardado
     --------------------------------------------------------- */
  let saved = null;
  try { saved = localStorage.getItem('nc-lang'); } catch (e) { /* sin almacenamiento */ }
  applyLang(saved || 'es', false);

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     Entrada de la portada (cuando las fuentes están listas,
     para que el titular no salte)
     --------------------------------------------------------- */
  const start = () => requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('is-loaded')));
  if (document.fonts && document.fonts.ready) {
    Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 250))]).then(start);
  } else {
    start();
  }

  /* ---------------------------------------------------------
     Scroll: cabecera, barra móvil y línea del método
     --------------------------------------------------------- */
  const header = document.querySelector('.site-header');
  const mobileBar = document.querySelector('.mobile-bar');
  const hero = document.querySelector('.hero');
  const stepsWrap = document.querySelector('.steps-wrap');
  const steps = stepsWrap ? [...stepsWrap.querySelectorAll('.step')] : [];
  const watermarks = [...document.querySelectorAll('.watermark')];
  const justiceImg = document.querySelector('.justice img');
  let lastY = window.scrollY;
  let ticking = false;
  let menuOpen = false;

  function onScroll() {
    const y = window.scrollY;
    const heroH = hero ? hero.offsetHeight : 600;
    header.classList.toggle('is-scrolled', y > 24);
    if (!menuOpen) header.classList.toggle('is-hidden', y > lastY + 4 && y > heroH * 0.6);
    else header.classList.remove('is-hidden');
    if (y < lastY - 4) header.classList.remove('is-hidden');
    if (mobileBar) mobileBar.classList.toggle('is-shown', y > heroH * 0.55);
    // el retrato de la portada se desliza un poco más despacio que la página
    if (hero && !reduceMotion.matches && y < heroH) hero.style.setProperty('--hy', (y * 0.18).toFixed(1) + 'px');
    // la estatua de la Justicia sube un poco más despacio: parece que flota en su foco
    if (justiceImg && !reduceMotion.matches) {
      const r = justiceImg.parentElement.getBoundingClientRect();
      if (r.bottom > 0 && r.top < window.innerHeight) justiceImg.style.setProperty('--jy', ((r.top + r.height / 2 - window.innerHeight / 2) * 0.12).toFixed(1) + 'px');
    }
    const maxY = document.documentElement.scrollHeight - window.innerHeight;
    header.style.setProperty('--sp', maxY > 0 ? (y / maxY).toFixed(4) : '0');

    // la línea dorada del método se rellena al avanzar
    if (stepsWrap && !reduceMotion.matches) {
      const r = stepsWrap.getBoundingClientRect();
      const mid = window.innerHeight * 0.6;
      const p = Math.min(1, Math.max(0, (mid - r.top) / r.height));
      stepsWrap.style.setProperty('--p', p.toFixed(3));
      steps.forEach((s) => s.classList.toggle('is-lit', s.getBoundingClientRect().top + 32 < mid));
    }
    if (!reduceMotion.matches) {
      watermarks.forEach((w) => {
        const r = w.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        w.style.setProperty('--py', ((r.top + r.height / 2 - window.innerHeight / 2) * -0.12).toFixed(1) + 'px');
      });
    }
    lastY = y;
    ticking = false;
  }
  window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
  if (reduceMotion.matches) steps.forEach((s) => s.classList.add('is-lit'));
  onScroll();

  /* ---------------------------------------------------------
     Aparición al hacer scroll (una vez) con pequeño escalonado
     --------------------------------------------------------- */
  document.querySelectorAll('[data-reveal-group]').forEach((group) => {
    group.querySelectorAll(':scope > [data-reveal]').forEach((el, i) => el.style.setProperty('--i', i % 6));
  });
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------------------------------------------------------
     Enlace activo del menú
     --------------------------------------------------------- */
  const navLinks = [...document.querySelectorAll('.nav-list a')];
  if ('IntersectionObserver' in window) {
    const sio = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = '#' + entry.target.id;
        navLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main > section[id]').forEach((s) => sio.observe(s));
  }

  /* ---------------------------------------------------------
     Menú móvil
     --------------------------------------------------------- */
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-menu');
  function setMenu(open) {
    menuOpen = open;
    toggle.setAttribute('aria-expanded', String(open));
    if (open) {
      menu.hidden = false;
      menu.dataset.state = 'closed';
      requestAnimationFrame(() => requestAnimationFrame(() => { menu.dataset.state = 'open'; }));
      header.classList.add('is-scrolled');
    } else {
      menu.dataset.state = 'closed';
      setTimeout(() => { if (!menuOpen) menu.hidden = true; }, reduceMotion.matches ? 0 : 250);
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    }
  }
  if (toggle && menu) {
    toggle.addEventListener('click', () => setMenu(!menuOpen));
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menuOpen) { setMenu(false); toggle.focus(); } });
  }

  /* ---------------------------------------------------------
     Preguntas: apertura y cierre suaves
     --------------------------------------------------------- */
  document.querySelectorAll('.qa').forEach((qa) => {
    const summary = qa.querySelector('summary');
    const body = qa.querySelector('.qa-body');
    let anim = null;
    summary.addEventListener('click', (e) => {
      if (reduceMotion.matches || !body.animate) return;
      e.preventDefault();
      if (anim) anim.cancel();
      if (!qa.open) {
        qa.open = true;
        const h = body.scrollHeight;
        anim = body.animate([{ height: '0px', opacity: 0 }, { height: h + 'px', opacity: 1 }], { duration: 300, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' });
      } else {
        const h = body.offsetHeight;
        anim = body.animate([{ height: h + 'px', opacity: 1 }, { height: '0px', opacity: 0 }], { duration: 220, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' });
        anim.onfinish = () => { qa.open = false; };
      }
      anim.onfinish = anim.onfinish || null;
      const a = anim;
      a.addEventListener('finish', () => { if (anim === a) anim = null; });
    });
  });

  /* ---------------------------------------------------------
     Detalles con ratón (solo escritorio):
     brillo que sigue al cursor y botones que se dejan atraer
     --------------------------------------------------------- */
  if (finePointer.matches && !reduceMotion.matches) {
    document.querySelectorAll('.svc').forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });

    // una luz suave sigue al cursor sobre las franjas de color
    document.querySelectorAll('.is-navy').forEach((band) => {
      band.addEventListener('pointermove', (e) => {
        const r = band.getBoundingClientRect();
        band.style.setProperty('--sx', `${e.clientX - r.left}px`);
        band.style.setProperty('--sy', `${e.clientY - r.top}px`);
        band.classList.add('is-lit-spot');
      });
      band.addEventListener('pointerleave', () => band.classList.remove('is-lit-spot'));
    });

    // los botones principales se dejan atraer un poco por el cursor
    document.querySelectorAll('.btn-navy, .btn-silver').forEach((btn) => {
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        btn.style.translate = `${(dx * 0.18).toFixed(1)}px ${(dy * 0.3).toFixed(1)}px`;
      });
      btn.addEventListener('pointerleave', () => { btn.style.translate = ''; });
    });
  }
})();
