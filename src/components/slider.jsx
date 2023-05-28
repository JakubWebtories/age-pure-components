import { useState } from 'react';
import { SliderItem } from './sliderItem';

export const Slider = () => {

    const items = [
        {
            number: '01',
            title: 'Dívejte se na svět bez boskvrny',
            subtitle: 'Účinné odmlžení a odmaštění',
            navigationTitle: 'Dioptrické brýle'
        },
        {
            number: '02',
            title: 'Sportovní brýle a přilby',
            subtitle: 'Lorem ipsum',
            navigationTitle: 'Sportovní brýle a přilby'
        },
        {
            number: '03',
            title: 'Pracovní brýle',
            subtitle: 'Lorem ipsum',
            navigationTitle: 'Pracovní brýle'
        },
        {
            number: '04',
            title: 'Test',
            subtitle: 'Lorem ipsum',
            navigationTitle: 'Test'
        }
    ]

    const [activeIndex, setActiveIndex] = useState(0)

    // Navigate - slider left and right
    const left = () => {
        const isFirstSlide = activeIndex === 0
        const newIndex = isFirstSlide ? items.length - 1 : activeIndex - 1
        setActiveIndex(newIndex)
    }

    const right = () => {
        const isLastSlide = activeIndex === items.length - 1
        const newIndex = isLastSlide ? 0 : activeIndex + 1
        setActiveIndex(newIndex)
    }


    // Navigate on specific item
    const updateIndex = (index) => {
        setActiveIndex(index)
    }

    // Count width progress bar 
    const progressBarWidth = 100 / items.length * (activeIndex + 1)
    console.log(progressBarWidth)
    
    return (
        <div className='slider'>
            <div className='inner'
                style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                {items.map((item) => {
                    return (
                        <>
                            <SliderItem 
                                number={item.number}
                                title={item.title}
                                left={left}
                                right={right}
                                items={items}
                                updateIndex={updateIndex}
                                activeIndex={activeIndex}
                                progressBarWidth={progressBarWidth}
                            />
 
                        </>
                    )
                })}

            </div>
        </div>
    )
}