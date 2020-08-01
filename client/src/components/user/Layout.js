import React  from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import {useNode, Element} from '@craftjs/core';

export const WidthHalf = ({background, padding = 0, children}) => {
	const { connectors: {connect,drag} } = useNode();
  return (
    <div className="w-1/2 h-full" ref={ref => connect(drag(ref)) } style={{background, minHeight: '48px', padding: `${padding}px`}}>
      {children}
    </div>
  )
}

export const WidthFull = ({background, padding = 0, children }) => {
	const { connectors: {connect, drag} } = useNode();	

	return (
		<div className="w-full h-full bg-blue-500" ref={ref => connect(drag(ref)) } style={{background, minHeight: '48px', padding: `${padding}px`}}>
			{children}
		</div>
	)
};

export const Layout = ({background, padding = 0}) => {
	return (
		<div className="flex flex-wrap" style={{background, padding}}>
			<Element background="green" is={WidthHalf} canvas> 
			</Element>
			<Element background="orange"is={WidthHalf} canvas> 
			</Element>
		</div>
	)
};

