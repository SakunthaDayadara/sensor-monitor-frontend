// Dashboard.js

import React, { useState, useEffect } from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dummyData = [
    { id: 1, sensor_id: 1, date_column: '2023-01-01', time_column: '08:00:00', data_value: 25, created_at: '2023-01-01', updated_at: '2023-01-01' },
    { id: 2, sensor_id: 1, date_column: '2023-01-02', time_column: '08:00:00', data_value: 30, created_at: '2023-01-02', updated_at: '2023-01-02' },
    { id: 3, sensor_id: 1, date_column: '2023-01-03', time_column: '08:00:00', data_value: 28, created_at: '2023-01-03', updated_at: '2023-01-03' },
    { id: 4, sensor_id: 1, date_column: '2023-01-04', time_column: '08:00:00', data_value: 32, created_at: '2023-01-04', updated_at: '2023-01-04' },
    { id: 5, sensor_id: 1, date_column: '2023-01-05', time_column: '08:00:00', data_value: 27, created_at: '2023-01-05', updated_at: '2023-01-05' },
    { id: 6, sensor_id: 2, date_column: '2023-01-01', time_column: '08:00:00', data_value: 22, created_at: '2023-01-01', updated_at: '2023-01-01' },
    { id: 7, sensor_id: 2, date_column: '2023-01-02', time_column: '08:00:00', data_value: 26, created_at: '2023-01-02', updated_at: '2023-01-02' },
    { id: 8, sensor_id: 2, date_column: '2023-01-03', time_column: '08:00:00', data_value: 29, created_at: '2023-01-03', updated_at: '2023-01-03' },
    { id: 9, sensor_id: 2, date_column: '2023-01-04', time_column: '08:00:00', data_value: 31, created_at: '2023-01-04', updated_at: '2023-01-04' },
    { id: 10, sensor_id: 2, date_column: '2023-01-05', time_column: '08:00:00', data_value: 24, created_at: '2023-01-05', updated_at: '2023-01-05' },
    { id: 11, sensor_id: 3, date_column: '2023-01-01', time_column: '08:00:00', data_value: 20, created_at: '2023-01-01', updated_at: '2023-01-01' },
    { id: 12, sensor_id: 3, date_column: '2023-01-02', time_column: '08:00:00', data_value: 23, created_at: '2023-01-02', updated_at: '2023-01-02' },
    { id: 13, sensor_id: 3, date_column: '2023-01-03', time_column: '08:00:00', data_value: 27, created_at: '2023-01-03', updated_at: '2023-01-03' },
    { id: 14, sensor_id: 3, date_column: '2023-01-04', time_column: '08:00:00', data_value: 29, created_at: '2023-01-04', updated_at: '2023-01-04' },
    { id: 15, sensor_id: 3, date_column: '2023-01-05', time_column: '08:00:00', data_value: 26, created_at: '2023-01-05', updated_at: '2023-01-05' },
];


const Dashboard = () => {
    const [selectedSensor, setSelectedSensor] = useState(1); // Initialize with sensor_id 1
    const [sensorData, setSensorData] = useState([]);

    // Function to handle sensor selection change
    const handleSensorChange = (event) => {
        const selectedSensorId = event.target.value;
        setSelectedSensor(selectedSensorId);
        // Filter dummy data for selected sensor
        const filteredData = dummyData.filter(data => data.sensor_id === selectedSensorId);
        setSensorData(filteredData);
    };

    // Load sensor data for default sensor_id on component mount
    useEffect(() => {
        const defaultSensorData = dummyData.filter(data => data.sensor_id === selectedSensor);
        setSensorData(defaultSensorData);
    }, [selectedSensor]);

    return (
        <Grid container spacing={2}>
            {/* Grid item for dropdown and line chart */}
            <Grid item xs={10}>
                <Typography variant="h6">Sensor ID:</Typography>
                <FormControl fullWidth>
                    <InputLabel>Select Sensor</InputLabel>
                    <Select value={selectedSensor} onChange={handleSensorChange}>
                        <MenuItem value={1}>Sensor 1</MenuItem>
                        <MenuItem value={2}>Sensor 2</MenuItem>
                    </Select>
                </FormControl>
                {/* Line chart */}
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={sensorData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date_column" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="data_value" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </Grid>

            {/* Grid item for table */}
            <Grid item xs={12}>
                <Typography variant="h6">Sensor Data Table</Typography>
                {/* Table to display sensor data */}
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Sensor ID</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Data Value</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                    </tr>
                    </thead>
                    <tbody>
                    {sensorData.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.sensor_id}</td>
                            <td>{data.date_column}</td>
                            <td>{data.time_column}</td>
                            <td>{data.data_value}</td>
                            <td>{data.created_at}</td>
                            <td>{data.updated_at}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Grid>
        </Grid>
    );
};

export default Dashboard;