import React from 'react'
import './button.css'

export default function Button() {
    return (
        <div className='pt-6'>
                <button className="button button--piyo">
                    
                    <div className="button__wrapper">
                        <span className="button__text">Buy now</span>
                    </div>

                    <div className="characterBox">
                        <div className="character wakeup">
                            <div className="character__face"></div>
                        </div>
                        <div className="character wakeup">
                            <div className="character__face"></div>
                        </div>
                        <div className="character">
                            <div className="character__face"></div>
                        </div>
                    </div>

                </button>
        </div>
    )
}
