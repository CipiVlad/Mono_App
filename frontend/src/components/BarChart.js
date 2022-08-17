import { Bar } from 'react-chartjs-2'

const BarChart = ({ allFinObj }) => {
    return <Bar
        data={allFinObj}
    // options={ }
    />
}

export default BarChart;