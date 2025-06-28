import { Col, Row } from 'antd';
import { FC } from 'react';

interface NowPlayingCardProps {
  title: string;
  extra?: any;
  children?: any;
  image?: string;
  subtitle?: string;
  imageTitle?: string;
}

export const NowPlayingCard: FC<NowPlayingCardProps> = (props) => {
  return (
    <div className='playing-now-card'>
      {props.image ? (
        <div
          className='playing-now-card-image'
          style={{
            backgroundImage: `url("${props.image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            aspectRatio: '1 / 1', // Ensures square image, adjust as needed
            position: 'relative',
          }}
        >
          {props.imageTitle && (
            <div
              className='playing-now-card-image-text'
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                background: 'rgba(0,0,0,0.5)',
                color: '#fff',
                padding: '4px 8px',
                boxSizing: 'border-box',
              }}
            >
              <div data-encore-id='text'>
                <div className='zZdI03asKaUCNlbhjDAv'>{props.imageTitle}</div>
              </div>
            </div>
          )}
        </div>
      ) : null}

      <div className='playing-now-card-text'>
        <Row align='middle' justify='space-between'>
          <Col span={props.extra ? 14 : 24}>
            <div
              className='playing-now-card-title'
              style={props.image ? undefined : { marginTop: 10 }}
            >
              {props.title}
            </div>
            <div className='playing-now-card-subtitle'>{props.subtitle}</div>
          </Col>
          {props.extra ? <Col span={10}>{props.extra}</Col> : null}
        </Row>
        {props.children ? <div className='playing-now-card-body'>{props.children}</div> : null}
      </div>
    </div>
  );
};
