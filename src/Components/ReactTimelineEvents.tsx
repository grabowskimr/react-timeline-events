import React from 'react';

import RTECalendar from './RTECalendar';

interface ReactTimelineEventsProps {
    data: object
}

const ReactTimelineEvents: React.FC<ReactTimelineEventsProps> = (props => {
    return (
        <div className="react-timeline-events">
            <RTECalendar data={props.data}/>
        </div>
    )
});

export default ReactTimelineEvents;