import { Colors } from '../../styles/colors';
import { TextField } from '../../components/inputs/TextField';
import { PrimaryBtn } from '../../components/buttons/PrimaryBtn';
import { FormEvent } from 'react';
import {MdEmail} from 'react-icons/md'
import {IoMdKey} from 'react-icons/io'
import { FormWrapper } from '../../components/form/FormWrapper';
import { Label } from '../../components/inputs/Label';
import { FormControl } from '../../components/form';
import { AuthHeader } from '../../components/shared/AuthHeader';
import { Box } from '../../components/wrappers/Box';
import {Text} from '../../components/texts'
import {Link} from 'react-router-dom'

const loginMessage = 'Sign in with your data that you entered during your registration.'

export const LoginFlow = () => {

const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
}

    return (
        <FormWrapper>
          <AuthHeader title="Sign in." message={loginMessage}/>
          <form onSubmit={handleSubmit}>
        <FormControl>
            <Label>Your email</Label>
            <TextField background={Colors.Neutral} placeholder="Please enter your email" icon={<MdEmail/>}/>
        </FormControl>
        <FormControl>
            <Label>Password</Label>
            <TextField background={Colors.Neutral} placeholder="Please enter your password" icon={<IoMdKey/>}/>
        </FormControl>

        <PrimaryBtn width="100%" type="submit">Sign in</PrimaryBtn>
        <Box justify="center" mt="1rem">
        <Text>Don't have an account? <Link to="/signup" style={{color: Colors.SecondaryStrong, textDecoration: 'none'}}>Sign up.</Link></Text>
        </Box>
        <Box justify="center" mt='0.1rem'>
        <Text>Forgot password? <Link to="/reset-password" style={{color: Colors.SecondaryStrong, textDecoration: 'none'}}>Reset.</Link></Text>
        </Box>
          </form>
        </FormWrapper>
    )
}

