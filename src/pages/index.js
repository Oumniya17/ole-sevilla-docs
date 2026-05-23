import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {

  return (

    <Layout
      title="Olé Sevilla"
      description="The Cultural AI Experience"
      noNavbar
      noFooter
    >

      <div className={styles.heroPage}>

        <section className={styles.heroContent}>

          <div className={styles.leftContent}>

            <p className={styles.miniTitle}>
              THE CULTURAL AI EXPERIENCE
            </p>

            <h1>
              Olé
              <br />
              Sevilla
            </h1>

            <p className={styles.description}>
              Donde la cultura andaluza,
              la inteligencia artificial
              y el diseño emocional crean
              experiencias inolvidables.
            </p>

            <div className={styles.buttons}>

              <a
                href="/docs/intro"
                className={styles.primaryBtn}
              >
                Explorar Documentación →
              </a>

              <a
                href="/docs/arquitectura"
                className={styles.secondaryBtn}
              >
                Ver Arquitectura
              </a>

            </div>

            <div className={styles.stats}>

              <div>
                <h2>5+</h2>
                <p>Módulos Principales</p>
              </div>

              <div>
                <h2>100%</h2>
                <p>Diseño Responsive</p>
              </div>

              <div>
                <h2>∞</h2>
                <p>Futuro Sin Límites</p>
              </div>

            </div>

          </div>

        </section>

        <section className={styles.cardsSection}>

          <div className={styles.card}>
            <div className={styles.cardIcon}>📸</div>

            <div>
              <h3>Scan&Olé</h3>
              <p>
                Reconocimiento IA de monumentos emblemáticos.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🗺️</div>

            <div>
              <h3>Rutas Interactivas</h3>
              <p>
                Explora rutas culturales gamificadas por Sevilla.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🐝</div>

            <div>
              <h3>Sevilla Bee</h3>
              <p>
                Tu guía inteligente durante todo el viaje.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>👥</div>

            <div>
              <h3>Olé Connect</h3>
              <p>
                Conecta con viajeros y descubre retos.
              </p>
            </div>
          </div>

        </section>

      </div>

    </Layout>

  );
}