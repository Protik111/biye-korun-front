import { Alert, Divider } from "@mantine/core"
const imageUrl = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80';

const MyProfile = () => {
    return (
        <div className="myProfile container">
            <div className="myProfile__top container-box-bg p-15">
                <Alert title={<h2>Shakil Ahmed<p>(SH032455645)</p></h2>} color="red">
                </Alert>

                <div className="myProfile__top--wrapper">
                    <div className="profile-img">
                        <img src={imageUrl} alt="Profile" />
                    </div>
                    <div className="profile-info">
                        <div>
                            <div className="single-item">
                                <p className="left">Age/Height</p>
                                <p className="right">: 25/5'6''</p>
                            </div>
                            <div className="single-item">
                                <p className="left">Marital Status</p>
                                <p className="right">: Never Married</p>
                            </div>
                            <div className="single-item">
                                <p className="left">Posted by</p>
                                <p className="right">: Self</p>
                            </div>
                        </div>

                        <div>
                            <div className="single-item">
                                <p className="left">Religion/Community</p>
                                <p className="right">: Muslim, Sunni</p>
                            </div>
                            <div className="single-item">
                                <p className="left">Location</p>
                                <p className="right">: Dhaka</p>
                            </div>
                            <div className="single-item">
                                <p className="left">Mother Tonue</p>
                                <p className="right">: Bengali</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile