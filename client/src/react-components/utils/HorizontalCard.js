import React from 'react';
import Card from 'react-bootstrap/Card';

export default function HorizontalCard({imgCols, node: {picture, title, text}}) {
    const imgCols = imgCols || 3;
    return (
        <Card>
            <div class="row no-gutters">
                <div class="col-md-{imgCols}">
                    {picture &&
                     (<Card.Img src={picture} />)
                    }
                </div>
                <div class="col-md-{12 - imgCols}">
                    <Card.Title>
                        {title}
                    </Card.Title>
                    {text &&
                     (<Card.Text>
                         {text}
                     </Card.Text>)
                    }
                </div>
            </div>
        </Card>
    );
}
