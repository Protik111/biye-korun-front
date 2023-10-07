import { Avatar } from "@mantine/core"
import Plans from "./Plans"

const PlansHero = () => {
    return (
        <div className='planshero'>
            <div className="container">
                <h2 className="text-center text-white-light">Upgrade Now & Get Premium Benefits!</h2>

                <div className="flex align-center justify-center mt-15">
                    <Avatar.Group spacing="sm">
                        <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" radius="xl" />
                        <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" radius="xl" />
                        <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" radius="xl" />
                        <Avatar radius="xl">+5</Avatar>
                    </Avatar.Group>

                    <h3 className="text-white ml-5 text-white-light">Upgrade Now to Contact with your Matches</h3>
                </div>
            </div>
            <div className="container">
                <Plans></Plans>
            </div>
        </div>
    )
}

export default PlansHero