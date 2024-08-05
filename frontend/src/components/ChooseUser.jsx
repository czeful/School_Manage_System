import{ChooseUserContainer,
    Title,
    Button,
    UserSection
}from '../styles/ChooseUserStyles';

import {Link} from 'react-router-dom';

const ChooseUser = () =>{
    return(
        <ChooseUserContainer>
            <UserSection>
                <Title>Admin</Title>
                <Button to='/admin-signIn'>Login as Admin</Button>
            </UserSection>
            <UserSection>
                <Title>Students</Title>
                <Button to='/student-signIn'>Login as Studet</Button>
            </UserSection>
            <UserSection>
                <Title>Teachers</Title>
                <Button to='/teacher-signIn'>Login as Teacher</Button>
            </UserSection>
        </ChooseUserContainer>
    );
};

export default ChooseUser;