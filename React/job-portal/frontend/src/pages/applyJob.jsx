import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const ApplyJob = () => {
    const { id } = useParams();

    const [resume, setResume] = useState(null);
    const [currentlyWorking, setCurrentlyWorking] = useState(false);
    const [job, setJob] = useState(null);

    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        countryCode: "",
        mobile: "",
        email: "",
        gender: "",
        experienceYears: "",
        experienceMonths: "0",
        currentSalaryCurrency: "INR",
        currentSalary: "",
        expectedSalaryCurrency: "INR",
        expectedSalary: "",
        availableToJoin: "",
        currentLocation: "",
        companyName: "",
        jobTitle: "",
        joiningDate: "",
        relievingDate: "",
        experienceLocation: "",
        course: "",
        branch: "",
        courseStart: "",
        courseEnd: "",
        university: "",
        educationLocation: "",
        skills: "",
        captcha: "",
        privacyPolicy: false,
    });

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/getData/${id}`
                );

                setJob(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchJob();
    }, [id]);

    if (!job) {
        return (
            <div className="container py-5 text-center">
                <h3>Loading...</h3>
            </div>
        );
    }

    // const job = jobsData.find(
    //     (item) => item.id === Number(id)
    // );

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleMobileChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");

        setFormData((prev) => ({
            ...prev,
            mobile: value,
            countryCode: value ? "+91" : prev.countryCode
        }));
    };

    // const handleResumeChange = (e) => {
    //     const file = e.target.files?.[0];

    //     if (!file) return;

    //     const allowedTypes = [
    //         "application/pdf",
    //         "application/msword",
    //         "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    //         "application/rtf",
    //         "application/vnd.oasis.opendocument.text",
    //     ];

    //     if (!allowedTypes.includes(file.type)) {
    //         alert("Please upload a valid Resume file.");
    //         e.target.value = "";
    //         return;
    //     }

    //     if (file.size > 10 * 1024 * 1024) {
    //         alert("Resume size must be less than 10MB.");
    //         e.target.value = "";
    //         return;
    //     }

    //     setResume(file);
    // };
    const handleResumeChange = async (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/rtf",
            "application/vnd.oasis.opendocument.text",
        ];

        if (!allowedTypes.includes(file.type)) {
            alert("Please upload a valid Resume file.");
            e.target.value = "";
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            alert("Resume size must be less than 10MB.");
            e.target.value = "";
            return;
        }

        setResume(file);

        const resumeData = new FormData();
        resumeData.append("resume", file);

        try {
            const response = await axios.post(
                "http://localhost:8080/parse-resume",
                resumeData
            );
            console.log("Parsed Resume:", response.data);           
            //------------------------
            const text = response.data.text;
            console.log("Resume tex : ", text);
            const email =
                text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0] || "";

            const mobile =
                text.match(/(?:\+91[\s-]?)?[6-9]\d{9}/)?.[0]?.replace(/\D/g, "") || "";

            const lines = text
                .split("\n")
                .map((line) => line.trim())
                .filter(Boolean);

            const fullName = lines.find((line) => {
                return (
                    /^[A-Za-z]+(?:\s+[A-Za-z]+){1,3}$/.test(line) &&
                    !line.includes("@")
                );
            }) || "";

            const nameParts = fullName.split(/\s+/);

            const firstName = nameParts[0] || "";

            const middleName =
                nameParts.length > 2
                    ? nameParts.slice(1, -1).join(" ")
                    : "";

            const lastName =
                nameParts.length > 1
                    ? nameParts[nameParts.length - 1]
                    : "";

            const companyName =
                lines.find((line) =>
                    line.includes("Bridgefix Technology")
                ) || "";

            const jobTitle =
                lines.find((line) =>
                    line.includes("Full Stack Developer")
                ) || "";

            const experienceMatch = text.match(
                /(\d+(?:\.\d+)?)\+?\s*years?(?:\s*(?:and)?\s*(\d+)\s*months?)?\s+of\s+experience/i
            );

            let experienceYears = "";
            let experienceMonths = "0";

            if (experienceMatch) {
                const years = parseFloat(experienceMatch[1]);

                experienceYears = Math.floor(years).toString();

                if (experienceMatch[2]) {
                    experienceMonths = experienceMatch[2];
                } else {
                    experienceMonths = Math.round((years % 1) * 12).toString();
                }
            }

            const currentLocation =
                lines.find((line) =>
                    /^[A-Za-z\s]+,\s*[A-Za-z\s]+(?:,\s*\d{6})?$/.test(line)
                ) || "";

            const educationLine =
                lines.find((line) =>
                    /^(BSC|B\.SC|BTECH|B\.TECH|BE|B\.E|MCA|MTECH|M\.TECH|MBA)\s+/i.test(line)
                ) || "";

            const educationMatch = educationLine.match(
                /^(.+?)\s+(.+?)(?:-\s*\d{4})?$/i
            );

            let course = "";
            let branch = "";

            if (educationMatch) {
                course = educationMatch[1].trim();
                branch = educationMatch[2].trim();
            }

            const educationYear =
                educationLine.match(/(19|20)\d{2}/)?.[0] || "";

            const courseEnd = educationYear
                ? `${educationYear}-12-31`
                : "";



            setFormData((prev) => ({
                ...prev,
                firstName,
                middleName,
                lastName,
                email,
                mobile,
                companyName,
                jobTitle,
                experienceYears,
                experienceMonths,
                currentLocation,
                course,
                branch,
                courseEnd,
                countryCode: mobile ? "+91" : prev.countryCode
            }));

            console.log("Auto Filled:", {
                firstName,
                middleName,
                lastName,
                email,
                mobile,
            });
            //--------------------------

        } catch (error) {
            console.error("Resume parsing failed:", error);
            alert("Could not read resume.");
        }
    };
    ``
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!resume) {
            alert("Please upload your resume.");
            return;
        }

        if (formData.mobile.length !== 10) {
            alert("Please enter a valid 10 digit mobile number.");
            return;
        }

        if (!formData.privacyPolicy) {
            alert("Please accept the Privacy Policy.");
            return;
        }

        const applicationData = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            applicationData.append(key, value);
        });

        applicationData.append("resume", resume);
        applicationData.append("currentlyWorking", currentlyWorking);
        applicationData.append("jobID", job.id);
        applicationData.append("jobTitle", job.title);

        const response = await axios.post(
            "http://localhost:8080/apply",
            applicationData
        );

        console.log("Server Response:", response.data);
        console.log("Application Data:", applicationData);
        alert("Application submitted successfully!");
    };

    if (!job) {
        return (
            <div className="container py-5 text-center">
                <h3>Job Not Found</h3>
            </div>
        );
    }

    return (
        <div className="container py-5 apply-job-page">
            <div className="apply-form-wrapper mx-auto">

                {/* ================= HEADING ================= */}
                <h4 className="fw-bold mb-4">
                    Apply for this job
                </h4>

                {/* ================= RESUME ================= */}
                <div className="resume-upload-box mb-5  ">
                    <label
                        htmlFor="resume"
                        className="d-flex flex-column justify-content-center align-items-center h-100 w-100"
                    >
                        <span className="text-primary mb-1">
                            Upload resume{" "}
                            <span className="text-danger">*</span>
                        </span>

                        <input
                            type="file"
                            id="resume"
                            className="d-none"
                            accept=".doc,.pdf,.docx,.rtf,.odt"
                            onChange={handleResumeChange}
                        />

                        <small className="text-secondary text-center">
                            This will auto-fill the fields below. 10MB max file size
                            (Allowed file types are .doc, .pdf, .docx, .rtf, .odt).
                        </small>

                        {resume && (
                            <small className="text-success d-block mt-2">
                                Selected: {resume.name}
                            </small>
                        )}
                    </label>
                </div>

                {/* ================= FORM ================= */}
                <form onSubmit={handleSubmit}>

                    <div className="row g-4">

                        {/* First Name */}
                        <div className="col-md-6">
                            <label className="form-label">
                                First Name{" "}
                                <span className="text-danger">*</span>
                            </label>

                            <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Middle Name */}
                        <div className="col-md-6">
                            <label className="form-label">
                                Middle Name
                            </label>

                            <input
                                type="text"
                                name="middleName"
                                className="form-control"
                                value={formData.middleName}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Last Name */}
                        <div className="col-md-6">
                            <label className="form-label">
                                Last Name{" "}
                                <span className="text-danger">*</span>
                            </label>

                            <input
                                type="text"
                                name="lastName"
                                className="form-control"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Mobile */}
                        <div className="col-md-6">
                            <label className="form-label">
                                Mobile Phone{" "}
                                <span className="text-danger">*</span>
                            </label>

                            <div className="input-group">

                                <select
                                    name="countryCode"
                                    className="form-select mobile-code"
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="+91">+91</option>
                                </select>

                                <input
                                    type="tel"
                                    name="mobile"
                                    className="form-control"
                                    placeholder="Mobile Phone"
                                    value={formData.mobile}
                                    onChange={handleMobileChange}
                                    required
                                    maxLength={10}
                                    pattern="[0-9]{10}"
                                    inputMode="numeric"
                                />

                            </div>
                        </div>

                        {/* Email */}
                        <div className="col-md-6">
                            <label className="form-label">
                                Email{" "}
                                <span className="text-danger">*</span>
                            </label>

                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Gender */}
                        <div className="col-md-6">
                            <label className="form-label">
                                Gender{" "}
                                <span className="text-danger">*</span>
                            </label>

                            <select
                                name="gender"
                                required
                                className="form-select"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="">
                                    Select an option
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Experience */}
                        <div className="col-md-6">
                            <label className="form-label">
                                Experience (in years)
                            </label>

                            <div className="input-group">

                                <input
                                    type="number"
                                    name="experienceYears"
                                    placeholder="0"
                                    min="0"
                                    className="form-control"
                                    value={formData.experienceYears}
                                    onChange={handleChange}
                                />

                                <span className="input-group-text">
                                    Years
                                </span>

                                <select
                                    name="experienceMonths"
                                    className="form-select experience-months"
                                    value={formData.experienceMonths}
                                    onChange={handleChange}
                                >
                                    {Array.from(
                                        { length: 12 },
                                        (_, index) => (
                                            <option
                                                key={index}
                                                value={index}
                                            >
                                                {index}
                                            </option>
                                        )
                                    )}
                                </select>

                                <span className="input-group-text">
                                    Months
                                </span>

                            </div>
                        </div>

                        {/* Current Salary */}
                        <div className="col-md-6">
                            <label className="form-label">
                                Current Salary{" "}
                                <span className="text-danger">*</span>
                            </label>

                            <div className="input-group">

                                <select
                                    name="currentSalaryCurrency"
                                    className="form-select salary-currency"
                                    value={formData.currentSalaryCurrency}
                                    onChange={handleChange}
                                >
                                    <option value="INR">INR</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                </select>

                                <input
                                    type="number"
                                    name="currentSalary"
                                    min="0"
                                    required
                                    className="form-control"
                                    value={formData.currentSalary}
                                    onChange={handleChange}
                                />

                            </div>
                        </div>

                        {/* Expected Salary */}
                        <div className="col-md-6">
                            <label className="form-label">
                                Expected Salary{" "}
                                <span className="text-danger">*</span>
                            </label>

                            <div className="input-group">

                                <select
                                    name="expectedSalaryCurrency"
                                    className="form-select salary-currency"
                                    value={formData.expectedSalaryCurrency}
                                    onChange={handleChange}
                                >
                                    <option value="INR">INR</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                </select>

                                <input
                                    type="number"
                                    name="expectedSalary"
                                    min="0"
                                    required
                                    className="form-control"
                                    value={formData.expectedSalary}
                                    onChange={handleChange}
                                />

                            </div>
                        </div>

                        {/* Available */}
                        <div className="col-md-6">
                            <label className="form-label">
                                Available To Join (in days){" "}
                                <span className="text-danger">*</span>
                            </label>

                            <input
                                required
                                type="number"
                                name="availableToJoin"
                                min="0"
                                className="form-control"
                                value={formData.availableToJoin}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Current Location */}
                        <div className="col-md-6">
                            <label className="form-label">
                                Current Location
                            </label>

                            <input
                                type="text"
                                name="currentLocation"
                                className="form-control"
                                value={formData.currentLocation}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* ================= EXPERIENCE DETAILS ================= */}
                    <div className="mt-5">

                        <h6 className="fw-bold mb-3">
                            Experience Details{" "}
                            <span className="text-danger">*</span>
                        </h6>

                        <div className="bg-light border rounded-0 p-4">

                            <div className="row g-4">

                                {/* Company */}
                                <div className="col-md-6">
                                    <label className="form-label">
                                        Company Name
                                    </label>

                                    <input
                                        required
                                        type="text"
                                        name="companyName"
                                        className="form-control"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Job Title */}
                                <div className="col-md-6">
                                    <label className="form-label">
                                        Job Title
                                    </label>

                                    <input
                                        required
                                        type="text"
                                        name="jobTitle"
                                        className="form-control"
                                        value={formData.jobTitle}
                                        // value={formData.jobTitle}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Working */}
                            <div className="form-check mt-3 mb-3">

                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="currentlyWorking"
                                    checked={currentlyWorking}
                                    onChange={(e) =>
                                        setCurrentlyWorking(
                                            e.target.checked
                                        )
                                    }
                                />

                                <label
                                    htmlFor="currentlyWorking"
                                    className="form-check-label"
                                >
                                    Currently working here
                                </label>
                            </div>

                            <div className="row g-4">

                                {/* Joining */}
                                <div className="col-md-6">
                                    <label className="form-label">
                                        Date of Joining
                                    </label>

                                    <input
                                        required
                                        type="date"
                                        name="joiningDate"
                                        className="form-control"
                                        value={formData.joiningDate}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Relieving */}
                                <div className="col-md-6">
                                    <label className="form-label">
                                        Date of Relieving
                                    </label>

                                    <input
                                        type="date"
                                        name="relievingDate"
                                        className="form-control"
                                        value={formData.relievingDate}
                                        onChange={handleChange}
                                        required={!currentlyWorking}
                                        disabled={currentlyWorking}
                                    />
                                </div>

                                {/* Location */}
                                <div className="col-md-6">
                                    <label className="form-label">
                                        Location
                                    </label>

                                    <input
                                        required
                                        type="text"
                                        name="experienceLocation"
                                        className="form-control"
                                        value={formData.experienceLocation}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="btn btn-link p-0 mt-2 text-decoration-none"
                        >
                            + Add Experience Details
                        </button>
                    </div>

                    {/* ================= EDUCATION DETAILS ================= */}
                    <div className="mt-5">

                        <h6 className="fw-bold mb-3">
                            Education Details{" "}
                            <span className="text-danger">*</span>
                        </h6>

                        <div className="bg-light border rounded-0 p-4">

                            <div className="row g-4">

                                {/* Course */}
                                <div className="col-md-6">
                                    <label className="form-label">
                                        Course
                                    </label>

                                    <input
                                        required
                                        type="text"
                                        name="course"
                                        className="form-control"
                                        placeholder="B.Tech"
                                        value={formData.course}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Branch */}
                                <div className="col-md-6">
                                    <label className="form-label">
                                        Branch/Specialization
                                    </label>

                                    <input
                                        required
                                        type="text"
                                        name="branch"
                                        className="form-control"
                                        placeholder="Computer Science"
                                        value={formData.branch}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Start */}
                                <div className="col-md-6">
                                    <label className="form-label">
                                        Start of Course
                                    </label>

                                    <input
                                        required
                                        type="date"
                                        name="courseStart"
                                        className="form-control"
                                        value={formData.courseStart}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* End */}
                                <div className="col-md-6">
                                    <label className="form-label">
                                        End of Course
                                    </label>

                                    <input
                                        required
                                        type="date"
                                        name="courseEnd"
                                        className="form-control"
                                        value={formData.courseEnd}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* College */}
                                <div className="col-md-6">
                                    <label className="form-label">
                                        University/ College
                                    </label>

                                    <input
                                        required
                                        type="text"
                                        name="university"
                                        className="form-control"
                                        placeholder="IIT, Mumbai"
                                        value={formData.university}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Location */}
                                <div className="col-md-6">
                                    <label className="form-label">
                                        Location
                                    </label>

                                    <input
                                        required
                                        type="text"
                                        name="educationLocation"
                                        className="form-control"
                                        value={formData.educationLocation}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="btn btn-link p-0 mt-2 text-decoration-none"
                        >
                            + Add Education Details
                        </button>
                    </div>

                    {/* ================= SKILLS ================= */}
                    <div className="mt-5">

                        <label className="form-label">
                            Skills{" "}
                            <span className="text-danger">*</span>
                        </label>

                        <input
                            required
                            type="text"
                            name="skills"
                            className="form-control"
                            placeholder="Add new skill"
                            value={formData.skills}
                            onChange={handleChange}
                        />
                    </div>

                    {/* ================= DOCUMENTS ================= */}
                    <div className="mt-5">

                        <label className="form-label d-block">
                            Additional Documents
                        </label>

                        <button
                            type="button"
                            className="btn btn-light border rounded-0 attachment-btn d-flex align-items-center gap-3"
                        >
                            <span className="attachment-plus">
                                +
                            </span>

                            <span className="text-start">
                                <span className="d-block text-primary">
                                    Add attachment
                                </span>

                                <small className="text-secondary">
                                    10MB max size
                                </small>
                            </span>
                        </button>
                    </div>

                    {/* ================= PRIVACY ================= */}
                    <div className="form-check mt-5">

                        <input
                            required
                            type="checkbox"
                            className="form-check-input"
                            id="privacyPolicy"
                            name="privacyPolicy"
                            checked={formData.privacyPolicy}
                            onChange={handleChange}
                        />

                        <label
                            htmlFor="privacyPolicy"
                            className="form-check-label small"
                        >
                            By applying, you hereby accept the data
                            processing terms under the{" "}

                            <span className="text-primary">
                                Privacy Policy
                            </span>{" "}

                            and give consent to processing of the data
                            as part of this job application.
                        </label>
                    </div>

                    {/* ================= CAPTCHA ================= */}
                    <div className="d-flex align-items-center gap-3 mt-3">

                        <span className="captcha-text">
                            Captcha Here
                        </span>

                        <button
                            type="button"
                            className="btn btn-link p-0 text-primary fs-5"
                        >
                            ↻
                        </button>

                        <input
                            required
                            type="text"
                            name="captcha"
                            className="form-control"
                            placeholder="Captcha"
                            value={formData.captcha}
                            onChange={handleChange}
                        />
                    </div>

                    {/* ================= APPLY ================= */}
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary mt-3 px-5">
                            Apply Now
                        </button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default ApplyJob;