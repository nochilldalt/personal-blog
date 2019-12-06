import * as React from 'react'
import { json } from './utils/api-services'
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements'

class Form extends React.Component<IFormProps, IFormState>{

    constructor(props: IFormProps) {
        super(props);
        this.state = {
            name: "",
            amount: ""
        }
    }

    async handleMoney(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        let {token} = await this.props.stripe.createToken({ name: this.state.name })
        let amount = this.state.amount
        await json('/api/donate', 'POST', {token, amount})
    }

    render() {
        return (
            <main className="container">
                <form className="form-group mt-3 border border-primary rounded shadow-lg bg-white p-3">
                    <h1>Donate Here</h1>
                    <br/>
                    <h4>Full Name</h4>
                    <input
                        type="text"
                        className="input-group my-1 p-1 border border-dark"
                        value={this.state.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })}
                    />
                    <h4>Amount</h4>
                    <input
                        type="text"
                        className="input-group my-1 p-1 border border-dark"
                        value={this.state.amount}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ amount: e.target.value })}
                    />
                    <br/>
                    <CardElement className="p-2 border border-dark" />
                    <br/>
                    <button className="btn btn-success mx-auto w-50 btn-block" onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleMoney(e)}>Donate</button>
                </form>
            </main>
        )
    }
}

interface IFormProps extends ReactStripeElements.InjectedStripeProps { }

interface IFormState { name: string, amount: string }

export default injectStripe(Form)