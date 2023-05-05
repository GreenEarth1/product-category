import React from 'react';

const CategoryCard = ({ CategoryData }) => {
    console.log(CategoryData);
    return (
        <>
            <section className="main-card--container">
                 {CategoryData.map((curElem) => {

                    const { id, name, image,  description } =curElem;
                return (
                    <> 

                <div className="card-container" key={curElem.id}>
                    <div className="card">
                        <div className="card-body">
                            <span className="card-number card-circle subtle">{id}</span>
                            <span className="card-author subtle">{name}</span>
                            <h3 className="card-title"> {name} </h3>
                            <span className="card-description subtle">
                            {description}
                            </span>
                            <div className="card-read">Read</div>
                        </div>
                        { <img src={image} alt="images" className="card-media" /> }<br></br>

                        <span className="card-tag   subtle">Order now</span>
                    </div>
                </div>

                </> 
                );

                })}

            </section>

        </>
    );
};

export default CategoryCard;