import React, { Component } from 'react';
import  { InfoConsumer } from './context.jsx';
import { Link } from 'react-router-dom';

class Info extends Component{
    render(){
const {
            headerTitle,
            headerSubtitle,
            headerText,
            img
        } = this.props.item;

        return (
            <InfoConsumer>
                {value => (
                    <div className="col-10 col-lg-3 mx-auto mb-5">
                    <div className="card" style={{ width: '14rem'}}>
                        <img src={img} alt={headerTitle} className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title text-uppercase">{headerTitle}</h3>
                            <h5 className="card-title">{headerSubtitle}</h5>
                            <p className="card-text">{headerText}</p>
                            <Link to="/onama" className="btn btn-outline-primary text-uppercase">
                            Više informacija
                            </Link>
                        </div>
                    </div>
                </div>
                )}
            </InfoConsumer>
        )
    }
        
}

export default Info;