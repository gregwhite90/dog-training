import React from "react"
import { createFragmentContainer, graphql } from "react-relay"

function HumanDisplay({human}) {
    return (
        <>
            {human.name}
        </>
    );
}

export default createFragmentContainer(HumanDisplay, {
    human: graphql`
        fragment HumanDisplay_human on Human {
            name
        }
    `,
});
