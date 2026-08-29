(function () {
  "use strict";

  var STORAGE_KEY = "weddingLanguage";
  var SUPPORTED_LANGUAGES = ["en", "es", "fr", "fa"];

  var translations = {
    es: {
      "Our Wedding": "Nuestra boda",
      "Event Details — Olimpia & Shayann": "Programa — Olimpia & Shayann",
      "Travel & Stay — Olimpia & Shayann": "Viaje y alojamiento — Olimpia & Shayann",
      "RSVP — Olimpia & Shayann": "Confirmación de asistencia — Olimpia & Shayann",
      "About Valencia — Olimpia & Shayann": "Sobre Valencia — Olimpia & Shayann",
      "FAQ — Olimpia & Shayann": "Preguntas frecuentes — Olimpia & Shayann",
      "Olimpia and Shayann — 9 and 10 July 2027 — Home": "Olimpia y Shayann — 9 y 10 de julio de 2027 — Inicio",
      "9 & 10 July 2027": "9 y 10 de julio de 2027",
      "Open navigation menu": "Abrir menú de navegación",
      "Close navigation menu": "Cerrar menú de navegación",
      "Primary navigation": "Navegación principal",
      "Language": "Idioma",
      "Home": "Inicio",
      "Event Details": "Programa",
      "Travel & Stay": "Viaje y alojamiento",
      "RSVP": "Confirmar asistencia",
      "About Valencia": "Sobre Valencia",
      "FAQ": "Preguntas frecuentes",
      "Olimpia and Shayann photo gallery": "Galería de fotos de Olimpia y Shayann",
      "Olimpia and Shayann": "Olimpia y Shayann",
      "Show previous photo": "Mostrar foto anterior",
      "Show next photo": "Mostrar foto siguiente",
      "9–11th July 2027 · Valencia, Spain": "9–11 de julio de 2027 · Valencia, España",
      "We cannot wait to share this special day with our family and friends.": "Estamos deseando compartir este día tan especial con nuestra familia y amigos.",
      "On this website, you will find all the information about our wedding weekend and the RSVP questionnaire for you to complete.": "En esta web encontraréis toda la información sobre el fin de semana de nuestra boda y el formulario para confirmar vuestra asistencia.",
      "Confirm Your Attendance": "Confirma tu asistencia",
      "Explore the Weekend": "Descubre el fin de semana",
      "Reach out to us if you have any questions": "Contactad con nosotros si tenéis alguna pregunta",
      "9, 10 and 11 July 2027 · Valencia, Spain": "9, 10 y 11 de julio de 2027 · Valencia, España",
      "Agenda for the weekend": "Programa",
      "Days": "Días",
      "Hours": "Horas",
      "Minutes": "Minutos",
      "Seconds": "Segundos",
      "Friday · 9 July": "Viernes · 9 de julio",
      "Golf, Activities & Cocktail": "Golf, actividades y cóctel",
      "Optional golf and resort activities during the day, followed by a welcome cocktail at Parador El Saler": "Golf y actividades opcionales en el resort durante el día, seguidos de un cóctel de bienvenida en el Parador El Saler",
      "Saturday · 10 July": "Sábado · 10 de julio",
      "Ceremony & Celebration": "Ceremonia y celebración",
      "Ceremony at 19:30h at Masía Xamandreu.": "Ceremonia a las 19:30 en Masía Xamandreu.",
      "Golf at Parador El Saler": "Golf en el Parador El Saler",
      "Resort activities at Parador El Saler": "Actividades del resort en el Parador El Saler",
      "Friday & Saturday · 9–10 July · Daytime · Optional": "Viernes y sábado · 9–10 de julio · Durante el día · Opcional",
      "Golf, Other Resort Activities & Visiting Valencia": "Golf, otras actividades del resort y visita a Valencia",
      "On Friday, we will host an optional golf tournament at Parador El Saler from 10:00–13:00h — sign up if you would like to! Everyone is welcome; you will just need to submit your golf licence number. Alternatively, whether you are staying at the hotel or not, you can enjoy the resort facilities, including the pool, private beach access and bike hire to explore L’Albufera Natural Park. Simply let the hotel reception know and they will arrange this for you. You can also explore the city — see": "El viernes organizaremos un torneo de golf opcional en el Parador El Saler de 10:00 a 13:00 — ¡apuntaos si os apetece! Todo el mundo es bienvenido; solo tendréis que indicar vuestro número de licencia de golf. Como alternativa, tanto si os alojáis en el hotel como si no, podéis disfrutar de las instalaciones del resort, incluida la piscina, el acceso privado a la playa y el alquiler de bicicletas para explorar el Parque Natural de L’Albufera. Solo tenéis que avisar en la recepción del hotel y lo organizarán. También podéis descubrir la ciudad — consultad",
      "for our tips!": "para ver nuestras recomendaciones.",
      "Golf": "Golf",
      "Friday, 10:00–13:00h — golf licence required": "Viernes, 10:00–13:00 — se requiere licencia de golf",
      "Resort": "Resort",
      "Friday & Saturday — pool, beach access & bike hire": "Viernes y sábado — piscina, acceso a la playa y alquiler de bicicletas",
      "Friday · 9 July · 19:00": "Viernes · 9 de julio · 19:00",
      "Welcome Cocktail": "Cóctel de bienvenida",
      "Welcome cocktail": "Cóctel de bienvenida",
      "We will gather at Parador El Saler for a welcome cocktail to kick off the weekend.": "Nos reuniremos en el Parador El Saler para dar comienzo al fin de semana con un cóctel de bienvenida.",
      "Time": "Hora",
      "Where": "Lugar",
      "Dress code": "Código de vestimenta",
      "Cocktail attire": "Vestimenta de cóctel",
      "Saturday · 10 July · 19:30": "Sábado · 10 de julio · 19:30",
      "The main event. The ceremony takes place at Masía Xamandreu in Valencia at 19:30, followed by dinner, music and dancing late into the night — all at the same venue.": "El evento principal. La ceremonia tendrá lugar en Masía Xamandreu, Valencia, a las 19:30, seguida de cena, música y baile hasta bien entrada la noche, todo en el mismo lugar.",
      "Ceremony": "Ceremonia",
      "Bus there": "Autobús de ida",
      "From Parador El Saler & a second stop in Valencia (times to be confirmed)": "Desde el Parador El Saler y una segunda parada en Valencia (horarios por confirmar)",
      "Bus back": "Autobús de regreso",
      "Ready to join us?": "¿Listos para acompañarnos?",
      "Let us know which moments you'll be part of so we can plan every detail with you in mind.": "Contadnos en qué momentos nos acompañaréis para que podamos organizar cada detalle pensando en vosotros.",
      "Confirm your attendance": "Confirma tu asistencia",
      "Explore the places that mean the most to us": "Descubre los lugares que más significan para nosotros",
      "Scroll to explore": "Desliza para descubrir",
      "Illustrated watercolour map of Valencia": "Mapa ilustrado en acuarela de Valencia",
      "01 · Where Olimpia grew up": "01 · Donde creció Olimpia",
      "The town just north of Valencia where Olimpia grew up — surrounded by orange groves, quiet streets and the landscape of the Valencian huerta.": "El pueblo al norte de Valencia donde creció Olimpia, rodeado de naranjos, calles tranquilas y el paisaje de la huerta valenciana.",
      "02 · Where we will get married": "02 · Donde nos casaremos",
      "Where we will get married. A countryside estate outside Valencia, surrounded by palm trees, orange trees, cypresses, golden stone and the Mediterranean light we love so much.": "El lugar donde nos casaremos. Una finca en el campo, a las afueras de Valencia, rodeada de palmeras, naranjos, cipreses, piedra dorada y esa luz mediterránea que tanto nos gusta.",
      "03 · The heart of Valencia": "03 · El corazón de Valencia",
      "City Centre": "Centro histórico",
      "The historic centre of Valencia, with its old streets, plazas, churches, markets and terraces. This is the Valencia of wandering, stopping for coffee, and discovering the city slowly.": "El centro histórico de Valencia, con sus calles antiguas, plazas, iglesias, mercados y terrazas. Es la Valencia para pasear, parar a tomar un café y descubrir la ciudad sin prisa.",
      "04 · By the sea": "04 · Junto al mar",
      "Historically the fishermen's area, today it is an integral part of the city — colourful, lively and closely tied to Valencia's Mediterranean identity.": "Históricamente el barrio de pescadores, hoy es una parte esencial de la ciudad: colorida, animada y muy vinculada a la identidad mediterránea de Valencia.",
      "05 · Rice country": "05 · Tierra de arroz",
      "The landscape south of the city, where pine forests, dunes, rice fields and the Albufera lagoon meet. It is the birthplace of paella valenciana and one of the most special corners of Valencia.": "El paisaje al sur de la ciudad, donde se unen pinares, dunas, arrozales y la laguna de la Albufera. Es la cuna de la paella valenciana y uno de los rincones más especiales de Valencia.",
      "Discover the city": "Descubre la ciudad",
      "Things to do": "Qué hacer",
      "A few of our favourite ways to explore Valencia": "Algunas de nuestras formas favoritas de descubrir Valencia",
      "Valencia's grand civic square, framed by the elegant City Hall and historic façades.": "La gran plaza cívica de Valencia, enmarcada por el elegante Ayuntamiento y sus fachadas históricas.",
      "A modernist market filled with local produce, colourful stalls and Valencian flavours.": "Un mercado modernista lleno de productos locales, puestos coloridos y sabores valencianos.",
      "A Gothic masterpiece and former silk exchange opposite the Mercado Central.": "Una joya gótica y antigua lonja de la seda frente al Mercado Central.",
      "Cathedral & El Miguelete": "Catedral y El Miguelete",
      "Climb El Miguelete for panoramic views over Valencia's historic rooftops.": "Sube al Miguelete para disfrutar de vistas panorámicas sobre los tejados históricos de Valencia.",
      "A beautiful old-town square beside the cathedral, basilica and lively terraces.": "Una preciosa plaza del casco antiguo junto a la catedral, la basílica y animadas terrazas.",
      "Malvarrosa Beach": "Playa de la Malvarrosa",
      "Golden sand, Mediterranean views and a wide seafront promenade.": "Arena dorada, vistas al Mediterráneo y un amplio paseo marítimo.",
      "Valencia Marina": "Marina de Valencia",
      "Sailboats, waterfront terraces and contemporary architecture by the sea.": "Veleros, terrazas junto al agua y arquitectura contemporánea frente al mar.",
      "City of Arts and Sciences": "Ciudad de las Artes y las Ciencias",
      "Valencia's iconic futuristic complex, home to the Oceanogràfic and striking reflecting pools.": "El icónico complejo futurista de Valencia, con el Oceanogràfic y sus espectaculares estanques reflectantes.",
      "Where to eat": "Dónde comer",
      "Restaurant recommendations": "Restaurantes recomendados",
      "Some of our favourite places for authentic Valencian paella and a memorable meal around the city.": "Algunos de nuestros lugares favoritos para disfrutar de una auténtica paella valenciana y de una comida memorable por la ciudad.",
      "Paella restaurants": "Restaurantes de paella",
      "By the beach": "En la playa",
      "In the Albufera": "En la Albufera",
      "In the city centre": "En el centro",
      "Other restaurants": "Otros restaurantes",
      "Malvarrosa area": "Zona de la Malvarrosa",
      "City centre & nearby": "Centro y alrededores",
      "Ready for the weekend?": "¿Listos para el fin de semana?",
      "Find the full plan for Friday, Saturday and Sunday on the Event Details page.": "Consulta el programa completo del viernes, sábado y domingo en la página del programa.",
      "See Event Details": "Ver programa",
      "Wedding weekend details": "Detalles del fin de semana de la boda",
      "Helpful information": "Información útil",
      "Frequently asked questions": "Preguntas frecuentes",
      "A few practical details for the wedding weekend. We’ll keep this page updated as plans are finalised.": "Algunos detalles prácticos para el fin de semana de la boda. Mantendremos esta página actualizada a medida que se confirmen los planes.",
      "What to wear": "Qué ponerse",
      "Friday": "Viernes",
      "Cocktail attire — elegant but relaxed. Think summer evening style: linen or lightweight suits, shirts and jackets, cocktail dresses, midi dresses, or tailored sets. As we’ll be in El Saler in July, breathable fabrics for an outdoor setting are recommended": "Vestimenta de cóctel, elegante pero relajada. Pensad en un estilo de noche de verano: trajes de lino o ligeros, camisas y chaquetas, vestidos de cóctel, vestidos midi o conjuntos de sastrería. Como estaremos en El Saler en julio, recomendamos tejidos transpirables para un entorno exterior.",
      "Saturday": "Sábado",
      "Formal attire. We invite men to wear a suit and tie, and women to choose a midi dress or similarly elegant formalwear. We kindly ask guests not to wear white or similar colors.": "Vestimenta formal. Invitamos a los hombres a llevar traje y corbata, y a las mujeres a elegir un vestido midi u otra opción formal igualmente elegante. Rogamos a los invitados que no vistan de blanco ni de colores similares.",
      "Note": "Nota",
      "There will be no need for heel protections for women, as the venues are flat and the ground is covered evenly.": "No será necesario llevar protectores de tacón, ya que los espacios son llanos y el suelo está cubierto de manera uniforme.",
      "Family details": "Información para familias",
      "Children": "Niños",
      "We welcome every member of our guests’ families, however little they may be. Please just bear in mind that Saturday’s wedding celebration will continue well into the night.": "Damos la bienvenida a todos los miembros de las familias de nuestros invitados, por pequeños que sean. Solo os pedimos que tengáis en cuenta que la celebración de la boda del sábado se prolongará hasta bien entrada la noche.",
      "For recommendations for local nannies or caregivers, please contact Olimpia.": "Para recomendaciones de niñeras o cuidadores locales, poneos en contacto con Olimpia.",
      "Celebrating with us": "Celebrar con nosotros",
      "Gifts": "Regalos",
      "The best gift is your presence. If you would still like to contribute, our account details are below.": "El mejor regalo es vuestra presencia. Si aun así queréis contribuir, encontraréis nuestros datos bancarios a continuación.",
      "[IBAN details to be added]": "[Datos del IBAN por añadir]",
      "Ready to reply?": "¿Listos para responder?",
      "Once you’ve had a look through the details, please let us know if you’ll be joining us.": "Cuando hayáis revisado los detalles, decidnos si podréis acompañarnos.",
      "Go to RSVP": "Ir a confirmar asistencia",
      "Please RSVP by 1st April 2027": "Confirma tu asistencia antes del 1 de abril de 2027",
      "About you": "Sobre ti",
      "Your details": "Tus datos",
      "Please submit one RSVP per guest. If you're responding for a partner or +1, just fill it in a second time.": "Envía una confirmación por invitado. Si respondes también por tu pareja o acompañante, completa el formulario una segunda vez.",
      "Full name": "Nombre completo",
      "Email or phone": "Correo electrónico o teléfono",
      "The weekend": "El fin de semana",
      "Will you join us in Valencia?": "¿Nos acompañarás en Valencia?",
      "We'd love to know if you can make the trip. You can tell us about each specific plan below.": "Nos encantará saber si puedes venir. A continuación puedes indicarnos a qué planes te unirás.",
      "Attending weekend": "Asistencia al fin de semana",
      "Yes, I'll be there": "Sí, allí estaré",
      "Sadly can't make it": "Lamentablemente no podré ir",
      "Relaxed evening gathering at Parador El Saler.": "Encuentro relajado por la noche en el Parador El Saler.",
      "Friday cocktail": "Cóctel del viernes",
      "Yes": "Sí",
      "No": "No",
      "Friday · 9 July · Morning": "Viernes · 9 de julio · Mañana",
      "Golf tournament": "Torneo de golf",
      "Optional tournament at Parador El Saler. A golf licence is required to participate.": "Torneo opcional en el Parador El Saler. Se necesita licencia de golf para participar.",
      "Friday golf": "Golf del viernes",
      "Golf licence number": "Número de licencia de golf",
      "Ceremony & celebration": "Ceremonia y celebración",
      "The main event at Masía Xamandreu — ceremony, dinner, music and dancing.": "El evento principal en Masía Xamandreu: ceremonia, cena, música y baile.",
      "Saturday ceremony": "Ceremonia del sábado",
      "A few extras": "Algunos detalles más",
      "Anything we should know?": "¿Hay algo que debamos saber?",
      "Dietary requirements or allergies": "Necesidades alimentarias o alergias",
      "E.g. vegetarian, nut allergy": "P. ej., vegetariano, alergia a los frutos secos",
      "Anything else you'd like to share": "¿Algo más que quieras compartir?",
      "Optional": "Opcional",
      "Send RSVP": "Enviar confirmación",
      "Sending...": "Enviando...",
      "RSVP sent ✓": "Confirmación enviada ✓",
      "Please fill in your name, contact and let us know whether you can make it.": "Completa tu nombre y contacto e indícanos si podrás venir.",
      "Thank you — your RSVP has been received. We can't wait to celebrate with you!": "Gracias. Hemos recibido tu confirmación. ¡Estamos deseando celebrarlo contigo!",
      "Sorry, something went wrong sending your RSVP. Please try again, or email us directly.": "Lo sentimos, ha ocurrido un error al enviar tu confirmación. Inténtalo de nuevo o escríbenos directamente.",
      "Valencia and El Saler": "Valencia y El Saler",
      "Plan your weekend": "Organiza tu fin de semana",
      "Where to stay": "Dónde alojarse",
      "Accommodation": "Alojamiento",
      "For those of you coming from outside the Valencian Community, we have booked room capacities at a discount at several hotels. We will send you additional information separately about these hotels and how to confirm your booking.": "Para quienes vengáis de fuera de la Comunidad Valenciana, hemos reservado habitaciones con descuento en varios hoteles. Os enviaremos por separado más información sobre estos hoteles y cómo confirmar vuestra reserva.",
      "Getting around": "Cómo desplazarse",
      "Transport within Valencia": "Transporte en Valencia",
      "We will provide transport by bus on Saturday to and from the Masía Xamandreu. Exact bus stop locations will be shared with you ahead of the date.": "El sábado ofreceremos transporte en autobús de ida y vuelta a Masía Xamandreu. Compartiremos con antelación las ubicaciones exactas de las paradas.",
      "If you are looking to do some sight seeing of the city center and your hotel is not nearby, you can rent a car — however, we recommend using taxi / Uber services since parking and maneuvering in Valencia city in the summer is not the most practical option.": "Si queréis visitar el centro y vuestro hotel no está cerca, podéis alquilar un coche; no obstante, recomendamos usar taxi o Uber, ya que aparcar y moverse en coche por Valencia en verano no es la opción más práctica.",
      "Getting to Valencia": "Cómo llegar a Valencia",
      "Flights & trains": "Vuelos y trenes",
      "We recommend flying into Valencia Airport (VLC), which has plenty of international connections. If you're travelling within Spain, high-speed trains run to Valencia Joaquín Sorolla station, just a short taxi from the city centre.": "Recomendamos volar al Aeropuerto de Valencia (VLC), que cuenta con numerosas conexiones internacionales. Si viajáis desde España, los trenes de alta velocidad llegan a la estación Valencia Joaquín Sorolla, a pocos minutos en taxi del centro.",
      "Airport": "Aeropuerto",
      "Valencia Airport (VLC) — international connections": "Aeropuerto de Valencia (VLC) — conexiones internacionales",
      "Train": "Tren",
      "Valencia Joaquín Sorolla — AVE high-speed rail": "Valencia Joaquín Sorolla — tren de alta velocidad AVE",
      "Ready to confirm?": "¿Listos para confirmar?"
    },

    fr: {
      "Our Wedding": "Notre mariage",
      "Event Details — Olimpia & Shayann": "Détails des événements — Olimpia & Shayann",
      "Travel & Stay — Olimpia & Shayann": "Voyage et hébergement — Olimpia & Shayann",
      "RSVP — Olimpia & Shayann": "Réponse — Olimpia & Shayann",
      "About Valencia — Olimpia & Shayann": "À propos de Valence — Olimpia & Shayann",
      "FAQ — Olimpia & Shayann": "Questions fréquentes — Olimpia & Shayann",
      "Olimpia and Shayann — 9 and 10 July 2027 — Home": "Olimpia et Shayann — 9 et 10 juillet 2027 — Accueil",
      "9 & 10 July 2027": "9 et 10 juillet 2027",
      "Open navigation menu": "Ouvrir le menu de navigation",
      "Close navigation menu": "Fermer le menu de navigation",
      "Primary navigation": "Navigation principale",
      "Language": "Langue",
      "Home": "Accueil",
      "Event Details": "Détails des événements",
      "Travel & Stay": "Voyage et hébergement",
      "RSVP": "Réponse",
      "About Valencia": "À propos de Valence",
      "FAQ": "Questions fréquentes",
      "Olimpia and Shayann photo gallery": "Galerie photo d’Olimpia et Shayann",
      "Olimpia and Shayann": "Olimpia et Shayann",
      "Show previous photo": "Afficher la photo précédente",
      "Show next photo": "Afficher la photo suivante",
      "9–11th July 2027 · Valencia, Spain": "9–11 juillet 2027 · Valence, Espagne",
      "We cannot wait to share this special day with our family and friends.": "Nous avons hâte de partager cette journée si spéciale avec notre famille et nos amis.",
      "On this website, you will find all the information about our wedding weekend and the RSVP questionnaire for you to complete.": "Vous trouverez sur ce site toutes les informations concernant le week-end de notre mariage ainsi que le formulaire de réponse à remplir.",
      "Confirm Your Attendance": "Confirmer votre présence",
      "Explore the Weekend": "Découvrir le week-end",
      "Reach out to us if you have any questions": "Contactez-nous si vous avez des questions",
      "9, 10 and 11 July 2027 · Valencia, Spain": "9, 10 et 11 juillet 2027 · Valence, Espagne",
      "Agenda for the weekend": "Programme du week-end",
      "Days": "Jours",
      "Hours": "Heures",
      "Minutes": "Minutes",
      "Seconds": "Secondes",
      "Friday · 9 July": "Vendredi · 9 juillet",
      "Golf, Activities & Cocktail": "Golf, activités et cocktail",
      "Optional golf and resort activities during the day, followed by a welcome cocktail at Parador El Saler": "Golf et activités facultatives au resort pendant la journée, suivis d’un cocktail de bienvenue au Parador El Saler",
      "Saturday · 10 July": "Samedi · 10 juillet",
      "Ceremony & Celebration": "Cérémonie et célébration",
      "Ceremony at 19:30h at Masía Xamandreu.": "Cérémonie à 19 h 30 à la Masía Xamandreu.",
      "Golf at Parador El Saler": "Golf au Parador El Saler",
      "Resort activities at Parador El Saler": "Activités du resort au Parador El Saler",
      "Friday & Saturday · 9–10 July · Daytime · Optional": "Vendredi et samedi · 9–10 juillet · En journée · Facultatif",
      "Golf, Other Resort Activities & Visiting Valencia": "Golf, autres activités du resort et visite de Valence",
      "On Friday, we will host an optional golf tournament at Parador El Saler from 10:00–13:00h — sign up if you would like to! Everyone is welcome; you will just need to submit your golf licence number. Alternatively, whether you are staying at the hotel or not, you can enjoy the resort facilities, including the pool, private beach access and bike hire to explore L’Albufera Natural Park. Simply let the hotel reception know and they will arrange this for you. You can also explore the city — see": "Vendredi, nous organiserons un tournoi de golf facultatif au Parador El Saler de 10 h à 13 h — inscrivez-vous si cela vous tente ! Tout le monde est bienvenu ; il vous suffira d’indiquer votre numéro de licence de golf. Que vous séjourniez ou non à l’hôtel, vous pouvez également profiter des installations du resort : piscine, accès privé à la plage et location de vélos pour explorer le parc naturel de L’Albufera. Prévenez simplement la réception, qui organisera cela pour vous. Vous pouvez aussi découvrir la ville — consultez",
      "for our tips!": "pour découvrir nos conseils !",
      "Golf": "Golf",
      "Friday, 10:00–13:00h — golf licence required": "Vendredi, 10 h–13 h — licence de golf obligatoire",
      "Resort": "Resort",
      "Friday & Saturday — pool, beach access & bike hire": "Vendredi et samedi — piscine, accès à la plage et location de vélos",
      "Friday · 9 July · 19:00": "Vendredi · 9 juillet · 19 h",
      "Welcome Cocktail": "Cocktail de bienvenue",
      "Welcome cocktail": "Cocktail de bienvenue",
      "We will gather at Parador El Saler for a welcome cocktail to kick off the weekend.": "Nous nous retrouverons au Parador El Saler autour d’un cocktail de bienvenue pour lancer le week-end.",
      "Time": "Heure",
      "Where": "Lieu",
      "Dress code": "Tenue vestimentaire",
      "Cocktail attire": "Tenue de cocktail",
      "Saturday · 10 July · 19:30": "Samedi · 10 juillet · 19 h 30",
      "The main event. The ceremony takes place at Masía Xamandreu in Valencia at 19:30, followed by dinner, music and dancing late into the night — all at the same venue.": "L’événement principal. La cérémonie aura lieu à la Masía Xamandreu, à Valence, à 19 h 30, suivie du dîner, de musique et de danse jusque tard dans la nuit, le tout au même endroit.",
      "Ceremony": "Cérémonie",
      "Bus there": "Bus aller",
      "From Parador El Saler & a second stop in Valencia (times to be confirmed)": "Depuis le Parador El Saler et un second arrêt à Valence (horaires à confirmer)",
      "Bus back": "Bus retour",
      "Ready to join us?": "Prêts à nous rejoindre ?",
      "Let us know which moments you'll be part of so we can plan every detail with you in mind.": "Dites-nous à quels moments vous serez des nôtres afin que nous puissions organiser chaque détail en pensant à vous.",
      "Confirm your attendance": "Confirmer votre présence",
      "Explore the places that mean the most to us": "Découvrez les lieux qui comptent le plus pour nous",
      "Scroll to explore": "Faites défiler pour découvrir",
      "Illustrated watercolour map of Valencia": "Carte illustrée à l’aquarelle de Valence",
      "01 · Where Olimpia grew up": "01 · Là où Olimpia a grandi",
      "The town just north of Valencia where Olimpia grew up — surrounded by orange groves, quiet streets and the landscape of the Valencian huerta.": "La ville au nord de Valence où Olimpia a grandi, entourée d’orangers, de rues paisibles et des paysages de la huerta valencienne.",
      "02 · Where we will get married": "02 · Là où nous nous marierons",
      "Where we will get married. A countryside estate outside Valencia, surrounded by palm trees, orange trees, cypresses, golden stone and the Mediterranean light we love so much.": "Le lieu de notre mariage. Un domaine à la campagne, aux portes de Valence, entouré de palmiers, d’orangers, de cyprès, de pierre dorée et de cette lumière méditerranéenne que nous aimons tant.",
      "03 · The heart of Valencia": "03 · Le cœur de Valence",
      "City Centre": "Centre-ville",
      "The historic centre of Valencia, with its old streets, plazas, churches, markets and terraces. This is the Valencia of wandering, stopping for coffee, and discovering the city slowly.": "Le centre historique de Valence, avec ses vieilles rues, ses places, ses églises, ses marchés et ses terrasses. C’est la Valence où l’on flâne, s’arrête pour un café et découvre la ville doucement.",
      "04 · By the sea": "04 · Au bord de la mer",
      "Historically the fishermen's area, today it is an integral part of the city — colourful, lively and closely tied to Valencia's Mediterranean identity.": "Ancien quartier des pêcheurs, il fait aujourd’hui partie intégrante de la ville : coloré, animé et profondément lié à l’identité méditerranéenne de Valence.",
      "05 · Rice country": "05 · Le pays du riz",
      "The landscape south of the city, where pine forests, dunes, rice fields and the Albufera lagoon meet. It is the birthplace of paella valenciana and one of the most special corners of Valencia.": "Le paysage au sud de la ville, où se rencontrent pinèdes, dunes, rizières et lagune de l’Albufera. C’est le berceau de la paella valencienne et l’un des endroits les plus particuliers de Valence.",
      "Discover the city": "Découvrir la ville",
      "Things to do": "À faire",
      "A few of our favourite ways to explore Valencia": "Quelques-unes de nos façons préférées de découvrir Valence",
      "Valencia's grand civic square, framed by the elegant City Hall and historic façades.": "La grande place civique de Valence, bordée par l’élégant Hôtel de Ville et ses façades historiques.",
      "A modernist market filled with local produce, colourful stalls and Valencian flavours.": "Un marché moderniste rempli de produits locaux, d’étals colorés et de saveurs valenciennes.",
      "A Gothic masterpiece and former silk exchange opposite the Mercado Central.": "Un chef-d’œuvre gothique et ancienne bourse de la soie face au Mercado Central.",
      "Cathedral & El Miguelete": "Cathédrale et El Miguelete",
      "Climb El Miguelete for panoramic views over Valencia's historic rooftops.": "Montez au Miguelete pour admirer les toits historiques de Valence.",
      "A beautiful old-town square beside the cathedral, basilica and lively terraces.": "Une magnifique place de la vieille ville près de la cathédrale, de la basilique et de terrasses animées.",
      "Malvarrosa Beach": "Plage de la Malvarrosa",
      "Golden sand, Mediterranean views and a wide seafront promenade.": "Sable doré, vues sur la Méditerranée et vaste promenade en bord de mer.",
      "Valencia Marina": "Marina de Valence",
      "Sailboats, waterfront terraces and contemporary architecture by the sea.": "Voiliers, terrasses au bord de l’eau et architecture contemporaine face à la mer.",
      "City of Arts and Sciences": "Cité des arts et des sciences",
      "Valencia's iconic futuristic complex, home to the Oceanogràfic and striking reflecting pools.": "Le complexe futuriste emblématique de Valence, avec l’Oceanogràfic et ses impressionnants bassins réfléchissants.",
      "Where to eat": "Où manger",
      "Restaurant recommendations": "Nos recommandations de restaurants",
      "Some of our favourite places for authentic Valencian paella and a memorable meal around the city.": "Quelques-unes de nos adresses préférées pour savourer une authentique paella valencienne et passer un excellent moment en ville.",
      "Paella restaurants": "Restaurants de paella",
      "By the beach": "Au bord de la plage",
      "In the Albufera": "Dans l’Albufera",
      "In the city centre": "Dans le centre-ville",
      "Other restaurants": "Autres restaurants",
      "Malvarrosa area": "Quartier de la Malvarrosa",
      "City centre & nearby": "Centre-ville et alentours",
      "Ready for the weekend?": "Prêts pour le week-end ?",
      "Find the full plan for Friday, Saturday and Sunday on the Event Details page.": "Retrouvez le programme complet du vendredi, du samedi et du dimanche sur la page consacrée aux événements.",
      "See Event Details": "Voir les détails des événements",
      "Wedding weekend details": "Détails du week-end de mariage",
      "Helpful information": "Informations utiles",
      "Frequently asked questions": "Questions fréquentes",
      "A few practical details for the wedding weekend. We’ll keep this page updated as plans are finalised.": "Quelques informations pratiques pour le week-end du mariage. Nous mettrons cette page à jour à mesure que les détails seront confirmés.",
      "What to wear": "Comment s’habiller",
      "Friday": "Vendredi",
      "Cocktail attire — elegant but relaxed. Think summer evening style: linen or lightweight suits, shirts and jackets, cocktail dresses, midi dresses, or tailored sets. As we’ll be in El Saler in July, breathable fabrics for an outdoor setting are recommended": "Tenue de cocktail, élégante mais décontractée. Pensez soirée d’été : costumes en lin ou légers, chemises et vestes, robes de cocktail, robes midi ou ensembles habillés. Comme nous serons à El Saler en juillet, nous recommandons des tissus respirants adaptés à l’extérieur.",
      "Saturday": "Samedi",
      "Formal attire. We invite men to wear a suit and tie, and women to choose a midi dress or similarly elegant formalwear. We kindly ask guests not to wear white or similar colors.": "Tenue habillée. Nous invitons les hommes à porter un costume et une cravate, et les femmes à choisir une robe midi ou une tenue formelle tout aussi élégante. Nous demandons gentiment à nos invités de ne pas porter de blanc ni de couleurs similaires.",
      "Note": "À noter",
      "There will be no need for heel protections for women, as the venues are flat and the ground is covered evenly.": "Les protections de talons ne seront pas nécessaires, car les lieux sont plats et le sol est uniformément couvert.",
      "Family details": "Informations pour les familles",
      "Children": "Enfants",
      "We welcome every member of our guests’ families, however little they may be. Please just bear in mind that Saturday’s wedding celebration will continue well into the night.": "Nous accueillons avec plaisir tous les membres des familles de nos invités, même les plus petits. Gardez simplement à l’esprit que la célébration du mariage le samedi se prolongera jusque tard dans la nuit.",
      "For recommendations for local nannies or caregivers, please contact Olimpia.": "Pour des recommandations de nounous ou de personnes de garde sur place, veuillez contacter Olimpia.",
      "Celebrating with us": "Célébrer avec nous",
      "Gifts": "Cadeaux",
      "The best gift is your presence. If you would still like to contribute, our account details are below.": "Le plus beau cadeau est votre présence. Si vous souhaitez tout de même contribuer, vous trouverez nos coordonnées bancaires ci-dessous.",
      "[IBAN details to be added]": "[Coordonnées IBAN à ajouter]",
      "Ready to reply?": "Prêts à répondre ?",
      "Once you’ve had a look through the details, please let us know if you’ll be joining us.": "Après avoir consulté les informations, dites-nous si vous serez des nôtres.",
      "Go to RSVP": "Répondre à l’invitation",
      "Please RSVP by 1st April 2027": "Merci de répondre avant le 1er avril 2027",
      "About you": "À propos de vous",
      "Your details": "Vos coordonnées",
      "Please submit one RSVP per guest. If you're responding for a partner or +1, just fill it in a second time.": "Merci d’envoyer une réponse par invité. Si vous répondez aussi pour votre partenaire ou accompagnant, remplissez simplement le formulaire une seconde fois.",
      "Full name": "Nom complet",
      "Email or phone": "E-mail ou téléphone",
      "The weekend": "Le week-end",
      "Will you join us in Valencia?": "Serez-vous des nôtres à Valence ?",
      "We'd love to know if you can make the trip. You can tell us about each specific plan below.": "Nous aimerions savoir si vous pourrez faire le voyage. Vous pouvez préciser ci-dessous les moments auxquels vous participerez.",
      "Attending weekend": "Présence pendant le week-end",
      "Yes, I'll be there": "Oui, je serai là",
      "Sadly can't make it": "Malheureusement, je ne pourrai pas venir",
      "Relaxed evening gathering at Parador El Saler.": "Soirée détendue au Parador El Saler.",
      "Friday cocktail": "Cocktail du vendredi",
      "Yes": "Oui",
      "No": "Non",
      "Friday · 9 July · Morning": "Vendredi · 9 juillet · Matin",
      "Golf tournament": "Tournoi de golf",
      "Optional tournament at Parador El Saler. A golf licence is required to participate.": "Tournoi facultatif au Parador El Saler. Une licence de golf est nécessaire pour participer.",
      "Friday golf": "Golf du vendredi",
      "Golf licence number": "Numéro de licence de golf",
      "Ceremony & celebration": "Cérémonie et célébration",
      "The main event at Masía Xamandreu — ceremony, dinner, music and dancing.": "L’événement principal à la Masía Xamandreu : cérémonie, dîner, musique et danse.",
      "Saturday ceremony": "Cérémonie du samedi",
      "A few extras": "Quelques détails en plus",
      "Anything we should know?": "Y a-t-il quelque chose que nous devrions savoir ?",
      "Dietary requirements or allergies": "Régimes alimentaires ou allergies",
      "E.g. vegetarian, nut allergy": "Par ex. végétarien, allergie aux fruits à coque",
      "Anything else you'd like to share": "Autre chose que vous souhaitez partager",
      "Optional": "Facultatif",
      "Send RSVP": "Envoyer la réponse",
      "Sending...": "Envoi en cours…",
      "RSVP sent ✓": "Réponse envoyée ✓",
      "Please fill in your name, contact and let us know whether you can make it.": "Indiquez votre nom, vos coordonnées et dites-nous si vous pourrez venir.",
      "Thank you — your RSVP has been received. We can't wait to celebrate with you!": "Merci, votre réponse a bien été reçue. Nous avons hâte de célébrer avec vous !",
      "Sorry, something went wrong sending your RSVP. Please try again, or email us directly.": "Désolés, une erreur s’est produite lors de l’envoi. Réessayez ou contactez-nous directement par e-mail.",
      "Valencia and El Saler": "Valence et El Saler",
      "Plan your weekend": "Organisez votre week-end",
      "Where to stay": "Où séjourner",
      "Accommodation": "Hébergement",
      "For those of you coming from outside the Valencian Community, we have booked room capacities at a discount at several hotels. We will send you additional information separately about these hotels and how to confirm your booking.": "Pour ceux qui viennent de l’extérieur de la Communauté valencienne, nous avons réservé des chambres à tarif préférentiel dans plusieurs hôtels. Nous vous enverrons séparément des informations complémentaires sur ces hôtels et la manière de confirmer votre réservation.",
      "Getting around": "Se déplacer",
      "Transport within Valencia": "Transports à Valence",
      "We will provide transport by bus on Saturday to and from the Masía Xamandreu. Exact bus stop locations will be shared with you ahead of the date.": "Nous assurerons le transport en bus le samedi, à l’aller comme au retour de la Masía Xamandreu. Les emplacements précis des arrêts vous seront communiqués avant la date.",
      "If you are looking to do some sight seeing of the city center and your hotel is not nearby, you can rent a car — however, we recommend using taxi / Uber services since parking and maneuvering in Valencia city in the summer is not the most practical option.": "Si vous souhaitez visiter le centre-ville et que votre hôtel n’est pas à proximité, vous pouvez louer une voiture. Nous recommandons toutefois les taxis ou Uber, car se garer et circuler en voiture dans Valence en été n’est pas très pratique.",
      "Getting to Valencia": "Venir à Valence",
      "Flights & trains": "Vols et trains",
      "We recommend flying into Valencia Airport (VLC), which has plenty of international connections. If you're travelling within Spain, high-speed trains run to Valencia Joaquín Sorolla station, just a short taxi from the city centre.": "Nous recommandons d’atterrir à l’aéroport de Valence (VLC), qui offre de nombreuses liaisons internationales. Si vous voyagez depuis l’Espagne, les trains à grande vitesse arrivent à la gare de Valencia Joaquín Sorolla, à quelques minutes en taxi du centre-ville.",
      "Airport": "Aéroport",
      "Valencia Airport (VLC) — international connections": "Aéroport de Valence (VLC) — liaisons internationales",
      "Train": "Train",
      "Valencia Joaquín Sorolla — AVE high-speed rail": "Valencia Joaquín Sorolla — train à grande vitesse AVE",
      "Ready to confirm?": "Prêts à confirmer ?"
    },

    fa: {
      "Our Wedding": "عروسی ما",
      "Event Details — Olimpia & Shayann": "جزئیات مراسم — اولیمپیا و شایان",
      "Travel & Stay — Olimpia & Shayann": "سفر و اقامت — اولیمپیا و شایان",
      "RSVP — Olimpia & Shayann": "پاسخ دعوت — اولیمپیا و شایان",
      "About Valencia — Olimpia & Shayann": "درباره والنسیا — اولیمپیا و شایان",
      "FAQ — Olimpia & Shayann": "پرسش‌های متداول — اولیمپیا و شایان",
      "Olimpia and Shayann — 9 and 10 July 2027 — Home": "اولیمپیا و شایان — ۹ و ۱۰ ژوئیه ۲۰۲۷ — خانه",
      "Olimpia & Shayann": "اولیمپیا و شایان",
      "9 & 10 July 2027": "۹ و ۱۰ ژوئیه ۲۰۲۷",
      "Open navigation menu": "باز کردن منوی پیمایش",
      "Close navigation menu": "بستن منوی پیمایش",
      "Primary navigation": "پیمایش اصلی",
      "Language": "زبان",
      "Home": "خانه",
      "Event Details": "جزئیات مراسم",
      "Travel & Stay": "سفر و اقامت",
      "RSVP": "پاسخ دعوت",
      "About Valencia": "درباره والنسیا",
      "FAQ": "پرسش‌های متداول",
      "Olimpia and Shayann photo gallery": "گالری عکس اولیمپیا و شایان",
      "Olimpia and Shayann": "اولیمپیا و شایان",
      "Show previous photo": "نمایش عکس قبلی",
      "Show next photo": "نمایش عکس بعدی",
      "9–11th July 2027 · Valencia, Spain": "۹ تا ۱۱ ژوئیه ۲۰۲۷ · والنسیا، اسپانیا",
      "We cannot wait to share this special day with our family and friends.": "بی‌صبرانه منتظریم این روز ویژه را با خانواده و دوستان‌مان شریک شویم.",
      "On this website, you will find all the information about our wedding weekend and the RSVP questionnaire for you to complete.": "در این وب‌سایت تمام اطلاعات مربوط به آخرهفته عروسی و فرم پاسخ دعوت را خواهید یافت.",
      "Confirm Your Attendance": "حضور خود را تأیید کنید",
      "Explore the Weekend": "برنامه آخرهفته را ببینید",
      "Reach out to us if you have any questions": "اگر پرسشی دارید با ما تماس بگیرید",
      "9, 10 and 11 July 2027 · Valencia, Spain": "۹، ۱۰ و ۱۱ ژوئیه ۲۰۲۷ · والنسیا، اسپانیا",
      "Agenda for the weekend": "برنامه آخرهفته",
      "Days": "روز",
      "Hours": "ساعت",
      "Minutes": "دقیقه",
      "Seconds": "ثانیه",
      "Friday · 9 July": "جمعه · ۹ ژوئیه",
      "Golf, Activities & Cocktail": "گلف، فعالیت‌ها و مهمانی نوشیدنی",
      "Optional golf and resort activities during the day, followed by a welcome cocktail at Parador El Saler": "گلف و فعالیت‌های اختیاری اقامتگاه در طول روز، سپس مهمانی خوشامدگویی در پارادور ال سالر",
      "Saturday · 10 July": "شنبه · ۱۰ ژوئیه",
      "Ceremony & Celebration": "مراسم و جشن",
      "Ceremony at 19:30h at Masía Xamandreu.": "مراسم ساعت ۱۹:۳۰ در ماسیا خاماندرو برگزار می‌شود.",
      "Golf at Parador El Saler": "گلف در پارادور ال سالر",
      "Resort activities at Parador El Saler": "فعالیت‌های اقامتگاه در پارادور ال سالر",
      "Friday & Saturday · 9–10 July · Daytime · Optional": "جمعه و شنبه · ۹ تا ۱۰ ژوئیه · روز · اختیاری",
      "Golf, Other Resort Activities & Visiting Valencia": "گلف، دیگر فعالیت‌های اقامتگاه و گردش در والنسیا",
      "On Friday, we will host an optional golf tournament at Parador El Saler from 10:00–13:00h — sign up if you would like to! Everyone is welcome; you will just need to submit your golf licence number. Alternatively, whether you are staying at the hotel or not, you can enjoy the resort facilities, including the pool, private beach access and bike hire to explore L’Albufera Natural Park. Simply let the hotel reception know and they will arrange this for you. You can also explore the city — see": "روز جمعه از ساعت ۱۰:۰۰ تا ۱۳:۰۰ یک مسابقه گلف اختیاری در پارادور ال سالر برگزار می‌کنیم؛ اگر مایل هستید ثبت‌نام کنید! همه خوش‌آمدند و فقط کافی است شماره مجوز گلف خود را وارد کنید. چه در هتل اقامت داشته باشید چه نه، می‌توانید از امکانات اقامتگاه، از جمله استخر، دسترسی اختصاصی به ساحل و کرایه دوچرخه برای گردش در پارک طبیعی آل‌بوفرا استفاده کنید. کافی است به پذیرش هتل اطلاع دهید تا هماهنگ کنند. همچنین می‌توانید شهر را بگردید؛ برای پیشنهادهای ما به صفحه",
      "for our tips!": "مراجعه کنید.",
      "Golf": "گلف",
      "Friday, 10:00–13:00h — golf licence required": "جمعه، ۱۰:۰۰ تا ۱۳:۰۰ — مجوز گلف الزامی است",
      "Resort": "اقامتگاه",
      "Friday & Saturday — pool, beach access & bike hire": "جمعه و شنبه — استخر، دسترسی به ساحل و کرایه دوچرخه",
      "Friday · 9 July · 19:00": "جمعه · ۹ ژوئیه · ۱۹:۰۰",
      "Welcome Cocktail": "مهمانی خوشامدگویی",
      "Welcome cocktail": "مهمانی خوشامدگویی",
      "We will gather at Parador El Saler for a welcome cocktail to kick off the weekend.": "برای آغاز آخرهفته در پارادور ال سالر دور هم جمع می‌شویم و مهمانی خوشامدگویی خواهیم داشت.",
      "Time": "زمان",
      "Where": "مکان",
      "Dress code": "نوع پوشش",
      "Cocktail attire": "پوشش مهمانی",
      "Saturday · 10 July · 19:30": "شنبه · ۱۰ ژوئیه · ۱۹:۳۰",
      "The main event. The ceremony takes place at Masía Xamandreu in Valencia at 19:30, followed by dinner, music and dancing late into the night — all at the same venue.": "رویداد اصلی. مراسم ساعت ۱۹:۳۰ در ماسیا خاماندرو در والنسیا برگزار می‌شود و پس از آن شام، موسیقی و رقص تا پاسی از شب، همگی در همان مکان، ادامه خواهد داشت.",
      "Ceremony": "مراسم",
      "Bus there": "اتوبوس رفت",
      "From Parador El Saler & a second stop in Valencia (times to be confirmed)": "از پارادور ال سالر و یک ایستگاه دیگر در والنسیا (زمان‌ها بعداً اعلام می‌شود)",
      "Bus back": "اتوبوس برگشت",
      "Ready to join us?": "آماده‌اید به ما بپیوندید؟",
      "Let us know which moments you'll be part of so we can plan every detail with you in mind.": "به ما بگویید در کدام بخش‌ها همراه‌مان هستید تا همه جزئیات را با در نظر گرفتن شما برنامه‌ریزی کنیم.",
      "Confirm your attendance": "حضور خود را تأیید کنید",
      "Explore the places that mean the most to us": "مکان‌هایی را ببینید که برای ما بیشترین معنا را دارند",
      "Scroll to explore": "برای دیدن بیشتر پیمایش کنید",
      "Illustrated watercolour map of Valencia": "نقشه آبرنگی والنسیا",
      "01 · Where Olimpia grew up": "۰۱ · جایی که اولیمپیا بزرگ شد",
      "The town just north of Valencia where Olimpia grew up — surrounded by orange groves, quiet streets and the landscape of the Valencian huerta.": "شهری کوچک در شمال والنسیا که اولیمپیا در آن بزرگ شد؛ میان باغ‌های پرتقال، خیابان‌های آرام و چشم‌انداز هوئرتای والنسیا.",
      "02 · Where we will get married": "۰۲ · جایی که ازدواج می‌کنیم",
      "Where we will get married. A countryside estate outside Valencia, surrounded by palm trees, orange trees, cypresses, golden stone and the Mediterranean light we love so much.": "محل برگزاری عروسی ما؛ ملکی روستایی در بیرون والنسیا، میان نخل‌ها، درختان پرتقال، سروها، سنگ‌های طلایی و نور مدیترانه‌ای که بسیار دوستش داریم.",
      "03 · The heart of Valencia": "۰۳ · قلب والنسیا",
      "City Centre": "مرکز شهر",
      "The historic centre of Valencia, with its old streets, plazas, churches, markets and terraces. This is the Valencia of wandering, stopping for coffee, and discovering the city slowly.": "مرکز تاریخی والنسیا با خیابان‌های قدیمی، میدان‌ها، کلیساها، بازارها و کافه‌های روباز؛ جایی برای قدم‌زدن، نوشیدن قهوه و کشف آرام شهر.",
      "04 · By the sea": "۰۴ · کنار دریا",
      "Historically the fishermen's area, today it is an integral part of the city — colourful, lively and closely tied to Valencia's Mediterranean identity.": "این منطقه که زمانی محله ماهیگیران بود، امروز بخشی جدایی‌ناپذیر از شهر است؛ رنگارنگ، پرجنب‌وجوش و پیوندخورده با هویت مدیترانه‌ای والنسیا.",
      "05 · Rice country": "۰۵ · سرزمین برنج",
      "The landscape south of the city, where pine forests, dunes, rice fields and the Albufera lagoon meet. It is the birthplace of paella valenciana and one of the most special corners of Valencia.": "چشم‌انداز جنوب شهر، جایی که جنگل‌های کاج، تپه‌های شنی، شالیزارها و تالاب آل‌بوفرا به هم می‌رسند. زادگاه پائیا والنسیا و یکی از خاص‌ترین گوشه‌های این منطقه است.",
      "Discover the city": "شهر را کشف کنید",
      "Things to do": "دیدنی‌ها و فعالیت‌ها",
      "A few of our favourite ways to explore Valencia": "چند روش محبوب ما برای گشت‌وگذار در والنسیا",
      "Valencia's grand civic square, framed by the elegant City Hall and historic façades.": "میدان باشکوه شهری والنسیا، در میان ساختمان زیبای شهرداری و نماهای تاریخی.",
      "A modernist market filled with local produce, colourful stalls and Valencian flavours.": "بازاری مدرنیستی با محصولات محلی، غرفه‌های رنگارنگ و طعم‌های والنسیا.",
      "A Gothic masterpiece and former silk exchange opposite the Mercado Central.": "شاهکاری گوتیک و بازار تاریخی ابریشم روبه‌روی بازار مرکزی.",
      "Cathedral & El Miguelete": "کلیسای جامع و ال میگِلته",
      "Climb El Miguelete for panoramic views over Valencia's historic rooftops.": "از ال میگِلته بالا بروید و چشم‌انداز بام‌های تاریخی والنسیا را تماشا کنید.",
      "A beautiful old-town square beside the cathedral, basilica and lively terraces.": "میدانی زیبا در شهر قدیم، کنار کلیسای جامع، باسیلیکا و کافه‌های پرجنب‌وجوش.",
      "Malvarrosa Beach": "ساحل مالواروسا",
      "Golden sand, Mediterranean views and a wide seafront promenade.": "شن‌های طلایی، چشم‌انداز مدیترانه و تفرجگاهی وسیع در کنار دریا.",
      "Valencia Marina": "مارینای والنسیا",
      "Sailboats, waterfront terraces and contemporary architecture by the sea.": "قایق‌های بادبانی، تراس‌های کنار آب و معماری معاصر در ساحل.",
      "City of Arts and Sciences": "شهر هنر و علوم",
      "Valencia's iconic futuristic complex, home to the Oceanogràfic and striking reflecting pools.": "مجموعه آینده‌نگر و نمادین والنسیا، شامل اقیانوس‌نگار و حوض‌های بازتابی چشمگیر.",
      "Where to eat": "کجا غذا بخوریم",
      "Restaurant recommendations": "رستوران‌های پیشنهادی",
      "Some of our favourite places for authentic Valencian paella and a memorable meal around the city.": "چند مکان محبوب ما برای پائیای اصیل والنسیا و یک وعده به‌یادماندنی در شهر.",
      "Paella restaurants": "رستوران‌های پائیا",
      "By the beach": "کنار ساحل",
      "In the Albufera": "در آل‌بوفرا",
      "In the city centre": "در مرکز شهر",
      "Other restaurants": "رستوران‌های دیگر",
      "Malvarrosa area": "منطقه مالواروسا",
      "City centre & nearby": "مرکز شهر و اطراف",
      "Ready for the weekend?": "برای آخرهفته آماده‌اید؟",
      "Find the full plan for Friday, Saturday and Sunday on the Event Details page.": "برنامه کامل جمعه، شنبه و یکشنبه را در صفحه جزئیات مراسم ببینید.",
      "See Event Details": "مشاهده جزئیات مراسم",
      "Wedding weekend details": "جزئیات آخرهفته عروسی",
      "Helpful information": "اطلاعات کاربردی",
      "Frequently asked questions": "پرسش‌های متداول",
      "A few practical details for the wedding weekend. We’ll keep this page updated as plans are finalised.": "چند نکته کاربردی برای آخرهفته عروسی. با نهایی‌شدن برنامه‌ها این صفحه را به‌روز می‌کنیم.",
      "What to wear": "چه بپوشیم",
      "Friday": "جمعه",
      "Cocktail attire — elegant but relaxed. Think summer evening style: linen or lightweight suits, shirts and jackets, cocktail dresses, midi dresses, or tailored sets. As we’ll be in El Saler in July, breathable fabrics for an outdoor setting are recommended": "پوشش مهمانی، شیک اما راحت. حال‌وهوای یک شب تابستانی را در نظر بگیرید: کت‌وشلوار کتانی یا سبک، پیراهن و کت، لباس مهمانی، لباس میدی یا ست‌های رسمی. چون در ماه ژوئیه در ال سالر خواهیم بود، پارچه‌های خنک و مناسب فضای باز پیشنهاد می‌شود.",
      "Saturday": "شنبه",
      "Formal attire. We invite men to wear a suit and tie, and women to choose a midi dress or similarly elegant formalwear. We kindly ask guests not to wear white or similar colors.": "پوشش رسمی. از آقایان دعوت می‌کنیم کت‌وشلوار و کراوات بپوشند و خانم‌ها لباس میدی یا پوششی رسمی و شیک انتخاب کنند. خواهشمندیم مهمانان از پوشیدن سفید یا رنگ‌های مشابه خودداری کنند.",
      "Note": "توجه",
      "There will be no need for heel protections for women, as the venues are flat and the ground is covered evenly.": "نیازی به محافظ پاشنه نیست، زیرا محل‌ها هموارند و سطح زمین به‌طور یکنواخت پوشیده شده است.",
      "Family details": "اطلاعات خانواده‌ها",
      "Children": "کودکان",
      "We welcome every member of our guests’ families, however little they may be. Please just bear in mind that Saturday’s wedding celebration will continue well into the night.": "از همه اعضای خانواده مهمانان‌مان، حتی کوچک‌ترین آن‌ها، با آغوش باز استقبال می‌کنیم. فقط لطفاً در نظر داشته باشید که جشن عروسی روز شنبه تا پاسی از شب ادامه خواهد داشت.",
      "For recommendations for local nannies or caregivers, please contact Olimpia.": "برای معرفی پرستار کودک یا مراقب محلی، لطفاً با اولیمپیا تماس بگیرید.",
      "Celebrating with us": "جشن همراه ما",
      "Gifts": "هدایا",
      "The best gift is your presence. If you would still like to contribute, our account details are below.": "بهترین هدیه حضور شماست. اگر همچنان مایل به مشارکت هستید، اطلاعات حساب ما در ادامه آمده است.",
      "[IBAN details to be added]": "[اطلاعات IBAN بعداً افزوده می‌شود]",
      "Ready to reply?": "آماده پاسخ‌دادن هستید؟",
      "Once you’ve had a look through the details, please let us know if you’ll be joining us.": "پس از مرور جزئیات، لطفاً به ما بگویید که آیا همراه‌مان خواهید بود.",
      "Go to RSVP": "رفتن به پاسخ دعوت",
      "Please RSVP by 1st April 2027": "لطفاً تا ۱ آوریل ۲۰۲۷ پاسخ دهید",
      "About you": "درباره شما",
      "Your details": "مشخصات شما",
      "Please submit one RSVP per guest. If you're responding for a partner or +1, just fill it in a second time.": "لطفاً برای هر مهمان یک پاسخ جداگانه ارسال کنید. اگر برای همسر یا همراه خود نیز پاسخ می‌دهید، فرم را بار دوم تکمیل کنید.",
      "Full name": "نام کامل",
      "Email or phone": "ایمیل یا تلفن",
      "The weekend": "آخرهفته",
      "Will you join us in Valencia?": "آیا در والنسیا به ما می‌پیوندید؟",
      "We'd love to know if you can make the trip. You can tell us about each specific plan below.": "خوشحال می‌شویم بدانیم آیا می‌توانید سفر کنید. در ادامه می‌توانید حضور خود را برای هر برنامه مشخص کنید.",
      "Attending weekend": "حضور در آخرهفته",
      "Yes, I'll be there": "بله، حضور خواهم داشت",
      "Sadly can't make it": "متأسفانه نمی‌توانم بیایم",
      "Relaxed evening gathering at Parador El Saler.": "دورهمی آرام شبانه در پارادور ال سالر.",
      "Friday cocktail": "مهمانی جمعه",
      "Yes": "بله",
      "No": "خیر",
      "Friday · 9 July · Morning": "جمعه · ۹ ژوئیه · صبح",
      "Golf tournament": "مسابقه گلف",
      "Optional tournament at Parador El Saler. A golf licence is required to participate.": "مسابقه اختیاری در پارادور ال سالر. برای شرکت، مجوز گلف لازم است.",
      "Friday golf": "گلف جمعه",
      "Golf licence number": "شماره مجوز گلف",
      "Ceremony & celebration": "مراسم و جشن",
      "The main event at Masía Xamandreu — ceremony, dinner, music and dancing.": "رویداد اصلی در ماسیا خاماندرو: مراسم، شام، موسیقی و رقص.",
      "Saturday ceremony": "مراسم شنبه",
      "A few extras": "چند نکته دیگر",
      "Anything we should know?": "چیزی هست که باید بدانیم؟",
      "Dietary requirements or allergies": "رژیم غذایی یا حساسیت‌ها",
      "E.g. vegetarian, nut allergy": "مثلاً گیاه‌خواری یا حساسیت به آجیل",
      "Anything else you'd like to share": "نکته دیگری هست که مایلید بگویید؟",
      "Optional": "اختیاری",
      "Send RSVP": "ارسال پاسخ",
      "Sending...": "در حال ارسال…",
      "RSVP sent ✓": "پاسخ ارسال شد ✓",
      "Please fill in your name, contact and let us know whether you can make it.": "نام و اطلاعات تماس خود را وارد کنید و بگویید آیا می‌توانید بیایید.",
      "Thank you — your RSVP has been received. We can't wait to celebrate with you!": "سپاسگزاریم؛ پاسخ شما دریافت شد. بی‌صبرانه منتظریم با شما جشن بگیریم!",
      "Sorry, something went wrong sending your RSVP. Please try again, or email us directly.": "متأسفیم، هنگام ارسال پاسخ مشکلی پیش آمد. دوباره تلاش کنید یا مستقیماً به ما ایمیل بزنید.",
      "Valencia and El Saler": "والنسیا و ال سالر",
      "Plan your weekend": "آخرهفته خود را برنامه‌ریزی کنید",
      "Where to stay": "کجا اقامت کنیم",
      "Accommodation": "اقامت",
      "For those of you coming from outside the Valencian Community, we have booked room capacities at a discount at several hotels. We will send you additional information separately about these hotels and how to confirm your booking.": "برای مهمانانی که از خارج منطقه والنسیا می‌آیند، در چند هتل اتاق‌هایی با تخفیف رزرو کرده‌ایم. اطلاعات بیشتر درباره هتل‌ها و نحوه تأیید رزرو را جداگانه ارسال خواهیم کرد.",
      "Getting around": "رفت‌وآمد",
      "Transport within Valencia": "حمل‌ونقل در والنسیا",
      "We will provide transport by bus on Saturday to and from the Masía Xamandreu. Exact bus stop locations will be shared with you ahead of the date.": "روز شنبه اتوبوس رفت‌وبرگشت به ماسیا خاماندرو فراهم خواهیم کرد. محل دقیق ایستگاه‌ها پیش از مراسم اعلام می‌شود.",
      "If you are looking to do some sight seeing of the city center and your hotel is not nearby, you can rent a car — however, we recommend using taxi / Uber services since parking and maneuvering in Valencia city in the summer is not the most practical option.": "اگر قصد گردش در مرکز شهر را دارید و هتل شما نزدیک نیست، می‌توانید خودرو کرایه کنید؛ با این حال تاکسی یا اوبر را پیشنهاد می‌کنیم، زیرا پارک‌کردن و رانندگی در والنسیا در تابستان چندان آسان نیست.",
      "Getting to Valencia": "رسیدن به والنسیا",
      "Flights & trains": "پروازها و قطارها",
      "We recommend flying into Valencia Airport (VLC), which has plenty of international connections. If you're travelling within Spain, high-speed trains run to Valencia Joaquín Sorolla station, just a short taxi from the city centre.": "پیشنهاد می‌کنیم به فرودگاه والنسیا (VLC) پرواز کنید که پروازهای بین‌المللی بسیاری دارد. اگر از داخل اسپانیا سفر می‌کنید، قطارهای سریع‌السیر به ایستگاه والنسیا خواکین سورولا می‌رسند که با تاکسی فاصله کمی تا مرکز شهر دارد.",
      "Airport": "فرودگاه",
      "Valencia Airport (VLC) — international connections": "فرودگاه والنسیا (VLC) — پروازهای بین‌المللی",
      "Train": "قطار",
      "Valencia Joaquín Sorolla — AVE high-speed rail": "والنسیا خواکین سورولا — قطار سریع‌السیر AVE",
      "Ready to confirm?": "آماده تأیید هستید؟"
    }
  };

  var originalText = new Map();
  var originalAttributes = [];
  var originalTitle = document.title;
  var currentLanguage = "en";
  var languageButton;
  var languageLabel;
  var languageMenu;

  function languageDisplay(language) {
    return {
      en: "EN",
      es: "ES",
      fr: "FR",
      fa: "فارسی"
    }[language] || "EN";
  }

  function normalise(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function getStoredLanguage() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      return SUPPORTED_LANGUAGES.indexOf(stored) !== -1 ? stored : "en";
    } catch (error) {
      return "en";
    }
  }

  function storeLanguage(language) {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      // The selector still works for the current page if storage is unavailable.
    }
  }

  function translate(source, language) {
    var key = normalise(source);
    if (language === "en" || !translations[language]) return key;
    return translations[language][key] || key;
  }

  function buildSelector() {
    var headerBar = document.querySelector(".mobile-nav-bar");
    var toggle = headerBar && headerBar.querySelector(".nav-toggle");
    if (!headerBar || !toggle || headerBar.querySelector(".language-picker")) return;

    var actions = document.createElement("div");
    actions.className = "header-actions";
    headerBar.insertBefore(actions, toggle);
    actions.appendChild(toggle);

    var picker = document.createElement("div");
    picker.className = "language-picker";

    languageButton = document.createElement("button");
    languageButton.type = "button";
    languageButton.className = "language-button";
    languageButton.setAttribute("aria-label", "Language");
    languageButton.setAttribute("aria-haspopup", "menu");
    languageButton.setAttribute("aria-expanded", "false");
    languageButton.setAttribute("aria-controls", "language-menu");

    languageLabel = document.createElement("span");
    languageLabel.className = "language-button-label";
    languageLabel.textContent = "EN";

    var chevron = document.createElement("span");
    chevron.className = "language-button-chevron";
    chevron.setAttribute("aria-hidden", "true");

    languageButton.appendChild(languageLabel);
    languageButton.appendChild(chevron);

    languageMenu = document.createElement("div");
    languageMenu.id = "language-menu";
    languageMenu.className = "language-menu";
    languageMenu.setAttribute("role", "menu");
    languageMenu.hidden = true;

    [
      ["en", "EN"],
      ["es", "ES"],
      ["fr", "FR"],
      ["fa", "فارسی"]
    ].forEach(function (optionData) {
      var option = document.createElement("button");
      option.type = "button";
      option.className = "language-option";
      option.setAttribute("role", "menuitemradio");
      option.setAttribute("data-language", optionData[0]);
      option.setAttribute("aria-checked", optionData[0] === "en" ? "true" : "false");
      option.textContent = optionData[1];
      option.addEventListener("click", function () {
        setLanguage(optionData[0], true);
        closeLanguageMenu(true);
      });
      languageMenu.appendChild(option);
    });

    languageButton.addEventListener("click", function () {
      var willOpen = languageButton.getAttribute("aria-expanded") !== "true";
      languageButton.setAttribute("aria-expanded", String(willOpen));
      languageMenu.hidden = !willOpen;
    });

    document.addEventListener("click", function (event) {
      if (!picker.contains(event.target)) closeLanguageMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && languageButton.getAttribute("aria-expanded") === "true") {
        closeLanguageMenu(true);
      }
    });

    picker.appendChild(languageButton);
    picker.appendChild(languageMenu);
    actions.appendChild(picker);
  }

  function closeLanguageMenu(returnFocus) {
    if (!languageButton || !languageMenu) return;
    languageButton.setAttribute("aria-expanded", "false");
    languageMenu.hidden = true;
    if (returnFocus) languageButton.focus();
  }

  function captureOriginalContent() {
    var walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          var parent = node.parentElement;
          if (!parent || parent.closest("script, style, noscript, svg")) {
            return NodeFilter.FILTER_REJECT;
          }
          return normalise(node.nodeValue)
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        }
      }
    );

    var node;
    while ((node = walker.nextNode())) {
      originalText.set(node, node.nodeValue);
    }

    document.querySelectorAll("[placeholder], [aria-label], [alt], [title]").forEach(function (element) {
      ["placeholder", "aria-label", "alt", "title"].forEach(function (attribute) {
        if (element.hasAttribute(attribute)) {
          originalAttributes.push({
            element: element,
            attribute: attribute,
            value: element.getAttribute(attribute)
          });
        }
      });
    });
  }

  function translatedTextValue(original, language) {
    if (language === "en") return original;
    var leading = (original.match(/^\s*/) || [""])[0];
    var trailing = (original.match(/\s*$/) || [""])[0];
    var translated = translate(original, language);
    return leading + translated + trailing;
  }

  function setLanguage(language, persist) {
    if (SUPPORTED_LANGUAGES.indexOf(language) === -1) language = "en";
    currentLanguage = language;

    document.documentElement.lang = language === "fa" ? "fa" : language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    document.title = language === "en" ? originalTitle : translate(originalTitle, language);

    originalText.forEach(function (original, node) {
      node.nodeValue = translatedTextValue(original, language);
    });

    originalAttributes.forEach(function (item) {
      item.element.setAttribute(
        item.attribute,
        language === "en" ? item.value : translate(item.value, language)
      );
    });

    if (languageLabel) languageLabel.textContent = languageDisplay(language);
    document.querySelectorAll(".language-option").forEach(function (option) {
      option.setAttribute(
        "aria-checked",
        String(option.getAttribute("data-language") === language)
      );
    });
    if (persist !== false) storeLanguage(language);

    document.dispatchEvent(
      new CustomEvent("wedding:languagechange", { detail: { language: language } })
    );
  }

  buildSelector();
  captureOriginalContent();

  window.weddingI18n = {
    getLanguage: function () { return currentLanguage; },
    setLanguage: function (language) { setLanguage(language, true); },
    t: function (source) { return translate(source, currentLanguage); }
  };

  setLanguage(getStoredLanguage(), false);
})();
