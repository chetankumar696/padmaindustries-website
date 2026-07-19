import SectionTitle from "./ui/SectionTitle";
import LabCard from "./ui/LabCard";

import { laboratoryTests } from "../data/laboratory";

import "../styles/laboratory.css";

function Laboratory(){

    return(

        <section id="laboratory" className="laboratory-section">

            <div className="container">

                <SectionTitle

                    title="LABORATORY"

                    heading="Advanced Quality Testing"

                    description="Every product undergoes rigorous testing before dispatch."

                />

                <div className="row g-4">

                    {laboratoryTests.map((test)=>(

                        <div
                            className="col-lg-4"
                            key={test.id}
                        >

                            <LabCard test={test}/>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Laboratory;