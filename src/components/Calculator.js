import Display from './Display';
import Button from './Button';

function Calculator() {
  return (
    <div className="Calculator">
      <header>
        <h1>Math Magicians by Jose Delphin</h1>
      </header>
      <div className="btnContainer">
        <Display />
        <div className="pnlButtonsContainer">
          <div className="pnlMainButtons">
            <div className="pnlRow">
              <Button name="AC" />
              <Button name="+/-" />
              <Button name="%" />
            </div>
            <div className="pnlRow">
              <Button name="7" />
              <Button name="8" />
              <Button name="9" />
            </div>
            <div className="pnlRow">
              <Button name="4" />
              <Button name="5" />
              <Button name="6" />
            </div>
            <div className="pnlRow">
              <Button name="1" />
              <Button name="2" />
              <Button name="3" />
            </div>
            <div className="pnlRow">
              <div className="btnCero">
                <Button name="0" />
              </div>
              <Button name="." />
            </div>
          </div>
          <div className="pnlRightButtons">
            <Button name="" />
            <Button name="*" />
            <Button name="-" />
            <Button name="+" />
            <Button name="=" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
