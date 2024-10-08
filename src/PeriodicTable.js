import React, { useState, useEffect, useRef } from "react";
import "./App.css"; // Import the CSS file

// Element data
const elementsData = [
  {
    number: 1,
    symbol: "H",
    name: "Hydrogen",
    weight: 1.008,
    config: "1s1",
    position: 1,
    atomicRadius: 53,
    ionizationEnergy: 1312, // kJ/mol
    electronegativity: 2.2,
    meltingPoint: -259, // °C
    boilingPoint: -253, // °C
  },
  {
    number: 2,
    symbol: "He",
    name: "Helium",
    weight: 4.0026,
    config: "1s2",
    position: 2,
    atomicRadius: 31,
    ionizationEnergy: 2372, // kJ/mol
    electronegativity: null,
    meltingPoint: -272,
    boilingPoint: -269,
  },
  {
    number: 3,
    symbol: "Li",
    name: "Lithium",
    weight: 6.94,
    config: "[He] 2s1",
    position: 3,
    atomicRadius: 167,
    ionizationEnergy: 520, // kJ/mol
    electronegativity: 0.98,
    meltingPoint: 180,
    boilingPoint: 1342,
  },
  {
    number: 4,
    symbol: "Be",
    name: "Beryllium",
    weight: 9.0122,
    config: "[He] 2s2",
    position: 4,
    atomicRadius: 112,
    ionizationEnergy: 899, // kJ/mol
    electronegativity: 1.57,
    meltingPoint: 1287,
    boilingPoint: 2470,
  },
  {
    number: 5,
    symbol: "B",
    name: "Boron",
    weight: 10.81,
    config: "[He] 2s2 2p1",
    position: 5,
    atomicRadius: 87,
    ionizationEnergy: 800, // kJ/mol
    electronegativity: 2.04,
    meltingPoint: 2076,
    boilingPoint: 3927,
  },
  {
    number: 6,
    symbol: "C",
    name: "Carbon",
    weight: 12.011,
    config: "[He] 2s2 2p2",
    position: 6,
    atomicRadius: 67,
    ionizationEnergy: 1086, // kJ/mol
    electronegativity: 2.55,
    meltingPoint: 3550,
    boilingPoint: 4827,
  },
  {
    number: 7,
    symbol: "N",
    name: "Nitrogen",
    weight: 14.007,
    config: "[He] 2s2 2p3",
    position: 7,
    atomicRadius: 56,
    ionizationEnergy: 1402, // kJ/mol
    electronegativity: 3.04,
    meltingPoint: -210,
    boilingPoint: -196,
  },
  {
    number: 8,
    symbol: "O",
    name: "Oxygen",
    weight: 15.999,
    config: "[He] 2s2 2p4",
    position: 8,
    atomicRadius: 48,
    ionizationEnergy: 1314, // kJ/mol
    electronegativity: 3.44,
    meltingPoint: -218,
    boilingPoint: -183,
  },
  {
    number: 9,
    symbol: "F",
    name: "Fluorine",
    weight: 18.998,
    config: "[He] 2s2 2p5",
    position: 9,
    atomicRadius: 42,
    ionizationEnergy: 1681, // kJ/mol
    electronegativity: 3.98,
    meltingPoint: -220,
    boilingPoint: -188,
  },
  {
    number: 10,
    symbol: "Ne",
    name: "Neon",
    weight: 20.18,
    config: "[He] 2s2 2p6",
    position: 10,
    atomicRadius: 38,
    ionizationEnergy: 2080, // kJ/mol
    electronegativity: null,
    meltingPoint: -249,
    boilingPoint: -246,
  },
  {
    number: 11,
    symbol: "Na",
    name: "Sodium",
    weight: 22.99,
    config: "[Ne] 3s1",
    position: 11,
    atomicRadius: 190,
    ionizationEnergy: 496, // kJ/mol
    electronegativity: 0.93,
    meltingPoint: 98,
    boilingPoint: 883,
  },
  {
    number: 12,
    symbol: "Mg",
    name: "Magnesium",
    weight: 24.305,
    config: "[Ne] 3s2",
    position: 12,
    atomicRadius: 145,
    ionizationEnergy: 738, // kJ/mol
    electronegativity: 1.31,
    meltingPoint: 650,
    boilingPoint: 1090,
  },
  {
    number: 13,
    symbol: "Al",
    name: "Aluminium",
    weight: 26.982,
    config: "[Ne] 3s2 3p1",
    position: 13,
    atomicRadius: 118,
    ionizationEnergy: 578, // kJ/mol
    electronegativity: 1.61,
    meltingPoint: 660,
    boilingPoint: 2470,
  },
  {
    number: 14,
    symbol: "Si",
    name: "Silicon",
    weight: 28.085,
    config: "[Ne] 3s2 3p2",
    position: 14,
    atomicRadius: 111,
    ionizationEnergy: 786, // kJ/mol
    electronegativity: 1.9,
    meltingPoint: 1414,
    boilingPoint: 3265,
  },
  {
    number: 15,
    symbol: "P",
    name: "Phosphorus",
    weight: 30.974,
    config: "[Ne] 3s2 3p3",
    position: 15,
    atomicRadius: 98,
    ionizationEnergy: 1012, // kJ/mol
    electronegativity: 2.19,
    meltingPoint: 44,
    boilingPoint: 280,
  },
  {
    number: 16,
    symbol: "S",
    name: "Sulfur",
    weight: 32.06,
    config: "[Ne] 3s2 3p4",
    position: 16,
    atomicRadius: 88,
    ionizationEnergy: 1000, // kJ/mol
    electronegativity: 2.58,
    meltingPoint: 115,
    boilingPoint: 444,
  },
  {
    number: 17,
    symbol: "Cl",
    name: "Chlorine",
    weight: 35.45,
    config: "[Ne] 3s2 3p5",
    position: 17,
    atomicRadius: 79,
    ionizationEnergy: 1251, // kJ/mol
    electronegativity: 3.16,
    meltingPoint: -101,
    boilingPoint: -34,
  },
  {
    number: 18,
    symbol: "Ar",
    name: "Argon",
    weight: 39.948,
    config: "[Ne] 3s2 3p6",
    position: 18,
    atomicRadius: 71,
    ionizationEnergy: 1521, // kJ/mol
    electronegativity: null,
    meltingPoint: -189,
    boilingPoint: -186,
  },
  {
    number: 19,
    symbol: "K",
    name: "Potassium",
    weight: 39.098,
    config: "[Ar] 4s1",
    position: 19,
    atomicRadius: 243,
    ionizationEnergy: 418, // kJ/mol
    electronegativity: 0.82,
    meltingPoint: 64,
    boilingPoint: 759,
  },
  {
    number: 20,
    symbol: "Ca",
    name: "Calcium",
    weight: 40.078,
    config: "[Ar] 4s2",
    position: 20,
    atomicRadius: 194,
    ionizationEnergy: 590, // kJ/mol
    electronegativity: 1.0,
    meltingPoint: 842,
    boilingPoint: 1484,
  },
  {
    number: 21,
    symbol: "Sc",
    name: "Scandium",
    weight: 44.956,
    config: "[Ar] 3d1 4s2",
    position: 21,
    atomicRadius: 184,
    ionizationEnergy: 633, // kJ/mol
    electronegativity: 1.36,
    meltingPoint: 1541,
    boilingPoint: 2830,
  },
  {
    number: 22,
    symbol: "Ti",
    name: "Titanium",
    weight: 47.867,
    config: "[Ar] 3d2 4s2",
    position: 22,
    atomicRadius: 176,
    ionizationEnergy: 658, // kJ/mol
    electronegativity: 1.54,
    meltingPoint: 1668,
    boilingPoint: 3287,
  },
  {
    number: 23,
    symbol: "V",
    name: "Vanadium",
    weight: 50.942,
    config: "[Ar] 3d3 4s2",
    position: 23,
    atomicRadius: 171,
    ionizationEnergy: 650, // kJ/mol
    electronegativity: 1.63,
    meltingPoint: 1910,
    boilingPoint: 3407,
  },
  {
    number: 24,
    symbol: "Cr",
    name: "Chromium",
    weight: 51.996,
    config: "[Ar] 3d5 4s1",
    position: 24,
    atomicRadius: 166,
    ionizationEnergy: 653, // kJ/mol
    electronegativity: 1.66,
    meltingPoint: 1907,
    boilingPoint: 2671,
  },
  {
    number: 25,
    symbol: "Mn",
    name: "Manganese",
    weight: 54.938,
    config: "[Ar] 3d5 4s2",
    position: 25,
    atomicRadius: 161,
    ionizationEnergy: 717, // kJ/mol
    electronegativity: 1.55,
    meltingPoint: 1246,
    boilingPoint: 2061,
  },
  {
    number: 26,
    symbol: "Fe",
    name: "Iron",
    weight: 55.845,
    config: "[Ar] 3d6 4s2",
    position: 26,
    atomicRadius: 156,
    ionizationEnergy: 762, // kJ/mol
    electronegativity: 1.83,
    meltingPoint: 1538,
    boilingPoint: 2862,
  },
  {
    number: 27,
    symbol: "Co",
    name: "Cobalt",
    weight: 58.933,
    config: "[Ar] 3d7 4s2",
    position: 27,
    atomicRadius: 152,
    ionizationEnergy: 760, // kJ/mol
    electronegativity: 1.88,
    meltingPoint: 1495,
    boilingPoint: 2927,
  },
  {
    number: 28,
    symbol: "Ni",
    name: "Nickel",
    weight: 58.693,
    config: "[Ar] 3d8 4s2",
    position: 28,
    atomicRadius: 149,
    ionizationEnergy: 737, // kJ/mol
    electronegativity: 1.91,
    meltingPoint: 1455,
    boilingPoint: 2730,
  },
  {
    number: 29,
    symbol: "Cu",
    name: "Copper",
    weight: 63.546,
    config: "[Ar] 3d10 4s1",
    position: 29,
    atomicRadius: 145,
    ionizationEnergy: 745, // kJ/mol
    electronegativity: 1.9,
    meltingPoint: 1085,
    boilingPoint: 2562,
  },
  {
    number: 30,
    symbol: "Zn",
    name: "Zinc",
    weight: 65.38,
    config: "[Ar] 3d10 4s2",
    position: 30,
    atomicRadius: 142,
    ionizationEnergy: 906, // kJ/mol
    electronegativity: 1.65,
    meltingPoint: 420, // °C
    boilingPoint: 907, // °C
  },
  {
    number: 31,
    symbol: "Ga",
    name: "Gallium",
    weight: 69.723,
    config: "[Ar] 3d10 4s2 4p1",
    position: 31,
    atomicRadius: 136,
    ionizationEnergy: 579, // kJ/mol
    electronegativity: 1.81,
    meltingPoint: 30,
    boilingPoint: 2400,
  },
  {
    number: 32,
    symbol: "Ge",
    name: "Germanium",
    weight: 72.63,
    config: "[Ar] 3d10 4s2 4p2",
    position: 32,
    atomicRadius: 125,
    ionizationEnergy: 762, // kJ/mol
    electronegativity: 2.01,
    meltingPoint: 938,
    boilingPoint: 2833,
  },
  {
    number: 33,
    symbol: "As",
    name: "Arsenic",
    weight: 74.922,
    config: "[Ar] 3d10 4s2 4p3",
    position: 33,
    atomicRadius: 114,
    ionizationEnergy: 947, // kJ/mol
    electronegativity: 2.18,
    meltingPoint: 817,
    boilingPoint: 614,
  },
  {
    number: 34,
    symbol: "Se",
    name: "Selenium",
    weight: 78.971,
    config: "[Ar] 3d10 4s2 4p4",
    position: 34,
    atomicRadius: 103,
    ionizationEnergy: 941, // kJ/mol
    electronegativity: 2.55,
    meltingPoint: 221,
    boilingPoint: 685,
  },
  {
    number: 35,
    symbol: "Br",
    name: "Bromine",
    weight: 79.904,
    config: "[Ar] 3d10 4s2 4p5",
    position: 35,
    atomicRadius: 94,
    ionizationEnergy: 1140, // kJ/mol
    electronegativity: 2.96,
    meltingPoint: -7,
    boilingPoint: 59,
  },
  {
    number: 36,
    symbol: "Kr",
    name: "Krypton",
    weight: 83.798,
    config: "[Ar] 3d10 4s2 4p6",
    position: 36,
    atomicRadius: 88,
    ionizationEnergy: 1351, // kJ/mol
    electronegativity: 3.0,
    meltingPoint: -157,
    boilingPoint: -153,
  },
  {
    number: 37,
    symbol: "Rb",
    name: "Rubidium",
    weight: 85.468,
    config: "[Kr] 5s1",
    position: 37,
    atomicRadius: 265,
    ionizationEnergy: 403, // kJ/mol
    electronegativity: 0.82,
    meltingPoint: 39,
    boilingPoint: 688,
  },
  {
    number: 38,
    symbol: "Sr",
    name: "Strontium",
    weight: 87.62,
    config: "[Kr] 5s2",
    position: 38,
    atomicRadius: 219,
    ionizationEnergy: 550, // kJ/mol
    electronegativity: 0.95,
    meltingPoint: 777,
    boilingPoint: 1382,
  },
  {
    number: 39,
    symbol: "Y",
    name: "Yttrium",
    weight: 88.906,
    config: "[Kr] 4d1 5s2",
    position: 39,
    atomicRadius: 212,
    ionizationEnergy: 600, // kJ/mol
    electronegativity: 1.22,
    meltingPoint: 1526,
    boilingPoint: 3336,
  },
  {
    number: 40,
    symbol: "Zr",
    name: "Zirconium",
    weight: 91.224,
    config: "[Kr] 4d2 5s2",
    position: 40,
    atomicRadius: 206,
    ionizationEnergy: 640, // kJ/mol
    electronegativity: 1.33,
    meltingPoint: 1855,
    boilingPoint: 4409,
  },
  {
    number: 41,
    symbol: "Nb",
    name: "Niobium",
    weight: 92.906,
    config: "[Kr] 4d4 5s1",
    position: 41,
    atomicRadius: 198,
    ionizationEnergy: 652, // kJ/mol
    electronegativity: 1.6,
    meltingPoint: 2477,
    boilingPoint: 4744,
  },
  {
    number: 42,
    symbol: "Mo",
    name: "Molybdenum",
    weight: 95.95,
    config: "[Kr] 4d5 5s1",
    position: 42,
    atomicRadius: 190,
    ionizationEnergy: 684, // kJ/mol
    electronegativity: 2.16,
    meltingPoint: 2623,
    boilingPoint: 4639,
  },
  {
    number: 43,
    symbol: "Tc",
    name: "Technetium",
    weight: 98,
    config: "[Kr] 4d5 5s2",
    position: 43,
    atomicRadius: 183,
    ionizationEnergy: 702, // kJ/mol
    electronegativity: 1.9,
    meltingPoint: 2157,
    boilingPoint: 4265,
  },
  {
    number: 44,
    symbol: "Ru",
    name: "Ruthenium",
    weight: 101.07,
    config: "[Kr] 4d7 5s1",
    position: 44,
    atomicRadius: 178,
    ionizationEnergy: 710, // kJ/mol
    electronegativity: 2.2,
    meltingPoint: 2334,
    boilingPoint: 4150,
  },
  {
    number: 45,
    symbol: "Rh",
    name: "Rhodium",
    weight: 102.91,
    config: "[Kr] 4d8 5s1",
    position: 45,
    atomicRadius: 173,
    ionizationEnergy: 720, // kJ/mol
    electronegativity: 2.28,
    meltingPoint: 1964,
    boilingPoint: 3695,
  },
  {
    number: 46,
    symbol: "Pd",
    name: "Palladium",
    weight: 106.42,
    config: "[Kr] 4d10",
    position: 46,
    atomicRadius: 169,
    ionizationEnergy: 804, // kJ/mol
    electronegativity: 2.2,
    meltingPoint: 1554,
    boilingPoint: 2963,
  },
  {
    number: 47,
    symbol: "Ag",
    name: "Silver",
    weight: 107.87,
    config: "[Kr] 4d10 5s1",
    position: 47,
    atomicRadius: 165,
    ionizationEnergy: 731, // kJ/mol
    electronegativity: 1.93,
    meltingPoint: 961,
    boilingPoint: 2162,
  },
  {
    number: 48,
    symbol: "Cd",
    name: "Cadmium",
    weight: 112.41,
    config: "[Kr] 4d10 5s2",
    position: 48,
    atomicRadius: 161,
    ionizationEnergy: 868, // kJ/mol
    electronegativity: 1.69,
    meltingPoint: 321,
    boilingPoint: 767,
  },
  {
    number: 49,
    symbol: "In",
    name: "Indium",
    weight: 114.82,
    config: "[Kr] 4d10 5s2 5p1",
    position: 49,
    atomicRadius: 156,
    ionizationEnergy: 558, // kJ/mol
    electronegativity: 1.78,
    meltingPoint: 157,
    boilingPoint: 2072,
  },
  {
    number: 50,
    symbol: "Sn",
    name: "Tin",
    weight: 118.71,
    config: "[Kr] 4d10 5s2 5p2",
    position: 50,
    atomicRadius: 145,
    ionizationEnergy: 709, // kJ/mol
    electronegativity: 1.96,
    meltingPoint: 232,
    boilingPoint: 2602,
  },
  {
    number: 51,
    symbol: "Sb",
    name: "Antimony",
    weight: 121.76,
    config: "[Kr] 4d10 5s2 5p3",
    position: 51,
    atomicRadius: 133,
    ionizationEnergy: 834, // kJ/mol
    electronegativity: 2.05,
    meltingPoint: 631,
    boilingPoint: 1587,
  },
  {
    number: 52,
    symbol: "Te",
    name: "Tellurium",
    weight: 127.6,
    config: "[Kr] 4d10 5s2 5p4",
    position: 52,
    atomicRadius: 123,
    ionizationEnergy: 869, // kJ/mol
    electronegativity: 2.1,
    meltingPoint: 450,
    boilingPoint: 988,
  },
  {
    number: 53,
    symbol: "I",
    name: "Iodine",
    weight: 126.9,
    config: "[Kr] 4d10 5s2 5p5",
    position: 53,
    atomicRadius: 115,
    ionizationEnergy: 1008, // kJ/mol
    electronegativity: 2.66,
    meltingPoint: 114,
    boilingPoint: 184,
  },
  {
    number: 54,
    symbol: "Xe",
    name: "Xenon",
    weight: 131.29,
    config: "[Kr] 4d10 5s2 5p6",
    position: 54,
    atomicRadius: 108,
    ionizationEnergy: 1170, // kJ/mol
    electronegativity: null,
    meltingPoint: -112,
    boilingPoint: -108,
  },
  {
    number: 55,
    symbol: "Cs",
    name: "Cesium",
    weight: 132.91,
    config: "[Xe] 6s1",
    position: 55,
    atomicRadius: 298,
    ionizationEnergy: 376, // kJ/mol
    electronegativity: 0.79,
    meltingPoint: 28,
    boilingPoint: 671,
  },
  {
    number: 56,
    symbol: "Ba",
    name: "Barium",
    weight: 137.33,
    config: "[Xe] 6s2",
    position: 56,
    atomicRadius: 253,
    ionizationEnergy: 503, // kJ/mol
    electronegativity: 0.89,
    meltingPoint: 727,
    boilingPoint: 1897,
  },
  {
    number: 57,
    symbol: "La",
    name: "Lanthanum",
    weight: 138.91,
    config: "[Xe] 5d1 6s2",
    position: 57,
    atomicRadius: 195,
    ionizationEnergy: 538, // kJ/mol
    electronegativity: 1.1,
    meltingPoint: 920,
    boilingPoint: 3464,
  },
  {
    number: 58,
    symbol: "Ce",
    name: "Cerium",
    weight: 140.12,
    config: "[Xe] 4f1 5d1 6s2",
    position: 58,
    atomicRadius: 185,
    ionizationEnergy: 534, // kJ/mol
    electronegativity: 1.12,
    meltingPoint: 795,
    boilingPoint: 3443,
  },
  {
    number: 59,
    symbol: "Pr",
    name: "Praseodymium",
    weight: 140.91,
    config: "[Xe] 4f3 6s2",
    position: 59,
    atomicRadius: 247,
    ionizationEnergy: 527, // kJ/mol
    electronegativity: 1.13,
    meltingPoint: 931,
    boilingPoint: 3520,
  },
  {
    number: 60,
    symbol: "Nd",
    name: "Neodymium",
    weight: 144.24,
    config: "[Xe] 4f4 6s2",
    position: 60,
    atomicRadius: 206,
    ionizationEnergy: 533, // kJ/mol
    electronegativity: 1.14,
    meltingPoint: 1024,
    boilingPoint: 3074,
  },
  {
    number: 61,
    symbol: "Pm",
    name: "Promethium",
    weight: 145,
    config: "[Xe] 4f5 6s2",
    position: 61,
    atomicRadius: 205,
    ionizationEnergy: 540, // kJ/mol
    electronegativity: 1.13,
    meltingPoint: 1042,
    boilingPoint: 3000,
  },
  {
    number: 62,
    symbol: "Sm",
    name: "Samarium",
    weight: 150.36,
    config: "[Xe] 4f6 6s2",
    position: 62,
    atomicRadius: 238,
    ionizationEnergy: 545, // kJ/mol
    electronegativity: 1.17,
    meltingPoint: 1072,
    boilingPoint: 1803,
  },
  {
    number: 63,
    symbol: "Eu",
    name: "Europium",
    weight: 151.96,
    config: "[Xe] 4f7 6s2",
    position: 63,
    atomicRadius: 231,
    ionizationEnergy: 547, // kJ/mol
    electronegativity: 1.2,
    meltingPoint: 822,
    boilingPoint: 1597,
  },
  {
    number: 64,
    symbol: "Gd",
    name: "Gadolinium",
    weight: 157.25,
    config: "[Xe] 4f7 5d1 6s2",
    position: 64,
    atomicRadius: 233,
    ionizationEnergy: 593, // kJ/mol
    electronegativity: 1.2,
    meltingPoint: 1313,
    boilingPoint: 3273,
  },
  {
    number: 65,
    symbol: "Tb",
    name: "Terbium",
    weight: 158.93,
    config: "[Xe] 4f9 6s2",
    position: 65,
    atomicRadius: 225,
    ionizationEnergy: 565, // kJ/mol
    electronegativity: 1.2,
    meltingPoint: 1356,
    boilingPoint: 3230,
  },
  {
    number: 66,
    symbol: "Dy",
    name: "Dysprosium",
    weight: 162.5,
    config: "[Xe] 4f10 6s2",
    position: 66,
    atomicRadius: 228,
    ionizationEnergy: 573, // kJ/mol
    electronegativity: 1.22,
    meltingPoint: 1412,
    boilingPoint: 2562,
  },
  {
    number: 67,
    symbol: "Ho",
    name: "Holmium",
    weight: 164.93,
    config: "[Xe] 4f11 6s2",
    position: 67,
    atomicRadius: 226,
    ionizationEnergy: 581, // kJ/mol
    electronegativity: 1.23,
    meltingPoint: 1474,
    boilingPoint: 2700,
  },
  {
    number: 68,
    symbol: "Er",
    name: "Erbium",
    weight: 167.26,
    config: "[Xe] 4f12 6s2",
    position: 68,
    atomicRadius: 226,
    ionizationEnergy: 589, // kJ/mol
    electronegativity: 1.24,
    meltingPoint: 1529,
    boilingPoint: 2868,
  },
  {
    number: 69,
    symbol: "Tm",
    name: "Thulium",
    weight: 168.93,
    config: "[Xe] 4f13 6s2",
    position: 69,
    atomicRadius: 222,
    ionizationEnergy: 597, // kJ/mol
    electronegativity: 1.25,
    meltingPoint: 1545,
    boilingPoint: 1950,
  },
  {
    number: 70,
    symbol: "Yb",
    name: "Ytterbium",
    weight: 173.05,
    config: "[Xe] 4f14 6s2",
    position: 70,
    atomicRadius: 222,
    ionizationEnergy: 603, // kJ/mol
    electronegativity: 1.1,
    meltingPoint: 824,
    boilingPoint: 1196,
  },
  {
    number: 71,
    symbol: "Lu",
    name: "Lutetium",
    weight: 174.97,
    config: "[Xe] 4f14 5d1 6s2",
    position: 71,
    atomicRadius: 217,
    ionizationEnergy: 524, // kJ/mol
    electronegativity: 1.27,
    meltingPoint: 1663,
    boilingPoint: 3402,
  },
  {
    number: 72,
    symbol: "Hf",
    name: "Hafnium",
    weight: 178.49,
    config: "[Xe] 4f14 5d2 6s2",
    position: 72,
    atomicRadius: 208,
    ionizationEnergy: 658, // kJ/mol
    electronegativity: 1.3,
    meltingPoint: 2233,
    boilingPoint: 4603,
  },
  {
    number: 73,
    symbol: "Ta",
    name: "Tantalum",
    weight: 180.95,
    config: "[Xe] 4f14 5d3 6s2",
    position: 73,
    atomicRadius: 200,
    ionizationEnergy: 761, // kJ/mol
    electronegativity: 1.5,
    meltingPoint: 3017,
    boilingPoint: 5458,
  },
  {
    number: 74,
    symbol: "W",
    name: "Tungsten",
    weight: 183.84,
    config: "[Xe] 4f14 5d4 6s2",
    position: 74,
    atomicRadius: 193,
    ionizationEnergy: 770, // kJ/mol
    electronegativity: 2.36,
    meltingPoint: 3422,
    boilingPoint: 5555,
  },
  {
    number: 75,
    symbol: "Re",
    name: "Rhenium",
    weight: 186.21,
    config: "[Xe] 4f14 5d5 6s2",
    position: 75,
    atomicRadius: 188,
    ionizationEnergy: 760, // kJ/mol
    electronegativity: 1.9,
    meltingPoint: 3186,
    boilingPoint: 5596,
  },
  {
    number: 76,
    symbol: "Os",
    name: "Osmium",
    weight: 190.23,
    config: "[Xe] 4f14 5d6 6s2",
    position: 76,
    atomicRadius: 185,
    ionizationEnergy: 840, // kJ/mol
    electronegativity: 2.2,
    meltingPoint: 3033,
    boilingPoint: 5012,
  },
  {
    number: 77,
    symbol: "Ir",
    name: "Iridium",
    weight: 192.22,
    config: "[Xe] 4f14 5d7 6s2",
    position: 77,
    atomicRadius: 180,
    ionizationEnergy: 880, // kJ/mol
    electronegativity: 2.2,
    meltingPoint: 2446,
    boilingPoint: 4130,
  },
  {
    number: 78,
    symbol: "Pt",
    name: "Platinum",
    weight: 195.08,
    config: "[Xe] 4f14 5d9 6s1",
    position: 78,
    atomicRadius: 177,
    ionizationEnergy: 870, // kJ/mol
    electronegativity: 2.28,
    meltingPoint: 1768,
    boilingPoint: 3825,
  },
  {
    number: 79,
    symbol: "Au",
    name: "Gold",
    weight: 196.97,
    config: "[Xe] 4f14 5d10 6s1",
    position: 79,
    atomicRadius: 174,
    ionizationEnergy: 890, // kJ/mol
    electronegativity: 2.54,
    meltingPoint: 1064,
    boilingPoint: 2856,
  },
  {
    number: 80,
    symbol: "Hg",
    name: "Mercury",
    weight: 200.59,
    config: "[Xe] 4f14 5d10 6s2",
    position: 80,
    atomicRadius: 171,
    ionizationEnergy: 1007, // kJ/mol
    electronegativity: 2.0,
    meltingPoint: -39,
    boilingPoint: 357,
  },
  {
    number: 81,
    symbol: "Tl",
    name: "Thallium",
    weight: 204.38,
    config: "[Xe] 4f14 5d10 6s2 6p1",
    position: 81,
    atomicRadius: 156,
    ionizationEnergy: 589, // kJ/mol
    electronegativity: 1.62,
    meltingPoint: 303,
    boilingPoint: 1473,
  },
  {
    number: 82,
    symbol: "Pb",
    name: "Lead",
    weight: 207.2,
    config: "[Xe] 4f14 5d10 6s2 6p2",
    position: 82,
    atomicRadius: 154,
    ionizationEnergy: 715, // kJ/mol
    electronegativity: 2.33,
    meltingPoint: 327,
    boilingPoint: 1749,
  },
  {
    number: 83,
    symbol: "Bi",
    name: "Bismuth",
    weight: 208.98,
    config: "[Xe] 4f14 5d10 6s2 6p3",
    position: 83,
    atomicRadius: 143,
    ionizationEnergy: 703, // kJ/mol
    electronegativity: 2.02,
    meltingPoint: 271,
    boilingPoint: 1564,
  },
  {
    number: 84,
    symbol: "Po",
    name: "Polonium",
    weight: 209,
    config: "[Xe] 4f14 5d10 6s2 6p4",
    position: 84,
    atomicRadius: 135,
    ionizationEnergy: 812, // kJ/mol
    electronegativity: 2.0,
    meltingPoint: 254,
    boilingPoint: 962,
  },
  {
    number: 85,
    symbol: "At",
    name: "Astatine",
    weight: 210,
    config: "[Xe] 4f14 5d10 6s2 6p5",
    position: 85,
    atomicRadius: 127,
    ionizationEnergy: 920, // kJ/mol
    electronegativity: 2.2,
    meltingPoint: 302,
    boilingPoint: 337,
  },
  {
    number: 86,
    symbol: "Rn",
    name: "Radon",
    weight: 222,
    config: "[Xe] 4f14 5d10 6s2 6p6",
    position: 86,
    atomicRadius: 120,
    ionizationEnergy: 1037, // kJ/mol
    electronegativity: null,
    meltingPoint: -71,
    boilingPoint: -62,
  },
  {
    number: 87,
    symbol: "Fr",
    name: "Francium",
    weight: 223,
    config: "[Rn] 7s1",
    position: 87,
    atomicRadius: 348,
    ionizationEnergy: 380, // kJ/mol
    electronegativity: 0.7,
    meltingPoint: 27,
    boilingPoint: 677,
  },
  {
    number: 88,
    symbol: "Ra",
    name: "Radium",
    weight: 226,
    config: "[Rn] 7s2",
    position: 88,
    atomicRadius: 283,
    ionizationEnergy: 509, // kJ/mol
    electronegativity: 0.9,
    meltingPoint: 700,
    boilingPoint: 1737,
  },
  {
    number: 89,
    symbol: "Ac",
    name: "Actinium",
    weight: 227,
    config: "[Rn] 6d1 7s2",
    position: 89,
    atomicRadius: 188,
    ionizationEnergy: 499, // kJ/mol
    electronegativity: 1.1,
    meltingPoint: 1050,
    boilingPoint: 3200,
  },
  {
    number: 90,
    symbol: "Th",
    name: "Thorium",
    weight: 232.04,
    config: "[Rn] 6d2 7s2",
    position: 90,
    atomicRadius: 179,
    ionizationEnergy: 587, // kJ/mol
    electronegativity: 1.3,
    meltingPoint: 1750,
    boilingPoint: 4790,
  },
  {
    number: 91,
    symbol: "Pa",
    name: "Protactinium",
    weight: 231.04,
    config: "[Rn] 5f2 6d1 7s2",
    position: 91,
    atomicRadius: 161,
    ionizationEnergy: 568, // kJ/mol
    electronegativity: 1.5,
    meltingPoint: 1572,
    boilingPoint: 4000,
  },
  {
    number: 92,
    symbol: "U",
    name: "Uranium",
    weight: 238.03,
    config: "[Rn] 5f3 6d1 7s2",
    position: 92,
    atomicRadius: 156,
    ionizationEnergy: 598, // kJ/mol
    electronegativity: 1.38,
    meltingPoint: 1132,
    boilingPoint: 4131,
  },
  {
    number: 93,
    symbol: "Np",
    name: "Neptunium",
    weight: 237,
    config: "[Rn] 5f4 6d1 7s2",
    position: 93,
    atomicRadius: 155,
    ionizationEnergy: 604, // kJ/mol
    electronegativity: 1.36,
    meltingPoint: 640,
    boilingPoint: 3902,
  },
  {
    number: 94,
    symbol: "Pu",
    name: "Plutonium",
    weight: 244,
    config: "[Rn] 5f6 7s2",
    position: 94,
    atomicRadius: 159,
    ionizationEnergy: 585, // kJ/mol
    electronegativity: 1.28,
    meltingPoint: 640,
    boilingPoint: 3228,
  },
  {
    number: 95,
    symbol: "Am",
    name: "Americium",
    weight: 243,
    config: "[Rn] 5f7 7s2",
    position: 95,
    atomicRadius: 173,
    ionizationEnergy: 578, // kJ/mol
    electronegativity: 1.3,
    meltingPoint: 1176,
    boilingPoint: 2607,
  },
  {
    number: 96,
    symbol: "Cm",
    name: "Curium",
    weight: 247,
    config: "[Rn] 5f7 6d1 7s2",
    position: 96,
    atomicRadius: 174,
    ionizationEnergy: 581, // kJ/mol
    electronegativity: 1.3,
    meltingPoint: 1340,
    boilingPoint: 3110,
  },
  {
    number: 97,
    symbol: "Bk",
    name: "Berkelium",
    weight: 247,
    config: "[Rn] 5f9 7s2",
    position: 97,
    atomicRadius: 170,
    ionizationEnergy: 601, // kJ/mol
    electronegativity: 1.3,
    meltingPoint: 986,
    boilingPoint: 2627,
  },
  {
    number: 98,
    symbol: "Cf",
    name: "Californium",
    weight: 251,
    config: "[Rn] 5f10 7s2",
    position: 98,
    atomicRadius: 186,
    ionizationEnergy: 608, // kJ/mol
    electronegativity: 1.3,
    meltingPoint: 900,
    boilingPoint: 1470,
  },
  {
    number: 99,
    symbol: "Es",
    name: "Einsteinium",
    weight: 252,
    config: "[Rn] 5f11 7s2",
    position: 99,
    atomicRadius: 186,
    ionizationEnergy: 619, // kJ/mol
    electronegativity: 1.3,
    meltingPoint: 860,
    boilingPoint: null,
  },
  {
    number: 100,
    symbol: "Fm",
    name: "Fermium",
    weight: 257,
    config: "[Rn] 5f12 7s2",
    position: 100,
    atomicRadius: 175,
    ionizationEnergy: 627, // kJ/mol
    electronegativity: 1.3,
    meltingPoint: 1527,
    boilingPoint: null,
  },
  {
    number: 101,
    symbol: "Md",
    name: "Mendelevium",
    weight: 258,
    config: "[Rn] 5f13 7s2",
    position: 101,
    atomicRadius: 173,
    ionizationEnergy: 635, // kJ/mol
    electronegativity: 1.3,
    meltingPoint: 827,
    boilingPoint: null,
  },
  {
    number: 102,
    symbol: "No",
    name: "Nobelium",
    weight: 259,
    config: "[Rn] 5f14 7s2",
    position: 102,
    atomicRadius: 171,
    ionizationEnergy: 642, // kJ/mol
    electronegativity: 1.3,
    meltingPoint: 827,
    boilingPoint: null,
  },
  {
    number: 103,
    symbol: "Lr",
    name: "Lawrencium",
    weight: 262,
    config: "[Rn] 5f14 7s2 7p1",
    position: 103,
    atomicRadius: 161,
    ionizationEnergy: 470, // kJ/mol
    electronegativity: 1.3,
    meltingPoint: 1627,
    boilingPoint: null,
  },
  {
    number: 104,
    symbol: "Rf",
    name: "Rutherfordium",
    weight: 267,
    config: "[Rn] 5f14 6d2 7s2",
    position: 104,
    atomicRadius: 157,
    ionizationEnergy: null,
    electronegativity: null,
    meltingPoint: null,
    boilingPoint: null,
  },
  {
    number: 105,
    symbol: "Db",
    name: "Dubnium",
    weight: 270,
    config: "[Rn] 5f14 6d3 7s2",
    position: 105,
    atomicRadius: 149,
    ionizationEnergy: null,
    electronegativity: null,
    meltingPoint: null,
    boilingPoint: null,
  },
  {
    number: 106,
    symbol: "Sg",
    name: "Seaborgium",
    weight: 271,
    config: "[Rn] 5f14 6d4 7s2",
    position: 106,
    atomicRadius: 143,
    ionizationEnergy: null,
    electronegativity: null,
    meltingPoint: null,
    boilingPoint: null,
  },
  {
    number: 107,
    symbol: "Bh",
    name: "Bohrium",
    weight: 270,
    config: "[Rn] 5f14 6d5 7s2",
    position: 107,
    atomicRadius: 141,
    ionizationEnergy: null,
    electronegativity: null,
    meltingPoint: null,
    boilingPoint: null,
  },
  {
    number: 108,
    symbol: "Hs",
    name: "Hassium",
    weight: 277,
    config: "[Rn] 5f14 6d6 7s2",
    position: 108,
    atomicRadius: 134,
    ionizationEnergy: null,
    electronegativity: null,
    meltingPoint: null,
    boilingPoint: null,
  },
  {
    number: 109,
    symbol: "Mt",
    name: "Meitnerium",
    weight: 278,
    config: "[Rn] 5f14 6d7 7s2",
    position: 109,
    atomicRadius: 129,
    ionizationEnergy: null,
    electronegativity: null,
    meltingPoint: null,
    boilingPoint: null,
  },
  {
    number: 110,
    symbol: "Ds",
    name: "Darmstadtium",
    weight: 281,
    config: "[Rn] 5f14 6d9 7s1",
    position: 110,
    atomicRadius: 128,
    ionizationEnergy: null,
    electronegativity: null,
    meltingPoint: null,
    boilingPoint: null,
  },
  {
    number: 111,
    symbol: "Rg",
    name: "Roentgenium",
    weight: 282,
    config: "[Rn] 5f14 6d10 7s1",
    position: 111,
    atomicRadius: 121,
    ionizationEnergy: null,
    electronegativity: null,
    meltingPoint: null,
    boilingPoint: null,
  },
  {
    number: 112,
    symbol: "Cn",
    name: "Copernicium",
    weight: 285,
    config: "[Rn] 5f14 6d10 7s2",
    position: 112,
    atomicRadius: 122,
    ionizationEnergy: null,
    electronegativity: null,
    meltingPoint: null,
    boilingPoint: null,
  },
  {
    number: 113,
    symbol: "Nh",
    name: "Nihonium",
    weight: 286,
    config: "[Rn] 5f14 6d10 7s2 7p1",
    position: 113,
    atomicRadius: 136,
    ionizationEnergy: null,
    electronegativity: null,
    meltingPoint: null,
    boilingPoint: null,
  },
  {
    number: 114,
    symbol: "Fl",
    name: "Flerovium",
    weight: 289,
    config: "[Rn] 5f14 6d10 7s2 7p2",
    position: 114,
    atomicRadius: 143,
    ionizationEnergy: null,
    electronegativity: null,
    meltingPoint: null,
    boilingPoint: null,
  },
  {
    number: 115,
    symbol: "Mc",
    name: "Moscovium",
    weight: 290,
    config: "[Rn] 5f14 6d10 7s2 7p3",
    position: 115,
    atomicRadius: 138,
    ionizationEnergy: null,
    electronegativity: null,
    meltingPoint: null,
    boilingPoint: null,
  },
  {
    number: 116,
    symbol: "Lv",
    name: "Livermorium",
    weight: 293,
    config: "[Rn] 5f14 6d10 7s2 7p4",
    position: 116,
    atomicRadius: 162,
    ionizationEnergy: null,
    electronegativity: null,
    meltingPoint: null,
    boilingPoint: null,
  },
  {
    number: 117,
    symbol: "Ts",
    name: "Tennessine",
    weight: 294,
    config: "[Rn] 5f14 6d10 7s2 7p5",
    position: 117,
    atomicRadius: 165,
    ionizationEnergy: null,
    electronegativity: null,
    meltingPoint: null,
    boilingPoint: null,
  },
  {
    number: 118,
    symbol: "Og",
    name: "Oganesson",
    weight: 294,
    config: "[Rn] 5f14 6d10 7s2 7p6",
    position: 118,
    atomicRadius: 157,
    ionizationEnergy: null,
    electronegativity: null,
    meltingPoint: null,
    boilingPoint: null,
  },
  {
    name: "Alkali Metals",
    position: 119,
  },
  {
    name: "Alkali Earth Metals",
    position: 120,
  },
  {
    name: "Transition Metals",
    position: 121,
  },
  {
    name: "Post-transition Metals",
    position: 122,
  },
  {
    name: "Metalloids",
    position: 123,
  },
  {
    name: "Nometals",
    position: 124,
  },
  {
    name: "Halogens",
    position: 125,
  },
  {
    name: "Noble Gases",
    position: 126,
  },
  {
    name: "Lanthanides",
    position: 127,
  },
  {
    name: "Actinides",
    position: 128,
  },
];

const elementGroups = {
  "alkali-metals": [3, 11, 19, 37, 55, 87, 119],
  "alkali-earth-metals": [4, 12, 20, 38, 56, 88, 120],
  "transition-metals": [
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 39, 40, 41, 42, 43, 44, 45, 46, 47,
    48, 72, 73, 74, 75, 76, 77, 78, 79, 80, 104, 105, 106, 107, 108, 109, 110,
    111, 112, 121,
  ],
  "post-transition-metals": [
    13, 31, 49, 50, 81, 82, 83, 113, 114, 115, 116, 122,
  ],
  metalloids: [5, 14, 32, 33, 51, 52, 84, 123],
  nonmetals: [1, 6, 7, 8, 15, 16, 34, 124],
  halogens: [9, 17, 35, 53, 85, 117, 125],
  "noble-gases": [2, 10, 18, 36, 54, 86, 118, 126],
  lanthanides: [
    57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 127,
  ],
  actinides: [
    89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 128,
  ],
};

const categoryMapping = {
  "1 - 20": "Elements 1 - 20",
  "alkali-metals": "Alkali Metals",
  "alkali-earth-metals": "Alkali Earth Metals",
  "transition-metals": "Transition Metals",
  "post-transition-metals": "Post-transition Metals",
  metalloids: "Metalloids",
  nonmetals: "Nonmetals",
  halogens: "Halogens",
  "noble-gases": "Noble Gases",
  lanthanides: "Lanthanides",
  actinides: "Actinides",
};

// Function to assign group to each element
const assignGroups = (elements) => {
  return elements.map((element) => {
    // Loop through each group in elementGroups
    for (const group in elementGroups) {
      // Check if the element's atomic number is in this group's array
      if (elementGroups[group].includes(element.position)) {
        // If a match is found, return a new object that includes the group
        return {
          ...element, // Spread the original element's properties
          group: group, // Assign the group name as the "group" property
        };
      }
    }
    // Default if no group is found
    return {
      ...element,
      group: "Other Elements",
    };
  });
};

function App() {
  const [elements, setElements] = useState([]); // State for elements
  const [searchTerm, setSearchTerm] = useState(""); // For search functionality
  const [isElementInfoVisible, setIsElementInfoVisible] = useState(false); // Memory game visibility
  const [selectedElement, setSelectedElement] = useState(null); // To show element info
  const [isMemoryGameVisible, setIsMemoryGameVisible] = useState(false); // Memory game visibility
  const [maskedElements, setMaskedElements] = useState([]); // Elements to mask for memory game
  const [emptyElements, setEmptyElements] = useState(0); // Track remaining empty elements
  const [isMemoryGameActive, setIsMemoryGameActive] = useState(false); // Memory game state
  const [flippedElements, setFlippedElements] = useState([]);
  const [gameCompleted, setGameCompleted] = useState(false); // Track if game is completed
  const infoBoxRef = useRef(null); // Create a ref for the info box

  // On component mount, assign groups and set elements
  useEffect(() => {
    const groupedElements = assignGroups(elementsData);
    setElements(groupedElements);
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Show element info on click
  const showElementInfo = (element) => {
    if (selectedElement && selectedElement.position === element.position) {
      hideElementInfo(element);
    } else {
      setIsElementInfoVisible(true);
      setSelectedElement(element);
    }
  };

  // Hide element info on click
  const hideElementInfo = (element) => {
    setIsElementInfoVisible(false);
    setSelectedElement(null);
  };

  useEffect(() => {
    if (selectedElement && infoBoxRef.current) {
      infoBoxRef.current.className = "element-info"; // Reset to base class

      // Add the group class of the clicked element
      const elementGroupClass = selectedElement.group; // Assuming selectedElement.group holds the group class
      if (elementGroupClass) {
        infoBoxRef.current.classList.add(elementGroupClass); // Add the same class as the element
      }
    }
  }, [selectedElement]); // This effect runs when the selected element changes

  // Function to start the memory game
  const startMemoryGame = () => {
    console.log("Start button clicked");
    setIsMemoryGameVisible(true); // Show memory game prompt
    setIsMemoryGameActive(true);
    setGameCompleted(false);
  };

  // Function to flip cards
  const flipCards = (elements) => {
    const elementNumbers = elements.map((el) => el.number);
    setFlippedElements((prev) => [...prev, ...elementNumbers]);
  };

  // Function to flip back cards after a correct guess
  const flipBackCards = (elementNumber) => {
    setFlippedElements((prev) => prev.filter((num) => num !== elementNumber)); // Remove the element number from flippedElements
  };

  // Handle category selection for memory game
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;

    // Filter the elements based on the selected category and add them to maskedElements
    let selected = [];

    switch (selectedCategory) {
      case "1 - 20":
        selected = elementsData.slice(0, 20);
        break;
      case "alkali-metals":
        selected = elementsData.filter((el) =>
          ["Li", "Na", "K", "Rb", "Cs", "Fr"].includes(el.symbol)
        );
        break;
      case "alkali-earth-metals":
        selected = elementsData.filter((el) =>
          ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"].includes(el.symbol)
        );
        break;
      case "transition-metals":
        selected = elements.filter((el) =>
          [
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 39, 40, 41, 42, 43, 44, 45,
            46, 47, 48, 72, 73, 74, 75, 76, 77, 78, 79, 80, 104, 105, 106, 107,
            108, 109, 110, 111, 112, 121,
          ].includes(el.number)
        );
        break;
      case "post-transition-metals":
        selected = elements.filter((el) =>
          [13, 31, 49, 50, 81, 82, 83, 113, 114, 115, 116, 122].includes(
            el.number
          )
        );
        break;
      case "metalloids":
        selected = elements.filter((el) =>
          [5, 14, 32, 33, 51, 52, 84, 123].includes(el.number)
        );
        break;
      case "nonmetals":
        selected = elements.filter((el) =>
          [1, 6, 7, 8, 15, 16, 34].includes(el.number)
        );
        break;
      case "halogens":
        selected = elements.filter((el) =>
          ["F", "Cl", "Br", "I", "At", "Ts"].includes(el.symbol)
        );
        break;
      case "noble-gases":
        selected = elements.filter((el) =>
          ["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"].includes(el.symbol)
        );
        break;
      case "lanthanides":
        selected = elements.slice(56, 72);
        break;
      case "actinides":
        selected = elements.slice(88, 104);
        break;
      default:
        alert("No such element group");
        return;
    }

    const masked = selected.map((el) => el.number);
    setMaskedElements(masked); // Mask the selected elements' names and symbols
    setEmptyElements(selected.length); // Set how many elements need to be guessed
    setIsMemoryGameActive(true); // Activate memory game
    flipCards(selected);
  };

  // Prompt user for input and update element
  const promptUser = (element, index) => {
    const answer = prompt(
      `Enter the symbol or name for element with atomic number ${element.number}:`
    );
    if (answer === element.symbol || answer === element.name) {
      // Correct answer
      setMaskedElements((prev) => prev.filter((num) => num !== element.number)); // Unmask element
      flipBackCards(element.number);

      setEmptyElements((prev) => prev - 1); // Decrease empty elements count
      if (emptyElements - 1 === 0) {
        setGameCompleted(true);
        setIsMemoryGameActive(false); // End game
        setIsMemoryGameVisible(false);
      }
    } else {
      alert("Incorrect. Try again.");
    }
  };

  // Reset app to it's initial state
  const resetApp = () => {
    const groupedElements = assignGroups(elementsData); // Reassign the groups
    setElements(groupedElements); // Reset the elements
    setMaskedElements([]); // Clear masked elements
    setEmptyElements(0); // Reset empty elements
    setIsMemoryGameActive(false); // Deactivate memory game
    setGameCompleted(false); // Clear completion status
    setIsMemoryGameVisible(false); // Hide memory game prompt
    setIsElementInfoVisible(false); // Hide element info
    setSelectedElement(null); // Clear selected element
    setSearchTerm(""); // Clear search term
    setFlippedElements([]); // Clear flipped elements
  };

  // Filter elements based on search term
  const filteredElements = elements.filter((element) =>
    element.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="App">
      {/* Search input */}
      <div className="container">
        {/* Search input */}
        <input
          type="text"
          id="search"
          className="search"
          placeholder="Search for an element..."
          onChange={handleSearch}
        />

        <div className="buttons">
          {/* Start Memory Game button */}
          <button className="start" onClick={startMemoryGame}>
            Start Memory Game
          </button>

          {/* Reset button */}
          <button className="reset" onClick={resetApp}>
            Reset
          </button>
        </div>

        {/* Memory game category selection */}
        {isMemoryGameVisible && (
          <div className="memory-game-prompt">
            <label htmlFor="element-category">
              Please select a category to start the game
            </label>
            <select id="element-category" onChange={handleCategoryChange}>
              <option value="">Select a category</option>
              {Object.keys(categoryMapping).map((key) => (
                <option key={key} value={key}>
                  {categoryMapping[key]}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Display message if memory game is ongoing */}
        {isMemoryGameActive && emptyElements > 0 && (
          <p className="message">
            {emptyElements} elements remaining. Click the boxes to fill in their
            name or symbol.
          </p>
        )}

        {/* Display congratulations message if game is completed */}
        {gameCompleted && (
          <p className="endgame-message">
            🎉 Congratulations! You've completed the game! 🎉
          </p>
        )}

        {/* Periodic table */}
        <div className="periodic-table">
          {filteredElements.map((element) => (
            <div
              key={element.number}
              className={`element ${element.group} element ${
                flippedElements.includes(element.number) ? "flipped" : ""
              }`}
              data-position={element.position}
              onClick={
                () =>
                  isMemoryGameActive && maskedElements.includes(element.number)
                    ? promptUser(element) // Only prompt if element is masked
                    : showElementInfo(element) // Otherwise, show element info
              }
            >
              {element.symbol && element.name ? (
                <>
                  <div className="number">
                    {maskedElements.includes(element.number)
                      ? "--"
                      : element.number}
                  </div>
                  <div className="symbol">
                    {maskedElements.includes(element.number)
                      ? "--"
                      : element.symbol}
                  </div>
                  <div className="name">
                    {maskedElements.includes(element.number)
                      ? "--"
                      : element.name}
                  </div>
                  <div className="weight">
                    {maskedElements.includes(element.number)
                      ? "--"
                      : element.weight}
                  </div>
                </>
              ) : (
                <div className="name">{element.name}</div>
              )}
            </div>
          ))}
        </div>

        {/* Element info box */}
        {selectedElement && (
          <div
            ref={infoBoxRef} // Reference to the info box
            className="element-info"
            style={{ display: isElementInfoVisible ? "block" : "none" }}
          >
            {selectedElement.number ? (
              <>
                <h2>
                  {selectedElement.name} ({selectedElement.symbol})
                </h2>
                <p>Atomic Number: {selectedElement.number}</p>
                <p>Atomic Weight: {selectedElement.weight}</p>
                <p>Electron Configuration: {selectedElement.config}</p>
                <p>Atomic Radius: {selectedElement.atomicRadius} pm</p>
                <p>
                  1st Ionization Energy: {selectedElement.ionizationEnergy}{" "}
                  kJ/mol{" "}
                </p>
                <p>Eloctronegativity: {selectedElement.electronegativity}</p>
                <p>Melting Point: {selectedElement.meltingPoint} °C </p>
                <p>Boilibg Point: {selectedElement.boilingPoint} °C</p>
              </>
            ) : (
              <p>This colour represents all {selectedElement.name}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
