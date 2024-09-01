'use client';

import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import SimpleNewsCard from './items/SimpleNewsCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { base_api_url } from '@/config/config';

const LatestNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        skipSnaps: false
    });

    const fetchLatestNews = async () => {
        try {
            const response = await fetch(`${base_api_url}/api/latest/news`);
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.statusText}`);
            }
            const data = await response.json();
            setNews(data.news);
        } catch (error) {
            console.error('Error fetching latest news:', error);
            setError('Failed to load latest news.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLatestNews();
    }, []);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="w-full flex flex-col-reverse gap-3 pr-0 lg:pr-2">
            {news.length > 0 ? (
                <div className="relative">
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
                            Latest news
                        </div>
                        <div className="flex justify-center items-center gap-x-3">
                            <button
                                onClick={scrollPrev}
                                className="w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200"
                            >
                                <FiChevronLeft />
                            </button>
                            <button
                                onClick={scrollNext}
                                className="w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200"
                            >
                                <FiChevronRight />
                            </button>
                        </div>
                    </div>
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {news.map((item, i) => (
                                <div className="embla__slide" key={i}>
                                    <SimpleNewsCard item={item} type="latest" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div>No latest news available.</div>
            )}
        </div>
    );
};

export default LatestNews;