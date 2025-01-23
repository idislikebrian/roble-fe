"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import Top from "@/components/Top";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <div className={styles.main}>
      <Navigation />
      <div className={styles.maxWidth}>
        <h1>Terms and Conditions for Estimate Requests</h1>
        <p>Effective Date: January 23rd, 2025</p>
        <p>
          Welcome to Roble! By submitting an estimate request through our
          website, you agree to the following terms and conditions. Please read
          them carefully before using our services.
        </p>
        <p>---</p>
        <h4>Purpose of the Estimate</h4>
        <ul>
          <li>
            The estimate provided is a preliminary evaluation based on the
            information you submit through our intake form.
          </li>
          <li>
            The estimate does not constitute a binding agreement or final quote.
            Additional factors, including an on-site inspection, may influence
            the final cost.
          </li>
        </ul>
        <p>---</p>
        <h4>Accuracy of Information</h4>
        <ul>
          <li>
            You are responsible for providing accurate and complete information
            on the estimate form.
          </li>
          <li>
            Inaccurate or incomplete information may lead to delays or
            adjustments in the estimate.
          </li>
        </ul>
        <p>---</p>
        <h4>Appointment Scheduling</h4>
        <ul>
          <li>
            Submission of the intake form does not guarantee an appointment. Our
            team will contact you to confirm availability.
          </li>
          <li>
            Appointments are subject to availability and may be rescheduled at
            our discretion.
          </li>
        </ul>
        <p>---</p>
        <h4>Privacy and Data Use</h4>
        <ul>
          <li>
            Information you provide through the form will be used to process
            your request and create a record in our database.
          </li>
          <li>
            We use Airtable to store and manage customer data securely. For more
            details on how your data is handled, please review our <a href="/privacy">Privacy
            Policy</a>.
          </li>
          <li>
            Your data will not be shared with third parties without your
            consent, except as required by law.
          </li>
        </ul>
        <p>---</p>
        <h4>Scope of Services</h4>
        <ul>
          <li>
            The services listed on the intake form are examples of what we
            offer. Additional services may be discussed during the appointment.
          </li>
          <li>
            Roble reserves the right to decline any request at its discretion.
          </li>
        </ul>
        <p>---</p>
        <h4>No Obligation</h4>
        <ul>
          <li>
            Submitting an estimate request does not obligate you to proceed with
            our services.
          </li>
          <li>
            Similarly, providing an estimate does not obligate Roble to perform
            any work.
          </li>
        </ul>
        <p>---</p>
        <h4>Changes and Updates</h4>
        <ul>
          <li>
            The terms outlined here are subject to change without prior notice.
            Updated terms will be posted on this page.
          </li>
          <li>
            It is your responsibility to review these terms before submitting an
            estimate request.
          </li>
        </ul>
        <p>---</p>
        <h4>Governing Law</h4>
        <ul>
          <li>These terms are governed by the laws of New Jersey.</li>
          <li>
            Any disputes arising from these terms shall be resolved in
            accordance with the applicable laws of New Jersey.
          </li>
        </ul>
        <p>---</p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions or concerns regarding these terms, please
          contact us:
        </p>
        <ul>
          <li>Phone: 201-394-7939</li>
          <li>Email: robleroofnsiding@gmail.com</li>
        </ul>
      </div>
      <Footer />
      <div className={styles.top}>
        <Top />
      </div>
    </div>
  );
};

export default TermsPage;
