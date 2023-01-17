import React, {FC, useEffect, useRef} from "react";
import styles from "./map.module.css"
import pin from '../../images/map-pin.svg'
import {YMaps, Map, Placemark, ZoomControl, useYMaps, GeolocationControl, GeoObject} from "@pbe/react-yandex-maps";
import {getProfiles, testProfilesResponse, TProfileResponse} from "../../utils/constants";
import {BaseGeoObject} from "@pbe/react-yandex-maps/typings/geo-objects/BaseGeoObject";

type TMapElementProps = {
	data: TProfileResponse
}

export const MapElement: FC<TMapElementProps> = ({data}) => {
	const mapData = {
		center: [55.751574, 37.573856],
		zoom: 4,
	}

	const profiles = getProfiles(data);

	return (
		<YMaps >
			<Map className={styles.container}
					 defaultState={mapData}
					 modules={['control.ZoomControl']}
			>
				{profiles.map((profile, index) =>
					<Placemark
						key={`${index} - ${profile.city.geocode}`}
						geometry={profile.city.geocode}
						options={{
							// preset: 'islands#redIcon',
							iconLayout: 'default#image',
							// iconLayout: "default#imageWithContent",
							iconImageHref: pin,
							// hasHint: true,
							// // iconImageSize: [30, 44],
							iconImageOffset: [-18, -38],
							// iconPieChartStrokeStyle: `${profile.name}`,
						}}
						properties={{
							hintContent: `${profile.name}`,
							iconContent: `${profile.name}`,
							iconContentOffset: [-100, 0]
							// iconContentOffset: [-100, -100]
						}}
						modules={
							['geoObject.addon.balloon', 'geoObject.addon.hint']
						}
					/>
				)}
				<ZoomControl
					className={styles.zoomControl}
					options={{
						position: {
							top: 150,
							right: 10
						},
						size: 'small',
					}}
				/>
				<GeolocationControl
					options={{
						position: {
							top: 220,
							right: 10
						}
					}}
				/>
			</Map>
		</YMaps>
	)
}

