import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const Conversation = props => {
	return (
		<Accordion allowZeroExpanded={true}>
			{
				props.conversation.map((message, i) => (
					<AccordionItem key={i}>
						<AccordionItemHeading>
							<AccordionItemButton>
								{message.author.name}
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								{message.content}
							</p>
						</AccordionItemPanel>
					</AccordionItem>
				))
			}
		</Accordion>	
	)
}

export default Conversation;
