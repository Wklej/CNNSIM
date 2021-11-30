import { PieChart } from 'react-minimal-pie-chart';
import { useState } from 'react';

const Output = ({acc}) => {
    
    const [accuracy, setAccuracy] = useState(67)
    
    return ( 
        <div>
            <a style={{
                fontSize: '25px',
                fontFamily: 'sans-serif',
                color: '#E38627',
                }}>Accuracy: </a>
            <PieChart
                data={[{ value: accuracy, key: 1, color: '#E38627' }]}
                reveal={accuracy}
                lineWidth={15}
                animate
                label={() => accuracy}
                labelStyle={{
                    fontSize: '25px',
                    fontFamily: 'sans-serif',
                    fill: '#E38627',
                    }}
                labelPosition={0}
            />
        </div>
     );
}
 
export default Output;