import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Components
import Header from '../components/Header';
import UrlImput from '../components/UrlImput';
import ViewMetrics from '../components/ViewMetrics';
import BottonContent from '../components/BottonContent';
import Credits from '../components/Credits';

export default function Home() {
  return (
    <div>
      <Header />
      <UrlImput />
      <ViewMetrics />
      <BottonContent />
      <Credits />
    </div>
  )
}