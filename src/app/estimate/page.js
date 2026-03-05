"use client";
import React, { useState, useRef, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import styles from "../page.module.css";
import Image from "next/image";
import Top from "@/components/Top";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/ui/button";

import { Confetti } from "@/components/Confetti";

const EstimatePage = () => {
  const [submissionStatus, setSubmissionStatus] = useState("");
  const autocompleteRef = useRef(null);

  // Initialize Google Autocomplete
  useEffect(() => {
    if (typeof window !== "undefined" && window.google) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        autocompleteRef.current,
        {
          componentRestrictions: { country: ["us"] },
          fields: ["address_components"],
        }
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        const addressComponents = place.address_components;

        const formikAddress = {
          addressLine1: "",
          city: "",
          state: "",
          zipCode: "",
        };

        addressComponents.forEach((component) => {
          const types = component.types;

          if (types.includes("street_number")) {
            formikAddress.addressLine1 += component.long_name + " ";
          }
          if (types.includes("route")) {
            formikAddress.addressLine1 += component.long_name;
          }
          if (types.includes("locality")) {
            formikAddress.city = component.long_name;
          }
          if (types.includes("administrative_area_level_1")) {
            formikAddress.state = component.short_name;
          }
          if (types.includes("postal_code")) {
            formikAddress.zipCode = component.long_name;
          }
        });

        formik.setValues((prevValues) => ({
          ...prevValues,
          ...formikAddress,
        }));
      });
    }
  }, []);

  // Yup schema for validation
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone is required"),
    addressLine1: Yup.string().required("Street address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.string()
      .matches(/^[0-9]{5}$/, "Zip code must be 5 digits")
      .required("Zip code is required"),
    projectType: Yup.string().required("Project type is required"),
    services: Yup.array()
      .min(1, "At least one service must be selected")
      .required("Services are required"),
    termsAndConditions: Yup.boolean().oneOf(
      [true],
      "You must accept terms and conditions"
    ),
    appointmentDate: Yup.string(),
    projectDescription: Yup.string().required("Description is required"),
    budgetRange: Yup.string().required("Budget range is required"),
    timeframe: Yup.string().required("Timeframe is required"),
    hearAboutUs: Yup.string().required("Please specify how you heard about us"),
  });

  const confettiRef = useRef(null);

  // Formik for form handling
  const formik = useFormik({
    initialValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      addressLine1: "",
      city: "",
      state: "",
      zipCode: "",
      projectType: "",
      services: [],
      projectDescription: "",
      budgetRange: "",
      communicationMethod: "Email",
      appointmentDate: "",
      timeframe: "",
      hearAboutUs: "",
      termsAndConditions: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Form submitted with values:", values);
      try {
        // Convert appointmentDate to ISO 8601 format if provided
        const formattedAppointmentDate = values.appointmentDate
          ? new Date(values.appointmentDate).toISOString()
          : null; // Set to null if no date is provided

        const response = await fetch("/api/saveFriend", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...values,
            appointmentDate: formattedAppointmentDate,
          }), // Include formatted date
        });

        const result = await response.json();
        if (result.success) {
          setSubmissionStatus("Form submitted successfully!");
          confettiRef.current?.fire(); // Trigger confetti
          formik.resetForm(); // Reset form on successful submission
        } else {
          throw new Error(result.error || "Submission failed");
        }
      } catch (error) {
        console.error("Submission error:", error);
        setSubmissionStatus("An error occurred. Please try again.");
      }
    },
  });

  // Function to handle checkbox changes
  const handleServiceChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // Add the service if checked
      formik.setFieldValue("services", [...formik.values.services, value]);
    } else {
      // Remove the service if unchecked
      formik.setFieldValue(
        "services",
        formik.values.services.filter((service) => service !== value)
      );
    }
  };

  return (
    <div className={styles.main}>
      <Navigation />
      <div className={styles.maxWidth}>
      <Confetti ref={confettiRef} />
        <div className={styles.formInfo}>
          <h2>How can Roble help you today?</h2>
          <p>
            If wish to get an initial inspection/estimate or want to learn about
            services and products we offer, please call us at{" "}
            <strong>201-394-7939</strong>, or use the form below.
          </p>
        </div>
        <div>
          <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
            {/* Contact Information Section */}
            <section className={styles.formSection}>
              <h2>Contact Information</h2>
              <div className={styles.formInputs}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className={styles.error}>{formik.errors.name}</div>
                )}
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className={styles.error}>{formik.errors.email}</div>
                )}
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className={styles.error}>{formik.errors.phone}</div>
                )}
                <br />
                <input
                  ref={autocompleteRef}
                  type="text"
                  id="addressLine1"
                  name="addressLine1"
                  placeholder="Start typing your address..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.addressLine1}
                />
                {formik.touched.addressLine1 && formik.errors.addressLine1 && (
                  <div className={styles.error}>
                    {formik.errors.addressLine1}
                  </div>
                )}
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                />
                {formik.touched.city && formik.errors.city && (
                  <div className={styles.error}>{formik.errors.city}</div>
                )}
                <select
                  id="state"
                  name="state"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.state}
                >
                  <option value="NJ">NJ</option>
                  <option value="PA">PA</option>
                  <option value="NY">NY</option>
                </select>
                {formik.touched.state && formik.errors.state && (
                  <div className={styles.error}>{formik.errors.state}</div>
                )}
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  placeholder="Zip Code"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.zipCode}
                />
                {formik.touched.zipCode && formik.errors.zipCode && (
                  <div className={styles.error}>{formik.errors.zipCode}</div>
                )}
              </div>
            </section>
            <section className={styles.formSection}>
              <fieldset>
                <legend>
                  <h3>Service Details</h3>
                </legend>
                <div className={styles.formSection}>
                  <p>Project Type:</p>
                  <div className={styles.projectType}>
                    <div>
                      <input
                        type="radio"
                        className={`${styles.chip} ${styles.bounce}`}
                        id="residential"
                        name="projectType"
                        value="residential"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.projectType === "residential"}
                      />
                      <label htmlFor="residential">Residential</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        className={`${styles.chip} ${styles.bounce}`}
                        id="commercial"
                        name="projectType"
                        value="commercial"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.projectType === "commercial"}
                      />
                      <label htmlFor="commercial">Commercial</label>
                    </div>
                    {formik.touched.projectType &&
                      formik.errors.projectType && (
                        <div className={styles.error}>
                          {formik.errors.projectType}
                        </div>
                      )}
                  </div>
                </div>
                <div className={styles.formSection}>
                  <p>Check all that apply to your project:</p>
                  <div>
                    <input
                      type="checkbox"
                      className={`${styles.chip} ${styles.bounce}`}
                      role="switch"
                      value="Initial Inspection / Information Gathering"
                      onChange={handleServiceChange}
                      id="initialInspection"
                      name="services"
                      aria-label="Initial Inspection / Information Gathering"
                      defaultChecked
                    />
                    <label htmlFor="initialInspection"></label>
                    <input
                      type="checkbox"
                      className={`${styles.chip} ${styles.bounce}`}
                      role="switch"
                      aria-label="Roofing Project - New Construction"
                      id="roofingNewConstruction"
                      name="services"
                      value="Roofing Project - New Construction"
                      onChange={handleServiceChange}
                    />
                    <label htmlFor="roofingNewConstruction"></label>
                    <input
                      type="checkbox"
                      className={`${styles.chip} ${styles.bounce}`}
                      role="switch"
                      aria-label="Re-roofing Project"
                      id="reRoofingProject"
                      name="services"
                      value="Re-roofing Project"
                      onChange={handleServiceChange}
                    />
                    <label htmlFor="reRoofingProject"></label>
                    <input
                      type="checkbox"
                      className={`${styles.chip} ${styles.bounce}`}
                      role="switch"
                      aria-label="Roofing Repair/Restoration"
                      id="roofingRepairRestoration"
                      name="services"
                      value="Roofing Repair/Restoration"
                      onChange={handleServiceChange}
                    />
                    <label htmlFor="roofingRepairRestoration"></label>
                    <input
                      type="checkbox"
                      className={`${styles.chip} ${styles.bounce}`}
                      role="switch"
                      aria-label="Roofing Repair/Restoration"
                      name="services"
                      id="preventativeMaintenance"
                      value="Preventative Roofing Maintenance"
                      onChange={handleServiceChange}
                    />
                    <label htmlFor="preventativeMaintenance"></label>
                    <input
                      type="checkbox"
                      className={`${styles.chip} ${styles.bounce}`}
                      role="switch"
                      aria-label="Vinyl Siding"
                      id="vinylSiding"
                      name="services"
                      value="Vinyl Siding"
                      onChange={handleServiceChange}
                    />
                    <label htmlFor="vinylSiding"></label>
                    <input
                      type="checkbox"
                      className={`${styles.chip} ${styles.bounce}`}
                      role="switch"
                      aria-label="Replacement Window(s)"
                      id="replacementWindows"
                      name="services"
                      value="Replacement Window(s)"
                      onChange={handleServiceChange}
                    />
                    <label htmlFor="replacementWindows"></label>
                    <input
                      type="checkbox"
                      className={`${styles.chip} ${styles.bounce}`}
                      role="switch"
                      aria-label="Skylight(s) / Roof Windows"
                      id="skylightsRoofWindows"
                      name="services"
                      value="Skylight(s) / Roof Windows"
                      onChange={handleServiceChange}
                    />
                    <label htmlFor="skylightsRoofWindows"></label>
                    <input
                      type="checkbox"
                      className={`${styles.chip} ${styles.bounce}`}
                      role="switch"
                      aria-label="Door(s)"
                      id="doors"
                      name="services"
                      value="Door(s)"
                      onChange={handleServiceChange}
                    />
                    <label htmlFor="doors"></label>
                    <input
                      type="checkbox"
                      className={`${styles.chip} ${styles.bounce}`}
                      role="switch"
                      aria-label="Trim"
                      id="trim"
                      name="services"
                      value="Trim (describe in box below)"
                      onChange={handleServiceChange}
                    />
                    <label htmlFor="trim"></label>
                    <input
                      type="checkbox"
                      className={`${styles.chip} ${styles.bounce}`}
                      role="switch"
                      aria-label="Gutters / Downspouts"
                      id="guttersDownspouts"
                      name="services"
                      value="Gutters / Downspouts"
                      onChange={handleServiceChange}
                    />
                    <label htmlFor="guttersDownspouts"></label>
                    <input
                      type="checkbox"
                      className={`${styles.chip} ${styles.bounce}`}
                      role="switch"
                      aria-label="Ventilation"
                      id="ventilation"
                      name="services"
                      value="Ventilation"
                      onChange={handleServiceChange}
                    />
                    <label htmlFor="ventilation"></label>
                  </div>
                </div>
                <div className={styles.formSection}>
                  <p>Details:</p>
                  <div className={styles.formInputs}>
                    <label htmlFor="projectDescription"></label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      placeholder="Brief Description of the Project"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.projectDescription}
                    ></textarea>
                    <label htmlFor="budgetRange">Budget Range</label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.budgetRange}
                    >
                      <option value="">Select an option</option>
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000-$5,000">$1,000-$5,000</option>
                      <option value="$5,000-$10,000">$5,000-$10,000</option>
                      <option value="$10,000 +">$10,000 +</option>
                    </select>
                    <label htmlFor="communicationMethod">
                      Preferred Method of Communication
                    </label>
                    <select id="communicationMethod" name="communicationMethod">
                      <option value="">Select an option</option>
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
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.appointmentDate}
                    />
                    <label htmlFor="timeframe">
                      Are You Looking to Complete the Project Within a Specific
                      Timeframe?
                    </label>
                    <select
                      id="timeframe"
                      name="timeframe"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.timeframe}
                    >
                      <option value="">Select an option</option>
                      <option value="immediately">Immediately</option>
                      <option value="less_than_3_months">
                        Less than 3 months
                      </option>
                      <option value="3_to_6_months">3-6 months</option>
                      <option value="6_to_12_months">6-12 months</option>
                    </select>
                    {formik.touched.services && formik.errors.services && (
                      <div className={styles.error}>
                        {formik.errors.services}
                      </div>
                    )}
                  </div>
                </div>
              </fieldset>
            </section>
            <section className={styles.formSection}>
              <h2>Reach out</h2>
              <div className={styles.formInputs}>
                <label htmlFor="hearAboutUs">How Did You Hear About Us?</label>
                <select
                  id="hearAboutUs"
                  name="hearAboutUs"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.hearAboutUs}
                >
                  <option value="">Select an option</option>
                  <option value="Google">Google</option>
                  <option value="Yelp">Yelp</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Referral">Referral</option>
                  <option value="Other">Other</option>
                </select>
                <Button type="submit" theme="PRIMARY">
                  Send
                </Button>
                <div className={`${styles.terms}`}>
                  <input
                    type="checkbox"
                    id="termsAndConditions"
                    name="termsAndConditions"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.termsAndConditions}
                  />
                  <label htmlFor="termsAndConditions">
                    {`"`}I agree to the{" "}
                    <a href="/terms">terms and conditions</a> of this
                    appointment booking.{`"`}
                  </label>
                  {formik.touched.termsAndConditions &&
                    formik.errors.termsAndConditions && (
                      <>
                        <div></div>
                        <div className={styles.error}>
                          {formik.errors.termsAndConditions}
                        </div>
                      </>
                    )}
                </div>
              </div>
            </section>
          </form>
          {submissionStatus && <p>{submissionStatus}</p>}
        </div>
      </div>
      <Footer />
      <div className={styles.top}>
        <Top />
      </div>
    </div>
  );
};

export default EstimatePage;
