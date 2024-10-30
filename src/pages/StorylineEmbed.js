// StorylineEmbed.js
import React from 'react';

const StorylineEmbed = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src={`${process.env.PUBLIC_URL}/prototype/story.html`}
        title="Articulate Storyline"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};

export default StorylineEmbed;
