import * as stripeLoader from 'stripe'
import config from '../config'

const stripe = new stripeLoader(config.stripe)

const charge = (token:string, amount:number) => {
    return stripe.charges.create({
        amount: amount * 100,
        currency: 'USD',
        source: token,
        description: 'Statement Discription'
    })
}

export default charge