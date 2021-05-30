import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const TipSection = (props ) => {
    const billAmount = props.billAmount && !isNaN(props.billAmount) ? parseFloat(props.billAmount).toFixed(2) : '';
    const tipPercent = props.serviceQuality ? props.tipPercent * 100 : '';
    const tipAmount = !isNaN(props.tipAmount) && props.isCalculated ? props.tipAmount : '';
    const totalAmount = !isNaN(props.totalAmount) && props.isCalculated ? props.totalAmount: '';

    return (
        <div className="card m-5 p-2">
              <p className="lead">Bill Amount: <strong>${billAmount}</strong></p>
              <p className="lead">Tip Percent: <strong>{tipPercent}%</strong></p>
              <p className="lead">Tip Amount: <strong>${tipAmount}</strong></p>
              <p className="lead">Your total bill amount is: <strong>${totalAmount}</strong></p>
        </div>
    )
}

export default TipSection;