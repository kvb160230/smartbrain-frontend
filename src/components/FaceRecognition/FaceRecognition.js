import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img
                    alt=''
                    id='inputImage'
                    src={imageUrl}
                    width='500px'
                    height='auto'
                />
                {
                    box.map((eachBox, i) => {
                        const { topRow, rightCol, bottomRow, leftCol } = eachBox;
                        return (
                            <div 
                                className='bounding-box'
                                style={{top: topRow, right: rightCol, bottom: bottomRow, left: leftCol}}
                            >
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FaceRecognition;