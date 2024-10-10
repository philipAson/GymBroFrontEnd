import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const WorkoutTable = () => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Workouts</TableCell>
                    <TableCell>Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Leg Day</TableCell>
                    <TableCell>10/10/2021</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Chest Day</TableCell>
                    <TableCell>10/11/2021</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Back Day</TableCell>
                    <TableCell>10/12/2021</TableCell>
                </TableRow>
            </TableBody>    
        </Table>
    </TableContainer>
  )
}

export default WorkoutTable