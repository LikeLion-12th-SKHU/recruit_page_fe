import './ChannelTalk.css';

const ChannelTalk = () => {
  return (
    <div className="channelTalk">
      <span>채팅상담</span>
      <img
        src={'/recruit_page_fe/channel.svg'}
        onClick={() => window.open('https://pf.kakao.com/_lxmDSG')}
      />
    </div>
  );
};

export default ChannelTalk;
