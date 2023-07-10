import React from 'react';

const Bio = (props) => {

    const { img, title, text } = props;
    let {id} = props;

    return (
        <div className='container'>

            <div className='description'>

                <div className='description_col'>
                    <img className="bio_img" src={img} alt='imagen del autor cristian fonseca' />
                </div>

                <div className='description_col'>

                    <div className='bio_text mt-5'>
                        <h2 className='description_title text-center'> {title}</h2>
                        {
                            text.map(paragraph => {
                                
                                return <p className='description_text' key={id++}>{paragraph}</p>
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Bio
