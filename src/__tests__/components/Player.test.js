import React from 'react'
import {shallow} from 'enzyme'

import Player from '../../components/Player'

it('should render the video title', () => {
  const video = { title: 'My Awesome Title' }
  const player = shallow(<Player video={video} />);

  expect(player.contains(<span className='yp-player-title'>{video.title}</span>))
})
