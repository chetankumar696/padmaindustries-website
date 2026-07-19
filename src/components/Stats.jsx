import { stats } from "../data/stats";
import "../styles/stats.css";

function Stats() {
  return (
    <section className="stats-wrapper">

      <div className="container">

        <div className="stats-card">

          <div className="row text-center">

            {stats.map((item) => (

              <div className="col-lg col-md-4 col-6 mb-4 mb-lg-0" key={item.title}>

                <h2>{item.number}</h2>

                <p>{item.title}</p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Stats;