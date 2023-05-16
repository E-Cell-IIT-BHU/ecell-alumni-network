import React from "react";
import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { firebaseDB } from "./lib/firebase";
const Amount = () => {

  const [totalAmount, setTotalAmount] = useState(0);
  const [investorCount, setInvestorCount] = useState(0);
  useEffect(() => {
    const db = firebaseDB;
    const amountRef = ref(db, "alumniNetwork/totalAmount2");
    const investorsRef = ref(db, "alumniNetwork/investors2");

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

  return (
    <>
      <div class="container px-4 pb-4">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3 border bg-light">
              {" "}
              <h5>Total Amount Committed: </h5>₹ {totalAmount}L
            </div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">
              {" "}
              <h5>Number of Investors Committed:</h5> {investorCount}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amount;
