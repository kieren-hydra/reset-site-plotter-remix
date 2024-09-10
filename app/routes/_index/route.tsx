import {useLoaderData, useOutletContext} from "@remix-run/react";
import { LoaderFunction, json} from "@remix-run/node";

import GoogleMapComponent from "../../global-components/GoogleMapComponent";
import SitePolygons from "../../global-components/SitePolygons";
import DashboardContainer from "../../global-components/DashboardContainer";
import HomeDashboard from "./components/HomeDashboard";
import {GET} from "../../utils/api-utils";
import {AppContextWithApiKey, SiteData} from "../../types";

export const loader : LoaderFunction = async () => {

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
                <HomeDashboard siteData={data}/>
            </DashboardContainer>

            <GoogleMapComponent clickable={false} apiKey={googleMapsApiKey}>
                <SitePolygons siteData={data} colour={"#FF4400FF"}/>
            </GoogleMapComponent>
        </>
    )
}

export default Index;