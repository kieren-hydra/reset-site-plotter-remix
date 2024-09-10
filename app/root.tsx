import {
    Links,
    Meta,
    Outlet,
    Scripts, useLoaderData,
} from "@remix-run/react";
import "./tailwind.css";

import useCreateContext from "./hooks/useCreateContext";
import { AppContextType } from "./types";
import {json, LoaderFunction} from "@remix-run/node";

type AppLoaderData = {
    googleMapsApiKey: string;
};

export const loader: LoaderFunction = async () => {
    const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

    if (!googleMapsApiKey) {
        throw new Response('Google Maps API Key not found', { status: 500 });
    }

    return json({ googleMapsApiKey });
};

export function Layout({children}: { children: React.ReactNode }) {

    return (
        <html>
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body className={"flex flex-row h-screen"}>
        {children}
        <Scripts/>
        </body>
        </html>
    );
}

export default function App() {

    const appContext = useCreateContext();

    const { googleMapsApiKey } = useLoaderData<{ googleMapsApiKey: string }>();

    const context = {
        ...appContext,
        googleMapsApiKey
    }

    return (
        <Outlet context={context satisfies AppContextType & AppLoaderData}/>
    );
}