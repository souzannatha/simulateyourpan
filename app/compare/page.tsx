"use client";

import { Announcement } from "../components/Announcement/Announcement";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Quotation } from "../components/Quotation/Quotation";
import { SimulateSection } from "../components/SimulateSection/SimulateSection";

export default function Compare() {
  return (
    <div>
      <Header />
      <SimulateSection />
      <Quotation />
      <Announcement />
      <Footer />
    </div>
  );
}
