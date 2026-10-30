import { useState } from "react";
import JobCard from "../features/jobs/jobCards";
import jobsData from "../features/jobs/jobsData";
import { useEffect } from "react";
import axios from 'axios';

const Home = () => {

    const [sortBy, setSortBy] = useState("");
    const [searchTitle, setSearchTitle] = useState("");
    const [searchLocation, setSearchLocation] = useState("");
    const [searchCompany, setSearchCompany] = useState("");

    //Backend API-------------------------------
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/getData");
                // console.log(response.data);
                setData(response.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    //-------------------------------

    // const searchedJobs = jobsData.filter((job) => {
    const searchedJobs = data.filter((job) => {
        const titleMatch = job.title
            .toLowerCase()
            .includes(searchTitle.toLowerCase());

        const locationMatch = job.location
            .toLowerCase()
            .includes(searchLocation.toLowerCase());

        const companyMatch = job.company
            .toLowerCase()
            .includes(searchCompany.toLowerCase());

        return titleMatch && locationMatch && companyMatch;
    });

    const sortedJobs = [...searchedJobs].sort((a, b) => {
        if (sortBy === "newest") {
            return new Date(b.date) - new Date(a.date);
        }
        if (sortBy === "oldest") {
            return new Date(a.date) - new Date(b.date);
        }
        return 0;
    })

    return (
        <div className="container-fluid">

            {/* Header */}
            <div className="text-center row mb-4">
                <h2 className="fw-bold">
                    Find Your Job
                </h2>

                <p className="text-secondary">
                    Search jobs according to your skills and location
                </p>
            </div>

            {/* Search Section */}
            <div className="justify-content-center row g-3 mb-4">

                <div className="col-12 col-md-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search job title..."
                        value={searchTitle}
                        onChange={(e) => setSearchTitle(e.target.value)}
                    />
                </div>

                <div className="col-12 col-md-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Location..."
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                    />
                </div>
                <div className="col-12 col-md-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Company..."
                        value={searchCompany}
                        onChange={(e) => setSearchCompany(e.target.value)}
                    />
                </div>
                <div className="col-12 col-md-1">
                    <button
                        className="btn btn-outline-secondary w-100"
                        onClick={() => {
                            setSearchTitle("");
                            setSearchLocation("");
                            setSearchCompany("");
                            setSortBy("");
                        }}
                    >
                        Clear Search
                    </button>
                </div>

                <div className="col-12 col-md-2">
                    <select
                        className="form-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="">Sort By</option>
                        <option value="newest">Newest to Oldest</option>
                        <option value="oldest">Oldest to Newest</option>
                    </select>
                </div>

                {/* <div className="col-12 col-md-1">
                    <button className="btn btn-primary">
                        Search
                    </button>
                </div> */}

            </div>

            {/* Jobs Area */}
            <div className="text-center row">
                <div className="col-12">
                    <h4 className="fw-semibold">
                        {searchTitle || searchLocation || searchCompany ? "Search Results" : "Latest Jobs"} -
                        <span className="text-secondary small"> ( {searchedJobs.length} {" "}
                            {searchedJobs.length === 1 ? "job" : "jobs"} found ) </span>
                    </h4>
                </div>
            </div>

            <div className="justify-content-center row g-3 mt-2">

                {searchedJobs.length === 0 && (
                    <div className="text-center text-secondary mt-4">
                        <h5>No Jobs Found</h5>
                        <p>Try a different job title or location.</p>
                    </div>
                )}

                {/* {searchedJobs.map((job) => ( */}
                {/* {data.map((job) => ( */}
                {sortedJobs.map((job) => (
                    <div
                        className="col-12 col-md-6 col-lg-3"
                        key={job.id}
                    >
                        <JobCard
                            job={job}
                            showSave={true}
                        />
                    </div>
                ))}

            </div>

        </div>
    );
};

export default Home;