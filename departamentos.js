// Datos de los departamentos. Historias ficticias para la demo.
const departamentos = [
  {
    nombre: "San Salvador",
    lat: 13.6929,
    lng: -89.2182,
    historias: [
      { titulo: "El Cadejo de la calle Arce", texto: "Un perro negro de ojos rojos acompañaba a los noctámbulos hasta su casa, sin que nadie supiera de dónde venía." },
      { titulo: "La Llorona del puente", texto: "Cada noche se escuchaba un llanto cerca del puente. Quien se asomaba nunca volvía a hablar del tema." },
      { titulo: "La Siguanaba del Acelhuate", texto: "Una mujer hermosa aparecía a la orilla del río para atraer a los hombres solos, pero su rostro era otro al voltear." },
      { titulo: "Doña Rosa y sus pupusas", texto: "Vendía pupusas en la misma esquina por cuarenta años. Decía que nunca cerraba porque la gente siempre tenía hambre." },
      { titulo: "El Sisimite del cerro", texto: "Los campesinos contaban que este ser peludo cuidaba los árboles de la colina y se llevaba a quien los dañaba." },
      { titulo: "Don Chepe, el taxista", texto: "Juraba que su radio captaba voces de personas que ya no estaban, y pasajeros de madrugada le daban la razón." },
      { titulo: "La niña de las flores", texto: "Todas las madrugadas vendía flores en el Mercado Central. Nadie supo nunca quién le compraba tanto." },
      { titulo: "El Padre sin cabeza", texto: "Dicen que en las noches frescas caminaba frente a la catedral, buscando la cabeza que perdió hace mucho." },
      { titulo: "Lucía y las cartas", texto: "Escribía cada semana a su abuelo, que se fue a trabajar al norte. Cuando él volvió, traía todas las cartas guardadas." },
      { titulo: "El sereno del parque", texto: "Cuidaba el parque de noche con su linterna. Los vecinos decían que las luces de los faroles encendían cuando él pasaba." },
      { titulo: "Don Julio y el silbato", texto: "Cada tarde escuchaba el silbato del tren desde su patio. Un día el tren dejó de pasar, pero él siguió escuchándolo." },
      { titulo: "El Cipitío de los mangos", texto: "Un niño con sombrero grande se escondía entre los árboles de mango. Quien lo veía reía sin razón durante días." },
      { titulo: "Marta, la costurera", texto: "Bordaba los nombres de sus vecinos en los manteles de las fiestas. Así supo el barrio quién había llegado y quién se había ido." },
      { titulo: "El perro que guió a los bomberos", texto: "Durante un incendio en el centro, un perro callejero ladró frente a una casa hasta que los bomberos llegaron a tiempo." },
      { titulo: "La tiendita de la esquina", texto: "Don Memo fiaba a todos durante los años difíciles. Su libreta de cuentas se volvió la historia más conocida del barrio." },
      { titulo: "La noche que el cielo se volvió blanco", texto: "Dicen los abuelos que el volcán despertó con un trueno que se escuchó hasta Chalchuapa. Por días la ceniza cayó como nieve, y los que sobrevivieron aprendieron a contar las estaciones con capas de tierra blanca.", lat: 13.6747, lng: -89.0530 }
    ]
  },
  {
    nombre: "La Libertad",
    lat: 13.6, lng: -89.5,
    historias: [
      { titulo: "La Siguanaba de la playa", texto: "Aparecía entre las olas al atardecer, peinando su cabello largo mientras los pescadores regresaban a casa." },
      { titulo: "El Cadejo del puerto", texto: "Un perro blanco caminaba junto a los pescadores que volvían tarde, cuidándolos hasta la orilla." },
      { titulo: "Don Ernesto y el faro", texto: "Encendía el faro cada noche durante cuarenta años. Decía que el mar le hablaba para avisarle del clima." },
      { titulo: "La señora del mercado de Sonsonate", texto: "Vendía mariscos frescos antes del amanecer. Nadie entendía cómo sabía qué pescado iba a llegar." },
      { titulo: "El Cipitío de la costa", texto: "Un niño travieso jugaba con las redes de los pescadores, pero siempre dejaba una buena pesca al final del día." },
      { titulo: "Rosa, la surfista", texto: "Aprendió a surfear de niña con una tabla de madera que su padre construyó. Hoy enseña a los niños del pueblo." },
      { titulo: "La Llorona de la laguna", texto: "Su llanto se escuchaba cerca de la laguna en las noches de luna llena. Los pescadores evitaban esa orilla." },
      { titulo: "Lencho, el cosechador de café", texto: "Llevaba su café a las cooperativas cada mañana. Su camión llegaba siempre antes que el sol." },
      { titulo: "La casa de las tres ventanas", texto: "Tenía una ventana que daba al mar y otra al cerro. Quien vivía ahí decía que veía dos países distintos." },
      { titulo: "El Sisimite de los cafetales", texto: "Cuidaba los cafetales en la montaña y advertía a los cortadores con un silbido cuando el tiempo cambiaba." },
      { titulo: "Doña Chela y la sal", texto: "Secaba la sal en las salinas del pueblo bajo el sol. Su receta de tamales era la más esperada de la feria." },
      { titulo: "El Padre de la iglesia de la costa", texto: "Dicen que en las misas de madrugada se escuchaba una segunda voz cantando, una que nadie veía." },
      { titulo: "La maestra de la escuela del cerro", texto: "Enseñaba a leer a los niños con cartas que escribía a mano. Muchos regresaron años después para darle las gracias." },
      { titulo: "El cadejo del camino real", texto: "Acompañaba a los viajeros que se perdían en la oscuridad del camino hasta que volvían a ver las luces del pueblo." },
      { titulo: "Don Tomás y su bicicleta", texto: "Recorría el pueblo entregando periódicos cada mañana. Los vecinos decían que nunca se le caía ni una página." }
    ]
  },
  {
    nombre: "Santa Ana",
    lat: 13.9942, lng: -89.5597,
    historias: [
      { titulo: "La Ciguanaba del Cerro Verde", texto: "Aparecía entre la neblina del cerro, vestida de blanco. Los caminantes que la seguían nunca encontraban el camino de regreso." },
      { titulo: "El Cadejo de la catedral", texto: "Un perro negro cuidaba la entrada de la catedral de Santa Ana en las noches. Nadie se atrevía a tocarlo." },
      { titulo: "Doña Lupe y el café", texto: "Tostaba el café en un comal de barro cada madrugada. Su aroma despertaba a todo el barrio antes del primer gallo." },
      { titulo: "El Sisimite del volcán", texto: "Los cazadores decían que este ser peludo protegía los bosques del volcán y castigaba a quien cortaba árboles sin permiso." },
      { titulo: "Javier, el fotógrafo", texto: "Tomaba fotos de la gente del mercado durante cuarenta años. Hoy sus archivos cuentan la historia del pueblo." },
      { titulo: "La Llorona del río Sensunapán", texto: "Su voz se escuchaba en la orilla del río durante las lluvias. Las madres cuidaban que sus hijos no se acercaran." },
      { titulo: "El Cipitío del cafetal", texto: "Jugaba con las cortadoras de café, escondiendo sus canastas. Al final siempre devolvía todo con granos extra." },
      { titulo: "Don Mario y el tren", texto: "Trabajó en el tren de carga durante treinta años. Cuando el ferrocarril cerró, siguió saludando a cada vagón que pasaba." },
      { titulo: "La Siguanaba de la plaza", texto: "Aparecía cerca de la fuente de la plaza en las noches de fiesta. Quien la veía de cerca nunca olvidaba su sonrisa." },
      { titulo: "Lucy y la panadería", texto: "Horneaba pan dulce para los niños que salían de la escuela. Su receta pasó de generación en generación." },
      { titulo: "El Padre de la colina", texto: "Dicen que recorría la colina cada noche bendiciendo las casas. Algunas familias dejaban la puerta abierta para él." },
      { titulo: "El viejo de las palomas", texto: "Alimentaba palomas en el parque cada tarde. Cuando murió, las aves siguieron llegando a su banca por años." },
      { titulo: "Ana y la radio comunitaria", texto: "Leía cartas de los vecinos en la radio del pueblo. Cada domingo el barrio entero escuchaba sus historias." },
      { titulo: "El Cadejo del camino a Metapán", texto: "Acompañaba a los viajeros en la carretera oscura, cuidando que llegaran a salvo al siguiente pueblo." },
      { titulo: "Carlos, el jardinero", texto: "Cuidaba los jardines de la alcaldía con tanto amor que las flores florecían fuera de temporada." }
    ]
  }
];