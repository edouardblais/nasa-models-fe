import Map from 'react-map-gl/maplibre'

import './App.css'
import 'maplibre-gl/dist/maplibre-gl.css'
import MainFloatingBox from './components/MainFloatingBox'

const App = () => {
    return (
        <div>
            <Map
                initialViewState={{
                    longitude: -98.35,
                    latitude: 39.5,
                    zoom: 4,
                }}
                style={{ width: '100vw', height: '100vh' }}
                mapStyle="https://api.maptiler.com/maps/dataviz/style.json?key=6lKsa6bzFsGKREIufiPE"
            />
            <MainFloatingBox />
        </div>
    )
}

export default App
