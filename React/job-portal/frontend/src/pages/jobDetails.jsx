import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import jobsData from "../features/jobs/jobsData";

const JobDetails = () => {

    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/getData/${id}`
                );
                setJob(response.data.data);
            } catch (error) {
                console.log(error);
                if (error.response?.status   === 404) {
                    setError("Job Not Found");
                } else {
                    setError("Unable to Load Job Details");
                }
            }
        };
        fetchJob();
    }, [id]);

    if (error) {
        return (
            <div className="text-center mt-5">
                <h4>{error}</h4>
            </div>
        )
    }
    if (!job) {
        return (
            <div className="text-center mt-5">
                <h4>Loading...</h4>
            </div>
        )
    }

    // const job = jobsData.find(
    //     (item) => item.id === Number(id)
    // );

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">

                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card shadow-sm p-4">

                        <h2 className="fw-bold">
                            {job.title}
                        </h2>

                        <p className="text-secondary">
                            {job.company}
                        </p>

                        <p>
                            📍 {job.location}
                        </p>

                        <span className="badge bg-primary">
                            {job.type}
                        </span>

                        <hr />

                        <h5 className="fw-bold">
                            Description
                        </h5>

                        <p>
                            {job.description}
                        </p>

                        <Link to={`/apply/${job.id}`} className="btn btn-success" >
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;