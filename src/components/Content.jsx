import React, { Component } from "react";
import logements from "../logements.json";
import "../styles/Content.css";
import Collapse from "./Collapse.jsx";
import Tag from "./Tag";
import Rating from "./Rating";

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.logement = logements[this.props.index];
    }
    render() {
        return (
            <div className="Content">
                <div className="infos-wrapper">
                    <div>
                        <h1 className="fiche-logement-name">{this.logement.title}</h1>
                        <p className="fiche-logement-location">{this.logement.location}</p>
                        <div className="fiche-logement-tagContainer">
                            {this.logement.tags.map((tag) => {
                                return <Tag key={tag} text={tag} />;
                            })}
                        </div>
                    </div>
                    <div className="fiche-logement-hostWrapper">
                        <div className="fiche-logement-hostInfos">
                            <span className="fiche-logement-hostName">{this.logement.host.name}</span>
                            <img
                                className="fiche-logement-hostPicture"
                                src={this.logement.host.picture}
                                alt={this.logement.host.name}
                            />
                        </div>
                        <Rating rate={parseInt(this.logement.rating)} />
                    </div>
                </div>
                <div className="fiche-logement-collaspeWrapper">
                    <Collapse title="Description" content={this.logement.description}></Collapse>
                    <Collapse
                        title="Equipements"
                        content={
                            <ul>
                                {this.logement.equipments.map((equipement) => (
                                    <li className="fiche-logement-equipementList" key={equipement}>
                                        {equipement}
                                    </li>
                                ))}
                            </ul>
                        }
                    ></Collapse>
                </div>
            </div>
        );
    }
}
