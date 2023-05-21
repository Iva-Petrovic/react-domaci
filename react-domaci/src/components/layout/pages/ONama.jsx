import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

class ONama extends Component{
    render(){
        function sendEmail(e) {
            e.preventDefault();
            emailjs.sendForm('service_69hzsiw', 'template_t461s2b', e.target, '3pkFSlaCmWofLrEZE')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset();
        }
        return(
            <section className="my-5 py-5">
                <div className="container">

                <div className="row">
                    
                    <div className="col-md-5">
                        <h4><strong>Kontaktirajte nas</strong></h4>
                        <form onSubmit={sendEmail}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Unesi svoje ime..." name="name"/>
                            </div><br></br>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Unesi svoju email adresu" name="email"/>
                            </div><br></br>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="O kom kursu razmisljas..." name="subject"/>
                            </div><br></br>
                            <textarea className="form-control" cols="30" rows="3" placeholder="Napisi pitanje vezano za taj kurs..." name="message"/>
                            <br></br>
                            <input type="submit" className="btn btn-outline-primary text-uppercase" value="Pošalji">

                            </input>
                        </form>
                    </div>

                    <div className="col-md-7">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1415.628055978761!2d20.442575451093184!3d44.79596892803489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a657e7cc1413b%3A0xde7c6b728257f248!2sKursevi%20za%20sve!5e0!3m2!1sen!2srs!4v1684705912983!5m2!1sen!2srs" style={{
                        border: '0',
                        width: '100%',
                        height: '315px',
                        frameborder: '0'
                    }} allowFullScreen 
                    />
                    </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default ONama;