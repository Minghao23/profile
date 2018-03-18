import React, {Component} from 'react';

export default class ExperienceContent extends Component {
    constructor() {
        super();
    }

    handleTitle(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    handleCompany(e) {
        const company = e.target.value;
        this.props.changeCompany(company);
    }

    handleStartDate(e) {
        const startDate = e.target.value;
        this.props.changeStartDate(startDate);
    }

    handleEndDate(e) {
        const endDate = e.target.value;
        this.props.changeEndDate(endDate);
    }

    handleDesc(e) {
        const description = e.target.value;
        this.props.changeDesc(description);
    }

    render() {
        return(
            <div>
                <div><label for={"jobTitle"}>Job Title</label></div>
                <input onChange={this.handleTitle.bind(this)} id={"jobTitle"} value={this.props.item.jobTitle} size={50}></input>
                <br/><br/>

                <div><label for={"company"}>Company</label></div>
                <input onChange={this.handleCompany.bind(this)} id={"company"} value={this.props.item.company} size={50}></input>
                <br/><br/>

                <div><label for={"startDate"}>Start Date</label></div>
                <input onChange={this.handleStartDate.bind(this)} id={"startDate"} value={this.props.item.startDate} size={50}></input>
                <br/><br/>

                <div><label for={"endDate"}>End Date</label></div>
                <input onChange={this.handleEndDate.bind(this)} id={"endDate"} value={this.props.item.endDate} size={50}></input>
                <br/><br/>

                <div><label for={"desc"}>Description</label></div>
                <textarea onChange={this.handleDesc.bind(this)} id={"desc"}
                          value={this.props.item.description} cols={50} rows={6}></textarea>
            </div>
        )
    }
}
