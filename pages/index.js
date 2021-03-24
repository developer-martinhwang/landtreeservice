import Head from 'next/head'
import styles from '../styles/Home.module.css'
//components
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Total Service Landscape Architecture Company</title>
        <link rel="icon" href="/landtree_service_logo.png" />
        <meta name="robots" content="index, follow"></meta>
        <meta name="description" content="We know trees. Our certified arborists are experienced in all types of tree care and removal, and we’re committed to the highest quality service. Let us help keep your property healthy and beautiful."></meta>
        <meta name="twitter:creator" content="https://twitter.com/TreeMendersInc"></meta>
        <meta name="twitter:title" content="Total Service Landscape Architecture Company - Landtree Service"></meta>
        <link rel="canonical" href="https://www.landtreeservice.ca/"/>
      </Head>
      <Navbar/>
      <Header/>
      <main className={styles.main}>
       
      </main>

      <footer className={styles.footer}>
        <Footer/>
      </footer>
    </div>
  )
}
