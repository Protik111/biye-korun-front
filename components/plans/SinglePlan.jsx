import { Button, List, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const SinglePlan = ({ plan }) => {
    const { id,
        topTag,
        header,
        money,
        subMoney,
        features } = plan;
    return (
        <div className="plans__singlePlan rounded-10 px-5">
            {/* <p className="text-small text-center py-10" style={{ color: 'red' }}>{topTag ? topTag : ''}</p> */}
            {/* <>{header}</> */}
            <h2 className="mt-30 text-center">{money}</h2>
            <p className="text-small text-center">{subMoney}</p>
            <div className="flex justify-center py-15">
                <Button variant="outline" color="red" radius="xl" size="md">
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
                        features?.map((feature, i) => <List.Item className={`${feature?.active ? '' : 'plans__singlePlan--feature'}`} key={i}>
                            {feature?.title}</List.Item>)
                    }
                </List>
            </div>
        </div>
    )
}

export default SinglePlan