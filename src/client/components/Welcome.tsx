import React from 'react';

type WelcomePropsType = {
  message: string,
    author: string
}

export const Welcome = (porps: WelcomePropsType): JSX.Element => {
  const { message, author } = porps;
  return (
    <div className="welcome">
      <h1> Welcome </h1>
      <h2 className="welcome__message">
        { message }
      </h2>
      <p>
        Create by
        {' '}
        { author }
      </p>
    </div>
  );
};
