import React from "react" // eslint-disable-line no-unused-vars
import { createFragmentContainer, graphql } from "react-relay"

function HumanDisplay({human}) {
    return human.name;
}

export default createFragmentContainer(HumanDisplay, {
    human: graphql`
        fragment HumanDisplay_human on Human {
            name
        }
    `,
});
