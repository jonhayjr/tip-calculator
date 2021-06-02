import React, {Component} from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

//Import components
import TipSection from './TipSection';

export default class TipForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            billAmount: '',
            serviceQuality: '',
            tipPercent: '',
            tipAmount: '',
            totalAmount: '',
            isCalculated: false,
            isValidNumber: true,
            isShowing: true
        };
    }

    //Function that determines tip percent based on quality
    tipAmount = (quality) => {
        if (quality === 'Great') {
            return 0.25;
        } else if (quality === 'Good') {
            return 0.15;
        } else if (quality === 'Okay') {
            return 0.10;
        } else if (quality === 'Bad') {
            return 0.05;
        } else {
            return 0;
        }
    }

    //Calculates tip and totalsAmounts
    calculateTipAndTotalBillAmount = (serviceQuality, bill) => {
        //Update tipPercent if serviceQuality changed
        const tipPercent = this.state.serviceQuality !== serviceQuality ? this.tipAmount(serviceQuality) : this.state.tipPercent;
        const billAmount = parseFloat(bill).toFixed(2);
        const tipAmount = (tipPercent * billAmount).toFixed(2);
        const totalAmount = (parseFloat(tipAmount) + parseFloat(billAmount)).toFixed(2);
        this.setState({tipAmount: tipAmount, tipPercent: tipPercent, totalAmount: totalAmount, serviceQuality: serviceQuality});
    }

  handleChange = (event) => {
      const name = event.target.name;
      let value = event.target.value;

      //Intialize isValidNumber variable with a value of true
      let isValidNumber = true;
    
      //If billAmount is not a number, set isValidNumber variable to 0.
      if (name === 'billAmount' && isNaN(event.target.value)) {
          isValidNumber = false;
      }

      //If billAmount is invalid, update value to blank.  Use the event.target.value in all other scenarios.
      if (name === 'billAmount' && !isValidNumber) {
        value = '';
      } 
      //Calculates tip percent based on service quality value
      const tipPercent = name === 'serviceQuality' ? this.tipAmount(value) : this.state.tipPercent;

      //Set state for input value and isValidNumber value.
      this.setState({[name]: value, isValidNumber: isValidNumber, tipPercent: tipPercent});

      //When bill amount is updated and serviceQuality value exists and number is valid, calculates tip amounts.  When service quality is updated and billAmount value exists and number is valid, calculates tip amounts.
      if (this.state.billAmount !== value && name === 'billAmount' && this.state.serviceQuality && isValidNumber) {
        this.calculateTipAndTotalBillAmount(this.state.serviceQuality, value)
      } else if (this.state.serviceQuality !== value && name === 'serviceQuality' && this.state.billAmount && isValidNumber) {
        this.calculateTipAndTotalBillAmount(value, this.state.billAmount);
      } 

  }

  handleSubmit = (event) => {
    event.preventDefault();

    //Only calculates tip amounts when bill amount is a valid number.
    if (this.state.isValidNumber) {
        this.calculateTipAndTotalBillAmount(this.state.serviceQuality, this.state.billAmount);
        this.setState({isCalculated: true});
    }
  }

  handleReset = () => {
      this.setState(
             {
            billAmount: '',
            serviceQuality: '',
            tipPercent: '',
            tipAmount: '',
            totalAmount: '',
            isCalculated: false,
            isValidNumber: true
        }
      )
  }

  //Show or Hide form field
  showOrHide = () => {
      this.setState({isShowing: !this.state.isShowing})
  }

    render() {
        
        return (
        <Container>
            <h1>Tip Calculator</h1>
            {this.state.isShowing && 
            (<Form>
                <Form.Group controlId="formGroupBill">
                    <Form.Label>Bill Amount</Form.Label>
                    <Form.Control
                    type="number"
                    name='billAmount' 
                    value={this.state.billAmount} 
                    onChange={this.handleChange} 
                    placeholder="Enter bill amount" />
                </Form.Group>
                <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                How was the service?
                </Form.Label>
                <Form.Control
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom
                    name='serviceQuality'
                    value={this.state.serviceQuality}
                    onChange={this.handleChange}
                >
                    <option value="">Choose...</option>
                    <option value="Great">Great - 25%</option>
                    <option value="Good">Good - 15%</option>
                    <option value="Okay">Okay - 10%</option>
                    <option value="Bad">Bad - 5%</option>
                    <option value="Horrible">Horrible - 0%</option>
                </Form.Control>
            </Form>)
            }
            <Button className="mt-3" type="submit" variant={this.state.isShowing ? 'dark': 'light'} onClick={this.showOrHide}>{this.state.isShowing ? 'Hide' : 'Show'}</Button>

            <TipSection billAmount={this.state.billAmount} tipPercent={this.state.tipPercent} tipAmount={this.state.tipAmount} totalAmount={this.state.totalAmount} isValidNumber={this.state.isValidNumber} isCalculated={this.state.isCalculated}  serviceQuality={this.state.serviceQuality}/>    
            
            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
            </Button>
            <Button className="mx-1" variant="secondary" type="submit" onClick={this.handleReset}>
            Reset
            </Button>
        </Container>
        )
    }
}

