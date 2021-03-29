import Head from 'next/head'
import styles from '../styles/Home.module.css'
//components
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Quote from '../components/Quote'
import StoryCard from '../components/StoryCard'
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
      <main className={styles.main}>
        <Navbar/>
        <Header/>
        <StoryCard
          title="Lawn Cutting"
          subtitle="When you get weekly grass cutting services from Landtree Service, you will appreciate your great looking property, and enjoy more time to relax."
          image="/lawnCutting.jpg"
        />
         <StoryCard
          title="Roof Cleaning up"
          subtitle="The entire roof is cleaned with a pressure washer using low pressure and high volume."
          image="/cleanRoof.jpg"
        />
        <Quote/>
      </main>
      <footer className={styles.footer}>
        <Footer/>
      </footer>
    </div>
  )
}
