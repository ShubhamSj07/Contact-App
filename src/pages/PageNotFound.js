import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const PageNotFound = () => {
    return (
        <div className="text-center p-5">
            <h1>404 page not found</h1>
            <Button>
                <Link
                    to="/"
                    className="text-decoration-none"
                    style={{ color: "white" }}
                >
                    Return Home
                </Link>
            </Button>
        </div>
    );
};

//FIXME: DONE! missing keywords
export default PageNotFound;
