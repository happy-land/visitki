import React, {FC, useEffect, useState} from "react";
import {
	FullscreenControl,
	GeolocationControl,
	Map,
	Placemark,
	SearchControl, TrafficControl,
	TypeSelector,
	YMaps,
	ZoomControl
} from "@pbe/react-yandex-maps";
import styles from "./map.module.css";
import pin from "../images/map-pin.svg";
import {TStateMapPage} from "../types/types";
import {api} from "../api/Api";


export const MapPage: FC = () => {

	const [profilesData, setProfilesData] = useState<TStateMapPage>({
		dataArr: null
	})

	useEffect(() => {
		api.getCohortData().then((data) => {
			const profiles = data.items.map(item => item.profile);
			setProfilesData({
				...profilesData,
				dataArr: profiles
			})
		})
	}, []);

	const mapData = {
		center: [55.751574, 37.573856],
		zoom: 7,
	}

	return (
		<>
			{profilesData.dataArr &&
				<YMaps query={{lang: "ru_RU", apikey: '7b03e5be-fa74-4659-af5a-b6eb243376e6'}} >
					<Map className={styles.container}
							 defaultState={mapData}
					>
						{profilesData.dataArr.map((item, index) =>
							<Placemark
								key={`${index} - ${item.city.geocode}`}
								geometry={item.city.geocode}
								properties={{
									balloonContent:
										`<div class='${styles.balloonContainer}'>
											<div class='${styles.photoContainer}'>
												<img
													class='${styles.avatar}' 
													src='${item.photo}'
													alt='avatar'
												/>
											</div>
											<div class='${styles.textContainer}'>
												<p class='${styles.text}'>${item.name}</p>
												<p class='${styles.text} ${styles.textCaption}'>${item.city.name}</p> 
											</div>
										</div>`
								}}
								options={{
									iconLayout: 'default#image',
									iconImageHref: pin,
									iconImageSize: [60, 80],
									iconImageOffset: [-30, -70],
									hideIconOnBalloonOpen: false,
									balloonAutoPanCheckZoomRange: true,
									balloonCloseButton: false,
									balloonOffset: [81, 3],
								}}
								modules={
									['geoObject.addon.balloon']
								}
							/>
						)}
						<ZoomControl
							options={{
								size: 'small',
							}}
						/>
						<GeolocationControl />
						<SearchControl />
						<TypeSelector />
						<TrafficControl />
						<FullscreenControl />
					</Map>
				</YMaps>
			}
		</>
	)
}