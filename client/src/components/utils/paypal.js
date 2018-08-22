import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Paypal extends Component {

    render() {

        const onSuccess = (payment) => {
            console.log(JSON.stringify(payment))
        }

        const onCancel = (data) => {
            console.log(JSON.stringify(payment))
        }

        const onError = (err) => {
            console.log(JSON.stringify(payment))
        }

        let env = 'sandbox';
        let currency = 'USD';
        let total = this.props.toPay;

        const client = {
            sandbox:'AYlcO-dlAp2juPURXEa6v8gm0QxdQmxldq0_VtLuTP_oIHAKz71qU4VLVrNGhgVhEfCxZqa1OZ7mVGv5'
        }

        return (
            <div>
                <PaypalExpressBtn
                    env={env}
                    clien={client}
                    currency={currency}
                    total={total}
                    onError={onError}
                    onSuccess={onSuccess}
                    onCancel={onCancel}
                    style={{
                        size:'large',
                        color:'blue',
                        shape:'rect',
                        label:'checkout'
                    }}
                />
            </div>
        );
    }
}

export default Paypal;