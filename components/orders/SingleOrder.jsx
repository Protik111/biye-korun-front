import { Badge, Button, List, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { useDisclosure } from '@mantine/hooks';

const SingleOrder = () => {
    const { userInfo } = useSelector(state => state.user);
    const [opened, { open, close }] = useDisclosure(false);

    // console.log('plan', plan);

    return (
        <div className="plans__singlePlan rounded-10 p-15">

            <div className="text-center">
                <Badge variant="light" color="violet">TOP SELLER</Badge>
            </div>
        
            <h4 className="text-center mt-20">Platinum Gold</h4> 

            <div className="flex justify-center py-15">
                <Button onClick={() => window.open(`/orders/order-details`)} variant="outline" color="red" radius="xl" size="md">
                    View Order
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
                    <List.Item><b>Chat: </b>Send 100 Messages
                    </List.Item>

                    <List.Item><b>View Contact: </b>View upto 75 Contact Numbers
                    </List.Item>

                    <List.Item>
                    3 Biye Korun Live Passes</List.Item>

                    <List.Item>
                    Standout from other Profiles</List.Item>
                </List>
                    
                    
                    


                {/* </List> */}
            </div>
        </div>
    )
}
// Chat: Send 100 Message
// View Contact: View upto 75 Contact Numbers
// 3 Biye Korun Live Passes

export default SingleOrder