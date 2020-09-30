import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

export default function LoadingButton(props) {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            props.load().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <Button
            variant="primary"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
        >
            {isLoading ? 'Loading…' : props.text}
        </Button>
    );
}
