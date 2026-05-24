import Layout from '@theme/Layout'
import styles from './index.module.css'

export default function Home() {

  return (

    <Layout
      title="Olé Sevilla"
      description="The Cultural AI Experience"
    >

      <main className={styles.homepage}>

        {/* HERO */}

        <section className={styles.heroSection}>

          <div className={styles.heroOverlay}></div>

          <div className={styles.heroContent}>

            <span className={styles.heroBadge}>
              THE CULTURAL AI EXPERIENCE
            </span>

            <h1 className={styles.heroTitle}>
              Olé <br />
              Sevilla
            </h1>

            <p className={styles.heroDescription}>

              Donde la cultura andaluza, la inteligencia artificial
              y el diseño emocional crean experiencias inolvidables.

            </p>

            <div className={styles.heroButtons}>

              <a
                href="/intro"
                className={styles.primaryBtn}
              >
                Explorar Documentación →
              </a>

              <a
                href="/arquitectura"
                className={styles.secondaryBtn}
              >
                Ver Arquitectura
              </a>

            </div>

          </div>

        </section>

        {/* FEATURES */}

        <section className={styles.featuresSection}>

          <div className={styles.featureCard}>

            <div className={styles.featureIcon}>📸</div>

            <h3>Scan&Olé</h3>

            <p>
              Reconocimiento IA de monumentos emblemáticos.
            </p>

          </div>

          <div className={styles.featureCard}>

            <div className={styles.featureIcon}>🗺️</div>

            <h3>Rutas Interactivas</h3>

            <p>
              Explora rutas culturales gamificadas.
            </p>

          </div>

          <div className={styles.featureCard}>

            <div className={styles.featureIcon}>🎵</div>

            <h3>Sound&Olé</h3>

            <p>
              Reconocimiento musical y sonidos tradicionales.
            </p>

          </div>

          <div className={styles.featureCard}>

            <div className={styles.featureIcon}>👥</div>

            <h3>Olé Connect</h3>

            <p>
              Conecta con viajeros y descubre retos culturales.
            </p>

          </div>

        </section>

        {/* STATS */}

        <section className={styles.statsSection}>

          <div className={styles.statCard}>

            <h2>5+</h2>

            <p>Módulos Inteligentes</p>

          </div>

          <div className={styles.statCard}>

            <h2>100%</h2>

            <p>Diseño Responsive</p>

          </div>

          <div className={styles.statCard}>

            <h2>∞</h2>

            <p>Futuro Sin Límites</p>

          </div>

        </section>

        {/* EXPERIENCE */}

        <section className={styles.experienceSection}>

          <div className={styles.experienceLeft}>

            <span className={styles.sectionTag}>
              DESCUBRE SEVILLA
            </span>

            <h2>

              Experiencias que <br />

              conectan
              <span> cultura, tecnología y emoción</span>

            </h2>

            <p>

              Olé Sevilla utiliza inteligencia artificial para
              acercarte a la historia, el arte y las tradiciones
              como nunca antes.

            </p>

            <ul>

              <li>Explora monumentos con IA</li>

              <li>Aprende expresiones andaluzas jugando</li>

              <li>Descubre rutas culturales únicas</li>

              <li>Conecta con la comunidad cultural</li>

            </ul>

            <a
              href="/intro"
              className={styles.primaryBtn}
            >
              Empezar Ahora →
            </a>

          </div>

          <div className={styles.experienceRight}>

            <img
              src="/img/ole-sevilla-mobile-ui.png"
              alt="Olé Sevilla Mobile UI"
              className={styles.experienceImage}
            />

          </div>

        </section>

        {/* TECH */}

        <section className={styles.techSection}>

          <span className={styles.sectionTag}>
            TECNOLOGÍAS UTILIZADAS
          </span>

          <div className={styles.techGrid}>

            <div className={styles.techCard}>React</div>

            <div className={styles.techCard}>Node.js</div>

            <div className={styles.techCard}>MongoDB</div>

            <div className={styles.techCard}>TensorFlow.js</div>

            <div className={styles.techCard}>Vite</div>

            <div className={styles.techCard}>Docusaurus</div>

          </div>

        </section>

        {/* CTA */}

        <section className={styles.ctaSection}>

          <div className={styles.ctaOverlay}></div>

          <div className={styles.ctaContent}>

            <div>

              <h2>
                Un proyecto abierto, colaborativo y en constante evolución
              </h2>

              <p>

                Explora la documentación técnica y descubre
                cómo construimos el futuro cultural con IA.

              </p>

            </div>

            <a
              href="/intro"
              className={styles.ctaButton}
            >
              Ver Documentación →
            </a>

          </div>

        </section>

      </main>

    </Layout>
  )
}