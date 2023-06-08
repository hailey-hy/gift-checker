import GridPaper from '@atoms/gridPaper/GridPaper';
import GridContainer from './GridContainer';
import Calendar from '@atoms/calendar/Calendar';
import Label from '@atoms/label/Label';
import LabelInput from '@molecules/label-input/LabelInput';
import LabelsOnly from '@molecules/labels-only/LabelsOnly';

export default {
    title: 'Design Systems/Organisms/Grid-Container',
    component: GridContainer,
    tags: ['autodocs'],
};

export const gridContainer = () => {
    return (
        <GridContainer>
            <GridPaper>children</GridPaper>
        </GridContainer>
    );
};

export const calendarContainer = () => {
    return (
        <GridContainer>
            <GridPaper>
                <Calendar></Calendar>
            </GridPaper>
        </GridContainer>
    );
};

export const commentLabelContainer = () => {
    return (
        <GridContainer size='large'>
            <GridPaper>
                <LabelsOnly display='grid' border='false' paddingBottom='true'>
                    <Label size='medium' bold='true'>
                        이름
                    </Label>
                    <Label size='medium' bold='true'>
                        선물
                    </Label>
                    <Label size='medium' bold='true'>
                        자세한 설명
                    </Label>
                </LabelsOnly>
                <LabelsOnly display='grid' border='false'>
                    <Label size='medium'>이름</Label>
                    <Label size='medium'>선물</Label>
                    <Label size='medium'>자세한 설명</Label>
                </LabelsOnly>
                <LabelsOnly display='grid' border='false'>
                    <Label size='medium'>이름</Label>
                    <Label size='medium'>선물</Label>
                    <Label size='medium'>자세한 설명</Label>
                </LabelsOnly>
                <LabelsOnly display='grid' border='false'>
                    <Label size='medium'>이름</Label>
                    <Label size='medium'>선물</Label>
                    <Label size='medium'>자세한 설명</Label>
                </LabelsOnly>
                <LabelsOnly display='grid' border='false'>
                    <Label size='medium'>이름</Label>
                    <Label size='medium'>선물</Label>
                    <Label size='medium'>자세한 설명</Label>
                </LabelsOnly>
                <LabelsOnly display='grid' border='false'>
                    <Label size='medium'>이름</Label>
                    <Label size='medium'>선물</Label>
                    <Label size='medium'>자세한 설명</Label>
                </LabelsOnly>
                <LabelsOnly display='grid' border='false'>
                    <Label size='medium'>이름</Label>
                    <Label size='medium'>선물</Label>
                    <Label size='medium'>자세한 설명</Label>
                </LabelsOnly>
                <LabelsOnly display='grid' border='false'>
                    <Label size='medium'>이름</Label>
                    <Label size='medium'>선물</Label>
                    <Label size='medium'>자세한 설명</Label>
                </LabelsOnly>
                <LabelsOnly display='grid' border='false'>
                    <Label size='medium'>이름</Label>
                    <Label size='medium'>선물</Label>
                    <Label size='medium'>자세한 설명</Label>
                </LabelsOnly>
                <LabelsOnly display='grid' border='false'>
                    <Label size='medium'>이름</Label>
                    <Label size='medium'>선물</Label>
                    <Label size='medium'>자세한 설명</Label>
                </LabelsOnly>
                <LabelsOnly display='grid' border='false'>
                    <Label size='medium'>이름</Label>
                    <Label size='medium'>선물</Label>
                    <Label size='medium'>자세한 설명</Label>
                </LabelsOnly>
                <LabelsOnly display='grid' border='false'>
                    <Label size='medium'>이름</Label>
                    <Label size='medium'>선물</Label>
                    <Label size='medium'>자세한 설명</Label>
                </LabelsOnly>
                <LabelsOnly display='grid' border='false'>
                    <Label size='medium'>이름</Label>
                    <Label size='medium'>선물</Label>
                    <Label size='medium'>자세한 설명</Label>
                </LabelsOnly>
                <LabelsOnly display='grid' border='false'>
                    <Label size='medium'>이름</Label>
                    <Label size='medium'>선물</Label>
                    <Label size='medium'>자세한 설명</Label>
                </LabelsOnly>

                <LabelsOnly display='grid' border='false'>
                    <Label size='medium'>이름</Label>
                    <Label size='medium'>선물</Label>
                    <Label size='medium'>자세한 설명</Label>
                </LabelsOnly>
                <LabelsOnly display='grid' border='false'>
                    <Label size='medium'>이름</Label>
                    <Label size='medium'>선물</Label>
                    <Label size='medium'>자세한 설명</Label>
                </LabelsOnly>
                <LabelsOnly display='grid' border='false'>
                    <Label size='medium'>이름</Label>
                    <Label size='medium'>선물</Label>
                    <Label size='medium'>자세한 설명</Label>
                </LabelsOnly>
            </GridPaper>
        </GridContainer>
    );
};
