import React, { useEffect, useState } from 'react';
import faq from '../../api/faq.json';
import "../Accordion/index.css"
import { FAQ } from '../UI/FAQ';
const Accordion = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false); // Track active FAQ by ID

  useEffect(() => {
    setData(faq);
  }, []);

  console.log(data);

  const handleToggle = (id) => {
    setActiveId((prevId) => (prevId === id ? false : id));
  };

  return (
    <>
      <h1>The Accordion</h1>
      <ul className="section-accordion">
        {data &&
          data.map((curElem) => {
            const { id } = curElem;
            return (
              <FAQ
                key={id}
                curData={curElem}
                isActive={activeId === id}
                onToggle={() => handleToggle(id)}
              />
            );
          })}
      </ul>
    </>
  );
};

export default Accordion