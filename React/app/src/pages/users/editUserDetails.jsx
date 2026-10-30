import { useNavigate } from "react-router-dom";

export const EditUserDetails = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const navigate = useNavigate();
    const handleCancelEdit = () => {
        navigate("/userDetails");
    };

    return (
        <div className="container col-12 col-lg-10 col-xl-9 px-3">
            <div className="card border-0 rounded-4 p-4 p-md-5">

                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
                    <div>
                        <h4 className="fw-bold mb-1">Edit Profile</h4>
                    </div>

                    <button onClick={handleCancelEdit} className="btn btn-light btn-sm">
                        Cancel
                    </button>
                </div>

                {/* Profile Image */}
                <div className="position-relative mb-4 text-center">
                    <img
                        src={userInfo.image}
                        className="rounded-circle shadow-sm"
                        width="110"
                        height="110"
                        alt="profile"
                    />

                    <button className="btn btn-outline-primary btn-sm position-absolute end-0 top-50 translate-middle-y me-2 me-md-0">
                        Change Photo
                    </button>
                </div>


                {/* Form */}
                <div className="row g-4">
                    <div className="col-12 col-md-6">
                        <label className="form-label small fw-bold text-muted">
                            FIRST NAME
                        </label>
                        <input
                            className="form-control rounded-3"
                            value={userInfo.firstName}
                        />
                    </div>

                    <div className="col-12 col-md-6">
                        <label className="form-label small fw-bold text-muted">
                            LAST NAME
                        </label>
                        <input
                            className="form-control rounded-3"
                            value={userInfo.lastName}
                        />
                    </div>

                    <div className="col-12 col-md-6">
                        <label className="form-label small fw-bold text-muted">
                            USERNAME
                        </label>
                        <input
                            className="form-control rounded-3"
                            value={userInfo.username}
                        />
                    </div>

                    <div className="col-12 col-md-6">
                        <label className="form-label small fw-bold text-muted">
                            EMAIL
                        </label>
                        <input
                            className="form-control rounded-3"
                            value={userInfo.email}
                        />
                    </div>

                    <div className="col-12 col-md-6">
                        <label className="form-label small fw-bold text-muted">
                            GENDER
                        </label>

                        <select className="form-select rounded-3">
                            <option>{userInfo.gender}</option>
                            {/* <option>Male</option>
                            <option>Female</option> */}
                        </select>
                    </div>

                    <div className="col-12 col-md-6">
                        <label className="form-label small fw-bold text-muted">
                            LOCATION
                        </label>

                        <input
                            className="form-control rounded-3"
                            value={userInfo.location}
                        />
                    </div>

                    <div className="col-12">
                        <label className="form-label small fw-bold text-muted">
                            BIO
                        </label>

                        <textarea
                            rows="3"
                            className="form-control rounded-3"
                            value={userInfo.bio}
                        />
                    </div>
                </div>

                {/* Save Button */}
                <div className="text-end mt-4">
                    <button className="btn btn-primary px-5 rounded-3">
                        Save Changes
                    </button>
                </div>

            </div>
        </div>
    );
};

export default EditUserDetails;