import classNames from 'classnames'
import React from 'react'
import Spinner from '../dls/Loading/Spinner'

import './SubmitButton_style.css'

const SubmitButton = ({loading, label}) => {
  return (
    <button 
        disabled={loading} 
        className={classNames('auth-button', {'disable': loading})} 
        type='submit'
    >
        {loading && <Spinner/>}
        <span>{label}</span>
    </button>
  )
}

export default SubmitButton