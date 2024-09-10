import {useOutletContext} from "@remix-run/react";
import {AppContextType} from "../../../types";

const EditDashboard = () => {

    const { deleteLastCoordinate, clearPolygonCoordinates } = useOutletContext<AppContextType>();

    return (
        <div className={"w-full h-full"}>
            <p>edit page</p>
            <button onClick={() => deleteLastCoordinate()}>back</button>
            <button onClick={() => clearPolygonCoordinates()}>clear</button>
        </div>
    )
}

export default EditDashboard;