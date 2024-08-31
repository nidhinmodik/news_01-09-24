import React from 'react';
import { base_api_url } from '../../config/config';
import Image from 'next/image';

const AdvertisementCard5 = async () => {
    const res = await fetch(`${base_api_url}/api/all/ads`, {
        next: {
            revalidate: 5,
        },
    });
    const { ads } = await res.json();

    const reversedAds = ads.reverse();

    return (
        <main className="bg-white mx-2 my-3 object-fill">
            {reversedAds && reversedAds.length > 0 && (
                <div className="w-full h-[300px] relative object-fill">
                    {reversedAds[5].mediaType === 'image' ? (
                        <Image
                            className="object-fill w-full h-full"
                            layout="fill"
                            src={reversedAds[5].mediaUrl}
                            alt="6th"
                        />
                    ) : reversedAds[5].mediaType === 'video' ? (
                        <video
                            className="object-fill w-full h-full"
                            autoPlay
                            loop
                            muted
                            src={reversedAds[5].mediaUrl}
                            alt="6th"
                        />
                    ) : (
                        <p>No media available</p>
                    )}
                </div>
            )}
        </main>
    );
}

export default AdvertisementCard5;
