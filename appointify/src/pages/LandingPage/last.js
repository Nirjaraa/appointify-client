import "./LastStyles.css";
import LastData from "./LastData";
import last1 from "../../images/doc1.jpg";
import last2 from "../../images/salon1.jpg";
import last3 from "../../images/elec2.jpg";
function Last() {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <p>Users can choose required professions accordingly.</p>
      <div className="servicecard">
        <LastData
          image={last1}
          heading="Medical"
          text="The medical professionals evaluate the condition and provide advice or treatment options.Treatment options may include medication prescriptions, lifestyle changes, or referrals to specialists."
        />
        <LastData
          image={last2}
          heading="Beauty"
          text="Beauty professionals provide facials, which involve cleansing, exfoliation, and moisturizing.
                Other skin treatments include chemical peels, microdermabrasion, and anti-aging therapies."
        />
        <LastData
          image={last3}
          heading="Maintenance"
          text="Maintenance professionals handle routine tasks to keep buildings, equipment, and systems in good condition.
                This includes fixing minor issues like leaky faucets, loose hinges, or broken light fixtures."
        />
      </div>
    </div>
  );
}
export default Last;
