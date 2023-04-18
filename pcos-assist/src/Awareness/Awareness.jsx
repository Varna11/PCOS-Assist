import "./Awareness.css";
import Card from "../Card/Card";

const Awareness = () => {
  return (
    <>
      <div className="intro-div">
        <h1>PCOS- PolyCystic Ovary Syndrome</h1>
        <p>
          Polycystic ovary syndrome (PCOS) is a problem with hormones that
          happens during the reproductive years. If you have PCOS, you may not
          have periods very often. Or you may have periods that last many days.
          You may also have too much of a hormone called androgen in your body.
        </p>
        <p>
          With PCOS, many small sacs of fluid develop along the outer edge of
          the ovary. These are called cysts. The small fluid-filled cysts
          contain immature eggs. These are called follicles. The follicles fail
          to regularly release eggs.
        </p>
        <p>
          The exact cause of PCOS is unknown. Early diagnosis and treatment
          along with weight loss may lower the risk of long-term complications
          such as type 2 diabetes and heart disease.
        </p>
      </div>

      <div className="intro-div">
        <h3> Related Articles</h3>
        <div className="articles">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>

      <div className="intro-div">
        <h3> Video Tutorials</h3>
        <div className="articles">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </>
  );
};
export default Awareness;
