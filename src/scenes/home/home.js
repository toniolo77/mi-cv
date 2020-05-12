import React, {Component} from 'react';
import styles from './home.module.scss';
import {Col,Row} from 'react-bootstrap';
import Header from './header/header';
import MainContent from './main-content/mainContent';
import SideMenu from './side-menu/sideMenu';
import cv_data from './../../data/cv_data';
import * as Constant from './../../data/constant';


class Home extends Component {
    
    
    state = {
        language: Constant.LANGUAGE_SPANISH,
        current_content: cv_data.content_spanish
    }

    changeLanguageHandler = (language) => {
        if (this.state.language != language){
            if (language==Constant.LANGUAGE_SPANISH)
                this.setState({current_content: cv_data.content_spanish, language: language});
            else
                this.setState({current_content: cv_data.content_english, language: language});
        }
    } 



    render() {
   
        return (
            <Row className={styles.containerContent}>
                <Col sm={8} className={styles.space_top}>
                    <Header changeLanguage={this.changeLanguageHandler}/>
                    <MainContent mainContent={this.state.current_content.main_content}></MainContent>
                </Col>
                <Col sm={4} className={[styles.space_top,styles.side_menu].join(" ")} >
                    <SideMenu profile={this.state.current_content.perfil} atributes={this.state.current_content.datos_extra}></SideMenu>
                </Col>
            </Row>
        )
    }

}

export default Home;