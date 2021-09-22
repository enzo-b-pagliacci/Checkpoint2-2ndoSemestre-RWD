import React from 'react'
import {ElHtml, oBody} from './styled'
import Main from './Components/main/Main'

export default function App() {

   return(
      <oBody>
      <div className="Container">
          <ElHtml>
            <Main/>
          </ElHtml>
      </div>
      </oBody>
)}