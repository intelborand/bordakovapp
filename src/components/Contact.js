import React, { Component } from "react";
import emailjs from 'emailjs-com';

import '../styles/contact.scss';

export default class Contact extends Component  {
    render() {

    this.sendEmail = async (e) => {
        e.preventDefault();
    
    
        emailjs.sendForm('service_srbrpt1', 'template_9im04ip', e.target, 'user_uJMErxuoSduCzscTeewZV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }
    
       

    
    return (
        <>
            <div className='contact' id='contact'>
                <div className='contact-container'>
                    <div className='row'>
                        <div className='half info'>
                            <h2 className='title'>Get in Touch</h2>
                            <h4 className='description'>You need more information? Please write to me about a collaboration offer or a job. I will try to answer as quickly as possible. Thank you.</h4>
                            <div className='marker'>
                                <div>
                                    <img src="https://img.icons8.com/color/48/000000/marker--v2.png" width='30' alt='marker'/>
                                </div>
                                <div className='marker-descr'>
                                    <h4>Find me</h4>
                                    <p>Poland <br/> Szczecin city</p>
                                </div>
                            </div>
                            <div className='phone'>
                                <div>
                                    <img src="https://img.icons8.com/color/48/000000/iphone.png" width='30' alt='marker'/>
                                </div>
                            <div className='contact-descr'>
                                    <h4>Call me</h4>
                                    <p>Andrii Bordakov</p>
                                    <p>(+48) 576-057-520</p>
                                </div>
                            </div>
                        </div>
                        <div className='half form'>
                            <form onSubmit={this.sendEmail} id='contact-form' method='post'>
                                <div className='form-header'>
                                    <h4 className='form-title'>Contact with me</h4>
                                </div>
                                <div className='card-body'>
                                    <div className='name'>
                                        <label>Name</label>
                                        <div className='input-group'>
                                            <div>
                                                <img src="https://img.icons8.com/ios/50/000000/name--v1.png" width='25' alt='name'/>
                                            </div>
                                            <input type='name' placeholder='  Your name' required></input>
                                        </div>
                                    </div>
                                    <div className='email'>
                                        <label>Email address</label>
                                        <div className='input-group'>
                                            <div>
                                                <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-email-interface-kiranshastry-lineal-kiranshastry.png" width='25' alt='email'/>
                                            </div>
                                            <input type='email' placeholder='  Email address'  required autoComplete='email'></input>
                                        </div>
                                    </div>
                                    <div className='text'>
                                        <label>Your message</label>
                                        <div className='textarea'>
                                            <textarea name='message' required></textarea>
                                        </div>
                                    </div>
                                    <button type='submit' className='btn-form'>Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}
}
