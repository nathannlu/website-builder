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

export default function a() {
	return (
		<Accordion allowZeroExpanded={true}>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>
						What is your 30-day satisfaction guarantee?
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>
						All subscriptions come with a 30-Day 100% Money Back Guarantee.
						Love the service, find it a huge value for you and your business or you can get a 100% full refund for your initial membership fee within 30 days.
						This does not apply for single design requests (without a monthly subscription).
					</p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>
						What does unlimited really mean?
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>
						With a Design Pickle monthly subscription, you can request as many graphics as you’d like and our designers will work on the requests in your queue every business day. If we don’t get it right the first time, then no sweat — revisions are unlimited too. You’re limited in the speed of the requests – as we’re still powered by humans, and not magic AI design robots.
						Need your designs faster? We make it easy to increase your creative output — simply adjust your account in “Company Settings” under “Update My Plan.”	
					</p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>
						Can I design _____?	
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>
						If you have a graphic design need, first ask yourself: Can I reasonably explain or show what I want? If the answer is yes – fantastic! Our scope of service is broad but firmly anchored in graphic design (for now). If you need motion graphics, copywriting or a latte, we, unfortunately, will come up short. Click here to review our full scope of service.
					</p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>
						Who owns the creative work?
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>
						You do!

						All of our work is customized for you and your brand. You have 100% ownership of the files the moment we deliver them to you – which come in the native Adobe formats, JPG, PNG and Adobe PDF format.
					</p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>
						How many revisions can I make?
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>
						You get as many revisions as you need! Just remember, each revision will be treated as a new creative request and may affect the delivery timelines of other pending/active requests.		
					</p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>
						What is the turnaround time?	
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>
						On average, Standard account users receive the first concept or next revision in 1-2 business days. Pro users benefit from real-time communication and faster turnaround times, including same-day concept delivery when possible. The complexity of your request and/or the number of active requests currently in your queue may affect delivery times.
					</p>
				</AccordionItemPanel>
			</AccordionItem>

		</Accordion>
	);
};
