import React from 'react'
import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import ContactUs from './contactUs'
import { ref, set } from "firebase/database";
import { firebaseDB } from "./lib/firebase";
import { getStorage, ref as firebaseStorageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import "./css/form.scss"
function Raise_fund() {


    const [formDetails, setFormDetails] = useState({
        email: "",
        founderName: "",
        PhoneNumber: "",
        LinkedIn_Profile: "",
        No_of_Cofounder: "",
        Previous_funding: "",
        Funding_to_raise: "",
        part_or_full_time: "",
        startUp_name: "",
        company_website: "",
        sector: "",
        stage_of_startup: "",
        ides_description: "",
        pdf_file: "",
        suggestion: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [file, setFile] = useState(null);

    const upload = () => {
        setUploading(true);

        // console.log(file);
        // console.log(file.name);
        const storage = getStorage();
        const pdfName = file.name;
        const storageRef = firebaseStorageRef(
            storage,
            `abstracts/${pdfName}`
        )

        uploadBytes(storageRef, file).then((snap) => {
            getDownloadURL(
                firebaseStorageRef(
                    storage,
                    `abstracts/${pdfName}`
                )
            )
                .then((pdf) => {
                    setUploading(false);
                    alert("Pdf Uploaded Successully");
                    setFormDetails({ ...formDetails, pdf_file: pdf });

                })
                .catch((e) => alert(e))
        })

        //console.log(formDetails);

    }


    const handleSubmit = (e) => {

        setIsSubmitting(true);
        e.preventDefault();
        if( formDetails.pdf_file = "" )
        {
            alert("Please Upload Your Abstract");
            return;
        }
        console.log(formDetails);

        const db = firebaseDB;
        set(
            ref(
                db,
                `alumniNetwork/funding_Raise/${formDetails.startUp_name}_${formDetails.founderName}`
            ),
            {
                email: formDetails.email,
                founderName: formDetails.founderName,
                PhoneNumber: formDetails.PhoneNumber,
                LinkedIn_Profile: formDetails.LinkedIn_Profile,
                No_of_Cofounder: formDetails.No_of_Cofounder,
                Previous_funding: formDetails.Previous_funding,
                Funding_to_raise: formDetails.Funding_to_raise,
                part_or_full_time: formDetails.part_or_full_time,
                startUp_name: formDetails.startUp_name,
                company_website: formDetails.company_website,
                sector: formDetails.sector,
                stage_of_startup: formDetails.stage_of_startup,
                ides_description: formDetails.ides_description,
                pdf_file: formDetails.pdf_file,
                suggestion: formDetails.suggestion,
            }
        ).then(() => {

            setIsSubmitting(false);
            setFormDetails({
                email: "",
                founderName: "",
                PhoneNumber: "",
                LinkedIn_Profile: "",
                No_of_Cofounder: "",
                Previous_funding: "",
                Funding_to_raise: "",
                part_or_full_time: "",
                startUp_name: "",
                company_website: "",
                sector: "",
                stage_of_startup: "",
                ides_description: "",
                pdf_file: "",
                suggestion: "",
            })
            alert("Form Submitted Successfully");

        })
            .catch((e) => {
                setIsSubmitting(false);
                //console.log(e);
                alert(e.message);
            })
    }


    return (
        <>
            <form id="raise_funding"
                className="cf teamExpansion-form"
                style={{ width: "95%", maxWidth: "800px" }}
                onSubmit={handleSubmit}
                autoComplete="on"
            >
                <h2 className="formHeading">Raise Funds | IAAN</h2>
                <Row className="form-item">
                    <label>
                        <h5>
                            Email <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="email"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        value={formDetails.email}
                        placeholder = "abc@company.com"
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, email: e.target.value })
                        }
                        }
                    />
                </Row>
                <Row className="form-item">
                    <label>
                        <h5>
                            Founder's Name <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="text"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        value={formDetails.founderName}
                        placeholder = "Ethan Hunt"
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, founderName: e.target.value })
                        }
                        }
                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            LinkedIn Profile <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="url"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        value={formDetails.LinkedIn_Profile}
                        placeholder = "https://linkedin.com/in/link"
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, LinkedIn_Profile: e.target.value })
                        }
                        }
                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            Contact Number <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="text"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        value={formDetails.PhoneNumber}
                        placeholder = "8765741289"
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, PhoneNumber: e.target.value })
                        }
                        }
                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            No of Cofounder <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="number"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        value={formDetails.No_of_Cofounder}
                        placeholder = "No. of Co-founders"
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, No_of_Cofounder: e.target.value })
                        }
                        }
                    />
                </Row>
                <Row
                    className="form-item"
                    value={formDetails.part_or_full_time}
                    onChange={(e) => {
                        setFormDetails({ ...formDetails, part_or_full_time: e.target.value })
                    }
                    }
                >
                    <label>
                        <h5>
                            Working on Startup Full/Part Time <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <Row className="checkbox-option">
                        <input type="radio" value="Part Time" name="Part/Full" />
                        <span>Part Time</span>
                    </Row>
                    <Row className="checkbox-option">
                        <input type="radio" value="Full Time" name="Part/Full" />
                        <span> Full Time</span>
                    </Row>
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            Startup Name <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="text"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        placeholder='Your StartUp Name'
                        value={formDetails.startUp_name}
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, startUp_name: e.target.value })
                        }
                        }
                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            Company Website/LinkedIn Profile <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="url"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        value={formDetails.company_website}
                        placeholder="https://linkedin.com/company/name"
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, company_website: e.target.value })
                        }
                        }
                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            Sector of Startup <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="text"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        placeholder= "Edtech/ Fintech/ Agritech/ etc.."
                        value={formDetails.sector}
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, sector: e.target.value })
                        }
                        }
                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            Stage of Startup <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="text"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        placeholder='Pre-Seed/ Seed/ SeriesA/ etc..'
                        value={formDetails.stage_of_startup}
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, stage_of_startup: e.target.value })
                        }
                        }
                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            Idea Description <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="text"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        value={formDetails.ides_description}
                        placeholder="Description of your startup idea"
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, ides_description: e.target.value })
                        }
                        }

                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            Funding Raised Previously <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="text"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        value={formDetails.Previous_funding}
                        placeholder="Have you raised any amount so far ?? "
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, Previous_funding: e.target.value })
                        }
                        }

                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            Funding looking to raise <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="text"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        placeholder="How much amount are you looking to raise? (in INR)"
                        value={formDetails.Funding_to_raise}
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, Funding_to_raise: e.target.value })
                        }
                        }
                    />
                </Row>
                <Row className="form-item file">
                    <label>
                        <h5>
                            Upload Your Abstract <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="file"
                        accept="application/pdf"
                        required
                        onChange={(e) => { setFile(e.target.files[0]) }}
                    />
                    <button 
                        id = "upload"
                        onClick={upload}
                        disabled = {uploading ?true: false}
                        style={uploading ? { background: "grey" } : {}}
                         >
                         Upload </button>
                </Row>
                <Row className="form-item">
                    <label>
                        <h5>
                            Any Suggestion
                        </h5>
                    </label>
                    <textarea
                        name="fck"
                        id="ff"
                        cols="30"
                        rows="10"
                        style={{ border: "2px solid grey" }}
                        value={formDetails.suggestion}
                        placeholder="Any suggestion you want to give us"
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, suggestion: e.target.value })
                        }
                        }
                    ></textarea>
                </Row>
                <span >Please fill out all the fields before submiting that are marked with <span style={{ color: "red" }}>*</span> </span>
                <input
                    type={isSubmitting ? "button" : "submit"}
                    value={isSubmitting ? "Submitting..." : "Submit"}
                    style={isSubmitting ? { background: "grey" } : {}}
                    id="input-submit"
                />

            </form>
            <ContactUs />
        </>
    )
}

export default Raise_fund
