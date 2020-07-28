import React from "react";

import lizard from "../../images/lizard.png";
import scissors from "../../images/scissors.png";
import paper from "../../images/paper.png";
import spock from "../../images/spock.png";
import rock from "../../images/rock.png";
import logo from "../../images/logo.svg";

const computerSelectedImage = (props) => {
  const { computerWeapon } = props;

  return <img id="computerWeaponPicked" src={computerWeapon} alt="Logo" />;
};

export default computerSelectedImage;
