import React, { useEffect, useRef, useCallback } from 'react';
import { useNode, useEditor } from '@craftjs/core';
import styled from 'styled-components';
import { default as Move } from '@material-ui/icons/OpenWith';
import { default as ArrowUp } from '@material-ui/icons/ArrowUpward';
import { default as ArrowDown } from '@material-ui/icons/ArrowDownward';
import { default as Delete } from '@material-ui/icons/Delete';
import { Fade, Button } from '@material-ui/core';
import ReactDOM from 'react-dom';
import { ROOT_NODE } from '@craftjs/utils';
import { Container } from '../user/Container';

export const RenderNode = ({ render }, openComponentSelection) => {
	const { actions: {add, move}, query: {createNode, node} } = useEditor();
  const { actions, query, connectors } = useEditor();
  const {
    id,
    isActive,
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
  } = useNode((node) => ({
    isActive: node.events.selected,
    isHover: node.events.hovered,
		deletable: query.node(node.id).isDeletable(),
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    props: node.data.props,
  }));

  const currentRef = useRef();
	const currentNodeIndex = node('ROOT').get().data.nodes.findIndex(arrItem => arrItem == id)

	const moveUp = () => {
		const newIndex = currentNodeIndex - 1

		if(currentNodeIndex > 0) {
			console.log(currentNodeIndex);
			move(id, 'ROOT', newIndex);
		}
	};

	const moveDown = () => {
		const newIndex = currentNodeIndex + 2

		if(currentNodeIndex < node('ROOT').get().data.nodes.length - 1) {
			move(id, 'ROOT', newIndex);
		}	
	}

	// Hover/active selection indicator
  useEffect(() => {
    if (dom) {
      if (isActive || isHover) {
				dom.classList.add('component-selected')
			} else {
				dom.classList.remove('component-selected')
			};
    }
  }, [dom, isActive, isHover]);

	// Get properties of hovered div
  const getPos = useCallback((dom: HTMLElement) => {
    const { top, left, bottom, right } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0, right: 0 };
    return {
      top: `${top}px`,
      left: `${left}px`,
			bottom: `${bottom}px`,
			height: `${bottom - top}px`,
			width: `${right - left}px`
    };
  }, []);

	// Scroll handler 
  const scroll = useCallback(() => {
    const { current: currentDOM } = currentRef;

    if (!currentDOM) return;
    const { top, left } = getPos(dom);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom]);

	// Add scroll event listenr to HTML
  useEffect(() => {
    document.addEventListener('scroll', scroll);

    return () => {
      document.removeEventListener('scroll', scroll);
    };
  }, [scroll]);

  return (
    <>
      {isHover || isActive
        ? ReactDOM.createPortal(
						<Fade in={true}>
							<div
								ref={currentRef}
								className="px-2 py-2 text-white fixed flex items-center"
								style={{
									left: getPos(dom).left,
									top: getPos(dom).top,
									zIndex: 0,
									height: getPos(dom).height,
									width: getPos(dom).width,
								}}
							>
								<div className="absolute bottom-0" style={{zIndex: 5, left: '50%', transform: 'translate(-50%, 50%)'}}>
									<Button variant="contained" color="primary" onClick={() => {
										openComponentSelection(id)
									}}>
										Add a component
									</Button>
								</div>	

								<div className="absolute top-0 right-0 p-6" style={{zIndex: 5}}>
									{currentNodeIndex > 0 && ( 
										<Button
											variant="outlined"
											style={{backgroundColor: 'white'}}
											size="small"
											onClick={() => {
												moveUp();	
											}}
										>
											<ArrowUp />
										</Button>
									)}

									{currentNodeIndex < node('ROOT').get().data.nodes.length - 1 && ( 
										<Button
											variant="outlined"
											style={{backgroundColor: 'white'}}
											size="small"
											onClick={() => {
												moveDown();	
											}}
										>
											<ArrowDown />	
										</Button>
									)}

									{deletable ? (
										<Button
											variant="outlined"
											style={{backgroundColor: 'white'}}
											size="small"
											onMouseDown={(e: React.MouseEvent) => {
												e.stopPropagation();
												actions.delete(id);
											}}
										>
											<Delete />
										</Button>
									) : null}
								</div>
							</div>
						</Fade>,
            document.body
          )
        : null}
      {render}
    </>
  );
};
