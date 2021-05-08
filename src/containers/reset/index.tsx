import styled from 'styled-components';

import React, { FormEvent } from 'react'
import { FormWrapper } from '../../components/form/FormWrapper';
import { AuthHeader } from '../../components/shared/AuthHeader';
import { FormControl } from '../../components/form';
import { Label } from '../../components/inputs/Label';
import { TextField } from '../../components/inputs/TextField';
import {MdEmail} from 'react-icons/md'
import { PrimaryBtn } from '../../components/buttons/PrimaryBtn';
import { Box } from '../../components/wrappers/Box';
import { Link } from 'react-router-dom';
import { Text } from '../../components/texts';
import { Colors } from '../../styles/colors';


export const ResetPassword = () => {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }
    return (
        <FormWrapper>
            <AuthHeader title="Reset password" message="Forgot your password? No problem. Reset it using your email."/>
        <form onSubmit={handleSubmit}>
        <FormControl>
            <Label>Email</Label>
            <TextField placeholder="Please enter your email" icon={<MdEmail/>}/>
        </FormControl>
        <PrimaryBtn width="100%">Reset</PrimaryBtn>
        <Box justify="center" mt="1rem">
        <Text>Back to <Link to="/signin" style={{color: Colors.SecondaryStrong, textDecoration: 'none'}}>sign in.</Link></Text>
        </Box>
        </form>
        </FormWrapper>
    )
}
