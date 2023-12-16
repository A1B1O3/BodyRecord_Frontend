import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect'
import { ReactComponent as Backsvg } from '../../asset/Back.svg';
import {Link}from 'react-router-dom';

class TopBarR2 extends React.Component {

    render() {
        return (
            <Top>
                <Link to="/RecordMain">
                    <BackIcon>
                        <Backsvg />
                    </BackIcon>
                </Link>
                <Title>기록하기</Title>
                <Link to="/RecordMain">
                    <SaveButton>저장</SaveButton>
                </Link>
            </Top>
        );
    }
}

const Top = styled.div`
    display: flex;
    align-items: center;
    width: 1000px;
    height: 200px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.50);
`;

const BackIcon = styled.div`
    margin-left: 30px;
    width: 70px;
    height: 70px;
`;

const Title = styled.span`
    margin-left: 230px;
    width: 364px;
    height: 80px;
    font-size: 60px;
    font-weight: bold;
`;

const SaveButton = styled.button`
    margin-left: 100px;
    padding: 20px 30px;
    font-size: 35px;
    font-weight: bold;
    background-color: lightgrey;
    border: none;
    border-radius: 20px;
    cursor: pointer;
`;

export default TopBarR2;