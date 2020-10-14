import React from 'react';

import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import gitHub from '../assets/images/gitHub.jpg';
import leohoedl1 from '../assets/images/leohoedl1.jpg';
import youtube from '../assets/images/youtube.jpg';

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id:0,
                    title: 'GitHub',
                    subTitle: 'Check out my previous projects',
                    imgSrc: gitHub,
                    link: 'https://github.com/leohoedl',
                    selected: false
                },
                {
                    id:1,
                    title: 'LinkedIn',
                    subTitle: 'Connect with me on LinkedIn',
                    imgSrc: leohoedl1,
                    link: 'https://www.linkedin.com/in/leohoedl/',
                    selected: false
                },
                {
                    id:2,
                    title: 'YouTube',
                    subTitle: 'Follow my channel for projects',
                    imgSrc: youtube,
                    link: 'https://www.youtube.com/channel/UCj_zKqbFJplIgMbQIImaDIQ',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item =>{
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;