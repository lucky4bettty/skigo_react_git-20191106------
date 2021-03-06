import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OrderList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: '',
    }
  }

  componentWillMount() {
    const timestamp = this.props.orderData.orderTime
    console.log(timestamp)
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
    var a = new Date(timestamp)
    var year = a.getFullYear()
    var month = months[a.getMonth()]
    var date = a.getDate()
    var time = `${date} ${month} ${year}`
    this.setState({ time: time })
  }
  render() {
    return (
      <>
        {console.log(this.props.orderData)}
        <div className="px-5">
          <ul className="user-order-date list-unstyled p-3">
            <li className="px-2 fw-700">訂購日期：{this.state.time}</li>
          </ul>

          <div className="user-order-list py-2 px-2">
            <div className="order-list-status my-3 d-flex align-items-center">
              <span className="col-2 text-right mr-4">狀態</span>
              <span>
                {this.props.orderData.status === 'PROCESSING'
                  ? '處理中'
                  : '錯誤的訂單'}
              </span>
            </div>
            <div className="order-list-number my-3 d-flex align-items-center">
              <span className="col-2 text-right mr-4">訂單編號</span>
              <Link to={`/user/order/${this.props.orderData.orderNo}`}>
                {this.props.orderData.orderNo}
              </Link>
            </div>
            <div className="order-list-status my-3 d-flex align-items-center">
              <span className="col-2 text-right mr-4">總計</span>
              <span>NT$ {this.props.orderData.orderAmt + 300}</span>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default OrderList
