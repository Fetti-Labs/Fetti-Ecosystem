import React, { Component } from 'react';
import { SampleBase } from './sample-base';
import { 
    AccumulationChartComponent, 
    AccumulationSeriesCollectionDirective, 
    AccumulationSeriesDirective,
    AccumulationLegend, 
    PieSeries, 
    AccumulationDataLabel,
     Inject 
} from '@syncfusion/ej2-react-charts';



class DoughnutChart extends SampleBase {
	render() {

        const data1 = [
            { 
                x: '50% | ARK Protocol', 
                y: 50, 
                text: 'ARK Protocol 50%' 
            }, 
            { 
                x: '17% | Public Sale', 
                y: 17,
                text: 'Public Sale 17%' 
            },
            { 
                x: '13% | Development Team',
                y: 13,
                text: 'Development Team 13%' 
            }, 
            { 
                x: '10% | DAO Liquidity', 
                y: 10, 
                text: 'DAO Liquidity 10%' 
            },
            { 
                x: '5% | Community', 
                y: 5, 
                text: 'Community 5%' 
            },
            { 
                x: '3% | Founders', 
                y: 3, 
                text: 'Founders 3%' 
            },
            { 
                x: '2% | Legal', 
                y: 2, 
                text: 'Legal 2%' 
            },
        ];
    


        return (
            <div className='control-pane'>
                <div className='control-section'>
                    <AccumulationChartComponent 
                        id="pie-chart"
                        legendSettings={{
                            visible: true,
                            position: 'Top',
                            font: {
                                size: '18px'
                            }
                        }} 
                        enableSmartLabels={true} 
                        load={this.load.bind(this)}
                        tooltip={{ enable: true }} 
                        loaded={this.onChartLoad.bind(this)}
                    >
                        <Inject 
                            services={
                                [
                                    AccumulationLegend, 
                                    PieSeries, 
                                    AccumulationDataLabel
                                ]
                            } 
                        />
                        <AccumulationSeriesCollectionDirective>
                            <AccumulationSeriesDirective 
                                name='Tokenomics' 
                                dataSource={data1} 
                                xName='x' 
                                yName='y' 
                                innerRadius='60%' 
                                startAngle={300} 
                                endAngle={300} 
                                radius='80%' 
                                explode={true} 
                                explodeOffset='10%' 
                                explodeIndex={3} 
                                dataLabel={{
                                    visible: true,
                                    name: 'text',
                                    position: 'Outside',
                                    font: {
                                        fontWeight: '100',
                                        color: '#234531',
                                        size: '13px'
                                    }
                                }}
                            >
                            </AccumulationSeriesDirective>
                        </AccumulationSeriesCollectionDirective>
                    </AccumulationChartComponent>
                </div>
            </div>
        );
    }
    onChartLoad(args) {
        document.getElementById('pie-chart').setAttribute('title', '18B Total Supply');
    };
    load(args) {
        let selectedTheme = 'Material';
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").
            replace(/light/i, "Light");
    };

}


export default DoughnutChart;

