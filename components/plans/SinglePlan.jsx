import { Badge, Button, List, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const SinglePlan = ({ plan }) => {
    const {
        badgeName,
        benefits,
        price,
        description,
        discountPrice,
        name,
        _id
    } = plan;
    return (
        <div className="plans__singlePlan rounded-10 p-15">
            {/* <p className="text-small text-center py-10" style={{ color: 'red' }}>{badgeName ? badgeName : ''}</p> */}
            <div className="text-center">
                <Badge variant="light" color="violet">{badgeName ? badgeName : ''}</Badge>
            </div>
            {/* <>{header}</> */}
            <p className="text-small text-center mt-20" style={{ color: 'red' }}>{discountPrice ? "BDT " + discountPrice + " Discount!" : ''}</p>
            <h2 className="text-center">{price ? "BDT " + price : ''}</h2>
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
                    <List.Item>Your Photo should be front facing and your entire face should be visible.</List.Item>
                    {
                        benefits?.map((feature, i) => <List.Item className={`${feature?.active ? '' : 'plans__singlePlan--feature'}`} key={i}>
                            {feature?.name}</List.Item>)
                    }
                </List>
            </div>
        </div>
    )
}

export default SinglePlan