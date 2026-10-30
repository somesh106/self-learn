const express = require('express');
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const { PDFParse } = require("pdf-parse");

const app = express();
// const portNo = 8080;                                 // fixed port number
const portNo = process.env.PORT || 8080;

const upload = multer({
    dest: "uploads/",
    limits: {
        fileSize: 10 * 1024 * 1024
    }
});

app.use(cors());
app.use(express.json());


const jobsData = [
    {
        id: 1,
        title: "React Developer",
        company: "Google",
        location: "Remote",
        type: "Full Time",
        date: "2026-08-18",
        description: "Build and maintain modern web applications using React.",
        applyLink: "https://www.google.com/about/careers/applications/jobs/results/",
    },
    {
        id: 2,
        title: "Frontend Developer",
        company: "Microsoft",
        location: "Delhi",
        type: "Part Time",
        date: "2026-08-17",
        description: "Develop responsive and user-friendly interfaces for web applications.",
        applyLink: "https://jobs.careers.microsoft.com/",
    },
    {
        id: 3,
        title: "UI Developer",
        company: "Amazon",
        location: "Bangalore",
        type: "Internship",
        date: "2026-08-16",
        description: "Work with the design and development team to create engaging user interfaces.",
        applyLink: "https://www.amazon.jobs/",
    },
    {
        id: 4,
        title: "JavaScript Developer",
        company: "Meta",
        location: "Remote",
        type: "Full Time",
        date: "2026-08-15",
        description: "Develop scalable web applications using modern JavaScript technologies.",
        applyLink: "https://www.metacareers.com/jobs/",
    },
    {
        id: 5,
        title: "Backend Developer",
        company: "IBM",
        location: "Pune",
        type: "Full Time",
        date: "2026-08-14",
        description: "Design and develop reliable backend services and APIs.",
        applyLink: "https://www.ibm.com/careers/",
    },
    {
        id: 6,
        title: "Python Developer",
        company: "Infosys",
        location: "Hyderabad",
        type: "Full Time",
        date: "2026-08-13",
        description: "Build backend applications and automation tools using Python.",
        applyLink: "https://www.infosys.com/careers/",
    },
    {
        id: 7,
        title: "Full Stack Developer",
        company: "TCS",
        location: "Mumbai",
        type: "Full Time",
        date: "2026-08-12",
        description: "Develop complete web applications using frontend and backend technologies.",
        applyLink: "https://www.tcs.com/careers",
    },
    {
        id: 8,
        title: "Software Engineer",
        company: "Apple",
        location: "Bangalore",
        type: "Full Time",
        date: "2026-08-11",
        description: "Design, develop, and test high-quality software solutions.",
        applyLink: "https://www.apple.com/careers/",
    },
    {
        id: 9,
        title: "Web Developer",
        company: "Wipro",
        location: "Chennai",
        type: "Part Time",
        date: "2026-08-10",
        description: "Create and maintain responsive websites for different business needs.",
        applyLink: "https://careers.wipro.com/",
    },
    {
        id: 10,
        title: "Frontend Intern",
        company: "Adobe",
        location: "Noida",
        type: "Internship",
        date: "2026-08-09",
        description: "Assist in developing modern and interactive frontend applications.",
        applyLink: "https://www.adobe.com/careers.html",
    },
    {
        id: 11,
        title: "Node.js Developer",
        company: "Flipkart",
        location: "Bangalore",
        type: "Full Time",
        date: "2026-08-08",
        description: "Build scalable backend services using Node.js and related technologies.",
        applyLink: "https://www.flipkartcareers.com/",
    },
    {
        id: 12,
        title: "Software Developer",
        company: "Accenture",
        location: "Gurgaon",
        type: "Full Time",
        date: "2026-08-07",
        description: "Develop software solutions and collaborate with technical teams.",
        applyLink: "https://www.accenture.com/in-en/careers",
    },
    {
        id: 13,
        title: "UI/UX Designer",
        company: "Zomato",
        location: "Delhi",
        type: "Full Time",
        date: "2026-08-06",
        description: "Design intuitive and engaging user experiences for digital products.",
        applyLink: "https://www.zomato.com/careers",
    },
    {
        id: 14,
        title: "React Intern",
        company: "Swiggy",
        location: "Bangalore",
        type: "Internship",
        date: "2026-08-05",
        description: "Learn and contribute to React-based web applications with experienced developers.",
        applyLink: "https://careers.swiggy.com/",
    },
    {
        id: 15,
        title: "Data Analyst",
        company: "Deloitte",
        location: "Mumbai",
        type: "Full Time",
        date: "2026-08-04",
        description: "Analyze business data and create meaningful reports and insights.",
        applyLink: "https://www.deloitte.com/careers",
    },
    {
        id: 16,
        title: "Mobile App Developer",
        company: "Paytm",
        location: "Noida",
        type: "Full Time",
        date: "2026-08-03",
        description: "Develop and maintain mobile applications for Android and iOS platforms.",
        applyLink: "https://paytm.com/careers",
    },
    {
        id: 17,
        title: "Java Developer",
        company: "HCLTech",
        location: "Chennai",
        type: "Full Time",
        date: "2026-08-02",
        description: "Develop enterprise applications using Java and modern frameworks.",
        applyLink: "https://www.hcltech.com/careers",
    },
    {
        id: 18,
        title: "MERN Stack Developer",
        company: "Razorpay",
        location: "Bangalore",
        type: "Full Time",
        date: "2026-08-01",
        description: "Build scalable web applications using MongoDB, Express, React, and Node.js.",
        applyLink: "https://razorpay.com/jobs/",
    },
    {
        id: 19,
        title: "Frontend Intern",
        company: "Cognizant",
        location: "Pune",
        type: "Internship",
        date: "2026-07-31",
        description: "Work with developers to build responsive and interactive web interfaces.",
        applyLink: "https://careers.cognizant.com/",
    },
    {
        id: 20,
        title: "Cloud Engineer",
        company: "Oracle",
        location: "Hyderabad",
        type: "Full Time",
        date: "2026-07-30",
        description: "Design and manage cloud infrastructure and scalable cloud solutions.",
        applyLink: "https://www.oracle.com/careers/",
    },
];

// Define a route for GET requests to the root URL
app.listen(portNo, () => { console.log(`Server is Running on Port No.  -  ${portNo}`); })

// Start the server
app.get("/getData", (request, response) => {
    try {
        response.status(200).json({ data: jobsData });
        // response.send(jobsData);
    } catch (err) {
        console.log(err);
    }
});

app.get("/getData/:id", (request, response) => {
    const id = Number(request.params.id);
    const job = jobsData.find((item) => item.id === id);

    if (!job) {
        return response.status(404).json({
            message: "Job Not Found"
        });
    }
    response.status(200).json({
        data: job
    });
})

//used to bring the text of resume to froont-end
app.post("/parse-resume", upload.single("resume"), async (request, response) => {
    try {
        if (!request.file) {
            return response.status(400).json({
                message: "Resume is Required"
            });
        }

        const pdfBuffer = fs.readFileSync(request.file.path);

        const parser = new PDFParse({ data: pdfBuffer });
        const result = await parser.getText();

        console.log("Resume Text:", result.text);

        await parser.destroy();

        response.status(200).json({
            message: "Resume Parsed Successfully",
            text: result.text
        });

    } catch (error) {
        console.error("Resume Parsing Error:", error);

        response.status(500).json({
            message: "Failed to Parse Resume"
        });
    }
});


app.post("/apply", upload.single("resume"), async (request, response) => {
    try {

        // if (request.file) {
        //     const pdfBuffer = fs.readFileSync(request.file.path);
        //     const parser = new PDFParse({ data: pdfBuffer });
        //     const result = await parser.getText();
        //     console.log("Resume Text:", result.text);

        //     await parser.destroy();
        // }

        const applicationData = request.body;
        console.log("Application Data:", applicationData);

        response.status(201).json({
            message: "Application submitted successfully",
            data: applicationData
        });

    } catch (error) {
        console.error("Application Error:", error);

        response.status(500).json({
            message: "Application submission failed"
        });
    }
});
