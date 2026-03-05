"use client";
import styles from "./page.module.css";
import Top from "@/components/Top";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/ui/button";
import { SERVICES as services } from "@/config/services";

const whyChooseUs = [
  "Local North New Jersey contractor",
  "Fast estimates and reliable scheduling",
  "Quality work and attention to detail",
  "Residential and small commercial projects",
];

const serviceAreas = [
  "Bergen County",
  "Hudson County",
  "Passaic County",
  "Essex County",
  "Morris County",
  "Union County",
];

export default function Home() {
  const phoneDisplay = "(201) 394-7939";
  const phoneRaw = "2013947939";
  const smsBody = encodeURIComponent(
    "Hi Roble, I would like a free estimate for a project."
  );

  return (
    <main className={styles.main}>
      <Navigation />

      <section className={`${styles.section} ${styles.heroSection}`}>
        <div className={styles.sectionInner}>
          <h1>Reliable Home Services in North New Jersey</h1>
          <p className={styles.heroSubheadline}>
            Roofing, painting, concrete work, windows, doors, and exterior
            cleaning. Serving North NJ and surrounding areas.
          </p>
          <div className={styles.heroActions}>
            <Button className={styles.heroActionButton} theme="PRIMARY" href="/estimate">
              Get a Free Estimate
            </Button>
            <Button
              className={styles.heroActionButton}
              theme="SECONDARY"
              href={`tel:${phoneRaw}`}
            >
              Call Now
            </Button>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.servicesSection}`}>
        <div className={styles.sectionInner}>
          <h2>Services</h2>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article key={service.title} className={styles.serviceCard}>
                <h3>{service.title}</h3>
                <ul className={styles.serviceList}>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className={styles.serviceDescription}>{service.description}</p>
                <Button
                  theme="SECONDARY"
                  href={`/services/${service.slug}`}
                  className={styles.serviceButton}
                >
                  View Service
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.whySection}`}>
        <div className={styles.sectionInner}>
          <h2>Why Choose Us</h2>
          <ul className={styles.featureList}>
            {whyChooseUs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.section} ${styles.areaSection}`}>
        <div className={styles.sectionInner}>
          <h2>Service Area</h2>
          <p>
            Based in North New Jersey
            <br />
            We serve:
          </p>
          <ul className={styles.areaList}>
            {serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <p>Available for projects throughout the North NJ area.</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.sectionInner}>
          <h2>Need work done on your home?</h2>
          <p>Get a free estimate today.</p>
          <p>
            <strong>Call:</strong>{" "}
            <a href={`tel:${phoneRaw}`} className={styles.inlineLink}>
              {phoneDisplay}
            </a>
          </p>
          <p>
            <strong>Text:</strong>{" "}
            <a href={`sms:+1${phoneRaw}&body=${smsBody}`} className={styles.inlineLink}>
              {phoneDisplay}
            </a>
          </p>
        </div>
      </section>

      {/* <section className={`${styles.section} ${styles.contactSection}`}>
        <div className={styles.sectionInner}>
          <h2>Contact</h2>
          <div className={styles.contactGrid}>
            <p>
              <strong>Call/Text</strong>{" "}
              <a href={`tel:${phoneRaw}`} className={styles.inlineLink}>
                {phoneDisplay}
              </a>
            </p>
           
            <p>
              
              <a
                href="mailto:robleroofnsiding@gmail.com"
                className={styles.inlineLink}
              >
                robleroofnsiding@gmail.com
              </a>
            </p>
          </div>
          <p className={styles.freeEstimate}>Free estimates available.</p>
        </div>
      </section> */}

      <Footer />
      <div className={styles.top}>
        <Top />
      </div>
    </main>
  );
}
