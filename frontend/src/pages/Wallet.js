import React from 'react'

const Wallet = ({ allFinObj, setAllFinObj }) => {

  console.log(allFinObj)

  return (
    <div>
      {allFinObj && allFinObj.map((ele) =>
        <div key={ele._id}>
          <h2>{ele.name}</h2>

        </div>
      )}
    </div>
  )
}

export default Wallet