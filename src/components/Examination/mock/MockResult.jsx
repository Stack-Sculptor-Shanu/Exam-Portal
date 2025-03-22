import React from 'react'

const MockResult = () => {
  return (
    <div>
      <h1>result</h1>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Mock Test Result</h1>
        <div className="text-lg">
          <p className="mb-2">Total Questions: 5</p>
          <p className="mb-2">Answered: <span className="font-semibold">25</span></p>
          <p className="mb-2 text-red-500">Wrong Answers: <span className="font-semibold"> 12</span></p>
          <p className="mb-2 text-green-500">Right Answers: <span className="font-semibold">MK</span></p>
          {/* <p className="mt-4 font-bold text-xl">
            Score: <span className="text-blue-600">{((rightAnswers / totalQuestions) * 100).toFixed(2)}%</span>
          </p> */}
        </div>
            
            <button className='px-4 py-2 bg-green-500 text-white rounded-lg' >OKEY</button>
      </div>
    </div>



      
    </div>
  )
}

export default MockResult