import { Architecture } from "@/components/sections/Architecture";
import { Backups } from "@/components/sections/Backups";
import { Consultation } from "@/components/sections/Consultation";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { FinalCta } from "@/components/sections/FinalCta";
import { Finance } from "@/components/sections/Finance";
import { GoodPractice } from "@/components/sections/GoodPractice";
import { Hero } from "@/components/sections/Hero";
import { Outputs } from "@/components/sections/Outputs";
import { PatientRecord } from "@/components/sections/PatientRecord";
import { Philosophy } from "@/components/sections/Philosophy";
import { Roles } from "@/components/sections/Roles";
import { Security } from "@/components/sections/Security";
import { VideoDemo } from "@/components/sections/VideoDemo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Ecosystem />
      <Consultation />
      <PatientRecord />
      <Roles />
      <Architecture />
      <Security />
      <Outputs />
      <Finance />
      <VideoDemo />
      <Backups />
      <GoodPractice />
      <FinalCta />
    </>
  );
}
