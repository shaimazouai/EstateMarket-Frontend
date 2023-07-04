import React from "react"
import { price } from "../../data/Data"

const PriceCard = () => {
  return (
    <>
      <div className='content flex mtop'>
        {price.map((item, index) => (
          <div className='box shadow' key={index}>
            <div className='topbtn'>
              <button className='btn3'>{item.best}</button>
            </div>
            <h3>{item.plan}</h3>
            <h1>
              <span>$</span>
              {item.price}
            </h1>
            <p>{item.ptext}</p>

            <ul>
              {item.list.map((val) => {
                const { icon, text, change } = val
                return (
                  <li>
                    <label
                      style={{
                        background: change === "color" ? "#dc35451f" : "#ff385c1f",
                        color: change === "color" ? "#dc3848" : "#ff385c",
                      }}
                    >
                      {icon}
                    </label>
                    <p>{text}</p>
                  </li>
                )
              })}
            </ul>
            <button
              className='btn5'
              style={{
                background: item.plan === "Standard" ? "#ff385c" : "#fff",
                color: item.plan === "Standard" ? "#fff" : "#ff385c",
              }}
            >
              Start {item.plan}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default PriceCard
