import React from 'react';
import Link from 'next/link';
import { Button } from 'reactstrap';

const Error: React.FC = () => {
    return <div className="centered">
        <div className="spacer"></div>
        <h1 className="margin-bottom-15">
            Error! Page not found.
        </h1>
        <Link href="/">
            <a>
                <Button>
                    Back to home
                </Button>
            </a>
        </Link>

    </div>
}

export default Error;