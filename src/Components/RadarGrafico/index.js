// You have install 
import React, { useEffect, useRef } from 'react';

const RadarChart = ({ datasets, labels }) => {
    const canvasRef = useRef(null); // Referência para o elemento canvas

    useEffect(() => {
        import('chart.js/auto').then(({ Chart }) => {
            const ctx = canvasRef.current.getContext('2d');
            const existingChart = Chart.getChart(canvasRef.current);

            if (existingChart) {
                existingChart.destroy();
            }

            const chartData = {
                labels: labels,
                datasets: datasets,
            };

            const chartOptions = {
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 16,
                                weight: 'bold',
                            },
                        },
                    },
                },
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 16,
                                weight: 'bold',
                            },
                        },
                    },
                },
                elements: {
                    point: {
                        radius: 5,
                        hoverRadius: 8,
                    },
                },
            };

            new Chart(ctx, {
                type: 'radar',
                data: chartData,
                options: chartOptions,
            });
        });
    }, [datasets, labels]);

    return <canvas ref={canvasRef} id="radarChart"></canvas>;
};

export default RadarChart;
