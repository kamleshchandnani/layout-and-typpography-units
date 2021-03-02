import React from "react";
import "./styles.css";
const scale = {
  1: {
    px: "16px",
    percentage: "100%"
  },
  2: {
    px: "18px",
    percentage: "112.5%"
  },
  3: {
    px: "24px",
    percentage: "150%"
  },
  4: {
    px: "32px",
    percentage: "200%"
  }
};
export default function App() {
  const [step, setStep] = React.useState(1);
  const changeStep = (modifier) => {
    if (modifier === "increment") {
      setStep((currentStep) => {
        const newStep = currentStep + 1;
        document.documentElement.style.setProperty(
          "--font-size",
          scale[newStep].percentage
        );
        return newStep;
      });
    } else if (modifier === "decrement") {
      setStep((currentStep) => {
        const newStep = currentStep - 1;
        document.documentElement.style.setProperty(
          "--font-size",
          scale[newStep].percentage
        );
        return newStep;
      });
    }
  };
  return (
    <>
      <div className="App">
        <h3>Testing scaling with layout and typography.</h3>
        <p>Change the steps to increase/decrease the font size</p>
        <button
          disabled={step === 1}
          className="stepper"
          onClick={() => changeStep("decrement")}
        >
          -
        </button>
        <span className="step-count">{scale[step].px}</span>
        <button
          disabled={step === 4}
          className="stepper"
          onClick={() => changeStep("increment")}
        >
          +
        </button>
        <p className="p1">Text with rem font size</p>
        <p className="p2">Text with px font size</p>
      </div>
      <div className="align">
        <button className="Button1">
          <div className="Text">layout rem, text rem</div>
        </button>
        <button className="Button2">
          <div className="Text">layout px, text rem</div>
        </button>
        <button className="Button4">
          <div className="Text">layout px, text px</div>
        </button>
        <button className="Button3">
          <div className="Text">layout rem, text px</div>
        </button>
        {/* <button className="Button5">
          <div className="Text">Fixed height CTA, w/o padding, text px</div>
        </button> */}
      </div>
      <br />
      <br />
      <br />
      <br />
      <h2>Layout absolute units, typography relative unit</h2>
      <div>
        <div className="horizontal-bar">Hero content</div>
        <div className="tile-layout">
          <div className="tile">Tile Content</div>
          <div className="tile">Tile Content</div>
          <div className="tile">Tile Content</div>
          <div className="tile">Tile Content</div>
          <div className="tile">Tile Content</div>
          <div className="tile">Tile Content</div>
          <div className="tile">Tile Content</div>
        </div>
        <div className="horizontal-bar">Footer content</div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h2>Layout relative units, typography relative unit</h2>
      <div>
        <div className="horizontal-bar rem-bar">Hero content</div>
        <div className="tile-layout rem-tile-layout">
          <div className="tile rem-tile">Tile Content</div>
          <div className="tile rem-tile">Tile Content</div>
          <div className="tile rem-tile">Tile Content</div>
          <div className="tile rem-tile">Tile Content</div>
          <div className="tile rem-tile">Tile Content</div>
          <div className="tile rem-tile">Tile Content</div>
          <div className="tile rem-tile">Tile Content</div>
        </div>
        <div className="horizontal-bar rem-bar">Footer content</div>
      </div>
    </>
  );
}
