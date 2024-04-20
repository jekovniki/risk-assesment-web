import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import styled from '@emotion/styled';

interface ITimeline {
    day: string,
    items: Record<string, any>
}

export default function OppositeContentTimeline({ day, items }: ITimeline) {
    
    return (
        <div>
            <StyledDay>{day}</StyledDay>
            <div>
                <Timeline position="right">
                    {items.map((item: Record<string, any>) =>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary">
                                {item.time}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent color="text.secondary">
                                <div>{item.search}</div>
                                <div style={{ fontSize: '.8rem'}}>{
                                item.ongoingScreening ? 
                                <span style={{ background: "green", display: "inline-block", width: '10px', height: '10px', borderRadius: '50%'}}></span> : 
                                <span style={{ background: "#FF6961", display: "inline-block", width: '10px', height: '10px', borderRadius: '50%'}}></span>
                                }&nbsp;Ongoing screening</div>
                            </TimelineContent>
                        </TimelineItem>)}
                </Timeline>
            </div>
        </div>

    );
}

const StyledDay = styled.div`
    padding: .5rem;
    text-align:left;
    background-color: #fff;
    margin: 1rem;
    border-radius: 5px;
    padding-left: 2.5rem;

`;