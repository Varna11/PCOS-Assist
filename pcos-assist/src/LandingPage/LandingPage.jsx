import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import forum from "./forum.jpg";
import dia from "./diagnosis.jpg";
import prevent from "./prevention.jpg";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const clickHandler = (title) => {
    const str = `../${title}`;
    console.log(title);
    navigate({ pathname: str });
  };
  const texts = [
    '"You are not alone." View the community forum here.',
    '"An ounce of prevention is worth a pound of cure." View the preventive measures of PCOS here.',
    '"A correct diagnosis is three-fourths the remedy." View the diagnosis tool here.',
  ];

  return (
    <div>
      <div className="align-rows">
        <Card
          onClick={clickHandler}
          txt={texts[0]}
          src={forum}
          code="forum"
          key="Forum"
          title="Community Forum"
        />
        <Card
          onClick={clickHandler}
          txt={texts[1]}
          src={prevent}
          code="measures"
          key="Measures"
          title="Preventive Measures"
        />
        <Card
          onClick={clickHandler}
          txt={texts[2]}
          src={dia}
          code="diagnosis"
          key="Diagnosis"
          title="Diagnosis"
        />
      </div>
    </div>
  );
};
export default LandingPage;
