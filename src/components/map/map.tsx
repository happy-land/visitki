import React, {FC} from "react";
import styles from "./map.module.css"
import pin from '../../images/map-pin.svg'
import {
	YMaps,
	Map,
	Placemark,
	ZoomControl,
	GeolocationControl,
	SearchControl,
	TypeSelector, TrafficControl, FullscreenControl
} from "@pbe/react-yandex-maps";
import {getProfiles, TProfileResponse} from "../../utils/constants";

type TMapElementProps = {
	data: TProfileResponse
}

export const MapElement: FC<TMapElementProps> = ({data}) => {
	const mapData = {
		center: [55.751574, 37.573856],
		zoom: 5,
	}
	// const [profilesData, setProfilesData] = useState({
	// 	profilesData: null,
	// })
	//
	// useEffect(() => {
	// 	setProfilesData({
	// 		...profilesData,
	// 		profilesData:
	// 	})
	// })

	const profiles = getProfiles(data);

	return (
		<YMaps query={{lang: "ru_RU"}} >
			<Map className={styles.container}
					 defaultState={mapData}
					 modules={['control.ZoomControl']}
			>
				{profiles.map((profile, index) =>
					<Placemark
						key={`${index} - ${profile.city.geocode}`}
						geometry={profile.city.geocode}
						properties={{
							balloonContent: `
								<div class='${styles.balloonContainer}'>
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
								</div>
							`
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
	)
}

