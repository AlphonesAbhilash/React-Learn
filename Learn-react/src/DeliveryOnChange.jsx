// onChange: The onChange event handler used primarily with form elements.
//         ex: <input>, <textarea>,<select>, <radio>
//         Triggers a function everytime the value of the input changes.

import React, {useState} from 'react';

function DeliveryOnChange(){

    const [name, setName] = useState("");
    const[quantity, setQuantity] = useState(0);
    const[comment, setComment] = useState("");
    const[payment, setPayment] = useState("");
    const[delivery, setDelivery] = useState("Pick up");

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleDeliveryChange(event){
        setDelivery(event.target.value);
    }

    return(
        <div>
            <input type="text" value={name} placeholder="Your name"onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>

            <textarea placeholder='Enter Delivery Instructions..' value={comment} onChange={handleCommentChange}></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an Option</option>
                <option value="POD">Pay On Delivery</option>
                <option value="UPI">UPI</option>
                <option value="Dt/Cr">Card(Debit/Credit)</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick up" checked={delivery==="Pick up"} onChange={handleDeliveryChange}/>
                Pick up
            </label>
            <label>
                <input type="radio" value="Delivery" checked={delivery==="Delivery"} onChange={handleDeliveryChange}/>
                Delivery
            </label>
            <p>Mode of delivery: {delivery}</p>
        </div>
    );
}

export default DeliveryOnChange