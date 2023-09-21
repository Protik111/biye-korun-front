import useAxios from "@/hooks/axios/useAxios";
import useAxiosPost from "@/hooks/axios/useAxiosPost";
import { btnBackground } from "@/styles/library/mantine";
import { calculateAge } from "@/utils/calculateAge";
import { heightCalculator } from "@/utils/heightCalculator";
import { Avatar, Button, Divider } from "@mantine/core";
import RecentVisitors from "./RecentVisitors";

const imageUrl = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80';

const profileImg = [
    {
        id: 1,
        name: 'Rudina Ahmed',
        height: "5'6''",
        age: '22yrs',
        community: 'Bengali',
        profileImage: {
            isVisible: true,
            url: imageUrl,
        },
    },
    {
        id: 2,
        name: 'John Doe',
        height: "5'10''",
        age: '30yrs',
        community: 'American',
        profileImage: {
            isVisible: true,
            url: imageUrl,
        },
    },
    {
        id: 3,
        name: 'Alice Smith',
        height: "5'8''",
        age: '25yrs',
        community: 'English',
        profileImage: {
            isVisible: true,
            url: imageUrl,
        },
    },
    {
        id: 4,
        name: 'Mohammed Ali',
        height: "6'0''",
        age: '28yrs',
        community: 'Arabic',
        profileImage: {
            isVisible: true,
            url: imageUrl,
        },
    },
    {
        id: 5,
        name: 'Linda Johnson',
        height: "5'5''",
        age: '35yrs',
        community: 'Canadian',
        profileImage: {
            isVisible: true,
            url: imageUrl,
        },
    },
    // {
    //     id: 6,
    //     name: 'Juan Rodriguez',
    //     height: "5'7''",
    //     age: '27yrs',
    //     community: 'Mexican',
    //     profileImage: {
    //         isVisible: true,
    //         url: imageUrl,
    //     },
    // },
];

const message = {
    success: 'Invitation sent successfully!',
    error: 'Error occurred!'
}

const MyDashboardBottom = () => {
    const { data, error, loading, refetch } = useAxios("user/view-profile"); //todo '/user/recent-visitors'

    const { data: data2, loading: loading2, error: error2, postData: sendPostRequest } = useAxiosPost('user/single-invite', null, message);

    console.log('data, loading, error,', data, loading, error);


    const handleSendRequest = (userId) => {
        // console.log('userId', userId);

        sendPostRequest({
            recipient: userId
        });
    };

    // const destructuredData = data?.data?.map(({ friendships, ...rest }) => ({ ...rest, friendships }));

    // console.log('destructuredData', destructuredData);

    // console.log('country', country);

    // Check if 'friendships' exists in profile and has a 'status' property
    //   const friendshipsStatus = profile && profile.friendships && profile.friendships.status;

    // Use the value of 'friendshipsStatus' for the 'status' property
    //   const status = friendshipsStatus !== undefined ? friendshipsStatus : null;

    console.log('data', data);

    return (
        <div className='myDashboard__bottom mt-20'>
            <h3 className="mb-5">Recent Visitors</h3>
            <div className="myDashboard__bottom--profileContainerRoot">
                <div className="myDashboard__bottom--profileContainer">
                    {
                        data?.data?.map(profile => <RecentVisitors profile={profile} refetch={refetch}></RecentVisitors>)
                    }
                </div>

                <div className="myDashboard__bottom--noti container-box-bg mx-10 p-15">
                    <div className="flex flex-wrap justify-between align-center flex-gap-10">
                        <Avatar
                            size="md"
                            radius="md"
                            src={imageUrl}
                            alt="Noti Profile"
                        />
                        <p className="small-text">Syeda added a photo to her profile</p>

                    </div>

                    <Divider my={5}></Divider>


                    <div className="flex flex-wrap justify-between align-center flex-gap-5 mt-15">
                        <Avatar
                            size="md"
                            radius="md"
                            src={imageUrl}
                            alt="Noti Profile"
                        />
                        <p className="small-text">Syeda added a photo to her profile</p>

                    </div>

                    <Divider my={5}></Divider>

                    <div className="flex flex-wrap justify-between align-center flex-gap-5 mt-15">
                        <Avatar
                            size="md"
                            radius="md"
                            src={imageUrl}
                            alt="Noti Profile"
                        />
                        <p className="small-text">Syeda added a photo to her profile</p>

                    </div>
                    <Divider my={5}></Divider>

                    <div className="flex flex-wrap justify-between align-center flex-gap-5 mt-15">
                        <Avatar
                            size="md"
                            radius="md"
                            src={imageUrl}
                            alt="Noti Profile"
                        />
                        <p className="small-text">Syeda added a photo to her profile</p>
                    </div>
                    <Divider my={5}></Divider>

                    <div className="flex flex-wrap justify-between align-center flex-gap-5 mt-15">
                        <Avatar
                            size="md"
                            radius="md"
                            src={imageUrl}
                            alt="Noti Profile"
                        />
                        <p className="small-text">Syeda added a photo to her profile</p>
                    </div>
                    <Divider my={5}></Divider>


                    <div className="flex flex-wrap justify-between align-center flex-gap-5 mt-15">
                        <Avatar
                            size="md"
                            radius="md"
                            src={imageUrl}
                            alt="Noti Profile"
                        />
                        <p className="small-text">Syeda added a photo to her profile</p>
                    </div>
                    <Divider my={5}></Divider>

                    <div className="flex flex-wrap justify-between align-center flex-gap-5 mt-15">
                        <Avatar
                            size="md"
                            radius="md"
                            src={imageUrl}
                            alt="Noti Profile"
                        />
                        <p className="small-text">Syeda added a photo to her profile</p>
                    </div>
                    <Divider my={5}></Divider>
                </div>
            </div>
        </div>
    )
}

export default MyDashboardBottom