import { Box, Button } from '@mui/material'

const MainFloatingBox = () => {
    const fetchData = async () => {
        try {
            const response = await fetch(
                'http://localhost:3000/hls-sentinel-2?west=-119.7&south=37.1&east=-119.5&north=37.4'
            )
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json()
            console.log('GeoTIFF Links:', data)
        } catch (error) {
            console.error('Failed to fetch HLS data:', error)
        }
    }

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 10,
                left: 10,
                backgroundColor: 'white',
                p: 1,
                borderRadius: 1,
                boxShadow: 1,
                zIndex: 1,
            }}
        >
            <Button variant="contained" color="primary" onClick={fetchData}>
                Get HLS Data
            </Button>
        </Box>
    )
}

export default MainFloatingBox
