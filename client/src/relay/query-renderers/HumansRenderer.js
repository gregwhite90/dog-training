import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import HumanDisplay from '../containers/HumanDisplay';

export default function HumansRenderer({ relay: { environment }}) {
    return (
        <QueryRenderer
            environment={environment}
            query={graphql`
                query HumansRendererQuery {
                    humans {
                        edges {
                            node {
                                id
                                ...HumanDisplay_human
                            }
                        }
                    }
                }
                `}
            render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    } else if (props) {
                        return (
                            <ul>
                                {props.humans.edges
                                      .map(e => e.node)
                                      .map(h => {
                                          return (
                                              <li key={h.id}>
                                                  <HumanDisplay human={h} />
                                              </li>
                                          );
                                      })}
                            </ul>
                        );
                    }
                    return <div>Loading</div>;
            }}
        />
    );
}
