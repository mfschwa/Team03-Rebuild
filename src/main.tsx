import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import App from './App'

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_30MDJhjDj',      
      userPoolClientId: '4uslrmlurtmufb4l7bdgs5or6e',
    }
  }
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Authenticator
        components={{
          SignUp: {
            FormFields() {
              return (
                <>
                  <Authenticator.SignUp.FormFields />
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      required={true}
                    />
                  </div>
                  <div>
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      required={true}
                    />
                  </div>
                </>
              );
            }
          }
        }}
      >
        <App />
      </Authenticator>
    </BrowserRouter>
  </React.StrictMode>,
)