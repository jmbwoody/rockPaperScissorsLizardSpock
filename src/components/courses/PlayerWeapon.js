import React from "react";

import lizard from "../../images/lizard.png";
import scissors from "../../images/scissors.png";
import paper from "../../images/paper.png";
import spock from "../../images/spock.png";
import rock from "../../images/rock.png";
import logo from "../../images/logo.svg";

const PlayerWeapon = (props) => {
  const { weapon } = props;
  // console.log('weapon initialized', weapon );
  return <img id="WeaponPicked" src={weapon} alt="Logo" />;
};

export default PlayerWeapon;
