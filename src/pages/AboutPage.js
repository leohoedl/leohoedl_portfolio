import React from 'react';
import HomeHeader from '../components/HomeHeader';
import Content from '../components/Content';

function AboutPage(props){

    return(
        <div>
            <HomeHeader title={props.title}/>

            <Content>
                <p>How many programmers does it take to change a light bulb? None, that's a hardware problem.</p>

                <p>Fortunately for me I have experience with both! I am a Computer Engineer specializing in Software Engineering with a background in hardware design
                and embedded systems. Over the years I have honed my talents with a mix in front end and back end programming languages including
                Java, C#, C, C++, VisualBasic, Python, JavaScript, React, and HTML. My mix of programming background
                and in-depth knowledge of operating systems, computer architecture, and computer protocols can bring a unique viewpoint to any problem.</p>

                <p>When I'm not on the job I love hiking and camping</p>  
            </Content>
        </div>
    );


}

export default AboutPage;