import React, {useEffect} from 'react';
import { useEditor } from '@craftjs/core';
import { SettingsPanel } from '../SettingsPanel';
import Navbar from '../Navbar';
import ComponentSelection from '../../../molecules/ComponentSelection';

const Viewport = props => {
	const { connectors } = useEditor();

	return (
		<div>
			<Navbar saveToDatabase={props.saveToDatabase} />	
			<ComponentSelection 
				open={props.open} 
				setOpen={props.setOpen} 
				selectedNode={props.selectedNode}
				setSelectedNode={props.setSelectedNode}
			/>


			<div className="flex h-full overflow-hidden flex-row w-full">
				<SettingsPanel openDrawer={props.openDrawer} setOpenDrawer={props.setOpenDrawer} selectedNode={props.selectedNode} />

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
