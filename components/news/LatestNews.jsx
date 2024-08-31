'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import SimpleNewsCard from './items/SimpleNewsCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { base_api_url } from '@/config/config';

// Dynamically import Carousel with SSR disabled
const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });
import 'react-multi-carousel/lib/styles.css';

const LatestNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

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

    const ButtonGroup = ({ next, previous }) => (
        <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
                Latest news
            </div>
            <div className="flex justify-center items-center gap-x-3">
                <button
                    onClick={previous}
                    className="w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200"
                >
                    <FiChevronLeft />
                </button>
                <button
                    onClick={next}
                    className="w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200"
                >
                    <FiChevronRight />
                </button>
            </div>
        </div>
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="w-full flex flex-col-reverse gap-3 pr-0 lg:pr-2">
            {news.length > 0 ? (
                <Carousel
                    autoPlay={true}
                    arrows={false}
                    renderButtonGroupOutside={true}
                    customButtonGroup={<ButtonGroup />}
                    responsive={responsive}
                    infinite={true}
                    transitionDuration={500}
                >
                    {news.map((item, i) => (
                        <SimpleNewsCard item={item} key={i} type="latest" />
                    ))}
                </Carousel>
            ) : (
                <div>No latest news available.</div>
            )}
        </div>
    );
};

export default LatestNews;