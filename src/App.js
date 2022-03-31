import { HomeSection } from "./components/Home";
import { PropositionsSection } from "./components/Propositions";
import { TryFreeSection } from "./components/tryFree";
import { OurFormatsSection } from "./components/OurFormats";
import { OurProfecionalsSection } from "./components/OurProfecionals"
import { BenefitsFromUsSection } from "./components/BenefitsFromUs"
import { GuarantiesSection } from "./components/Guaranties"
import { ContatcSection } from "./components/OurSocialMedias"
import { Footer } from "./components/Footer";

function App() {
  return (
    <article className="App">
        <HomeSection/>
        <PropositionsSection/>
        <TryFreeSection/>
        <OurFormatsSection/>
        <OurProfecionalsSection/>
        <BenefitsFromUsSection/>
        <GuarantiesSection/>
        <ContatcSection/>
        <Footer/>
    </article>
  );
}

export default App;
