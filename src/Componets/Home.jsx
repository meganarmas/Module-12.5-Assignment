import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "./i18next";
import { useTranslation} from 'react-i18next';
import { Container, Nav } from "react-bootstrap";

const fetchPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts.`, {
        method: "POST",
        headers: {
            'Content-Type': 'applications/json'
        },
        body: JSON.stringify(newPost),
    });
    if (!response.ok) {
        console.error('Error in adding post.');
    }
    return response.json(); 
};

const DisplayHome = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return(
        <Container>
            <h1>{t('welcomeMessage')}</h1>
            <nav aria-label="Main navigation">
                <ul>
                    <li><NavLink to="add-comment" aria-label={t('Update Post')}>{t('Update Post')}</NavLink></li>
                    <li><NavLink to="add-post" aria-label={t('Add A Post')}>{t('Add A Post')}</NavLink></li>
                </ul>
            </nav>
            <Nav as="nav" role="menubar" className="mr-auto">
                <Nav.Link onClick={() => changeLanguage('en')}>English</Nav.Link>
                <NavLink onClick={() => changeLanguage('spn')}>Spanish</NavLink>
            </Nav>
        </Container>
    )
};

export default DisplayHome;
