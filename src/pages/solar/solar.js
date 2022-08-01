import React from 'react';

function Solar(props) {
  return (
    <main>
      <div className="content">
        <h1>{props.name}!</h1>
      </div>
    </main>
  );
}
export const SolarSystem = () => {
  return <Solar name="Solar System" />;
};
export const MilkyWay = () => {
  return <Solar name="Milky Way" />;
};
