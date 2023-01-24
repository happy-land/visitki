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
import {getProfiles, testProfilesResponse, TProfileItem} from "../utils/constants";
import styles from "./map.module.css";
import pin from "../images/map-pin.svg";

type TStateMapPage = {
	data: Array<TProfileItem> | null;
}

export const MapPage: FC = () => {

	const [profilesData, setProfilesData] = useState<TStateMapPage>({
		data: null
	})

	useEffect(() => {
		const profiles = getProfiles(testProfilesResponse);
		setProfilesData({
			...profilesData,
			data: profiles
		})
	}, []);

	const mapData = {
		center: [55.751574, 37.573856],
		zoom: 5,
	}

	return (
		<>
			{profilesData.data &&
				<YMaps query={{lang: "ru_RU", apikey: '7b03e5be-fa74-4659-af5a-b6eb243376e6'}} >
					<Map className={styles.container}
							 defaultState={mapData}
					>
						{profilesData.data.map((profile, index) =>
							<Placemark
								key={`${index} - ${profile.city.geocode}`}
								geometry={profile.city.geocode}
								properties={{
									balloonContent:
										`<div class='${styles.balloonContainer}'>
											<div class='${styles.photoContainer}'>
												<img
													class='${styles.avatar}' 
													src='${profile.photo}'
													alt='avatar'
												/>
											</div>
											<div class='${styles.textContainer}'>
												<p class='${styles.text}'>${profile.name}</p>
												<p class='${styles.text} ${styles.textCaption}'>${profile.city.name}</p> 
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