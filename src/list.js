import React from 'react';

const List = ({item}) => {
  return (
    <>
      {item.map((person)=>{
        const {id, name, age, image} = person;
        return <article key={id} className="person">
          <img src={"/images/"+image} alt={name}/>
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </article>
      })}
    </>
  );
};

export default List;
