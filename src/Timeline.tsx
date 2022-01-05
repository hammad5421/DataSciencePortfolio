import React from 'react';

// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// import type {} from '@mui/lab/themeAugmentation';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export function TimelineContainer({ children, ...props }: { children: React.ReactElement[] }) {
  return (
    <div className="timeline" {...props}>
      <style>{".experience-item::before { flex: none;}"}</style>

      <Timeline
        style={{
          marginLeft: "-35px",
        }}
      >
        {
          children.map((c, i) => (
            <TimelineItem
              key={i}
              className="experience-item"
            >
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {c}
              </TimelineContent>
            </TimelineItem>
          ))
        }
      </Timeline>
    </div>
  );
}

// export function TimelineItem() {

// }
