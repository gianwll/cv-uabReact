import './App.css';

function App() {
  return (
    <div className="cv-container">
      <header className="encabezado">
        <img src="/perfil.jpeg" alt="Foto de Perfil" className="foto-perfil" />
        
        <div className="info-encabezado">
          <h1>Giancarla Patricia Cruz Ticona</h1>
          <div className="contacto">
            Ingeniería en Sistemas | (591) 63960968 | giancarla.cruz@uab.edu.bo | www.linkedin.com.co
          </div>
        </div>
      </header>

      <main>
        <section className="seccion">
          <h2>Perfil</h2>
          <p>
            Estudiante de la Universidad Adventista de Bolivia con un enfoque especializado en el Desarrollo Full-Stack. Experiencia en la creación de soluciones funcionales, desarrollo de APIs y optimización de procesos mediante el diseño de sistemas de gestión. Aporto valor a través de la resolución de problemas y la aplicación de conocimientos sólidos en arquitecturas frontend (Angular, React) y backend (.NET, C#).
          </p>
        </section>

        <section className="seccion">
          <h2>Habilidades Técnicas</h2>
          <ul>
            <li><strong>Frontend:</strong> Angular, HTML, CSS, TypeScript, JavaScript</li>
            <li><strong>Backend y Lenguajes:</strong> .NET Core, C#, Python</li>
            <li><strong>Bases de Datos:</strong> SQL Server, PgAdmin, MySQL Workbench</li>
            <li><strong>Herramientas:</strong> Git/GitHub, Metodología Scrum (Certificado SFPC), JetBrains Rider</li>
          </ul>
        </section>

        <section className="seccion">
          <h2>Experiencia Profesional</h2>
          <div className="item">
            <div className="item-header">
              <strong>Prácticas en el Área de Soporte - Boliviana de Aviación (BOA)</strong> 
              <span class="fecha">(marzo 2025 - junio 2025)</span>
            </div>
            <ul>
              <li>Apoyo en la resolución de incidentes de soporte técnico.</li>
              <li>Control y gestión de inventario.</li>
            </ul>
          </div>
          
          <div className="item">
            <div className="item-header">
              <strong>Biblioteca UAB - Ayudante de Inventario</strong> 
              <span className="fecha">(junio 2024)</span>
            </div>
            <ul>
              <li>Organización y orden de libros en estanterías.</li>
            </ul>
          </div>
        </section>

        <section className="seccion">
          <h2>Proyectos Destacados</h2>
          <ul>
            <li><strong>Gestor de Inventario para un Restaurante</strong> <span className="fecha">(Septiembre - Noviembre 2024)</span></li>
            <li><strong>Gestor de Inventario para una Farmacia</strong> <span className="fecha">(Abril - Junio 2024)</span></li>
            <li><strong>TodoApp</strong> <span className="fecha">(Agosto - Octubre 2024)</span></li>
          </ul>
        </section>

        <section className="seccion">
          <h2>Cursos y Certificaciones</h2>
          <ul>
            <li>2024: Certificado Profesional de Scrum Foundation (SFPC) Español</li>
            <li>2024: SQLite Desafío Latam</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;