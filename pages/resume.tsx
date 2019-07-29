import React from 'react';
import Link from 'next/link';
import { Button } from 'reactstrap';

const Resume: React.FC = () => {
    return <>
        <Link href="/">
            <a>
                <Button className="whitetext margin-top-15px">
                    Home
                </Button>
            </a>
        </Link>

    </>
}

export default Resume;