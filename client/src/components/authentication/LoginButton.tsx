import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

interface LoginButtonProps {
    variant?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ variant = "primary" }) => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button
            variant={variant}
            onClick={() => loginWithRedirect()}
        >
            Log in or Sign up
        </Button>
    );
}

export default LoginButton;
