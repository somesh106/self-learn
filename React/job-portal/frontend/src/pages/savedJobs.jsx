import { useSelector } from "react-redux";
import JobCard from "../features/jobs/jobCards";

const SavedJobs = () => {
    const savedJobs = useSelector(
        (state) => state.savedJobs.jobs
    )
    // console.log(savedJobs);

    const savedCount = savedJobs.length;

    return (
        <div className="container-fluid">

            <h2 className="fw-bold mb-4">
                Saved Jobs ({savedCount})
            </h2>

            <div className="row g-3">

                {savedJobs.length > 0 ? (
                    savedJobs.map((job) => (

                        <div className="col-12 col-md-6 col-lg-3" key={job.id} >
                            <JobCard job={job} showSave={true} />
                        </div>

                    ))
                ) : (
                    <div className="text-center py-5">

                        <h5 className="fw-semibold">
                            No Saved Jobs
                        </h5>

                        <p className="text-secondary">
                            You haven't saved any jobs yet.
                        </p>

                    </div>
                )}
            </div>
        </div >
    )
}
export default SavedJobs;