import React, { useEffect, useState, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useNode, useEditor } from '@craftjs/core';
import { ROOT_NODE } from '@craftjs/utils';
import { Container } from '../../user/Container';


import { default as Move } from '@material-ui/icons/OpenWith';
import { default as ArrowUp } from '@material-ui/icons/ArrowUpward';
import { default as ArrowDown } from '@material-ui/icons/ArrowDownward';
import { default as Delete } from '@material-ui/icons/Delete';
import { Fade, Button } from '@material-ui/core';


export const RenderNode = ({ render }, openComponentSelection, openComponentEditor) => {
	const { actions: {add, move}, query: {createNode, node}, connectors: {select} } = useEditor();

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
									<button 
										className="btn-sm btn-primary"
										onClick={() => {
											openComponentSelection(id);
										}}
									>
										<FontAwesomeIcon className="mr-2" icon={['fas','plus']} />
										Add a component
									</button>
								</div>	

								<div className="absolute top-0 right-0 p-6" style={{zIndex: 5}}>
									{deletable ? (
										<button
											className="btn-sm border bg-white text-black mr-4"
											onMouseDown={(e: React.MouseEvent) => {
												e.stopPropagation();
												actions.delete(id);
											}}
										>

											<FontAwesomeIcon icon={['far','trash-alt']} />
										</button>
									) : null}


									{currentNodeIndex > 0 && ( 
										<button
											className="btn-sm border bg-white text-black"
											onClick={() => {
												moveUp();
												actions.selectNode(null);
											}}
										>
											<FontAwesomeIcon icon={['fas','arrow-up']} />
										</button>
									)}

									{currentNodeIndex < node('ROOT').get().data.nodes.length - 1 && ( 
										<button
											className="btn-sm border bg-white text-black"
											onClick={() => {
												moveDown();
												actions.selectNode(null);
											}}
										>
											<FontAwesomeIcon icon={['fas','arrow-down']} />
										</button>
									)}


									<button
										ref={ref=>select(ref, id)}
										className="btn-sm btn-primary ml-4"
										onClick={() => {
											openComponentEditor(id)
										}}
									>
										<FontAwesomeIcon className="mr-2" icon={['far','edit']} />
										Edit component
									</button>

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
