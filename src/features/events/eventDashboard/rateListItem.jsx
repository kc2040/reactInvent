import React from 'react';
import { Button, Icon, Item, Segment } from 'semantic-ui-react';
import SkillTag from './skillTag';

export default function RateListItem({rate}){
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size ='tiny' circular src = {rate.hostPhotoURL} />
                        <Item.Content>
                            <Item.Header content = {rate.title}/>
                            <Item.Description>Country: {rate.country}</Item.Description>
                            <Item.Description>Rate: ${rate.rate}</Item.Description>
                            <Item.Description>Type: {rate.rateType}</Item.Description>
                            <Item.Description>Partner company: {rate.partner}</Item.Description>
                            
                            <Item.Description>{rate.description}</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            {/* <Segment>
                <span>
                    <Icon name='clock' />
                    <Icon name='marker' />
                </span>
            </Segment> */}
            <Segment>
                <SkillTag />
            </Segment>
            <Segment clearing>
                <div>Description of title
                    <Button color='teal' floated='right' content='view' />
                </div>
            </Segment>
        </Segment.Group>
    )
}