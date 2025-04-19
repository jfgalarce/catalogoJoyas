import { c as createComponent, a as createAstro, r as renderTemplate, f as renderComponent, b as addAttribute, m as maybeRenderHead } from './astro/server_DkhmgbiQ.mjs';
import 'kleur/colors';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import 'clsx';

const catalogo = [
  {
    categoria: "Alianzas",
    alias:"alianzas",
    data: [
      {
        href: "catalogo/JAU/big/0105.jpg",
        codigo: "0105",
        nombre: "ALIANZA MEDIA",
        descripcion:
          "Alianza de oro amarillo con diseño de media caña, ancho 3 mm y peso aproximado de 2,8 gramos.",
      },
      {
        href: "catalogo/JAU/big/0110.jpg",
        codigo: "0110",
        nombre: "ALIANZA MEDIA",
        descripcion:
          "Alianza de oro amarillo con diseño de media caña, ancho 3 mm y peso aproximado de 4,4 gramos.",
      },
      {
        href: "catalogo/JAU/big/0115.jpg",
        codigo: "0115",
        nombre: "ALIANZA MEDIA",
        descripcion:
          "Alianza de oro amarillo con diseño de media caña, ancho 3 mm y peso aproximado de 6,2 gramos.",
      },
      {
        href: "catalogo/JAU/big/0117.jpg",
        codigo: "0117",
        nombre: "ALIANZA MEDIA",
        descripcion:
          "Alianza de oro amarillo con diseño de media caña, ancho 3 mm y peso aproximado de 8,2 gramos.",
      },
      {
        href: "catalogo/JAU/big/0120.jpg",
        codigo: "0120",
        nombre: "ALIANZA MEDIA",
        descripcion:
          "Alianza de oro amarillo con diseño de media caña, ancho 4 mm y peso aproximado de 4,0 gramos.",
      },
      {
        href: "catalogo/JAU/big/0125.jpg",
        codigo: "0125",
        nombre: "ALIANZA MEDIA",
        descripcion:
          "Alianza de oro amarillo con diseño de media caña, ancho 4 mm y peso aproximado de 5,7 gramos.",
      },
      {
        href: "catalogo/JAU/big/0130.jpg",
        codigo: "0130",
        nombre: "ALIANZA MEDIA",
        descripcion:
          "Alianza de oro amarillo con diseño de media caña, ancho 4 mm y peso aproximado de 7,2 gramos.",
      },
      {
        href: "catalogo/JAU/big/0135.jpg",
        codigo: "0135",
        nombre: "ALIANZA MEDIA",
        descripcion:
          "Alianza de oro amarillo con diseño de media caña, ancho 5 mm y peso aproximado de 5,0 gramos.",
      },
      {
        href: "catalogo/JAU/big/0140.jpg",
        codigo: "0140",
        nombre: "ALIANZA MEDIA",
        descripcion:
          "Alianza de oro amarillo con diseño de media caña, ancho 5 mm y peso aproximado de 6,8 gramos.",
      },
      {
        href: "catalogo/JAU/big/0145.jpg",
        codigo: "0145",
        nombre: "ALIANZA MEDIA",
        descripcion:
          "Alianza de oro amarillo con diseño de media caña, ancho 5 mm y peso aproximado de 9,4 gramos.",
      },
      {
        href: "catalogo/JAU/big/0150.jpg",
        codigo: "0150",
        nombre: "ALIANZA MEDIA",
        descripcion:
          "Alianza de oro amarillo con diseño de media caña, ancho 6 mm y peso aproximado de 6,8 gramos.",
      },
      {
        href: "catalogo/JAU/big/0155.jpg",
        codigo: "0155",
        nombre: "ALIANZA MEDIA",
        descripcion:
          "Alianza de oro amarillo con diseño de media caña, ancho 6 mm y peso aproximado de 9,0 gramos.",
      },
      {
        href: "catalogo/JAU/big/0160.jpg",
        codigo: "0160",
        nombre: "ALIANZA LISA",
        descripcion:
          "Alianza de oro amarillo lisa, ancho 3 mm y peso aproximado de 3,0 gramos.",
      },
      {
        href: "catalogo/JAU/big/0165.jpg",
        codigo: "0165",
        nombre: "ALIANZA LISA",
        descripcion:
          "Alianza de oro amarillo lisa, ancho 4 mm y peso aproximado de 4,0 gramos.",
      },
      {
        href: "catalogo/JAU/big/0170.jpg",
        codigo: "0170",
        nombre: "ALIANZA LISA",
        descripcion:
          "Alianza de oro amarillo lisa, ancho 5 mm y peso aproximado de 5,0 gramos.",
      },
      {
        href: "catalogo/JAU/big/0205.jpg",
        codigo: "0205",
        nombre: "ALIANZA CAÑA",
        descripcion:
          "Alianza de oro amarillo con diseño de caña con bordes facetados, ancho 4.8 mm y peso aproximado de 12,2 gramos.",
      },
      {
        href: "catalogo/JAU/big/0212.jpg",
        codigo: "0212",
        nombre: "ALIANZA PLANA",
        descripcion:
          "Alianza de oro amarillo plana facetada con diseño de retícula, ancho 6 mm y peso aproximado de 8,0 gramos.",
      },
      {
        href: "catalogo/JAU/big/0215.jpg",
        codigo: "0215",
        nombre: "ALIANZA FACETADA",
        descripcion:
          "Alianza de oro amarillo facetada con diseño de milraya y rombos, ancho 5 mm y peso aproximado de 5,0 gramos.",
      },
      {
        href: "catalogo/JAU/big/0225.jpg",
        codigo: "0225",
        nombre: "ALIANZA FACETADA",
        descripcion:
          "Alianza de oro amarillo facetada con diseño diagonal, ancho 5 mm y peso aproximado de 5,0 gramos.",
      },
      {
        href: "catalogo/JAU/big/0230.jpg",
        codigo: "0230",
        nombre: "ALIANZA FACETADA",
        descripcion:
          "Alianza de oro amarillo facetada con diseño de espig delgado, ancho 5 mm y peso aproximado de 5,6 gramos.",
      },
      {
        href: "catalogo/JAU/big/0235.jpg",
        codigo: "0235",
        nombre: "ALIANZA FACETADA",
        descripcion:
          "Alianza de oro amarillo facetada con diseño de milraya, ancho 4 mm y peso aproximado de 4,0 gramos.",
      },
      {
        href: "catalogo/JAU/big/0240.jpg",
        codigo: "0240",
        nombre: "ALIANZA FACETADA",
        descripcion:
          "Alianza de oro amarillo facetada con diseño de rayas y espig, ancho 4 mm y peso aproximado de 4,0 gramos.",
      },
      {
        href: "catalogo/JAU/big/0242.jpg",
        codigo: "0242",
        nombre: "ALIANZA FACETADA",
        descripcion:
          "Alianza de oro amarillo facetada con diseño de milraya y perfil cónico, ancho 5 mm y peso aproximado de 5,0 gramos.",
      },
      {
        href: "catalogo/JAU/big/0245.jpg",
        codigo: "0245",
        nombre: "ALIANZA FACETADA",
        descripcion:
          "Alianza de oro amarillo facetada con diseño de milraya, ancho 5 mm y peso aproximado de 5,0 gramos.",
      },
      {
        href: "catalogo/JAU/big/0250.jpg",
        codigo: "0250",
        nombre: "ALIANZA FACETADA",
        descripcion:
          "Alianza de oro amarillo facetada con diseño de mateada, ancho 5 mm y peso aproximado de 5,5 gramos.",
      },
      {
        href: "catalogo/JAU/big/0254.jpg",
        codigo: "0254",
        nombre: "ALIANZA FACETADA",
        descripcion:
          "Alianza de oro amarillo facetada con diseño de barquillo y borde milrayas, ancho 5 mm y peso aproximado de 5,0 gramos.",
      },
      {
        href: "catalogo/JAU/big/0255.jpg",
        codigo: "0255",
        nombre: "ALIANZA FACETADA",
        descripcion:
          "Alianza de oro amarillo facetada con diseño de mosaico, ancho 5 mm y peso aproximado de 5,6 gramos.",
      },
      {
        href: "catalogo/JAU/big/0260.jpg",
        codigo: "0260",
        nombre: "ALIANZA FACETADA",
        descripcion:
          "Alianza de oro amarillo facetada con diseño de mateada, ancho 5 mm y peso aproximado de 5,5 gramos.",
      },
      {
        href: "catalogo/JAU/big/0262.jpg",
        codigo: "0262",
        nombre: "ALIANZA FACETADA",
        descripcion:
          "Alianza de oro amarillo facetada con diseño arenada y borde rebajado, ancho 5 mm y peso aproximado de 5,5 gramos.",
      },
      {
        href: "catalogo/JAU/big/0265.jpg",
        codigo: "0265",
        nombre: "ALIANZA FACETADA",
        descripcion:
          "Alianza de oro amarillo facetada con diseño de espig ancha, ancho 5 mm y peso aproximado de 5,0 gramos.",
      },
      {
        href: "catalogo/JAU/big/0270.jpg",
        codigo: "0270",
        nombre: "ALIANZA FACETADA",
        descripcion:
          "Alianza de oro amarillo facetada con diseño de barquillo, ancho 5 mm y peso aproximado de 4,5 gramos.",
      },
      {
        href: "catalogo/JAU/big/0272.jpg",
        codigo: "0272",
        nombre: "ALIANZA FACETADA",
        descripcion:
          "Alianza de oro amarillo facetada con diseño de hilos juntas de 16 hojas, ancho 5 mm y peso aproximado de 5,0 gramos.",
      },
    ],
  },
  {
    categoria: "Anillos de Compromiso",
    alias:"anillo-compromiso",
    data: [
      {
        href: "catalogo/JAU/big/1105.jpg",
        codigo: "1105",
        nombre: "ANILLO PLATINO",
        descripcion: "Anillo de platino con brillante solitario de 23 puntos.",
      },
      {
        href: "catalogo/JAU/big/1110.jpg",
        codigo: "1110",
        nombre: "ANILLO PLATINO",
        descripcion: "Anillo de platino con brillante solitario de 8 puntos.",
      },
      {
        href: "catalogo/JAU/big/1115.jpg",
        codigo: "1115",
        nombre: "ANILLO PLATINO",
        descripcion:
          "Anillo de platino con brillante 1 a 5 puntos y 4 de 1 punto.",
      },
      {
        href: "catalogo/JAU/big/1120.jpg",
        codigo: "1120",
        nombre: "ANILLO PLATINO",
        descripcion: "Anillo de platino con brillante roseta de 7 a 3 puntos.",
      },
      {
        href: "catalogo/JAU/big/1122.jpg",
        codigo: "1122",
        nombre: "ANILLO PLATINO",
        descripcion: "Anillo de platino con brillante roseta de 7 a 3 puntos.",
      },
      {
        href: "catalogo/JAU/big/1125.jpg",
        codigo: "1125",
        nombre: "ANILLO PLATINO",
        descripcion:
          "Anillo de platino con brillante roseta de 1 a 10 puntos y 8 de 2 puntos.",
      },
      {
        href: "catalogo/JAU/big/1127.jpg",
        codigo: "1127",
        nombre: "ANILLO PLATINO",
        descripcion:
          "Anillo de platino con brillante de 1 a 2 zafiros y 4 de 2 puntos.",
      },
      {
        href: "catalogo/JAU/big/1130.jpg",
        codigo: "1130",
        nombre: "ANILLO PLATINO",
        descripcion:
          "Anillo de platino con brillante de 1 a 2 cintillo de 9 a 3 puntos.",
      },
      {
        href: "catalogo/JAU/big/1140.jpg",
        codigo: "1140",
        nombre: "ANILLO PLATINO",
        descripcion:
          "Anillo de platino con brillante de 6 a 1,8 puntos y 4 esmeraldas azules.",
      },
      {
        href: "catalogo/JAU/big/1142.jpg",
        codigo: "1142",
        nombre: "ANILLO PLATINO",
        descripcion:
          "Anillo de platino con brillante de 6 a 2,5 puntos y 4 zafiros baguette naturales.",
      },
      {
        href: "catalogo/JAU/big/1145.jpg",
        codigo: "1145",
        nombre: "ANILLO PLATINO",
        descripcion:
          "Anillo de platino con brillante de 2 a 8 puntos y 4 de 1 punto.",
      },
      {
        href: "catalogo/JAU/big/1160.jpg",
        codigo: "1160",
        nombre: "ANILLO PLATINO",
        descripcion:
          "Anillo de platino con brillante baguette de 4x2 mm. (13 puntos).",
      },
    ],
  },
  {
    categoria: "Pulseras",
    alias:"pulseras",
    data: [
      {
        href: "catalogo/JAU/big/2105.jpg",
        codigo: "2105",
        nombre: "PULSERA PALITO",
        descripcion:
          "Pulsera de palito con 7 perlas de 4 a 4.5mm en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/2110.jpg",
        codigo: "2110",
        nombre: "PULSERA PALITO",
        descripcion: "Pulsera de oro amarillo con 7 perlas de 5 a 5,5 mm.",
      },
      {
        href: "catalogo/JAU/big/2115.jpg",
        codigo: "2115",
        nombre: "PULSERA TUBO CUAD",
        descripcion: "Pulsera de oro amarillo con 7 perlas de 4 a 4,5 mm.",
      },
      {
        href: "catalogo/JAU/big/2125.jpg",
        codigo: "2125",
        nombre: "PULSERA CADENA",
        descripcion: "Pulsera de oro amarillo con 7 perlas de 4 a 4,5 mm.",
      },
      {
        href: "catalogo/JAU/big/2135.jpg",
        codigo: "2135",
        nombre: "PULSERA CADENA",
        descripcion: "Pulsera de oro amarillo con 7 perlas Río de 5 x 9 mm.",
      },
      {
        href: "catalogo/JAU/big/2140.jpg",
        codigo: "2140",
        nombre: "PULSERA CADENA",
        descripcion: "Pulsera de oro amarillo con 14 perlas Río de 2,8 x 4 mm.",
      },
      {
        href: "catalogo/JAU/big/2142.jpg",
        codigo: "2142",
        nombre: "PULSERA PERLA RIO",
        descripcion: "Pulsera de oro amarillo con perlas Río rosadas.",
      },
      {
        href: "catalogo/JAU/big/2150.jpg",
        codigo: "2150",
        nombre: "PULSERA CADENA",
        descripcion:
          "Pulsera de oro amarillo con 4 perlas de 4 a 4,5 mm y 8 bolitas.",
      },
      {
        href: "catalogo/JAU/big/2155.jpg",
        codigo: "2155",
        nombre: "PULSERA CADENA",
        descripcion: "Pulsera de oro amarillo con 6 perlas Río y 9 bolitas.",
      },
      {
        href: "catalogo/JAU/big/2160.jpg",
        codigo: "2160",
        nombre: "PULSERA BOLITAS",
        descripcion:
          "Pulsera de oro amarillo con 5 bolitas de 5 mm y 6 de 3 mm.",
      },
      {
        href: "catalogo/JAU/big/2165.jpg",
        codigo: "2165",
        nombre: "PULSERA BOLITAS",
        descripcion:
          "Pulsera de oro amarillo con 1 bolita de 5 mm, 2 de 4 mm y 2 de 3 mm.",
      },
      {
        href: "catalogo/JAU/big/2201.jpg",
        codigo: "2201",
        nombre: "PULSERA CADENA",
        descripcion: "Pulsera de oro amarillo con palito y 3 bolitas de 4 mm.",
      },
      {
        href: "catalogo/JAU/big/2202.jpg",
        codigo: "2202",
        nombre: "PULSERA CADENA",
        descripcion: "Pulsera de oro amarillo con 7 bolitas de 4 mm.",
      },
      {
        href: "catalogo/JAU/big/2203.jpg",
        codigo: "2203",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con eslabón torcido y 15 bolitas de 4 mm.",
      },
      {
        href: "catalogo/JAU/big/2204.jpg",
        codigo: "2204",
        nombre: "PULSERA PALITO",
        descripcion: "Pulsera de oro amarillo con palito y bolitas de 4 mm.",
      },
      {
        href: "catalogo/JAU/big/2206.jpg",
        codigo: "2206",
        nombre: "PULSERA PALITO",
        descripcion: "Pulsera de oro amarillo con palito y eslabón torcido.",
      },
      {
        href: "catalogo/JAU/big/2207.jpg",
        codigo: "2207",
        nombre: "PULSERA ESLABON",
        descripcion: "Pulsera de oro amarillo con eslabón humita.",
      },
      {
        href: "catalogo/JAU/big/2208.jpg",
        codigo: "2208",
        nombre: "PULSERA PALITO",
        descripcion: "Pulsera de oro amarillo con palito y eslabón ocho.",
      },
      {
        href: "catalogo/JAU/big/2209.jpg",
        codigo: "2209",
        nombre: "PULSERA ESLABON",
        descripcion: "Pulsera de oro amarillo con eslabón humita y toniquete.",
      },
      {
        href: "catalogo/JAU/big/2210.jpg",
        codigo: "2210",
        nombre: "PULSERA ESLABON",
        descripcion: "Pulsera de oro amarillo con eslabón doble.",
      },
      {
        href: "catalogo/JAU/big/2211.jpg",
        codigo: "2211",
        nombre: "PULSERA ESLABON",
        descripcion: "Pulsera de oro amarillo con eslabón Gucci microf.",
      },
      {
        href: "catalogo/JAU/big/2212.jpg",
        codigo: "2212",
        nombre: "PULSERA PALITO",
        descripcion: "Pulsera de oro amarillo con palito.",
      },
      {
        href: "catalogo/JAU/big/2214.jpg",
        codigo: "2214",
        nombre: "PULSERA TUBO CUAD",
        descripcion: "Pulsera de oro amarillo con tubo cuadrado.",
      },
      {
        href: "catalogo/JAU/big/2216.jpg",
        codigo: "2216",
        nombre: "PULSERA TURBILLON INGLES",
        descripcion: "Pulsera de oro amarillo con turbillon inglés simple.",
      },
      {
        href: "catalogo/JAU/big/2218.jpg",
        codigo: "2218",
        nombre: "PULSERA TURBILLON INGLES",
        descripcion:
          "Pulsera de oro amarillo con turbillon inglés con rectángulo.",
      },
      {
        href: "catalogo/JAU/big/2220.jpg",
        codigo: "2220",
        nombre: "PULSERA TURBILLON INGLES",
        descripcion: "Pulsera de oro amarillo con turbillon inglés con rombos.",
      },
      {
        href: "catalogo/JAU/big/2222.jpg",
        codigo: "2222",
        nombre: "PULSERA TURBILLON",
        descripcion: "Pulsera de oro amarillo con turbillon.",
      },
      {
        href: "catalogo/JAU/big/2224.jpg",
        codigo: "2224",
        nombre: "PULSERA TURBILLON",
        descripcion: "Pulsera de oro amarillo con turbillon.",
      },
      {
        href: "catalogo/JAU/big/2226.jpg",
        codigo: "2226",
        nombre: "PULSERA TURBILLON TUBO",
        descripcion: "Pulsera de oro amarillo con turbillon tubo.",
      },
      {
        href: "catalogo/JAU/big/2228.jpg",
        codigo: "2228",
        nombre: "PULSERA TURBILLON ALAMBRE",
        descripcion: "Pulsera de oro amarillo con turbillon alambre de tubo.",
      },
      {
        href: "catalogo/JAU/big/2229.jpg",
        codigo: "2229",
        nombre: "PULSERA CHAPAS RECTANGULARES",
        descripcion: "Pulsera de oro amarillo con chapas rectangulares.",
      },
      {
        href: "catalogo/JAU/big/2230.jpg",
        codigo: "2230",
        nombre: "PULSERA PANTER",
        descripcion: "Pulsera de oro amarillo con diseño de pantera triple.",
      },
      {
        href: "catalogo/JAU/big/2231.jpg",
        codigo: "2231",
        nombre: "PULSERA PANTER",
        descripcion:
          "Pulsera de oro amarillo con diseño de pantera doble plana.",
      },
      {
        href: "catalogo/JAU/big/2232.jpg",
        codigo: "2232",
        nombre: "PULSERA PANTER",
        descripcion:
          "Pulsera de oro amarillo con diseño de pantera cuadrupole.",
      },
      {
        href: "catalogo/JAU/big/2233.jpg",
        codigo: "2233",
        nombre: "PULSERA PANTHER",
        descripcion:
          "Pulsera de oro amarillo con diseño de panther gruesa con eslabón rectangular.",
      },
      {
        href: "catalogo/JAU/big/2234.jpg",
        codigo: "2234",
        nombre: "PULSERA TEKA",
        descripcion: "Pulsera de oro amarillo con diseño de teka con dibujo.",
      },
      {
        href: "catalogo/JAU/big/2235.jpg",
        codigo: "2235",
        nombre: "PULSERA TEKA",
        descripcion: "Pulsera de oro amarillo con diseño de teka lisa.",
      },
      {
        href: "catalogo/JAU/big/2237.jpg",
        codigo: "2237",
        nombre: "PULSERA ELEFANTES",
        descripcion: "Pulsera de oro amarillo con diseño de elefantes.",
      },
      {
        href: "catalogo/JAU/big/2238.jpg",
        codigo: "2238",
        nombre: "PULSERA ESLABON",
        descripcion: "Pulsera de oro amarillo con diseño de eslabón anillo.",
      },
      {
        href: "catalogo/JAU/big/2239.jpg",
        codigo: "2239",
        nombre: "PULSERA ESLABON",
        descripcion: "Pulsera de oro amarillo con diseño de eslabón perro.",
      },
      {
        href: "catalogo/JAU/big/2240.jpg",
        codigo: "2240",
        nombre: "PULSERA ESLABON",
        descripcion: "Pulsera de oro amarillo con diseño de eslabón perro.",
      },
      {
        href: "catalogo/JAU/big/2241.jpg",
        codigo: "2241",
        nombre: "PULSERA ESLABON",
        descripcion: "Pulsera de oro amarillo con diseño de eslabón perro.",
      },
      {
        href: "catalogo/JAU/big/2242.jpg",
        codigo: "2242",
        nombre: "PULSERA ESLABON",
        descripcion: "Pulsera de oro amarillo con diseño de eslabón perro.",
      },
      {
        href: "catalogo/JAU/big/2243.jpg",
        codigo: "2243",
        nombre: "PULSERA ESLABON",
        descripcion: "Pulsera de oro amarillo con diseño de eslabón largo.",
      },
      {
        href: "catalogo/JAU/big/2244.jpg",
        codigo: "2244",
        nombre: "PULSERA ESLABON",
        descripcion: "Pulsera de oro amarillo con diseño de eslabón largo.",
      },
      {
        href: "catalogo/JAU/big/2246.jpg",
        codigo: "2246",
        nombre: "PULSERA ESLABON",
        descripcion: "Pulsera de oro amarillo con diseño de eslabón verónica.",
      },
      {
        href: "catalogo/JAU/big/2250.jpg",
        codigo: "2250",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con diseño de eslabón corto/largo.",
      },
      {
        href: "catalogo/JAU/big/2252.jpg",
        codigo: "2252",
        nombre: "PULSERA ESLABON",
        descripcion: "Pulsera de oro amarillo con diseño de eslabón corto.",
      },
      {
        href: "catalogo/JAU/big/2254.jpg",
        codigo: "2254",
        nombre: "PULSERA ESLABON",
        descripcion: "Pulsera de oro amarillo con diseño de eslabón soldado.",
      },
      {
        href: "catalogo/JAU/big/2256.jpg",
        codigo: "2256",
        nombre: "PULSERA ESLABON",
        descripcion: "Pulsera de oro amarillo con diseño de eslabón doblado.",
      },
      {
        href: "catalogo/JAU/big/2260.jpg",
        codigo: "2260",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con diseño de eslabón Cartier 1x1.",
      },
      {
        href: "catalogo/JAU/big/2262.jpg",
        codigo: "2262",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con diseño de eslabón Cartier 1x1.",
      },
      {
        href: "catalogo/JAU/big/2264.jpg",
        codigo: "2264",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con diseño de eslabón Cartier 3x1.",
      },
      {
        href: "catalogo/JAU/big/2265.jpg",
        codigo: "2265",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con diseño de eslabón Cartier 3x1.",
      },
      {
        href: "catalogo/JAU/big/2266.jpg",
        codigo: "2266",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con diseño de eslabón Cartier 3x1.",
      },
      {
        href: "catalogo/JAU/big/2270.jpg",
        codigo: "2270",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con diseño de eslabón perfil cuadrado.",
      },
      {
        href: "catalogo/JAU/big/2272.jpg",
        codigo: "2272",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con diseño de eslabón perro con hebilla.",
      },
      {
        href: "catalogo/JAU/big/2274.jpg",
        codigo: "2274",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con diseño de eslabón Cartier 3x1.",
      },
      {
        href: "catalogo/JAU/big/2276.jpg",
        codigo: "2276",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con diseño de eslabón Cartier 3x1.",
      },
      {
        href: "catalogo/JAU/big/2280.jpg",
        codigo: "2280",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con diseño de eslabón doble ocho.",
      },
      {
        href: "catalogo/JAU/big/2282.jpg",
        codigo: "2282",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con diseño de eslabón estampado italiano.",
      },
      {
        href: "catalogo/JAU/big/2287.jpg",
        codigo: "2287",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con diseño de eslabón circular nudo llano bajo cajón.",
      },
      {
        href: "catalogo/JAU/big/2288.jpg",
        codigo: "2288",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con diseño de eslabón circular chico broche timón.",
      },
      {
        href: "catalogo/JAU/big/2289.jpg",
        codigo: "2289",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con diseño de eslabón circular y ovalado broche timón.",
      },
      {
        href: "catalogo/JAU/big/2290.jpg",
        codigo: "2290",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con diseño de eslabón circular doble broche timón.",
      },
      {
        href: "catalogo/JAU/big/2291.jpg",
        codigo: "2291",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con diseño de eslabón circular agarrado doble broche timón.",
      },
      {
        href: "catalogo/JAU/big/2292.jpg",
        codigo: "2292",
        nombre: "PULSERA CORAZON",
        descripcion:
          "Pulsera de oro amarillo con diseño de corazón y llave colgando.",
      },
      {
        href: "catalogo/JAU/big/2294.jpg",
        codigo: "2294",
        nombre: "PULSERA CORAZON",
        descripcion: "Pulsera de oro amarillo con diseño de corazón central.",
      },
      {
        href: "catalogo/JAU/big/2295.jpg",
        codigo: "2295",
        nombre: "PULSERA PANTER",
        descripcion:
          "Pulsera de oro amarillo con diseño de pantera rombo con 6 piedras ovaladas.",
      },
      {
        href: "catalogo/JAU/big/2296.jpg",
        codigo: "2296",
        nombre: "PULSERA PANTER",
        descripcion:
          "Pulsera de oro amarillo con diseño de pantera espuelas con piedras.",
      },
      {
        href: "catalogo/JAU/big/2297.jpg",
        codigo: "2297",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con diseño de eslabón canal y 6 piedras engastadas.",
      },
      {
        href: "catalogo/JAU/big/2298.jpg",
        codigo: "2298",
        nombre: "PULSERA ESLABON",
        descripcion:
          "Pulsera de oro amarillo con diseño de eslabón canal y 6 piedras engastadas.",
      },
      {
        href: "catalogo/JAU/big/2305.jpg",
        codigo: "2305",
        nombre: "PULSERA IDENTIFICACION",
        descripcion:
          "Pulsera de oro amarillo con diseño de identificación cadena.",
      },
      {
        href: "catalogo/JAU/big/2310.jpg",
        codigo: "2310",
        nombre: "PULSERA IDENTIFICACION",
        descripcion:
          "Pulsera de oro amarillo con diseño de identificación cadena.",
      },
      {
        href: "catalogo/JAU/big/2315.jpg",
        codigo: "2315",
        nombre: "PULSERA IDENTIFICACION",
        descripcion:
          "Pulsera de oro amarillo con diseño de identificación cadena.",
      },
      {
        href: "catalogo/JAU/big/2320.jpg",
        codigo: "2320",
        nombre: "PULSERA IDENTIFICACION",
        descripcion:
          "Pulsera de oro amarillo con diseño de identificación Cartier 3x1.",
      },
      {
        href: "catalogo/JAU/big/2325.jpg",
        codigo: "2325",
        nombre: "PULSERA IDENTIFICACION",
        descripcion:
          "Pulsera de oro amarillo con diseño de identificación Cartier 3x1.",
      },
      {
        href: "catalogo/JAU/big/2330.jpg",
        codigo: "2330",
        nombre: "PULSERA IDENTIFICACION",
        descripcion:
          "Pulsera de oro amarillo con diseño de identificación Cartier 3x1.",
      },
      {
        href: "catalogo/JAU/big/2332.jpg",
        codigo: "2332",
        nombre: "PULSERA IDENTIFICACION",
        descripcion:
          "Pulsera de oro amarillo con diseño de identificación turbillon.",
      },
      {
        href: "catalogo/JAU/big/2333.jpg",
        codigo: "2333",
        nombre: "PULSERA IDENTIFICACION",
        descripcion:
          "Pulsera de oro amarillo con diseño de identificación turbillon.",
      },
      {
        href: "catalogo/JAU/big/2337.jpg",
        codigo: "2337",
        nombre: "PULSERA IDENTIFICACION",
        descripcion:
          "Pulsera de oro amarillo con diseño de identificación turbillon inglés curva.",
      },
      {
        href: "catalogo/JAU/big/234418.jpg",
        codigo: "234418",
        nombre: "PULSERA IDENTIFICACION",
        descripcion:
          "Pulsera de oro amarillo con diseño de identificación perro 18 cm.",
      },
      {
        href: "catalogo/JAU/big/234421.jpg",
        codigo: "234421",
        nombre: "PULSERA IDENTIFICACION",
        descripcion:
          "Pulsera de oro amarillo con diseño de identificación perro 21 cm.",
      },
      {
        href: "catalogo/JAU/big/234518.jpg",
        codigo: "234518",
        nombre: "PULSERA IDENTIFICACION",
        descripcion:
          "Pulsera de oro amarillo con diseño de identificación perro 18 cm.",
      },
      {
        href: "catalogo/JAU/big/234521.jpg",
        codigo: "234521",
        nombre: "PULSERA IDENTIFICACION",
        descripcion:
          "Pulsera de oro amarillo con diseño de identificación perro 21 cm.",
      },
      {
        href: "catalogo/JAU/big/234618.jpg",
        codigo: "234618",
        nombre: "PULSERA IDENTIFICACION",
        descripcion:
          "Pulsera de oro amarillo con diseño de identificación perro 18 cm.",
      },
      {
        href: "catalogo/JAU/big/234621.jpg",
        codigo: "234621",
        nombre: "PULSERA IDENTIFICACION",
        descripcion:
          "Pulsera de oro amarillo con diseño de identificación perro 21 cm.",
      },
      {
        href: "catalogo/JAU/big/2360.jpg",
        codigo: "2360",
        nombre: "PULSERA IDENTIFICACION",
        descripcion:
          "Pulsera de oro amarillo con diseño de identificación eslabón panter gruesa.",
      },
      {
        href: "catalogo/JAU/big/2411.jpg",
        codigo: "2411",
        nombre: "PULSERA GRUMET",
        descripcion: "Pulsera de oro amarillo con diseño de grumet doble.",
      },
      {
        href: "catalogo/JAU/big/2412.jpg",
        codigo: "2412",
        nombre: "PULSERA GRUMET",
        descripcion: "Pulsera de oro amarillo con diseño de grumet doble.",
      },
      {
        href: "catalogo/JAU/big/2413.jpg",
        codigo: "2413",
        nombre: "PULSERA GRUMET",
        descripcion: "Pulsera de oro amarillo con diseño de grumet doble.",
      },
      {
        href: "catalogo/JAU/big/2421.jpg",
        codigo: "2421",
        nombre: "PULSERA GRUMET",
        descripcion: "Pulsera de oro amarillo con diseño de grumet doble.",
      },
      {
        href: "catalogo/JAU/big/2422.jpg",
        codigo: "2422",
        nombre: "PULSERA GRUMET",
        descripcion: "Pulsera de oro amarillo con diseño de grumet doble.",
      },
      {
        href: "catalogo/JAU/big/2430.jpg",
        codigo: "2430",
        nombre: "PULSERA GRUMET",
        descripcion: "Pulsera de oro amarillo con diseño de grumet chapa fina.",
      },
      {
        href: "catalogo/JAU/big/2441.jpg",
        codigo: "2441",
        nombre: "PULSERA GRUMET",
        descripcion:
          "Pulsera de oro amarillo con diseño de grumet chapa gruesa.",
      },
      {
        href: "catalogo/JAU/big/2442.jpg",
        codigo: "2442",
        nombre: "PULSERA GRUMET",
        descripcion:
          "Pulsera de oro amarillo con diseño de grumet chapa gruesa.",
      },
      {
        href: "catalogo/JAU/big/2451.jpg",
        codigo: "2451",
        nombre: "PULSERA GRUMET",
        descripcion:
          "Pulsera de oro amarillo con diseño de grumet chapa bolita.",
      },
      {
        href: "catalogo/JAU/big/2452.jpg",
        codigo: "2452",
        nombre: "PULSERA GRUMET",
        descripcion:
          "Pulsera de oro amarillo con diseño de grumet chapa bolita.",
      },
      {
        href: "catalogo/JAU/big/2460.jpg",
        codigo: "2460",
        nombre: "PULSERA TURBILLON",
        descripcion: "Pulsera de oro amarillo con diseño de turbillon doble.",
      },
      {
        href: "catalogo/JAU/big/2470.jpg",
        codigo: "2470",
        nombre: "PULSERA TURBILLON",
        descripcion:
          "Pulsera de oro amarillo con diseño de turbillon tubo liso.",
      },
      {
        href: "catalogo/JAU/big/2510.jpg",
        codigo: "2510",
        nombre: "PULSERA ESCLAVA FACET",
        descripcion:
          "Pulsera de oro amarillo con diseño de esclava facetada cruz de 2mm y peso de 4 a 4,5 gramos.",
      },
      {
        href: "catalogo/JAU/big/2515.jpg",
        codigo: "2515",
        nombre: "PULSERA ESCLAVA FACET",
        descripcion:
          "Pulsera de oro amarillo con diseño de esclava facetada estrella central.",
      },
      {
        href: "catalogo/JAU/big/2520.jpg",
        codigo: "2520",
        nombre: "PULSERA ESCLAVA FACET",
        descripcion:
          "Pulsera de oro amarillo con diseño de esclava facetada recta de 2mm y peso de 4 a 4,5 gramos.",
      },
      {
        href: "catalogo/JAU/big/2530.jpg",
        codigo: "2530",
        nombre: "PULSERA ESCLAVA FACET",
        descripcion:
          "Pulsera de oro amarillo con diseño de esclava facetada en forma de V de 2mm y peso de 4 a 4,5 gramos.",
      },
      {
        href: "catalogo/JAU/big/2540.jpg",
        codigo: "2540",
        nombre: "PULSERA ESCLAVA FACET",
        descripcion:
          "Pulsera de oro amarillo con diseño de esclava facetada milraya de 3mm con borde.",
      },
      {
        href: "catalogo/JAU/big/2550.jpg",
        codigo: "2550",
        nombre: "PULSERA ESCLAVA FACET",
        descripcion:
          "Pulsera de oro amarillo con diseño de esclava facetada recta-diagonal de 2mm y peso de 4 a 4,5 gramos.",
      },
      {
        href: "catalogo/JAU/big/2560.jpg",
        codigo: "2560",
        nombre: "PULSERA ESCLAVA FACET",
        descripcion:
          "Pulsera de oro amarillo con diseño de esclava facetada diagonal de 2mm y peso de 4 a 4,5 gramos.",
      },
      {
        href: "catalogo/JAU/big/2570.jpg",
        codigo: "2570",
        nombre: "PULSERA ESCLAVA FACET",
        descripcion:
          "Pulsera de oro amarillo con diseño de esclava facetada diagonal de 4mm y peso de 8 a 8,5 gramos.",
      },
      {
        href: "catalogo/JAU/big/2580.jpg",
        codigo: "2580",
        nombre: "PULSERA ESCLAVA FACET",
        descripcion:
          "Pulsera de oro amarillo con diseño de esclava facetada en forma de caña de 2mm y peso de 4 a 4,5 gramos.",
      },
      {
        href: "catalogo/JAU/big/2590.jpg",
        codigo: "2590",
        nombre: "PULSERA ESCLAVA LISA",
        descripcion:
          "Pulsera de oro amarillo con diseño de esclava lisa de 2mm y peso de 4 a 4,5 gramos.",
      },
      {
        href: "catalogo/JAU/big/2596.jpg",
        codigo: "2596",
        nombre: "PULSERA ESCLAVA",
        descripcion:
          "Pulsera de oro amarillo con diseño de esclava con delfines.",
      },
      {
        href: "catalogo/JAU/big/2598.jpg",
        codigo: "2598",
        nombre: "PULSERA ESCLAVA",
        descripcion:
          "Pulsera de oro amarillo con diseño de esclava con elefantes.",
      },
    ],
  },
  {
    categoria: "Collares",
    alias:"collares",
    data: [
      {
        href: "catalogo/JAU/big/2605.jpg",
        codigo: "2605",
        nombre: "COLLAR PALITO",
        descripcion:
          "Collar de oro amarillo con diseño de palito y 7 perlas de 4 a 4,5mm.",
      },
      {
        href: "catalogo/JAU/big/2610.jpg",
        codigo: "2610",
        nombre: "COLLAR PALITO",
        descripcion:
          "Collar de oro amarillo con diseño de palito y 7 perlas de 5 a 5,5mm.",
      },
      {
        href: "catalogo/JAU/big/2615.jpg",
        codigo: "2615",
        nombre: "COLLAR TUBO CUAD",
        descripcion:
          "Collar de oro amarillo con diseño de tubo cuadrado y 7 perlas de 4 a 4,5mm.",
      },
      {
        href: "catalogo/JAU/big/2625.jpg",
        codigo: "2625",
        nombre: "COLLAR CADENA",
        descripcion:
          "Collar de oro amarillo con diseño de cadena y 7 perlas de 4 a 4,5mm.",
      },
      {
        href: "catalogo/JAU/big/2635.jpg",
        codigo: "2635",
        nombre: "COLLAR CADENA",
        descripcion:
          "Collar de oro amarillo con diseño de cadena y 7 perlas de río de 5x9mm.",
      },
      {
        href: "catalogo/JAU/big/2640.jpg",
        codigo: "2640",
        nombre: "COLLAR CADENA",
        descripcion:
          "Collar de oro amarillo con diseño de cadena y 14 perlas de río de 3x4mm.",
      },
      {
        href: "catalogo/JAU/big/2642.jpg",
        codigo: "2642",
        nombre: "COLLAR PERLA RIO",
        descripcion:
          "Collar de oro amarillo con diseño de perlas de río rosadas y bolitas.",
      },
      {
        href: "catalogo/JAU/big/2650.jpg",
        codigo: "2650",
        nombre: "COLLAR CADENA",
        descripcion:
          "Collar de oro amarillo con diseño de cadena y 4 perlas de 4 a 4,5mm y 8 bolitas.",
      },
      {
        href: "catalogo/JAU/big/2655.jpg",
        codigo: "2655",
        nombre: "COLLAR CADENA",
        descripcion:
          "Collar de oro amarillo con diseño de cadena y 6 perlas de río de 5x3mm y 15 bolitas.",
      },
      {
        href: "catalogo/JAU/big/2660.jpg",
        codigo: "2660",
        nombre: "COLLAR BOLITAS",
        descripcion:
          "Collar de oro amarillo con diseño de bolitas de 5mm y 6 de 3mm.",
      },
      {
        href: "catalogo/JAU/big/2665.jpg",
        codigo: "2665",
        nombre: "COLLAR BOLITAS",
        descripcion:
          "Collar de oro amarillo con diseño de bolitas de 1 a 5mm, 2 a 4mm y 2 a 3mm.",
      },
      {
        href: "catalogo/JAU/big/2701.jpg",
        codigo: "2701",
        nombre: "COLLAR CADENA",
        descripcion:
          "Collar de oro amarillo con diseño de cadena, palito y 7 bolitas de 4mm.",
      },
      {
        href: "catalogo/JAU/big/2702.jpg",
        codigo: "2702",
        nombre: "COLLAR CADENA",
        descripcion:
          "Collar de oro amarillo con diseño de cadena y 7 bolitas de 4mm.",
      },
      {
        href: "catalogo/JAU/big/2703.jpg",
        codigo: "2703",
        nombre: "COLLAR ESLABON",
        descripcion:
          "Collar de oro amarillo con diseño de eslabón torcido y 45 bolitas de 4mm.",
      },
      {
        href: "catalogo/JAU/big/2704.jpg",
        codigo: "2704",
        nombre: "COLLAR PALITOS",
        descripcion:
          "Collar de oro amarillo con diseño de palitos y bolitas de 4mm.",
      },
      {
        href: "catalogo/JAU/big/2706.jpg",
        codigo: "2706",
        nombre: "COLLAR PALITO",
        descripcion:
          "Collar de oro amarillo con diseño de palito y eslabón torcido.",
      },
      {
        href: "catalogo/JAU/big/2707.jpg",
        codigo: "2707",
        nombre: "COLLAR ESLABON",
        descripcion: "Collar de oro amarillo con diseño de eslabón humita.",
      },
      {
        href: "catalogo/JAU/big/2708.jpg",
        codigo: "2708",
        nombre: "COLLAR PALITO",
        descripcion:
          "Collar de oro amarillo con diseño de palito y eslabón en forma de ocho.",
      },
      {
        href: "catalogo/JAU/big/2709.jpg",
        codigo: "2709",
        nombre: "COLLAR ESLABON",
        descripcion:
          "Collar de oro amarillo con diseño de eslabón humita y toniquete.",
      },
      {
        href: "catalogo/JAU/big/2710.jpg",
        codigo: "2710",
        nombre: "COLLAR ESLABON",
        descripcion: "Collar de oro amarillo con diseño de eslabón doble.",
      },
      {
        href: "catalogo/JAU/big/2711.jpg",
        codigo: "2711",
        nombre: "COLLAR ESLABON",
        descripcion:
          "Collar de oro amarillo con diseño de eslabón Gucci microf.",
      },
      {
        href: "catalogo/JAU/big/2712.jpg",
        codigo: "2712",
        nombre: "COLLAR PALITO",
        descripcion: "Collar de oro amarillo con diseño de palito.",
      },
      {
        href: "catalogo/JAU/big/2714.jpg",
        codigo: "2714",
        nombre: "COLLAR TUBO CUADRADO",
        descripcion: "Collar de oro amarillo con diseño de tubo cuadrado.",
      },
      {
        href: "catalogo/JAU/big/2716.jpg",
        codigo: "2716",
        nombre: "COLLAR TURBILLON",
        descripcion:
          "Collar de oro amarillo con diseño de turbillon inglés simple.",
      },
      {
        href: "catalogo/JAU/big/2718.jpg",
        codigo: "2718",
        nombre: "COLLAR TURBILLON",
        descripcion:
          "Collar de oro amarillo con diseño de turbillon inglés con rectángulo.",
      },
      {
        href: "catalogo/JAU/big/2720.jpg",
        codigo: "2720",
        nombre: "COLLAR TURBILLON",
        descripcion:
          "Collar de oro amarillo con diseño de turbillon inglés con rombos.",
      },
      {
        href: "catalogo/JAU/big/2722.jpg",
        codigo: "2722",
        nombre: "COLLAR TURBILLON",
        descripcion: "Collar de oro amarillo con diseño de turbillon.",
      },
      {
        href: "catalogo/JAU/big/2724.jpg",
        codigo: "2724",
        nombre: "COLLAR TURBILLON",
        descripcion: "Collar de oro amarillo con diseño de turbillon.",
      },
      {
        href: "catalogo/JAU/big/2726.jpg",
        codigo: "2726",
        nombre: "COLLAR TURBILLON",
        descripcion: "Collar de oro amarillo con diseño de turbillon tubo.",
      },
      {
        href: "catalogo/JAU/big/2728.jpg",
        codigo: "2728",
        nombre: "COLLAR TURBILLON",
        descripcion:
          "Collar de oro amarillo con diseño de turbillon alambre tubo.",
      },
      {
        href: "catalogo/JAU/big/2729.jpg",
        codigo: "2729",
        nombre: "COLLAR CHAPAS",
        descripcion:
          "Collar de oro amarillo con diseño de chapas rectangulares.",
      },
      {
        href: "catalogo/JAU/big/2730.jpg",
        codigo: "2730",
        nombre: "COLLAR PANTER",
        descripcion: "Collar de oro amarillo con diseño de panter triple.",
      },
      {
        href: "catalogo/JAU/big/2731.jpg",
        codigo: "2731",
        nombre: "COLLAR PANTER",
        descripcion: "Collar de oro amarillo con diseño de panter doble plana.",
      },
      {
        href: "catalogo/JAU/big/2732.jpg",
        codigo: "2732",
        nombre: "COLLAR PANTER",
        descripcion: "Collar de oro amarillo con diseño de panter cuadruple.",
      },
      {
        href: "catalogo/JAU/big/2734.jpg",
        codigo: "2734",
        nombre: "COLLAR TEKA",
        descripcion: "Collar de oro amarillo con diseño de teka lisa.",
      },
      {
        href: "catalogo/JAU/big/2735.jpg",
        codigo: "2735",
        nombre: "COLLAR TEKA",
        descripcion: "Collar de oro amarillo con diseño de teka con dibujo.",
      },
      {
        href: "catalogo/JAU/big/2738.jpg",
        codigo: "2738",
        nombre: "COLLAR ESLABON",
        descripcion: "Collar de oro amarillo con diseño de eslabón anillo.",
      },
      {
        href: "catalogo/JAU/big/2739.jpg",
        codigo: "2739",
        nombre: "COLLAR ESLABON",
        descripcion: "Collar de oro amarillo con diseño de eslabón perro.",
      },
      {
        href: "catalogo/JAU/big/2740.jpg",
        codigo: "2740",
        nombre: "COLLAR ESLABON",
        descripcion: "Collar de oro amarillo con diseño de eslabón perro.",
      },
      {
        href: "catalogo/JAU/big/2741.jpg",
        codigo: "2741",
        nombre: "COLLAR ESLABON",
        descripcion: "Collar de oro amarillo con diseño de eslabón perro.",
      },
      {
        href: "catalogo/JAU/big/2742.jpg",
        codigo: "2742",
        nombre: "COLLAR ESLABON",
        descripcion: "Collar de oro amarillo con diseño de eslabón perro.",
      },
      {
        href: "catalogo/JAU/big/2743.jpg",
        codigo: "2743",
        nombre: "COLLAR ESLABON",
        descripcion: "Collar de oro amarillo con diseño de eslabón largo.",
      },
      {
        href: "catalogo/JAU/big/2744.jpg",
        codigo: "2744",
        nombre: "COLLAR ESLABON",
        descripcion: "Collar de oro amarillo con diseño de eslabón largo.",
      },
      {
        href: "catalogo/JAU/big/2746.jpg",
        codigo: "2746",
        nombre: "COLLAR ESLABON",
        descripcion: "Collar de oro amarillo con diseño de eslabón veronica.",
      },
      {
        href: "catalogo/JAU/big/2750.jpg",
        codigo: "2750",
        nombre: "COLLAR ESLABON",
        descripcion:
          "Collar de oro amarillo con diseño de eslabón corto/largo.",
      },
      {
        href: "catalogo/JAU/big/2752.jpg",
        codigo: "2752",
        nombre: "COLLAR ESLABON",
        descripcion: "Collar de oro amarillo con diseño de eslabón corto.",
      },
      {
        href: "catalogo/JAU/big/2754.jpg",
        codigo: "2754",
        nombre: "COLLAR ESLABON",
        descripcion: "Collar de oro amarillo con diseño de eslabón soldado.",
      },
      {
        href: "catalogo/JAU/big/2756.jpg",
        codigo: "2756",
        nombre: "COLLAR ESLABON",
        descripcion: "Collar de oro amarillo con diseño de eslabón doblado.",
      },
      {
        href: "catalogo/JAU/big/2760.jpg",
        codigo: "2760",
        nombre: "COLLAR ESLABON",
        descripcion:
          "Collar de oro amarillo con diseño de eslabón Cartier 1x1.",
      },
      {
        href: "catalogo/JAU/big/2762.jpg",
        codigo: "2762",
        nombre: "COLLAR ESLABON",
        descripcion:
          "Collar de oro amarillo con diseño de eslabón Cartier 1x1.",
      },
      {
        href: "catalogo/JAU/big/2764.jpg",
        codigo: "2764",
        nombre: "COLLAR ESLABON",
        descripcion:
          "Collar de oro amarillo con diseño de eslabón Cartier 3x1.",
      },
      {
        href: "catalogo/JAU/big/2765.jpg",
        codigo: "2765",
        nombre: "COLLAR ESLABON",
        descripcion:
          "Collar de oro amarillo con diseño de eslabón Cartier 3x1.",
      },
      {
        href: "catalogo/JAU/big/2766.jpg",
        codigo: "2766",
        nombre: "COLLAR ESLABON",
        descripcion:
          "Collar de oro amarillo con diseño de eslabón Cartier 3x1.",
      },
      {
        href: "catalogo/JAU/big/2770.jpg",
        codigo: "2770",
        nombre: "COLLAR ESLABON",
        descripcion:
          "Collar de oro amarillo con diseño de eslabón perfil cuadrado.",
      },
      {
        href: "catalogo/JAU/big/2772.jpg",
        codigo: "2772",
        nombre: "COLLAR ESLABON",
        descripcion:
          "Collar de oro amarillo con diseño de eslabón perro con hebilla.",
      },
      {
        href: "catalogo/JAU/big/2774.jpg",
        codigo: "2774",
        nombre: "COLLAR ESLABON",
        descripcion:
          "Collar de oro amarillo con diseño de eslabón Cartier 3x1.",
      },
      {
        href: "catalogo/JAU/big/2776.jpg",
        codigo: "2776",
        nombre: "COLLAR ESLABON",
        descripcion:
          "Collar de oro amarillo con diseño de eslabón Cartier 3x1.",
      },
      {
        href: "catalogo/JAU/big/2780.jpg",
        codigo: "2780",
        nombre: "COLLAR ESLABON",
        descripcion: "Collar de oro amarillo con diseño de eslabón doble ocho.",
      },
      {
        href: "catalogo/JAU/big/2782.jpg",
        codigo: "2782",
        nombre: "COLLAR ESLABON",
        descripcion:
          "Collar de oro amarillo con diseño de eslabón estampado italiano.",
      },
      {
        href: "catalogo/JAU/big/2787.jpg",
        codigo: "2787",
        nombre: "COLLAR ESLABON",
        descripcion:
          "Collar de oro amarillo con diseño de eslabón circular con nudo llano y bolita de cajón.",
      },
      {
        href: "catalogo/JAU/big/2788.jpg",
        codigo: "2788",
        nombre: "COLLAR ESLABON",
        descripcion:
          "Collar de oro amarillo con diseño de eslabón circular chico con broche de timon.",
      },
      {
        href: "catalogo/JAU/big/2790.jpg",
        codigo: "2790",
        nombre: "COLLAR ESLABON",
        descripcion:
          "Collar de oro amarillo con diseño de eslabón circular doble con broche de timon.",
      },
      {
        href: "catalogo/JAU/big/2791.jpg",
        codigo: "2791",
        nombre: "COLLAR ESLABON",
        descripcion:
          "Collar de oro amarillo con diseño de eslabón circular agarrado doble con broche de timon.",
      },
      {
        href: "catalogo/JAU/big/2792.jpg",
        codigo: "2792",
        nombre: "COLLAR CORAZON",
        descripcion:
          "Collar de oro amarillo con diseño de corazón y llave colgando.",
      },
    ],
  },
  {
    categoria: "Cadenas",
    alias:"cadenas",
    data: [
      {
        href: "catalogo/JAU/big/2835.jpg",
        codigo: "2835",
        nombre: "Cadena a mano",
        descripcion:
          "Cadena de oro amarillo a mano con calibre 0,35cm de ancho, 40cm de largo y pesos de 1,9 gramos, 45cm de largo y 2,1 gramos, y 60cm de largo y 2,7 gramos.",
      },
      {
        href: "catalogo/JAU/big/2840.jpg",
 
        codigo: "2840",
        nombre: "Cadena a mano",
        descripcion:
          "Cadena de oro amarillo a mano con calibre 0,45cm de ancho, 40cm de largo y pesos de 2,4 gramos, 45cm de largo y 2,7 gramos, y 60cm de largo y 3,4 gramos.",
      },
      {
        href: "catalogo/JAU/big/2845.jpg",

        codigo: "2845",
        nombre: "Cadena a mano",
        descripcion:
          "Cadena de oro amarillo a mano con calibre 0,45cm de ancho, 40cm de largo y pesos de 3,0 gramos, 45cm de largo y 3,3 gramos, y 60cm de largo y 4,4 gramos.",
      },
      {
        href: "catalogo/JAU/big/2850.jpg",
        codigo: "2850",
        nombre: "Cadena a mano",
        descripcion:
          "Cadena de oro amarillo a mano con calibre 0,50cm de ancho, 45cm de largo y peso de 4,1 gramos, y 60cm de largo y 5,3 gramos.",
      },
      {
        href: "catalogo/JAU/big/2855.jpg",
        codigo: "2855",
        nombre: "Cadena a mano",
        descripcion:
          "Cadena de oro amarillo a mano con calibre 0,55cm de ancho, 45cm de largo y peso de 5,0 gramos, y 60cm de largo y 6,5 gramos.",
      },
      {
        href: "catalogo/JAU/big/2860.jpg",
        codigo: "2860",
        nombre: "Cadena a mano",
        descripcion:
          "Cadena de oro amarillo a mano con calibre 0,60cm de ancho y 60cm de largo y peso de 8,2 gramos.",
      },
      {
        href: "catalogo/JAU/big/2865.jpg",
        codigo: "2865",
        nombre: "Cadena a mano",
        descripcion:
          "Cadena de oro amarillo a mano con calibre 0,65cm de ancho y 60cm de largo y peso de 10,3 gramos.",
      },
      {
        href: "catalogo/JAU/big/2870.jpg",
        codigo: "2870",
        nombre: "Cadena a mano",
        descripcion:
          "Cadena de oro amarillo a mano con calibre 0,70cm de ancho y 60cm de largo y peso de 15,0 gramos.",
      },
      {
        href: "catalogo/JAU/big/2930.jpg",
        codigo: "2930",
        nombre: "Cadena a maquina",
        descripcion:
          "Cadena de oro amarillo a maquina con calibre 0,30cm de ancho, 40cm de largo y pesos de 1,3 gramos, 45cm de largo y 1,5 gramos, y 60cm de largo y 2,0 gramos.",
      },
      {
        href: "catalogo/JAU/big/2935.jpg",
        codigo: "2935",
        nombre: "Cadena a maquina",
        descripcion:
          "Cadena de oro amarillo a maquina con calibre 0,35cm de ancho, 40cm de largo y pesos de 1,8 gramos, 45cm de largo y 2,0 gramos, y 60cm de largo y 2,5 gramos.",
      },
      {
        href: "catalogo/JAU/big/2940.jpg",
        codigo: "2940",
        nombre: "Cadena a maquina",
        descripcion:
          "Cadena de oro amarillo a maquina con calibre 0,40cm de ancho, 40cm de largo y pesos de 2,3 gramos, 45cm de largo y 2,6 gramos, y 60cm de largo y 3,5 gramos.",
      },
      {
        href: "catalogo/JAU/big/2945.jpg",
        codigo: "2945",
        nombre: "Cadena a maquina",
        descripcion:
          "Cadena de oro amarillo a maquina con calibre 0,45cm de ancho, 45cm de largo y peso de 3,5 gramos, y 60cm de largo y 4,5 gramos.",
      },
      {
        href: "catalogo/JAU/big/2950.jpg",
        codigo: "2950",
        nombre: "Cadena a maquina",
        descripcion:
          "Cadena de oro amarillo a maquina con calibre 0,50cm de ancho, 45cm de largo y peso de 4,0 gramos, y 60cm de largo y 5,3 gramos.",
      },
      {
        href: "catalogo/JAU/big/2955.jpg",
        codigo: "2955",
        nombre: "Cadena a maquina",
        descripcion:
          "Cadena de oro amarillo a maquina con calibre 0,55cm de ancho y 60cm de largo y peso de 6,5 gramos.",
      },
      {
        href: "catalogo/JAU/big/2960.jpg",
        codigo: "2960",
        nombre: "Cadena a maquina",
        descripcion:
          "Cadena de oro amarillo a maquina con calibre 0,60cm de ancho y 60cm de largo y peso de 7,4 gramos.",
      },
      {
        href: "catalogo/JAU/big/2970.jpg",
        codigo: "2970",
        nombre: "Cadena a maquina",
        descripcion:
          "Cadena de oro amarillo a maquina con calibre 0,70cm de ancho y 60cm de largo y peso de 13,8 gramos.",
      },
    ],
  },
  {
    categoria: "Aros",
    alias:"aros",
    data: [
      {
        href: "catalogo/JAU/big/3002.jpg",
        codigo: "3002",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 34 solitario.",
      },
      {
        href: "catalogo/JAU/big/3004.jpg",
        codigo: "3004",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 43 solitario.",
      },
      {
        href: "catalogo/JAU/big/3006.jpg",
        codigo: "3006",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 52 solitario.",
      },
      {
        href: "catalogo/JAU/big/3008.jpg",
        codigo: "3008",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 62 solitario.",
      },
      {
        href: "catalogo/JAU/big/3010.jpg",
        codigo: "3010",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 71 solitario.",
      },
      {
        href: "catalogo/JAU/big/3012.jpg",
        codigo: "3012",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 34 pistilo.",
      },
      {
        href: "catalogo/JAU/big/3014.jpg",
        codigo: "3014",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 43 pistilo.",
      },
      {
        href: "catalogo/JAU/big/3016.jpg",
        codigo: "3016",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 52 pistilo.",
      },
      {
        href: "catalogo/JAU/big/3018.jpg",
        codigo: "3018",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 62 pistilo.",
      },
      {
        href: "catalogo/JAU/big/3020.jpg",
        codigo: "3020",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 71 pistilo.",
      },
      {
        href: "catalogo/JAU/big/3021.jpg",
        codigo: "3021",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de cuello payaso bebe.",
      },
      {
        href: "catalogo/JAU/big/3022.jpg",
        codigo: "3022",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 43 payaso.",
      },
      {
        href: "catalogo/JAU/big/3024.jpg",
        codigo: "3024",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 52 payaso.",
      },
      {
        href: "catalogo/JAU/big/3026.jpg",
        codigo: "3026",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 62 payaso.",
      },
      {
        href: "catalogo/JAU/big/3028.jpg",
        codigo: "3028",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 43 rosa.",
      },
      {
        href: "catalogo/JAU/big/3030.jpg",
        codigo: "3030",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 48 plato.",
      },
      {
        href: "catalogo/JAU/big/3032.jpg",
        codigo: "3032",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 62 casco.",
      },
      {
        href: "catalogo/JAU/big/3034.jpg",
        codigo: "3034",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 34 trebol.",
      },
      {
        href: "catalogo/JAU/big/3036.jpg",
        codigo: "3036",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 34 facet.",
      },
      {
        href: "catalogo/JAU/big/3038.jpg",
        codigo: "3038",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 40 facet.",
      },
      {
        href: "catalogo/JAU/big/3040.jpg",
        codigo: "3040",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 48 facet.",
      },
      {
        href: "catalogo/JAU/big/3042.jpg",
        codigo: "3042",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perlas y 62 canasto.",
      },
      {
        href: "catalogo/JAU/big/3043.jpg",
        codigo: "3043",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de delfin y perlas en la nariz.",
      },
      {
        href: "catalogo/JAU/big/3044.jpg",
        codigo: "3044",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de roset y circonita circular.",
      },
      {
        href: "catalogo/JAU/big/3046.jpg",
        codigo: "3046",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de perla de 4,0mm y 10 piedras.",
      },
      {
        href: "catalogo/JAU/big/3049.jpg",
        codigo: "3049",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de 0772.",
      },
      {
        href: "catalogo/JAU/big/3050.jpg",
        codigo: "3050",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de lady D en esmeralda y onix.",
      },
      {
        href: "catalogo/JAU/big/3051.jpg",
        codigo: "3051",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de 0756.",
      },
      {
        href: "catalogo/JAU/big/3052.jpg",
        codigo: "3052",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de espiral en circonita y rubi.",
      },
      {
        href: "catalogo/JAU/big/3053.jpg",
        codigo: "3053",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de 0762.",
      },
      {
        href: "catalogo/JAU/big/3054.jpg",
        codigo: "3054",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tulip en circonita y onix.",
      },
      {
        href: "catalogo/JAU/big/3055.jpg",
        codigo: "3055",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de 0757.",
      },
      {
        href: "catalogo/JAU/big/3056.jpg",
        codigo: "3056",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de trebol en circonita y rubi.",
      },
      {
        href: "catalogo/JAU/big/3059.jpg",
        codigo: "3059",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de 1957.",
      },
      {
        href: "catalogo/JAU/big/3060.jpg",
        codigo: "3060",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de solitario con piedra de circonita y rubi.",
      },
      {
        href: "catalogo/JAU/big/3064.jpg",
        codigo: "3064",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de rombo con 2 piedras.",
      },
      {
        href: "catalogo/JAU/big/3066.jpg",
        codigo: "3066",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de rombo y circonita en el vertice.",
      },
      {
        href: "catalogo/JAU/big/3068.jpg",
        codigo: "3068",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de doble rombo chico y circonita.",
      },
      {
        href: "catalogo/JAU/big/3069.jpg",
        codigo: "3069",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de doble rombo grande y circonita.",
      },
      {
        href: "catalogo/JAU/big/3070.jpg",
        codigo: "3070",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de doble circunferencia con alambre y circonita.",
      },
      {
        href: "catalogo/JAU/big/3072.jpg",
        codigo: "3072",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de rombo y circonita en el centro.",
      },
      {
        href: "catalogo/JAU/big/3074.jpg",
        codigo: "3074",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de piedra en forma de corazón.",
      },
      {
        href: "catalogo/JAU/big/3076.jpg",
        codigo: "3076",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de gota.",
      },
      {
        href: "catalogo/JAU/big/3080.jpg",
        codigo: "3080",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de rodeado ovalado.",
      },
      {
        href: "catalogo/JAU/big/3082.jpg",
        codigo: "3082",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de rodeado rectangular.",
      },
      {
        href: "catalogo/JAU/big/3083.jpg",
        codigo: "3083",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de 0788.",
      },
      {
        href: "catalogo/JAU/big/3084.jpg",
        codigo: "3084",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de 0787 con vástago.",
      },
      {
        href: "catalogo/JAU/big/3086.jpg",
        codigo: "3086",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de 0787 colgante.",
      },
      {
        href: "catalogo/JAU/big/3088.jpg",
        codigo: "3088",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de 0749.",
      },
      {
        href: "catalogo/JAU/big/3090.jpg",
        codigo: "3090",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de 0781.",
      },
      {
        href: "catalogo/JAU/big/3092.jpg",
        codigo: "3092",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño festonado con 3 carré de circonita.",
      },
      {
        href: "catalogo/JAU/big/3094.jpg",
        codigo: "3094",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de 0759.",
      },
      {
        href: "catalogo/JAU/big/3125.jpg",
        codigo: "3125",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de circunferencia y NCCA60.",
      },
      {
        href: "catalogo/JAU/big/3126.jpg",
        codigo: "3126",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de circunferencia y NCCA100.",
      },
      {
        href: "catalogo/JAU/big/3130.jpg",
        codigo: "3130",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño mabe trapecio liso.",
      },
      {
        href: "catalogo/JAU/big/3210.jpg",
        codigo: "3210",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño facetado en forma de raya.",
      },
      {
        href: "catalogo/JAU/big/3220.jpg",
        codigo: "3220",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño facetado diagonal en forma de prisma.",
      },
      {
        href: "catalogo/JAU/big/3230.jpg",
        codigo: "3230",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño facetado diagonal.",
      },
      {
        href: "catalogo/JAU/big/3310.jpg",
        codigo: "3310",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño tipo bote.",
      },
      {
        href: "catalogo/JAU/big/3320.jpg",
        codigo: "3320",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño tipo bote.",
      },
      {
        href: "catalogo/JAU/big/3330.jpg",
        codigo: "3330",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño tipo bote.",
      },
      {
        href: "catalogo/JAU/big/3340.jpg",
        codigo: "3340",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño tipo bote.",
      },
      {
        href: "catalogo/JAU/big/3350.jpg",
        codigo: "3350",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño tipo bote.",
      },
      {
        href: "catalogo/JAU/big/3360.jpg",
        codigo: "3360",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño tipo bote.",
      },
      {
        href: "catalogo/JAU/big/3370.jpg",
        codigo: "3370",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño tipo bote sin tapa y cierre sin tuerca.",
      },
      {
        href: "catalogo/JAU/big/3375.jpg",
        codigo: "3375",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño tipo bote sin tapa y cierre con tuerca.",
      },
      {
        href: "catalogo/JAU/big/3403.jpg",
        codigo: "3403",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de tubo cuadrado.",
      },
      {
        href: "catalogo/JAU/big/3406.jpg",
        codigo: "3406",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de tubo cuadrado.",
      },
      {
        href: "catalogo/JAU/big/3412.jpg",
        codigo: "3412",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo hexagonal.",
      },
      {
        href: "catalogo/JAU/big/3415.jpg",
        codigo: "3415",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo hexagonal.",
      },
      {
        href: "catalogo/JAU/big/3418.jpg",
        codigo: "3418",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo hexagonal.",
      },
      {
        href: "catalogo/JAU/big/3421.jpg",
        codigo: "3421",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo redondo y gancho.",
      },
      {
        href: "catalogo/JAU/big/3424.jpg",
        codigo: "3424",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo redondo y gancho.",
      },
      {
        href: "catalogo/JAU/big/3427.jpg",
        codigo: "3427",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo redondo y gancho.",
      },
      {
        href: "catalogo/JAU/big/3430.jpg",
        codigo: "3430",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo redondo y gancho.",
      },
      {
        href: "catalogo/JAU/big/3433.jpg",
        codigo: "3433",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo redondo y gancho.",
      },
      {
        href: "catalogo/JAU/big/3436.jpg",
        codigo: "3436",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo redondo y gancho.",
      },
      {
        href: "catalogo/JAU/big/3439.jpg",
        codigo: "3439",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de tubo redondo.",
      },
      {
        href: "catalogo/JAU/big/3442.jpg",
        codigo: "3442",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de tubo redondo.",
      },
      {
        href: "catalogo/JAU/big/3445.jpg",
        codigo: "3445",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de tubo redondo.",
      },
      {
        href: "catalogo/JAU/big/3448.jpg",
        codigo: "3448",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de tubo redondo.",
      },
      {
        href: "catalogo/JAU/big/3451.jpg",
        codigo: "3451",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de tubo redondo.",
      },
      {
        href: "catalogo/JAU/big/3452.jpg",
        codigo: "3452",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de doble tubo concéntrico.",
      },
      {
        href: "catalogo/JAU/big/3453.jpg",
        codigo: "3453",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo y una bolita de 5mm.",
      },
      {
        href: "catalogo/JAU/big/3454.jpg",
        codigo: "3454",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo, una bolita de 5mm y dos bolitas adicionales.",
      },
      {
        href: "catalogo/JAU/big/3455.jpg",
        codigo: "3455",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de tres tubos.",
      },
      {
        href: "catalogo/JAU/big/3456.jpg",
        codigo: "3456",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de multitubos entrelazados.",
      },
      {
        href: "catalogo/JAU/big/3457.jpg",
        codigo: "3457",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo perforado especial en forma helicoidal redonda.",
      },
      {
        href: "catalogo/JAU/big/3460.jpg",
        codigo: "3460",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo perforado especial en forma helicoidal redonda.",
      },
      {
        href: "catalogo/JAU/big/3463.jpg",
        codigo: "3463",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo perforado especial en forma helicoidal redonda.",
      },
      {
        href: "catalogo/JAU/big/3466.jpg",
        codigo: "3466",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo perforado especial en forma triangular redonda.",
      },
      {
        href: "catalogo/JAU/big/3469.jpg",
        codigo: "3469",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo perforado especial en forma triangular redonda.",
      },
      {
        href: "catalogo/JAU/big/3472.jpg",
        codigo: "3472",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo perforado especial en forma triangular redonda.",
      },
      {
        href: "catalogo/JAU/big/3475.jpg",
        codigo: "3475",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo perforado especial redondo campana.",
      },
      {
        href: "catalogo/JAU/big/3478.jpg",
        codigo: "3478",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo perforado especial redondo campana.",
      },
      {
        href: "catalogo/JAU/big/3481.jpg",
        codigo: "3481",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo perforado especial redondo campana.",
      },
      {
        href: "catalogo/JAU/big/3484.jpg",
        codigo: "3484",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo perforado especial triangular en forma de campana.",
      },
      {
        href: "catalogo/JAU/big/3487.jpg",
        codigo: "3487",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo perforado especial triangular en forma de campana.",
      },
      {
        href: "catalogo/JAU/big/3490.jpg",
        codigo: "3490",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de tubo perforado especial triangular en forma de campana.",
      },
      {
        href: "catalogo/JAU/big/3500.jpg",
        codigo: "3500",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de palito colgante con bolitas.",
      },
      {
        href: "catalogo/JAU/big/3501.jpg",
        codigo: "3501",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de barra con chispitas.",
      },
      {
        href: "catalogo/JAU/big/3502.jpg",
        codigo: "3502",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con 4 bolitas de 4mm colgantes.",
      },
      {
        href: "catalogo/JAU/big/3503.jpg",
        codigo: "3503",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño turbillón de 3.2mm.",
      },
      {
        href: "catalogo/JAU/big/3506.jpg",
        codigo: "3506",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño turbillón.",
      },
      {
        href: "catalogo/JAU/big/3507.jpg",
        codigo: "3507",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño espiral y gancho circular.",
      },
      {
        href: "catalogo/JAU/big/3508.jpg",
        codigo: "3508",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de rosa y gancho circular.",
      },
      {
        href: "catalogo/JAU/big/3509.jpg",
        codigo: "3509",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño fantasía, gancho circular y detalles rojos.",
      },
      {
        href: "catalogo/JAU/big/3510.jpg",
        codigo: "3510",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de burbujas y 5 circones.",
      },
      {
        href: "catalogo/JAU/big/3511.jpg",
        codigo: "3511",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño panter en forma de rombo.",
      },
      {
        href: "catalogo/JAU/big/3512.jpg",
        codigo: "3512",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de tubo múltiple.",
      },
      {
        href: "catalogo/JAU/big/3513.jpg",
        codigo: "3513",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de 2 lunas (modelo nº1).",
      },
      {
        href: "catalogo/JAU/big/3514.jpg",
        codigo: "3514",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de 2 lunas (modelo nº2).",
      },
      {
        href: "catalogo/JAU/big/3516.jpg",
        codigo: "3516",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de 2 lunas (modelo nº3).",
      },
      {
        href: "catalogo/JAU/big/3524.jpg",
        codigo: "3524",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño prisionero con perlas de 55mm y gancho.",
      },
      {
        href: "catalogo/JAU/big/3525.jpg",
        codigo: "3525",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de alambre torcido y perlas.",
      },
      {
        href: "catalogo/JAU/big/3526.jpg",
        codigo: "3526",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de alambre torcido y perlas.",
      },
      {
        href: "catalogo/JAU/big/3527.jpg",
        codigo: "3527",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de lágrima, perlas de 40mm y gancho.",
      },
      {
        href: "catalogo/JAU/big/3530.jpg",
        codigo: "3530",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de jaula, perlas de 43mm y gancho doble.",
      },
      {
        href: "catalogo/JAU/big/3533.jpg",
        codigo: "3533",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de antorcha, perlas de 50mm y gancho.",
      },
      {
        href: "catalogo/JAU/big/3536.jpg",
        codigo: "3536",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de pistilo fijo y perlas de 55mm.",
      },
      {
        href: "catalogo/JAU/big/3539.jpg",
        codigo: "3539",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de rosa, perlas de 42mm y gancho doble.",
      },
      {
        href: "catalogo/JAU/big/3540.jpg",
        codigo: "3540",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño espiral y perla.",
      },
      {
        href: "catalogo/JAU/big/3541.jpg",
        codigo: "3541",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño espiral y bolita.",
      },
      {
        href: "catalogo/JAU/big/3542.jpg",
        codigo: "3542",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de lágrima, perlas de 40mm y perno.",
      },
      {
        href: "catalogo/JAU/big/3545.jpg",
        codigo: "3545",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con perlas de río de 95mm y gancho.",
      },
      {
        href: "catalogo/JAU/big/3548.jpg",
        codigo: "3548",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de filigrana y gancho.",
      },
      {
        href: "catalogo/JAU/big/3551.jpg",
        codigo: "3551",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de filigrana y gancho.",
      },
      {
        href: "catalogo/JAU/big/3553.jpg",
        codigo: "3553",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de sol calado.",
      },
      {
        href: "catalogo/JAU/big/3554.jpg",
        codigo: "3554",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de corazón pequeño y cadena.",
      },
      {
        href: "catalogo/JAU/big/3557.jpg",
        codigo: "3557",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de corazón grande y cadena.",
      },
      {
        href: "catalogo/JAU/big/3560.jpg",
        codigo: "3560",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de estrella y cadena.",
      },
      {
        href: "catalogo/JAU/big/3563.jpg",
        codigo: "3563",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de media luna y cadena.",
      },
      {
        href: "catalogo/JAU/big/3566.jpg",
        codigo: "3566",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de corazón y gancho.",
      },
      {
        href: "catalogo/JAU/big/3569.jpg",
        codigo: "3569",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de corazón y gancho.",
      },
      {
        href: "catalogo/JAU/big/3579.jpg",
        codigo: "3579",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo colgantes con diseño de corazón grande y perla.",
      },
      {
        href: "catalogo/JAU/big/3593.jpg",
        codigo: "3593",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con 3 cadenas y corazones pequeños.",
      },
      {
        href: "catalogo/JAU/big/3596.jpg",
        codigo: "3596",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con 3 cadenas y bolitas de 4mm.",
      },
      {
        href: "catalogo/JAU/big/3603.jpg",
        codigo: "3603",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con perlas de 34mm y diseño chattelaine.",
      },
      {
        href: "catalogo/JAU/big/3606.jpg",
        codigo: "3606",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con perlas de 43mm y diseño chattelaine.",
      },
      {
        href: "catalogo/JAU/big/3609.jpg",
        codigo: "3609",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con perlas de 52mm y diseño chattelaine.",
      },
      {
        href: "catalogo/JAU/big/3611.jpg",
        codigo: "3611",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con piedras, diseño chattelaine circular y cierre.",
      },
      {
        href: "catalogo/JAU/big/3612.jpg",
        codigo: "3612",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con piedras, diseño chattelaine circular y cierre.",
      },
      {
        href: "catalogo/JAU/big/3613.jpg",
        codigo: "3613",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con piedras, diseño chattelaine circular y cierre.",
      },
      {
        href: "catalogo/JAU/big/3614.jpg",
        codigo: "3614",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con piedras, diseño chattelaine circular y cierre.",
      },
      {
        href: "catalogo/JAU/big/3615.jpg",
        codigo: "3615",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con piedras, diseño chattelaine circular y cierre.",
      },
      {
        href: "catalogo/JAU/big/3618.jpg",
        codigo: "3618",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con piedras, diseño chattelaine cuadrado y cierre.",
      },
      {
        href: "catalogo/JAU/big/3621.jpg",
        codigo: "3621",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con piedras, diseño chattelaine cuadrado y cierre.",
      },
      {
        href: "catalogo/JAU/big/3624.jpg",
        codigo: "3624",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con piedras, diseño chattelaine cuadrado y cierre.",
      },
      {
        href: "catalogo/JAU/big/3627.jpg",
        codigo: "3627",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con piedras, diseño chattelaine ovalado y cierre.",
      },
      {
        href: "catalogo/JAU/big/3630.jpg",
        codigo: "3630",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con piedras, diseño chattelaine ovalado y cierre.",
      },
      {
        href: "catalogo/JAU/big/3633.jpg",
        codigo: "3633",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con piedras, diseño chattelaine ovalado y cierre.",
      },
      {
        href: "catalogo/JAU/big/3636.jpg",
        codigo: "3636",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo chattelaine fijo con perlas de 43mm y gancho.",
      },
      {
        href: "catalogo/JAU/big/3639.jpg",
        codigo: "3639",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo chattelaine redondo con gancho y cierre.",
      },
      {
        href: "catalogo/JAU/big/3642.jpg",
        codigo: "3642",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo chattelaine redondo con gancho y cierre.",
      },
      {
        href: "catalogo/JAU/big/3645.jpg",
        codigo: "3645",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo chattelaine cuadrado con gancho y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/3648.jpg",
        codigo: "3648",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo chattelaine cuadrado con gancho y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/3651.jpg",
        codigo: "3651",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo chattelaine cuadrado con gancho y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/3654.jpg",
        codigo: "3654",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo chattelaine ovalado con gancho y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/3657.jpg",
        codigo: "3657",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo chattelaine ovalado con gancho y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/3660.jpg",
        codigo: "3660",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo chattelaine ovalado con gancho y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/3703.jpg",
        codigo: "3703",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast sin piedras con diseño de estrella.",
      },
      {
        href: "catalogo/JAU/big/3706.jpg",
        codigo: "3706",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast sin piedras con diseño de luna.",
      },
      {
        href: "catalogo/JAU/big/3709.jpg",
        codigo: "3709",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast sin piedras con diseño combinado de luna y estrella.",
      },
      {
        href: "catalogo/JAU/big/3710.jpg",
        codigo: "3710",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de lauburu (cruz vasca).",
      },
      {
        href: "catalogo/JAU/big/3712.jpg",
        codigo: "3712",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast sin piedras con diseño de moño antiguo.",
      },
      {
        href: "catalogo/JAU/big/3713.jpg",
        codigo: "3713",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de bolita de 3mm.",
      },
      {
        href: "catalogo/JAU/big/3714.jpg",
        codigo: "3714",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de bolita de 4mm.",
      },
      {
        href: "catalogo/JAU/big/3715.jpg",
        codigo: "3715",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de bolita de 5mm.",
      },
      {
        href: "catalogo/JAU/big/3717.jpg",
        codigo: "3717",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo de alambre con 2 bolitas pasadas.",
      },
      {
        href: "catalogo/JAU/big/3718.jpg",
        codigo: "3718",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo de alambre con 3 bolitas pasadas.",
      },
      {
        href: "catalogo/JAU/big/3721.jpg",
        codigo: "3721",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast sin piedras con diseño de corazón.",
      },
      {
        href: "catalogo/JAU/big/3722.jpg",
        codigo: "3722",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast sin piedras con diseño de corazón.",
      },
      {
        href: "catalogo/JAU/big/3723.jpg",
        codigo: "3723",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast sin piedras con diseño de corazón.",
      },
      {
        href: "catalogo/JAU/big/3724.jpg",
        codigo: "3724",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast sin piedras con diseño de doble corazón.",
      },
      {
        href: "catalogo/JAU/big/3725.jpg",
        codigo: "3725",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast sin piedras con diseño combinado de corazón y estrella.",
      },
      {
        href: "catalogo/JAU/big/3726.jpg",
        codigo: "3726",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo con diseño de delfines en círculo.",
      },
      {
        href: "catalogo/JAU/big/3727.jpg",
        codigo: "3727",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de delfín.",
      },
      {
        href: "catalogo/JAU/big/3728.jpg",
        codigo: "3728",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con diseño estampado de delfines.",
      },
      {
        href: "catalogo/JAU/big/3729.jpg",
        codigo: "3729",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo juvenil con 2 bolitas de 4mm y 5mm.",
      },
      {
        href: "catalogo/JAU/big/3730.jpg",
        codigo: "3730",
        nombre: "PAR DE AROS",
        descripcion: "Par de aros de oro amarillo con diseño de delfín.",
      },
      {
        href: "catalogo/JAU/big/3731.jpg",
        codigo: "3731",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con diseño de luna con cara.",
      },
      {
        href: "catalogo/JAU/big/3734.jpg",
        codigo: "3734",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con diseño de concha de ostión.",
      },
      {
        href: "catalogo/JAU/big/3736.jpg",
        codigo: "3736",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast sin piedras con diseño de oso.",
      },
      {
        href: "catalogo/JAU/big/3737.jpg",
        codigo: "3737",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con diseño estampado de ositos.",
      },
      {
        href: "catalogo/JAU/big/3738.jpg",
        codigo: "3738",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con diseño estampado de elefantes.",
      },
      {
        href: "catalogo/JAU/big/3739.jpg",
        codigo: "3739",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast con diseño de elefante industrial.",
      },
      {
        href: "catalogo/JAU/big/3740.jpg",
        codigo: "3740",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast sin piedras con diseño de mariposa.",
      },
      {
        href: "catalogo/JAU/big/3742.jpg",
        codigo: "3742",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast sin piedras con diseño de chuncho (lechuza).",
      },
      {
        href: "catalogo/JAU/big/3745.jpg",
        codigo: "3745",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast sin piedras con diseño musical.",
      },
      {
        href: "catalogo/JAU/big/3748.jpg",
        codigo: "3748",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast sin piedras con diseño de paloma.",
      },
      {
        href: "catalogo/JAU/big/3751.jpg",
        codigo: "3751",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast sin piedras con diseño de bailarina.",
      },
      {
        href: "catalogo/JAU/big/3754.jpg",
        codigo: "3754",
        nombre: "PAR DE AROS",
        descripcion:
          "Par de aros de oro amarillo estilo vast sin piedras con diseño de ángel.",
      },
    ],
  },
  {
    categoria: "Colleras",
    alias:"colleras",
    data: [
      {
        href: "catalogo/JAU/big/3910.jpg",
        codigo: "3910",
        nombre: "PAR DE COLLERAS",
        descripcion:
          "Par de colleras de oro amarillo con diseño circular liso.",
      },
      {
        href: "catalogo/JAU/big/3920.jpg",
        codigo: "3920",
        nombre: "PAR DE COLLERAS",
        descripcion:
          "Par de colleras de oro amarillo con diseño cuadrado liso.",
      },
      {
        href: "catalogo/JAU/big/3923.jpg",
        codigo: "3923",
        nombre: "PAR DE COLLERAS",
        descripcion:
          "Par de colleras de oro amarillo con diseño hexagonal liso.",
      },
      {
        href: "catalogo/JAU/big/3926.jpg",
        codigo: "3926",
        nombre: "PAR DE COLLERAS",
        descripcion: "Par de colleras de oro amarillo con diseño de bambú.",
      },
    ],
  },
  {
    categoria: "Corbateros",
    alias:"corbateros",
    data: [
      {
        href: "catalogo/JAU/big/3930.jpg",
        codigo: "3930",
        nombre: "CORBATERO",
        descripcion: "Corbatero de oro amarillo con diseño liso.",
      },
      {
        href: "catalogo/JAU/big/3940.jpg",
        codigo: "3940",
        nombre: "CORBATERO",
        descripcion: "Corbatero de oro amarillo con diseño acanalado.",
      },
      {
        href: "catalogo/JAU/big/3945.jpg",
        codigo: "3945",
        nombre: "CORBATERO",
        descripcion:
          "Corbatero de oro amarillo con diseño festoneado en diagonales, cierre de 15mm y acabado granito.",
      },
    ],
  },
  {
    categoria: "Cierres y Broches",
    alias:"cierres-broches",
    data: [
      {
        href: "catalogo/JAU/big/4005.jpg",
        codigo: "4005",
        nombre: "BROCHE PESCADO",
        descripcion:
          "Broche tipo pescado pequeño en oro amarillo para cierres de joyería.",
      },
      {
        href: "catalogo/JAU/big/4006.jpg",
        codigo: "4006",
        nombre: "BROCHE PESCADO",
        descripcion:
          "Broche tipo pescado grande en oro amarillo para cierres de joyería.",
      },
      {
        href: "catalogo/JAU/big/4010.jpg",
        codigo: "4010",
        nombre: "BROCHE CILINDRO",
        descripcion:
          "Broche cilíndrico en oro amarillo para cierres de joyería.",
      },
      {
        href: "catalogo/JAU/big/4012.jpg",
        codigo: "4012",
        nombre: "BROCHE DE TUBO",
        descripcion:
          "Broche de tubo con resorte interior en oro amarillo para cierres de joyería.",
      },
      {
        href: "catalogo/JAU/big/4020.jpg",
        codigo: "4020",
        nombre: "BROCHE NAVET",
        descripcion:
          "Broche tipo navet (ovalado) en oro amarillo para cierres de joyería.",
      },
      {
        href: "catalogo/JAU/big/4030.jpg",
        codigo: "4030",
        nombre: "BROCHE RECTO",
        descripcion:
          "Broche recto con punta truncada en oro amarillo para cierres de joyería.",
      },
      {
        href: "catalogo/JAU/big/4040.jpg",
        codigo: "4040",
        nombre: "BROCHE CIRCULAR",
        descripcion: "Broche circular con cierre en oro amarillo para joyería.",
      },
      {
        href: "catalogo/JAU/big/4050.jpg",
        codigo: "4050",
        nombre: "BROCHE FLOR",
        descripcion:
          "Broche con diseño de flor de 3 pétalos y cierre en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/4060.jpg",
        codigo: "4060",
        nombre: "BROCHE TIMÓN",
        descripcion:
          "Broche tipo timón mediano con 1 agarradera en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/4065.jpg",
        codigo: "4065",
        nombre: "BROCHE TIMÓN",
        descripcion:
          "Broche tipo timón grande con 1 agarradera en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/4070.jpg",
        codigo: "4070",
        nombre: "BROCHE TIMÓN",
        descripcion:
          "Broche tipo timón mediano con 2 agarraderas en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/4075.jpg",
        codigo: "4075",
        nombre: "BROCHE TIMÓN",
        descripcion:
          "Broche tipo timón grande con 2 agarraderas en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/4510.jpg",
        codigo: "4510",
        nombre: "ARGOLLA RESORTE",
        descripcion:
          "Argolla con resorte en oro amarillo para cierres de joyería.",
      },
      {
        href: "catalogo/JAU/big/4520.jpg",
        codigo: "4520",
        nombre: "ARGOLLA RESORTE",
        descripcion:
          "Argolla con resorte en oro amarillo para cierres de joyería.",
      },
      {
        href: "catalogo/JAU/big/4610.jpg",
        codigo: "4610",
        nombre: "SEGURO DE CADENA",
        descripcion: "Seguro para cadenas en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/4620.jpg",
        codigo: "4620",
        nombre: "SEGURO DE CADENA",
        descripcion: "Seguro para cadenas en oro amarillo.",
      },
    ],
  },
  {
    categoria: "Ilusiones",
    alias:"ilusiones",
    data: [
      {
        href: "catalogo/JAU/big/0310.jpg",
        codigo: "0310",
        nombre: "ILUSIÓN MEDIA CAÑA",
        descripcion:
          "Ilusión en oro amarillo tipo media caña, ancho 2mm, peso 2.0 gramos.",
      },
      {
        href: "catalogo/JAU/big/0315.jpg",
        codigo: "0315",
        nombre: "ILUSIÓN LISA",
        descripcion: "Ilusión en oro amarillo de superficie lisa, ancho 2mm.",
      },
      {
        href: "catalogo/JAU/big/0320.jpg",
        codigo: "0320",
        nombre: "ILUSIÓN FACETADA",
        descripcion: "Ilusión en oro amarillo con acabado facetado, ancho 2mm.",
      },
      {
        href: "catalogo/JAU/big/0330.jpg",
        codigo: "0330",
        nombre: "ILUSIÓN FACETADA",
        descripcion:
          "Ilusión en oro amarillo con acabado facetado en diagonal, ancho 2mm, peso 2.4 gramos.",
      },
      {
        href: "catalogo/JAU/big/0340.jpg",
        codigo: "0340",
        nombre: "ILUSIÓN FACETADA",
        descripcion: "Ilusión en oro amarillo con acabado facetado, ancho 2mm.",
      },
      {
        href: "catalogo/JAU/big/0350.jpg",
        codigo: "0350",
        nombre: "ILUSIÓN FACETADA",
        descripcion: "Ilusión en oro amarillo con acabado facetado, ancho 2mm.",
      },
    ],
  },
  {
    categoria: "Alianzas Bicolores",
    alias:"alianza-bicolores",
    data: [
      {
        href: "catalogo/JAU/big/0360.jpg",
        codigo: "0360",
        nombre: "ALIANZA BICOLOR",
        descripcion:
          "Alianza bicolor en oro blanco y amarillo con diseño de media caña.",
      },
      {
        href: "catalogo/JAU/big/0362.jpg",
        codigo: "0362",
        nombre: "ALIANZA BICOLOR",
        descripcion:
          "Alianza bicolor en oro blanco y amarillo con diseño plano.",
      },
      {
        href: "catalogo/JAU/big/0364.jpg",
        codigo: "0364",
        nombre: "ALIANZA BICOLOR",
        descripcion: "Alianza bicolor con media caña central en oro blanco.",
      },
      {
        href: "catalogo/JAU/big/0366.jpg",
        codigo: "0366",
        nombre: "ALIANZA BICOLOR",
        descripcion:
          "Alianza bicolor con media caña central en oro blanco y acabado arenado.",
      },
      {
        href: "catalogo/JAU/big/0368.jpg",
        codigo: "0368",
        nombre: "ALIANZA BICOLOR",
        descripcion:
          "Alianza bicolor con dos medias cañas centrales en oro blanco.",
      },
      {
        href: "catalogo/JAU/big/0370.jpg",
        codigo: "0370",
        nombre: "ALIANZA BICOLOR",
        descripcion:
          "Alianza bicolor plana con media caña central en oro blanco.",
      },
      {
        href: "catalogo/JAU/big/0372.jpg",
        codigo: "0372",
        nombre: "ALIANZA BICOLOR",
        descripcion:
          "Alianza bicolor plana en oro blanco con media caña central.",
      },
      {
        href: "catalogo/JAU/big/0374.jpg",
        codigo: "0374",
        nombre: "ALIANZA BICOLOR",
        descripcion:
          "Alianza bicolor con diseño torcido en el centro combinando ambos colores.",
      },
      {
        href: "catalogo/JAU/big/0376.jpg",
        codigo: "0376",
        nombre: "ALIANZA BICOLOR",
        descripcion:
          "Alianza bicolor con diseño torcido central bicolor y acabado arenado.",
      },
      {
        href: "catalogo/JAU/big/0378.jpg",
        codigo: "0378",
        nombre: "ALIANZA BICOLOR",
        descripcion:
          "Alianza bicolor con diseño trenzado central en oro blanco.",
      },
      {
        href: "catalogo/JAU/big/0380.jpg",
        codigo: "0380",
        nombre: "ALIANZA BICOLOR",
        descripcion: "Alianza bicolor con diseño trenzado central laminado.",
      },
      {
        href: "catalogo/JAU/big/0382.jpg",
        codigo: "0382",
        nombre: "ALIANZA BICOLOR",
        descripcion: "Alianza bicolor con chapa trenzada en oro blanco.",
      },
      {
        href: "catalogo/JAU/big/0384.jpg",
        codigo: "0384",
        nombre: "ALIANZA BICOLOR",
        descripcion:
          "Alianza bicolor con chapa trenzada en oro blanco y acabado arenado.",
      },
      {
        href: "catalogo/JAU/big/0386.jpg",
        codigo: "0386",
        nombre: "ALIANZA BICOLOR",
        descripcion: "Alianza bicolor con dos hilos torcidos en oro blanco.",
      },
      {
        href: "catalogo/JAU/big/0388.jpg",
        codigo: "0388",
        nombre: "ALIANZA BICOLOR",
        descripcion:
          "Alianza bicolor con un hilo torcido central en oro blanco.",
      },
      {
        href: "catalogo/JAU/big/0390.jpg",
        codigo: "0390",
        nombre: "ALIANZA BICOLOR",
        descripcion: "Alianza bicolor con dos hilos torcidos y laminados.",
      },
    ],
  },
  {
    categoria: "Anillos",
    alias:"anillos",
    data: [
      {
        href: "catalogo/JAU/big/0405.jpg",
        codigo: "0405",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo sin piedras con diseño de cadena.",
      },
      {
        href: "catalogo/JAU/big/0410.jpg",
        codigo: "0410",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo sin piedras con diseño de cadena.",
      },
      {
        href: "catalogo/JAU/big/0415.jpg",
        codigo: "0415",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo sin piedras con diseño liso y plano.",
      },
      {
        href: "catalogo/JAU/big/0417.jpg",
        codigo: "0417",
        nombre: "ANILLO NUDO",
        descripcion: "Anillo en oro amarillo con diseño de nudo liso y grueso.",
      },
      {
        href: "catalogo/JAU/big/0420.jpg",
        codigo: "0420",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo sin piedras con diseño de reja.",
      },
      {
        href: "catalogo/JAU/big/0425.jpg",
        codigo: "0425",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo sin piedras con diseño en forma de V.",
      },
      {
        href: "catalogo/JAU/big/0430.jpg",
        codigo: "0430",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo sin piedras con diseño de corazón.",
      },
      {
        href: "catalogo/JAU/big/0433.jpg",
        codigo: "0433",
        nombre: "ANILLO CINTURÓN",
        descripcion: "Anillo en oro amarillo con diseño de cinturón delgado.",
      },
      {
        href: "catalogo/JAU/big/0435.jpg",
        codigo: "0435",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo sin piedras con diseño de cinturón.",
      },
      {
        href: "catalogo/JAU/big/0437.jpg",
        codigo: "0437",
        nombre: "ANILLO JUVENIL",
        descripcion: "Anillo juvenil en oro amarillo con diseño de delfín.",
      },
      {
        href: "catalogo/JAU/big/0438.jpg",
        codigo: "0438",
        nombre: "ANILLO DELFÍN",
        descripcion: "Anillo en oro amarillo con diseño de doble delfín.",
      },
      {
        href: "catalogo/JAU/big/0440.jpg",
        codigo: "0440",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo sin piedras con diseño de bolita.",
      },
      {
        href: "catalogo/JAU/big/0445.jpg",
        codigo: "0445",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo sin piedras con diseño helicoidal.",
      },
      {
        href: "catalogo/JAU/big/0450.jpg",
        codigo: "0450",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo sin piedras con diseño de arpa.",
      },
      {
        href: "catalogo/JAU/big/0455.jpg",
        codigo: "0455",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo sin piedras con diseño de manos.",
      },
      {
        href: "catalogo/JAU/big/0460.jpg",
        codigo: "0460",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo sin piedras con diseño de estambre.",
      },
      {
        href: "catalogo/JAU/big/0465.jpg",
        codigo: "0465",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo sin piedras con diseño de dos corazones calados.",
      },
      {
        href: "catalogo/JAU/big/0467.jpg",
        codigo: "0467",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con diseño de dos corazones (uno liso y otro calado).",
      },
      {
        href: "catalogo/JAU/big/0470.jpg",
        codigo: "0470",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo sin piedras con diseño de mariposa.",
      },
      {
        href: "catalogo/JAU/big/0475.jpg",
        codigo: "0475",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo sin piedras con diseño de malla.",
      },
      {
        href: "catalogo/JAU/big/0502.jpg",
        codigo: "0502",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con piedra en forma de corazón recto.",
      },
      {
        href: "catalogo/JAU/big/0503.jpg",
        codigo: "0503",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con piedra en forma de corazón y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/0504.jpg",
        codigo: "0504",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con corazón colgante y piedra.",
      },
      {
        href: "catalogo/JAU/big/0505.jpg",
        codigo: "0505",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con dos piedras en forma de corazón y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/0506.jpg",
        codigo: "0506",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con diseño de corazón reversible.",
      },
      {
        href: "catalogo/JAU/big/0507.jpg",
        codigo: "0507",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con diseño de corazón y tres piedras.",
      },
      {
        href: "catalogo/JAU/big/0509.jpg",
        codigo: "0509",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con piedra en forma de mano.",
      },
      {
        href: "catalogo/JAU/big/0510.jpg",
        codigo: "0510",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con piedra en forma de pera y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/0515.jpg",
        codigo: "0515",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con piedra y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/0518.jpg",
        codigo: "0518",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra en diseño doble 8 y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/0520.jpg",
        codigo: "0520",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con piedra y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/0522.jpg",
        codigo: "0522",
        nombre: "ANILLO DAMA",
        descripcion: "Anillo de dama en oro amarillo con piedra y cierre.",
      },
      {
        href: "catalogo/JAU/big/0525.jpg",
        codigo: "0525",
        nombre: "ANILLO 1/2 CINTURÓN",
        descripcion:
          "Anillo en oro amarillo de medio cinturón con cierre circular y zafiro.",
      },
      {
        href: "catalogo/JAU/big/0530.jpg",
        codigo: "0530",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con piedra en diseño tricillo y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/0531.jpg",
        codigo: "0531",
        nombre: "ANILLO TRICILLO",
        descripcion:
          "Anillo en oro amarillo con diseño tricillo ancho y piedra rubí.",
      },
      {
        href: "catalogo/JAU/big/0540.jpg",
        codigo: "0540",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con piedra y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/0545.jpg",
        codigo: "0545",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con piedra en forma de ojo y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/0550.jpg",
        codigo: "0550",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con piedra en diseño 'Tú y Yo' y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/0555.jpg",
        codigo: "0555",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con piedra solitaria y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/0557.jpg",
        codigo: "0557",
        nombre: "ANILLO SOLITARIO",
        descripcion:
          "Anillo en oro amarillo con piedra solitaria en cabeza navette.",
      },
      {
        href: "catalogo/JAU/big/0560.jpg",
        codigo: "0560",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con piedra chattelaine y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/0565.jpg",
        codigo: "0565",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con piedra en diseño 'Tú y Yo' y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/0570.jpg",
        codigo: "0570",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con piedra granate, esmeralda y zafiro.",
      },
      {
        href: "catalogo/JAU/big/0572.jpg",
        codigo: "0572",
        nombre: "ANILLO",
        descripcion:
          "Anillo en oro amarillo con 1 esmeralda cuadrada de 40mm y 2 circones de 25mm.",
      },
      {
        href: "catalogo/JAU/big/0573.jpg",
        codigo: "0573",
        nombre: "ANILLO",
        descripcion:
          "Anillo en oro amarillo con 1 rubí esmeralda de 75mm central y 2 circones de 25mm.",
      },
      {
        href: "catalogo/JAU/big/0575.jpg",
        codigo: "0575",
        nombre: "ANILLO JUVENIL",
        descripcion:
          "Anillo juvenil en oro amarillo con piedra estilo Lady Di y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/0605.jpg",
        codigo: "0605",
        nombre: "ANILLO DAMA",
        descripcion: "Anillo de dama en oro amarillo sin piedras preciosas.",
      },
      {
        href: "catalogo/JAU/big/0617.jpg",
        codigo: "0617",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo sin piedras preciosas, 2.5 gramos, con 3 ondas lisas y 2 detalles.",
      },
      {
        href: "catalogo/JAU/big/0630.jpg",
        codigo: "0630",
        nombre: "ANILLO DAMA",
        descripcion: "Anillo de dama en oro amarillo con trenza doble gruesa.",
      },
      {
        href: "catalogo/JAU/big/0633.jpg",
        codigo: "0633",
        nombre: "ANILLO FILIGRANA",
        descripcion:
          "Anillo en oro amarillo con filigrana en forma de 8 delgado.",
      },
      {
        href: "catalogo/JAU/big/0636.jpg",
        codigo: "0636",
        nombre: "ANILLO FILIGRANA",
        descripcion:
          "Anillo en oro amarillo con filigrana en forma de navette.",
      },
      {
        href: "catalogo/JAU/big/0638.jpg",
        codigo: "0638",
        nombre: "ANILLO FILIGRANA",
        descripcion:
          "Anillo en oro amarillo con filigrana en forma de 8 grueso y alambre torcido.",
      },
      {
        href: "catalogo/JAU/big/0645.jpg",
        codigo: "0645",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo sin piedras preciosas con diseño de moño.",
      },
      {
        href: "catalogo/JAU/big/0647.jpg",
        codigo: "0647",
        nombre: "ANILLO ESPIRAL",
        descripcion:
          "Anillo en oro amarillo con diseño espiral pequeño y bolita.",
      },
      {
        href: "catalogo/JAU/big/0648.jpg",
        codigo: "0648",
        nombre: "ANILLO ESPIRAL",
        descripcion:
          "Anillo en oro amarillo con diseño espiral múltiple y 5 bolitas.",
      },
      {
        href: "catalogo/JAU/big/0650.jpg",
        codigo: "0650",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo sin piedras preciosas estilo semanario.",
      },
      {
        href: "catalogo/JAU/big/0652.jpg",
        codigo: "0652",
        nombre: "ANILLO PANTERA",
        descripcion: "Anillo en oro amarillo con diseño simple de pantera.",
      },
      {
        href: "catalogo/JAU/big/0654.jpg",
        codigo: "0654",
        nombre: "ANILLO PANTERA",
        descripcion:
          "Anillo en oro amarillo con diseño simple de pantera alargada.",
      },
      {
        href: "catalogo/JAU/big/0655.jpg",
        codigo: "0655",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo sin piedras preciosas con diseño de pantera.",
      },
      {
        href: "catalogo/JAU/big/0660.jpg",
        codigo: "0660",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo sin piedras preciosas con diseño de pantera.",
      },
      {
        href: "catalogo/JAU/big/0662.jpg",
        codigo: "0662",
        nombre: "ANILLO PANTERA",
        descripcion:
          "Anillo en oro amarillo con diseño doble de pantera alargada y piedras.",
      },
      {
        href: "catalogo/JAU/big/0664.jpg",
        codigo: "0664",
        nombre: "ANILLO PANTERA",
        descripcion:
          "Anillo en oro amarillo con diseño doble de pantera, piedra ovalada y 6 detalles.",
      },
      {
        href: "catalogo/JAU/big/0670.jpg",
        codigo: "0670",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con diseño de elefante industrial.",
      },
      {
        href: "catalogo/JAU/big/0672.jpg",
        codigo: "0672",
        nombre: "ANILLO INGLÉS",
        descripcion: "Anillo inglés en oro amarillo con diseño de elefante.",
      },
      {
        href: "catalogo/JAU/big/0674.jpg",
        codigo: "0674",
        nombre: "ANILLO INGLÉS",
        descripcion: "Anillo inglés en oro amarillo con diseño de delfín.",
      },
      {
        href: "catalogo/JAU/big/0701.jpg",
        codigo: "0701",
        nombre: "ANILLO DAMA",
        descripcion: "Anillo de dama en oro amarillo con piedra.",
      },
      {
        href: "catalogo/JAU/big/0702.jpg",
        codigo: "0702",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra rosa y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/0704.jpg",
        codigo: "0704",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/0706.jpg",
        codigo: "0706",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con diseño espiral, piedra y cierre circular.",
      },
      {
        href: "catalogo/JAU/big/0708.jpg",
        codigo: "0708",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra, diseño de cintillo triple y cierre ovalado.",
      },
      {
        href: "catalogo/JAU/big/0709.jpg",
        codigo: "0709",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra, diseño de cintillo tubular y cierre.",
      },
      {
        href: "catalogo/JAU/big/0710.jpg",
        codigo: "0710",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra y diseño de cintillo tubular de 7 elementos.",
      },
      {
        href: "catalogo/JAU/big/0711.jpg",
        codigo: "0711",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra, diseño de cintillo de 5 elementos y cierre.",
      },
      {
        href: "catalogo/JAU/big/0712.jpg",
        codigo: "0712",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra y diseño de cintillo de 5 elementos con granillo.",
      },
      {
        href: "catalogo/JAU/big/0713.jpg",
        codigo: "0713",
        nombre: "ANILLO CINTILLO",
        descripcion:
          "Anillo en oro amarillo con diseño de cintillo con 5 engastes en riel transversal.",
      },
      {
        href: "catalogo/JAU/big/0714.jpg",
        codigo: "0714",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra solitaria y granillo con cierre.",
      },
      {
        href: "catalogo/JAU/big/0716.jpg",
        codigo: "0716",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra solitaria y granillo.",
      },
      {
        href: "catalogo/JAU/big/0717.jpg",
        codigo: "0717",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra solitaria en diseño bombé grande.",
      },
      {
        href: "catalogo/JAU/big/0718.jpg",
        codigo: "0718",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra solitaria en diseño de grifa.",
      },
      {
        href: "catalogo/JAU/big/0722.jpg",
        codigo: "0722",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra y diseño de cintillo triple con granillo.",
      },
      {
        href: "catalogo/JAU/big/0725.jpg",
        codigo: "0725",
        nombre: "ANILLO CINTILLO",
        descripcion:
          "Anillo en oro amarillo con diseño de cintillo de media caña y piedra.",
      },
      {
        href: "catalogo/JAU/big/0727.jpg",
        codigo: "0727",
        nombre: "ANILLO BOMBÉ",
        descripcion:
          "Anillo en oro amarillo con diseño bombé grande y 5 circones de 20mm.",
      },
      {
        href: "catalogo/JAU/big/0730.jpg",
        codigo: "0730",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con diseño bombé, piedra y 5 elementos de granillo.",
      },
      {
        href: "catalogo/JAU/big/0731.jpg",
        codigo: "0731",
        nombre: "ALIANZA",
        descripcion:
          "Alianza en oro amarillo con diseño plano y 9 engastes en escala.",
      },
      {
        href: "catalogo/JAU/big/0740.jpg",
        codigo: "0740",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra, diseño de cintillo y granillo.",
      },
      {
        href: "catalogo/JAU/big/0749.jpg",
        codigo: "0749",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con diseño trenzado y 11 piedras.",
      },
      {
        href: "catalogo/JAU/big/0754.jpg",
        codigo: "0754",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra estilo chattelaine y cierre circular con rubí.",
      },
      {
        href: "catalogo/JAU/big/0755.jpg",
        codigo: "0755",
        nombre: "ANILLO SOLITARIO",
        descripcion:
          "Anillo solitario en oro de 5N (18k) con aletas laterales y cierre de 60mm.",
      },
      {
        href: "catalogo/JAU/big/0756.jpg",
        codigo: "0756",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra estilo rosetón y cierre tipo tonel.",
      },
      {
        href: "catalogo/JAU/big/0757.jpg",
        codigo: "0757",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con 1 piedra ovalada de 8x6mm y 4 circones alrededor.",
      },
      {
        href: "catalogo/JAU/big/0758.jpg",
        codigo: "0758",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra cuadrada de rubí y cierre.",
      },
      {
        href: "catalogo/JAU/big/0759.jpg",
        codigo: "0759",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con 3 piedras cuadradas de 2.5x2.5mm.",
      },
      {
        href: "catalogo/JAU/big/0760.jpg",
        codigo: "0760",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra octogonal de 3.5 gramos y rubí.",
      },
      {
        href: "catalogo/JAU/big/0761.jpg",
        codigo: "0761",
        nombre: "ANILLO CINTILLO",
        descripcion:
          "Anillo en oro amarillo con diseño de cintillo y 7 engastes en riel longitudinal.",
      },
      {
        href: "catalogo/JAU/big/0762.jpg",
        codigo: "0762",
        nombre: "ANILLO DAMA",
        descripcion: "Anillo de dama en oro amarillo con piedra y cierre.",
      },
      {
        href: "catalogo/JAU/big/0764.jpg",
        codigo: "0764",
        nombre: "ANILLO DAMA",
        descripcion: "Anillo de dama en oro amarillo con piedra y cierre.",
      },
      {
        href: "catalogo/JAU/big/0765.jpg",
        codigo: "0765",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra solitaria y cuerpo calado.",
      },
      {
        href: "catalogo/JAU/big/0766.jpg",
        codigo: "0766",
        nombre: "ANILLO DAMA",
        descripcion: "Anillo de dama en oro amarillo con piedra y cierre.",
      },
      {
        href: "catalogo/JAU/big/0768.jpg",
        codigo: "0768",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra, diseño de cintillo doble y cierre.",
      },
      {
        href: "catalogo/JAU/big/0771.jpg",
        codigo: "0771",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con 1 piedra navette de 4x8mm y 4 circones de 2mm.",
      },
      {
        href: "catalogo/JAU/big/0772.jpg",
        codigo: "0772",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra estilo rosetón y cierre.",
      },
      {
        href: "catalogo/JAU/big/0776.jpg",
        codigo: "0776",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra estilo maravilla y rubí.",
      },
      {
        href: "catalogo/JAU/big/0778.jpg",
        codigo: "0778",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra en forma de ojo y rubí.",
      },
      {
        href: "catalogo/JAU/big/0779.jpg",
        codigo: "0779",
        nombre: "ANILLO SOLITARIO",
        descripcion:
          "Anillo solitario en oro amarillo con engaste bicolor cuadrado de 2.5x2.5mm.",
      },
      {
        href: "catalogo/JAU/big/0780.jpg",
        codigo: "0780",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra en diseño bombé rombo.",
      },
      {
        href: "catalogo/JAU/big/0781.jpg",
        codigo: "0781",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con 1 piedra cuadrada y 2 piedras circulares.",
      },
      {
        href: "catalogo/JAU/big/0782.jpg",
        codigo: "0782",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra en diseño bombé ovalado.",
      },
      {
        href: "catalogo/JAU/big/0783.jpg",
        codigo: "0783",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con 1 piedra visel ovalada.",
      },
      {
        href: "catalogo/JAU/big/0784.jpg",
        codigo: "0784",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra en diseño bombé ovalado.",
      },
      {
        href: "catalogo/JAU/big/0785.jpg",
        codigo: "0785",
        nombre: "ANILLO",
        descripcion: "Anillo en oro amarillo con 3 circones en diseño de riel.",
      },
      {
        href: "catalogo/JAU/big/0786.jpg",
        codigo: "0786",
        nombre: "ANILLO DAMA INGLÉS",
        descripcion:
          "Anillo de dama inglés en oro amarillo con 1 piedra central y detalles complementarios.",
      },
      {
        href: "catalogo/JAU/big/0787.jpg",
        codigo: "0787",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con diseño de ensamble y 1 piedra ovalada.",
      },
      {
        href: "catalogo/JAU/big/0788.jpg",
        codigo: "0788",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con piedra estilo lenteja.",
      },
      {
        href: "catalogo/JAU/big/0789.jpg",
        codigo: "0789",
        nombre: "ANILLO DAMA",
        descripcion: "Anillo de dama en oro amarillo con piedra esmeralda.",
      },
      {
        href: "catalogo/JAU/big/0790.jpg",
        codigo: "0790",
        nombre: "ANILLO CABUCHÓN",
        descripcion:
          "Anillo en oro amarillo con cabuchón de 7x5mm y 2 medias lunas caladas.",
      },
      {
        href: "catalogo/JAU/big/0792.jpg",
        codigo: "0792",
        nombre: "ANILLO CHEVALIER",
        descripcion: "Anillo chevalier pequeño en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/0794.jpg",
        codigo: "0794",
        nombre: "ANILLO FILIGRANA",
        descripcion:
          "Anillo en oro amarillo con diseño de filigrana y piedra ovalada.",
      },
      {
        href: "catalogo/JAU/big/0796.jpg",
        codigo: "0796",
        nombre: "ANILLO SOLITARIO",
        descripcion: "Anillo solitario en oro amarillo con cabuchón circular.",
      },
      {
        href: "catalogo/JAU/big/0798.jpg",
        codigo: "0798",
        nombre: "ANILLO",
        descripcion:
          "Anillo en oro amarillo con piedra circular de 6mm y 2 medias lunas.",
      },
      {
        href: "catalogo/JAU/big/0801.jpg",
        codigo: "0801",
        nombre: "ANILLO CABEZA CUADRADA",
        descripcion:
          "Anillo en oro amarillo con cabeza cuadrada y piedra CU33 central.",
      },
      {
        href: "catalogo/JAU/big/0802.jpg",
        codigo: "0802",
        nombre: "ANILLO SOLITARIO",
        descripcion:
          "Anillo solitario en oro amarillo con piedra rectangular OC75 montada en riel.",
      },
      {
        href: "catalogo/JAU/big/0803.jpg",
        codigo: "0803",
        nombre: "ANILLO PLANO",
        descripcion:
          "Anillo plano en oro amarillo con aleta paralela y piedra central.",
      },
      {
        href: "catalogo/JAU/big/0804.jpg",
        codigo: "0804",
        nombre: "ANILLO TENAZA",
        descripcion:
          "Anillo tipo tenaza en oro amarillo con piedra rectangular.",
      },
      {
        href: "catalogo/JAU/big/0806.jpg",
        codigo: "0806",
        nombre: "ANILLO",
        descripcion:
          "Anillo en oro amarillo con piedra OC75 en riel y 12 circones de 15mm con granulado.",
      },
      {
        href: "catalogo/JAU/big/0809.jpg",
        codigo: "0809",
        nombre: "ANILLO FESTONADO",
        descripcion:
          "Anillo festonado en oro amarillo con 3 piedras carré de 3x3mm.",
      },
      {
        href: "catalogo/JAU/big/0810.jpg",
        codigo: "0810",
        nombre: "ANILLO DAMA RELOJ",
        descripcion:
          "Anillo de dama en oro blanco con diseño de reloj y cierre.",
      },
      {
        href: "catalogo/JAU/big/0845.jpg",
        codigo: "0845",
        nombre: "ANILLO CORONA",
        descripcion:
          "Anillo tipo corona en oro amarillo con costados calados y cabuchón.",
      },
      {
        href: "catalogo/JAU/big/0853.jpg",
        codigo: "0853",
        nombre: "ANILLO ANCHO",
        descripcion:
          "Anillo ancho en oro amarillo con cabuchón de 8x6mm y detalles en oro blanco.",
      },
      {
        href: "catalogo/JAU/big/0856.jpg",
        codigo: "0856",
        nombre: "ANILLO ANCHO",
        descripcion:
          "Anillo ancho en oro amarillo con cabuchón de 8x6mm y 6 piedras laterales.",
      },
      {
        href: "catalogo/JAU/big/0860.jpg",
        codigo: "0860",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama festonado ancho en oro amarillo con detalles en oro blanco.",
      },
      {
        href: "catalogo/JAU/big/0865.jpg",
        codigo: "0865",
        nombre: "ANILLO NAVETTE",
        descripcion:
          "Anillo navette en oro amarillo con piedra NA74 rodeada de circones de 125mm.",
      },
      {
        href: "catalogo/JAU/big/0880.jpg",
        codigo: "0880",
        nombre: "ANILLO CORDÓN",
        descripcion: "Anillo en oro amarillo con cordón de oro blanco cruzado.",
      },
      {
        href: "catalogo/JAU/big/0890.jpg",
        codigo: "0890",
        nombre: "ANILLO ILUSIÓN",
        descripcion:
          "Anillo de ilusión en tres colores de oro (amarillo, blanco y rosado).",
      },
      {
        href: "catalogo/JAU/big/0905.jpg",
        codigo: "0905",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con perla estilo chattelaine.",
      },
      {
        href: "catalogo/JAU/big/0912.jpg",
        codigo: "0912",
        nombre: "ANILLO CUELLO PAYASO",
        descripcion: "Anillo tipo cuello de payaso para bebé en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/0915.jpg",
        codigo: "0915",
        nombre: "ANILLO DAMA",
        descripcion:
          "Anillo de dama en oro amarillo con perla y diseño de payaso.",
      },
      {
        href: "catalogo/JAU/big/0920.jpg",
        codigo: "0920",
        nombre: "ANILLO DAMA",
        descripcion: "Anillo de dama en oro amarillo con perla estilo pistilo.",
      },
      {
        href: "catalogo/JAU/big/0925.jpg",
        codigo: "0925",
        nombre: "ANILLO DAMA",
        descripcion: "Anillo de dama en oro amarillo con perla estilo pistilo.",
      },
      {
        href: "catalogo/JAU/big/0930.jpg",
        codigo: "0930",
        nombre: "ANILLO DAMA",
        descripcion: "Anillo de dama en oro amarillo con perla estilo pistilo.",
      },
      {
        href: "catalogo/JAU/big/0935.jpg",
        codigo: "0935",
        nombre: "ANILLO DAMA",
        descripcion: "Anillo de dama en oro amarillo con perla estilo pistilo.",
      },
      {
        href: "catalogo/JAU/big/0940.jpg",
        codigo: "0940",
        nombre: "ANILLO DAMA",
        descripcion: "Anillo de dama en oro amarillo con perla estilo plato.",
      },
      {
        href: "catalogo/JAU/big/0942.jpg",
        codigo: "0942",
        nombre: "ANILLO ESPIRAL",
        descripcion: "Anillo espiral pequeño en oro amarillo con perla.",
      },
      {
        href: "catalogo/JAU/big/0945.jpg",
        codigo: "0945",
        nombre: "ANILLO DAMA",
        descripcion: "Anillo de dama en oro amarillo con perla estilo rosetón.",
      },
    ],
  },
  {
    categoria: "Anillos de Sello",
    alias:"anillos-sellos",
    data: [
      {
        href: "catalogo/JAU/big/1005.jpg",
        codigo: "1005",
        nombre: "ANILLO SELLO",
        descripcion: "Anillo de sello en oro amarillo sin camisa protectora.",
      },
      {
        href: "catalogo/JAU/big/1010.jpg",
        codigo: "1010",
        nombre: "ANILLO SELLO",
        descripcion: "Anillo de sello en oro amarillo con camisa protectora.",
      },
      {
        href: "catalogo/JAU/big/1012.jpg",
        codigo: "1012",
        nombre: "ANILLO SELLO OVAL",
        descripcion:
          "Anillo de sello ovalado en oro amarillo con diseño espiral grabado.",
      },
      {
        href: "catalogo/JAU/big/1013.jpg",
        codigo: "1013",
        nombre: "ANILLO SELLO OVAL",
        descripcion:
          "Anillo de sello ovalado en oro amarillo con campo calado.",
      },
      {
        href: "catalogo/JAU/big/1015.jpg",
        codigo: "1015",
        nombre: "ANILLO SELLO",
        descripcion: "Anillo de sello clásico en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1017.jpg",
        codigo: "1017",
        nombre: "ANILLO SELLO CUADRADO",
        descripcion:
          "Anillo de sello cuadrado en oro amarillo con campo calado.",
      },
      {
        href: "catalogo/JAU/big/1018.jpg",
        codigo: "1018",
        nombre: "ANILLO SELLO RECTANGULAR",
        descripcion:
          "Anillo de sello rectangular en oro amarillo con campo calado.",
      },
      {
        href: "catalogo/JAU/big/1020.jpg",
        codigo: "1020",
        nombre: "ANILLO SELLO RECTANGULAR",
        descripcion:
          "Anillo de sello rectangular en oro amarillo con borde en forma de sierra.",
      },
      {
        href: "catalogo/JAU/big/1026.jpg",
        codigo: "1026",
        nombre: "ANILLO SELLO OVAL",
        descripcion:
          "Anillo de sello en oro amarillo con cabeza ovalada en posición longitudinal.",
      },
      {
        href: "catalogo/JAU/big/1031.jpg",
        codigo: "1031",
        nombre: "ANILLO SELLO OVAL",
        descripcion:
          "Anillo de sello en oro amarillo con cabeza ovalada en posición transversal y acabado liso.",
      },
      {
        href: "catalogo/JAU/big/1036.jpg",
        codigo: "1036",
        nombre: "ANILLO SELLO NAVETTE",
        descripcion:
          "Anillo de sello en oro amarillo con cabeza navette en posición transversal y acabado liso.",
      },
      {
        href: "catalogo/JAU/big/1037.jpg",
        codigo: "1037",
        nombre: "ANILLO SELLO OCTOGONAL",
        descripcion:
          "Anillo de sello octogonal en oro amarillo con acabado rústico.",
      },
      {
        href: "catalogo/JAU/big/1040.jpg",
        codigo: "1040",
        nombre: "ANILLO SELLO RECTANGULAR",
        descripcion:
          "Anillo de sello rectangular en oro amarillo con diseño de red grabado.",
      },
      {
        href: "catalogo/JAU/big/1045.jpg",
        codigo: "1045",
        nombre: "ANILLO SELLO",
        descripcion: "Anillo de sello en oro amarillo con acabado liso.",
      },
      {
        href: "catalogo/JAU/big/1050.jpg",
        codigo: "1050",
        nombre: "ANILLO SELLO",
        descripcion: "Anillo de sello en oro amarillo con diseño estampado.",
      },
      {
        href: "catalogo/JAU/big/1055.jpg",
        codigo: "1055",
        nombre: "ANILLO SELLO",
        descripcion: "Anillo de sello clásico en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1057.jpg",
        codigo: "1057",
        nombre: "ANILLO SELLO CUADRADO",
        descripcion:
          "Anillo de sello cuadrado mediano en oro amarillo con 4 festones.",
      },
      {
        href: "catalogo/JAU/big/1058.jpg",
        codigo: "1058",
        nombre: "ANILLO SELLO CUADRADO",
        descripcion:
          "Anillo de sello cuadrado grande en oro amarillo con 2 festones.",
      },
      {
        href: "catalogo/JAU/big/1060.jpg",
        codigo: "1060",
        nombre: "ANILLO SELLO MASÓNICO",
        descripcion: "Anillo de sello masónico en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1062.jpg",
        codigo: "1062",
        nombre: "ANILLO SELLO",
        descripcion:
          "Anillo de sello para hombre en oro amarillo con 3 engastes en riel.",
      },
      {
        href: "catalogo/JAU/big/1065.jpg",
        codigo: "1065",
        nombre: "ANILLO SELLO CUADRADO",
        descripcion:
          "Anillo de sello cuadrado en oro amarillo con ónix y 4 festones.",
      },
      {
        href: "catalogo/JAU/big/1067.jpg",
        codigo: "1067",
        nombre: "ANILLO SELLO",
        descripcion:
          "Anillo de sello para hombre en oro amarillo con ónix de 108mm y circones de 20mm.",
      },
      {
        href: "catalogo/JAU/big/1069.jpg",
        codigo: "1069",
        nombre: "ANILLO SELLO OVAL",
        descripcion:
          "Anillo de sello ovalado para hombre en oro amarillo con ónix de 75mm y milgrain.",
      },
      {
        href: "catalogo/JAU/big/1070.jpg",
        codigo: "1070",
        nombre: "ANILLO SELLO OVAL",
        descripcion:
          "Anillo de sello ovalado en oro amarillo con ónix de 108mm y acabado liso.",
      },
      {
        href: "catalogo/JAU/big/1071.jpg",
        codigo: "1071",
        nombre: "ANILLO SELLO OVAL",
        descripcion:
          "Anillo de sello ovalado para hombre en oro amarillo con ónix de 119mm y acabado liso.",
      },
    ],
  },
  {
    categoria: "Cruces",
    alias:"cruces",
    data: [
      {
        href: "catalogo/JAU/big/1203.jpg",
        codigo: "1203",
        nombre: "CRUZ PALITO",
        descripcion: "Cruz de oro amarillo con diseño simple de palito.",
      },
      {
        href: "catalogo/JAU/big/1206.jpg",
        codigo: "1206",
        nombre: "CRUZ PALITO",
        descripcion: "Cruz de oro amarillo con diseño simple de palito.",
      },
      {
        href: "catalogo/JAU/big/1209.jpg",
        codigo: "1209",
        nombre: "CRUZ PALITO",
        descripcion: "Cruz de oro amarillo con diseño simple de palito.",
      },
      {
        href: "catalogo/JAU/big/1212.jpg",
        codigo: "1212",
        nombre: "CRUZ PALITO",
        descripcion: "Cruz de oro amarillo con diseño simple de palito.",
      },
      {
        href: "catalogo/JAU/big/1215.jpg",
        codigo: "1215",
        nombre: "CRUZ FACETADA",
        descripcion: "Cruz de oro amarillo con diseño facetado.",
      },
      {
        href: "catalogo/JAU/big/1218.jpg",
        codigo: "1218",
        nombre: "CRUZ FACETADA",
        descripcion: "Cruz de oro amarillo con diseño facetado.",
      },
      {
        href: "catalogo/JAU/big/1221.jpg",
        codigo: "1221",
        nombre: "CRUZ FACETADA",
        descripcion: "Cruz de oro amarillo con diseño completamente facetado.",
      },
      {
        href: "catalogo/JAU/big/1224.jpg",
        codigo: "1224",
        nombre: "CRUZ FACETADA",
        descripcion: "Cruz de oro amarillo con diseño completamente facetado.",
      },
      {
        href: "catalogo/JAU/big/1227.jpg",
        codigo: "1227",
        nombre: "CRUZ TUBULAR",
        descripcion: "Cruz de oro amarillo con diseño tubular hueco.",
      },
      {
        href: "catalogo/JAU/big/1230.jpg",
        codigo: "1230",
        nombre: "CRUZ TUBULAR",
        descripcion: "Cruz de oro amarillo con diseño tubular hueco.",
      },
      {
        href: "catalogo/JAU/big/1233.jpg",
        codigo: "1233",
        nombre: "CRUZ TUBULAR",
        descripcion: "Cruz de oro amarillo con diseño tubular hueco.",
      },
      {
        href: "catalogo/JAU/big/1236.jpg",
        codigo: "1236",
        nombre: "CRUZ AMARRA",
        descripcion: "Cruz de oro amarillo con diseño de amarra o nudo.",
      },
      {
        href: "catalogo/JAU/big/1239.jpg",
        codigo: "1239",
        nombre: "CRUZ AMARRA",
        descripcion: "Cruz de oro amarillo con diseño de amarra o nudo.",
      },
      {
        href: "catalogo/JAU/big/1242.jpg",
        codigo: "1242",
        nombre: "CRUZ AMARRA",
        descripcion: "Cruz de oro amarillo con diseño de amarra o nudo.",
      },
      {
        href: "catalogo/JAU/big/1245.jpg",
        codigo: "1245",
        nombre: "CRUZ ALTA",
        descripcion: "Cruz de oro amarillo con diseño alargado verticalmente.",
      },
      {
        href: "catalogo/JAU/big/1248.jpg",
        codigo: "1248",
        nombre: "CRUZ ALTA",
        descripcion: "Cruz de oro amarillo con diseño alargado verticalmente.",
      },
      {
        href: "catalogo/JAU/big/1251.jpg",
        codigo: "1251",
        nombre: "CRUZ ALTA",
        descripcion: "Cruz de oro amarillo con diseño alargado verticalmente.",
      },
      {
        href: "catalogo/JAU/big/1253.jpg",
        codigo: "1253",
        nombre: "CRUZ CRISTO SOLO",
        descripcion: "Cruz de oro amarillo con figura de Cristo crucificado.",
      },
      {
        href: "catalogo/JAU/big/1254.jpg",
        codigo: "1254",
        nombre: "CRUZ CON CRISTO",
        descripcion: "Cruz de oro amarillo con figura de Cristo crucificado.",
      },
      {
        href: "catalogo/JAU/big/1256.jpg",
        codigo: "1256",
        nombre: "CRUZ REDONDA CON CRISTO",
        descripcion:
          "Cruz de oro amarillo con diseño circular y figura de Cristo.",
      },
      {
        href: "catalogo/JAU/big/1257.jpg",
        codigo: "1257",
        nombre: "CRUZ CON CRISTO",
        descripcion: "Cruz de oro amarillo con figura de Cristo crucificado.",
      },
      {
        href: "catalogo/JAU/big/1263.jpg",
        codigo: "1263",
        nombre: "CRUZ DE TRÉBOL",
        descripcion: "Cruz de oro amarillo con brazos en forma de trébol.",
      },
      {
        href: "catalogo/JAU/big/1265.jpg",
        codigo: "1265",
        nombre: "CRUZ CON CABUCHÓN",
        descripcion: "Cruz de oro amarillo con cabuchón central.",
      },
      {
        href: "catalogo/JAU/big/1267.jpg",
        codigo: "1267",
        nombre: "CRUZ CUADRADA",
        descripcion: "Cruz de oro amarillo con diseño cuadrado y acabado liso.",
      },
      {
        href: "catalogo/JAU/big/1269.jpg",
        codigo: "1269",
        nombre: "CRUZ CUADRADA",
        descripcion:
          "Cruz de oro amarillo con diseño cuadrado y cabuchón central.",
      },
      {
        href: "catalogo/JAU/big/1272.jpg",
        codigo: "1272",
        nombre: "CRUZ CALADA",
        descripcion: "Cruz de oro amarillo con diseño calado.",
      },
      {
        href: "catalogo/JAU/big/1273.jpg",
        codigo: "1273",
        nombre: "CRUZ VATICANA",
        descripcion:
          "Cruz de oro amarillo con diseño del Vaticano (con las llaves de San Pedro).",
      },
      {
        href: "catalogo/JAU/big/1275.jpg",
        codigo: "1275",
        nombre: "CRUZ DE EXTREMOS ANCHOS",
        descripcion: "Cruz de oro amarillo con extremos de los brazos anchos.",
      },
      {
        href: "catalogo/JAU/big/1278.jpg",
        codigo: "1278",
        nombre: "CRUZ TRONCO",
        descripcion: "Cruz de oro amarillo con diseño de tronco o madera.",
      },
      {
        href: "catalogo/JAU/big/1282.jpg",
        codigo: "1282",
        nombre: "CRUZ BOMBÉ",
        descripcion: "Cruz de oro amarillo con diseño bombé y acabado pulido.",
      },
      {
        href: "catalogo/JAU/big/1284.jpg",
        codigo: "1284",
        nombre: "CRUZ BICOLOR",
        descripcion: "Cruz de oro amarillo con detalle central en oro blanco.",
      },
      {
        href: "catalogo/JAU/big/1286.jpg",
        codigo: "1286",
        nombre: "CRUZ DE BORDES CURVOS",
        descripcion: "Cruz de oro amarillo con diseño liso y bordes curvos.",
      },
    ],
  },
  {
    categoria: "Discos y Placas",
    alias:"disco-placas",

    data: [
      {
        href: "catalogo/JAU/big/1305.jpg",
        codigo: "1305",
        nombre: "PLACA IDENTIFICACIÓN",
        descripcion:
          "Placa de identificación en oro amarillo con acabado facetado.",
      },
      {
        href: "catalogo/JAU/big/1310.jpg",
        codigo: "1310",
        nombre: "PLACA IDENTIFICACIÓN",
        descripcion:
          "Placa de identificación facetada en oro amarillo de 0.7 gramos con diseño en esquinas.",
      },
      {
        href: "catalogo/JAU/big/1315.jpg",
        codigo: "1315",
        nombre: "PLACA IDENTIFICACIÓN",
        descripcion:
          "Placa de identificación en oro amarillo con acabado facetado.",
      },
      {
        href: "catalogo/JAU/big/1320.jpg",
        codigo: "1320",
        nombre: "PLACA IDENTIFICACIÓN",
        descripcion:
          "Placa de identificación en oro amarillo con acabado facetado.",
      },
      {
        href: "catalogo/JAU/big/1325.jpg",
        codigo: "1325",
        nombre: "PLACA IDENTIFICACIÓN",
        descripcion:
          "Placa de identificación en oro amarillo con acabado facetado.",
      },
      {
        href: "catalogo/JAU/big/1326.jpg",
        codigo: "1326",
        nombre: "PLACA PLUMA",
        descripcion: "Placa pequeña en forma de pluma en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1327.jpg",
        codigo: "1327",
        nombre: "PLACA PLUMA",
        descripcion: "Placa mediana en forma de pluma en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1328.jpg",
        codigo: "1328",
        nombre: "PLACA PLUMA",
        descripcion: "Placa grande en forma de pluma en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1330.jpg",
        codigo: "1330",
        nombre: "PLACA OVALADA",
        descripcion: "Placa ovalada lisa en oro amarillo de 1.6 x 1.0 cm.",
      },
      {
        href: "catalogo/JAU/big/1335.jpg",
        codigo: "1335",
        nombre: "PLACA OVALADA",
        descripcion: "Placa ovalada lisa en oro amarillo de 2.0 x 1.3 cm.",
      },
      {
        href: "catalogo/JAU/big/1340.jpg",
        codigo: "1340",
        nombre: "PLACA OVALADA",
        descripcion: "Placa ovalada lisa en oro amarillo de 2.5 x 1.6 cm.",
      },
      {
        href: "catalogo/JAU/big/1345.jpg",
        codigo: "1345",
        nombre: "PLACA CORAZÓN",
        descripcion:
          "Placa en forma de corazón lisa en oro amarillo de 1.3 x 1.3 cm.",
      },
      {
        href: "catalogo/JAU/big/1350.jpg",
        codigo: "1350",
        nombre: "PLACA CORAZÓN",
        descripcion:
          "Placa en forma de corazón lisa en oro amarillo de 1.8 x 1.8 cm.",
      },
      {
        href: "catalogo/JAU/big/1353.jpg",
        codigo: "1353",
        nombre: "PLACA CORAZÓN PARTIDO",
        descripcion: "Placa en forma de corazón partido en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1410.jpg",
        codigo: "1410",
        nombre: "DISCO",
        descripcion: "Disco liso en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1420.jpg",
        codigo: "1420",
        nombre: "DISCO",
        descripcion: "Disco liso en oro amarillo.",
      },
    ],
  },
  {
    categoria: "Colgantes",
    alias:"colgantes",

    data: [
      {
        href: "catalogo/JAU/big/1510.jpg",
        codigo: "1510",
        nombre: "COLGANTE ESTRELLA DE DAVID",
        descripcion:
          "Colgante pequeño de Estrella de David en oro amarillo con acabado liso.",
      },
      {
        href: "catalogo/JAU/big/1520.jpg",
        codigo: "1520",
        nombre: "COLGANTE ESTRELLA DE DAVID",
        descripcion:
          "Colgante grande de Estrella de David en oro amarillo con acabado liso.",
      },
      {
        href: "catalogo/JAU/big/1525.jpg",
        codigo: "1525",
        nombre: "COLGANTE ESTRELLA DE DAVID",
        descripcion:
          "Colgante de Estrella de David en oro amarillo con acabado liso.",
      },
      {
        href: "catalogo/JAU/big/1535.jpg",
        codigo: "1535",
        nombre: "COLGANTE ESTRELLA DE DAVID",
        descripcion:
          "Colgante de Estrella de David en oro amarillo con diseño calado.",
      },
      {
        href: "catalogo/JAU/big/1540.jpg",
        codigo: "1540",
        nombre: "COLGANTE ESTRELLA DE DAVID",
        descripcion:
          "Colgante pequeño de Estrella de David en oro amarillo con grabados.",
      },
      {
        href: "catalogo/JAU/big/1550.jpg",
        codigo: "1550",
        nombre: "COLGANTE ESTRELLA DE DAVID",
        descripcion:
          "Colgante grande de Estrella de David en oro amarillo con grabados.",
      },
      {
        href: "catalogo/JAU/big/1560.jpg",
        codigo: "1560",
        nombre: "COLGANTE ESTRELLA DE DAVID",
        descripcion:
          "Colgante grande de Estrella de David en oro amarillo con grabados y borde especial.",
      },
      {
        href: "catalogo/JAU/big/1610.jpg",
        codigo: "1610",
        nombre: "PRENDEDOR PARA BEBÉ",
        descripcion: "Prendedor ovalado para bebé en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1630.jpg",
        codigo: "1630",
        nombre: "ALFILER CON GANCHO",
        descripcion: "Alfiler con gancho para colgantes en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1710AC.jpg",
        codigo: "1710AC",
        nombre: "COLGANTE ZODIACAL ACUARIO",
        descripcion:
          "Colgante zodiacal de Acuario en oro amarillo con grabado artesanal.",
      },
      {
        href: "catalogo/JAU/big/1710AR.jpg",
        codigo: "1710AR",
        nombre: "COLGANTE ZODIACAL ARIES",
        descripcion:
          "Colgante zodiacal de Aries en oro amarillo con grabado artesanal.",
      },
      {
        href: "catalogo/JAU/big/1710CA.jpg",
        codigo: "1710CA",
        nombre: "COLGANTE ZODIACAL CÁNCER",
        descripcion:
          "Colgante zodiacal de Cáncer en oro amarillo con grabado artesanal.",
      },
      {
        href: "catalogo/JAU/big/1710CP.jpg",
        codigo: "1710CP",
        nombre: "COLGANTE ZODIACAL CAPRICORNIO",
        descripcion:
          "Colgante zodiacal de Capricornio en oro amarillo con grabado artesanal.",
      },
      {
        href: "catalogo/JAU/big/1710ES.jpg",
        codigo: "1710ES",
        nombre: "COLGANTE ZODIACAL ESCORPIO",
        descripcion:
          "Colgante zodiacal de Escorpio en oro amarillo con grabado artesanal.",
      },
      {
        href: "catalogo/JAU/big/1710GE.jpg",
        codigo: "1710GE",
        nombre: "COLGANTE ZODIACAL GÉMINIS",
        descripcion:
          "Colgante zodiacal de Géminis en oro amarillo con grabado artesanal.",
      },
      {
        href: "catalogo/JAU/big/1710LE.jpg",
        codigo: "1710LE",
        nombre: "COLGANTE ZODIACAL LEO",
        descripcion:
          "Colgante zodiacal de Leo en oro amarillo con grabado artesanal.",
      },
      {
        href: "catalogo/JAU/big/1710LI.jpg",
        codigo: "1710LI",
        nombre: "COLGANTE ZODIACAL LIBRA",
        descripcion:
          "Colgante zodiacal de Libra en oro amarillo con grabado artesanal.",
      },
      {
        href: "catalogo/JAU/big/1710PI.jpg",
        codigo: "1710PI",
        nombre: "COLGANTE ZODIACAL PISCIS",
        descripcion:
          "Colgante zodiacal de Piscis en oro amarillo con grabado artesanal.",
      },
      {
        href: "catalogo/JAU/big/1710SA.jpg",
        codigo: "1710SA",
        nombre: "COLGANTE ZODIACAL SAGITARIO",
        descripcion:
          "Colgante zodiacal de Sagitario en oro amarillo con grabado artesanal.",
      },
      {
        href: "catalogo/JAU/big/1710TA.jpg",
        codigo: "1710TA",
        nombre: "COLGANTE ZODIACAL TAURO",
        descripcion:
          "Colgante zodiacal de Tauro en oro amarillo con grabado artesanal.",
      },
      {
        href: "catalogo/JAU/big/1710VI.jpg",
        codigo: "1710VI",
        nombre: "COLGANTE ZODIACAL VIRGO",
        descripcion:
          "Colgante zodiacal de Virgo en oro amarillo con grabado artesanal.",
      },
      {
        href: "catalogo/JAU/big/1720AC.jpg",
        codigo: "1720AC",
        nombre: "COLGANTE ZODIACAL ACUARIO",
        descripcion: "Colgante zodiacal pequeño de Acuario en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1720AR.jpg",
        codigo: "1720AR",
        nombre: "COLGANTE ZODIACAL ARIES",
        descripcion: "Colgante zodiacal pequeño de Aries en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1720CA.jpg",
        codigo: "1720CA",
        nombre: "COLGANTE ZODIACAL CÁNCER",
        descripcion: "Colgante zodiacal pequeño de Cáncer en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1720CP.jpg",
        codigo: "1720CP",
        nombre: "COLGANTE ZODIACAL CAPRICORNIO",
        descripcion:
          "Colgante zodiacal pequeño de Capricornio en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1720ES.jpg",
        codigo: "1720ES",
        nombre: "COLGANTE ZODIACAL ESCORPIO",
        descripcion: "Colgante zodiacal pequeño de Escorpio en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1720GE.jpg",
        codigo: "1720GE",
        nombre: "COLGANTE ZODIACAL GÉMINIS",
        descripcion: "Colgante zodiacal pequeño de Géminis en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1730LE.jpg",
        codigo: "1730LE",
        nombre: "COLGANTE ZODIACAL LEO",
        descripcion:
          "Colgante zodiacal de Leo en oro amarillo con marco rombo liso.",
      },
      {
        href: "catalogo/JAU/big/1730LI.jpg",
        codigo: "1730LI",
        nombre: "COLGANTE ZODIACAL LIBRA",
        descripcion:
          "Colgante zodiacal de Libra en oro amarillo con marco rombo liso.",
      },
      {
        href: "catalogo/JAU/big/1730PI.jpg",
        codigo: "1730PI",
        nombre: "COLGANTE ZODIACAL PISCIS",
        descripcion:
          "Colgante zodiacal de Piscis en oro amarillo con marco rombo liso.",
      },
      {
        href: "catalogo/JAU/big/1730SA.jpg",
        codigo: "1730SA",
        nombre: "COLGANTE ZODIACAL SAGITARIO",
        descripcion:
          "Colgante zodiacal de Sagitario en oro amarillo con marco rombo liso.",
      },
      {
        href: "catalogo/JAU/big/1730TA.jpg",
        codigo: "1730TA",
        nombre: "COLGANTE ZODIACAL TAURO",
        descripcion:
          "Colgante zodiacal de Tauro en oro amarillo con marco rombo liso.",
      },
      {
        href: "catalogo/JAU/big/1730VI.jpg",
        codigo: "1730VI",
        nombre: "COLGANTE ZODIACAL VIRGO",
        descripcion:
          "Colgante zodiacal de Virgo en oro amarillo con marco rombo liso.",
      },
      {
        href: "catalogo/JAU/big/1750.jpg",
        codigo: "1750",
        nombre: "COLGANTE RUNA DEL AMOR",
        descripcion: "Colgante runa del amor en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1751.jpg",
        codigo: "1751",
        nombre: "COLGANTE RUNA DE DINERO",
        descripcion: "Colgante runa de dinero en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1752.jpg",
        codigo: "1752",
        nombre: "COLGANTE RUNA DE ENERGIA POSITIVA",
        descripcion: "Colgante runa de energía positiva en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1803.jpg",
        codigo: "1803",
        nombre: "COLGANTE CORAZÓN",
        descripcion: "Colgante corazón en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1806.jpg",
        codigo: "1806",
        nombre: "COLGANTE CORAZÓN",
        descripcion: "Colgante corazón en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1809.jpg",
        codigo: "1809",
        nombre: "COLGANTE CORAZÓN",
        descripcion: "Colgante corazón en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1812.jpg",
        codigo: "1812",
        nombre: "COLGANTE CORAZÓN",
        descripcion: "Colgante corazón en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1813.jpg",
        codigo: "1813",
        nombre: "COLGANTE LUNA ESTRELLA",
        descripcion: "Colgante luna y estrella en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1814.jpg",
        codigo: "1814",
        nombre: "COLGANTE DOBLE CORAZÓN LISO",
        descripcion: "Colgante doble corazón liso en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1815.jpg",
        codigo: "1815",
        nombre: "COLGANTE CORAZÓN FLORENTINO MEDIANO",
        descripcion: "Colgante corazón florentino mediano en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1816.jpg",
        codigo: "1816",
        nombre: "COLGANTE CORAZÓN",
        descripcion: "Colgante corazón en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1817.jpg",
        codigo: "1817",
        nombre: "COLGANTE ENLACE HOMBRE-MUJER",
        descripcion: "Colgante enlace hombre-mujer en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1818.jpg",
        codigo: "1818",
        nombre: "COLGANTE FILIGRANA",
        descripcion: "Colgante filigrana en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1819.jpg",
        codigo: "1819",
        nombre: "COLGANTE TRÉBOL 4 HOJAS",
        descripcion: "Colgante trébol de 4 hojas en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1821.jpg",
        codigo: "1821",
        nombre: "COLGANTE HERRADURA CON AGUJEROS",
        descripcion: "Colgante herradura con agujeros en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1823.jpg",
        codigo: "1823",
        nombre: "COLGANTE PIRÁMIDE",
        descripcion: "Colgante pirámide en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1824.jpg",
        codigo: "1824",
        nombre: "COLGANTE CABALLO PERCHERÓN",
        descripcion: "Colgante caballo percherón en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1825.jpg",
        codigo: "1825",
        nombre: "COLGANTE CABALLO ALAZÁN",
        descripcion: "Colgante caballo alazán en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1826.jpg",
        codigo: "1826",
        nombre: "COLGANTE ELEFANTE CORAZÓN EN TROMPA",
        descripcion: "Colgante elefante con corazón en trompa en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1827.jpg",
        codigo: "1827",
        nombre: "COLGANTE ELEFANTE INDÚ",
        descripcion: "Colgante elefante indú en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1828.jpg",
        codigo: "1828",
        nombre: "COLGANTE ELEFANTE AFRICANO",
        descripcion: "Colgante elefante africano en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1830.jpg",
        codigo: "1830",
        nombre: "COLGANTE DELFÍN MICROFUSIÓN",
        descripcion: "Colgante delfín en microfunción en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1831.jpg",
        codigo: "1831",
        nombre: "COLGANTE DELFÍN ESTAMPADO",
        descripcion: "Colgante delfín estampado en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1832.jpg",
        codigo: "1832",
        nombre: "COLGANTE DELFÍN NARIZ DE BOTELLA",
        descripcion: "Colgante delfín nariz de botella en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1833.jpg",
        codigo: "1833",
        nombre: "COLGANTE DELFÍN MADRE-HIJO",
        descripcion: "Colgante delfín madre e hijo en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1834.jpg",
        codigo: "1834",
        nombre: "COLGANTE DELFÍN CALADO",
        descripcion: "Colgante delfín calado en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1835.jpg",
        codigo: "1835",
        nombre: "COLGANTE DELFÍN",
        descripcion: "Colgante delfín en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1836.jpg",
        codigo: "1836",
        nombre: "COLGANTE CABALLITO DE MAR",
        descripcion: "Colgante caballito de mar en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1840.jpg",
        codigo: "1840",
        nombre: "COLGANTE ESTRELLA SIN FIN",
        descripcion: "Colgante estrella sin fin en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1843.jpg",
        codigo: "1843",
        nombre: "COLGANTE CONCHA OSTIÓN CON PERLA",
        descripcion: "Colgante concha ostión con perla en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1845.jpg",
        codigo: "1845",
        nombre: "COLGANTE ANCLA",
        descripcion: "Colgante ancla en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1851.jpg",
        codigo: "1851",
        nombre: "COLGANTE LLAVE",
        descripcion: "Colgante llave en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1852.jpg",
        codigo: "1852",
        nombre: "COLGANTE LLAVE CORAZÓN",
        descripcion: "Colgante llave corazón en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1856.jpg",
        codigo: "1856",
        nombre: "COLGANTE PUÑAL MORO",
        descripcion: "Colgante puñal moro en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1857.jpg",
        codigo: "1857",
        nombre: "COLGANTE LÁMPARA ALADINO",
        descripcion: "Colgante lámpara de Aladino en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1859.jpg",
        codigo: "1859",
        nombre: "COLGANTE ZAPATITOS DE BEBÉ",
        descripcion: "Colgante zapatitos de bebé en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1862.jpg",
        codigo: "1862",
        nombre: "COLGANTE CHUPETE",
        descripcion: "Colgante chupete en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1868.jpg",
        codigo: "1868",
        nombre: "COLGANTE LUNA CON CARA",
        descripcion: "Colgante luna con cara en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1869.jpg",
        codigo: "1869",
        nombre: "COLGANTE ÁNGEL GRANDE",
        descripcion: "Colgante ángel grande en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1870.jpg",
        codigo: "1870",
        nombre: "COLGANTE ÁNGEL CHICO",
        descripcion: "Colgante ángel chico en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1872.jpg",
        codigo: "1872",
        nombre: "COLGANTE CORAZÓN TÚ-YO",
        descripcion: "Colgante corazón tú-yo en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1876.jpg",
        codigo: "1876",
        nombre: "COLGANTE CRISTO CALADO",
        descripcion: "Colgante Cristo calado en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1877.jpg",
        codigo: "1877",
        nombre: "COLGANTE SOL CALADO CHICO",
        descripcion: "Colgante sol calado chico en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1879.jpg",
        codigo: "1879",
        nombre: "COLGANTE CHINITA",
        descripcion: "Colgante chinita en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1880.jpg",
        codigo: "1880",
        nombre: "COLGANTE ZAPATO FÚTBOL",
        descripcion: "Colgante zapato de fútbol en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1881.jpg",
        codigo: "1881",
        nombre: "COLGANTE BALÓN DE FÚTBOL",
        descripcion: "Colgante balón de fútbol en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1882.jpg",
        codigo: "1882",
        nombre: "COLGANTE CHUNCHO",
        descripcion: "Colgante chuncho en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1884.jpg",
        codigo: "1884",
        nombre: "COLGANTE COLO COLO",
        descripcion: "Colgante del equipo Colo Colo en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1885.jpg",
        codigo: "1885",
        nombre: "COLGANTE NIÑA CHICO",
        descripcion: "Colgante de niña tamaño pequeño en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1886.jpg",
        codigo: "1886",
        nombre: "COLGANTE NIÑO CHICO",
        descripcion: "Colgante de niño tamaño pequeño en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1887.jpg",
        codigo: "1887",
        nombre: "COLGANTE NIÑA GRANDE",
        descripcion: "Colgante de niña tamaño grande en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1888.jpg",
        codigo: "1888",
        nombre: "COLGANTE NIÑO GRANDE",
        descripcion: "Colgante de niño tamaño grande en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1890.jpg",
        codigo: "1890",
        nombre: "COLGANTE PAREJA DE NIÑOS",
        descripcion: "Colgante de pareja de niños en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1892.jpg",
        codigo: "1892",
        nombre: "COLGANTE NIÑO-NIÑA AMOR",
        descripcion: "Colgante de niño y niña con motivo amor en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1893.jpg",
        codigo: "1893",
        nombre: "COLGANTE PLACA OCHAVADA CON TORNILLOS",
        descripcion: "Colgante placa ochavada con tornillos en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1894.jpg",
        codigo: "1894",
        nombre: "COLGANTE PAPIRO",
        descripcion: "Colgante papiro en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1895-A.jpg",
        codigo: "1895-A",
        nombre: "COLGANTE LETRA A",
        descripcion: "Colgante letra A en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1895-B.jpg",
        codigo: "1895-B",
        nombre: "COLGANTE LETRA B",
        descripcion: "Colgante letra B en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1895-C.jpg",
        codigo: "1895-C",
        nombre: "COLGANTE LETRA C",
        descripcion: "Colgante letra C en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1895-D.jpg",
        codigo: "1895-D",
        nombre: "COLGANTE LETRA D",
        descripcion: "Colgante letra D en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1895-E.jpg",
        codigo: "1895-E",
        nombre: "COLGANTE LETRA E",
        descripcion: "Colgante letra E en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1895-F.jpg",
        codigo: "1895-F",
        nombre: "COLGANTE LETRA F",
        descripcion: "Colgante letra F en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1896.jpg",
        codigo: "1896",
        nombre: "COLGANTE NOMBRES",
        descripcion: "Colgante para nombres en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1897.jpg",
        codigo: "1897",
        nombre: "COLGANTE NIÑA CON GORRO",
        descripcion: "Colgante de niña con gorro en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1898.jpg",
        codigo: "1898",
        nombre: "COLGANTE NIÑO CON GORRO",
        descripcion: "Colgante de niño con gorro en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1899.jpg",
        codigo: "1899",
        nombre: "COLGANTE PLACA PAPIRO LISA",
        descripcion: "Colgante placa papiro lisa en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1900.jpg",
        codigo: "1900",
        nombre: "COLGANTE PAREJA DE HUASOS",
        descripcion: "Colgante de pareja de huasos en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1901.jpg",
        codigo: "1901",
        nombre: "COLGANTE NIÑA CON OSITO ESTAMPADO",
        descripcion: "Colgante de niña con osito estampado en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1902.jpg",
        codigo: "1902",
        nombre: "COLGANTE NIÑO CON BALÓN DE FÚTBOL ESTAMPADO",
        descripcion:
          "Colgante de niño con balón de fútbol estampado en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1905.jpg",
        codigo: "1905",
        nombre: "COLGANTE CON PIEDRA ROSET CON CIRCÓN/RUBÍ",
        descripcion:
          "Colgante con piedra roset con circón o rubí en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1910.jpg",
        codigo: "1910",
        nombre: "COLGANTE CON PIEDRA ESPIRAL CON CIRCÓN/RUBÍ",
        descripcion:
          "Colgante con piedra en forma espiral con circón o rubí en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1912.jpg",
        codigo: "1912",
        nombre: "COLGANTE ESPIRAL CHICO CON BOLITA",
        descripcion: "Colgante espiral pequeño con bolita en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1913.jpg",
        codigo: "1913",
        nombre: "COLGANTE ESPIRAL CHICO CON PERLA",
        descripcion: "Colgante espiral pequeño con perla en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1915.jpg",
        codigo: "1915",
        nombre: "COLGANTE CON PIEDRA COMPÁS CHATT CON CIRCÓN/RUBÍ",
        descripcion:
          "Colgante con piedra compás chatt con circón o rubí en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1925.jpg",
        codigo: "1925",
        nombre: "COLGANTE CON PIEDRA HERRADURA CHATT CON CIRCÓN/RUBÍ",
        descripcion:
          "Colgante con piedra herradura chatt con circón o rubí en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1930.jpg",
        codigo: "1930",
        nombre: "COLGANTE CON PIEDRA CHATT CIRCULAR CON CIRCÓN/RUBÍ",
        descripcion:
          "Colgante con piedra chatt circular con circón o rubí en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1932.jpg",
        codigo: "1932",
        nombre: "COLGANTE RODEADO OVAL",
        descripcion: "Colgante con diseño rodeado oval en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1934.jpg",
        codigo: "1934",
        nombre: "COLGANTE RODEADO RECTANGULAR",
        descripcion: "Colgante con diseño rodeado rectangular en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1936.jpg",
        codigo: "1936",
        nombre: "COLGANTE LENTEJA",
        descripcion: "Colgante en forma de lenteja en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1938.jpg",
        codigo: "1938",
        nombre: "COLGANTE 0787",
        descripcion: "Colgante modelo 0787 en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1940.jpg",
        codigo: "1940",
        nombre: "COLGANTE CON PIEDRA FANTASÍA CON CIRCÓN/RUBÍ",
        descripcion:
          "Colgante con piedra fantasía con circón o rubí en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1945.jpg",
        codigo: "1945",
        nombre: "COLGANTE CON PIEDRA ESTAMBRE CHATT CON CIRCÓN",
        descripcion:
          "Colgante con piedra estambre chatt con circón en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1952.jpg",
        codigo: "1952",
        nombre: "COLGANTE DOBLE CORAZÓN CON 2 PIEDRAS",
        descripcion: "Colgante doble corazón con 2 piedras en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1955.jpg",
        codigo: "1955",
        nombre: "COLGANTE CON PIEDRA CORAZÓN",
        descripcion: "Colgante con piedra corazón en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1957.jpg",
        codigo: "1957",
        nombre: "COLGANTE CORAZÓN CALADO",
        descripcion: "Colgante corazón calado en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1959.jpg",
        codigo: "1959",
        nombre: "COLGANTE PIEDRA CORAZÓN ENGARCE REVERSO",
        descripcion:
          "Colgante con piedra corazón en engarce reverso en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1960.jpg",
        codigo: "1960",
        nombre: "COLGANTE CON PIEDRA CORAZÓN ESTAMBRE",
        descripcion:
          "Colgante con piedra corazón estilo estambre en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1962.jpg",
        codigo: "1962",
        nombre: "COLGANTE CONJUNTO ANILLO 0804",
        descripcion:
          "Colgante que forma conjunto con anillo modelo 0804 en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1963.jpg",
        codigo: "1963",
        nombre: "COLGANTE CON PIEDRA CU100 EN GRIFA",
        descripcion:
          "Colgante con piedra CU100 montada en grifa en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1965.jpg",
        codigo: "1965",
        nombre: "COLGANTE CON PIEDRA CHATT OCTOGONAL",
        descripcion: "Colgante con piedra chatt octogonal en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1970.jpg",
        codigo: "1970",
        nombre: "COLGANTE CON PIEDRA CHATT OVAL",
        descripcion: "Colgante con piedra chatt oval en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1975.jpg",
        codigo: "1975",
        nombre: "COLGANTE CON PIEDRA OVAL",
        descripcion: "Colgante con piedra oval en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1977.jpg",
        codigo: "1977",
        nombre: "COLGANTE ELEFANTE INDÚ",
        descripcion: "Colgante de elefante estilo indú en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1978.jpg",
        codigo: "1978",
        nombre: "COLGANTE GATITO CON CA40 Y CI15 EN OJOS",
        descripcion:
          "Colgante de gatito con CA40 y CI15 en los ojos en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1979.jpg",
        codigo: "1979",
        nombre: "COLGANTE DELFÍN CON PERLA 3MM EN NARIZ",
        descripcion:
          "Colgante de delfín con perla de 3mm en la nariz en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1980.jpg",
        codigo: "1980",
        nombre: "COLGANTE CON PIEDRA OCTOGONAL",
        descripcion: "Colgante con piedra octogonal en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1983.jpg",
        codigo: "1983",
        nombre: "COLGANTE CON PIEDRA ALETA OCTOGONAL",
        descripcion: "Colgante con piedra aleta octogonal en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1986.jpg",
        codigo: "1986",
        nombre: "COLGANTE 2 DELFINES CON CI15 EN OJOS",
        descripcion:
          "Colgante de dos delfines con CI15 en los ojos en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1990.jpg",
        codigo: "1990",
        nombre: "COLGANTE PIEDRA CORAZÓN",
        descripcion: "Colgante con piedra corazón en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1991.jpg",
        codigo: "1991",
        nombre: "COLGANTE PIEDRA GOTA",
        descripcion: "Colgante con piedra en forma de gota en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1992.jpg",
        codigo: "1992",
        nombre: "COLGANTE CHISPITA",
        descripcion: "Colgante modelo chispita en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1994.jpg",
        codigo: "1994",
        nombre: "COLGANTE MURRINA CHICO",
        descripcion: "Colgante murrina tamaño pequeño en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1995.jpg",
        codigo: "1995",
        nombre: "COLGANTE MURRINA MEDIANO",
        descripcion: "Colgante murrina tamaño mediano en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1996.jpg",
        codigo: "1996",
        nombre: "COLGANTE MURRINA GRANDE",
        descripcion: "Colgante murrina tamaño grande en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/1997.jpg",
        codigo: "1997",
        nombre: "COLGANTE MUNDO",
        descripcion: "Colgante con forma de mundo en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/2005.jpg",
        codigo: "2005",
        nombre: "COLGANTE CON PERLA PISTILO PLATO",
        descripcion: "Colgante con perla pistilo plato en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/2015.jpg",
        codigo: "2015",
        nombre: "COLGANTE CON PERLA JAULA",
        descripcion:
          "Colgante con perla en montura tipo jaula en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/2025.jpg",
        codigo: "2025",
        nombre: "COLGANTE CON PERLA PISTILO",
        descripcion: "Colgante con perla pistilo en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/2030.jpg",
        codigo: "2030",
        nombre: "COLGANTE CON PERLA PISTILO",
        descripcion: "Colgante con perla pistilo en oro amarillo.",
      },
      {
        href: "catalogo/JAU/big/2040.jpg",
        codigo: "2040",
        nombre: "COLGANTE CON PERLA CORAZÓN",
        descripcion: "Colgante con perla en forma de corazón en oro amarillo.",
      },
    ],
  },
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$FormBuscar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormBuscar;
  const { inputText } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="px-4"> <div class="rounded-full flex items-center w-full border-2 h-10 gap-1 px-2"> <form class="flex  w-full" id="search-form"> <input type="text" name="search-input" id="search-input" placeholder="Buscar..." type="text"', ' class="h-full w-full focus:outline-none px-2 font-medium text-lg"> <button type="submit">', '</button> </form> </div> </div> <script>\n  document.getElementById("search-form").addEventListener("submit", (e) => {\n    e.preventDefault();\n    const query = document.getElementById("search-input").value.trim();\n    if (query) {\n      window.location.href = `/buscar/${encodeURIComponent(query)}`;\n    }\n  });\n<\/script>'], ["", '<div class="px-4"> <div class="rounded-full flex items-center w-full border-2 h-10 gap-1 px-2"> <form class="flex  w-full" id="search-form"> <input type="text" name="search-input" id="search-input" placeholder="Buscar..." type="text"', ' class="h-full w-full focus:outline-none px-2 font-medium text-lg"> <button type="submit">', '</button> </form> </div> </div> <script>\n  document.getElementById("search-form").addEventListener("submit", (e) => {\n    e.preventDefault();\n    const query = document.getElementById("search-input").value.trim();\n    if (query) {\n      window.location.href = \\`/buscar/\\${encodeURIComponent(query)}\\`;\n    }\n  });\n<\/script>'])), maybeRenderHead(), addAttribute(inputText, "value"), renderComponent($$result, "FaMagnifyingGlass", FaMagnifyingGlass, { "className": "size-5" }));
}, "/home/node/app/catalogoJoyas/src/components/FormBuscar.astro", void 0);

const $$Astro = createAstro();
const $$Catalogo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Catalogo;
  const { catalogoList, focus } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <p class="text-lg font-bold px-4 pb-2">Categorias</p> <div class="overflow-x-auto scrollbar-none flex gap-1 overscroll-auto px-4 pb-2 xl:flex-col"> <a${addAttribute(`/`, "href")}${addAttribute(`rounded-lg hover:bg-slate-300 hover:text-slate-700 p-1 ${focus === "all" ? "bg-slate-500 text-slate-200" : ""}`, "class")}> <div class=" w-20 xl:w-full xl:justify-start xl:gap-2 flex flex-col xl:flex-row items-center justify-center "> <img src="https://www.deltajoyas.cl/catalogo/catalogo_master.jpg"${addAttribute(`todos`, "alt")}${addAttribute(`size-20 xl:size-14 rounded-full object-cover ${focus === "all" ? "" : "opacity-25"} `, "class")} loading="lazy" decoding="async"> <label class="cursor-pointer w-20 xl:w-full xl:justify-start xl:text-base h-10 text-sm font-semibold flex items-center justify-center text-wrap text-center">
Todos
</label> </div> </a> ${catalogoList.map((categoria) => renderTemplate`<a${addAttribute(`/categoria/${categoria.alias}`, "href")}${addAttribute(`rounded-lg hover:bg-slate-300 hover:text-slate-700 p-1 ${focus == categoria.alias ? "bg-slate-500 text-slate-200" : ""}`, "class")}> <div class=" w-16 xl:w-full xl:justify-start xl:gap-2 flex flex-col xl:flex-row items-center justify-center "> <img${addAttribute(`https://www.deltajoyas.cl/${categoria.item}`, "src")}${addAttribute(categoria.categoria, "alt")}${addAttribute(`size-16 xl:size-14 rounded-full object-cover ${focus == categoria.alias || focus === "all" ? "" : "opacity-25"} `, "class")} loading="lazy" decoding="async"> <label class="cursor-pointer w-16 xl:w-full xl:justify-start xl:text-base h-10 text-sm font-semibold flex items-center justify-center text-wrap text-center"> ${categoria.categoria} </label> </div> </a>`)} </div> </div>`;
}, "/home/node/app/catalogoJoyas/src/components/Catalogo.astro", void 0);

export { $$FormBuscar as $, $$Catalogo as a, catalogo as c };
