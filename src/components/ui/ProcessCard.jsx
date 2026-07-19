function ProcessCard({ step }){

    return(

        <div className="process-card">

            <img
                src={step.image}
                alt={step.title}
            />

            <div className="process-number">

                {step.id}

            </div>

            <h4>{step.title}</h4>

            <p>{step.description}</p>

        </div>

    )

}

export default ProcessCard;