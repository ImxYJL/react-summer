import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    //dataPoint객체를 숫자로 변환한 배열
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    
    //배열의 모든 요소를 단일 숫자로 max의 인자로 넣어줌
    const totalMaximum = Math.max(...dataPointValues);

    return(
        <div className="chart">
            {props.dataPoints.map(dataPoint => 
            <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
            />)}
        </div>
    );
};

export default Chart;