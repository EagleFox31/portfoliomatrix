import { Helmet } from "react-helmet";
import MatrixRain from "@/components/MatrixRain";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ParallaxSection from "@/components/ParallaxSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Jennifer Lawrynn Aka'a | Full-Stack Developer</title>
        <meta name="description" content="Jennifer Lawrynn Aka'a - Fullstack Developer and AWS Certified Solution Architect specializing in scalable web applications and digital transformation." />
        <meta name="keywords" content="developer, fullstack, AWS, Python, JavaScript, PHP, React, Node.js" />
        <meta property="og:title" content="Jennifer Lawrynn Aka'a | Full-Stack Developer" />
        <meta property="og:description" content="Fullstack Developer and AWS Certified Solution Architect specializing in scalable web applications and digital transformation." />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#00FF41" />
      </Helmet>
      
      <MatrixRain />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ParallaxSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
