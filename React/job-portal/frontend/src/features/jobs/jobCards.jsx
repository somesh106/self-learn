import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { saveJob, removeJob } from "../../store/slices/savedJobSlice";
import { toast } from "react-toastify";

const JobCard = ({ job, showSave = true, showRemove = false }) => {
    const dispatch = useDispatch();

    const savedJobs = useSelector(
        (state) => state.savedJobs.jobs
    );

    const isSaved = savedJobs.some((item) => item.id === job.id);

    const handleSave = () => {
        if (isSaved) {
            dispatch(removeJob(job.id));
            toast.success("Job removed from saved jobs");
        } else {
            dispatch(saveJob(job));
            toast.success("Job saved successfully!");
        }
    };

    return (
        <div className="card shadow-sm h-100">
            <div className="card-body">

                {/* Title + Published Date */}
                <div className="d-flex justify-content-between align-items-start gap-2">
                    <h5 className="card-title fw-bold mb-2">
                        {job.title}
                    </h5>

                    <div className="text-end">
                        <small className="text-secondary d-block">
                            Posted On
                        </small>

                        <p className="text-secondary small mb-2">
                            {job.date.split("-").reverse().join("-")}
                        </p>
                    </div>
                </div>

                <p className="text-secondary mb-1">
                    {job.company}
                </p>

                <p className="mb-2">
                    📍 {job.location}
                </p>


                <span className="badge bg-primary">
                    {job.type}
                </span>

                <div className="d-flex gap-4 mt-3">

                    <Link
                        to={`/job/${job.id}`}
                        className="btn btn-outline-primary"
                    >
                        View Details
                    </Link>

                    {showSave && (
                        <button
                            className={`btn ${isSaved
                                ? "btn-danger"
                                : "btn-outline-danger"
                                } ms-auto`}
                            onClick={handleSave}
                        >
                            {isSaved
                                ? "Remove Saved Job"
                                : "Save Job"}
                        </button>
                    )}

                    {showRemove && (
                        <button
                            className="btn btn-danger w-100 mt-3"
                            onClick={() => {
                                dispatch(removeJob(job.id));
                                toast.success(
                                    "Job removed from saved jobs"
                                );
                            }}
                        >
                            Remove Saved Job
                        </button>
                    )}

                </div>
            </div>
        </div>
    );
};

export default JobCard;