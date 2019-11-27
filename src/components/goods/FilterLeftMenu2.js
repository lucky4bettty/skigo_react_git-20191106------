import React from 'react'
import { Accordion, Card } from 'react-bootstrap'

class FilterLeftMenu2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      class1: false,
      class2: false,
      class3: false,
      class4: false,
      class5: false,
      class6: false,
      class7: false,
      class8: false,
      class9: false,
      class10: false,
      class11: false,
      class12: false,
      class13: false,
    }
  }
  // changeNme(newName) {
  //   this.props.partentfc(newName)

  //   console.log("我是Chilren");
  // }

  // checkbox抓取
  changeBox = pos => event => {
    const target = event.target
    const value = target.checked

    // if( this.state.v4 === true ){
    //   this.setState({v5:false})
    //   console.log('v4 is true')

    // }else if(this.state.v5 === true){
    //   this.setState({v4:false})
    //   console.log('v5 is true')
    // }

    const name = 'class' + pos
    this.setState({
      [name]: value,
    })

    this.props.partentfc(pos, value)
  }

  render() {
    return (
      <>
        <Accordion className="left-accordion" defaultActiveKey="0">
          <Card>
            <div className="coach-select">
              <Accordion.Toggle as={Card.Header} eventKey="6">
                <div className="coach-react-item d-flex justify-content-between ">
                  <div>地區</div>
                  <i className="fas fa-angle-up"></i>
                  <i className="fas fa-angle-down"></i>
                </div>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                <input
                  onChange={this.changeBox(1)}
                  type="checkbox"
                  name="class"
                  checked={this.state.class1}
                />
                北海道
                <br />
                <input
                  onChange={this.changeBox(2)}
                  type="checkbox"
                  name="class"
                  checked={this.state.class2}
                />
                青森縣
                <br />
                <input
                  onChange={this.changeBox(3)}
                  type="checkbox"
                  name="class"
                  checked={this.state.class3}
                />
                山形縣
                <br />
                <input
                  onChange={this.changeBox(4)}
                  type="checkbox"
                  name="class"
                  checked={this.state.class4}
                />
                新瀉縣
                <br />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <div className="coach-select">
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <div className="coach-react-item d-flex justify-content-between ">
                  <div>商品</div>
                  <i className="fas fa-angle-up"></i>
                  <i className="fas fa-angle-down"></i>
                </div>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <input
                  onChange={this.changeBox(5)}
                  type="checkbox"
                  name="class"
                  checked={this.state.class5}
                />
                纜車券
                <br />
                <input
                  onChange={this.changeBox(6)}
                  type="checkbox"
                  name="class"
                  checked={this.state.class6}
                />
                租借券
                <br />
                <input
                  onChange={this.changeBox(7)}
                  type="checkbox"
                  name="class"
                  checked={this.state.class7}
                />
                超值套票
                <br />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <div className="coach-select">
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <div className="coach-react-item d-flex justify-content-between">
                  <div>票種</div>
                  <i className="fas fa-angle-up"></i>
                  <i className="fas fa-angle-down"></i>
                </div>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <input
                  onChange={this.changeBox(8)}
                  type="checkbox"
                  name="class_board"
                  checked={this.state.class8}
                />
                一般
                <br />
                <input
                  onChange={this.changeBox(9)}
                  type="checkbox"
                  name="class_board"
                  checked={this.state.class9}
                />
                優待
                <br />
                <input
                  onChange={this.changeBox(10)}
                  type="checkbox"
                  name="class_board"
                  checked={this.state.class10}
                />
                敬老
                <br />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <div className="coach-select">
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <div className="coach-react-item d-flex justify-content-between ">
                  <div>使用天數</div>
                  <i className="fas fa-angle-up"></i>
                  <i className="fas fa-angle-down"></i>
                </div>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <input
                  onChange={this.changeBox(11)}
                  type="checkbox"
                  name="class_language"
                  checked={this.state.class11}
                />{' '}
                一日
                <br />
                <input
                  onChange={this.changeBox(12)}
                  type="checkbox"
                  name="class_language"
                  checked={this.state.class12}
                />{' '}
                二日
                <br />
                <input
                  onChange={this.changeBox(13)}
                  type="checkbox"
                  name="class_language"
                  checked={this.state.class13}
                />{' '}
                三日
                <br />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    )
  }
}

export default FilterLeftMenu2
