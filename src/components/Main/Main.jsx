import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

export const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loadings,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Developer's.</span>
              </p>
              <p className="greetPara2">How Can I Help You Today?</p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() => {
                  onSent(
                    "Suggest beautiful places to visit in manali bike ride?"
                  );
                }}
              >
                <p>Suggest beautiful places to see on an upcoming road trip.</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() => {
                  onSent("Briefly summarize the concept: Urban Planning?");
                }}
              >
                <p>
                  Briefly summarize the concept: <b>"Urban Planning".</b>
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() => {
                  onSent(
                    "Brainstrom team building activities for our work experiences."
                  );
                }}
              >
                <p>
                  Brainstrom team building activities for our work experiences.
                </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() => {
                  onSent("Introduction of Linked List data structure.");
                }}
              >
                <p>Introduction of Linked List data structure.</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loadings ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <form
            className="search-box"
            onSubmit={(event) => {
              event.preventDefault(); // Prevent the default form submission
              onSent();
            }}
          >
            <input
              type="text"
              name=""
              placeholder="Ask Gemini"
              id=""
              onChange={(event) => setInput(event.target.value)}
              value={input}
            />
            <div className="">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </form>
          <p className="bottom-info">
            Gemini may display inaccurate information, such as the number of
            bytes and also including about the people.
          </p>
        </div>
      </div>
    </div>
  );
};
