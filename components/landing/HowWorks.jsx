import { Avatar } from "@mantine/core"

const HowWorks = () => {
    return (
        <div className="howWorks py-25">
            <h2 className="text-center">How Biye Korun works</h2>
            <h3 className="text-center">Get started with 3 simple step to find your partner</h3>

            <div className="howWorks__wrapper container grid grid-cols-3 grid-cols-3-responsive place-center">
                <div className="p-30">
                    <Avatar size="lg" color="black" radius="xl">01</Avatar>
                    <h3>Create Account</h3>
                    <p className="mt-5">Create a detailed profile, upload images, and specify your perfect partner</p>
                </div>

                <div className="p-30">
                    <Avatar size="lg" color="black" radius="xl">02</Avatar>
                    <h3>Create Account</h3>
                    <p className="mt-5">Create a detailed profile, upload images, and specify your perfect partner</p>
                </div>

                <div className="p-30">
                    <Avatar size="lg" color="black" radius="xl">03</Avatar>
                    <h3>Create Account</h3>
                    <p className="mt-5">Create a detailed profile, upload images, and specify your perfect partner</p>
                </div>
            </div>
        </div>
    )
}

export default HowWorks