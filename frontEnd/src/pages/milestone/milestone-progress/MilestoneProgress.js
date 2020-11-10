import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ProgressBar from '~/*/components/progress-bar/ProgressBar';
const ProgressSVGColor = '#2CBE4E';
const ProgressWrapper = styled.div``;
const SVGWrapper = styled.div`
  width: 100%;
  margin-bottom:10px;
`;
const ProgressText = styled.div`
margin-bottom:10px;
display:flex;
justify-content:left;
align-items:center;
`;
const ProgressWord = styled.p`
margin-right:20px;
`;
const ProgressWordStrog = styled.span`
font-weight:bold;
`;
const ButtonList = styled.div`
display:flex;
flex-direction:row;
align-items:center;
`;

const Edit = styled(Link)`
margin-right:15px;
text-decoration:none;
`;

const BoxButton = styled.a`
margin-right:15px;
cursor:pointer;
background-color:transparent;
border:0px;
`;

const MilestoneProgress = ({open, close, idx}) => {
  const percentage = useMemo(() => {
    if (open + close === 0) {
      return 0;
    }
    return (open / (open + close)) * 100;
  }, [open, close]);

  return (
    <ProgressWrapper>
      <SVGWrapper>
        <ProgressBar open={open} close={close} color = {`${ProgressSVGColor}`}/>
      </SVGWrapper>
      <ProgressText>
        <ProgressWord><ProgressWordStrog>{percentage}%</ProgressWordStrog> complete</ProgressWord>
        <ProgressWord><ProgressWordStrog>{open}</ProgressWordStrog> open</ProgressWord>
        <ProgressWord><ProgressWordStrog>{close}</ProgressWordStrog> closed</ProgressWord>
      </ProgressText>
      <ButtonList>
      <Edit to={`/milestone/${idx}/edit`}>Edit</Edit>
      <BoxButton>Close</BoxButton>
      <BoxButton>Delete</BoxButton>
      </ButtonList>
    </ProgressWrapper>
  );
};

export default MilestoneProgress;