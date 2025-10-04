import TrueFocus from "@/app/components/reactbits/TrueFocus/TrueFocus";
import Shuffle from "@/app/components/reactbits/Shuffle/Shuffle";
import AboutSection from "./components/AboutSection";
import LogoLoop from "./components/reactbits/LogoLoop/LogoLoop";
import {
  SiPython,
  SiC,
  SiPandas,
  SiNumpy,
  SiApachespark,
  SiPostgresql,
  SiApacheairflow,
  SiSnowflake,
  SiHuawei,
  SiDocker,
  SiGithub,
  SiBitbucket,
  SiScrapy,
  SiIcloud,
  SiAmazonwebservices
} from "react-icons/si";

import MagicBento from "./components/reactbits/MagicBento/MagicBento";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsShowcase from "./components/reactbits/SpotlightCard/ProjectsShowcase";
import ContactSection from "./components/ContactSection";

const techLogos = [
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiC />, title: "C", href: "https://en.cppreference.com/w/c/language" },
  { node: <SiAmazonwebservices />, title: "AWS", href: "https://aws.amazon.com/free/?trk=2e478213-2d88-4544-b924-bd0a83b68b33&sc_channel=ps&ef_id=CjwKCAjw6P3GBhBVEiwAJPjmLoxLd_7DIkW-hrkrEyeuE2YVCiQtvWkJ1Zq3D3ChJ9bGIiZ9gyFHYRoCdMwQAvD_BwE:G:s&s_kwcid=AL!4422!3!645208863529!e!!g!!aws!19572078132!145087520813&gad_campaignid=19572078132&gbraid=0AAAAADjHtp8dgz1s7bGfkyWiU2u0UuWQE&gclid=CjwKCAjw6P3GBhBVEiwAJPjmLoxLd_7DIkW-hrkrEyeuE2YVCiQtvWkJ1Zq3D3ChJ9bGIiZ9gyFHYRoCdMwQAvD_BwE" },
  { node: <SiPandas />, title: "Pandas", href: "https://pandas.pydata.org" },
  { node: <SiIcloud />, title: "Cloud", href: "https://azure.microsoft.com/en-gb/" },
  { node: <SiNumpy />, title: "NumPy", href: "https://numpy.org" },
  { node: <SiApachespark />, title: "Apache Spark", href: "https://spark.apache.org" },
  { node: <SiPostgresql />, title: "SQL / PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiApacheairflow />, title: "ETL / Airflow", href: "https://airflow.apache.org" },
  { node: <SiSnowflake />, title: "Data Warehousing", href: "https://www.snowflake.com" },
  { node: <SiHuawei />, title: "Huawei Cloud", href: "https://www.huaweicloud.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiBitbucket />, title: "Bitbucket", href: "https://bitbucket.org" },
  { node: <SiScrapy />, title: "Web Scraping", href: "https://scrapy.org" },
];
const certificates =
[
  {
    color: '#060010',
    title: 'HCCDA',
    description: 'Computing & Network & Storage & Security',
    // Learn core Huawei Cloud services with hands-on labs.
    label: 'Tech Essentials',
    link: 'https://drive.google.com/file/d/1IkwfFQDwxy_JBM1PVWE7OuB89p7Q0zo3/view?usp=sharing'
  },
  {
    color: '#060010',
    title: 'EFE Egypt',
    description: `Python & Flask & APIs & MVC`,
    label: 'Web Development',
    link: 'https://drive.google.com/file/d/1ZpdRZDR-E-Z4omyP_9zRN5XZdzBXEK2G/view?usp=sharing'
  },
  { 
    color: '#060010',
    title: 'HCCDP',
    description: 'Cloud migration strategies and best practices.',
    label: 'Cloud Migration',
    link: 'https://drive.google.com/file/d/1t2HqrkwTbom_x1fsYG1Eb6htOarIqEMr/view?usp=sharing'
  },
  {
    color: '#060010',
    title: 'HCCDP',
    description: 'AI fundamentals & build intelligent applications.',
    label: 'AI',
    link: 'https://drive.google.com/file/d/11gyM_-kW8Z9AdEVrFXSlpJ0AIcCC7FPK/view?usp=sharing'
  },
  {
    color: '#060010',
    title: 'HCCDP',
    description: 'Database design & migration &  performance tuning.',
    label: 'GaussDB',
    link: 'https://drive.google.com/file/d/1sI_jOHvtS-uZRKk_iYpWsvjEYiK7Mjow/view?usp=sharing'
  },
  {
    color: '#060010',
    title: 'HCCDP',
    description: 'Master cloud architecture design and best practices.',
    label: 'Solution Architecture',
    link: 'https://drive.google.com/file/d/1GTYyc1A5mKPmw3nD_4C9sbhkpBzAoHDz/view?usp=sharing'
  },
  { color: '#060010',
    title: 'Microsoft Office 365', 
    description: 'Excel & Word & Power Point & Access', 
    label: 'ICDL',
    link: 'https://drive.google.com/file/d/1WW3TbAn8vHzcrueyBZAoUpacrsNAFNQD/view?usp=sharing'
   },
  { color: '#060010', 
    title: 'Alex University', 
    description: 'Bridge business objectives with technology solutions.', 
    label: 'B.Sc. in MIS' ,
    link: 'https://drive.google.com/file/d/1FScwNz5O-BnjTISDI7-XwD30BGTUVTk_/view?usp=sharing'
  },
];

export default function Home() {
  return (
    <main className="px-6 sm:px-10">

      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          <Shuffle
            text="Abdelrahman Hany"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
          />
        </h1>
        <span className="text-sm text-gray-500">
          <TrueFocus
            sentence="Cloud & Data"
            manualMode={false}
            blurAmount={5}
            borderColor="blue"
            animationDuration={0.1}
            pauseBetweenAnimations={1}
          />
          Engineer</span>

      </section>

      <section id="about" className="min-h-[108vh] scroll-mt-28 pt-10 pb-16"> <AboutSection /> </section>


      <section id="skills" className="min-h-[75vh] items-center px-6">
        <h2 className="mb-8 text-center text-3xl md:text-4xl font-semibold text-white">Skills </h2>
        <div className="relative h-[200px] my-10 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={159}
            gap={56}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="transparent"
            ariaLabel="Technology partners"
            className="py-0"
          />
        </div>
      </section>


      <section id="certifications" className="min-h-[30vh] flex flex-col items-center justify-center text-center px-6">
        <h2 className="mb-8 text-center text-3xl md:text-4xl font-semibold text-white">Certifications </h2>
        <MagicBento
          items={certificates}
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </section>

      <section id="experience" className="min-h-[80vh] px-2 pt-80 scroll-mt-38 md:scroll-mt-48" >
        <h2 className="mb-10 text-center text-3xl md:text-4xl font-semibold text-white">
          Experience
        </h2>
        <div className="mx-auto max-w-4xl">
          <ExperienceTimeline />
        </div>
      </section>

      <section id="projects" className=" px-6 mt-20 sm:mt-28 md:mt-32 scroll-mt-[160px] sm:scroll-mt-[180px] md:scroll-mt-[220px]  /* offset for sticky navbar */">
        <div className="mx-auto max-w-6xl min-h-[80vh] flex flex-col items-center justify-center text-center gap-10 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Projects
          </h2>
          <ProjectsShowcase />
        </div>
      </section>

      <section
        id="contact"
        className="
        sm:mt-60 md:mt-32 
        px-6 mt-24 scroll-mt-[140px]"
      >
        <div className="mx-auto max-w-6xl min-h-[70vh] flex flex-col items-center justify-center text-center gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Contact</h2>
          <ContactSection />
        </div>
      </section>

    </main>
  );
}
