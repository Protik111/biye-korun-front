import { plansList } from "@/staticData/plans"
import SinglePlan from "./SinglePlan"

const Plans = () => {
    return (
        <div className="plans__box container">
            {
                plansList?.map((plan, i) => <SinglePlan key={plan?.id} plan={plan}>
                </SinglePlan>)
            }
        </div>
    )
}

export default Plans