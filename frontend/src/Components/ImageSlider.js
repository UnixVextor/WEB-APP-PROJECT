import React from "react";
import { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { RxDotFilled } from 'react-icons/rx';

function ImageSlider() {
    const slides = [
        {
            url: 'https://www.shutterstock.com/image-photo/thai-food-green-curry-chicken-600w-614654369.jpg',
        },
        {
            url: 'https://www.shutterstock.com/image-photo/stir-fry-noodles-vegetables-shrimps-600w-1080504425.jpg',
        },
        {
            url: 'https://www.shutterstock.com/image-photo/take-away-healthy-asian-vietnamese-600w-1649961247.jpg',
        },
        {
            url: 'https://www.shutterstock.com/image-photo/noodles-vegetables-frying-pan-asian-600w-754703101.jpg',
        },
        {
            url: 'https://www.shutterstock.com/image-photo/antipasto-burrata-cheese-tomatoes-basil-600w-2278911851.jpg',
        },
        {
            url: 'https://www.shutterstock.com/image-photo/spaghetti-seafood-pasta-clams-prawns-600w-1337137790.jpg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };


    return (
        <div class='group relative max-w-[640px] h-[360px] w-full m-auto py-4 px-4 '>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                class='w-full h-full rounded-2xl bg-center bg-cover duration-200'
            ></div>

            {/* Left Arrow */}
            <div class='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <FiArrowLeft class="w-10 h-auto" onClick={prevSlide} />
            </div>
            {/* Right Arrow */}
            <div class='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <FiArrowRight class="w-10 h-auto" onClick={nextSlide} />
            </div>

            <div class='flex top-4 justify-center py-2 gap-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        class='text-2xl cursor-pointer'
                    >
                        <RxDotFilled class="rounded-full bg-[#ECD8A5] p-2 text-base font-medium text-white transition duration-100 hover:bg-[#E3C67B] active:bg-orange-200" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider