"use client";

import { Announcement } from "./components/Announcement/Announcement";
import { Footer } from "./components/Footer/Footer";
import { FormSection } from "./components/FormSection/FormSection";
import { Header } from "./components/Header/Header";
import { SimulateSection } from "./components/SimulateSection/SimulateSection";

export default function Home() {
  return (
    <section>
      <Header />
      <SimulateSection />
      {/*
      <FormSection />
      <Announcement />
      <Footer /> */}
    </section>
  );
}
