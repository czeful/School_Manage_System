import React, {useState, useEffect} from 'react';
import AdminSidebar from './Sidebar';
import AdminEventCalendar from './EventCalender';
import AdminAnnoucement from './Annoucement';
import AdminPerformance from './Performance';
import axios from 'axios';
import {
    AdminDashboardContainer,
    Content,
    TopContent,
    BottomContent,
    Section,
    SectionTitle,
    CardContainer,
    Card,
    CardContent,
    CardTitle
}from'../../styles/DashboardStyles'


const AdminDashboard = () => {
    return(
        <AdminDashboardContainer>
            <Content>
            <TopContent>
                <Section>
                    <SectionTitle>Owerview</SectionTitle>
                    <CardContainer>
                        <Card>
                            <CardTitle>Total Students</CardTitle>
                            <CardContent>500</CardContent>
                        </Card>
                        <Card>
                            <CardTitle>Total Teachers</CardTitle>
                            <CardContent>50</CardContent>
                        </Card>
                        <Card>
                            <CardTitle>Total Classes</CardTitle>
                            <CardContent>20</CardContent>
                        </Card>
                    </CardContainer>
                </Section>
                <Section>
                <SectionTitle>All events</SectionTitle>
                </Section>
            </TopContent>
            <BottomContent>
                <AdminPerformance>
                <SectionTitle>Student Performance</SectionTitle>
                </AdminPerformance>
                <AdminAnnoucement>
                <SectionTitle>Announcement</SectionTitle>
                </AdminAnnoucement>
            </BottomContent>
            </Content>
        </AdminDashboardContainer>
    )
}


export default AdminDashboard;