import React from "react";
import Action from "../../types/Action";
import State from "../../types/State";


export interface Context {
  state:State,
  dispatch:React.Dispatch<Action>
}
