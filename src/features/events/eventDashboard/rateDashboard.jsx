import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import RateForm from '../forms/rateForm';
import TitleForm from '../forms/titleForm';
import RateList from './rateList';
import {sampleData} from '../../../app/api/sampleData';


export default function RateDashboard({formOpen, setFormOpen}){

    const [rates, setRates] = useState(sampleData );
      return (
        <Grid>
            <Grid.Column width={10}>
                <RateList rates={rates}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && 
                <RateForm setFormOpen={setFormOpen}/> }
            </Grid.Column>
        </Grid>
    )
}
