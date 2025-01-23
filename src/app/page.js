"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Top from "@/components/Top";
import Text from "@/components/Text";
import Slideshow from "@/components/Slideshow";
import Link from "next/link";

import {
  House,
  Buildings,
  Hammer,
  ListChecks,
  Plus,
  HouseSimple,
  Mailbox,
  PhoneCall,
} from "@phosphor-icons/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { BounceCards } from "@/components/BounceCards";
import { FaqAccordion } from "@/components/FAQChatAccordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ICON_STYLES = {
  size: 30,
  color: "#111111",
  weight: "fill",
};

const SERVICES_DATA = {
  primary: [
    {
      icon: House,
      title: "Residential Roofing",
      details:
        "Asphalt Shingle Roofing, Metal Roofing, Slate Roofing, Tile Roofing, Flat Roof Systems, Roof Repairs, Roof Maintenance, Emergency Roof Repairs, Roof Inspections, Gutter Installation & Repair, Skylight Installation",
    },
    {
      icon: Buildings,
      title: "Commercial Roofing",
      details:
        "Commercial Flat Roofing, TPO Roofing Systems, EPDM Roofing, Modified Bitumen, Commercial Roof Maintenance, Commercial Roof Repair, Industrial Roofing",
    },
    {
      icon: Hammer,
      title: "Home Improvements",
      details:
        "Kitchen Remodeling, Bathroom Renovation, Basement Finishing, Window Installation, Door Installation, Deck Construction, Porch Building, Garage Updates, Flooring Installation, Interior Painting, Exterior Painting",
    },
    {
      icon: ListChecks,
      title: "Property Management",
      details:
        "Seasonal Maintenance, Gutter Cleaning, Snow Removal, Landscape Maintenance, Property Inspections, Storm Damage Assessment, Emergency Repairs, Preventive Maintenance",
    },
    {
      icon: HouseSimple,
      title: "Siding",
      details:
        "Vinyl Siding Installation, Fiber Cement Siding, Wood Siding, Metal Siding, Siding Repair, Siding Replacement, Trim & Fascia Work",
    },
  ],
};

const images = [
  "/work/IMG_2358.jpg",
  "/work/IMG_1350.jpg",
  "/work/IMG_2272.jpg",
  "/work/IMG_2273.jpg",
  "/work/IMG_2348.jpg",
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)",
];

const defaultData = [
  {
    answer: "We offer a 10-year warranty on all our roofing services.",
    icon: "🛠️",
    iconPosition: "right",
    id: 1,
    question: "What kind of warranty do you offer for roofing services?",
  },
  {
    answer: "Yes, we are fully insured and bonded for your protection.",
    id: 2,
    question: "Are you insured and bonded?",
  },
  {
    answer:
      "We use high-quality materials from trusted suppliers to ensure durability.",
    id: 3,
    question: "What kind of materials do you use for roofing and siding?",
  },
  {
    answer:
      "We provide free estimates for all our services. Contact us to schedule.",
    icon: "📝",
    iconPosition: "left",
    id: 4,
    question: "Do you offer free estimates?",
  },
  {
    answer:
      "We have a team of experienced professionals with years of experience.",
    id: 5,
    question: "How experienced are your roofing and siding contractors?",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <div className={styles.hero}>
        <BounceCards
          images={images}
          containerWidth={800}
          containerHeight={400}
          animationDelay={0.5}
          animationStagger={0.6}
          easeType="elastic.out(0.6, 0.8)"
          transformStyles={transformStyles}
          className="mx-auto"
        />
        <h2>Do you want a home that stands out from the rest?</h2>
        <p>
          We specialize in roofing and siding services that make your home look
          the best it can.
        </p>
        <Text />
      </div>
      <div className={styles.services}>
        <h3>Our Services</h3>
        <div className={styles.servList}>
          {SERVICES_DATA.primary.map((service, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div>
                    <service.icon {...ICON_STYLES} />
                    <p>{service.title}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>{service.details}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
      <div className={styles.projects}>
        <h3>Our Projects</h3>
        <Slideshow />
      </div>
      <div className={styles.contact}>
        <div
          className={styles.faq}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <FaqAccordion
            data={defaultData}
            timestamp="Updated daily at 12:00 PM"
          />
        </div>
        <p>
          Contact us today to get started on your roofing and siding project!
        </p>
        <h4>Let&apos;s create progress together.</h4>
        <Text />
      </div>
      <Footer />
      <div className={styles.top}>
        <Top />
      </div>
    </main>
  );
}
