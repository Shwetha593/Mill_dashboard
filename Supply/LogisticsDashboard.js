import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import './LogisticsDashboard.css'; 
// Optional: if you move styles to CSS file

const LogisticsDashboard = () => {

    delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})
useEffect(() => {
  if (document.getElementById('map') && !document.getElementById('map')._leaflet_id) {
    const map = L.map('map').setView([28.6448, 77.216721], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const pointA = L.latLng(28.6448, 77.216721); // Delhi
    const pointB = L.latLng(26.9124, 75.7873);   // Jaipur
    const pointC = L.latLng(22.5726, 88.3639);   // Kolkata

    const route = L.polyline([pointA, pointB, pointC], {
      color: 'green',
      weight: 4,
      opacity: 0.7,
      dashArray: '5,10'
    }).addTo(map);

    L.marker(pointA).bindPopup('Delhi').addTo(map);
    L.marker(pointB).bindPopup('Jaipur').addTo(map);
    L.marker(pointC).bindPopup('Kolkata').addTo(map);

    map.fitBounds(route.getBounds());
  }
}, []);

  return (
    <div className="container1">
      <div className="header">
        <img src="https://img.icons8.com/ios-filled/50/000000/shipped.png" alt="icon" />
        <span>Logistics & Transportation</span>
      </div>

      <button className="btn">Plan Route</button>

      <div className="map-section">
        <div id="map"></div>

        <div className="stats1">
          <div className="card22">
            <div className="card-title">Fleet Status</div>
            <div className="card-value">15/18 Active</div>
            <div className="card-sub">3 in maintenance</div>
          </div>

          <div className="card22">
            <div className="card-title">Active Routes</div>
            <div className="card-value">10</div>
            <div className="card-sub">1,800 L in transit</div>
          </div>

          <div className="card22">
            <div className="card-title">Fuel Efficiency</div>
            <div className="card-value">12.5 km/L</div>
            <div className="card-sub">↑ 0.8 km/L</div>
          </div>

          <div className="card22">
            <div className="card-title">Cold Chain</div>
            <div className="card-value">100% Compliant</div>
            <div className="card-sub">All vehicles at 3°C</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsDashboard;