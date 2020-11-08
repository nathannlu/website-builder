import React from 'react';

const Success = () => {
	return (
		<div>
			<h1>
				Check your email
			</h1>
			<p>
				We’ve sent a message to extremefuzziness@hotmail.com with a link to activate your account.
			</p>

			<h3>
				Didn't get an email?
			</h3>
			<p>
				if you don’t see an email from us within a few minutes, a few things could have happened:
			</p>
			<li>
				The email is in your spam folder. (Sometimes things get lost in there.)
			</li>
			<li>
				The email address you entered had a mistake or typo. (Happens to the best of us.)
			</li>
			<li>
				You accidentally gave us another email address. (Usually a work or personal one instead of the one you meant.)
			</li>
			<li>
				We can’t deliver the email to this address. (Usually because of corporate firewalls or filtering.)
			</li>

			<a>Re-enter your email and try again</a>
		</div>
	)
};

export default Success;
