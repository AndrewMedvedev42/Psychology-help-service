import { HomeSection } from "./pages/home";
import { PropositionsSection } from "./pages/propositionsSection";
import { WhyUsSection } from "./pages/whyUs";
import { TryFreeSection } from "./pages/tryFree";
import { FormatsSection } from "./pages/formatsSection";

function App() {
  return (
    <article className="App">
      <section>
        <HomeSection/>
        <PropositionsSection/>
        <WhyUsSection/>
        <TryFreeSection/>
        <FormatsSection/>
      </section>
    </article>
  );
}

export default App;
