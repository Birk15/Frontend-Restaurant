import React, { useState, useRef } from "react";
import axios from "axios";
import { Button, FormControl } from "react-bootstrap";
import "../css/components.css";

const Reservieren = () => {
  const [showDiv, setShowDiv] = useState(false);

  const personInputRef = useRef();

  const addReservation = async (event) => {
    event.preventDefault();

    const person_count = personInputRef.current.value;

    const newReservation = { person_count };
    try {
      const response = await axios.post(
        "http://localhost:5000/addReservation",
        newReservation
      );
      console.log(response.data.message);
    } catch (error) {
      console.log("Fehler beim hinzufügen der Registration", error);
    }
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      setShowDiv(false);
    }
  };

  return (
    <div className="parent">
      <div className="reservieren">
        <h1>Reservieren</h1>
        <Button
          onClick={() => setShowDiv(true)}
          style={{ marginTop: 30 }}
          variant="outline-dark"
        >
          JETZT RESERVIEREN
        </Button>

        {showDiv && (
          <div
            onClick={handleOutsideClick}
            style={{
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100vw",
              height: "100vh",
              position: "fixed",
              backgroundColor: "#00000099",
              top: 0,
              left: 0,
            }}
          >
            <form
              onSubmit={addReservation}
              style={{
                marginTop: "5vh",
                width: 500,
                height: "90vh",
                padding: 40,
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 60,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 20,
                  backgroundColor: "blueviolet",
                  borderRadius: 30,
                  padding: 30,
                }}
              >
                <label for="person-count">Wie viele Personen?</label>
                <FormControl
                  style={{ width: 100 }}
                  id="person-count"
                  ref={personInputRef}
                  type="number"
                ></FormControl>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 20,
                  backgroundColor: "blueviolet",
                  borderRadius: 30,
                  padding: 30,
                }}
              >
                <label>Wähle eine Zeitspanne:</label>
                <select id="reservation-time" name="reservation-time">
                  <option value="16:00-17:30">16:00 - 17:30</option>
                  <option value="17:30-19:00">17:30 - 19:00</option>
                  <option value="19:00-20:30">19:00 - 20:30</option>
                  <option value="20:30-22:00">20:30 - 22:00</option>
                </select>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 20,
                  backgroundColor: "blueviolet",
                  borderRadius: 30,
                  padding: 30,
                }}
              >
                <label for="reservation-date">Wähle den Tag:</label>
                <select id="reservation-date">
                  <option value="Heute">Heute</option>
                  <option value="Morgen">Morgen</option>
                  <option value="Übermorgen">Übermorgen</option>
                </select>
              </div>

              <Button variant="outline-dark" type="submit">
                Reservieren
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservieren;
