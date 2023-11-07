import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect'
import { ReactComponent as Backsvg } from '../../asset/Back.svg';
import {Link}from 'react-router-dom';

class TopBar extends React.Component {
    render(){
        return (
            <Top>
                <Link to ="/">
                    <BackIcon>
                        <Backsvg/>
                    </BackIcon>
                </Link>
                    <Title>
                        개인정보입력
                    </Title>
            </Top>
        );
    }
}

const Top = styled.div`
    display:flex;
    width: 100vh;
    height: 200px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.50);
`

const BackIcon = styled.div`
    margin-top: 64px;
    margin-left: 30px;
    width: 70px;
    height: 70px;
`

const Title = styled.span`
    margin-top: 62px;
    margin-left: 253px;
    justify-content: center
    width:364px;
    height:80px;
    font-size:60px;
    font-weight:bold
`

export default TopBar;