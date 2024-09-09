import React, { useState } from 'react';
import {Form, Button, Container } from 'react-bootstrap';

const CommentForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Comment submitted");
    };

    return (
    <Container>
            <h1>Post a Comment</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="postTitle">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    aria-label="Name"
                    required
                    />
                </Form.Group>

                <Form.Group controlId="postBody">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter comment"
                    aria-label="Body"
                    required
                    />
                </Form.Group>
                <Button type="submit">Submit Comment</Button>
            </Form>
        </Container>
    );
};

export default CommentForm;