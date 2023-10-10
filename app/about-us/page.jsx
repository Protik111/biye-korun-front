import TermsCondition from "@/components/terms-condiotions/TermsCondition"
import Footer from "@/components/global/Footer"
import { AboutUsHeader } from "@/components/about-us/AboutUsHeader"
import Vision from "@/components/about-us/Vision"
import DownloadApp from "@/components/about-us/DownloadApp"
import Specialty from "@/components/about-us/Specialty"
import Testimonial from "@/components/about-us/Testimonial"

const page = () => {
    return (
        <div className='privacy-policy'>
            <AboutUsHeader></AboutUsHeader>
            <Vision></Vision>
            <DownloadApp></DownloadApp>
            <Specialty></Specialty>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    )
}

export default page