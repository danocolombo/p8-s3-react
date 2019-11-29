import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Forms/Input/Input';
import classes from './Rally.css';
//import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    rallyHandler = ( event ) => {
        // event.preventDefault();
        // this.setState( { loading: true } );
        // const rally = {
        //     ingredients: this.props.ingredients,
        //     price: this.props.price,
        //     customer: {
        //         name: 'Max Schwarzmüller',
        //         address: {
        //             street: 'Teststreet 1',
        //             zipCode: '41351',
        //             country: 'Germany'
        //         },
        //         email: 'test@test.com'
        //     },
        //     deliveryMethod: 'fastest'
        // }
        // axios.post( '/orders.json', order )
        //     .then( response => {
        //         this.setState( { loading: false } );
        //         this.props.history.push('/');
        //     } )
        //     .catch( error => {
        //         this.setState( { loading: false } );
        //     } );
    }

    render () {
        let form = (
            <form>
                <Input inputType="input" type="text" name="name" placeholder="Your Name" />
                <Input inputType="input" type="email" name="email" placeholder="Your Mail" />
                <Input inputType="input" type="text" name="street" placeholder="Street" />
                <Input inputType="input" type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;