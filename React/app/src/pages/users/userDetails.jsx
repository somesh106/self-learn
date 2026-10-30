import { useNavigate } from "react-router-dom";

export const UserDetails = () => {

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(userInfo);

    const navigate = useNavigate();
    const editUserDetails = () => {
        navigate("/editUserDetails");
    }

    // If userInfo is loading or undefined, prevent crashes
    if (!userInfo) return <div className="text-center py-5 text-muted fw-normal fs-5">Loading user details...</div>;

    return (
        <div className="container col-lg-10 col-xl-9 py-5">
            {/* Main Premium Card */}
            <div className="card border-0 shadow-sm rounded-4 bg-white p-4 p-md-5">
                <div className="row g-5">

                    {/* Left Column: Avatar & Quick Status - Flex properties perfectly centered */}
                    <div className="col-12 col-md-4 d-flex flex-column align-items-center text-center">
                        <div className="w-100 d-flex flex-column align-items-center">

                            {/* Avatar Wrapper with Fixed Dimensions & absolute centering */}
                            <div className="mb-4 mx-auto d-flex justify-content-center" style={{ width: '120px', height: '120px', flexShrink: 0 }}>
                                <img
                                    src={userInfo.image || "https://unsplash.com"}
                                    alt={`${userInfo.firstName}`}
                                    className="rounded-circle w-100 h-100 d-block mx-auto"
                                    style={{ backgroundColor: '#f8f9fa' }}
                                />
                            </div>

                            {/* User Name */}
                            <h3 className="fw-bold text-dark mb-1 text-wrap text-break w-100 text-center">
                                {userInfo.firstName} {userInfo.lastName}
                            </h3>

                            {/* Status */}
                            <p className="text-muted small mb-4 d-flex align-items-center justify-content-center gap-2 w-100 text-center">
                                <span className="d-inline-block rounded-circle bg-success" style={{ width: '8px', height: '8px', flexShrink: 0 }}></span>
                                Premium Member
                            </p>

                            <div className="text-start mt-2 w-100 px-2">
                                <span className="text-uppercase text-muted fw-bold d-block mb-2 text-center text-md-start" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>
                                    Biography
                                </span>
                                <p className="text-secondary small lh-base mb-0 text-wrap text-break text-center text-md-start">
                                    {userInfo.bio || "Product Designer based in San Francisco. Passionate about interfaces and clean code architecture."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Information Grid */}
                    <div className="col-12 col-md-8 ps-md-5 border-start-md">
                        {/* Header Border Row */}
                        <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom border-light">
                            <h5 className="fw-bold text-dark m-0">Account Information</h5>
                            <button onClick={editUserDetails} className="btn btn-link btn-sm text-decoration-none text-primary fw-semibold p-0">
                                Edit details
                            </button>
                        </div>

                        {/* Two-Column Clean Info Grid with Row Gaps */}
                        <div className="row g-4">

                            <div className="col-6 col-sm-6">
                                <label className="text-uppercase text-muted fw-bold d-block mb-1" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>
                                    User Name
                                </label>
                                <span className="text-dark fw-medium d-block text-break">{userInfo.username}</span>
                            </div>

                            <div className="col-6 col-sm-6">
                                <label className="text-uppercase text-muted fw-bold d-block mb-1" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>
                                    User ID
                                </label>
                                <span className="text-dark fw-medium d-block text-break">#{userInfo.id}</span>
                            </div>

                            <div className="col-6 col-sm-6">
                                <label className="text-uppercase text-muted fw-bold d-block mb-1" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>
                                    Gender
                                </label>
                                <span className="text-dark fw-medium text-capitalize d-block">{userInfo.gender || "Not specified"}</span>
                            </div>

                            <div className="col-12">
                                <label className="text-uppercase text-muted fw-bold d-block mb-1" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>
                                    Email Address
                                </label>
                                <span className="text-dark fw-medium d-block text-break">{userInfo.email}</span>
                            </div>

                            <div className="col-6 col-sm-6">
                                <label className="text-uppercase text-muted fw-bold d-block mb-1" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>
                                    Account Status
                                </label>
                                <span className="text-dark fw-medium d-block">Active</span>
                            </div>

                            <div className="col-6 col-sm-6">
                                <label className="text-uppercase text-muted fw-bold d-block mb-1" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>
                                    Location
                                </label>
                                <span className="text-dark fw-medium d-block text-break">{userInfo.location || "Mumbai, India"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Embedded Custom CSS for handling Responsive Borders securely */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (min-width: 768px) {
                    .border-start-md {
                        border-left: 1px solid var(--bs-border-color-translucent) !important;
                    }
                }
            `}} />
        </div>);
};
export default UserDetails;