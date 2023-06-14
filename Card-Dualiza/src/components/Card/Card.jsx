import React, { useEffect } from "react";
const Card = () => {
  useEffect(() => {
    document.getElementById("cards").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);

  return (
    <>
      <div id="cards">
        <div className="card">
          <div className="card-content">
            <div className="card-image">
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Card 1</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-image">
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Card 2</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-image">
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Card 3</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-image">
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Card 4</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-image">
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Card 5</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-image">
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Card 6</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
