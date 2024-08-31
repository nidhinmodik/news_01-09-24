import React from 'react'
import { base_api_url } from '../../config/config';
import Image from 'next/image';

const AdvertisementCard = async() => {
    const res = await fetch(`${base_api_url}/api/all/ads`, {
        next: {
            revalidate: 1,
        },
    });
    const { ads } = await res.json();

    const reversedAds = ads.reverse();

    return (
        <main className=" bg-white mx-2 my-3 object-fill">
            {reversedAds && reversedAds.length > 0 && (
                <div className="w-full h-[300px] relative object-fill">
                    {reversedAds[1].mediaType === 'image' ? (
                        <Image
                            className="object-fill w-full h-full"
                            src={reversedAds[1].mediaUrl}
                            alt="2nd"
                        />
                    ) : reversedAds[1].mediaType === 'video' ? (
                        <video
                            className="object-fill w-full h-full"
                            autoPlay
                            loop
                            muted
                            src={reversedAds[1].mediaUrl}
                            alt="2nd"
                        />
                    ) : (
                        <p>No media available</p>
                    )}
                </div>
            )}
        </main>
    );
}

export default AdvertisementCard