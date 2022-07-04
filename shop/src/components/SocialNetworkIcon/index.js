import React from "react";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";

function SocialNetworkIcon(props) {
    const {children} = props
    return (
        <div>
            <Link href={props.link} target="_blank">
                <IconButton color={props.color}>
                    {children}
                </IconButton>
            </Link>
        </div>
    )
}

export default SocialNetworkIcon;