import TermsCondition from "@/components/terms-condiotions/TermsCondition"
import Footer from "@/components/global/Footer"
import { AboutUsHeader } from "@/components/about-us/AboutUsHeader"
import Vision from "@/components/about-us/Vision"
import DownloadApp from "@/components/about-us/DownloadApp"
import Specialty from "@/components/about-us/Specialty"
import Testimonial from "@/components/about-us/Testimonial"
import CEO from "@/components/about-us/CEO"
import Solutions from "@/components/about-us/Solutions"
import HeroVideo from "@/components/landing/HeroVideo"

const page = () => {
    return (
        <div className='privacy-policy'>
            <CEO></CEO>
            {/* <AboutUsHeader></AboutUsHeader> */}
            <HeroVideo title='Origins of Biye Korun' videoLink='https://player.vimeo.com/video/876371901?h=50ef105a2c'></HeroVideo>
            <Vision></Vision>
            <DownloadApp></DownloadApp>
            {/* <Specialty></Specialty> */}
            {/* <Testimonial></Testimonial> */}
            <Solutions></Solutions>
            <Footer></Footer>
        </div>
    )
}

export default page