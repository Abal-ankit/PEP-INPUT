import React from 'react';

function Interest() {
    const principal = 100000;
    const first = () => {
        const maturityAmount = 0.01 * principal + principal;
        alert("You will have the following amount in total after 6 months: " + maturityAmount);
    }

    const second = () => {
        const maturityAmount = 0.05 * principal + principal;
        alert("You will have the following amount in total after 1 year : " + maturityAmount);
    }
    const third = () => {
        const maturityAmount = 0.055 * principal * 2 + principal;
        alert("You will have the following amount in total after 2 year : " + maturityAmount);
    }
    const fourth = () => {
        const maturityAmount = 0.06 * principal * 5 + principal;
        alert("You will have the following amount in total after 5 year : " + maturityAmount);
    }
  return (
    <div>
      <input type="button" onClick={first} value="For 6 months" />
      <input type="button" onClick={second} value="For 1 year" />
      <input type="button" onClick={third} value="For 2 years" />
      <input type="button" onClick={fourth} value="For 5 years" />
    </div>
  );
}

export default Interest;
