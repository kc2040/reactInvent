import React from 'react';
import {Segment, Header, Form } from 'semantic-ui-react';

export default function TitleForm(){

    return (
    <Segment>
        <Header content='Add new title' />
        <Form>
            <Form.Field>
                <input type='text' placeholder='new title' />
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='title description' />
            </Form.Field>
        </Form>
    </Segment>
    )
}