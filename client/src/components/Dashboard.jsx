import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import UserInfoPage from '../containers/UserInfoPage';
import ApiListPage from '../containers/ApiListPage';


const Dashboard = () => (
    <Card>
        <CardContent>
            <UserInfoPage />
            <ApiListPage/>
        </CardContent>
    </Card>
);

export default Dashboard;