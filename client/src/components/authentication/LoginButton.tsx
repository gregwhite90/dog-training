import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

interface LoginButtonProps {
    variant?: string;
    size?: "sm" | "lg";
}

const LoginButton: React.FC<LoginButtonProps> = ({ variant = "primary", size = undefined }) => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button
            variant={variant}
            size={size}
            onClick={() => loginWithRedirect()}
        >
            Log in or Sign up
        </Button>
    );
}

export default LoginButton;
