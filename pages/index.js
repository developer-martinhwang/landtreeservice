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
        <div id="service">
          <StoryCard
           title="Tree Service"
           subtitle="Our experienced team will take care of all tree service sucah Arborist Service, Tree Removal, Tree Planting, Stump Removal, Tree Trimming, Tree Pruning"
           image="/treeservice.jpg"
           flexDirection="row"
          />
          <StoryCard
            title="Root Stumping"
            subtitle="Do you have a unwanted tree stump on your property? We have the perfect solution for you"
            image="/rootStump.jpeg"
            flexDirection="row-reverse"
          />
          <StoryCard
            title="Backyard Cleaning"
            subtitle="Just relax and enjoy beautiful backyard! We will take care of your perfcet backyard."
            image="/backyardClean.jpg"
            flexDirection="row"
          />
          <StoryCard
            title="Planting Lawn"
            subtitle="Improve the overall health of your lawn with our wide selection of lawn services."
            image="/plantinglawn.jpg"
            flexDirection="row-reverse"
          />
        </div>
        <Quote/>
      </main>
      <footer className={styles.footer}>
        <Footer/>
      </footer>
    </div>
  )
}
