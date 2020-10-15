import React from 'react';
import HomeHeader from '../components/HomeHeader';
import Content from '../components/Content';

function AboutPage(props){

    return(
        <div>
            <HomeHeader title={props.title}/>

            <Content>
                <p>I am a Computer Engineer specializing in Software Engineering with a background in computer architecture, embedded systems, and web development. 
                    Relevant experience includes advanced digital design with VHDL, work with embedded systems on a PIC micro-controller using MPLAB X and C, wireless protocols, 
                    and in depth knowledge of operating systems and computer architecture. 
                    Over the years I have honed my talents of advanced software design with a mix of front-end and back-end programming languages including Java, C#, C, C++, VisualBasic, Python, JavaScript, LabVIEW, VHDL, React, and HTML. 
                    My mix of programming background and in-depth knowledge of operating systems, computer architecture, and computer protocols can bring a unique viewpoint to any problem.</p>

                <p>When I'm not on the job I love hiking and camping.</p> 
            </Content>
        </div>
    );


}

export default AboutPage;