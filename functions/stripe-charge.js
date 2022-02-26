const stripe = require('stripe')('sk_test_51JzPuzIVUm8xXc3PhUxX2Bz0NKsbTN40tWcHk4f5dst1DRWtCPzPGQ5z1l0lBYjuC8yTAlEtejReoodEMWq7YMoo00imukhsoY')

exports.handler = async function(event) {
    const {
        tokenId,
        email,
        name,
        description,
        amount
    } = JSON.parse(event.body)

    const customer = await stripe.customers.create({
        description: email,
        source: tokenId
    })

    await stripe.charges.create({
        customer: customer.id,
        amount,
        name,
        description,
        currency: 'chf'
    })
}