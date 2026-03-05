import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Top from "@/components/Top";
import Button from "@/components/ui/button";
import { SERVICES, getServiceBySlug } from "@/config/services";
import styles from "./page.module.css";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} Services`,
    description: service.description,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const phoneRaw = "2013947939";

  if (!service) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <Navigation />
      <section className={styles.heroSection}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Service Category</p>
          <h1>{service.title}</h1>
          <p className={styles.description}>{service.description}</p>
          <div className={styles.actions}>
            <Button theme="PRIMARY" href="/estimate" className={styles.actionButton}>
              Get a Free Estimate
            </Button>
            <Button
              theme="SECONDARY"
              href={`tel:${phoneRaw}`}
              className={styles.actionButton}
            >
              Call Now
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.detailsSection}>
        <div className={styles.sectionInner}>
          {service.overview ? (
            <>
              <h2>Overview</h2>
              <p>{service.overview}</p>
            </>
          ) : null}

          <h2>What We Handle</h2>
          <ul className={styles.list}>
            {service.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {service.idealFor?.length ? (
            <>
              <h2>Ideal For</h2>
              <ul className={styles.list}>
                {service.idealFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}

          {service.process?.length ? (
            <>
              <h2>How We Work</h2>
              <div className={styles.grid}>
                {service.process.map((step) => (
                  <article key={step.title} className={styles.card}>
                    <h3>{step.title}</h3>
                    <p>{step.details}</p>
                  </article>
                ))}
              </div>
            </>
          ) : null}

          {service.faqs?.length ? (
            <>
              <h2>FAQs</h2>
              <div className={styles.faqWrap}>
                {service.faqs.map((faq) => (
                  <article key={faq.question} className={styles.faqItem}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </article>
                ))}
              </div>
            </>
          ) : null}

          {service.areaNotes?.length ? (
            <>
              <h2>North NJ Notes</h2>
              <ul className={styles.list}>
                {service.areaNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </>
          ) : null}

          <p>
            Need this type of work done? Reach out today and we can provide a
            fast estimate and timeline for your project.
          </p>
        </div>
      </section>

      <Footer />
      <div className={styles.top}>
        <Top />
      </div>
    </main>
  );
}
