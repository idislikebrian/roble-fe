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
} from "@phosphor-icons/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Add these icon style constants
const ICON_STYLES = {
  size: 40,
  color: "#111111",
  weight: "fill",
};

// Add services data
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
        "Commercial Flat Roofing, TPO Roofing Systems, EPDM Roofing, Modified Bitumen, Commercial Roof Maintenance, Commercial Roof Repair, Industrial Roofing" 
      },
    { 
      icon: Hammer, 
      title: "Home Improvements",
      details:
        "Kitchen Remodeling, Bathroom Renovation, Basement Finishing, Window Installation, Door Installation, Deck Construction, Porch Building, Garage Updates, Flooring Installation, Interior Painting, Exterior Painting"  
      },
    { 
      icon: ListChecks, 
      title: "Property Management",
      details:
        "Seasonal Maintenance, Gutter Cleaning, Snow Removal, Landscape Maintenance, Property Inspections, Storm Damage Assessment, Emergency Repairs, Preventive Maintenance"  
      },
    { 
      icon: HouseSimple, 
      title: "Siding",
      details:
        "Vinyl Siding Installation, Fiber Cement Siding, Wood Siding, Metal Siding, Siding Repair, Siding Replacement, Trim & Fascia Work" 
      },
  ],
};

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>
        <div className={styles.logo}>
          <Image src="logo-black.svg" width={150} height={150} />
        </div>
      </nav>
      <div className={styles.hero}>
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
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div key={index}>
                    <service.icon {...ICON_STYLES} />
                    <p>{service.title}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                {service.details}
                </AccordionContent>
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
        <p>
          Contact us today to get started on your roofing and siding project!
        </p>
        <h4>Let&apos;s create progress together.</h4>
        <Text />
      </div>
      <footer>
        <p>Call: 201 394 7939 // se habla español</p>
      </footer>
      <div className={styles.top}>
        <Top />
      </div>
    </main>
  );
}
