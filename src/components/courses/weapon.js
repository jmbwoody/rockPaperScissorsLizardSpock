import React from "react";

const Weapon = (props) => {
  const { weapon } = props;
  // console.log('weapon initialized', weapon );
  return <img id="WeaponPicked" src={weapon} alt="Logo" />;
};

export default Weapon;
