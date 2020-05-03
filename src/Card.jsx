import React, { Fragment } from 'react';

const Card = ({name, email, id}) => {
    return (
        <Fragment>
            <div className='tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5'>
                <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
                <h2>{name}</h2>
                <p>{email}</p>   
            </div>
        </Fragment>
       
    );
}

export default Card;