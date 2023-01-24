import {FC} from "react";
import {Map, YMaps} from "@pbe/react-yandex-maps";
import {MapElement} from "../components/map/map";
import {testProfilesResponse} from "../utils/constants";

export const MapPage: FC = () => {
	return (
		<YMaps>
			<MapElement data={testProfilesResponse}/>
		</YMaps>
	)
}