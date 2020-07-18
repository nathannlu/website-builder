import React from 'react';
import { useEditor } from '@craftjs/core';
import Navbar from '../Navbar';
import ComponentSelection from '../ComponentSelection';

const Viewport = props => {
	const { connectors } = useEditor();

	return (
		<div>
			<ComponentSelection open={props.open} setOpen={props.setOpen} selectedNode={props.selectedNode} />

			<Navbar saveToDatabase={props.saveToDatabase} />	

			<div className="flex h-full overflow-hidden flex-row w-full">
				<div className="flex-1 h-full">
					<div className="w-full h-full">
						<div 
							id="craftjs-renderer" 
							className="w-full h-full"
							ref={ref => connectors.select(connectors.hover(ref, null), null)}
						>
							<div className="relative flex-col flex items-center pb-8 pt-8">
								<div className="rounded-md shadow-lg overflow-hidden" style={{width: '1200px'}}>
									{props.children}
								</div>
							</div>
							
							<div style={{opacity: .25}} className="pt-4 pb-24 text-center"> 
								<p>Designed for Realtors</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Viewport
