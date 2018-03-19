import React, {Component} from 'react';
import About from './About/About';
import Academic from './Academic/Academic';
import Experience from './Experience/Experience';
import Skill from './Skill/Skill';
import { Tab, Tabs } from 'react-bootstrap';
import styled from 'styled-components'

class TabBar extends Component {

    constructor() {
        super();
        this.state = {
            phone: "(206)306-3178",
            email: "jeremy@gmail.com",
            address: "225 Terry Ave, Seattle, WA",
            dob: "12/11/1993",
            linkedin: "www.linkedin.com/jeremy",
            github: "www.github.com/jeremy",
            facebook: "www.facebook.com/jeremy",
            website: "www.jeremy.com/home",
            skill: "Java\nPython\nC++\nRuby"
        };
        this.changeState = this.changeState.bind(this);
    }

    changeState(key, value) {
        this.setState({
            [key]: value
        });
        console.log("change "+[key]+": "+value);
    }

    render() {
        return (
                <Tabs defaultActiveKey={1}>
                    <Tab eventKey={1} title="About">
                        <About phone={this.state.phone}
                               email={this.state.email}
                               address={this.state.address}
                               dob={this.state.dob}
                               linkedin={this.state.linkedin}
                               github={this.state.github}
                               facebook={this.state.facebook}
                               website={this.state.website}
                               action={this.changeState}/>
                    </Tab>
                    <Tab eventKey={2} title="Academic">
                        <Academic/>
                    </Tab>
                    <Tab eventKey={3} title="Experience">
                        <Experience/>
                    </Tab>
                    <Tab eventKey={4} title="Skill">
                        <Skill labelText="Skill" keyName="skill" action={this.changeState} value={this.state.skill}/>
                    </Tab>
                </Tabs>
        )
    }
}

export default TabBar