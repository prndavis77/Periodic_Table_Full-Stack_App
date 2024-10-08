import React from "react";
import { Link } from "react-router-dom"; // Add this line to import Link
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="centered">The Periodic Table of Elements</h1>
      <div className="intro">
        <p>
          The periodic table of elements is a foundational tool in the study of
          chemistry and physics, providing a systematic way to classify and
          understand the properties of all known chemical elements. Organized by
          increasing atomic number, which represents the number of protons in an
          element’s nucleus, the table arranges elements into rows (periods) and
          columns (groups) based on their electron configurations and chemical
          behaviors. This layout reveals patterns in element properties, making
          it easier to predict their reactivity, atomic size, and bonding
          tendencies.
        </p>

        <p>
          Developed in 1869 by Dmitri Mendeleev, the original periodic table
          arranged elements by increasing atomic mass, but Mendeleev also left
          gaps for undiscovered elements, predicting their properties with
          remarkable accuracy. As atomic theory advanced, the modern table
          shifted to organizing elements by atomic number rather than mass,
          which corrected some inconsistencies and provided a clearer
          understanding of chemical relationships. Today, the table contains 118
          confirmed elements, including naturally occurring and synthetic ones,
          and continues to expand with ongoing scientific discoveries.
        </p>

        <p>
          The periodic table is divided into distinct sections: the s-block,
          p-block, d-block, and f-block, which correspond to the element's
          electron configuration. The s-block includes highly reactive elements
          such as the alkali and alkaline earth metals, while the p-block houses
          a variety of elements, including nonmetals, metalloids, and noble
          gases. The d-block contains transition metals, known for their complex
          electron behavior and widespread industrial use, while the f-block
          includes the lanthanides and actinides, often involved in cutting-edge
          technologies like electronics and nuclear energy.
        </p>

        <p>
          One of the most useful features of the periodic table is its ability
          to illustrate periodic trends, such as atomic radius, ionization
          energy, and electronegativity, which change predictably across periods
          and down groups. For example, atomic size decreases across a period
          due to stronger nuclear attraction but increases down a group as
          additional electron shells are added. Similarly, ionization energy—the
          energy required to remove an electron—generally increases across a
          period as atoms become more stable and decreases down a group as outer
          electrons are more easily removed.
        </p>

        <p>
          In essence, the periodic table not only catalogs elements but also
          serves as a guide for predicting chemical reactions, bonding patterns,
          and element properties. Its structured design remains an indispensable
          reference for scientists, enabling a deeper understanding of matter
          and its interactions at the atomic level.
        </p>
        <div className="centered">
          <Link to="/periodic-table">
            <button className="explore">Start Exploring</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
