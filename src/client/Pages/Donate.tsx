import * as React from 'react'
import { StripeProvider, Elements, CardElement } from 'react-stripe-elements'
import Form from '../Form'

export default class Donate extends React.Component<IDonateProps, IDonateState>{

    render() {
        return (
            <>
                <StripeProvider apiKey="pk_test_dk4OkrnxH8O2ZhyfUFycEG15003X3u0aYp">
                    <Elements>
                        <Form />
                    </Elements>
                </StripeProvider>
            </>
        )
    }

}

interface IDonateProps { }
interface IDonateState { }

