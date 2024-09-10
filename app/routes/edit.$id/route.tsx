import DashboardContainer from "../../global-components/DashboardContainer";
import GoogleMapComponent from "../../global-components/GoogleMapComponent";
import SitePolygons from "../../global-components/SitePolygons";
import DrawPolygon from "./components/DrawPolygon";
import EditDashboard from "./components/EditDashboard";
import {json, LoaderFunction} from "@remix-run/node";
import {GET} from "../../utils/api-utils";
import {useLoaderData, useOutletContext} from "@remix-run/react";
import {AppContextWithApiKey, SiteData} from "../../types";

export const loader: LoaderFunction = async () => {

    const {data, error} = await GET('/api/plotter/sites');

    if (error) {
        return json({error}, {status: 500});
    }

    return json(data);
}
const Index = () => {

    const data = useLoaderData<SiteData>();
    const {googleMapsApiKey} = useOutletContext<AppContextWithApiKey>()

    return (
        <>
            <DashboardContainer>
                <EditDashboard/>
            </DashboardContainer>

            <GoogleMapComponent clickable={true} apiKey={googleMapsApiKey}>
                <SitePolygons siteData={data} colour={"#FF4400FF"}/>
                <DrawPolygon colour={"#7bff00"}/>
            </GoogleMapComponent>
        </>
    )
}

export default Index;