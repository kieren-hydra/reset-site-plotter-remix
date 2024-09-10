import {SiteData} from "../../../types";
import {Link} from "@remix-run/react";

type HomeDashboardProps = {
    siteData: SiteData
}
const HomeDashboard = ({siteData}: HomeDashboardProps) => {

    return (
        <div className={"w-full h-full flex flex-col gap-2"}>
            {
                siteData && siteData.sites.map((site, index) =>
                    <Link key={index} to={`/edit/${site.id}`}>{site.name}</Link>
                )
            }
        </div>
    )
}

export default HomeDashboard;