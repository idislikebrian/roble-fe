import React from "react";
import styles from "../page.module.css";
import Image from "next/image";

import Top from "@/components/Top";

const EstimatePage = () => {
  return (
    <div className={styles.main}>
      <nav className={styles.navContainer}>
        <div></div>
        <div className={styles.logo}>
          <Image
            src="logo-black.svg"
            width={150}
            height={150}
            priority={"blur"}
            alt="Roble logo. The word roble in a box with a roof draw over the box."
          />
        </div>
      </nav>
      <div className={styles.formInfo}>
        <h2>How can Roble help you today?</h2>
        <p>
          If wish to get an initial inspection/estimate or want to learn about
          services and products we offer, please call us at{" "}
          <strong>201-394-7939</strong>, or use the form below.
        </p>
      </div>
      <div>
        <form className={styles.formContainer}>
          <section className={styles.formSection}>
            <h2>Project Type</h2>
            <div className={`${styles.formSelection} ${styles.formGridTwo}`}>
              <input
                type="radio"
                id="residential"
                name="projectType"
                value="residential"
                required
              />
              <label htmlFor="residential">Residential</label>
              <input
                type="radio"
                id="commercial"
                name="projectType"
                value="commercial"
                required
              />
              <label htmlFor="commercial">Commercial</label>
            </div>
          </section>
          <section className={styles.formSection}>
            <h2>Contact Information</h2>
            <div className={styles.formInputs}>
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
              <label htmlFor="company"></label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company (if commercial)"
              />
              <br />
              <label htmlFor="streetAddress">
                <p>Address</p>
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                placeholder="Address"
                required
              />
              <label htmlFor="city"></label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                required
              />
              <label htmlFor="state"></label>
              <select id="state" name="state" required>
                <option value="NJ">NJ</option>
                <option value="PA">PA</option>
                <option value="NY">NY</option>
              </select>
              <label htmlFor="zipCode"></label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                placeholder="Zip Code"
                required
              />
              <br />
              <label htmlFor="phone">
                <p>Contact</p>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                required
              />
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
          </section>
          <section className={styles.formSection}>
            <h2>Service Details</h2>
            <div>
              <p>Check all that apply to your project:</p>
              <br />
              <div className={styles.formInputs}>
                <div
                  className={`${styles.formSelection} ${styles.formGridFour}`}
                >
                  <input
                    type="checkbox"
                    id="initialInspection"
                    name="services"
                    value="Initial Inspection / Information Gathering"
                  />
                  <label htmlFor="initialInspection">
                    Initial Inspection / Information Gathering
                  </label>
                  <input
                    type="checkbox"
                    id="roofingNewConstruction"
                    name="services"
                    value="Roofing Project - New Construction"
                  />
                  <label htmlFor="roofingNewConstruction">
                    Roofing Project - New Construction
                  </label>
                  <input
                    type="checkbox"
                    id="reRoofingProject"
                    name="services"
                    value="Re-roofing Project"
                  />
                  <label htmlFor="reRoofingProject">Re-roofing Project</label>
                  <input
                    type="checkbox"
                    id="roofingRepairRestoration"
                    name="services"
                    value="Roofing Repair/Restoration"
                  />
                  <label htmlFor="roofingRepairRestoration">
                    Roofing Repair/Restoration
                  </label>
                  <input
                    type="checkbox"
                    id="preventativeMaintenance"
                    name="services"
                    value="Preventative Roofing Maintenance"
                  />
                  <label htmlFor="preventativeMaintenance">
                    Preventative Roofing Maintenance
                  </label>
                  <input
                    type="checkbox"
                    id="vinylSiding"
                    name="services"
                    value="Vinyl Siding"
                  />
                  <label htmlFor="vinylSiding">Vinyl Siding</label>
                  <input
                    type="checkbox"
                    id="replacementWindows"
                    name="services"
                    value="Replacement Window(s)"
                  />
                  <label htmlFor="replacementWindows">
                    Replacement Window(s)
                  </label>
                  <input
                    type="checkbox"
                    id="skylightsRoofWindows"
                    name="services"
                    value="Skylight(s) / Roof Windows"
                  />
                  <label htmlFor="skylightsRoofWindows">
                    Skylight(s) / Roof Windows
                  </label>
                  <input
                    type="checkbox"
                    id="doors"
                    name="services"
                    value="Door(s)"
                  />
                  <label htmlFor="doors">Door(s)</label>
                  <input
                    type="checkbox"
                    id="trim"
                    name="services"
                    value="Trim (describe in box below)"
                  />
                  <label htmlFor="trim">Trim (describe in box below)</label>
                  <input
                    type="checkbox"
                    id="guttersDownspouts"
                    name="services"
                    value="Gutters / Downspouts"
                  />
                  <label htmlFor="guttersDownspouts">
                    Gutters / Downspouts
                  </label>
                  <input
                    type="checkbox"
                    id="ventilation"
                    name="services"
                    value="Ventilation"
                  />
                  <label htmlFor="ventilation">Ventilation</label>
                </div>
              </div>
              <div className={styles.formInputs}>
                <label htmlFor="projectDescription"></label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  placeholder="Brief Description of the Project"
                ></textarea>
                <label htmlFor="budgetRange">Budget Range</label>
                <select
                  id="budgetRange"
                  placeholder="Budget Range"
                  name="budgetRange"
                >
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000-$5,000">$1,000-$5,000</option>
                  <option value="$5,000-$10,000">$5,000-$10,000</option>
                  <option value="$10,000 +">$10,000 +</option>
                </select>
                <label htmlFor="communicationMethod">
                  Preferred Method of Communication
                </label>
                <select id="communicationMethod" name="communicationMethod">
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                  <option value="Text">Text</option>
                </select>
                <label htmlFor="appointmentDate">
                  Preferred Appointment Date and Time
                </label>
                <input
                  type="datetime-local"
                  id="appointmentDate"
                  name="appointmentDate"
                />
                <label htmlFor="timeframe">
                  Are You Looking to Complete the Project Within a Specific
                  Timeframe?
                </label>
                <input type="text" id="timeframe" name="timeframe" />
              </div>
            </div>
          </section>
          <section className={styles.formSection}>
            <h2>Reach out</h2>
            <div className={styles.formInputs}>
              <label htmlFor="hearAboutUs">How Did You Hear About Us?</label>
              <select id="hearAboutUs" name="hearAboutUs">
                <option value="Google">Google</option>
                <option value="Yelp">Yelp</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
                <option value="Other">Other</option>
              </select>
              <button type="submit">Send</button>
              <div className={`${styles.formSelection} ${styles.formGridTwo}`}>
                <input
                  type="checkbox"
                  id="termsAndConditions"
                  name="termsAndConditions"
                  required
                />
                <label htmlFor="termsAndConditions">
                  “I agree to the terms and conditions of this appointment
                  booking.”
                </label>
              </div>
            </div>
          </section>
        </form>
      </div>
      <footer className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <p>Request an Estimate</p>
        </div>
        <div className={styles.footerColumn}>
          <p>📞 201 394 7939</p>
          <p>📧 robleroofnsiding@gmail.com</p>
        </div>
        <div className={styles.footerColumn}>
          <p>Se habla español</p>
        </div>
      </footer>
      <div className={styles.top}>
        <Top />
      </div>
    </div>
  );
};

export default EstimatePage;
