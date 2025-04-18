import { useEffect, useState, Suspense, lazy } from "react";
import i18n from "@utils/i18n";
import MainWrapper from "@components/Containers/SectionContainer";
import Header from "@components/_sections/Header";
import AboutMe from "@components/_sections/AboutMe.section";
import {useTheme} from "@hooks/useTheme.ts";

const LocationSection = lazy(() => import("@components/_sections/Location.section"));
const SocialSection = lazy(() => import("@components/_sections/Social.section"));
const MarqueeSection = lazy(() => import("@components/_sections/Marquee.section"));
const PhraseSection = lazy(() => import("@components/_sections/Phrase.section"));
const ProjectSection = lazy(() => import("@components/_sections/Projects.section"));
const ExperienceSection = lazy(() => import("@components/_sections/Experience.section"));
const PostsSection = lazy(() => import("@components/_sections/Posts.section"));
const Contact = lazy(() => import("@components/_sections/Contact.section"));
const Footer = lazy(() => import("@components/_sections/Footer"));

export default function Home() {
  const { darkMode } = useTheme();
  const [language, setLanguage] = useState<string>(() => {
    return localStorage.getItem("language") ?? "en";
  });
  
  const handleLanguageToggle = () => {
    setLanguage((prev) => {
      const newLanguage = prev === "en" ? "pt-br" : "en";
      localStorage.setItem("language", newLanguage);
      return newLanguage;
    });
  };
  
  useEffect(() => {
    i18n.changeLanguage(language).then();
  }, [language]);
  
  return (
    <>
      <Header language={language} handleLanguageToggle={handleLanguageToggle} />
      <MainWrapper>
        <AboutMe />
        
        <Suspense fallback={null}>
          <LocationSection />
        </Suspense>
        
        <Suspense fallback={null}>
          <SocialSection darkMode={darkMode} />
        </Suspense>
        
        <Suspense fallback={null}>
          <MarqueeSection darkMode={darkMode} />
        </Suspense>
        
        <Suspense fallback={null}>
          <PhraseSection />
        </Suspense>
        
        <ProjectSection />
        <ExperienceSection />
        
        <Suspense fallback={null}>
          <PostsSection />
        </Suspense>
        
          <Contact />
          <Footer />
      </MainWrapper>
    </>
  );
}
