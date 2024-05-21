import React from 'react';

const serializer = {
  types: {
    hr: ({ node }) => {
      const { style } = node;
      return <hr className={`hr-${style}`} />;
    },
  },
};

export default serializer;