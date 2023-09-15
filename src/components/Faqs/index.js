//  Write your code here.
// import {Component} from 'react'

import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="heading">FAQs</h1>
        <ul className="container">
          {faqsList.map(eachList => (
            <FaqItem key={eachList.id} details={eachList} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
