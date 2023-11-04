import { Badge, Button, List, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useSelector } from "react-redux";

const SinglePlan = ({ plan }) => {
    const { userInfo } = useSelector(state => state.user);

    const { location: { country } = {} } = userInfo || {}

    const {
        badgeName,
        benefits,
        description,
        price,
        discountPrice,
        usdPrice,
        usdDiscountPrice,
        name,
        _id
    } = plan;

    const isFromBD = country?.toLowerCase() === 'bangladesh' ? true : false;
    const currency = isFromBD ? "BDT" : "USD";

    // console.log('plan', plan);

    return (
        <div className="plans__singlePlan rounded-10 p-15">
            {/* <p className="text-small text-center py-10" style={{ color: 'red' }}>{badgeName ? badgeName : ''}</p> */}
            <div className="text-center">
                <Badge variant="light" color="violet">{badgeName ? badgeName : ''}</Badge>
            </div>
            {/* <>{header}</> */}
            {
                isFromBD ?
                    <p className="text-center text-small mt-20 line-through">{price ? currency + " " + price : ''}</p> :
                    <p className="text-center text-small mt-20 line-through">{usdPrice ? currency + " " + usdPrice : ''}</p>
            }
            {
                isFromBD ?
                    <h4 className="text-center">{discountPrice ? currency + " " + discountPrice : ''}</h4> :
                    <h4 className="text-center">{usdDiscountPrice ? currency + " " + usdDiscountPrice : ''}</h4>
            }

            <div className="text-center">
                {/* <Badge color="violet" variant="filled" size="lg">{name ? name : ''}</Badge> */}
                <p className="text-small text-center">{description ? description : ''}</p>
            </div>
            <div className="flex justify-center py-15">
                <Button onClick={() => window.open(`/plans/payment/${_id}`)} variant="outline" color="red" radius="xl" size="md">
                    Continue
                </Button>
            </div>
            <div className="py-15">
                <List
                    spacing="xs"
                    size="sm"
                    center
                    icon={
                        <ThemeIcon color="teal" size={18} radius="xl">
                            <IconCheck size={16} />
                        </ThemeIcon>
                    }
                >
                    {plan?.permission?.chat && <List.Item><b>Chat: </b>{plan?.permission?.chat?.name}</List.Item>}

                    {plan?.permission?.viewContact
                        && <List.Item><b>View Contact: </b>{plan?.permission?.viewContact?.name
                        }</List.Item>}

                    {
                        benefits?.map((feature, i) => <List.Item className={`${feature?.isActive ? '' : 'plans__singlePlan--feature'}`} key={i}>
                            {feature?.name}</List.Item>)
                    }


                </List>
            </div>
        </div>
    )
}

export default SinglePlan