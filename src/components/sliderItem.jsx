export const SliderItem = ({ number, title, left, right, items, updateIndex, progressBarWidth }) => {

    return (
        <div className="slider-item" style={{width: '100%'}}>

            <div style={{ width: `${progressBarWidth}%`, height: '10px', borderTop: '10px solid black' }}></div>

            <button onClick={left}>Left</button>
            <button onClick={right}>Right</button>
            <div className="title">{number}</div>
            <div>{title}</div>

            <div className='navigation'>
                {items.map((item, index) => {
                    return (
                        <button onClick={() => {updateIndex(index)}}>{item.navigationTitle}</button>
                    )
                })}
            </div>

        </div>
    )
}