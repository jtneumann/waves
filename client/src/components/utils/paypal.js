import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Paypal extends Component {

    render() {

        const onSuccess = (payment) => {
            // console.log(JSON.stringify(payment))
            this.props.onSuccess(payment);

            // {"paid":true,"cancelled":false,"payerID":"CMXLMXQPR7ZPS","paymentID":"PAY-0E824500DF278041TLN62G4Q","paymentToken":"EC-8CF97081C91669004","returnUrl":"https://www.sandbox.paypal.com/?paymentId=PAY-0E824500DF278041TLN62G4Q&token=EC-8CF97081C91669004&PayerID=CMXLMXQPR7ZPS","address":{"recipient_name":"Customer Two","line1":"1 Main St","city":"San Jose","state":"CA","postal_code":"95131","country_code":"US"},"email":"cust2@test.com"}
        }

        const onCancel = (data) => {
            console.log(JSON.stringify(data))
        }

        const onError = (err) => {
            console.log(JSON.stringify(err))
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
                    client={client}
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