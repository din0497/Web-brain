import React from "react";
import Stat from "./Stat";

const Stats = (props) => {
  return (
    <div>
      <Stat num='72' text='Championships' icon='Icon' color='#FF2F5E'/>
      <Stat num= '32' text='Skin' icon='Icon' color='#7947F7'/>
      <Stat num='64' text='Trophies Won' icon='Icon' color='#9BA6B2'/>
    </div>
  );
};

export default Stats;
