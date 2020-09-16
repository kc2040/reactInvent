import React from 'react';
import {Segment, Header, Form, Button } from 'semantic-ui-react';

export default function RateForm({setFormOpen}){

    return (
    <Segment clearing>
        <Header content='Add new rate' />
        <Form>
            <Form.Field>
                <input type='text' placeholder='title' />
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='country' />
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='skill level' />
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='rate' />
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='rate type' />
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='partner' />
            </Form.Field>
            <Form.Field>
                <input type='date' placeholder='date' />
            </Form.Field>
            <Button type='submit' floated='right' positive content='Submit' />
            <Button onClick={() => setFormOpen(false)} 
                type='submit' floated='right' content='Cancel' />
        
        </Form>
    </Segment>
    )
}