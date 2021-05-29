import React, {Component} from 'react';
import {Container, Form, Button} from 'react-bootstrap';


export default class TipForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            billAmount: '',
            serviceQuality: '',
            tipPercent: '',
            tipAmount: '',
            totalAmount: '',
            isCalculated: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

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

  handleChange(event) {
      const value = event.target.value;
      const name = event.target.name;
      if (this.state.billAmount !== value && name === 'billAmount' && this.state.serviceQuality) {
        const tipPercent = this.tipAmount(this.state.serviceQuality);
        const billAmount = parseInt(value);
        const tipAmount = tipPercent * billAmount;
        const totalAmount = tipAmount + billAmount;
        this.setState({tipAmount: tipAmount, tipPercent: tipPercent, totalAmount: totalAmount});
      } else if (this.state.serviceQuality !== value && name === 'serviceQuality' && this.state.billAmount) {
        const tipPercent = this.tipAmount(value);
        const billAmount = parseInt(this.state.billAmount);
        const tipAmount = tipPercent * billAmount;
        const totalAmount = tipAmount + billAmount;
        this.setState({tipAmount: tipAmount, tipPercent: tipPercent, totalAmount: totalAmount});
      } 

      this.setState({[name]: value});

  }

  handleSubmit(event) {
    event.preventDefault();
      const tipPercent = this.tipAmount(this.state.serviceQuality);
      const billAmount = parseInt(this.state.billAmount);
      const tipAmount = tipPercent * billAmount;
      const totalAmount = tipAmount + billAmount;
     this.setState({tipAmount: tipAmount, tipPercent: tipPercent, totalAmount: totalAmount, isCalculated: true});
  }

  handleReset() {
      this.setState(
             {
            billAmount: '',
            serviceQuality: '',
            tipPercent: '',
            tipAmount: '',
            totalAmount: '',
            isCalculated: false
        }
      )
  }

    render() {
        return (
        <Container>
            <h1>Tip Calculator</h1>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Bill Amount</Form.Label>
                <Form.Control type="text" name='billAmount' value={this.state.billAmount} onChange={this.handleChange} placeholder="Enter bill amount" />
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
                <option value="0">Choose...</option>
                <option value="Great">Great - 25%</option>
                <option value="Good">Good - 15%</option>
                <option value="Okay">Okay - 10%</option>
                <option value="Okay">Bad - 5%</option>
                <option value="Horrible">Horrible - 0%</option>
            </Form.Control>
            <Container>
            {
                this.state.isCalculated && this.state.billAmount && this.state.serviceQuality &&
                (<div>
                  <p>Bill Amount: ${this.state.billAmount}</p>
                   <p>Tip Percent: {this.state.tipPercent}%</p>
                  <p>Tip Amount: ${this.state.tipAmount}</p>
                  <p>Your total bill amount is: ${this.state.totalAmount}.</p>
                </div>)
            }
            </Container>
            <Button variant="primary" type="submit">
            Submit
            </Button>
            <Button className="mx-1" variant="secondary" type="submit" onClick={this.handleReset}>
            Reset
            </Button>
            </Form>
        </Container>
        )
    }
}

