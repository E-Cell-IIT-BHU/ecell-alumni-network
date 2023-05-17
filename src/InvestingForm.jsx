import React from "react";
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import "./css/form.scss"
import { ref, set, onValue } from "firebase/database";
import {firebaseDB} from "./lib/firebase";
import ContactUs from "./contactUs";
const FundingInitiative = () => {

  const [formDetails, setFormDetails] = useState({
    name: "",
    number: "",
    email: "",
    graduation_year_and_branch: "",
    time_slot_for_pitching: "",
    amount: "",
    NRE_NRO_account: "",
  });

  const [totalAmount, setTotalAmount] = useState(0);
  const [investorCount, setInvestorCount] = useState(0);
  useEffect(() => {
    const db = firebaseDB;
    const amountRef = ref(db, 'alumniNetwork/totalAmount2');
    const investorsRef = ref(db, 'alumniNetwork/investors2');
    
    // Listen for changes to the total amount
    onValue(amountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setTotalAmount(data);
      }
    });

    // Listen for changes to the number of investors
    onValue(investorsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setInvestorCount(data);
      }
    });
  }, []);



  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    setIsSubmitting(true);
    const db = firebaseDB;
    const amount = parseInt(formDetails.amount, 10);
    if(amount){
      set(
      ref(
        db,
        `alumniNetwork/fundingInitiativeForAlumni/${
          formDetails.name}_${formDetails.number
        }`
      ),
      {
        name: formDetails.name,
        number: formDetails.number,
        email: formDetails.email,
        graduation_year_and_branch: formDetails.graduation_year_and_branch,
        time_slot: formDetails.time_slot_for_pitching,
        amount: formDetails.amount,
        NRE_NRO_account: formDetails.NRE_NRO_account,
      }
    )
      .then(() => {
        setIsSubmitting(false);
        setFormDetails({
          name: "",
          number: "",
          email: "",
          graduation_year_and_branch: "",
          time_slot_for_pitching: "",
          amount: "",
          NRE_NRO_account: "",
        });
        alert("Form submitted successfully");
      })
      .catch((error) => {alert(error.message);
      });
      set(ref(db, 'alumniNetwork/totalAmount2'), totalAmount + amount);
           // Increment the investor count
      set(ref(db, 'alumniNetwork/investors2'), investorCount + 1);
    }

  }
  
  return (
    <>
      <form id="funding"
        className="cf teamExpansion-form"
        style={{ width: "95%", maxWidth: "800px" }}
        onSubmit={handleSubmit}
      >
        <h2 className="formHeading">Register as Investor | I-AAN</h2>
        <Row className="form-item">
          <label>
            <h5>
              Name <span style={{ color: "red" }}>*</span>
            </h5>
          </label>
          <input
            type="text"
            style={{ borderBottom: "2px solid grey" }}
            value={formDetails.name}
            placeholder="Ethan Hunt"
            onChange={(e) =>
              setFormDetails({ ...formDetails, name: e.target.value })
            }
            required
          />
        </Row>
        <Row className="form-item">
          <label>
            <h5>
              Whatsapp number
              <span style={{ color: "red" }}>*</span>
            </h5>
            <span>Please share WhatsApp number without +91</span>
          </label>
          <input
            type="text"
            placeholder="9876543210"
            value={formDetails.number}
            onChange={(e) =>
              setFormDetails({
                ...formDetails,
                number: e.target.value,
              })
            }
            style={{ borderBottom: "2px solid grey" }}
            required
          />
        </Row>
        <Row className="form-item">
          <label>
            <h5>
              Email ID <span style={{ color: "red" }}>*</span>
            </h5>
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={formDetails.email}
            onChange={(e) =>
              setFormDetails({
                ...formDetails,
                email: e.target.value,
              })
            }
            style={{ borderBottom: "2px solid grey" }}
            required
          />
        </Row>
        <Row className="form-item">
          <label>
            <h5>
              Graduation Year and Branch <span style={{ color: "red" }}>*</span>
            </h5>
          </label>
          <input
            type="text"
            // placeholder="example@gmail.com"
            value={formDetails.graduation_year_and_branch}
            onChange={(e) =>
              setFormDetails({
                ...formDetails,
                graduation_year_and_branch: e.target.value,
              })
            }
            style={{ borderBottom: "2px solid grey" }}
            required
          />
        </Row>
        <Row
          className="form-item"
          onChange={(e) =>
            setFormDetails({
              ...formDetails,
              time_slot_for_pitching: e.target.value,
            })
          }
          value={formDetails.time_slot_for_pitching}
        >
          <label>
            <h5>
              Time slot you would prefer for Pitch Days{" "}
              {/* <span style={{ color: "red" }}>*</span> */}
            </h5>
          </label>
          <Row className="checkbox-option">
            <input type="radio" value="Friday 8-10 PM IST" name="Time slot" />
            <span> Friday 8-10 PM IST</span>
          </Row>
          <Row className="checkbox-option">
            <input type="radio" value="Saturday 8-10 AM IST" name="Time slot" />
            <span> Saturday 8-10 AM IST</span>
          </Row>
          <Row className="checkbox-option">
            <input type="radio" value="Sunday 6-8 PM IST" name="Time slot" />
            <span> Sunday 6-8 PM IST</span>
          </Row>
        </Row>
        <Row
          className="form-item"
          onChange={(e) =>
            setFormDetails({
              ...formDetails,
              amount: e.target.value,
            })
          }
          value={formDetails.amount}
        >
          <label>
            <h5>
              {`Total amount you can commit to all deals combined ( the plan is to
              raise 25L to 1 Cr each for 10-15 companies in 2022 )`}
              {/* <span style={{ color: "red" }}>*</span> */}
            </h5>
          </label>
          <Row className="checkbox-option">
            <input type="radio" value="5L" name="amount" />
            <span> 5L</span>
          </Row>
          <Row className="checkbox-option">
            <input type="radio" value="10L" name="amount" />
            <span> 10L</span>
          </Row>
          <Row className="checkbox-option">
            <input type="radio" value="15L" name="amount" />
            <span> 15L</span>
          </Row>
          <Row className="checkbox-option">
            <input type="radio" value="Over 20L" name="amount" />
            <span> Over 20L</span>
          </Row>
        </Row>
        {/* <Row>
        <input
          type="text"
          value={formDetails.amount}
          onChange={(e) => setFormDetails({ ...formDetails, amount: e.target.value })}
          placeholder="Amount"
          required
        />
        </Row> */}
        <Row
          className="form-item"
          onChange={(e) =>
            setFormDetails({
              ...formDetails,
              NRE_NRO_account: e.target.value,
            })
          }
          value={formDetails.NRE_NRO_account}
        >
          <label>
            <h5>
              {`For alums outside India do you have a NRE/NRO account? ( taking FDI from foreign accounts will be a hassle for startups at this stage )`}
              {/* <span style={{ color: "red" }}>*</span> */}
            </h5>
          </label>
          <Row className="checkbox-option">
            <input type="radio" value="Yes" name="NRE/NRO account"  />
            <span> Yes</span>
          </Row>
          <Row className="checkbox-option">
            <input type="radio" value="No" name="NRE/NRO account" />
            <span> No</span>
          </Row>
        </Row>
        <input
          type={isSubmitting ? "button" : "submit"}
          value={isSubmitting ? "Submitting..." : "Submit"}
          style={isSubmitting ? { background: "grey" } : {}}
          id="input-submit"
        />
      </form>
      <ContactUs />
    </>
  );
};

export default FundingInitiative;