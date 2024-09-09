type DashboardProps = {
  polygonCoordinates: { lat: number; lng: number }[];
  clearPolygonCoordinates: () => void;
  deleteLastCoordinate: () => void
};

const Dashboard = ({
  polygonCoordinates,
  clearPolygonCoordinates,
  deleteLastCoordinate
}: DashboardProps) => {
  return (
    <div className="w-80 h-full bg-slate-400">
      {polygonCoordinates &&
        polygonCoordinates.length > 0 &&
        polygonCoordinates.map((point, index) => {
          return (
            <div key={index}>
              <p>{point.lat}</p>
              <p>{point.lng}</p>
            </div>
          );
        })}

      <button onClick={() => deleteLastCoordinate()}>back</button>
      <button onClick={() => clearPolygonCoordinates()}>clear</button>
    </div>
  );
};

export default Dashboard;
