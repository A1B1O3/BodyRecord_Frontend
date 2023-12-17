import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CalendarPage from './CalendarPage';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, LabelList } from 'recharts';
import TopBarR from '../../components/common/TopBarR';
import styled from 'styled-components';
import Modal from '../../components/common/Modal';

const RecordMain = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // 예제 API URL. 실제 API 엔드포인트로 변경해야 합니다.
    const apiUrl = 'http://example.com/api/chartData';

    // axios를 사용하여 API 호출
    axios.get(apiUrl)
      .then(response => {
        // API에서 받은 데이터를 상태에 설정
        setChartData(response.data);
      })
      .catch(error => {
        console.error('Error fetching chart data:', error);
      });
  }, []);




  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  const checkForExistingData = (formattedDate) => {

    return false;
  };

  const handleRecordClick = () => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      const hasExistingData = checkForExistingData(formattedDate);
      const route = hasExistingData ? `/ModifyRecord/${formattedDate}` : `/RecordExercise/${formattedDate}`;
      navigate(route);
    } else {
      alert('날짜를 선택해주세요.');
    }
  };
    
  const handleChartContainerClick = () => {
    navigate('/BmiPage');
  };

  // const chartData = [
  //   { date: '23.01.03', bodyFat: 23.3 },
  //   { date: '23.02.22', bodyFat: 23.7 },
  //   { date: '23.04.02', bodyFat: 23.8 },
  //   { date: '23.09.13', bodyFat: 23.9 },
  // ];

  const renderCustomizedLabel = (props) => {
    const { x, y, stroke, value } = props;
    return (
      <text x={x} y={y} dy={-10} fill={stroke} fontSize={12} textAnchor="middle">
        {value}
      </text>
    );
  };

  return (
    <ExerciseRecordContainer>
      <TopBarR />
      <CalendarPage onSelectDate={handleDateSelect} />
      <ChartTitle>체질량 지수 변화</ChartTitle>
      <ChartContainer onClick={handleChartContainerClick}>
        <LineChart width={800} height={500} data={chartData}>
              <XAxis dataKey="date" stroke="white" />
              <YAxis domain={['auto', 'auto']} stroke="white" />
              <Tooltip labelStyle={{ color: 'white' }} itemStyle={{ color: 'white' }} isAnimationActive={false} />
              <Legend wrapperStyle={{ color: 'white' }} />
              <Line type="monotone" dataKey="bodyFat" stroke="#4CFF5B" strokeWidth={4} dot={{ r: 6, fill: 'white' }}>
                <LabelList dataKey="bodyFat" position="top" fill="white" />
              </Line>
        </LineChart>
        </ChartContainer>
      <RecordExerciseButton onClick={handleRecordClick}>
        운동 기록하기
      </RecordExerciseButton>
      <Modal />
    </ExerciseRecordContainer>
  );
};

const ExerciseRecordContainer = styled.div`
  width: 1000px;
  padding: 50px;
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 20px;
  border-radius: 10px;
  margin: auto;
  width: fit-content;
  margin-top: 20px;
`;

const ChartTitle = styled.span`
  font-weight: bolder;
  font-size: 50px;
  margin-top: 100px;
  margin-bottom: 30px;
  text-align: center;
  width: 100%;
  display: block;
`;

const RecordExerciseButton = styled.button`
  display: block;
  width: 800px;
  height: 110px;
  border-radius: 20px;
  padding: 20px;
  background-color: #6100FF;
  color: white;
  border: none;
  align-items: center;
  cursor: pointer;
  font-size: 45px;
  font-weight: bold;
  margin: 0 auto;
  text-align: center;
  margin-top: 70px;
`;

export default RecordMain;