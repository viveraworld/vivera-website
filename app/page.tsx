import Header from "@/components/Header";

import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Community from "@/components/Community";
import Mission from "@/components/Mission";
import ManifestCard from "@/components/ManifestCard";
import Approach from "@/components/Approach";
import Philosophy from "@/components/Philosophy";
import Audience from "@/components/Audience";
import Founder from "@/components/Founder";
import Specialists from "@/components/Specialists";
import Partnerships from "@/components/Partnerships";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Manifesto />

        <Community />

        <Mission />

          <Audience />

       <Approach />

        <Philosophy />

        <ManifestCard />

        <Founder />

        <Specialists />

        <Partnerships />

        <Contacts />
      </main>
    </>
  );
}
