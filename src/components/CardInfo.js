import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props){

    const style = useSpring({opacity: 1, from: {opcaity: 0}});

    return(
        <animated.div className="lh-card-info" style={style}>
            <p className="lh-card-title">{props.title}</p>
            <p className="lh-card-sub-title">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    )
}

export default CardInfo;