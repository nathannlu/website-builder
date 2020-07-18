import React, { useEffect, useRef, useCallback } from 'react';
import { useNode, useEditor } from '@craftjs/core';
import styled from 'styled-components';
import { default as Move } from '@material-ui/icons/OpenWith';
import { default as ArrowUp } from '@material-ui/icons/ArrowUpward';
import { default as ArrowDown } from '@material-ui/icons/ArrowDownward';
import { default as Delete } from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import ReactDOM from 'react-dom';
import { ROOT_NODE } from '@craftjs/utils';
import { Container } from '../user/Container';

const IndicatorDiv = styled.div`
  height: 30px;
  margin-top: -29px;
  font-size: 12px;
  line-height: 12px;
  svg {
    fill: #fff;
    width: 15px;
    height: 15px;
  }
`;

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

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) {
				dom.classList.add('component-selected')
			} else {
				dom.classList.remove('component-selected')
			};
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback((dom: HTMLElement) => {
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : top}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = useCallback(() => {
    const { current: currentDOM } = currentRef;

    if (!currentDOM) return;
    const { top, left } = getPos(dom);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom]);

  useEffect(() => {
    document
//      .getElementById('craftjs-renderer')
      .addEventListener('scroll', scroll);

    return () => {
      document
//        .getElementById('craftjs-renderer')
        .removeEventListener('scroll', scroll);
    };
  }, [scroll]);

  return (
    <>
      {isHover || isActive
        ? ReactDOM.createPortal(
            <IndicatorDiv
              ref={currentRef}
              className="px-2 py-2 text-white fixed flex items-center"
              style={{
                left: getPos(dom).left,
                top: getPos(dom).top,
								transform: 'translateY(100%)',
                zIndex: 5,
              }}
            >
							<Button variant="contained" color="primary" onClick={() => {
								openComponentSelection(id)
							}}>
								Add a component
							</Button>
					{currentNodeIndex > 0 && ( 
							<Button
								variant="contained"
								color="primary"
								onClick={() => {
									moveUp();	
								}}
							>
								<ArrowUp />
							</Button>
					)}

					{currentNodeIndex < node('ROOT').get().data.nodes.length - 1 && ( 
							<Button
								variant="contained"
								color="primary"
								onClick={() => {
									moveDown();	
								}}
							>
								<ArrowDown />	
							</Button>
					)}

              {deletable ? (
                <Button
									variant="contained"
									color="primary"
                  className="cursor-pointer"
                  onMouseDown={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    actions.delete(id);
                  }}
                >
									<Delete />
                </Button>
              ) : null}
            </IndicatorDiv>,
            document.body
          )
        : null}
      {render}
    </>
  );
};
