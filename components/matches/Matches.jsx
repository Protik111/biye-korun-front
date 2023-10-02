import { matchesProfile } from "@/staticData/matchesPeople"
import SingleMatch from "./SingleMatch"
import { btnBackground } from "@/styles/library/mantine"
import { Button, Loader } from "@mantine/core"
import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"
import useAxios from "@/hooks/axios/useAxios"
import { useSelector } from "react-redux"
import { notifyError, notifySuccess } from "@/utils/showNotification"
import { useRouter } from "next/navigation"

const Matches = () => {
    const { userInfo } = useSelector(state => state.user);
    const [profiles, setProfiles] = useState([]);
    const router = useRouter();
    const [userIds, setUserIds] = useState([])
    const [invitationLoading, setInvitationLoading] = useState(false);

    const { data, error, loading, refetch } = useAxios("user/getMatches", "POST", null, {}, {
        page: 1,
        limit: 10,
        sort_by: "newest",
    });


    // const { data: data2, error: error2, loading: loading2, refetch: refetch2 } = useAxios("user/invitefriends", "POST", null, {}, userIds);


    if (loading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Loader size="xl" color="pink" />
        </div>
    }

    const handleUserIds = (user, remove = false) => {
        if (!remove) {
            setProfiles((prevprofiles) => ([
                ...prevprofiles,
                user
            ]))
        } else {
            const restProfile = profiles?.filter(profile => profile?._id !== user?._id)
            setProfiles(restProfile)
        }
        // console.log(user, remove)
    }

    // console.log('profiles', profiles);

    const userIdList = profiles?.map(item => ({
        requester: userInfo?._id,
        recipient: item?._id
    }))
    // console.log('userIdList', userIdList);

    // console.log('userIds', userIds);
    const handleSendInvitations = async () => {
        if (profiles?.length == 0) {
            notifyError("You must choose at least profile!")
        } else {
            // setUserIds(userIdList)
            // refetch2();

            // console.log('error', error2);

            // if (!error2) {
            //     notifySuccess("Sent invitation successfully!")
            //     router.push('/todays-matches')
            // } else {
            //     notifyError("Error occurred!")
            // }

            setInvitationLoading(true)
            axios.post('user/invitefriends', userIdList)
                .then((response) => {
                    setInvitationLoading(false)
                    if (response?.data?.success) {
                        notifySuccess("Invitation sent successfully")
                        router.push('/todays-matches')
                    }
                })
                .catch((error) => {
                    notifyError("Error occurred!")
                    setInvitationLoading(false)
                });
        }
    }

    // console.log('data', data?.data);


    return (
        <>
            <div className="text-center container">
                {data?.data?.length > 0 ? <h2>Let's get started by connecting with few of your Matches</h2> : <h2>Currently, there is no matching profile for you!</h2>}
            </div>
            <div className="matchesContainer container grid grid-cols-3 grid-cols-3-responsive grid-gap-20">
                {
                    data?.data?.map((item, i) => <SingleMatch key={i} item={item} handleUserIds={handleUserIds}></SingleMatch>)
                }
            </div>
            <div className="flex justify-center align-center container">
                {
                    data?.data?.length > 0 ?
                        <Button disabled={invitationLoading} size="md" style={btnBackground} onClick={handleSendInvitations}>
                            Save & Continue
                        </Button>
                        :
                        <Link href="/todays-matches">
                            <Button size="md" style={btnBackground}>
                                Continue
                            </Button>
                        </Link>
                }
            </div>
        </>
    )
}

export default Matches