import React from 'react';
import Bio from '../fragments/Home/Bio';
import { Link } from 'react-router-dom';

const About = () => {

  const title = "Sobre mi";

  const text = ["Mi nombre es Cristian Fonseca, soy un comunicador social comprometido con la política y la comunidad. Nací en La Carlota, Córdoba, y me he destacado como un reconocido comunicador cuya pasión por la política y la búsqueda de la verdad ha dejado una profunda huella en el ámbito periodístico.",
    "Desde mis humildes comienzos, trabajé como maquinista en empresas privadas en mi ciudad natal. Sin embargo, mi espíritu inquieto me llevó a buscar nuevas oportunidades en la ciudad de Las Heras, Santa Cruz, donde me sumergí en la industria petrolera. Durante mi tiempo en esta industria, experimenté de primera mano los desafíos económicos que afectaron a mi comunidad durante una recesión local.",
    "Fue en este punto crucial de mi vida cuando mi interés por la política comenzó a florecer. Inspirado por el deseo de generar un cambio significativo en mi entorno, decidí embarcarme en una nueva aventura cuando perdí mi trabajo en el sector petrolero por manifestar mis ideologías que iban en contra de las políticas laborales.",
    "Tras tomar esta decisión, di mis primeros pasos en el campo de comunicador social trabajando como administrativo en el Ministerio de Trabajo. Esta experiencia me permitió adquirir un conocimiento profundo sobre las cuestiones laborales y sociales que afectan a mi comunidad. Sin embargo, mi verdadero destino y pasión se encontraban en el análisis político, donde mi voz podría influir y brindar información objetiva sobre los asuntos que afectan a la sociedad.",
    "Como comunicador social político, me he destacado por mi dedicación incansable a la investigación y mi búsqueda constante de la verdad. Mi compromiso con la integridad comunicacional ha sido una constante a lo largo de mi carrera, y he sido reconocido por mi imparcialidad y por presentar informes equilibrados y objetivos.",
    "Considero importante remarcar que encuentro mi inspiración en los valores del Partido Justicialista. Mi dedicación a la política se basa en una fuerte creencia en la justicia social, la igualdad de oportunidades y la defensa de los derechos de los trabajadores. Estos valores fundamentales del justicialismo han guiado mi carrera comunicacional y han sido la base de mis entrevistas, donde busco dar voz a aquellos que a menudo son marginados o desfavorecidos.",
    "Hoy en día, me destaco como un comunicador social político respetado y confiable. Mi trabajo constante y mi compromiso con los valores del Partido en los cuales me inspiro han consolidado mi reputación como un defensor apasionado de la comunidad y como informador objetivo y riguroso.",
    "A través de mi labor, he logrado generar un impacto positivo en mi entorno, fomentando el diálogo político constructivo y brindando una visión imparcial sobre los asuntos que afectan a la sociedad. Uno de mis objetivos es que mi valentía y dedicación sean un ejemplo inspirador para las generaciones futuras que aspiran a marcar la diferencia en su comunidad.",
    "Además de mi labor como comunicador social político, también me he involucrado activamente en la comunidad. Participé en iniciativas locales que buscan promover el bienestar de los ciudadanos, como campañas de concientización sobre temas sociales y políticos. Mi objetivo es empoderar a la sociedad para que participe activamente en los procesos democráticos y tenga voz en la toma de decisiones que afectan sus vidas.",
    "Mi objetivo principal es contribuir a generar un cambio positivo y promover los valores de justicia social, igualdad de oportunidades y defensa de los derechos de los trabajadores. A través de mi trabajo, aspiro a ser una voz que inspire a otros y aportar al desarrollo de una sociedad más justa y equitativa."];

  const img = "img/miNombreEsCristian.jpeg";

  return (
    <div className='about_ section text-center'>
      <Bio clasName="about_section" title={title} text={text} img={img} />
      <Link className='btn btn-primary mt-5' to="/">Ir a Noticias</Link>
    </div>
  )
}

export default About;