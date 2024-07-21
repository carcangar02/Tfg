import Clown from "./assets/Cartas_img/Clown.png";
import Seer from "./assets/Cartas_img/Seer.png";
import Swindler from "./assets/Cartas_img/Swindler.png";
import Marauder from "./assets/Cartas_img/Marauder.png";
import Trickmaster from "./assets/Cartas_img/Trickmaster.png";
import Apprentice from "./assets/Cartas_img/Apprentice.png";
import Telepathist from "./assets/Cartas_img/Telepathist.png";
import Spectator from "./assets/Cartas_img/Spectator.png";
import Light_Supplicant from "./assets/Cartas_img/Light Supplicant.png";
import Bard from "./assets/Cartas_img/Bard.png";
import Folk_of_Rage from "./assets/Cartas_img/Folk of rage.jpg";
import Sailor from "./assets/Cartas_img/Sailor.png";
import Student_of_Ratiocination from "./assets/Cartas_img/Student of Ratiocination.jpg";
import Reader from "./assets/Cartas_img/Reader.png";
import Listener from "./assets/Cartas_img/Listener.png";
import Secrets_Supplicant from "./assets/Cartas_img/Secrets Supplicant.png";
import Lawyer from "./assets/Cartas_img/Lawyer.png";
import Arbitrer from "./assets/Cartas_img/Arbitrer.png";

export const imagenes = [
  {
    key: "0",
    nombre: "Clown",
    grupo: "Lord of Mysteries",
    img: Clown,
    vida: 4,
    efectos: "Por cada turno +1 a su lado si son {Lord of mysteries}",
  },
  {
    key: "1",
    nombre: "Seer",
    grupo: "Lord of Mysteries",
    img: Seer,
    vida: 1,
    efectos: "Inflinge 2 de daño a una carta enemiga",
  },

  {
    key: "2",
    nombre: "Swindler",
    grupo: "Lord of Mysteries",
    img: Swindler,
    vida: 1,
    efectos:
      "Elimina todas las {Lord of mysteries} y consume sus puntos de vida",
  },
  {
    key: "3",
    nombre: "Marauder",
    grupo: "Lord of Mysteries",
    img: Marauder,
    vida: 3,
    efectos: "Añade una copia de si mismo",
  },
  {
    key: "4",
    nombre: "Trickmaster",
    grupo: "Lord of Mysteries",
    img: Trickmaster,
    vida: 2,
    efectos: "Todos los {God Allmighty} enemigos -1",
  },
  {
    key: "5",
    nombre: "Apprentice",
    grupo: "Lord of Mysteries",
    img: Apprentice,
    vida: 3,
    efectos: "Restaura la vida de una carta aliada a su valor original",
  },
  {
    key: "6",
    nombre: "Telepathist",
    grupo: "God Allmighty",
    img: Telepathist,
    vida: 2,
    efectos: "Por cada {Spectator} hace 1 de daño a un a carta enemiga",
  },
  {
    key: "7",
    nombre: "Spectator",
    grupo: "God Allmighty",
    img: Spectator,
    vida: 1,
    efectos: "Crea 3 copias de si mismo",
  },
  {
    key: "8",
    nombre: "Light Supplicant",
    grupo: "God Allmighty",
    img: Light_Supplicant,
    vida: 6,
    efectos: "Esta carta es inmutable",
  },
  {
    key: "9",
    nombre: "Bard",
    grupo: "God Allmighty",
    img: Bard,
    vida: 2,
    efectos: "Si hay un {Light Supplicant} es inmutable",
  },
  {
    key: "10",
    nombre: "Folk of Rage",
    grupo: "God Allmighty",
    img: Folk_of_Rage,
    vida: 4,
    efectos: "Después de 2 turnos, añade un Sailor",
  },
  {
    key: "11",
    nombre: "Sailor",
    grupo: "God Allmighty",
    img: Sailor,
    vida: 3,
    efectos: "Ningun efecto",
  },
  {
    key: "12",
    nombre: "Student of Ratiocination",
    grupo: "God Allmighty",
    img: Student_of_Ratiocination,
    vida: 1,
    efectos: "Tras tres turnos +6",
  },
  {
    key: "13",
    nombre: "Reader",
    grupo: "God Allmighty",
    img: Reader,
    vida: 2,
    efectos: "Hace 1 de daño por turno al mismo enemigo",
  },
  {
    key: "14",
    nombre: "Listener",
    grupo: "God Allmighty",
    img: Listener,
    vida: 5,
    efectos: "Hace 1 de daño a un enemigo por cada {Lord of mysteries} enemigo",
  },
  {
    key: "15",
    nombre: "Secrets Supplicant",
    grupo: "God Allmighty",
    img: Secrets_Supplicant,
    vida: 2,
    efectos: "Si hay un {The Anarchy}, vida +2",
  },
  {
    key: "16",
    nombre: "Lawyer",
    grupo: "The Anarchy",
    img: Lawyer,
    vida: 1,
    efectos: "Intercambia su vida con la de un enemigo",
  },
  {
    key: "17",
    nombre: "Arbitrer",
    grupo: "The Anarchy",
    img: Arbitrer,
    vida: 3,
    efectos: "Hace daño equivalente a la vida de un enemigo al azar",
  },
];
