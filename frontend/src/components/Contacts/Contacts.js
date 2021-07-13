import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

import { Row, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';

const mapState = { center: [51.53, 46.03], zoom: 13 };

class Contacts extends React.Component {
  state = { showMap: true };

  toggleMap() {
    const { showMap } = this.state;
    this.setState({ showMap: !showMap });
  }

  render() {
    const { showMap } = this.state;

    return (

      <div>
        <div className="p-3 bg-secondary my-2 rounded">
          <Row>
            <Col xs="6">
              <Toast>
                <ToastHeader>
                  Контакты
                </ToastHeader>
                <ToastBody>
                  <p >
                    Тел: 8 800 000 000
                  </p>
                  <p>
                    mail: saratov@saratov.ru
                  </p>
                  <p>
                    Адрес: ул. Сакко и Ванцетти д. 00, Саратов, Россия
                  </p>
                </ToastBody>
              </Toast>
            </Col>
          </Row>
        </div>
        <YMaps>
          <div id="map-basics">
            {showMap &&
              <Map
                width='1000px'
                height='500px'
                state={mapState} />}
          </div>
        </YMaps>
      </div>
    );
  }
}

export default Contacts;