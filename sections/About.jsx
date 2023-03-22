'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="|Sobre o metaverso" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">O metaverso</span> é um termo
        que descreve uma rede virtual de mundos tridimensionais em constante evolução,
        onde os usuários podem interagir em tempo real em um ambiente imersivo.
        É um conceito que se baseia na ideia de uma realidade virtual compartilhada, onde os usuários podem explorar,
        criar, interagir e viver em um ambiente virtual{' '}
        <span className="font-extrabold text-white">
        O termo foi cunhado por Neal Stephenson
        </span>{' '}
        em seu livro de ficção científica "Snow Crash" {' '}
        <span className="font-extrabold text-white">publicado em 1992</span>  Desde então, o conceito tem sido amplamente discutido em círculos
        de tecnologia e negócios, com várias empresas
        e organizações explorando o desenvolvimento de uma 
        versão viável do metaverso.{' '}
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;