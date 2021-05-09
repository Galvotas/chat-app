import { FormWrapper } from "../../components/form/FormWrapper";
import { AuthHeader } from "../../components/shared/AuthHeader";
import { FormControl } from "../../components/form";
import { Label } from "../../components/inputs/Label";
import { TextField } from "../../components/inputs/TextField";
import { Colors } from "../../styles/colors";
import { PrimaryBtn } from "../../components/buttons/PrimaryBtn";
import { MdEmail } from "react-icons/md";
import { IoMdKey } from "react-icons/io";
import { Box } from "../../components/wrappers/Box";
import { Text } from "../../components/texts";
import { Link } from "react-router-dom";
import { FormEvent } from "react";

export const SignupFlow = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <FormWrapper>
      <AuthHeader
        title="Sign up."
        message="Sign up using authentic email and strong password."
      />
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Label>Your email</Label>
          <TextField
            background={Colors.Neutral}
            placeholder="Email"
            icon={<MdEmail />}
          />
        </FormControl>
        <FormControl>
          <Label>Password</Label>
          <TextField
            background={Colors.Neutral}
            placeholder="Password"
            icon={<IoMdKey />}
          />
        </FormControl>
        <FormControl>
          <Label>Confirm password</Label>
          <TextField
            background={Colors.Neutral}
            placeholder="Confirm password"
            icon={<IoMdKey />}
          />
        </FormControl>
        <PrimaryBtn width="100%">Sign up</PrimaryBtn>
        <Box justify="center" mt="1rem">
          <Text>
            Already have an account?{" "}
            <Link
              to="/signin"
              style={{ color: Colors.SecondaryStrong, textDecoration: "none" }}
            >
              Sign in.
            </Link>
          </Text>
        </Box>
      </form>
    </FormWrapper>
  );
};
