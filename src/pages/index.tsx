import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Portfolio } from "@/components/Portfolio/Portfolio";
import { arr, responsibilities, stats } from "@/mock";
import { Stat } from "@/components/Stat/Stat";
import { Responsibilities } from "@/components/Responsibility/Resposibilities";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { LinkedinIcon } from "@/components/Icons/LinkedinIcon";
import { InstagramIcon } from "@/components/Icons/InstagramIcon";
import { QuatesCarousel } from "@/components/QuatesCarousel/QuatesCarousel";
import AppleLogo from "../../public/apple.svg";
import MicrosoftLogo from "../../public/microsoft.svg";
import NasaLogo from "../../public/nasa.svg";
import SpacexLogo from "../../public/SpaceX.svg";
import GoogleLogo from "../../public/google.svg";
import UFCLogo from "../../public/UFC.svg";

const ShopifyLogo =
  "https://assets-global.website-files.com/64c170b0cefbfac908efdba6/64c3ec48ab7eee6a40039fba_Color_Black_2%201%20(traced).svg";

const imageUrl =
  "https://media.licdn.com/dms/image/D4D0BAQGag15hMaklQw/company-logo_200_200/0/1692796205223/malanka_ou_logo?e=1710374400&v=beta&t=vhN5xEVRDMNqdP2jVPs1i3WCroIdnoVuHLKjaZoOFzk";

export default function Home() {
  return (
    <>
      <section className={styles.face}>
        <div className={styles.header}>
          <Image src={imageUrl} alt="logo" height={100} width={100} />
        </div>
        <div className={styles.hero}>
          <h1>Better Commerce. </h1>
          <h1>Better World.</h1>
          <p>
            A full-service commerce agency and consultancy empowering retailers
            to innovate, disrupt and <br /> make a difference for their
            customers.
          </p>
        </div>
      </section>
      <section className={`${styles.work} ${styles.dark}`}>
        <h3 className={styles.header3}>Portfolio</h3>
        <div className={styles.portfolios_container}>
          {arr.map(({ imageUrl, name }, i) => {
            return <Portfolio key={i} imageUrl={imageUrl} name={name} />;
          })}
        </div>
      </section>
      <section className={`${styles.description} ${styles.dark}`}>
        <h3 className={styles.header3}>A Trusted Industry Leader</h3>
        <p>Building the world’s top-performing stores</p>
        <div className={styles.statsContainer}>
          {stats.map(({ amount, name }, i) => {
            return <Stat amount={amount} name={name} key={i} />;
          })}
        </div>
      </section>
      <section className={`${styles.skils} ${styles.dark}`}>
        <Responsibilities responsibilitiesList={responsibilities} />
      </section>
      <section className={`${styles.dark} ${styles.techStack}`}>
        <h3 className={styles.header3}>Mastering Tech Integration</h3>
        <p>Bringing together the top tools for seamless site performance.</p>
        <div className={styles.technologies}>
          <div>
            <Image src={ShopifyLogo} alt="" fill />
          </div>
          <div>
            <Image src={ShopifyLogo} alt="" fill />
          </div>
          <div>
            <Image src={ShopifyLogo} alt="" fill />
          </div>
          <div>
            <Image src={ShopifyLogo} alt="" fill />
          </div>
          <div>
            <Image src={ShopifyLogo} alt="" fill />
          </div>
          <div>
            <Image src={ShopifyLogo} alt="" fill />
          </div>
        </div>
      </section>
      <section className={styles.ourClients}>
        <QuatesCarousel />
        <div className={styles.clients}>
          <div>
            <Image src={AppleLogo} alt="" fill />
          </div>
          <div>
            <Image src={MicrosoftLogo} alt="" fill />
          </div>
          <div>
            <Image src={NasaLogo} alt="" fill />
          </div>
          <div>
            <Image src={SpacexLogo} alt="" fill />
          </div>
          <div>
            <Image src={GoogleLogo} alt="" fill />
          </div>
          <div>
            <Image src={UFCLogo} alt="" fill />
          </div>
        </div>
      </section>
      <section className={`${styles.contactUs} ${styles.dark}`}>
        <h3 className={styles.header3}>
          Ready To Accelerate Your Business? Let’s Talk
        </h3>
        <ContactForm />
      </section>
      <footer className={`${styles.dark} ${styles.footer}`}>
        <div className={styles.aboutUs}>
          <div className={styles.address}>
            1435 St Alexander St Suite 220
            <br />
            Montreal, Quebec H3A 2G4
          </div>
          <div className={styles.links}>
            <a href="#" className={styles.link}>
              <LinkedinIcon />
              <p>Linkedin</p>
            </a>
            <a href="#" className={styles.link}>
              <InstagramIcon />
              <p>Instagram</p>
            </a>
          </div>
        </div>
        <div className={styles.privacy}>
          <p>
            © 2023 Diff Agency, A Wunderman Thompson Company. All rights
            reserved.
          </p>
          <div>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
}
